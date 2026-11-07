import React from 'react';
import { Navbar, Footer, RevealOnScroll } from '@/components';
import {
    Hero,
    Marquee,
    AboutSection,
    ProjectsSection,
    AchievementsSection,
    CurrentlyBuildingSection,
    ExperienceSection,
    TechStackSection,
    ContactSection,
} from '@/sections';
import {
    navigationConfig,
    heroConfig,
    marqueeConfig,
    projectsData,
    projectsSectionConfig,
    metricAchievementsData,
    competitiveProfilesData,
    milestonesData,
    achievementsSectionConfig,
    aboutConfig,
    currentlyBuildingData,
    experienceData,
    skillsData,
    contactConfig,
    footerConfig,
} from '@/data';

export const App: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Skip to Main Content Link for Accessibility */}
            <a
                href="#main-content"
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    top: 'var(--space-2)',
                    zIndex: 9999,
                    padding: 'var(--space-2) var(--space-4)',
                    backgroundColor: 'var(--color-accent-highlight)',
                    color: '#ffffff',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                }}
                onFocus={e => {
                    e.currentTarget.style.left = 'var(--space-4)';
                }}
                onBlur={e => {
                    e.currentTarget.style.left = '-9999px';
                }}
            >
                Skip to main content
            </a>

            {/* Editorial Navigation */}
            <Navbar config={navigationConfig} />

            <main id="main-content" tabIndex={-1} style={{ flex: 1, outline: 'none' }}>
                {/* Editorial Hero Section */}
                <Hero config={heroConfig} />

                {/* Seamless Continuous Marquee */}
                <Marquee config={marqueeConfig} />

                {/* About Section */}
                <RevealOnScroll direction="up">
                    <AboutSection config={aboutConfig} />
                </RevealOnScroll>

                {/* Featured Case Studies & Systems */}
                <RevealOnScroll direction="up">
                    <ProjectsSection config={projectsSectionConfig} projects={projectsData} />
                </RevealOnScroll>

                {/* Achievements & Competitive Programming */}
                <RevealOnScroll direction="up">
                    <AchievementsSection
                        config={achievementsSectionConfig}
                        metrics={metricAchievementsData}
                        profiles={competitiveProfilesData}
                        milestones={milestonesData}
                    />
                </RevealOnScroll>

                {/* Currently Building */}
                <RevealOnScroll direction="up">
                    <CurrentlyBuildingSection items={currentlyBuildingData} />
                </RevealOnScroll>

                {/* Experience & Leadership */}
                <RevealOnScroll direction="up">
                    <ExperienceSection experiences={experienceData} />
                </RevealOnScroll>

                {/* Technical Stack */}
                <RevealOnScroll direction="up">
                    <TechStackSection categories={skillsData} />
                </RevealOnScroll>

                {/* Contact Section */}
                <RevealOnScroll direction="up">
                    <ContactSection config={contactConfig} />
                </RevealOnScroll>
            </main>

            {/* Editorial Footer */}
            <Footer config={footerConfig} />
        </div>
    );
};

export default App;
