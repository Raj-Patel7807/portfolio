import React from 'react';
import type { MarqueeConfig } from '@/types/navigation';
import styles from './Marquee.module.css';

export interface MarqueeProps {
    config: MarqueeConfig;
    className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ config, className = '' }) => {
    const { items, speedSeconds = 25 } = config;

    return (
        <div
            className={`${styles.marqueeWrapper} ${className}`.trim()}
            aria-label="Core competencies marquee"
            role="region"
        >
            <div className={styles.marqueeTrack} style={{ animationDuration: `${speedSeconds}s` }}>
                {/* Render twice for continuous seamless loop */}
                <div className={styles.marqueeGroup}>
                    {items.map((item, idx) => (
                        <span key={`group1-${idx}`} className={styles.item}>
                            <span className={styles.bullet} aria-hidden="true">
                                ✦
                            </span>
                            <span>{item}</span>
                        </span>
                    ))}
                </div>
                <div className={styles.marqueeGroup} aria-hidden="true">
                    {items.map((item, idx) => (
                        <span key={`group2-${idx}`} className={styles.item}>
                            <span className={styles.bullet} aria-hidden="true">
                                ✦
                            </span>
                            <span>{item}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
