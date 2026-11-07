import React from 'react';
import { Container, Button } from '@/components';
import type { FooterConfig } from '@/types/sections';
import styles from './Footer.module.css';

export interface FooterProps {
    config: FooterConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer} role="contentinfo">
            <Container width="default">
                <div className={styles.content}>
                    <div className={styles.copyCol}>
                        <p className={styles.copyright}>
                            © {config.year || new Date().getFullYear()} {config.authorName}. All
                            rights reserved.
                        </p>
                        {config.note && <p className={styles.note}>{config.note}</p>}
                    </div>

                    <div className={styles.actionCol}>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={scrollToTop}
                            aria-label="Scroll back to top of the page"
                        >
                            Back to Top ↑
                        </Button>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
