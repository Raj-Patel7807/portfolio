import React from 'react';
import { Container, Button, SectionLabel } from '@/components';
import type { HeroConfig } from '@/types/navigation';
import styles from './Hero.module.css';

export interface HeroProps {
    config: HeroConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
    return (
        <section className={styles.heroSection} id="home" aria-label="Introduction">
            <Container width="default">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        {/* Status indicator badge */}
                        {config.statusBadge && (
                            <div className={styles.badgeWrapper}>
                                <span className={styles.statusDot} aria-hidden="true" />
                                <span className={styles.statusText}>{config.statusBadge.text}</span>
                            </div>
                        )}

                        {/* Greeting / Subheading */}
                        {config.greeting && <SectionLabel number="01" label={config.greeting} />}

                        {/* Main Editorial Heading */}
                        <h1 className={styles.heading}>{config.heading}</h1>

                        {/* Introduction paragraph */}
                        <p className={styles.intro}>{config.introduction}</p>

                        {/* Call to Actions */}
                        <div className={styles.ctaGroup}>
                            {config.primaryCta && (
                                <a href={config.primaryCta.href} className={styles.ctaLink}>
                                    <Button variant="primary" size="lg">
                                        {config.primaryCta.label} ↓
                                    </Button>
                                </a>
                            )}
                            {config.secondaryCta && (
                                <a href={config.secondaryCta.href} className={styles.ctaLink}>
                                    <Button variant="secondary" size="lg">
                                        {config.secondaryCta.label} →
                                    </Button>
                                </a>
                            )}
                        </div>

                        {/* Social Links */}
                        {config.socials.length > 0 && (
                            <div className={styles.socialsWrapper}>
                                <span className={styles.socialLabel}>Connect:</span>
                                <div className={styles.socialLinks}>
                                    {config.socials.map(social => (
                                        <a
                                            key={social.platform}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                            aria-label={`${social.label} (opens in a new tab)`}
                                        >
                                            {social.label} ↗
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Optional Portrait / Visual Asset */}
                    {config.portrait && (
                        <div className={styles.mediaContainer}>
                            <div className={styles.imageFrame}>
                                <img
                                    src={config.portrait.src}
                                    alt={config.portrait.alt}
                                    className={styles.portraitImage}
                                    loading="eager"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Hero;
