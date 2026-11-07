import React from 'react';
import { Navbar, Container, Divider } from '@/components';
import { Hero, Marquee, ProjectsSection } from '@/sections';
import { navigationConfig, heroConfig, marqueeConfig } from '@/data/hero';
import { projectsData, projectsSectionConfig } from '@/data/projects';

export const App: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Editorial Navigation */}
            <Navbar config={navigationConfig} />

            <main style={{ flex: 1 }}>
                {/* Editorial Hero Section */}
                <Hero config={heroConfig} />

                {/* Seamless Continuous Marquee */}
                <Marquee config={marqueeConfig} />

                {/* Anchor About placeholder section */}
                <section id="about" style={{ padding: 'var(--section-gap) 0' }}>
                    <Container>
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-accent-highlight)',
                            }}
                        >
                            SECTION 01
                        </span>
                        <h2 style={{ marginTop: 'var(--space-2)' }}>About</h2>
                        <p style={{ marginTop: 'var(--space-2)' }}>
                            Editorial narrative and biographical details will be rendered in
                            subsequent phases.
                        </p>
                    </Container>
                </section>

                <Divider spacing="none" />

                {/* Editorial Projects & Case Studies System */}
                <ProjectsSection config={projectsSectionConfig} projects={projectsData} />

                <Divider spacing="none" />

                {/* Anchor Achievements placeholder section */}
                <section id="achievements" style={{ padding: 'var(--section-gap) 0' }}>
                    <Container>
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-accent-highlight)',
                            }}
                        >
                            SECTION 03
                        </span>
                        <h2 style={{ marginTop: 'var(--space-2)' }}>
                            Achievements & Competitive Programming
                        </h2>
                        <p style={{ marginTop: 'var(--space-2)' }}>
                            Competitive programming profiles and metrics will be structured in Phase
                            5.
                        </p>
                    </Container>
                </section>

                <Divider spacing="none" />

                {/* Anchor Experience placeholder section */}
                <section id="experience" style={{ padding: 'var(--section-gap) 0' }}>
                    <Container>
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-accent-highlight)',
                            }}
                        >
                            SECTION 04
                        </span>
                        <h2 style={{ marginTop: 'var(--space-2)' }}>Experience</h2>
                        <p style={{ marginTop: 'var(--space-2)' }}>
                            Professional journey and leadership timeline will be structured in Phase
                            6.
                        </p>
                    </Container>
                </section>

                <Divider spacing="none" />

                {/* Anchor Contact placeholder section */}
                <section id="contact" style={{ padding: 'var(--section-gap) 0' }}>
                    <Container>
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-accent-highlight)',
                            }}
                        >
                            SECTION 05
                        </span>
                        <h2 style={{ marginTop: 'var(--space-2)' }}>Contact</h2>
                        <p style={{ marginTop: 'var(--space-2)' }}>
                            Inquiries and direct channels will be connected in Phase 6.
                        </p>
                    </Container>
                </section>
            </main>

            <footer
                style={{
                    borderTop: '1px solid var(--color-border)',
                    padding: 'var(--space-8) 0',
                    backgroundColor: 'var(--color-surface)',
                }}
            >
                <Container>
                    <p
                        style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-tertiary)',
                        }}
                    >
                        © {new Date().getFullYear()} {navigationConfig.name}. All rights reserved.
                    </p>
                </Container>
            </footer>
        </div>
    );
};

export default App;
