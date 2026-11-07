import React from 'react';
import styles from './Divider.module.css';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
}

export const Divider: React.FC<DividerProps> = ({ spacing = 'md', className = '', ...rest }) => {
    const spacingClass = styles[spacing] || styles.md;

    return <hr className={`${styles.divider} ${spacingClass} ${className}`.trim()} {...rest} />;
};

export default Divider;
