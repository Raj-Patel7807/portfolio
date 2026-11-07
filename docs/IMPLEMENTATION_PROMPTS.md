# Raj Patel Portfolio — Implementation Prompts

**Project direction:** Editorial developer portfolio  
**Themes:** Light, Dark and System  
**Migration:** Clean rebuild  
**Stack:** React 19, TypeScript, Vite, custom CSS  
**Deployment:** Existing Netlify deployment, retained initially

---

# PROMPT 0 — Repository Cleanup, Git Audit and Documentation Setup

You are working on my existing personal portfolio repository.

Your first responsibility is to audit and prepare the repository for a clean rebuild. Do not start implementing the new portfolio UI yet.

## 1. Inspect the existing repository

Before making changes, inspect:

- Existing folder structure.
- Source files and components.
- `package.json` and dependencies.
- Existing assets, images, icons and resume.
- Existing configuration files.
- Existing deployment configuration.
- Git status, branches, recent commits and tracked files.
- Existing README and project documentation.

Understand what the current website does and identify what should be preserved, replaced or removed.

## 2. Git safety and cleanup

I want a clean and maintainable repository.

Requirements:

- Preserve the existing Git repository and its commit history.
- Do not delete `.git`.
- Do not reset, rebase, squash or rewrite published history.
- Do not force-push.
- Do not delete branches without explicit approval.
- Do not discard uncommitted user changes.
- Inspect tracked and untracked files before removing anything.
- Identify obsolete files, duplicate assets and unused dependencies.
- Remove only files that are confirmed to be unnecessary for the new implementation.
- Keep useful existing assets, resume files and deployment configuration.
- Check for accidentally committed credentials or secrets. If found, report them and recommend credential rotation; do not silently rewrite history.

Prepare the repository for a clean rebuild while keeping the existing Git history intact.

## 3. Establish the new project structure

Prepare the initial directory structure according to the intended architecture.

Use this as the target structure:

```text
portfolio/
├── public/
│   ├── images/
│   ├── icons/
│   ├── resume.pdf
│   └── favicon.svg
│
├── docs/
│   ├── DESIGN.md
│   ├── ARCHITECTURE.md
│   ├── CONTENT.md
│   ├── MIGRATION.md
│   ├── DEPLOYMENT.md
│   └── ROADMAP.md
│
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── providers/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   ├── Marquee/
│   │   ├── Projects/
│   │   ├── Achievements/
│   │   ├── CurrentlyBuilding/
│   │   ├── Experience/
│   │   ├── TechStack/
│   │   ├── About/
│   │   └── Contact/
│   │
│   ├── data/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── styles/
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── .prettierrc
├── .gitignore
└── README.md
```

Do not create unnecessary empty files simply to match this tree. Create meaningful directories and initial files where appropriate.

## 4. Create project documentation

Create the following documents.

### DESIGN.md

Document:

- Editorial visual direction.
- Light and dark theme palettes.
- Typography choices.
- Spacing and layout principles.
- Component visual conventions.
- Animation principles.
- Responsive design requirements.
- Accessibility requirements.

### ARCHITECTURE.md

Document:

- Overall application architecture.
- Folder responsibilities.
- Component organisation.
- Data and type organisation.
- Styling conventions.
- Theme architecture.
- Service and hook responsibilities.
- TypeScript conventions.

### CONTENT.md

Create a content inventory/template describing the information I will manually add later.

Include placeholders for:

- Profile information.
- Social links.
- Resume.
- Projects.
- Achievements.
- Competitive programming profiles.
- Experience.
- Leadership.
- Technical skills.
- Currently building.
- About section.
- Contact details.

Do not invent or populate personal information.

### MIGRATION.md

Document:

- Existing implementation overview.
- Important files and assets discovered.
- What will be retained.
- What will be replaced.
- What will be removed.
- Deployment considerations.
- Potential migration risks.

### DEPLOYMENT.md

Document the intended Netlify deployment process, build commands, environment variable handling and release checklist.

### ROADMAP.md

Document all nine implementation phases, their objectives and acceptance criteria.

## 5. README

Create a clean README describing:

- Project overview.
- Technology stack.
- Project structure.
- Local development setup.
- Build and validation commands.
- Documentation links.

Do not write a fake product description or invent features.

## 6. Important restrictions

