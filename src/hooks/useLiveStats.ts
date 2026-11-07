import { useEffect, useState } from 'react';
import { codeforces, featuredRepos, profile } from '../data/content';

export type CfUser = { rating: number; maxRating: number; rank: string };
export type RepoCard = {
    name: string;
    desc: string;
    lang: string;
    stars: number;
    url: string;
    updated: string;
};
export type GitHubStats = { publicRepos: number; followers: number; repos: RepoCard[] };

type GhUser = { public_repos: number; followers: number };
type GhRepo = {
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    html_url: string;
    pushed_at: string;
};

// Unauthenticated GitHub calls are limited to 60/hour per visitor IP, so responses are cached
// for the browser session.
const TTL_MS = 10 * 60 * 1000;

async function getJson<T>(url: string, signal: AbortSignal): Promise<T> {
    const key = `live:${url}`;
    try {
        const hit = JSON.parse(sessionStorage.getItem(key) ?? 'null');
        if (hit && Date.now() - hit.at < TTL_MS) return hit.data as T;
    } catch {
        // Storage unavailable: fall through to the network.
    }
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    const data = (await res.json()) as T;
    try {
        sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), data }));
    } catch {
        // Quota or privacy mode: skip caching.
    }
    return data;
}

function ago(date: string) {
    const days = Math.floor((Date.now() - new Date(date).getTime()) / 864e5);
    if (days < 1) return 'today';
    if (days < 30) return `${days}d ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
}

// Cards for featuredRepos, overlaid with live data where the API returned the repo.
export function toRepoCards(live: GhRepo[] = []): RepoCard[] {
    const byName = new Map(live.map(r => [r.name.toLowerCase(), r]));
    return featuredRepos.map(f => {
        const r = byName.get(f.repo.toLowerCase());
        return {
            name: f.title,
            desc: f.desc,
            lang: r?.language ?? f.lang,
            stars: r?.stargazers_count ?? f.stars,
            url: r?.html_url ?? `${profile.github.url}/${f.repo}`,
            updated: r ? ago(r.pushed_at) : '',
        };
    });
}

// Live Codeforces rating and GitHub stats. Both stay null on failure so callers use fallbacks.
export function useLiveStats() {
    const [cf, setCf] = useState<CfUser | null>(null);
    const [github, setGithub] = useState<GitHubStats | null>(null);

    useEffect(() => {
        const ctrl = new AbortController();
        const { signal } = ctrl;

        getJson<{ status: string; result?: Partial<CfUser>[] }>(
            `https://codeforces.com/api/user.info?handles=${codeforces.handle}`,
            signal
        )
            .then(j => {
                const u = j.result?.[0];
                if (j.status === 'OK' && u?.rating) {
                    setCf({
                        rating: u.rating,
                        maxRating: u.maxRating ?? u.rating,
                        rank: u.rank ?? '',
                    });
                }
            })
            .catch(() => {});

        const base = `https://api.github.com/users/${profile.github.user}`;
        Promise.all([
            getJson<GhUser>(base, signal),
            getJson<GhRepo[]>(`${base}/repos?per_page=100`, signal),
        ])
            .then(([user, repos]) => {
                setGithub({
                    publicRepos: user.public_repos,
                    followers: user.followers,
                    repos: toRepoCards(repos),
                });
            })
            .catch(() => {});

        return () => ctrl.abort();
    }, []);

    return { cf, github };
}
