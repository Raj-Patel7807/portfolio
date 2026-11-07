import { useEffect, useRef } from 'react';
import './Cursor.css';

// Dot + trailing ring. Over [data-cursor] areas the ring grows and shows that label
// ("Open", "Visit", "Drag"); over links and buttons it grows slightly.
export function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        const label = labelRef.current;
        if (!dot || !ring || !label || !window.matchMedia('(pointer: fine)').matches) return;

        const html = document.documentElement;
        html.classList.add('cc-cursor');
        let mx = -100,
            my = -100,
            rx = -100,
            ry = -100;
        let mode = '';

        const setMode = (m: string) => {
            if (m === mode) return;
            mode = m;
            const big = m !== '' && m !== 'link';
            const size = big ? 84 : m === 'link' ? 56 : 36;
            ring.style.width = ring.style.height = `${size}px`;
            ring.style.margin = `-${size / 2}px 0 0 -${size / 2}px`;
            ring.style.background = big
                ? 'var(--accent)'
                : m === 'link'
                  ? 'rgba(139,92,246,.14)'
                  : 'transparent';
            label.textContent = big ? m : '';
            dot.style.opacity = big ? '0' : '1';
        };

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            ring.style.opacity = '1';
            if (mode === '' || mode === 'link') dot.style.opacity = '1';
            const t = e.target instanceof Element ? e.target : null;
            const link = t?.closest('a,button,input');
            const area = t?.closest('[data-cursor]');
            // A link nested inside a labelled area wins over the area's label.
            const nestedLink = link && area && area.contains(link) && link !== area;
            setMode(
                area && !nestedLink ? (area.getAttribute('data-cursor') ?? '') : link ? 'link' : ''
            );
        };

        const onLeave = () => {
            ring.style.opacity = '0';
            dot.style.opacity = '0';
        };

        let raf = 0;
        const loop = () => {
            rx += (mx - rx) * 0.16;
            ry += (my - ry) * 0.16;
            dot.style.transform = `translate(${mx}px,${my}px)`;
            ring.style.transform = `translate(${rx}px,${ry}px)`;
            raf = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', onMove);
        html.addEventListener('mouseleave', onLeave);
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            html.removeEventListener('mouseleave', onLeave);
            html.classList.remove('cc-cursor');
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="cursor-ring" aria-hidden="true">
                <span ref={labelRef} />
            </div>
        </>
    );
}