- Do not implement the new UI.
- Do not populate personal data.
- Do not create fake projects or achievements.
- Do not introduce unnecessary dependencies.
- Do not change the existing production deployment.
- Do not start Phase 1.
- Do not destroy existing assets or useful configurations.

## 7. Final report

When finished, report:

1. What you inspected.
2. What you preserved.
3. What you removed and why.
4. What documentation you created.
5. The resulting folder structure.
6. Any Git or security concerns.
7. Whether the repository is ready for Phase 1.

Stop after this preparation phase and wait for my approval.

---

# PROMPT 1 — TypeScript and Vite Foundation

Implement Phase 1 of the portfolio redesign.

Before starting, read:

- `README.md`
- `docs/DESIGN.md`
- `docs/ARCHITECTURE.md`
- `docs/MIGRATION.md`
- `docs/ROADMAP.md`

## Objectives

Establish a clean React + TypeScript + Vite application.

## Tasks

1. Configure React 19 and TypeScript.
2. Configure Vite.
3. Configure TypeScript compiler options with strict mode enabled.
4. Configure ESLint and Prettier.
5. Configure useful import aliases if appropriate.
6. Establish the documented source folder structure.
7. Create the application entry point.
8. Create a minimal `App.tsx`.
9. Add maintainable npm scripts.

Expected scripts should include equivalents of:

- `dev`
- `build`
- `preview`
- `lint`
- `typecheck`
- `format`
- `format:check`

Use compatible stable package versions and avoid unnecessary dependencies.

## Architecture requirements

- Use `.tsx` for React components and `.ts` for non-UI TypeScript.
- Use strict TypeScript.
- Avoid `any` unless genuinely unavoidable and documented.
- Keep application entry points clean.
- Keep configuration understandable.
- Do not put all application code inside `App.tsx`.

## Restrictions

- Do not build the actual portfolio sections yet.
- Do not add personal content.
- Do not implement APIs.
- Do not introduce a CSS framework.
- Do not add unnecessary libraries.

## Acceptance criteria

- Development server starts successfully.
- Production build succeeds.
- TypeScript checks pass.
- ESLint passes.
- Folder structure follows the documentation.

Update documentation if any architectural decisions change.

Report changed files, commands executed and validation results. Stop after Phase 1.

---

# PROMPT 2 — Editorial Design System and Theme Architecture

Implement Phase 2.

Read the design and architecture documentation before coding.

## Objectives

Build the reusable visual foundation of the portfolio.

The visual direction is editorial: typography-led, minimal, premium and content-focused.

## Tasks

### 1. Design tokens

Create centralised CSS variables for:

- Background colours.
- Surface colours.
- Primary and secondary text.
- Borders.
- Accent colours.
- Typography.
- Font sizes.
- Spacing.
- Container widths.
- Border radii.
- Shadows.
- Transition durations.
- Z-index layers.

Use the palette documented in `DESIGN.md`.

### 2. Typography

Set up:

- Display typography.
- Body typography.
- Monospace typography for technical labels.

Use responsive font sizing through `clamp()`.

### 3. Global styles

Implement:

- CSS reset.
- Base typography.
- Body styles.
- Selection styles.
- Links.
- Focus-visible styles.
- Responsive container utilities.
- Reusable spacing and layout utilities where justified.

### 4. Theme system

Implement:

- Light theme.
- Dark theme.
- System preference.
- Persistent explicit theme selection.
- Correct initial theme detection.
- No visible theme flash during page load.

Use CSS variables rather than duplicating styles across components.

### 5. Reusable UI primitives

Create only the foundational reusable components needed at this stage, such as:

- Button.
- Text link.
- Section label.
- Divider.
- Container.
- Theme toggle.

Use accessible HTML elements.

## Restrictions

- No actual portfolio content.
- No unnecessary component library.
- No excessive decorative effects.
- No hardcoded theme colours throughout components.
- Do not build the page sections yet.

## Acceptance criteria

- All theme modes work.
- Theme persists correctly.
- Typography is consistent.
- Tokens are centralised.
- Components are reusable and typed.
- Mobile and desktop base layouts work.

Update `DESIGN.md` and `ARCHITECTURE.md` if needed.

Report validation results and stop after Phase 2.

---

# PROMPT 3 — Navigation, Hero and Marquee

Implement Phase 3.

