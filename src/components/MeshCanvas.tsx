import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/motion';

// Dark Theme palette: deep nocturnal ambient blobs (midnight, deep indigo, subtle violet)
const DARK_BLOBS = [
    { c: '#1e1035', x: 0.2, y: 0.25, r: 0.6, sx: 0.1, sy: 0.12, p: 0, pull: 0.2 },
    { c: '#0f172a', x: 0.75, y: 0.2, r: 0.55, sx: 0.08, sy: 0.07, p: 2, pull: 0.1 },
    { c: '#241442', x: 0.5, y: 0.65, r: 0.5, sx: 0.11, sy: 0.09, p: 4, pull: 0.15 },
    { c: '#0c1222', x: 0.85, y: 0.75, r: 0.5, sx: 0.07, sy: 0.1, p: 1, pull: 0 },
    { c: '#191228', x: 0.35, y: 0.8, r: 0.45, sx: 0.12, sy: 0.08, p: 3, pull: 0.1 },
    { c: '#09070f', x: 0.05, y: 0.9, r: 0.6, sx: 0.06, sy: 0.06, p: 5, pull: 0 },
];

// Light Theme palette: vibrant royal purple, amethyst, azure & soft magenta
const LIGHT_BLOBS = [
    { c: '#8B5CF6', x: 0.2, y: 0.25, r: 0.6, sx: 0.11, sy: 0.13, p: 0, pull: 0.25 },
    { c: '#3B82F6', x: 0.75, y: 0.2, r: 0.55, sx: 0.09, sy: 0.08, p: 2, pull: 0.1 },
    { c: '#C084FC', x: 0.5, y: 0.65, r: 0.52, sx: 0.12, sy: 0.1, p: 4, pull: 0.15 },
    { c: '#60A5FA', x: 0.85, y: 0.75, r: 0.48, sx: 0.08, sy: 0.11, p: 1, pull: 0 },
    { c: '#E879F9', x: 0.35, y: 0.8, r: 0.45, sx: 0.14, sy: 0.09, p: 3, pull: 0.12 },
    { c: '#4C1D95', x: 0.05, y: 0.9, r: 0.6, sx: 0.07, sy: 0.07, p: 5, pull: 0 },
];

function isDarkTheme(): boolean {
    const theme = document.documentElement.dataset.theme;
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function MeshCanvas({ speed = 0.8 }: { speed?: number }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const reduce = prefersReducedMotion();
        const host = canvas.closest('section') ?? canvas;
        let mx = 0.5,
            my = 0.5,
            sx = 0.5,
            sy = 0.5;
        let raf = 0;
        let visible = true;
        const t0 = performance.now();

        let dark = isDarkTheme();

        const draw = (now: number) => {
            raf = 0;
            const t = ((now - t0) / 1000) * speed;
            const w = canvas.width,
                h = canvas.height;
            sx += (mx - sx) * 0.04;
            sy += (my - sy) * 0.04;

            ctx.fillStyle = dark ? '#0a0812' : '#2e1065';
            ctx.fillRect(0, 0, w, h);

            const blobs = dark ? DARK_BLOBS : LIGHT_BLOBS;
            for (const b of blobs) {
                const x =
                    ((b.x + Math.sin(t * b.sx + b.p) * 0.18) * (1 - b.pull) + sx * b.pull) * w;
                const y = ((b.y + Math.cos(t * b.sy + b.p) * 0.2) * (1 - b.pull) + sy * b.pull) * h;
                const g = ctx.createRadialGradient(x, y, 0, x, y, b.r * Math.max(w, h));
                g.addColorStop(0, b.c);
                g.addColorStop(1, `${b.c}00`);
                ctx.fillStyle = g;
                ctx.fillRect(0, 0, w, h);
            }
            if (!reduce && visible) raf = requestAnimationFrame(draw);
        };
        const kick = () => {
            if (!raf) raf = requestAnimationFrame(draw);
        };

        // Watch for theme toggles on documentElement
        const observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                if (m.type === 'attributes' && m.attributeName === 'data-theme') {
                    dark = isDarkTheme();
                    kick();
                }
            }
        });
        observer.observe(document.documentElement, { attributes: true });

        const resize = () => {
            canvas.width = Math.max(200, canvas.offsetWidth / 4);
            canvas.height = Math.max(120, canvas.offsetHeight / 4);
            kick();
        };
        const onPointer = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect();
            mx = (e.clientX - r.left) / r.width;
            my = (e.clientY - r.top) / r.height;
        };
        const io = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible) kick();
        });

        resize();
        io.observe(canvas);
        window.addEventListener('resize', resize);
        host.addEventListener('pointermove', onPointer as EventListener);

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
            io.disconnect();
            window.removeEventListener('resize', resize);
            host.removeEventListener('pointermove', onPointer as EventListener);
        };
    }, [speed]);

    return <canvas ref={ref} />;
}
