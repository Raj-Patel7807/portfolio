import type { ProjectItem, ProjectsSectionConfig } from '@/types/project';

export const projectsSectionConfig: ProjectsSectionConfig = {
    sectionNumber: '02',
    sectionTitle: 'Featured Case Studies & Systems',
    subtitle:
        'A selected collection of software architectures, systems engineering projects, and full-stack applications.',
    emptyStateMessage:
        'Projects data is currently being populated. Check back shortly or explore the GitHub repository.',
};

/**
 * Central Project Store
 * Empty array / placeholder mode: User will enter project details manually.
 *
 * Example structure:
 * {
 *   id: "example-system",
 *   title: "High Performance Data Pipeline",
 *   category: "Distributed Systems",
 *   shortDescription: "...",
 *   problemStatement: "...",
 *   solution: "...",
 *   engineeringHighlights: ["..."],
 *   technologies: ["TypeScript", "Node.js", "Docker"],
 *   image: { src: "/images/Education_Portal.png", alt: "..." },
 *   links: { github: "https://github.com/...", live: "https://..." },
 *   featured: true,
 *   year: "2025"
 * }
 */
export const projectsData: ProjectItem[] = [];
