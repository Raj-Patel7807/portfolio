export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface ProjectLinks {
    github?: string;
    live?: string;
    demo?: string;
    docs?: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    problemStatement?: string;
    solution?: string;
    engineeringHighlights?: string[];
    technologies: string[];
    image?: {
        src: string;
        alt: string;
        caption?: string;
    };
    links?: ProjectLinks;
    status?: ProjectStatus;
    featured: boolean;
    year?: string | number;
}

export interface ProjectsSectionConfig {
    sectionNumber?: string;
    sectionTitle?: string;
    subtitle?: string;
    emptyStateMessage?: string;
}
