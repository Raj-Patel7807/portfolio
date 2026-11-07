import React from 'react';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    width?: 'default' | 'wide' | 'narrow';
    className?: string;
    as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    width = 'default',
    className = '',
    as: Component = 'div',
    ...rest
}) => {
    const widthClass =
        width === 'wide' ? styles.wide : width === 'narrow' ? styles.narrow : styles.default;

    return (
        <Component className={`${styles.container} ${widthClass} ${className}`.trim()} {...rest}>
            {children}
        </Component>
    );
};

export default Container;
