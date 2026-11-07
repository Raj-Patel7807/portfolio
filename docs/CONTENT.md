# Content Inventory & Data Template

This document outlines the content structure for the portfolio. All data in `src/data/` adheres to strongly typed TypeScript contracts located in `src/types/`.

> [!NOTE]
> **No personal details or fake claims have been invented.** All arrays and stats are configured as clear placeholders or empty arrays awaiting your manual entries.

---

## 1. Directory Structure of Content Files

All editable content is centralized in `src/data/`:

| File                       | Purpose                                                                                                    | Corresponding Type                                                                               |
| :------------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `src/data/hero.ts`         | Navigation links, brand monogram, hero typography, status badge, and marquee items                         | `NavigationConfig`, `HeroConfig`, `MarqueeConfig`                                                |
| `src/data/projects.ts`     | Case studies, engineering highlights, project tags, and source/live URLs                                   | `ProjectItem[]`, `ProjectsSectionConfig`                                                         |
| `src/data/achievements.ts` | Numerical contest stats, competitive programming profiles (CF, CC, LC), and honors                         | `MetricAchievement[]`, `CompetitivePlatformProfile[]`, `MilestoneAchievement[]`                  |
| `src/data/sections.ts`     | Currently building projects, experience timeline, skills taxonomy, About copy, Contact details, and Footer | `CurrentlyBuildingItem[]`, `ExperienceItem[]`, `SkillCategory[]`, `AboutConfig`, `ContactConfig` |

---

## 2. Step-by-Step Manual Content Workflow

To add or update your information on the site:

### A. Adding Projects

1. Open `src/data/projects.ts`.
2. Add an object to `projectsData`:

```typescript
{
  id: 'my-project-slug',
  title: 'Project Title',
  category: 'Full-Stack Architecture',
  shortDescription: 'Concise summary of the system.',
  problemStatement: 'The technical challenge addressed.',
  solution: 'The architectural design and implementation.',
  engineeringHighlights: [
    'Sub-50ms latency using Redis caching',
    'Custom state machine for pipeline validation'
  ],
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  image: {
    src: '/images/MyProject.png',
    alt: 'Preview screenshot'
  },
  links: {
    github: 'https://github.com/Raj-Patel7807/repo',
    live: 'https://demo.example.com'
  },
  featured: true,
  status: 'completed',
  year: '2025'
}
```

3. Save any project preview image into `public/images/`.

### B. Adding Competitive Programming & Numerical Stats

1. Open `src/data/achievements.ts`.
2. Add your high-impact numbers to `metricAchievementsData`:

```typescript
{
  id: 'cf-rating',
  value: '1750+',
  label: 'Codeforces Peak Rating',
  context: 'Expert rank; solved 400+ algorithmic problems',
  link: 'https://codeforces.com/profile/your_handle'
}
```

3. Add your handles and statistics to `competitiveProfilesData`:

```typescript
{
  id: 'codeforces',
  platform: 'Codeforces',
  handle: 'your_handle',
  profileUrl: 'https://codeforces.com/profile/your_handle',
  currentRating: 1720,
  maxRating: 1754,
  rankTitle: 'Expert',
  problemsSolved: 420,
  icon: '/icons/CodeForces.svg'
}
```

### C. Adding Experience & Timeline

1. Open `src/data/sections.ts`.
2. Add an entry to `experienceData`:

```typescript
{
  id: 'exp-1',
  role: 'Software Engineering Intern',
  organization: 'Company or Lab Name',
  duration: 'May 2025 — Aug 2025',
  location: 'Remote / City',
  type: 'Internship',
  description: 'Summary of the role.',
  contributions: [
    'Engineered scalable microservice endpoint with C++',
    'Improved test coverage from 60% to 92%'
  ],
  technologies: ['C++', 'Docker', 'Linux'],
  link: 'https://company.example.com'
}
```

### D. Updating Resume & Profile Photo

- Replace `public/resume.pdf` with your new resume PDF.
- Replace `public/images/Raj.png` with your preferred portrait.

---

## 3. Service Layer & Error Handling Architecture

The portfolio includes an extensible service layer (`src/services/`) designed to optionally integrate live statistics (such as GitHub or Codeforces profiles) in the future without introducing mandatory runtime dependencies.

### Resilience Principles

1. **Network Independence**: The website renders 100% of content statically from `src/data/` if external APIs are unavailable, disabled, or rate-limited.
2. **Standardized Response Envelope**: All service operations return `Promise<ServiceResponse<T>>`:

```typescript
export interface ServiceResponse<T> {
    data: T | null;
    error: string | null;
    status: 'idle' | 'loading' | 'success' | 'error';
    timestamp?: number;
}
```

3. **Timeout & Caching**: Future integrations must enforce short timeouts (max 4000ms) and cache responses in `localStorage` or `sessionStorage` with a 24-hour TTL to prevent third-party rate limits.
4. **No API Secrets in Frontend**: Any future authenticated queries must use public endpoints or serverless proxy functions rather than exposing private tokens.

---

## 4. Verification

After updating data files, run:

```bash
npm run typecheck
npm run build
```

This guarantees all added content matches required types and that no invalid fields were introduced.