Read the existing documentation and follow the established design system.

## Objectives

Build the first impression of the portfolio.

## Tasks

### 1. Navigation

Build a responsive navigation system with:

- Name or monogram placeholder.
- Section navigation links.
- Theme toggle.
- Resume link placeholder.
- Mobile navigation menu.
- Active section indication.
- Smooth anchor navigation.

Navigation labels and destinations should be centrally configurable.

### 2. Hero

Create an editorial hero section.

It should support:

- Main heading.
- Short introduction.
- Optional subtitle.
- Availability/status indicator.
- Primary CTA.
- Secondary CTA.
- Social links.
- Optional portrait or visual asset.

Use placeholder content or empty configurable fields.

Do not invent my biography or professional claims.

The design should use large typography and generous whitespace. Avoid making the hero look like a generic resume template.

### 3. Marquee

Build a reusable horizontal marquee component.

It should support configurable text items and:

- Smooth continuous movement.
- Pause on hover where appropriate.
- Reduced-motion support.
- Responsive behaviour.
- No horizontal page overflow.

### 4. Responsive behaviour

Test the navigation and hero at mobile, tablet and desktop sizes.

## Restrictions

- Do not populate actual personal information.
- Do not use fake profile statistics.
- Do not add excessive animations.
- Do not introduce a heavy animation library.

## Acceptance criteria

- Navigation works.
- Mobile menu works with keyboard and pointer.
- Theme toggle remains functional.
- Hero layout is visually polished.
- Marquee works without breaking responsiveness.
- All content is configurable.

Update documentation and stop after Phase 3.

---

# PROMPT 4 — Projects and Case Study System

Implement Phase 4.

This is one of the most important parts of the portfolio.

Read the architecture, design and content documentation first.

## Objectives

Build a reusable project presentation system.

## Tasks

### 1. Define project types

Create a strongly typed project model.

It should support fields such as:

- Unique ID.
- Title.
- Category.
- Short description.
- Problem statement.
- Solution.
- Engineering highlights.
- Technology list.
- Project image.
- GitHub URL.
- Live URL.
- Project status.
- Featured flag.
- Optional year.

Use optional fields where appropriate.

### 2. Project data structure

Create a central project data file.

Use an empty array or clearly marked placeholders.

Do not populate my actual projects. I will enter project details manually.

### 3. Project components

Create reusable components for:

- Projects section.
- Project item.
- Project metadata.
- Technology tags.
- Project links.
- Optional project image.

### 4. Visual design

Use editorial project layouts.

Requirements:

- Clear typography hierarchy.
- Good whitespace.
- Distinct project sections.
- Optional alternating layouts.
- Responsive image handling.
- Subtle hover states.
- Clear external link indicators.

Avoid making every project a generic rounded card.

### 5. Empty-state behaviour

If the project data is empty, do not render fake projects.

The section should either display a neutral development placeholder or be easily hidden until I add data.

## Restrictions

- No invented projects.
- No fabricated performance metrics.
- No fake screenshots.
- No broken placeholder URLs.
- Do not hardcode project content inside components.

## Acceptance criteria

- Project data is strongly typed.
- Components are reusable.
- Projects can be added by editing data files.
- Empty data does not break the website.
- Responsive layouts work.
- Links are handled safely.

Stop after Phase 4.

---

# PROMPT 5 — Achievements and Competitive Programming

Implement Phase 5.

Read the documentation before starting.

## Objectives

Build the achievements and competitive programming presentation system.

## Tasks

### 1. Define data types

Create typed models for:

- Achievements.
- Competitive programming platforms.
- Ratings.
- Solved problem counts.
- Academic milestones.
- Profile links.

Use optional properties when information may not be available.

### 2. Centralised data

Create separate data files for achievements and competitive programming information.

Keep arrays empty or use clearly marked placeholders.

I will enter the actual statistics and links manually.

### 3. Achievement section

Build an editorial achievement layout featuring:

- Large numerical highlights.
- Concise labels.
- Optional descriptions.
- Optional external links.

### 4. Competitive programming section

Create a reusable structure for profiles such as:

- Codeforces.
- CodeChef.
- LeetCode.

Do not invent ratings, ranks or solved counts.

### 5. Visual design

Use typography and layout rather than excessive badges.

Make statistics visually strong but readable.

