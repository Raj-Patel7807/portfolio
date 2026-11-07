import type {
    MetricAchievement,
    CompetitivePlatformProfile,
    MilestoneAchievement,
    AchievementsSectionConfig,
} from '@/types/achievement';

export const achievementsSectionConfig: AchievementsSectionConfig = {
    sectionNumber: '03',
    sectionTitle: 'Achievements & Competitive Programming',
    subtitle:
        'Demonstrated problem solving, algorithmic challenges, and competitive programming profiles.',
    metricsEmptyMessage:
        'Numerical statistics and milestones will appear once manually populated in data files.',
    profilesEmptyMessage:
        'Competitive programming platform handles and ratings will appear once manually populated in data files.',
};

/**
 * Central Metric Highlights Store
 * High-impact numerical highlights (e.g. contest rating, problems solved, rankings)
 * Keep empty: user will populate manually.
 */
export const metricAchievementsData: MetricAchievement[] = [];

/**
 * Central Competitive Programming Profiles Store
 * Profiles for Codeforces, CodeChef, LeetCode, etc.
 * Keep empty: user will populate manually.
 */
export const competitiveProfilesData: CompetitivePlatformProfile[] = [];

/**
 * Central Milestone Achievements Store
 * Academic honors, hackathon awards, certifications.
 * Keep empty: user will populate manually.
 */
export const milestonesData: MilestoneAchievement[] = [];
