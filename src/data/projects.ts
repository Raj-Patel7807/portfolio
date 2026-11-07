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
