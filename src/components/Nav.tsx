import { profile } from '../data/content';
import { toggleTheme } from '../hooks/theme';
import './Nav.css';

const links = [
    { href: '#work', label: 'Work' },
    { href: '#scoreboard', label: 'Scoreboard' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];

export function Nav() {
    return (
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
            </div>
        </nav>
    );
}
