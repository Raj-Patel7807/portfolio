import { codeforces, proof } from '../data/content';
import type { CfUser } from '../hooks/useLiveStats';
import './Proof.css';

export function Proof({ cf }: { cf: CfUser | null }) {
    const rank = cf?.maxRank || codeforces.fallback.maxRank;
    const cfStat = {
        v: String(cf?.maxRating ?? codeforces.fallback.rating),
        l: `Codeforces rating (${rank.charAt(0).toUpperCase()}${rank.slice(1)})`,
    };
    const stats = [...proof.before, cfStat, ...proof.after];

    return (
        <section className="proof" aria-label="Highlights">
            <div className="proof__grid">
                {stats.map((s, i) => (
                    <div
                        key={s.l}
                        data-reveal=""
                        className="proof__cell"
                        style={{ transitionDelay: `${i * 0.06}s` }}
                    >
                        <div className="proof__value">{s.v}</div>
                        <div className="proof__label">{s.l}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
