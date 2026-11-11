import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { toggleTheme } from '../hooks/theme';
import './Nav.css';

const links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#stack', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#scoreboard', label: 'Scoreboard' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
];

export function Nav() {
    const [open, setOpen] = useState(false);
    const burgerRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    // While the overlay menu is open: lock body scroll, close on Escape or on
    // resize up to desktop, and move focus in/out for keyboard users.
    useEffect(() => {
        if (!open) return;
        const burger = burgerRef.current;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false);
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        firstLinkRef.current?.focus();
        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
            burger?.focus();
        };
    }, [open]);

    return (
        <>
            <nav className="nav" aria-label="Main">
                <a href="#top" className="nav__logo">
                    Raj.
                </a>
                <div className="nav__links">
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="nav__link">
                            {l.label}
                        </a>
                    ))}
                    <button
                        type="button"
                        className="nav__theme"
                        aria-label="Switch colour theme"
                        onClick={e => {
                            const r = e.currentTarget.getBoundingClientRect();
                            toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
                        }}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            aria-hidden="true"
                        >
                            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                        </svg>
                    </button>
                    {profile.resume && (
                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="nav__resume"
                        >
                            Resume ↗
                        </a>
                    )}
                    <button
                        type="button"
                        ref={burgerRef}
                        className={open ? 'nav__burger is-open' : 'nav__burger'}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        aria-controls="nav-overlay"
                        onClick={() => setOpen(o => !o)}
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </button>
                </div>
            </nav>

            {/* Full-screen menu for mobile; hidden and inert unless opened. */}
            <div
                id="nav-overlay"
                className={open ? 'nav__overlay is-open' : 'nav__overlay'}
                inert={!open}
            >
                <div className="nav__overlay-label mono-label">Menu</div>
                <nav aria-label="Sections">
                    {links.map((l, i) => (
                        <a
                            key={l.href}
                            href={l.href}
                            ref={i === 0 ? firstLinkRef : undefined}
                            className="nav__overlay-link"
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                            <span aria-hidden="true" className="nav__overlay-idx">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                        </a>
                    ))}
                </nav>
                {profile.resume && (
                    <a
                        href={profile.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="nav__overlay-resume"
                        onClick={() => setOpen(false)}
                    >
                        Resume ↗
                    </a>
                )}
            </div>
        </>
    );
}
