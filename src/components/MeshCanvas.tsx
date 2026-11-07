import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/motion';

// Refined, balanced gradient: rich indigo-violet base with tasteful jewel tones
// (amethyst purple, royal blue, warm fuchsia, and midnight glow). Not plain black, and not glaring neon.
const BLOBS = [
    { c: '#4c1d95', x: 0.2, y: 0.3, r: 0.6, sx: 0.11, sy: 0.13, p: 0, pull: 0.25 },
    { c: '#1e3a8a', x: 0.8, y: 0.25, r: 0.55, sx: 0.09, sy: 0.08, p: 2, pull: 0.1 },
    { c: '#701a75', x: 0.55, y: 0.65, r: 0.52, sx: 0.12, sy: 0.1, p: 4, pull: 0.18 },
    { c: '#1e1b4b', x: 0.9, y: 0.8, r: 0.48, sx: 0.08, sy: 0.11, p: 1, pull: 0 },
    { c: '#312e81', x: 0.3, y: 0.75, r: 0.45, sx: 0.14, sy: 0.09, p: 3, pull: 0.12 },
    { c: '#140c26', x: 0.05, y: 0.9, r: 0.6, sx: 0.07, sy: 0.07, p: 5, pull: 0 },
];

export function MeshCanvas({ speed = 0.85 }: { speed?: number }) {
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

        const draw = (now: number) => {
            raf = 0;
            const t = ((now - t0) / 1000) * speed;
            const w = canvas.width,
                h = canvas.height;
            sx += (mx - sx) * 0.04;
            sy += (my - sy) * 0.04;
            ctx.fillStyle = '#160d2b';
            ctx.fillRect(0, 0, w, h);
            for (const b of BLOBS) {
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
            io.disconnect();
            window.removeEventListener('resize', resize);
            host.removeEventListener('pointermove', onPointer as EventListener);
        };
    }, [speed]);

    return <canvas ref={ref} />;
}
