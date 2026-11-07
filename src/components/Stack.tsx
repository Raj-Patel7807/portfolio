import { skills } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import './Stack.css';

export function Stack() {
    return (
        <section id="stack" className="section">
            <div className="section-head">
                <DisplayHeading>Stack</DisplayHeading>
            </div>
            <ul data-reveal="" className="stack__list">
                {skills.map(s => (
                    <li key={s} className="stack__chip">
                        {s}
                    </li>
                ))}
            </ul>
        </section>
    );
}
