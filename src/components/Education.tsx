import { useState } from 'react';
import { education } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import { formatRichText } from './RichText';
import './Education.css';

export function Education() {
    const [activeIdx, setActiveIdx] = useState<number | null>(0);

    if (!education || education.length === 0) return null;

    return (
        <section id="education" className="section">
            <div className="section-head">
                <DisplayHeading>Education</DisplayHeading>
                <div data-reveal="" className="mono-label">
                    Academic Background & Trajectory
                </div>
            </div>

            <div className="rule-top">
                {education.map((e, idx) => {
                    const isActive = activeIdx === idx;
                    const stepNum = String(idx + 1).padStart(2, '0');

                    return (
                        <div
                            key={idx}
                            data-reveal=""
                            className={`edu__stage ${isActive ? 'is-active' : ''}`}
                        >
                            <div className="edu__bar" />
                            <div
                                className="edu__row"
                                role="button"
                                tabIndex={0}
                                aria-expanded={isActive}
                                onClick={() => setActiveIdx(prev => (prev === idx ? null : idx))}
                                onKeyDown={ev => {
                                    if (ev.key === 'Enter' || ev.key === ' ') {
                                        ev.preventDefault();
                                        setActiveIdx(prev => (prev === idx ? null : idx));
                                    }
                                }}
                            >
                                <span className="edu__step-num">{stepNum}</span>

                                <div className="edu__main-info">
                                    <h3 className="edu__inst">{e.institution}</h3>
                                    <div className="edu__tagline">
                                        <span className="edu__degree-badge">{e.degree}</span>
                                        {e.field && (
                                            <>
                                                <span>/</span>
                                                <span>{e.field}</span>
                                            </>
                                        )}
                                        <span>·</span>
                                        <span>{e.period}</span>
                                    </div>
                                </div>

                                <div className="edu__stat-col">
                                    <span className="edu__stat-val">{e.score}</span>
                                    <span className="edu__stat-type">{e.scoreType}</span>
                                </div>
                            </div>

                            <div className="edu__drawer">
                                <div className="edu__drawer-inner">
                                    <div className="edu__details">
                                        <div className="edu__meta-block">
                                            <span className="edu__meta-title">
                                                Location & Board
                                            </span>
                                            <span className="edu__meta-desc">{e.location}</span>
                                            {e.period && (
                                                <span
                                                    className="edu__meta-desc"
                                                    style={{ opacity: 0.75 }}
                                                >
                                                    Timeline: {e.period}
                                                </span>
                                            )}
                                        </div>

                                        {e.highlights && e.highlights.length > 0 && (
                                            <div className="edu__meta-block">
                                                <span className="edu__meta-title">
                                                    Key Coursework & Highlights
                                                </span>
                                                <ul className="arrow-list edu__highlights">
                                                    {e.highlights.map((h, hIdx) => (
                                                        <li key={hIdx} className="arrow-row">
                                                            <span className="arrow-text">
                                                                {formatRichText(h)}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
