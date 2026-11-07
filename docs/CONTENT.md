# Content Inventory & Data Template

This document outlines the content structure for the portfolio. Content in `src/data/` uses these templates.
**No personal details or fake claims have been invented.** Raj Patel can populate these fields as needed.

---

## 1. Profile & Bio Information

```typescript
export interface ProfileContent {
    name: string; // e.g. "Raj Patel"
    handle: string; // e.g. "Raj-Patel7807"
    role: string; // e.g. "Software Engineer & Systems Builder"
    location: string; // e.g. "Gujarat, India"
    statusBadge: {
        available: boolean;
        text: string; // e.g. "Open to new opportunities"
    };
    headline: string; // Editorial hero statement
    introduction: string; // Brief 2-3 sentence overview
    biography: string[]; // Full paragraphs for the About section
}
```

---

## 2. Social & Contact Links

```typescript
export interface SocialLink {
    platform:
        | 'github'
        | 'linkedin'
        | 'codeforces'
        | 'codechef'
        | 'leetcode'
        | 'telegram'
        | 'email'
        | 'custom';
    label: string;
    url: string;
    username?: string;
    isPrimary?: boolean;
}

export interface ContactInfo {
    email: string;
    location: string;
    socials: SocialLink[];
}
```

---

## 3. Resume Configuration

```typescript
export interface ResumeConfig {
    pdfUrl: string; // e.g. "/Raj_Patel_Resume.pdf"
    lastUpdated?: string; // e.g. "August 2026"
    viewOnlineUrl?: string;
}
```

---

## 4. Projects & Case Studies

```typescript
export interface ProjectItem {
    id: string; // Unique kebab-case slug
    title: string; // Project title
    tagline: string; // Single sentence synopsis
    category: string; // e.g. "Full-Stack System", "Developer Tool", "Algorithm"
    problemStatement?: string;
    solution?: string;
    engineeringHighlights?: string[];
    technologies: string[];
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    year?: string | number;
    status?: 'completed' | 'in-progress' | 'archived';
}
```

---

## 5. Achievements & Competitive Programming

```typescript
export interface MetricHighlight {
    label: string; // e.g. "Global Rank", "Contest Rating"
    value: string | number; // e.g. "1850+"
    context?: string; // e.g. "Top 5% worldwide"
    link?: string;
}

export interface CompetitivePlatform {
    platform: 'Codeforces' | 'CodeChef' | 'LeetCode' | 'AtCoder' | 'HackerRank';
    handle: string;
    profileUrl: string;
    maxRating?: number;
    currentRating?: number;
    solvedCount?: number;
    badge?: string;
}

export interface AcademicAchievement {
    title: string;
    issuer: string;
    date?: string;
    description?: string;
    credentialUrl?: string;
}
```

---

## 6. Experience & Leadership

```typescript
export interface ExperienceItem {
    role: string;
    organization: string;
    period: string; // e.g. "2024 — Present"
    location?: string;
    type?: 'Full-time' | 'Internship' | 'Contract' | 'Open Source';
    description?: string;
    highlights: string[];
    technologies?: string[];
    link?: string;
}
```

---

## 7. Currently Building / Exploring

```typescript
export interface CurrentlyBuildingItem {
    title: string;
    status: string; // e.g. "Prototyping", "Designing", "Researching"
    description: string;
    technologies?: string[];
    link?: string;
}
```

---

## 8. Technical Skills / Tech Stack

```typescript
export interface SkillGroup {
    category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'DevOps & Tools' | 'Core CS';
    items: string[];
}
```

---

## 9. Manual Content Update Workflow

To update personal portfolio details:

1. Navigate to `src/data/`.
2. Edit the corresponding TypeScript data file (e.g., `projects.ts`, `profile.ts`, `experience.ts`).
3. Place any new assets (project screenshots, profile portraits) in `public/images/`.
4. Place the updated resume in `public/resume.pdf` or `public/Raj_Patel_Resume.pdf`.
5. Run `npm run build` or `npm run typecheck` to verify data types remain sound.
