import React, { useState, useEffect } from 'react';
import { Container, ThemeToggle, Button } from '@/components';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import type { NavigationConfig } from '@/types/navigation';
import styles from './Navbar.module.css';

export interface NavbarProps {
    config: NavigationConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ config }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const sectionIds = config.navItems.map(item => item.id);
    const activeSection = useScrollSpy(sectionIds, 120);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`.trim()}>
            <Container width="wide" className={styles.navContainer}>
                <div className={styles.brand}>
                    <a href="#" className={styles.brandLink} aria-label={config.name}>
                        <span className={styles.monogram}>{config.monogram}</span>
                        <span className={styles.fullName}>{config.name}</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav} aria-label="Main Navigation">
                    <ul className={styles.navList}>
                        {config.navItems.map(item => {
                            const isActive = activeSection === item.id;
                            return (
                                <li key={item.id} className={styles.navItem}>
                                    <a
                                        href={item.href}
                                        className={`${styles.navLink} ${isActive ? styles.active : ''}`.trim()}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Header Right Actions */}
                <div className={styles.actions}>
                    <a
                        href={config.resume.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeLink}
                    >
                        <Button variant="secondary" size="sm">
                            {config.resume.label} ↗
                        </Button>
                    </a>
                    <ThemeToggle />

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        className={styles.mobileToggle}
                        onClick={toggleMobileMenu}
                        aria-expanded={mobileMenuOpen}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span className={styles.hamburger}>
                            <span
                                className={`${styles.bar} ${mobileMenuOpen ? styles.barOpenTop : ''}`}
                            />
                            <span
                                className={`${styles.bar} ${mobileMenuOpen ? styles.barOpenBottom : ''}`}
                            />
                        </span>
                    </button>
                </div>
            </Container>

            {/* Mobile Drawer Menu */}
            <div
                className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.drawerOpen : ''}`.trim()}
                aria-hidden={!mobileMenuOpen}
            >
                <Container className={styles.drawerContent}>
                    <nav aria-label="Mobile Navigation">
                        <ul className={styles.mobileNavList}>
                            {config.navItems.map(item => {
                                const isActive = activeSection === item.id;
                                return (
                                    <li key={item.id} className={styles.mobileNavItem}>
                                        <a
                                            href={item.href}
                                            className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`.trim()}
                                            onClick={closeMobileMenu}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                            <li className={styles.mobileNavItem}>
                                <a
                                    href={config.resume.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mobileNavLink}
                                    onClick={closeMobileMenu}
                                >
                                    {config.resume.label} ↗
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </div>
        </header>
    );
};

export default Navbar;
