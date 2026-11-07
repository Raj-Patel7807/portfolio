# Migration Strategy & Repository Audit

## 1. Existing Implementation Overview

The pre-existing repository consisted of an earlier Vite + React application using mixed JavaScript (`.jsx` / `.js`) files:

- Built with React 19 and Vite 6.
- Styled using a mix of scattered CSS files (`about.css`, `contact.css`, `projects.css`, `index.css`), AOS animations, Bootstrap 5, and Tailwind CSS.
- An experimental dynamic admin panel with client-side localStorage/Supabase state was present in untracked working files (`src/components/Admin/`, `src/context/PortfolioContext.jsx`, `src/data/initialData.js`, `test/`).
- Assets were scattered across `src/assets/` (with multiple resume versions) and `public/`.

---

## 2. Preserved Assets and Current Locations

All legitimate media assets have been carefully preserved and consolidated into `public/`:

| Original Asset                             | New Location in `public/`                           | Description / Purpose                    |
| :----------------------------------------- | :-------------------------------------------------- | :--------------------------------------- |
| `public/Raj_Patel_Resume.pdf`              | `public/Raj_Patel_Resume.pdf` & `public/resume.pdf` | Active resume PDF (accessible directly)  |
| `src/assets/Raj.png`                       | `public/images/Raj.png`                             | Primary profile photograph               |
| `src/assets/Shinchan.jpg`                  | `public/images/Shinchan.jpg`                        | Preserved personal avatar / visual asset |
| `src/assets/Projects/Education_Portal.png` | `public/images/Education_Portal.png`                | Project screenshot: Education Portal     |
| `src/assets/Projects/Snack_Game.png`       | `public/images/Snack_Game.png`                      | Project screenshot: Snack Game           |
| `src/assets/Projects/Tetris_Game.png`      | `public/images/Tetris_Game.png`                     | Project screenshot: Tetris Game          |
| `src/assets/Schools/DAU.png`               | `public/images/DAU.png`                             | Education emblem: DAU                    |
| `src/assets/Schools/Pioneer.jpg`           | `public/images/Pioneer.jpg`                         | Education emblem: Pioneer School         |
| `src/assets/Socials/CodeChef.svg`          | `public/icons/CodeChef.svg`                         | Competitive programming platform icon    |
| `src/assets/Socials/CodeForces.svg`        | `public/icons/CodeForces.svg`                       | Competitive programming platform icon    |
| `src/assets/Socials/GitHub.svg`            | `public/icons/GitHub.svg`                           | Social platform icon                     |
| `src/assets/Socials/Gmail.svg`             | `public/icons/Gmail.svg`                            | Contact platform icon                    |
| `src/assets/Socials/LeetCode.svg`          | `public/icons/LeetCode.svg`                         | Competitive programming platform icon    |
| `src/assets/Socials/LinkedIn.svg`          | `public/icons/LinkedIn.svg`                         | Professional profile icon                |
| `src/assets/Socials/Telegram.svg`          | `public/icons/Telegram.svg`                         | Messaging platform icon                  |
| `public/vite.svg`                          | `public/favicon.svg` & `public/vite.svg`            | Vector branding icon / favicon           |

_Note on secondary resume copies (`Raj_Patel_Resume01.pdf`, `Raj_Patel_Resume02.pdf`):_ They were redundant variations of the latest canonical resume (`Raj_Patel_Resume.pdf`), which is now preserved as both `public/Raj_Patel_Resume.pdf` and `public/resume.pdf`.

---

## 3. Legacy Files Removed

The legacy application files were systematically removed from the active project tree:

1. **Legacy Entry Points & Root Styles**:
    - `src/App.jsx`
    - `src/main.jsx`
    - `src/App.css`
    - `src/index.css`
2. **Legacy Components & CSS**:
    - `src/components/About/` (`about.jsx`, `about.css`, `AboutV2.jsx`, `aboutV2.css`)
    - `src/components/Contact/` (`contact.jsx`, `contact.css`, `ContactV2.jsx`, `contactV2.css`)
    - `src/components/Education/` (`education.jsx`, `education.css`)
    - `src/components/Experience/` (`experience.jsx`, `experience.css`)
    - `src/components/Footer/` (`footer.jsx`, `footer.css`, `FooterV2.jsx`, `footerV2.css`)
    - `src/components/Hero/` (`HeroV2.jsx`, `hero.css`, `SystemTopologyGraph.jsx`)
    - `src/components/Home/` (`home.jsx`, `home.css`, `PortfolioHome.jsx`)
    - `src/components/Navbar/` (`navbar.jsx`, `navbar.css`, `NavbarV2.jsx`, `navbarV2.css`)
    - `src/components/Projects/` (`projects.jsx`, `projects.css`, `ProjectsV2.jsx`, `projectsV2.css`, `Visualizers/`)
    - `src/components/Responsibility/` (`responsibility.jsx`, `responsibility.css`)
    - `src/components/Resume/` (`resume.jsx`, `resume.css`, `ResumeV2.jsx`, `resumeV2.css`)
    - `src/components/Skills/` (`achievements.jsx`, `achievements.css`, `SkillsV2.jsx`, `skillsV2.css`)
    - `src/components/Timeline/` (`TimelineV2.jsx`, `timelineV2.css`)
    - `src/components/Admin/` (untracked experimental CMS)
    - `src/components/CommandPalette/`
    - `src/components/CompetitiveProgramming/`
    - `src/components/constants.jsx`
3. **Legacy Framework Configurations & Test Artifacts**:
    - `tailwind.config.js`
    - `vercel.json`
    - `test/` directory and test harnesses
    - `src/context/` and `src/services/` (legacy experimental implementations)

---

## 4. Dependencies Removed

The following unused and conflicting packages were removed from `package.json`:

- `bootstrap` (conflicted with custom editorial design system)
- `aos` (replaced by native CSS & IntersectionObserver in Phase 8)
- `react-parallax-tilt` (unnecessary heavy animation library)
- `react-simple-typewriter` & `react-typed` (unnecessary typewriter widgets)
- `react-toastify` (unnecessary toast library)
- `react-router-dom` (editorial portfolio is a static SPA without multi-page admin routes)
- `tailwindcss`, `postcss`, `autoprefixer` (styling will use zero-framework native CSS tokens)

Retained core dependencies:

- `react` (^19.1.0)
- `react-dom` (^19.1.0)
- `react-icons` (^5.5.0)
- `@emailjs/browser` (^4.4.1)

---

## 5. Deployment Considerations

- Netlify deployment configuration is maintained.
- Build target remains static assets generated into `dist/`.
- No live DNS or domain settings were altered.
