import React from 'react';
import styles from './SectionLabel.module.css';

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
    number?: string;
    label: string;
    className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
    number,
    label,
    className = '',
    ...rest
}) => {
    return (
        <div className={`${styles.wrapper} ${className}`.trim()} {...rest}>
            {number && <span className={styles.number}>{number}</span>}
            <span className={styles.label}>{label}</span>
            <span className={styles.line} aria-hidden="true" />
        </div>
    );
};

export default SectionLabel;
