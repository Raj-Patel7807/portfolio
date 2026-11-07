import React from 'react';
import { Container, SectionLabel, TextLink, TechBadge } from '@/components';
import type { ExperienceItem } from '@/types/sections';
import styles from './Experience.module.css';

export interface ExperienceSectionProps {
    experiences: ExperienceItem[];
    sectionNumber?: string;
    sectionTitle?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    experiences,
    sectionNumber = '05',
    sectionTitle = 'Experience & Leadership',
}) => {
    const hasExperience = experiences.length > 0;

    return (
        <section className={styles.section} id="experience" aria-label="Experience">
            <Container width="default">
                <div className={styles.header}>
                    <SectionLabel number={sectionNumber} label={sectionTitle} />
                    <p className={styles.subtitle}>
                        Professional timeline, technical leadership, and organizational
                        contributions.
                    </p>
                </div>

                {hasExperience ? (
                    <div className={styles.timeline}>
                        {experiences.map(item => (
                            <article key={item.id} className={styles.item}>
                                <div className={styles.timeCol}>
                                    <span className={styles.duration}>{item.duration}</span>
                                    {item.location && (
                                        <span className={styles.location}>{item.location}</span>
                                    )}
                                    {item.type && (
                                        <span className={styles.typeBadge}>{item.type}</span>
                                    )}
                                </div>

                                <div className={styles.contentCol}>
                                    <div className={styles.titleRow}>
                                        <h3 className={styles.role}>{item.role}</h3>
                                        <span className={styles.org}>
                                            {item.link ? (
                                                <TextLink href={item.link} isExternal>
                                                    {item.organization}
                                                </TextLink>
                                            ) : (
                                                item.organization
                                            )}
                                        </span>
                                    </div>

                                    {item.description && (
                                        <p className={styles.description}>{item.description}</p>
                                    )}

                                    {item.contributions.length > 0 && (
                                        <ul className={styles.contributionsList}>
                                            {item.contributions.map((contribution, idx) => (
                                                <li key={idx} className={styles.contributionItem}>
                                                    {contribution}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {item.technologies && item.technologies.length > 0 && (
                                        <div className={styles.techList}>
                                            {item.technologies.map(tech => (
                                                <TechBadge key={tech} label={tech} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon} aria-hidden="true">
                            ❖
                        </div>
                        <h3 className={styles.emptyTitle}>Professional Journey & Experience</h3>
                        <p className={styles.emptyMessage}>
                            Professional roles, software engineering internships, and leadership
                            positions will appear here once populated.
                        </p>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default ExperienceSection;
