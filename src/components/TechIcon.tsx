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
    SiRender,
    SiVercel,
    SiGithubactions,
} from 'react-icons/si';

import { DiRedis } from 'react-icons/di';
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
    Redis: DiRedis,
    Render: SiRender,
    Vercel: SiVercel,
    'GitHub Actions': SiGithubactions,
    pgvector: SiPostgresql,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
    const IconComponent = ICON_MAP[name];
    if (IconComponent) {
        return <IconComponent className={className} />;
    }
    return <span className={className}>⚡</span>;
}
