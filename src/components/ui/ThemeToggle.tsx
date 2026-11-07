import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.css';

export interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
    const { resolvedTheme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            className={`${styles.toggle} ${className}`.trim()}
            onClick={toggleTheme}
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <span className={styles.icon} aria-hidden="true">
                {resolvedTheme === 'dark' ? '☀' : '☾'}
            </span>
            <span className={styles.srOnly}>
                {resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'}
            </span>
        </button>
    );
};

export default ThemeToggle;
