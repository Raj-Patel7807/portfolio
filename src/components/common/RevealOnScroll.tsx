import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './RevealOnScroll.module.css';

export interface RevealOnScrollProps {
    children: React.ReactNode;
    delayMs?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    as?: React.ElementType;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    delayMs = 0,
    direction = 'up',
    className = '',
    as: Component = 'div',
}) => {
    const { ref, isVisible } = useScrollReveal();

    const directionClass =
        direction === 'none'
            ? styles.fadeOnly
            : direction === 'down'
              ? styles.fromDown
              : direction === 'left'
                ? styles.fromLeft
                : direction === 'right'
                  ? styles.fromRight
                  : styles.fromUp;

    return (
        <Component
            ref={ref}
            className={`${styles.revealWrapper} ${directionClass} ${
                isVisible ? styles.revealed : ''
            } ${className}`.trim()}
            style={{ transitionDelay: `${delayMs}ms` }}
        >
            {children}
        </Component>
    );
};

export default RevealOnScroll;
