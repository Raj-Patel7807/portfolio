import { prefersReducedMotion } from './motion';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
    const t = document.documentElement.dataset.theme;
    if (t === 'light' || t === 'dark') return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Flips the theme, revealing the new one as a circle growing from `origin`.
export function toggleTheme(origin: { x: number; y: number }) {
    const html = document.documentElement;
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    const apply = () => {
        html.dataset.theme = next;
        try {
            localStorage.setItem('sc-theme', next);
        } catch {
            // Storage blocked: the theme still applies for this visit.
        }
    };

    if (!('startViewTransition' in document) || prefersReducedMotion()) {
        apply();
        return;
    }

    const { x, y } = origin;
    document
        .startViewTransition(apply)
        .ready.then(() => {
            const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
            html.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
                {
                    duration: 750,
                    easing: 'cubic-bezier(.65,0,.35,1)',
                    pseudoElement: '::view-transition-new(root)',
                }
            );
        })
        .catch(() => {});
}
