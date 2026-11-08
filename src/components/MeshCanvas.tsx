import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/motion';

function isDarkTheme(): boolean {
    const theme = document.documentElement.dataset.theme;
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    originX: number;
    originY: number;
    size: number;
    baseAlpha: number;
}

export function MeshCanvas({ speed = 1 }: { speed?: number }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const reduce = prefersReducedMotion();
        const host = canvas.closest('section') ?? canvas;

        let width = (canvas.width = canvas.offsetWidth);
        let height = (canvas.height = canvas.offsetHeight);

        let mouseX = -1000;
        let mouseY = -1000;
        let smoothMouseX = -1000;
        let smoothMouseY = -1000;
        let isHovered = false;

        let raf = 0;
        let visible = true;
        let dark = isDarkTheme();

        // Spawn dynamic constellation node particles — area-based for density
        const particleCount = Math.min(200, Math.max(80, Math.floor((width * height) / 7500)));
        const particles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            particles.push({
                x,
                y,
                originX: x,
                originY: y,
                vx: (Math.random() - 0.5) * 0.45 * speed,
                vy: (Math.random() - 0.5) * 0.45 * speed,
                size: Math.random() * 2.5 + 1.5,
                baseAlpha: Math.random() * 0.5 + 0.4,
            });
        }

        let time = 0;

        const draw = () => {
            raf = 0;
            time += 0.015 * speed;

            // Smooth pointer tracking
            smoothMouseX += (mouseX - smoothMouseX) * 0.08;
            smoothMouseY += (mouseY - smoothMouseY) * 0.08;

            ctx.clearRect(0, 0, width, height);

            // 1. Fluid Ambient Deep Background Gradient
            const bgGrad = ctx.createLinearGradient(0, 0, width, height);
            if (dark) {
                bgGrad.addColorStop(0, '#0c0a18');
                bgGrad.addColorStop(0.5, '#130d24');
                bgGrad.addColorStop(1, '#090712');
            } else {
                bgGrad.addColorStop(0, '#faf9fc');
                bgGrad.addColorStop(0.5, '#f4effc');
                bgGrad.addColorStop(1, '#f8f6fc');
            }
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            // 2. Interactive Ambient Light Beam (Follows cursor smoothly)
            if (isHovered && smoothMouseX > 0 && smoothMouseY > 0) {
                const mouseAura = ctx.createRadialGradient(
                    smoothMouseX,
                    smoothMouseY,
                    0,
                    smoothMouseX,
                    smoothMouseY,
                    Math.max(width, height) * 0.38
                );
                if (dark) {
                    mouseAura.addColorStop(0, 'rgba(139, 92, 246, 0.24)');
                    mouseAura.addColorStop(0.5, 'rgba(59, 130, 246, 0.09)');
                    mouseAura.addColorStop(1, 'rgba(13, 11, 24, 0)');
                } else {
                    mouseAura.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
                    mouseAura.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)');
                    mouseAura.addColorStop(1, 'rgba(250, 249, 252, 0)');
                }
                ctx.fillStyle = mouseAura;
                ctx.fillRect(0, 0, width, height);
            }

            // 3. Ambient Fluid Waves (Floating subtle organic light pools)
            const pools = [
                {
                    x: width * 0.25 + Math.sin(time * 0.7) * 60,
                    y: height * 0.35 + Math.cos(time * 0.6) * 45,
                    r: Math.min(width, height) * 0.42,
                    c: dark ? 'rgba(124, 58, 237, 0.18)' : 'rgba(167, 139, 250, 0.22)',
                },
                {
                    x: width * 0.78 + Math.cos(time * 0.5) * 70,
                    y: height * 0.45 + Math.sin(time * 0.8) * 50,
                    r: Math.min(width, height) * 0.46,
                    c: dark ? 'rgba(37, 99, 235, 0.14)' : 'rgba(191, 219, 254, 0.3)',
                },
                {
                    x: width * 0.5 + Math.sin(time * 0.4) * 50,
                    y: height * 0.8 + Math.cos(time * 0.5) * 40,
                    r: Math.min(width, height) * 0.38,
                    c: dark ? 'rgba(192, 38, 211, 0.12)' : 'rgba(245, 208, 254, 0.26)',
                },
            ];

            for (const pool of pools) {
                const g = ctx.createRadialGradient(pool.x, pool.y, 0, pool.x, pool.y, pool.r);
                g.addColorStop(0, pool.c);
                g.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = g;
                ctx.fillRect(0, 0, width, height);
            }

            // 4. Dynamic Constellation Mesh & Kinetic Physics
            const maxDistance = 120;
            const mouseRepelRadius = 140;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (!reduce) {
                    p.x += p.vx;
                    p.y += p.vy;

                    // Soft bounce off walls
                    if (p.x < 0 || p.x > width) p.vx *= -1;
                    if (p.y < 0 || p.y > height) p.vy *= -1;

                    // Mouse interaction: soft physics repulsion
                    if (isHovered) {
                        const dx = p.x - smoothMouseX;
                        const dy = p.y - smoothMouseY;
                        const dist = Math.hypot(dx, dy);
                        if (dist < mouseRepelRadius && dist > 0) {
                            const force = (mouseRepelRadius - dist) / mouseRepelRadius;
                            const angle = Math.atan2(dy, dx);
                            p.x += Math.cos(angle) * force * 3;
                            p.y += Math.sin(angle) * force * 3;
                        }
                    }
                }

                // Render particle dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = dark
                    ? `rgba(216, 205, 254, ${p.baseAlpha})`
                    : `rgba(109, 40, 217, ${p.baseAlpha * 0.9})`;
                ctx.fill();

                // Connect nearby particles with subtle neural threads
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * (dark ? 0.3 : 0.22);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = dark
                            ? `rgba(192, 168, 255, ${alpha})`
                            : `rgba(109, 40, 217, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            if (visible) raf = requestAnimationFrame(draw);
        };

        const kick = () => {
            if (!raf) raf = requestAnimationFrame(draw);
        };

        // Theme sync
        const observer = new MutationObserver(() => {
            dark = isDarkTheme();
            kick();
        });
        observer.observe(document.documentElement, { attributes: true });

        const onPointerMove = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect();
            mouseX = e.clientX - r.left;
            mouseY = e.clientY - r.top;
            isHovered = true;
            kick();
        };

        const onPointerLeave = () => {
            isHovered = false;
            mouseX = -1000;
            mouseY = -1000;
        };

        const onResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
            kick();
        };

        const io = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible) kick();
        });

        io.observe(canvas);
        window.addEventListener('resize', onResize);
        host.addEventListener('pointermove', onPointerMove as EventListener);
        host.addEventListener('pointerleave', onPointerLeave as EventListener);

        kick();

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
            io.disconnect();
            window.removeEventListener('resize', onResize);
            host.removeEventListener('pointermove', onPointerMove as EventListener);
            host.removeEventListener('pointerleave', onPointerLeave as EventListener);
        };
    }, [speed]);

    return <canvas ref={ref} />;
}
