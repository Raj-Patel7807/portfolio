import { useEffect } from 'react';

// Marks [data-reveal] elements with data-in when they scroll into view. [data-rise] elements are
// revealed together when their parent (the clipping wrapper) enters. New nodes (e.g. repo cards
// that arrive from the GitHub API) are picked up by the MutationObserver.
export function useRevealObserver() {
    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            document
                .querySelectorAll('[data-reveal],[data-rise]')
                .forEach(el => el.setAttribute('data-in', ''));
            return;
        }

        const riseKids = new WeakMap<Element, Element[]>();
        const io = new IntersectionObserver(
            entries =>
                entries.forEach(e => {
                    if (!e.isIntersecting) return;
                    (riseKids.get(e.target) ?? [e.target]).forEach(k =>
                        k.setAttribute('data-in', '')
                    );
                    io.unobserve(e.target);
                }),
            { threshold: 0, rootMargin: '0px 0px -30px 0px' }
        );

        const scan = () => {
            document.querySelectorAll('[data-reveal]:not([data-in])').forEach(el => io.observe(el));
            document.querySelectorAll('[data-rise]:not([data-in])').forEach(el => {
                const wrap = el.parentElement;
                if (!wrap) return;
                let kids = riseKids.get(wrap);
                if (!kids) {
                    kids = [];
                    riseKids.set(wrap, kids);
                    io.observe(wrap);
                }
                if (!kids.includes(el)) kids.push(el);
            });
        };

        let pending = 0;
        const scheduleScan = () => {
            if (!pending) pending = requestAnimationFrame(() => ((pending = 0), scan()));
        };

        scan();
        const mo = new MutationObserver(scheduleScan);
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            cancelAnimationFrame(pending);
            io.disconnect();
            mo.disconnect();
        };
    }, []);
}
