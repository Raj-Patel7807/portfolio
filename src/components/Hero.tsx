import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { prefersReducedMotion } from '../hooks/motion';
import { MeshCanvas } from './MeshCanvas';
import './Hero.css';

const delay = (i: number) => ({ transitionDelay: `${(i * 0.035).toFixed(2)}s` });

const TAGLINE_PHRASES = ['Software.', 'APIs.', 'Contest Problems.', 'Backend Systems.'];

// Typewriter timings (ms)
const TYPE_SPEED = 65;
const DELETE_SPEED = 38;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 420;

export function Hero() {
    const meshRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);

    // Typewriter state
    const [displayed, setDisplayed] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    // Typewriter engine — respects reduced-motion
    useEffect(() => {
        if (prefersReducedMotion()) {
            // Static fallback: just show first phrase, no cursor
            setDisplayed(TAGLINE_PHRASES[0]);
            setShowCursor(false);
            return;
        }

        const phrase = TAGLINE_PHRASES[phraseIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting) {
            if (displayed.length < phrase.length) {
                // Still typing
                timeout = setTimeout(() => {
                    setDisplayed(phrase.slice(0, displayed.length + 1));
                }, TYPE_SPEED);
            } else {
                // Fully typed — pause then start deleting
                timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
            }
        } else {
            if (displayed.length > 0) {
                // Still deleting
                timeout = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1));
                }, DELETE_SPEED);
            } else {
                // Fully deleted — move to next phrase after a brief pause
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setPhraseIndex(prev => (prev + 1) % TAGLINE_PHRASES.length);
                }, PAUSE_AFTER_DELETE);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, phraseIndex, isDeleting]);

    // Dynamic mouse parallax tilt on the headline + scroll parallax
    useEffect(() => {
        if (prefersReducedMotion()) return;

        let raf = 0;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const onPointerMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            targetX = (e.clientX / innerWidth - 0.5) * 12; // subtle max 12px shift
            targetY = (e.clientY / innerHeight - 0.5) * 8;
        };

        const update = () => {
            raf = 0;
            const y = window.scrollY;
            const vh = window.innerHeight;

            // Smooth interpolation for mouse follow
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;

            if (nameRef.current) {
                nameRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }

            if (y <= vh * 1.3) {
                if (centerRef.current) {
                    centerRef.current.style.transform = `translate3d(0, ${y * 0.32}px, 0)`;
                    centerRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.85)));
                }
                if (meshRef.current) {
                    meshRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(${1 + (y / vh) * 0.08})`;
                }
            }

            raf = requestAnimationFrame(update);
        };

        window.addEventListener('mousemove', onPointerMove, { passive: true });
        raf = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onPointerMove);
        };
    }, []);

    return (
        <section id="top" className="hero">
            <div ref={meshRef} className="hero__mesh">
                <MeshCanvas />
            </div>
            <div className="hero__shade" />

            <div ref={centerRef} className="hero__center">
                {/* 1. Small introduction (Left-aligned) */}
                <div data-reveal="" className="hero__intro">
                    Hi, I'm
                </div>

                {/* 2. Main heading: Raj Patel. (Left-aligned) */}
                <h1 ref={nameRef} className="hero__name" aria-label={`${profile.name}.`}>
                    <span aria-hidden="true" className="hero__line">
                        {[...profile.name].map((ch, i) =>
                            ch === ' ' ? (
                                <span key={i} className="hero__space">
                                    &nbsp;
                                </span>
                            ) : (
                                <span key={i} data-rise="" style={delay(i)}>
                                    {ch}
                                </span>
                            )
                        )}
                        <span data-rise="" className="hero__dot" style={delay(profile.name.length)}>
                            .
                        </span>
                    </span>
                </h1>

                {/* 3. Dynamic tagline: I build [typewriter phrase] (Left-aligned) */}
                <div data-reveal="" className="hero__tagline">
                    <span className="hero__tagline-lead">I build</span>
                    <span
                        className="hero__tagline-dynamic"
                        aria-live="polite"
                        aria-label={`I build ${TAGLINE_PHRASES[phraseIndex]}`}
                    >
                        <span className="hero__tagline-word">{displayed}</span>
                        {showCursor && (
                            <span
                                className={`hero__tagline-cursor${isDeleting ? ' is-deleting' : ''}`}
                                aria-hidden="true"
                            />
                        )}
                    </span>
                </div>
            </div>

            {/* Bottom minimal scroll indicator */}
            <div aria-hidden="true" className="hero__scroll">
                <span className="hero__scroll-arrow">↓</span>
                <span className="hero__scroll-text">Scroll</span>
            </div>
        </section>
    );
}
