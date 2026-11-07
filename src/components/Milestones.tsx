import { useEffect, useRef, useState } from 'react';
import { timeline } from '../data/content';
import { clamp } from '../hooks/motion';
import './Milestones.css';

// Marker position along the field; floored so a top rank stays visible.
const fieldPos = (rank: number, total: number) =>
    `${Math.max(1.2, (rank / total) * 100).toFixed(2)}%`;

// Timeline whose rail fills as you scroll; each year lights up once it passes 55% of the viewport.
export function Milestones() {
    const rootRef = useRef<HTMLDivElement>(null);
    const fillRef = useRef<HTMLDivElement>(null);
    const [activeYear, setActiveYear] = useState(-1);

    useEffect(() => {
        const root = rootRef.current;
        const fill = fillRef.current;
        if (!root || !fill) return;
        let raf = 0;

        const update = () => {
            raf = 0;
            const line = window.innerHeight * 0.55;
            const r = root.getBoundingClientRect();
            fill.style.transform = `scaleY(${clamp((line - r.top) / r.height, 0, 1)})`;
            let act = -1;
            root.querySelectorAll('[data-year]').forEach((el, i) => {
                if (el.getBoundingClientRect().top < line) act = i;
            });
            setActiveYear(act);
        };
        const schedule = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, []);

    return (
        <div id="achievements" ref={rootRef} className="ms">
            <div aria-hidden="true" className="ms__rail">
                <div ref={fillRef} className="ms__fill" />
            </div>

            <div data-reveal="" className="ms__head">
                <h3 className="ms__title">Milestones</h3>
                <div className="mono-label">Marker = where I placed in the field</div>
            </div>

            {timeline.map((y, i) => (
                <div
                    key={y.year}
                    data-year=""
                    className={i <= activeYear ? 'ms__year is-active' : 'ms__year'}
                >
                    <div className="ms__year-side">
                        <div
                            className={
                                /^\d{4}$/.test(y.year)
                                    ? 'ms__year-num'
                                    : 'ms__year-num ms__year-num--word'
                            }
                        >
                            {y.year}
                        </div>
                        <div className="ms__count">
                            {y.items.length} {y.items.length > 1 ? 'milestones' : 'milestone'}
                        </div>
                    </div>

                    <div className="ms__items">
                        {y.items.map(a => (
                            <div key={a.title} data-reveal="" className="ms__item">
                                <div className="ms__info">
                                    <div className="ms__kind">{a.kind}</div>
                                    <h4 className="ms__name">{a.title}</h4>
                                    <div className="ms__detail">{a.detail}</div>
                                    {a.post && (
                                        <div
                                            className={
                                                a.post.image
                                                    ? 'ms__post'
                                                    : 'ms__post ms__post--text'
                                            }
                                        >
                                            {a.post.image && (
                                                <div className="ms__post-shot">
                                                    <img
                                                        className="cover-img"
                                                        src={a.post.image}
                                                        alt={`LinkedIn post: ${a.title}`}
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}
                                            <div className="ms__post-meta">
                                                <span className="ms__post-src">
                                                    <span className="ms__li" aria-hidden="true">
                                                        in
                                                    </span>
                                                    Posted on LinkedIn
                                                </span>
                                                <a
                                                    href={a.post.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="ms__post-link"
                                                >
                                                    Read the post ↗
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="ms__stat-col">
                                    <div className="ms__stat-line">
                                        <span className="ms__stat">{a.stat}</span>
                                        <span className="ms__of">{a.of}</span>
                                    </div>
                                    {a.field && (
                                        <>
                                            <div className="ms__field" aria-hidden="true">
                                                <div className="ms__ticks" />
                                                <div
                                                    data-bar=""
                                                    className="ms__bar"
                                                    style={{
                                                        width: fieldPos(
                                                            a.field.rank,
                                                            a.field.total
                                                        ),
                                                    }}
                                                />
                                                <div
                                                    data-mark=""
                                                    className="ms__mark"
                                                    style={{
                                                        left: fieldPos(a.field.rank, a.field.total),
                                                    }}
                                                />
                                            </div>
                                            <div className="ms__scale">
                                                <span>{a.field.top}</span>
                                                <span>{a.field.label}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
