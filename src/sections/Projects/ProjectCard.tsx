import React from 'react';
import type { ProjectItem } from '@/types/project';
import { TechBadge } from '@/components/ui/TechBadge';
import { ProjectLinksView } from '@/components/ui/ProjectLinksView';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
    project: ProjectItem;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <article
            className={`${styles.projectArticle} ${isEven ? styles.layoutNormal : styles.layoutReversed}`}
            id={`project-${project.id}`}
        >
            <div className={styles.contentCol}>
                {/* Meta Header */}
                <div className={styles.metaHeader}>
                    <span className={styles.category}>{project.category}</span>
                    {project.year && <span className={styles.year}>{project.year}</span>}
                    {project.status && (
                        <span
                            className={`${styles.statusBadge} ${
                                project.status === 'completed'
                                    ? styles.statusCompleted
                                    : project.status === 'in-progress'
                                      ? styles.statusProgress
                                      : styles.statusArchived
                            }`}
                        >
                            {project.status}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className={styles.title}>{project.title}</h3>

                {/* Description */}
                <p className={styles.shortDescription}>{project.shortDescription}</p>

                {/* Problem & Solution (Editorial Highlights) */}
                {(project.problemStatement || project.solution) && (
                    <div className={styles.narrativeBox}>
                        {project.problemStatement && (
                            <div className={styles.narrativeItem}>
                                <span className={styles.narrativeLabel}>Challenge:</span>
                                <p className={styles.narrativeText}>{project.problemStatement}</p>
                            </div>
                        )}
                        {project.solution && (
                            <div className={styles.narrativeItem}>
                                <span className={styles.narrativeLabel}>Approach:</span>
                                <p className={styles.narrativeText}>{project.solution}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Engineering Highlights */}
                {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
                    <div className={styles.highlightsBox}>
                        <span className={styles.highlightsTitle}>Key Engineering Highlights:</span>
                        <ul className={styles.highlightsList}>
                            {project.engineeringHighlights.map((hl, i) => (
                                <li key={i} className={styles.highlightItem}>
                                    {hl}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technology Tags */}
                <div className={styles.techList}>
                    {project.technologies.map(tech => (
                        <TechBadge key={tech} label={tech} />
                    ))}
                </div>

                {/* Action Links */}
                <ProjectLinksView links={project.links} />
            </div>

            {/* Optional Project Visual */}
            {project.image && (
                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={project.image.src}
                            alt={project.image.alt}
                            className={styles.image}
                            loading="lazy"
                        />
                        {project.image.caption && (
                            <p className={styles.caption}>{project.image.caption}</p>
                        )}
                    </div>
                </div>
            )}
        </article>
    );
};

export default ProjectCard;
