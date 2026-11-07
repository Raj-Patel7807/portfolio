import React from 'react';
import { Container, SectionLabel } from '@/components';
import type { AboutConfig } from '@/types/sections';
import styles from './About.module.css';

export interface AboutSectionProps {
    config: AboutConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
    return (
        <section className={styles.section} id="about" aria-label="About">
            <Container width="default">
                <div className={styles.header}>
                    <SectionLabel
                        number={config.sectionNumber || '01'}
                        label={config.sectionTitle || 'About'}
                    />
                </div>

                <div className={styles.grid}>
                    <div className={styles.textCol}>
                        <h2 className={styles.heading}>{config.heading}</h2>

                        <div className={styles.paragraphs}>
                            {config.paragraphs.map((p, idx) => (
                                <p key={idx} className={styles.paragraph}>
                                    {p}
                                </p>
                            ))}
                        </div>

                        {config.details && config.details.length > 0 && (
                            <div className={styles.detailsGrid}>
                                {config.details.map((detail, idx) => (
                                    <div key={idx} className={styles.detailItem}>
                                        <span className={styles.detailLabel}>{detail.label}</span>
                                        <span className={styles.detailValue}>{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {config.portrait && (
                        <div className={styles.mediaCol}>
                            <div className={styles.imageFrame}>
                                <img
                                    src={config.portrait.src}
                                    alt={config.portrait.alt}
                                    className={styles.image}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
