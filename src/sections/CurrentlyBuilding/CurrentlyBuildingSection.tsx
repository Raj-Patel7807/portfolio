import React from 'react';
import { Container, SectionLabel, TextLink, TechBadge } from '@/components';
import type { CurrentlyBuildingItem } from '@/types/sections';
import styles from './CurrentlyBuilding.module.css';

export interface CurrentlyBuildingSectionProps {
    items: CurrentlyBuildingItem[];
    sectionNumber?: string;
    sectionTitle?: string;
}

export const CurrentlyBuildingSection: React.FC<CurrentlyBuildingSectionProps> = ({
    items,
    sectionNumber = '04',
    sectionTitle = 'Currently Building & Exploring',
}) => {
    const hasItems = items.length > 0;

    return (
        <section className={styles.section} id="currently-building" aria-label="Currently Building">
            <Container width="default">
                <div className={styles.header}>
                    <SectionLabel number={sectionNumber} label={sectionTitle} />
                    <p className={styles.subtitle}>
                        Active research, systems engineering prototypes, and technical architectures
                        in development.
                    </p>
                </div>

                {hasItems ? (
                    <div className={styles.grid}>
                        {items.map(item => (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <span className={styles.statusBadge}>{item.status}</span>
                                </div>
                                <p className={styles.description}>{item.shortDescription}</p>

                                {item.technologies && item.technologies.length > 0 && (
                                    <div className={styles.techList}>
                                        {item.technologies.map(tech => (
                                            <TechBadge key={tech} label={tech} />
                                        ))}
                                    </div>
                                )}

                                {item.link && (
                                    <div className={styles.cardFooter}>
                                        <TextLink href={item.link} isExternal>
                                            {item.linkLabel || 'View Progress'}
                                        </TextLink>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon} aria-hidden="true">
                            ❖
                        </div>
                        <h3 className={styles.emptyTitle}>Explorations & Active Builds</h3>
                        <p className={styles.emptyMessage}>
                            Current experiments, compilers, and internal tools will be detailed here
                            once populated.
                        </p>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default CurrentlyBuildingSection;
