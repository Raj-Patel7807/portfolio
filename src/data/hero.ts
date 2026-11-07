import type { NavigationConfig, HeroConfig, MarqueeConfig } from '@/types/navigation';

export const navigationConfig: NavigationConfig = {
    name: 'Raj Patel',
    monogram: 'RP',
    navItems: [
        { id: 'about', label: 'About', href: '#about' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'achievements', label: 'Achievements', href: '#achievements' },
        { id: 'experience', label: 'Experience', href: '#experience' },
        { id: 'contact', label: 'Contact', href: '#contact' },
    ],
    resume: {
        label: 'Resume',
        url: '/resume.pdf',
    },
};

export const heroConfig: HeroConfig = {
    greeting: 'Software Engineer & Systems Builder',
    heading: 'Crafting thoughtful digital systems & scalable architectures.',
    subtitle: 'Focused on clean design, algorithms, and performant web technologies.',
    introduction:
        'Designing robust web applications and developer tools with an editorial focus on typography, performance, and maintainability.',
    statusBadge: {
        available: true,
        text: 'Available for opportunities',
    },
    primaryCta: {
        label: 'View Projects',
        href: '#projects',
    },
    secondaryCta: {
        label: 'Get in Touch',
        href: '#contact',
    },
    socials: [
        { platform: 'GitHub', label: 'GitHub', url: 'https://github.com/Raj-Patel7807' },
        { platform: 'LinkedIn', label: 'LinkedIn', url: 'https://linkedin.com' },
        { platform: 'Codeforces', label: 'Codeforces', url: 'https://codeforces.com' },
        { platform: 'LeetCode', label: 'LeetCode', url: 'https://leetcode.com' },
    ],
    portrait: {
        src: '/images/Raj.png',
        alt: 'Raj Patel profile portrait',
    },
};

export const marqueeConfig: MarqueeConfig = {
    items: [
        'System Architecture',
        'React & TypeScript',
        'Competitive Programming',
        'Clean Code & Algorithms',
        'Editorial Design',
        'Full-Stack Engineering',
    ],
    speedSeconds: 28,
};
