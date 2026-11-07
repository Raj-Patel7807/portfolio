export interface NavItem {
    id: string;
    label: string;
    href: string;
}

export interface NavigationConfig {
    name: string;
    monogram: string;
    navItems: NavItem[];
    resume: {
        label: string;
        url: string;
    };
}

export interface SocialLinkConfig {
    platform: string;
    label: string;
    url: string;
}

export interface HeroConfig {
    greeting?: string;
    heading: string;
    subtitle?: string;
    introduction: string;
    statusBadge?: {
        available: boolean;
        text: string;
    };
    primaryCta?: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
    socials: SocialLinkConfig[];
    portrait?: {
        src: string;
        alt: string;
    };
}

export interface MarqueeConfig {
    items: string[];
    speedSeconds?: number;
}
