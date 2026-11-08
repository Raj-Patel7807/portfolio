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

            <div className="rule-top">
                <div className="edu__list">
                    {education.map((e, idx) => (
                        <div key={idx} data-reveal="" data-cursor="Education" className="edu__item">
                            <div className="edu__period-col">
                                <span className="edu__period-year">{e.period.split(' - ')[0]}</span>
                                <span className="edu__period-tag">{e.period}</span>
                            </div>

                            <div className="edu__info">
                                <div className="edu__location-tag">{e.location}</div>
                                <h3 className="edu__inst">{e.institution}</h3>
                                <div className="edu__degree">
                                    <span>{e.degree}</span>
                                    {e.field && (
                                        <>
                                            <span style={{ opacity: 0.35 }}>/</span>
                                            <span className="edu__field">{e.field}</span>
                                        </>
                                    )}
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

                            <div className="edu__score-wrap">
                                <span className="edu__score-val">{e.score}</span>
                                <span className="edu__score-type">{e.scoreType}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
