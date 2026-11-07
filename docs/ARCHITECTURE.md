# Architecture Specification

## 1. Overall Application Architecture

The portfolio application is being rebuilt as a clean, performant, static Single Page Application (SPA) utilizing:
- **React 19**: Modern component architecture using native Hooks.
- **TypeScript 5 (Strict Mode)**: Full type safety across all data structures, props, services, and hooks.
- **Vite 6**: Fast bundling, ESM-first development environment, and optimized production builds.
- **Custom CSS / CSS Modules / Variables**: Zero-runtime styling with native CSS custom properties for theming.

---

## 2. Directory Structure & Folder Responsibilities

```text
portfolio/
├── public/                 # Static assets directly copied to output
│   ├── images/             # Visual imagery, portraits, school emblems, project previews
│   ├── icons/              # SVG icons and logos
│   ├── resume.pdf          # Canonical resume PDF
│   └── favicon.svg         # Modern vector favicon
├── docs/                   # Engineering & design specifications
│   ├── DESIGN.md
│   ├── ARCHITECTURE.md
│   ├── CONTENT.md
│   ├── MIGRATION.md
│   ├── DEPLOYMENT.md
│   ├── ROADMAP.md
│   └── IMPLEMENTATION_PROMPTS.md
├── src/
│   ├── app/                # Root application setup & context providers
│   │   ├── App.tsx         # Main layout wrapper and section assembler
│   │   └── providers/      # Theme and app-level context providers
│   ├── components/         # Reusable presentation and layout components
│   │   ├── common/         # Buttons, badges, dividers, modals
│   │   ├── layout/         # Header, Navigation, Footer, Container
│   │   └── ui/             # Primitive UI building blocks
│   ├── sections/           # Discrete page sections
│   │   ├── Hero/
│   │   ├── Marquee/
│   │   ├── Projects/
│   │   ├── Achievements/
│   │   ├── CurrentlyBuilding/
│   │   ├── Experience/
│   │   ├── TechStack/
│   │   ├── About/
│   │   └── Contact/
│   ├── data/               # Central typed data stores (projects, experience, bio)
│   ├── hooks/              # Custom React hooks (theme, scroll spy, media query)
│   ├── services/           # Decoupled services (e.g. stats fetchers, email, storage)
│   ├── types/              # Central TypeScript declarations and contracts
│   ├── styles/             # Global CSS tokens, reset, typography, and theme definitions
│   └── main.tsx            # Vite DOM mount entry point
├── index.html              # HTML shell with meta tags and font preloads
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # Strict TypeScript compiler options (Sprint 1)
├── vite.config.ts          # Vite build config with path aliases (Sprint 1)
├── eslint.config.js        # Modern flat ESLint configuration
├── .prettierrc             # Code formatting rules
├── .gitignore              # Ignored files (node_modules, dist, tmp, .env)
└── README.md               # Project documentation
```

---

## 3. Component Organisation

- **Unidirectional Data Flow**: Data is passed downwards from centralized files or top-level containers to pure, modular components.
- **Section Independence**: Each section within `src/sections/` is self-contained with its dedicated subcomponents and styles if necessary, but consumes unified design tokens and shared UI primitives.
- **Clean Props Contracts**: All components declare explicit TypeScript interfaces with optional fields clearly designated.

---

## 4. Data and Type Organisation

- **Decoupled Data**: No hardcoded personal or project information inside presentation components. Everything resides in `src/data/*.ts`.
- **Contracts in `src/types/`**:
  - `project.ts`: Schemas for featured projects, case studies, and tech stack tags.
  - `achievement.ts`: Academic achievements, competitive programming profiles, and ratings.
  - `experience.ts`: Work history, leadership roles, and timelines.
  - `content.ts`: Site-wide metadata, author details, social links, and status.

---

## 5. Styling Conventions & Theme Architecture

- **CSS Variables as Single Source of Truth**: All colors, spaces, typography, and borders are defined as CSS variables in `src/styles/tokens.css` or `src/styles/themes.css`.
- **Theme Mechanism**:
  - Controlled via `data-theme="light"` or `data-theme="dark"` attribute set on `<html>` or `<body>`.
  - Stored in `localStorage` under `portfolio_theme`.
  - Responds to `window.matchMedia('(prefers-color-scheme: dark)')` when set to `system`.
  - Zero-flash inline script or CSS default avoids unstyled flash on initial render.

---

## 6. Service and Hook Responsibilities

- **`src/services/`**:
  - Pure functions or lightweight modules.
  - No direct UI side-effects.
  - Return typed Promises and handle errors gracefully with fallbacks.
- **`src/hooks/`**:
  - Encapsulate browser APIs (e.g., `useTheme`, `useScrollSpy`, `useMediaQuery`, `useReducedMotion`).

---

## 7. TypeScript Conventions

- Strict mode enabled (`strict: true`, `noImplicitAny: true`, `strictNullChecks: true`).
- Path aliases: `@/` resolving to `./src/` for clean imports.
- Explicit return types on service functions and critical business logic.
