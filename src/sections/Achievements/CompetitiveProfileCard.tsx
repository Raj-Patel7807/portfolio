import React from 'react';
import type { CompetitivePlatformProfile } from '@/types/achievement';
import { TextLink } from '@/components';
import styles from './CompetitiveProfileCard.module.css';

export interface CompetitiveProfileCardProps {
    profile: CompetitivePlatformProfile;
}

export const CompetitiveProfileCard: React.FC<CompetitiveProfileCardProps> = ({ profile }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.platformBadge}>
                    {profile.icon && (
                        <img src={profile.icon} alt="" className={styles.icon} aria-hidden="true" />
                    )}
                    <span className={styles.platformName}>{profile.platform}</span>
                </div>
                <span className={styles.handle}>@{profile.handle}</span>
            </div>

            {/* Ratings and Stats Grid */}
            <div className={styles.statsGrid}>
                {profile.currentRating !== undefined && (
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Current Rating</span>
                        <span className={styles.statValue}>{profile.currentRating}</span>
                    </div>
                )}
                {profile.maxRating !== undefined && (
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Max Rating</span>
                        <span className={styles.statValue}>{profile.maxRating}</span>
                    </div>
                )}
                {profile.problemsSolved !== undefined && (
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Solved</span>
                        <span className={styles.statValue}>{profile.problemsSolved}</span>
                    </div>
                )}
                {profile.rankTitle && (
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Rank</span>
                        <span className={styles.statValue}>{profile.rankTitle}</span>
                    </div>
                )}
            </div>

            {/* Key Highlights */}
            {profile.highlights && profile.highlights.length > 0 && (
                <ul className={styles.highlightsList}>
                    {profile.highlights.map((hl, i) => (
                        <li key={i} className={styles.highlightItem}>
                            {hl}
                        </li>
                    ))}
                </ul>
            )}

            {/* Profile Action Link */}
            <div className={styles.footer}>
                <TextLink href={profile.profileUrl} isExternal>
                    View Profile on {profile.platform}
                </TextLink>
            </div>
        </div>
    );
};

export default CompetitiveProfileCard;
