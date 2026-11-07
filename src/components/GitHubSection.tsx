import { githubFallback, profile } from '../data/content';
import { toRepoCards, type GitHubStats } from '../hooks/useLiveStats';
import { DisplayHeading } from './DisplayHeading';
import './GitHubSection.css';

export function GitHubSection({ github }: { github: GitHubStats | null }) {
    const stats = github ?? githubFallback;
    const repos = github?.repos ?? toRepoCards();
    const { user, url } = profile.github;

    return (
        <section id="github" className="section">
            <div className="section-head section-head--tight">
                <DisplayHeading>GitHub</DisplayHeading>
                <div data-reveal="" className="gh__counts">
                    <div>
                        <div className="gh__count-value">{stats.publicRepos}</div>
                        <div className="gh__count-label">public repos</div>
                    </div>
                    <div>
                        <div className="gh__count-value">{stats.followers}</div>
                        <div className="gh__count-label">followers</div>
                    </div>
                </div>
            </div>

            <div data-reveal="" className="gh__chart">
                <div className="gh__chart-head">
                    <span>Contributions, last 12 months</span>
                    <a href={url} target="_blank" rel="noreferrer">
                        @{user} ↗
                    </a>
                </div>
                <img
                    src={`https://ghchart.rshah.org/8B5CF6/${user}`}
                    alt={`GitHub contribution chart for ${user}`}
                    loading="lazy"
                />
            </div>

            <div className="gh__repos">
                {repos.map(r => (
                    <a
                        key={r.name}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        data-reveal=""
                        className="gh__repo"
                    >
                        <div className="gh__repo-head">
                            <span className="gh__repo-name">{r.name}</span>
                            <span className="gh__repo-stars">★ {r.stars}</span>
                        </div>
                        <div className="gh__repo-desc">{r.desc}</div>
                        <div className="gh__repo-foot">
                            <span>{r.lang}</span>
                            <span>{r.updated}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
