import type {
    CurrentlyBuildingItem,
    ExperienceItem,
    SkillCategory,
    AboutConfig,
    ContactConfig,
    FooterConfig,
} from '@/types/sections';

/**
 * Currently Building Data Store
 * Keep empty or with structured templates. User will populate manually.
 */
export const currentlyBuildingData: CurrentlyBuildingItem[] = [];

/**
 * Experience and Leadership Data Store
 * Keep empty. User will populate manually.
 */
export const experienceData: ExperienceItem[] = [];

/**
 * Technical Stack Categories
 * Clean grouped skills without artificial percentage bars.
 */
export const skillsData: SkillCategory[] = [
    {
        id: 'languages',
        name: 'Languages',
        skills: ['C++', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML5 & CSS3'],
    },
    {
        id: 'frontend',
        name: 'Frontend Engineering',
        skills: [
            'React 19',
            'Vite',
            'CSS Custom Properties',
            'Responsive Design',
            'Web Accessibility (a11y)',
        ],
    },
    {
        id: 'backend',
        name: 'Backend & Systems',
        skills: ['Node.js', 'Express', 'RESTful APIs', 'System Design'],
    },
    {
        id: 'databases',
        name: 'Databases & Storage',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
        id: 'tools',
        name: 'Developer Tooling & DevOps',
        skills: ['Git & GitHub', 'Docker', 'Linux / Bash', 'VS Code', 'Postman'],
    },
    {
        id: 'concepts',
        name: 'Core Computer Science',
        skills: [
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Database Management Systems',
            'Operating Systems',
            'Computer Networks',
        ],
    },
];

/**
 * About Section Configuration
 * No fake personal biography or fabricated claims.
 */
export const aboutConfig: AboutConfig = {
    sectionNumber: '01',
    sectionTitle: 'About & Background',
    heading: 'Engineering robust software with mathematical rigor and clean design.',
    paragraphs: [
        'I am a software engineer focused on building performant, reliable, and well-architected applications. My work spans full-stack web platforms, system tools, and algorithm design.',
        'With a strong foundation in competitive programming and computer science fundamentals, I approach engineering problems with analytical discipline, prioritizing clean abstractions and maintainable codebases.',
    ],
    portrait: {
        src: '/images/Raj.png',
        alt: 'Raj Patel',
    },
    details: [
        { label: 'Role', value: 'Software Engineer' },
        { label: 'Location', value: 'India' },
        { label: 'Focus', value: 'Systems & Full-Stack Development' },
    ],
};

/**
 * Contact Section Configuration
 */
export const contactConfig: ContactConfig = {
    sectionNumber: '06',
    sectionTitle: 'Get In Touch',
    heading: 'Let’s discuss engineering, systems, or new opportunities.',
    description:
        'Whether you have an open role, an interesting project, or want to collaborate on software architecture, my inbox is always open.',
    email: 'rajpatel7807@gmail.com',
    location: 'Gujarat, India',
    resumeUrl: '/resume.pdf',
    socials: [
        { platform: 'GitHub', label: 'GitHub', url: 'https://github.com/Raj-Patel7807' },
        { platform: 'LinkedIn', label: 'LinkedIn', url: 'https://linkedin.com' },
        { platform: 'Codeforces', label: 'Codeforces', url: 'https://codeforces.com' },
        { platform: 'CodeChef', label: 'CodeChef', url: 'https://codechef.com' },
        { platform: 'LeetCode', label: 'LeetCode', url: 'https://leetcode.com' },
    ],
};

/**
 * Footer Configuration
 */
export const footerConfig: FooterConfig = {
    authorName: 'Raj Patel',
    year: new Date().getFullYear(),
    note: 'Designed with editorial minimalism & built with React 19 + TypeScript.',
};
