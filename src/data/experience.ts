export const problemsSolved = '1,000+';

export const proof = {
    before: [{ v: problemsSolved, l: 'problems solved across competitive programming platforms' }],
    after: [
        { v: 'DAU', l: 'Information & Communication Technology' },
        { v: '100%', l: 'commitment to clean engineering & craft' },
    ],
};

export const codeforces = {
    handle: 'Raj_Patel7807',
    url: 'https://codeforces.com/profile/Raj_Patel7807',
    note: 'Active Contestant',
    scale: 3000,
    fallback: { rating: 1400, rank: 'specialist', maxRating: 1400 },
};

export const platforms = [
    {
        platform: 'LeetCode',
        handle: 'Raj-Patel7807',
        href: 'https://leetcode.com/u/Raj-Patel7807/',
        rating: 2059,
        scale: 3200,
        title: 'Knight',
        note: 'Algorithmic Problem Solving',
    },
    {
        platform: 'CodeChef',
        handle: 'raj_patel7807',
        href: 'https://www.codechef.com/users/raj_patel7807',
        rating: 1650,
        scale: 3000,
        title: '3 Star',
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

export const timeline: { year: string; items: Milestone[] }[] = [
    {
        year: '2026',
        items: [
            {
                kind: 'Academics',
                title: 'DAU (formerly DA-IICT)',
                detail: 'B.Tech in Information and Communication Technology.',
                stat: 'DAU',
                of: 'Gandhinagar',
            },
        ],
    },
    {
        year: 'Competitive',
        items: [
            {
                kind: 'Algorithms',
                title: 'Competitive Programming Milestones',
                detail: 'Active problem solver across Codeforces, LeetCode, and CodeChef.',
                stat: '1K+',
                of: 'problems solved',
            },
        ],
    },
];

export const experience = [
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

export const skills = [
    'C++',
    'TypeScript',
    'JavaScript',
    'Python',
    'SQL',
    'React 19',
    'Node.js',
    'PostgreSQL',
    'Vite',
    'Git',
    'Docker',
    'Data Structures & Algorithms',
    'System Design',
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
