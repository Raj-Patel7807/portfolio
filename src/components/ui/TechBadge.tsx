import React from 'react';
import styles from './TechBadge.module.css';

export interface TechBadgeProps {
    label: string;
    className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, className = '' }) => {
    return <span className={`${styles.badge} ${className}`.trim()}>{label}</span>;
};

export default TechBadge;
