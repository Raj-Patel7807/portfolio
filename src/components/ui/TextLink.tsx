import React from 'react';
import styles from './TextLink.module.css';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    isExternal?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({
    children,
    isExternal = false,
    className = '',
    href,
    ...rest
}) => {
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <a
            href={href}
            className={`${styles.link} ${className}`.trim()}
            {...externalProps}
            {...rest}
        >
            <span>{children}</span>
            {isExternal && (
                <span className={styles.arrow} aria-hidden="true">
                    ↗
                </span>
            )}
        </a>
    );
};

export default TextLink;
