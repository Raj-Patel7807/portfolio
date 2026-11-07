import { useEffect, useRef } from 'react';
import { marquee } from '../data/content';
import { prefersReducedMotion } from '../hooks/motion';
import './Marquee.css';

const items = [...marquee, ...marquee];

// Drifts left at idle; scrolling speeds it up, reverses it when scrolling up, and skews it.
export function Marquee() {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = trackRef.current;
        if (!el || prefersReducedMotion()) return;
        let x = 0,
            v = 0,
            skew = 0,
            dir = 1,
            lastY = window.scrollY,
            raf = 0;

        const tick = () => {
            const y = window.scrollY,
                dy = y - lastY;
            lastY = y;
            dir = dy < -0.5 ? -1 : dy > 0.5 ? 1 : dir;
            v += ((1.1 + Math.min(Math.abs(dy) * 0.35, 22)) * dir - v) * 0.1;
            skew += (Math.max(-9, Math.min(9, dy * 0.35)) - skew) * 0.12;
            // The list is doubled, so wrapping at half its width is seamless.
            const half = el.scrollWidth / 2;
            x -= v;
            if (x <= -half) x += half;
            if (x > 0) x -= half;
            el.style.transform = `translate3d(${x}px,0,0) skewX(${-skew}deg)`;
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div className="marquee" aria-hidden="true">
            <div ref={trackRef} className="marquee__track">
                {items.map((t, i) => (
                    <span key={i} className="marquee__item">
                        {t}
                        <span className="marquee__sep">/</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
