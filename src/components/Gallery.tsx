import { useEffect, useRef, type CSSProperties } from 'react';
import { gallery } from '../data/content';
import { DisplayHeading } from './DisplayHeading';
import './Gallery.css';

// Only photos that have been added are shown; App hides the section when there are none.
const photos = gallery.filter(g => g.image);

// Horizontal photo strip: native scroll/swipe, mouse drag, and prev/next buttons.
export function Gallery() {
    const railRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = railRef.current;
        if (!el) return;
        let down = false,
            moved = false,
            startX = 0,
            startLeft = 0;

        const swallowClick = (e: MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
        };
        const onDown = (e: PointerEvent) => {
            if (e.pointerType !== 'mouse') return;
            down = true;
            moved = false;
            startX = e.clientX;
            startLeft = el.scrollLeft;
        };
        const onMove = (e: PointerEvent) => {
            if (!down) return;
            const dx = e.clientX - startX;
            if (Math.abs(dx) > 6) {
                moved = true;
                el.style.scrollSnapType = 'none';
            }
            if (moved) el.scrollLeft = startLeft - dx;
        };
        const onUp = () => {
            if (!down) return;
            down = false;
            if (!moved) return;
            el.style.scrollSnapType = '';
            // A drag must not count as a click on whatever is under the pointer.
            el.addEventListener('click', swallowClick, { capture: true, once: true });
            setTimeout(() => el.removeEventListener('click', swallowClick, true), 50);
        };

        el.addEventListener('pointerdown', onDown);
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        return () => {
            el.removeEventListener('pointerdown', onDown);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
        };
    }, []);

    const page = (dir: 1 | -1) => {
        const el = railRef.current;
        el?.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
    };

    return (
        <section id="gallery" className="gallery">
            <div className="section-head section-head--tight gallery__head">
                <DisplayHeading>Off-screen</DisplayHeading>
                <div data-reveal="" className="gallery__controls">
                    <span className="mono-label">Drag or scroll →</span>
                    <button
                        type="button"
                        className="gallery__btn"
                        aria-label="Previous photos"
                        onClick={() => page(-1)}
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className="gallery__btn"
                        aria-label="Next photos"
                        onClick={() => page(1)}
                    >
                        →
                    </button>
                </div>
            </div>

            <div ref={railRef} data-cursor="Drag" className="gallery__rail">
                {photos.map((g, i) => (
                    <figure
                        key={g.cap}
                        data-reveal=""
                        className="gallery__item"
                        style={{ transitionDelay: `${i * 0.06}s` }}
                    >
                        <div
                            className="gallery__frame"
                            style={{ width: g.width, '--tilt': g.tilt } as CSSProperties}
                        >
                            <img
                                className="cover-img"
                                src={g.image}
                                alt={g.cap}
                                loading="lazy"
                                draggable={false}
                            />
                        </div>
                        <figcaption className="gallery__cap">
                            <span className="gallery__num">{String(i + 1).padStart(2, '0')}</span>
                            <span className="gallery__title">{g.cap}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
