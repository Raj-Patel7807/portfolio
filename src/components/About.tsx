import { useEffect, useRef, useState } from 'react';
import { about, profile } from '../data/content';
import { formatRichText } from './RichText';
import './About.css';

export function About() {
    // Initial load starts showing Shinchan first
    const [isFlipped, setIsFlipped] = useState(true);
    const frameRef = useRef<HTMLDivElement>(null);
    const isAnimatingRef = useRef(true);
    const hasTriggeredInitialRef = useRef(false);
    const flipTimerRef = useRef<number | null>(null);

    const easterEgg = about.easterEgg;
    const displayDuration = easterEgg?.displayDurationMs ?? 1500;
    const flipTransition = easterEgg?.flipTransitionMs ?? 600;

    const triggerFlip = () => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        setIsFlipped(true);

        if (flipTimerRef.current !== null) {
            window.clearTimeout(flipTimerRef.current);
        }

        // Reveal Easter egg for configured duration, then flip back
        flipTimerRef.current = window.setTimeout(() => {
            setIsFlipped(false);
            // Allow animation to complete before unlocking clicks
            flipTimerRef.current = window.setTimeout(() => {
                isAnimatingRef.current = false;
                flipTimerRef.current = null;
            }, flipTransition);
        }, displayDuration);
    };

    useEffect(() => {
        const frameEl = frameRef.current;
        if (!frameEl) return;

        if (!('IntersectionObserver' in window)) {
            setIsFlipped(false);
            isAnimatingRef.current = false;
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasTriggeredInitialRef.current) {
                        hasTriggeredInitialRef.current = true;
                        observer.unobserve(entry.target);

                        // User first scrolls into About section: Shinchan is visible first,
                        // then after the duration it flips to reveal your portrait!
                        flipTimerRef.current = window.setTimeout(() => {
                            setIsFlipped(false);
                            flipTimerRef.current = window.setTimeout(() => {
                                isAnimatingRef.current = false;
                                flipTimerRef.current = null;
                            }, flipTransition);
                        }, displayDuration);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(frameEl);

        return () => {
            observer.disconnect();
            if (flipTimerRef.current !== null) {
                window.clearTimeout(flipTimerRef.current);
            }
        };
    }, [displayDuration, flipTransition]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerFlip();
        }
    };

    return (
        <section id="about" className="section">
            <div className="about__grid">
                <div className="about__col-photo">
                    <div data-reveal="" className="about__photo">
                        <div aria-hidden="true" className="about__shadow" />
                        <div
                            ref={frameRef}
                            className={`about__frame${isFlipped ? ' is-flipped' : ''}`}
                            style={{ '--flip-duration': `${flipTransition}ms` } as React.CSSProperties}
                            role="button"
                            tabIndex={0}
                            aria-label={`Profile picture of ${profile.name}. Click to flip.`}
                            // data-cursor="Flip ↻"
                            onClick={triggerFlip}
                            onKeyDown={handleKeyDown}
                        >
                            <div className="about__flipper">
                                <div className="about__face about__face--front">
                                    {profile.portrait && (
                                        <img
                                            className="cover-img"
                                            src={profile.portrait}
                                            alt={`Portrait of ${profile.name}`}
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                                <div className="about__face about__face--back">
                                    <img
                                        className="about__shinchan-img"
                                        src={easterEgg?.image ?? '/images/Shinchan.jpg'}
                                        alt={easterEgg?.alt ?? 'Shinchan easter egg'}
                                        loading="lazy"
                                    />
                                    {easterEgg?.tag && (
                                        <div className="about__shinchan-tag">
                                            <span>{easterEgg.tag}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Subtle tap/click prompt tag on desktop/touch */}
                            <div className="about__hint" aria-hidden="true">
                                <span>Click to flip ↻</span>
                            </div>
                        </div>
                        <div
                            aria-hidden="true"
                            className={`about__badge${isFlipped ? ' is-flipped-badge' : ''}`}
                        >
                            <svg viewBox="0 0 120 120">
                                <defs>
                                    <path
                                        id="about-ring"
                                        d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0"
                                    />
                                </defs>
                                <text fontSize="10.5" letterSpacing="2.6">
                                    <textPath href="#about-ring">
                                        {isFlipped ? (easterEgg?.badge ?? about.badge) : about.badge}
                                    </textPath>
                                </text>
                            </svg>
                            <span className="about__badge-year">
                                {isFlipped
                                    ? (easterEgg?.badgeCenter ?? about.badgeCenter ?? 'SWE')
                                    : (about.badgeCenter ?? 'SWE')}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="about__text">
                    <div data-reveal="" className="about__label">
                        About
                    </div>
                    <h2 data-reveal="" className="about__headline">
                        {about.headline} <br></br> <span>{about.headlineAccent}</span>
                    </h2>
                    <div data-reveal="" className="about__body">
                        {about.body.map(para => (
                            <p key={para}>{formatRichText(para)}</p>
                        ))}
                    </div>
                    <div data-reveal="" className="about__stats">
                        {about.stats.map(s => (
                            <div key={s.l} className="about__stat">
                                <div className="about__stat-value">{s.v}</div>
                                <div className="about__stat-label">{s.l}</div>
                            </div>
                        ))}
                    </div>
                    <div data-reveal="">
                        <div className="about__now-label">Right now</div>
                        <ul className="arrow-list">
                            {about.now.map(w => (
                                <li key={w} className="arrow-row about__now-item">
                                    {w}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
