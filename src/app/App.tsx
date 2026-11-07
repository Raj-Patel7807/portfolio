import React from 'react';
import { Navbar, Footer } from '@/components';
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
            {/* Editorial Navigation */}
            <Navbar config={navigationConfig} />

            <main style={{ flex: 1 }}>
                {/* Editorial Hero Section */}
                <Hero config={heroConfig} />

                {/* Seamless Continuous Marquee */}
                <Marquee config={marqueeConfig} />

                {/* About Section */}
                <AboutSection config={aboutConfig} />

                {/* Featured Case Studies & Systems */}
                <ProjectsSection config={projectsSectionConfig} projects={projectsData} />

                {/* Achievements & Competitive Programming */}
                <AchievementsSection
                    config={achievementsSectionConfig}
                    metrics={metricAchievementsData}
                    profiles={competitiveProfilesData}
                    milestones={milestonesData}
                />

                {/* Currently Building */}
                <CurrentlyBuildingSection items={currentlyBuildingData} />

                {/* Experience & Leadership */}
                <ExperienceSection experiences={experienceData} />

                {/* Technical Stack */}
                <TechStackSection categories={skillsData} />

                {/* Contact Section */}
                <ContactSection config={contactConfig} />
            </main>

            {/* Editorial Footer */}
            <Footer config={footerConfig} />
        </div>
    );
};

export default App;
