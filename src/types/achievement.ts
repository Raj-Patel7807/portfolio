export type PlatformName =
    'Codeforces' | 'CodeChef' | 'LeetCode' | 'AtCoder' | 'HackerRank' | 'Other';

export interface CompetitivePlatformProfile {
    id: string;
    platform: PlatformName;
    handle: string;
    profileUrl: string;
    currentRating?: number | string;
    maxRating?: number | string;
    rankTitle?: string;
    globalRank?: number | string;
    problemsSolved?: number | string;
    icon?: string;
    highlights?: string[];
}

export interface MetricAchievement {
    id: string;
    value: string;
    label: string;
    context?: string;
    link?: string;
}

export interface MilestoneAchievement {
    id: string;
    title: string;
    issuer: string;
    date?: string;
    description?: string;
    credentialUrl?: string;
    category?: 'Academic' | 'Competition' | 'Hackathon' | 'Certification';
}

export interface AchievementsSectionConfig {
    sectionNumber?: string;
    sectionTitle?: string;
    subtitle?: string;
    metricsEmptyMessage?: string;
    profilesEmptyMessage?: string;
}