## Restrictions

- No fake ratings.
- No fabricated rankings.
- No hardcoded personal information.
- No API integration in this phase.

## Acceptance criteria

- Data models are strongly typed.
- Empty data is handled gracefully.
- Profiles can be added through data files.
- Layout is responsive.
- Links work correctly.

Stop after Phase 5.

---

# PROMPT 6 — Currently Building, Experience, Skills, About and Contact

Implement Phase 6.

Read all relevant documentation first.

## Objectives

Complete the remaining primary portfolio sections.

## Tasks

### 1. Currently Building

Create a reusable section for projects or technical areas currently being explored.

Support:

- Title.
- Short description.
- Status.
- Optional technology tags.
- Optional links.

### 2. Experience and leadership

Create a typed experience model.

Support:

- Role.
- Organisation.
- Duration.
- Description.
- Contributions.
- Optional links.

Build a clean editorial timeline or equivalent layout.

### 3. Technical stack

Create a typed skills model.

Support categories such as:

- Languages.
- Backend.
- Frontend.
- Databases.
- Developer tools.
- Core concepts.

Build a clean grouped layout.

Do not use skill percentage bars.

### 4. About

Create an About section with configurable:

- Heading.
- Paragraphs.
- Optional image.
- Optional personal details.

Do not write my biography.

### 5. Contact

Create a contact section supporting:

- Email link.
- GitHub.
- LinkedIn.
- Other social links.
- Resume link.

Use configurable values.

A direct `mailto:` link should work as a basic fallback.

### 6. Footer

Build a minimal footer with:

- Copyright information.
- Optional social links.
- Back-to-top action.

## Restrictions

- Do not fabricate personal content.
- Do not invent work experience.
- Do not use fake contact details.
- Do not add unnecessary form services.

## Acceptance criteria

- All sections are reusable.
- Content is centrally configurable.
- Empty optional fields are handled.
- Contact links work.
- All sections are responsive.
- The page has consistent visual hierarchy.

Stop after Phase 6.

---

# PROMPT 7 — Data and Service Layer Foundation

Implement Phase 7.

Important: I will manually provide all actual profile, project, achievement and other portfolio data.

Do not fetch or invent personal data.

## Objectives

Prepare clean data and service architecture without making the website depend on external APIs.

## Tasks

### 1. Review data architecture

Inspect the existing data files and TypeScript types.

Ensure:

- Data models are consistent.
- Components do not duplicate content.
- Optional fields are handled.
- Data is separate from presentation.
- There are no unnecessary abstractions.

### 2. Service structure

Prepare a clean service layer for optional future integrations.

Create suitable interfaces and placeholder modules for:

- GitHub statistics.
- Codeforces statistics.

Do not make real API calls yet.

### 3. Error-handling design

Document how future integrations should handle:

- Network failures.
- API errors.
- Missing data.
- Loading states.
- Timeouts.
- Caching.

### 4. Optional data hooks

Create hooks only where useful.

Avoid unnecessary global state.

### 5. Manual content workflow

Ensure I can add content by editing the central data files without modifying section components.

Document the process in `CONTENT.md`.

## Restrictions

- No API keys.
- No hardcoded credentials.
- No invented live statistics.
- No unnecessary backend.
- No unnecessary state management library.
- No real external API calls at this stage.

## Acceptance criteria

- Service architecture is prepared.
- Data models are clean.
- Components remain independent of external APIs.
- Documentation explains how to add data.
- Website works without any external service.

Stop after Phase 7.

---

# PROMPT 8 — Animation, Responsiveness and Accessibility

Implement Phase 8.

Read the design and architecture documentation first.

## Objectives

Polish the complete portfolio experience.

## Tasks

### 1. Animation

Add restrained animations:

- Scroll reveal.
- Section transitions.
- Link hover states.
- Button interactions.
- Navigation interactions.
- Optional image transitions.

Use CSS and IntersectionObserver wherever possible.

Avoid unnecessary animation dependencies.

### 2. Accessibility

Check:

- Semantic HTML.
- Heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Accessible theme toggle.
- Mobile menu accessibility.
- Link labels.
- Image alt text.
- Contrast in both themes.
- Reduced-motion support.

### 3. Responsive testing

Test:

- 320px mobile.
- 375px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px desktop.
- Wider desktop displays.

Fix:

