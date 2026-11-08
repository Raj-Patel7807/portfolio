import { education } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import { formatRichText } from './RichText';
import './Education.css';

export function Education() {
    if (!education || education.length === 0) return null;

    return (
        <section id="education" className="section">
            <div className="section-head">
                <DisplayHeading>Education</DisplayHeading>
                <div data-reveal="" className="mono-label">
                    Academic Background & Foundations
                </div>
            </div>
            <div className="edu__cards">
                {education.map((e, idx) => {
                    const isFirst = idx === 0;
                    return (
                        <div
                            key={idx}
                            data-reveal=""
                            className={`edu__card ${isFirst ? 'edu__card--featured' : ''}`}
                            style={{ transitionDelay: `${idx * 0.08}s` }}
                        >
                            <div>
                                <div className="edu__card-header">
                                    <span className="edu__period-badge">{e.period}</span>
                                    <span className="edu__loc">{e.location}</span>
                                </div>
                                <h3 className="edu__inst">{e.institution}</h3>
                                <div className="edu__degree-wrap">
                                    <span className="edu__degree">{e.degree}</span>
                                    {e.field && <span className="edu__field">{e.field}</span>}
                                </div>
                            </div>

                            <div>
                                <div className="edu__score-container">
                                    <div className="edu__score-wrap">
                                        <span className="edu__score-val">{e.score}</span>
                                        <span className="edu__score-type">{e.scoreType}</span>
                                    </div>
                                    {isFirst && <span className="edu__status-tag">Enrolled</span>}
                                </div>

                                {e.highlights && e.highlights.length > 0 && (
                                    <ul className="arrow-list edu__bullets">
                                        {e.highlights.map((h, hIdx) => (
                                            <li key={hIdx} className="arrow-row">
                                                <span className="arrow-text">
                                                    {formatRichText(h)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
