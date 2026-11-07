import { experience } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import './Roles.css';

export function Roles() {
    return (
        <section id="experience" className="section">
            <div className="section-head">
                <DisplayHeading>Roles</DisplayHeading>
            </div>
            <div className="rule-top">
                {experience.map(e => (
                    <div key={e.org} data-reveal="" className="roles__item">
                        <div>
                            <div className="mono-label">
                                {e.when} · {e.where}
                            </div>
                            <h3 className="roles__org">{e.org}</h3>
                            <div className="roles__role">{e.role}</div>
                        </div>
                        <ul className="arrow-list roles__bullets">
                            {e.bullets.map(b => (
                                <li key={b} className="arrow-row">
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
