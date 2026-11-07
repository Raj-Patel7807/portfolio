import { useEffect, useRef } from 'react';
import { profile } from '../data/content';
import { prefersReducedMotion } from '../hooks/motion';
import { MeshCanvas } from './MeshCanvas';
import './Hero.css';

const delay = (i: number) => ({ transitionDelay: `${(i * 0.04).toFixed(2)}s` });

export function Hero() {
    const meshRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null);

    // Parallax: the name drifts down and fades, the mesh drifts slower and zooms.
    useEffect(() => {
        if (prefersReducedMotion()) return;
        let raf = 0;
        const update = () => {
            raf = 0;
            const y = window.scrollY,
                vh = window.innerHeight;
            if (y > vh * 1.3) return;
            if (topRef.current) {
                topRef.current.style.transform = `translate3d(0,${y * 0.32}px,0)`;
                topRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.85)));
            }
            if (meshRef.current) {
                meshRef.current.style.transform = `translate3d(0,${y * 0.18}px,0) scale(${1 + (y / vh) * 0.08})`;
            }
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        update();
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <section id="top" className="hero">
            <div ref={meshRef} className="hero__mesh">
                <MeshCanvas />
            </div>
            <div className="hero__shade" />

            <div ref={topRef} className="hero__top">
                <h1 className="hero__name" aria-label={`${profile.name}.`}>
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
            </div>

            <div className="hero__bottom">
                <p data-reveal="" className="hero__pitch">
                    {profile.pitch}
                </p>
                <div data-reveal="" className="hero__ctas" style={{ transitionDelay: '.1s' }}>
                    <a href="#work" className="btn btn--solid">
                        See the work ↓
                    </a>
                    <a href="#contact" className="btn btn--ghost">
                        Get in touch
                    </a>
                </div>
            </div>
            <div aria-hidden="true" className="hero__scroll">
                Scroll
            </div>
        </section>
    );
}
