import { exploring, profile } from '../data/content';
import './NowBuilding.css';

export function NowBuilding() {
    return (
        <section className="now" aria-label="What I’m exploring">
            <div data-reveal="" className="now__inner">
                <div>
                    <div className="now__label">
                        <span className="now__dot" />
                        Lately
                    </div>
                    <p className="now__title">
                        {exploring.lead}
                        <br />
                        <span className="now__accent">{exploring.accent}</span>
                    </p>
                </div>
                <a href={profile.github.url} target="_blank" rel="noreferrer" className="now__link">
                    Follow on GitHub ↗
                </a>
            </div>
        </section>
    );
}
