export interface CurrentlyBuildingItem {
    id: string;
    title: string;
    shortDescription: string;
    status: string; // e.g. "Prototyping", "Researching", "Benchmarking"
    technologies?: string[];
    link?: string;
    linkLabel?: string;
}

export interface ExperienceItem {
    id: string;
    role: string;
    organization: string;
    duration: string;
    location?: string;
    type?: 'Full-time' | 'Internship' | 'Contract' | 'Leadership' | 'Open Source';
    description?: string;
    contributions: string[];
    technologies?: string[];
    link?: string;
}

export interface SkillCategory {
    id: string;
    name: string;
    skills: string[];
}

export interface AboutConfig {
    sectionNumber?: string;
    sectionTitle?: string;
    heading: string;
    paragraphs: string[];
    portrait?: {
        src: string;
        alt: string;
    };
    details?: {
        label: string;
        value: string;
    }[];
}

export interface ContactConfig {
    sectionNumber?: string;
    sectionTitle?: string;
    heading: string;
    description: string;
    email: string;
    location?: string;
    resumeUrl?: string;
    socials: {
        platform: string;
        label: string;
        url: string;
    }[];
}

export interface FooterConfig {
    authorName: string;
    year?: number;
    note?: string;
}
