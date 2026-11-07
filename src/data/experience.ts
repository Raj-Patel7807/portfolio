export const problemsSolved = '1,000+';

export const proof = {
    before: [{ v: problemsSolved, l: 'problems solved across competitive programming platforms' }],
    after: [
        { v: 'DAU', l: 'Information & Communication Technology' },
        { v: '100%', l: 'commitment to clean engineering & craft' },
    ],
};

export const codeforces = {
    handle: 'Raj_Patel_7807',
    url: 'https://codeforces.com/profile/Raj_Patel_7807',
    note: 'Top 1000 in india',
    scale: 4000,
    fallback: { rating: 1642, rank: 'expert', maxRating: 1642, maxRank: 'expert' },
};

export const platforms = [
    {
        platform: 'LeetCode',
        handle: 'Raj_Patel_7807',
        href: 'https://leetcode.com/u/Raj_Patel_7807/',
        rating: 2059,
        scale: 3500,
        title: 'Knight',
        note: 'Top 1.8% globally',
    },
    {
        platform: 'CodeChef',
        handle: 'raj_patel_7807',
        href: 'https://www.codechef.com/users/raj_patel_7807',
        rating: 1817,
        scale: 3400,
        title: '4 Star',
        note: 'Contestant',
    },
];

export type Milestone = {
    kind: string;
    title: string;
    detail: string;
    stat: string;
    of: string;
    field?: { rank: number; total: number; top: string; label: string };
    post?: { url: string; image?: string };
};

export type RoleItem = {
    org: string;
    role: string;
    when: string;
    where: string;
    bullets: string[];
};

export const timeline: { year: string; items: Milestone[] }[] = [];

// Technical Work & Professional Experience
export const experience: RoleItem[] = [
    {
        org: 'Software Development & Systems',
        role: 'Full-Stack Developer & Systems Builder',
        when: '2024 – Present',
        where: 'Gandhinagar, India',
        bullets: [
            'Architecting modern frontend applications with React 19, TypeScript, and fluid CSS.',
            'Building performant backend services and database systems with PostgreSQL.',
            'Practicing algorithmic problem solving and clean software craft.',
        ],
    },
];

// Positions of Responsibility (Leadership, Clubs, TA & Community Mentoring)
export const positionsOfResponsibility: RoleItem[] = [
    {
        org: 'Programming Club',
        role: 'Deputy Convener: Club Leadership, Mentoring, Problem Setting',
        when: 'April 2026 - Present',
        where: 'DA-IICT',
        bullets: [
            '**Assisting in leading the Programming Club**, organizing **Pre-Placement Tests** for 450+ students and the club’s flagship event with 120+ participants.',
            'Organized **10+ intra-college contests** (80+ participants) and programming events at college tech-fests (100+ participants), handling **problem setting, testing**.',
            '**Mentoring juniors** through sessions and post-contest discussions.',
            '**Previously served as Batch Representative (August 2025 – March 2026).**',
        ],
    },
    {
        org: 'ACM India Summer School on CP',
        role: 'Teaching Assistant: Mentor, Organizer',
        when: 'June 2026',
        where: 'DA-IICT',
        bullets: [
            'Assisted **Prof. Rachit Chhaya** and **Anup Kalbalia (former CEO of CodeChef)** in 10+ sessions and 10+ contests.',
            '**Mentored** 50+ students by resolving CP and coding doubts during lectures, practice sessions, and contests.',
        ],
    },
];

// Flat list maintained for backward compatibility
export type SkillCategory = {
    category: string;
    items: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        category: 'Languages',
        items: ['Java', 'C++', 'Python', 'C', 'TypeScript', 'SQL'],
    },
    {
        category: 'Backend & Frameworks',
        items: ['Spring Boot', 'Spring Security', 'FastAPI', 'LangGraph'],
    },
    {
        category: 'Frontend & UI',
        items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
        category: 'Databases & Cloud',
        items: ['PostgreSQL', 'Supabase', 'Redis'],
    },
    {
        category: 'DevOps & Tools',
        items: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Linux', 'Cloudflare', 'Render'],
    },
];

// Flat list maintained for backward compatibility
export const skills = [
    'Java',
    'C++',
    'Python',
    'C',
    'TypeScript',
    'SQL',
    'Spring Boot',
    'Spring Security',
    'PostgreSQL',
    'React',
    'Tailwind CSS',
    'FastAPI',
    'Supabase',
    'LangGraph',
    'Git',
    'GitHub',
    'CI/CD',
    'Docker',
    'Cloudflare',
];

export const featuredRepos = [
    {
        repo: 'portfolio',
        title: 'Portfolio',
        desc: 'Editorial personal portfolio built with React 19, TypeScript, Vite, and custom CSS design system.',
        lang: 'TypeScript',
        stars: 1,
    },
];

export const githubFallback = { publicRepos: 15, followers: 52 };

export const showGallery = false;

export type GalleryItem = { cap: string; width: string; tilt: string; image?: string };

export const gallery: GalleryItem[] = [];
