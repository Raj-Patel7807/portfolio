// Site data: profile, projects, ratings, timeline, links for Raj Patel
// Matched exactly to the Shane07p editorial system structure.

export const profile = {
    name: 'Raj Patel',
    email: 'rajpatel7807@gmail.com',
    resume: '/resume.pdf',
    city: 'Gandhinagar',
    pitch: 'I build backend systems, scalable web applications and solve algorithmic challenges. Student at DAU (formerly DA-IICT).',
    portrait: '/images/Raj.png' as string | undefined,
    github: { user: 'Raj-Patel7807', url: 'https://github.com/Raj-Patel7807' },
    linkedin: 'https://www.linkedin.com/in/raj-patel7807',
    discord: '',
};

export const problemsSolved = '1,000+';

export const marquee = [
    'Software developer',
    'Competitive programmer',
    'React 19 & TypeScript',
    'C++ & Algorithms',
    'PostgreSQL',
    'System Architecture',
    'Editorial Design',
    'DAU ’28',
];

export const exploring = {
    lead: 'Currently exploring',
    accent: 'distributed architectures, high-performance systems and developer tooling.',
};

export type Project = {
    name: string;
    kind: string;
    year: string;
    status?: string;
    summary: string;
    purpose: string;
    features: string[];
    build: string;
    stack: string[];
    links: { label: string; href: string }[];
    image?: string;
};

export const projects: Project[] = [
    {
        name: 'Education Portal',
        kind: 'Full-stack platform',
        year: '2026',
        summary:
            'A comprehensive educational management portal streamlining academic workflows, course management, and student communication.',
        purpose:
            'Built to provide a centralized hub for university departments, eliminating scattered resources and fragmented communication channels.',
        features: [
            'Course content distribution and centralized notes directory.',
            'Assignment submissions and structured grading overview.',
            'Role-based access for students, educators, and administrators.',
            'Real-time announcements and notification boards.',
        ],
        build: 'Full-stack architecture built with React, TypeScript, Node.js backend, and PostgreSQL database with optimized queries and role security.',
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'Vite'],
        links: [{ label: 'Source', href: 'https://github.com/Raj-Patel7807' }],
        image: '/images/Education_Portal.png',
    },
    {
        name: 'Snack Game Engine',
        kind: 'Interactive game',
        year: '2025',
        summary:
            'A high-framerate classic arcade game engine running in the browser with canvas optimization and responsive touch inputs.',
        purpose:
            'Engineered to explore low-latency game loops, collision-detection algorithms, and deterministic state updates in pure JavaScript.',
        features: [
            '60fps deterministic game loop using requestAnimationFrame.',
            'Custom spatial grid collision detection.',
            'Local storage high-score persistence and keyboard/touch navigation.',
        ],
        build: 'Zero-dependency canvas rendering with modular entity-component logic, optimizing draw calls and memory allocations.',
        stack: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Algorithms'],
        links: [{ label: 'Source', href: 'https://github.com/Raj-Patel7807' }],
        image: '/images/Snack_Game.png',
    },
    {
        name: 'Tetris System',
        kind: 'Algorithmic game',
        year: '2025',
        summary:
            'An accurate recreation of the iconic Tetris game adhering to official guideline rotation rules and ghost-piece projections.',
        purpose:
            'Built to test matrix transformation algorithms, SRS (Super Rotation System) kick tables, and board-clearing logic.',
        features: [
            'Full SRS wall-kick system and tetromino rotation matrices.',
            'Ghost piece drop projection and hold-queue mechanic.',
            'Progressive speed curve and multi-line clear combo multiplier.',
        ],
        build: 'Implemented with immutable board state transformations, discrete coordinate grids, and efficient line-clearing sweeps.',
        stack: ['JavaScript', 'HTML5 Canvas', 'Matrix Math', 'CSS3'],
        links: [{ label: 'Source', href: 'https://github.com/Raj-Patel7807' }],
        image: '/images/Tetris_Game.png',
    },
];

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

export const about = {
    headline: 'Hi, I’m Raj.',
    headlineAccent: 'Software engineer and algorithmic problem solver.',
    body: [
        'I am a student at Dhirubhai Ambani University (formerly DA-IICT) in Gandhinagar, pursuing B.Tech in Information and Communication Technology.',
        'I focus on building clean, high-performance web systems and developer tools. My foundation is built on continuous algorithmic challenge solving across Codeforces, LeetCode, and CodeChef.',
        'I believe in software craft: generous whitespace, elegant typography, strict types, and robust architecture over hype.',
    ],
    stats: [
        { v: '3K+', l: 'problems solved' },
        { v: 'DAU', l: 'B.Tech ICT' },
        { v: '100%', l: 'craft' },
    ],
    badge: 'DAU · B.TECH ICT · CLASS OF 2028 ·',
    now: [
        'Building performant web platforms and systems',
        'Solving advanced dynamic programming and graph problems',
        'Exploring distributed system architectures',
    ],
};
