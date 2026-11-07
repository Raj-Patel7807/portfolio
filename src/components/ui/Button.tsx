import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', children, className = '', ...rest }, ref) => {
        const variantClass = styles[variant] || styles.primary;
        const sizeClass = styles[size] || styles.md;

        return (
            <button
                ref={ref}
                className={`${styles.button} ${variantClass} ${sizeClass} ${className}`.trim()}
                {...rest}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
export default Button;
