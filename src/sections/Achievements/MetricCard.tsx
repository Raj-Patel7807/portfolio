import React from 'react';
import type { MetricAchievement } from '@/types/achievement';
import { TextLink } from '@/components';
import styles from './MetricCard.module.css';

export interface MetricCardProps {
    metric: MetricAchievement;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
    return (
        <div className={styles.card}>
            <div className={styles.valueRow}>
                <span className={styles.value}>{metric.value}</span>
            </div>
            <div className={styles.label}>{metric.label}</div>
            {metric.context && <p className={styles.context}>{metric.context}</p>}
            {metric.link && (
                <div className={styles.linkRow}>
                    <TextLink href={metric.link} isExternal>
                        View Verification
                    </TextLink>
                </div>
            )}
        </div>
    );
};

export default MetricCard;
