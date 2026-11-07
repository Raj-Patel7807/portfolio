# Implementation Roadmap

This roadmap breaks down the complete editorial redesign of Raj Patel's portfolio across structured phases.

---

## Phase 0: Repository Cleanup, Git Audit & Documentation Setup

- **Status**: **COMPLETED**
- **Results**:
    - Legacy files and conflicting libraries removed.
    - Media assets safely consolidated under `public/images/`, `public/icons/`, and `public/resume.pdf`.
    - Full specifications created in `docs/` (`DESIGN.md`, `ARCHITECTURE.md`, `CONTENT.md`, `MIGRATION.md`, `DEPLOYMENT.md`, `ROADMAP.md`, `IMPLEMENTATION_PROMPTS.md`).
    - Clean target folder architecture established under `src/`.
    - All original Git commits and history preserved intact.

---

## Sprint 1 (Prompt 1): TypeScript and Vite Foundation

- **Status**: **READY TO IMPLEMENT (Next Step)**
- **Objective**: Establish a strict React 19 + TypeScript + Vite project foundation.
- **Tasks**:
    1. Configure React 19 and TypeScript (`tsconfig.json` in strict mode).
    2. Configure Vite (`vite.config.ts`) with path aliases.
    3. Configure ESLint and Prettier.
    4. Create application entry point `src/main.tsx` and minimal `src/app/App.tsx`.
    5. Add standard npm scripts (`dev`, `build`, `lint`, `typecheck`, `format`, `preview`).
- **Acceptance Criteria**:
    - Development server starts cleanly.
    - Production build succeeds without errors.
    - TypeScript strict checks pass.
    - ESLint passes.

---

## Phase 2 (Prompt 2): Editorial Design System and Theme Architecture

- **Objective**: Build the reusable visual foundation, CSS tokens, and theme system.
- **Acceptance Criteria**:
    - Centralized CSS variables for light and dark palettes, typography, spacing, and borders.
    - Theme switching mechanism (Light / Dark / System) with `localStorage` persistence and no flash on load.
    - Typography scale configured with fluid `clamp()`.
    - Foundational UI primitives (Button, Container, Divider, ThemeToggle) created and typed.

---

## Phase 3 (Prompt 3): Navigation, Hero and Marquee

- **Objective**: Construct the editorial first impression and site header.

---

## Phase 4 (Prompt 4): Projects and Case Study System

- **Objective**: Build the case study showcase and project presentation system.

---

## Phase 5 (Prompt 5): Achievements and Competitive Programming

- **Objective**: Highlight competitive programming milestones, ratings, and academic highlights.

---

## Phase 6 (Prompt 6): Currently Building, Experience, Skills, About and Contact

- **Objective**: Implement the remaining core content sections.

---

## Phase 7 (Prompt 7): Data and Service Layer Foundation

- **Objective**: Decouple data and services cleanly without forcing external runtime dependencies.

---

## Phase 8 (Prompt 8): Animation, Responsiveness and Accessibility

- **Objective**: Polish the user experience across all viewports and motion preferences.

---

## Phase 9 (Prompt 9): Testing, SEO, Security and Production Deployment

- **Objective**: Verify production readiness, SEO, and Netlify deployment configuration.
