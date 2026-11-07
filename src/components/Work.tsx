import { useState } from 'react';
import { projects } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import './Work.css';

// Accordion: hovering, clicking or keyboard-activating a row opens that project.
export function Work() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="work" className="section section--lg">
            <div className="section-head">
                <DisplayHeading>
                    Work<sup>({String(projects.length).padStart(2, '0')})</sup>
                </DisplayHeading>
                <div data-reveal="" className="mono-label work__hint">
                    Hover or tap a project to open it
                </div>
            </div>

            <div className="rule-top" onMouseLeave={() => setActive(null)}>
                {projects.map((p, i) => {
                    const open = i === active;
                    const panelId = `project-${i}`;
                    return (
                        <article
                            key={p.name}
                            data-reveal=""
                            data-cursor={open ? 'Close' : 'Open'}
                            className={open ? 'work__item is-open' : 'work__item'}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => setActive(prev => (prev === i ? null : i))}
                        >
                            <div
                                className="work__row"
                                role="button"
                                tabIndex={0}
                                aria-expanded={open}
                                aria-controls={panelId}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setActive(prev => (prev === i ? null : i));
                                    }
                                }}
                            >
                                <span className="work__num">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="work__name">{p.name}</h3>
                                <div className="work__meta">
                                    <div className="work__kind">{p.kind}</div>
                                    {p.status ? (
                                        <span className="work__status">{p.status}</span>
                                    ) : (
                                        <div className="work__year">{p.year}</div>
                                    )}
                                </div>
                            </div>

                            <div className="work__expand" id={panelId} inert={!open}>
                                <div className="work__expand-inner">
                                    <div className="work__body">
                                        <div className="work__text">
                                            <p className="work__summary">{p.summary}</p>
                                            <div className="work__block">
                                                <h4 className="work__label">What it’s for</h4>
                                                <p>{p.purpose}</p>
                                            </div>
                                            <div className="work__block">
                                                <h4 className="work__label">What it does</h4>
                                                <ul className="arrow-list work__features">
                                                    {p.features.map(f => (
                                                        <li key={f} className="arrow-row">
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="work__block">
                                                <h4 className="work__label">How it’s built</h4>
                                                <p>{p.build}</p>
                                            </div>
                                            <ul className="work__stack" aria-label="Built with">
                                                {p.stack.map(s => (
                                                    <li key={s}>{s}</li>
                                                ))}
                                            </ul>
                                            <div className="work__links">
                                                {p.links.map(l => (
                                                    <a
                                                        key={l.href}
                                                        href={l.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="work__link"
                                                    >
                                                        {l.label} ↗
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        {p.image && (
                                            <div className="work__shot">
                                                <img
                                                    className="cover-img"
                                                    src={p.image}
                                                    alt={`${p.name} screenshot`}
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
