import { positionsOfResponsibility } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import { formatRichText } from './RichText';
import './Roles.css';

export function Responsibility() {
    if (!positionsOfResponsibility || positionsOfResponsibility.length === 0) return null;

    return (
        <section id="por" className="section">
            <div className="section-head">
                <DisplayHeading>Responsibility</DisplayHeading>
                <div data-reveal="" className="mono-label">
                    Leadership & Mentorship
                </div>
            </div>

            <div className="rule-top">
                <div className="roles__list">
                    {positionsOfResponsibility.map(e => (
                        <div key={e.org} data-reveal="" data-cursor="POR" className="roles__item">
                            <div className="roles__header">
                                <div className="mono-label roles__meta">
                                    <span>{e.when}</span>
                                    <span>·</span>
                                    <span>{e.where}</span>
                                </div>
                                <h3 className="roles__org">{formatRichText(e.org)}</h3>
                                <div className="roles__role">{formatRichText(e.role)}</div>
                            </div>

                            <ul className="arrow-list roles__bullets">
                                {e.bullets.map((b, bIdx) => (
                                    <li key={bIdx} className="arrow-row">
                                        <span className="arrow-text">{formatRichText(b)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
