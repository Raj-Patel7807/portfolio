import {
    // codeforces,
    platforms,
    problemsSolved,
} from '../data/content';
import type { CfUser } from '../hooks/useLiveStats';
import { DisplayHeading } from './DisplayHeading';
import { Milestones } from './Milestones';
import './Scoreboard.css';

// const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function Scoreboard({ cf }: { cf: CfUser | null }) {
    console.log(cf);
    // const live = cf ?? codeforces.fallback;
    const rows = [
        // {
        //     platform: 'Codeforces',
        //     handle: codeforces.handle,
        //     href: codeforces.url,
        //     rating: live.maxRating,
        //     pct: Math.min(100, (live.rating / codeforces.scale) * 100),
        //     title: `${capitalize(live.maxRank)}`,
        //     note: codeforces.note,
        //     isLive: cf !== null,
        // },
        ...platforms.map(p => {
            const numValue = typeof p.value === 'number' ? p.value : parseFloat(p.value) || 0;

            const scale = p.scale ?? 3500;

            return {
                ...p,
                rating: p.valueType === 'rank' ? `#${p.value}` : p.value,
                pct: Math.min(100, (numValue / scale) * 100),
                isLive: false,
            };
        }),
    ];

    return (
        <section id="scoreboard" className="section section--lg">
            <div className="section-head">
                <DisplayHeading>Scoreboard</DisplayHeading>
                <div data-reveal="" className="mono-label">
                    {problemsSolved} problems solved
                </div>
            </div>

            <div className="rule-top">
                {rows.map(r => (
                    <a
                        key={r.platform}
                        href={r.href}
                        target="_blank"
                        rel="noreferrer"
                        data-reveal=""
                        data-cursor="Visit"
                        className="score__row"
                    >
                        <div className="score__info">
                            <div className="score__head">
                                <span className="score__platform">{r.platform}</span>
                                <span
                                    className={
                                        r.isLive ? 'score__tag score__tag--live' : 'score__tag'
                                    }
                                >
                                    {r.isLive ? 'Live' : 'Peak'}
                                </span>
                            </div>
                            <div className="score__meta">
                                {r.title} · {r.note} · @{r.handle}
                            </div>
                            <div className="score__track">
                                <div
                                    data-bar=""
                                    className="score__bar"
                                    style={{ width: `${r.pct}%` }}
                                />
                            </div>
                        </div>
                        <div className="score__rating-wrap">
                            <span className="score__value-label">{r.valueType}</span>
                            <div className="score__rating">
                                {r.valueType === 'rating' ? r.value : `#${r.value}`}
                            </div>
                            {r.valueType === 'rank' ? (
                                <div>out of {r.scale.toLocaleString('en-IN')}</div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </a>
                ))}
            </div>

            <Milestones />
        </section>
    );
}
