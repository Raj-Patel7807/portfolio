export const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
