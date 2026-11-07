import React from 'react';
import { Container, SectionLabel } from '@/components';
import type { SkillCategory } from '@/types/sections';
import styles from './TechStack.module.css';

export interface TechStackSectionProps {
    categories: SkillCategory[];
    sectionNumber?: string;
    sectionTitle?: string;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
    categories,
    sectionNumber = '05',
    sectionTitle = 'Technical Stack & Capabilities',
}) => {
    return (
        <section className={styles.section} id="skills" aria-label="Technical Skills">
            <Container width="default">
                <div className={styles.header}>
                    <SectionLabel number={sectionNumber} label={sectionTitle} />
                    <p className={styles.subtitle}>
                        Categorized overview of engineering languages, frameworks, system utilities,
                        and paradigms.
                    </p>
                </div>

                <div className={styles.categoriesGrid}>
                    {categories.map(cat => (
                        <div key={cat.id} className={styles.categoryCard}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryBullet} aria-hidden="true">
                                    ■
                                </span>
                                <h3 className={styles.categoryName}>{cat.name}</h3>
                            </div>
                            <ul className={styles.skillsList}>
                                {cat.skills.map(skill => (
                                    <li key={skill} className={styles.skillItem}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TechStackSection;
