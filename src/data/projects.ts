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
    impact?: string | null;
};

export const projects: Project[] = [
    {
        name: 'RookSac',
        kind: 'Systems Programming / Chess Engine',
        year: '2026',
        status: 'Core Engine Complete',
        summary:
            'A modern C++20 chess engine implementing bitboard-based position representation, legal move generation, advanced search algorithms and the UCI protocol, accompanied by a web platform.',
        purpose:
            'Built to explore computational chess, low-level performance engineering, search algorithms and the architecture behind modern chess engines.',
        features: [
            'Bitboard-based board representation and compact move encoding',
            'Legal move generation with castling, en passant and promotions',
            'Negamax search with Alpha-Beta pruning and Principal Variation Search',
            'Late Move Reductions, Null-Move Pruning and Quiescence Search',
            'Zobrist hashing and transposition table and Iterative deepening and time management',
            'Universal Chess Interface (UCI) support and FastAPI backend and React-based chess interface',
        ],
        build: 'Designed a modular C++20 chess engine with separate position, move generation, evaluation and search components. Added a web application layer with a persistent engine worker pool.',
        stack: ['C++20', 'CMake', 'Python', 'FastAPI', 'React', 'TypeScript', 'PyTorch'],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/Raj-Patel7807/rooksac',
            },
        ],
    },

    {
        name: 'RFlow',
        kind: 'Backend Engineering / Infrastructure',
        year: '2026',
        status: 'Deployed',
        summary:
            'A lightweight multi-tenant API gateway built with Spring Boot to centralize request routing and backend service management.',
        purpose:
            'Built to understand API gateway architecture, service routing, tenant isolation and backend infrastructure.',
        features: [
            'Centralized request routing',
            'Multi-tenant request isolation',
            'Authentication, authorization and Rate limiting',
            'Request logging, monitoring and Service health monitoring',
            'Administrative dashboard',
        ],
        build: 'Implemented a Spring Boot-based gateway with modular routing and tenant-aware request handling, backed by PostgreSQL and a web dashboard.',
        stack: [
            'Java 21',
            'Spring Boot',
            'PostgreSQL',
            'Spring Security',
            'React',
            'TypeScript',
            'REST API',
        ],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/Raj-Patel7807/rflow',
            },
            {
                label: 'Live Demo',
                href: 'https://rflow-dashboard.vercel.app/',
            },
        ],
    },

    {
        name: 'Dibyt',
        kind: 'Systems Programming / Networking',
        year: '2026',
        status: 'In Development',
        summary:
            'A self-hosted file distribution system designed for parallel, resumable and fault-tolerant file transfers over a network.',
        purpose:
            'Built to explore computer networking, TCP communication, distributed task coordination and reliable large-file transfers.',
        features: [
            'Parallel file transfer architecture and Resumable transfer sessions',
            'File integrity verification using SHA-256',
            'Persistent transfer checkpoints and Task scheduling and retry handling',
            'Command-line interface and Self-hosted deployment architecture',
        ],
        build: 'Developed using modern C++20 with a modular architecture, separating networking, transfer coordination, storage and application interfaces. The project is being expanded beyond its original computer networks coursework scope.',
        stack: ['C++20', 'TCP', 'CMake', 'SQLite', 'Docker', 'REST API'],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/Raj-Patel7807/dibyt',
            },
        ],
    },

    {
        name: 'Rorfost School Platform',
        kind: 'Freelance / Full-Stack Engineering',
        year: '2026',
        status: 'Live',

        summary:
            'A Gujarati-first school information and management platform, built for real-world use, featuring a public portal and a secure principal administration panel.',

        purpose:
            'Developed and deployed for a school to digitize its public presence, academic resources, examination results, and administrative workflows through a centralized platform.',

        features: [
            'Gujarati-first, mobile-responsive public portal',
            'Principal authentication and session-based administration',
            'School notices, announcements, and study materials',
            'Examination result publishing and printable marksheets',
            'School gallery, profile, and information management',
            'Academic configuration and result management workflows',
            'Audit logging and controlled administrative operations',
        ],

        build: 'Designed and developed a modular Spring Boot backend and React frontend with PostgreSQL persistence, database versioning, and cloud deployment. Built with a multi-school architecture in mind, with multi-tenancy under development.',

        impact: '**500+ monthly visitors**. 1 school actively using the platform.',

        stack: [
            'Java 21',
            'Spring Boot',
            'Spring Security',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Flyway',
            'TanStack Query',
            'Cloudflare',
            'Render',
        ],

        links: [
            {
                label: 'Live Portal',
                href: 'https://portal.dhadhana-school.workers.dev',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/Rorfost/school-platform',
            },
        ],
    },

    {
        name: 'API Health Monitoring Platform',
        kind: 'Backend Engineering / Distributed Systems',
        year: '2026',
        status: 'In Development',
        summary:
            'A distributed API health and incident monitoring platform designed to monitor endpoints, record health checks and eventually manage incidents and alerts.',
        purpose:
            'Built to explore asynchronous background processing, scheduled monitoring, distributed workers and reliable incident management.',
        features: [
            'Modular monolith architecture and FastAPI backend',
            'React-based dashboard foundation',
            'PostgreSQL database integration and Redis-backed infrastructure',
            'Celery worker architecture',
            'Docker Compose development environment',
            'Automated backend and frontend checks',
        ],
        build: 'Structured as a modular FastAPI application with separate Celery workers, PostgreSQL persistence and Redis infrastructure. Endpoint registration, incident rules and notification workflows are planned product features.',
        stack: [
            'Python',
            'FastAPI',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Redis',
            'Celery',
            'Docker',
        ],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/Raj-Patel7807/api-health-monitoring-platform',
            },
        ],
    },

    {
        name: 'RepoPulse',
        kind: 'Database Engineering / Backend',
        year: '2026',
        status: 'Completed',
        summary:
            'A GitHub-inspired repository management system backed by a normalized relational database and a Java-based application interface.',
        purpose:
            'Built to explore relational database design, normalization, schema relationships, SQL queries and JDBC-based application development.',
        features: [
            'Normalized PostgreSQL database schema',
            'Repository and user data modeling',
            'Relational constraints and relationships',
            'Complex SQL queries',
            'Java JDBC integration and Console-based application interface',
        ],
        build: 'Designed a relational PostgreSQL schema and connected it to a Java application using JDBC to perform database operations and demonstrate relational data management.',
        stack: ['Java', 'PostgreSQL', 'JDBC', 'SQL'],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/Raj-Patel7807/RepoPulse',
            },
        ],
    },
];
