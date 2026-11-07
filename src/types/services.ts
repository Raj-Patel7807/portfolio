export interface ServiceResponse<T> {
    data: T | null;
    error: string | null;
    status: 'idle' | 'loading' | 'success' | 'error';
    timestamp?: number;
}

export interface GitHubStats {
    username: string;
    publicRepos: number;
    followers: number;
    totalStars?: number;
    contributionsLastYear?: number;
    topLanguages?: { name: string; percentage: number }[];
}

export interface CodeforcesStats {
    handle: string;
    rating: number;
    maxRating: number;
    rank: string;
    maxRank: string;
    contribution: number;
    problemsSolved?: number;
}

export interface StatsServiceOptions {
    timeoutMs?: number;
    cacheTtlMs?: number;
    forceRefresh?: boolean;
}
