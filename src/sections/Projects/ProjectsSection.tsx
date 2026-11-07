import React from 'react';
import { Container, SectionLabel, TextLink } from '@/components';
import type { ProjectItem, ProjectsSectionConfig } from '@/types/project';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export interface ProjectsSectionProps {
    config: ProjectsSectionConfig;
    projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ config, projects }) => {
    const hasProjects = projects.length > 0;

    return (
        <section className={styles.section} id="projects" aria-label="Projects">
            <Container width="default">
                {/* Section Header */}
                <div className={styles.header}>
                    <SectionLabel
                        number={config.sectionNumber || '02'}
                        label={config.sectionTitle || 'Featured Projects'}
                    />
                    {config.subtitle && <p className={styles.subtitle}>{config.subtitle}</p>}
                </div>

                {/* Project List or Graceful Empty State */}
                {hasProjects ? (
                    <div className={styles.projectsList}>
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon} aria-hidden="true">
                            ❖
                        </div>
                        <h3 className={styles.emptyTitle}>Curating Engineering Case Studies</h3>
                        <p className={styles.emptyMessage}>
                            {config.emptyStateMessage ||
                                'Projects data is currently being populated. In the meantime, explore recent open-source code and commit history on GitHub.'}
                        </p>
                        <div className={styles.emptyAction}>
                            <TextLink href="https://github.com/Raj-Patel7807" isExternal>
                                Visit GitHub Repositories
                            </TextLink>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default ProjectsSection;
