import React from 'react';
import {
    SiCplusplus,
    SiPython,
    SiC,
    SiTypescript,
    SiPostgresql,
    SiSpringboot,
    SiSpringsecurity,
    SiFastapi,
    SiReact,
    SiTailwindcss,
    SiVite,
    SiSupabase,
    SiDocker,
    SiGit,
    SiGithub,
    SiCloudflare,
    SiLinux,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrain, TbInfinity } from 'react-icons/tb';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Java: FaJava,
    'C++': SiCplusplus,
    Python: SiPython,
    C: SiC,
    TypeScript: SiTypescript,
    SQL: FaDatabase,
    'Spring Boot': SiSpringboot,
    'Spring Security': SiSpringsecurity,
    FastAPI: SiFastapi,
    LangGraph: TbBrain,
    React: SiReact,
    'React 19': SiReact,
    'Tailwind CSS': SiTailwindcss,
    Vite: SiVite,
    PostgreSQL: SiPostgresql,
    Supabase: SiSupabase,
    Cloudflare: SiCloudflare,
    Git: SiGit,
    GitHub: SiGithub,
    'CI/CD': TbInfinity,
    Docker: SiDocker,
    Linux: SiLinux,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
    const IconComponent = ICON_MAP[name];
    if (IconComponent) {
        return <IconComponent className={className} />;
    }
    return <span className={className}>⚡</span>;
}