- Horizontal overflow.
- Broken typography.
- Incorrect spacing.
- Overlapping elements.
- Unusable navigation.
- Image distortion.

### 4. Performance

Inspect:

- Unnecessary re-renders.
- Large images.
- Unused CSS.
- Unnecessary JavaScript.
- Excessive animation.
- Dependency size.

Do not optimise blindly or add complex caching without a real need.

## Restrictions

- No excessive animations.
- No custom cursor requirement.
- No distracting loading screen.
- No breaking existing functionality.

## Acceptance criteria

- All sections work at supported screen sizes.
- Both themes are readable.
- Keyboard navigation works.
- Reduced-motion preference is respected.
- No horizontal overflow.
- No major accessibility issues.

Stop after Phase 8.

---

# PROMPT 9 — Testing, SEO, Security and Production Deployment

Implement the final phase.

Read `DEPLOYMENT.md`, `ARCHITECTURE.md` and the entire implementation documentation.

## Objectives

Prepare the portfolio for production.

## Tasks

### 1. Code quality

Run:

- Production build.
- TypeScript checks.
- ESLint.
- Formatting checks.
- Existing tests.

Fix all relevant errors.

### 2. Testing

Add or improve tests for important functionality:

- Theme selection and persistence.
- Navigation.
- Mobile menu.
- Project rendering.
- Empty data behaviour.
- Contact links.
- Any non-trivial service logic.

Do not write meaningless tests just to increase test count.

### 3. SEO

Implement:

- Page title.
- Meta description.
- Canonical URL, if appropriate.
- Open Graph metadata.
- Social sharing metadata.
- Favicon.
- Appropriate heading structure.
- Descriptive image alt text.
- Sitemap and robots configuration where appropriate.

Do not invent SEO claims or personal details.

### 4. Security

Check:

- No API secrets in frontend code.
- No private credentials in repository.
- Safe external link handling.
- No unnecessary permissions.
- No accidental exposure of environment files.
- Correct `.gitignore`.

### 5. Performance

Inspect the production build and optimise:

- Images.
- Font loading.
- Bundle size.
- Unused dependencies.
- Rendering behaviour.

Use Lighthouse as a validation tool.

### 6. Deployment

Prepare the existing Netlify deployment.

Verify:

- Build command.
- Publish directory.
- Environment variable requirements.
- SPA routing behaviour, if relevant.
- Domain configuration.
- HTTPS.
- Resume and asset paths.

Do not change production DNS or deployment settings without approval.

### 7. Documentation

Update:

- README.
- DEPLOYMENT.md.
- ARCHITECTURE.md.
- DESIGN.md.
- CONTENT.md.
- ROADMAP.md.

Make sure documentation reflects the actual final implementation.

## Final acceptance criteria

- Production build succeeds.
- TypeScript checks pass.
- ESLint passes.
- Important tests pass.
- Theme works.
- All navigation works.
- No broken links.
- No horizontal overflow.
- No exposed credentials.
- SEO metadata is present.
- Deployment configuration is documented.
- No critical console errors.

## Final report

Provide:

1. Final folder structure.
2. Technologies and dependencies.
3. Completed features.
4. Tests and commands executed.
5. Build results.
6. Performance and accessibility observations.
7. Deployment instructions.
8. Known limitations.

Do not claim deployment is successful unless it has actually been deployed and verified.

Stop after completing the final phase.

---

# Global rules for all implementation prompts

These rules apply to every phase.

1. Read the project documentation before changing code.
2. Implement only the assigned phase.
3. Do not skip ahead.
4. Do not invent personal information, project details, statistics or links.
5. Use empty arrays, typed models and clear placeholders for content I will add manually.
6. Keep code modular and maintainable.
7. Use TypeScript strict mode.
8. Avoid unnecessary dependencies.
9. Do not introduce a backend or database.
10. Do not break the existing Git history.
11. Do not silently delete existing assets or useful configuration.
12. Do not claim a task is complete without running the relevant checks.
13. Update documentation whenever implementation decisions change.
14. Report modified files, important decisions, validation results and remaining issues.
15. Stop and wait for approval after each phase.

**Final design reminder:** Build an original editorial developer portfolio. Use the reference portfolio for inspiration, not as a template to copy. Prioritise typography, whitespace, project storytelling, accessibility and performance.
