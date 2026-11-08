export const problemsSolved = '3,100+';

export const proof = {
    before: [{ v: problemsSolved, l: 'problems solved across competitive programming sites' }],
    after: [
        { v: '4 Star', l: 'CodeChef rating' },
        { v: 'DA-IICT', l: 'Information & Communication Technology' },
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
    {
        platform: 'Codolio',
        handle: 'Raj_Patel_7807',
        href: 'https://codolio.com/profile/Raj_Patel_7807',
        rating: 126,
        scale: 42000,
        title: '3100+ Problems Solved',
        note: '150+ contest participated',
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

export const timeline: { year: string; items: Milestone[] }[] = [
    {
        year: '2026',
        items: [
            {
                kind: 'ICPC',
                title: 'ICPC Preliminary Round',
                detail: '',
                stat: '#562',
                of: 'of 3800+ Teams',
                field: {
                    rank: 562,
                    total: 3883,
                    top: 'Top 10 in DA-IICT',
                    label: '',
                },
            },
        ],
    },
    {
        year: '2024',
        items: [
            {
                kind: 'Academics',
                title: 'ACPC 2024',
                detail: '99.79 percentile, All Gujarat Rank.',
                stat: '65',
                of: 'of 38,000+',
                field: { rank: 38, total: 38000, top: 'Top 0.2%', label: '38,000 candidates' },
            },
            {
                kind: 'Entrance',
                title: 'JEE Mains 2024',
                detail: '98.77 percentile, All India Rank.',
                stat: '19,520',
                of: 'of 1.5 million',
                field: { rank: 19520, total: 1500000, top: 'Top 1.23%', label: '1.5M candidates' },
            },
        ],
    },

    {
        year: 'Campus',
        items: [
            {
                kind: 'Contests',
                title: 'Won 10+ institute programming events',
                detail: 'IPC, BlindCode, Fizzbuzz, Interwing, Robin Relay and more..',
                stat: '10+',
                of: 'contest wins',
            },
        ],
    },
];

// Technical Work & Professional Experience
export const experience: RoleItem[] = [
    {
        org: 'Rorfost',
        role: 'Founder & Independent Software Engineer',
        when: '2026 - Present',
        where: 'Self-employed / Freelance',
        bullets: [
            'Founded Rorfost as an independent initiative for building software products and undertaking **freelance engineering projects**.',
            'Design and develop end-to-end software solutions, handling architecture, implementation, deployment, and maintenance.',
            'Built and deployed a school management platform adopted by a school, **serving 500+ monthly visitors**.',
        ],
    },
    {
        org: 'CodeHurdle',
        role: 'PCD Head',
        when: 'August 2026 - Present',
        where: 'Remote',
        bullets: [
            'Creating beginner-friendly Post-Contest Discussion (PCD) videos with explanations of competitive programming problems and solutions.',
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
        items: ['C++', 'Java', 'Python', 'C', 'TypeScript', 'SQL'],
    },
    {
        category: 'Backend & Frameworks',
        items: ['Spring Boot', 'Spring Security', 'FastAPI', 'LangGraph'],
    },
    {
        category: 'Frontend & UI',
        items: [
            'React',
            // 'Next.js',
            'Tailwind CSS',
            'Vite',
            // 'HTML',
            // 'CSS',
        ],
    },
    {
        category: 'Databases',
        items: ['PostgreSQL', 'Redis', 'Supabase', 'pgvector'],
    },
    {
        category: 'DevOps & Tools',
        items: [
            'Git',
            'GitHub',
            'Docker',
            'GitHub Actions',
            'Linux',
            // 'Maven',
            // 'CMake',
            'Cloudflare',
            'Render',
            'Vercel',
        ],
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
        repo: 'rooksac',
        title: 'RookSac',
        desc: 'A modern C++20 chess engine with advanced search algorithms and UCI support.',
        lang: 'C++20',
        href: 'https://github.com/Raj-Patel7807/rooksac',
        stars: 1,
    },
    {
        repo: 'rflow',
        title: 'RFlow',
        desc: 'A multi-tenant API gateway for routing and managing requests across backend services.',
        lang: 'Java',
        href: 'https://github.com/Raj-Patel7807/rflow',
        stars: 2,
    },
    {
        repo: 'dibyt',
        title: 'Dibyt',
        desc: 'A self-hosted file distribution system focused on parallel, resumable and reliable transfers.',
        lang: 'C++20',
        href: 'https://github.com/Raj-Patel7807/dibyt',
        stars: 1,
    },
    // {
    //     repo: "school-platform",
    //     title: "School Platform",
    //     desc: "A Gujarati-first school portal with public information, academic resources and an admin panel.",
    //     lang: "Java",
    //     href: "https://github.com/Rorfost/school-platform",
    //     stars: 1,
    // },
    {
        repo: 'api-health-monitoring-platform',
        title: 'API Health Monitoring',
        desc: 'A distributed API monitoring platform built around a modular backend and asynchronous workers.',
        lang: 'Python',
        href: 'https://github.com/Raj-Patel7807/api-health-monitoring-platform',
        stars: 4,
    },
    {
        repo: 'RepoPulse',
        title: 'RepoPulse',
        desc: 'A GitHub-inspired repository management and database systems project.',
        lang: 'Java',
        href: 'https://github.com/Raj-Patel7807/RepoPulse',
        stars: 3,
    },
    {
        repo: 'RppLang',
        title: 'R++ Language',
        desc: 'A custom programming language built in Java, featuring a lexer, parser, AST and interpreter.',
        lang: 'Java',
        href: 'https://github.com/Raj-Patel7807/RppLang',
        stars: 3,
    },
];

export const githubFallback = { publicRepos: 15, followers: 52 };

export const showGallery = false;

export type GalleryItem = { cap: string; width: string; tilt: string; image?: string };

export const gallery: GalleryItem[] = [];
