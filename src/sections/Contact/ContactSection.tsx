import React from 'react';
import { Container, SectionLabel, Button } from '@/components';
import type { ContactConfig } from '@/types/sections';
import styles from './Contact.module.css';

export interface ContactSectionProps {
    config: ContactConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
    return (
        <section className={styles.section} id="contact" aria-label="Contact">
            <Container width="default">
                <div className={styles.header}>
                    <SectionLabel
                        number={config.sectionNumber || '06'}
                        label={config.sectionTitle || 'Get In Touch'}
                    />
                </div>

                <div className={styles.grid}>
                    <div className={styles.mainCol}>
                        <h2 className={styles.heading}>{config.heading}</h2>
                        <p className={styles.description}>{config.description}</p>

                        {/* Direct Email Fallback Action */}
                        <div className={styles.actionRow}>
                            <a href={`mailto:${config.email}`} className={styles.emailButton}>
                                <Button variant="primary" size="lg">
                                    Send an Email ↗
                                </Button>
                            </a>
                            {config.resumeUrl && (
                                <a
                                    href={config.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.resumeButton}
                                >
                                    <Button variant="secondary" size="lg">
                                        View Resume ↗
                                    </Button>
                                </a>
                            )}
                        </div>

                        <div className={styles.directEmailBox}>
                            <span className={styles.directLabel}>Direct Channel:</span>
                            <a href={`mailto:${config.email}`} className={styles.emailLink}>
                                {config.email}
                            </a>
                        </div>
                    </div>

                    <div className={styles.sideCol}>
                        <div className={styles.infoCard}>
                            {config.location && (
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>Based In</span>
                                    <span className={styles.infoValue}>{config.location}</span>
                                </div>
                            )}

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Networks & Profiles</span>
                                <div className={styles.socialsList}>
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
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
