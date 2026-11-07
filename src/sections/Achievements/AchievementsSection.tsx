import React from 'react';
import { Container, SectionLabel, TextLink } from '@/components';
import type {
    MetricAchievement,
    CompetitivePlatformProfile,
    MilestoneAchievement,
    AchievementsSectionConfig,
} from '@/types/achievement';
import { MetricCard } from './MetricCard';
import { CompetitiveProfileCard } from './CompetitiveProfileCard';
import styles from './AchievementsSection.module.css';

export interface AchievementsSectionProps {
    config: AchievementsSectionConfig;
    metrics: MetricAchievement[];
    profiles: CompetitivePlatformProfile[];
    milestones?: MilestoneAchievement[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
    config,
    metrics,
    profiles,
    milestones = [],
}) => {
    const hasMetrics = metrics.length > 0;
    const hasProfiles = profiles.length > 0;
    const hasMilestones = milestones.length > 0;
    const hasAnyData = hasMetrics || hasProfiles || hasMilestones;

    return (
        <section
            className={styles.section}
            id="achievements"
            aria-label="Achievements and Competitive Programming"
        >
            <Container width="default">
                {/* Section Header */}
                <div className={styles.header}>
                    <SectionLabel
                        number={config.sectionNumber || '03'}
                        label={config.sectionTitle || 'Achievements & Competitive Programming'}
                    />
                    {config.subtitle && <p className={styles.subtitle}>{config.subtitle}</p>}
                </div>

                {hasAnyData ? (
                    <div className={styles.content}>
                        {/* Numerical Highlights Grid */}
                        {hasMetrics && (
                            <div className={styles.subBlock}>
                                <h3 className={styles.subHeading}>Numerical Milestones</h3>
                                <div className={styles.metricsGrid}>
                                    {metrics.map(metric => (
                                        <MetricCard key={metric.id} metric={metric} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Competitive Programming Profiles Grid */}
                        {hasProfiles && (
                            <div className={styles.subBlock}>
                                <h3 className={styles.subHeading}>
                                    Competitive Programming Profiles
                                </h3>
                                <div className={styles.profilesGrid}>
                                    {profiles.map(profile => (
                                        <CompetitiveProfileCard
                                            key={profile.id}
                                            profile={profile}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Academic & Competition Milestones */}
                        {hasMilestones && (
                            <div className={styles.subBlock}>
                                <h3 className={styles.subHeading}>Honors & Certifications</h3>
                                <div className={styles.milestonesList}>
                                    {milestones.map(item => (
                                        <div key={item.id} className={styles.milestoneItem}>
                                            <div className={styles.milestoneMain}>
                                                <h4 className={styles.milestoneTitle}>
                                                    {item.title}
                                                </h4>
                                                <span className={styles.milestoneIssuer}>
                                                    {item.issuer} {item.date && `• ${item.date}`}
                                                </span>
                                                {item.description && (
                                                    <p className={styles.milestoneDesc}>
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                            {item.credentialUrl && (
                                                <div className={styles.milestoneAction}>
                                                    <TextLink href={item.credentialUrl} isExternal>
                                                        Credential
                                                    </TextLink>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Graceful Empty State */
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon} aria-hidden="true">
                            ❖
                        </div>
                        <h3 className={styles.emptyTitle}>
                            Competitive Programming & Milestone Records
                        </h3>
                        <p className={styles.emptyMessage}>
                            {config.metricsEmptyMessage ||
                                'Achievements and competitive programming statistics are ready to be populated in data files without altering component code.'}
                        </p>
                        <div className={styles.emptyAction}>
                            <TextLink href="https://github.com/Raj-Patel7807" isExternal>
                                View Activity on GitHub
                            </TextLink>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default AchievementsSection;
