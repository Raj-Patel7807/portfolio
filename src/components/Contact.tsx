import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { BrandIcon } from './BrandIcon';
import './Contact.css';

type Copyable = 'email' | 'discord';

export function Contact() {
    const [copied, setCopied] = useState<Copyable | null>(null);
    const timer = useRef(0);

    useEffect(() => () => clearTimeout(timer.current), []);

    const copy = (what: Copyable, text: string) => {
        navigator.clipboard
            ?.writeText(text)
            .then(() => {
                setCopied(what);
                clearTimeout(timer.current);
                timer.current = window.setTimeout(() => setCopied(null), 1800);
            })
            .catch(() => {});
    };

    return (
        <section id="contact" className="contact">
            <div data-reveal="" className="contact__label">
                Contact · Open to SWE internships.
            </div>
            <h2 className="contact__title">
                <span className="contact__line">
                    <span data-rise="">Let’s build</span>
                </span>
                <span className="contact__line contact__line--last">
                    <span data-rise="" style={{ transitionDelay: '.1s' }}>
                        something <span className="contact__accent">fast.</span>
                    </span>
                </span>
            </h2>

            <div data-reveal="" className="contact__email-row">
                <a href={`mailto:${profile.email}`} className="contact__email">
                    {profile.email}
                </a>
                <button
                    type="button"
                    className="contact__copy"
                    onClick={() => copy('email', profile.email)}
                >
                    {copied === 'email' ? 'Copied ✓' : 'Copy email'}
                </button>
            </div>

            <div data-reveal="" className="contact__links">
                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__link"
                >
                    <BrandIcon name="linkedin" />
                    LinkedIn
                    <span aria-hidden="true" className="contact__arrow">
                        ↗
                    </span>
                </a>
                <a
                    href={profile.github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__link"
                >
                    <BrandIcon name="github" />
                    GitHub
                    <span aria-hidden="true" className="contact__arrow">
                        ↗
                    </span>
                </a>
                <button
                    type="button"
                    className="contact__link"
                    onClick={() => copy('discord', profile.discord)}
                    aria-label={`Copy Discord username ${profile.discord}`}
                >
                    <BrandIcon name="discord" />
                    Discord
                    <span className="contact__handle">
                        {copied === 'discord' ? 'Copied ✓' : profile.discord}
                    </span>
                </button>
            </div>
            <span className="sr-only" role="status">
                {copied
                    ? `${copied === 'email' ? 'Email address' : 'Discord username'} copied`
                    : ''}
            </span>

            <div aria-hidden="true" className="contact__wordmark">
                Raj 7807.
            </div>

            <footer className="contact__footer">
                <span>
                    © {new Date().getFullYear()} {profile.name}
                </span>
                <span>{profile.city}, India</span>
                <a href="#top">Back to top ↑</a>
            </footer>
        </section>
    );
}
