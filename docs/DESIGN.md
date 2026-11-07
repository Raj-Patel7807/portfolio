# Visual Design Specification

## 1. Editorial Visual Direction

The portfolio is designed as an **editorial developer portfolio**. Rather than a template-heavy, generic developer site filled with neon badges and high-saturation cards, this aesthetic draws inspiration from high-end technical journals, architectural monographs, and contemporary typography-first publications.

### Core Principles
- **Typography-Led Hierarchy**: Large, confident headings with refined leading and proportional letter-spacing.
- **Generous & Intentional Whitespace**: Ample breathing room between sections, drawing focus toward craft, code, and case studies.
- **Restrained Materiality**: Minimalist borders, delicate hair-thin dividers (`1px`), and subtle background tint shifts instead of heavy drop shadows.
- **Content Authenticity**: No placeholder superlatives, artificial skill percentage bars, or fabricated metrics. Code and engineering stories speak for themselves.

---

## 2. Theme Palettes (Light, Dark, and System)

The design system is built around three supported modes: **Light**, **Dark**, and **System** (defaulting to system preference with local storage persistence and zero flicker).

### Light Theme Palette
- **Canvas / Background**: `#fbfbfb` (Warm alabaster / editorial paper)
- **Surface / Card**: `#ffffff` (Pure white)
- **Elevated Surface**: `#f3f4f6` (Subtle off-white)
- **Primary Text**: `#111827` (Near-black charcoal)
- **Secondary Text**: `#4b5563` (Muted slate)
- **Tertiary / Subdued Text**: `#6b7280` (Muted gray)
- **Border / Divider**: `#e5e7eb` (Hairline gray)
- **Accent Primary**: `#0f172a` (Deep ink navy)
- **Accent Interactive / Highlight**: `#2563eb` (Refined technical cobalt)
- **Accent Soft**: `rgba(37, 99, 235, 0.08)`

### Dark Theme Palette
- **Canvas / Background**: `#0a0b0e` (Deep obsidian)
- **Surface / Card**: `#111318` (Dark charcoal slate)
- **Elevated Surface**: `#181b22` (Subtle lifted dark slate)
- **Primary Text**: `#f8fafc` (Bright crisp off-white)
- **Secondary Text**: `#94a3b8` (Muted cool gray)
- **Tertiary / Subdued Text**: `#64748b` (Slate tone)
- **Border / Divider**: `#1e2430` (Subtle hairline border)
- **Accent Primary**: `#f8fafc` (Pure crisp white)
- **Accent Interactive / Highlight**: `#38bdf8` (Refined sky azure)
- **Accent Soft**: `rgba(56, 189, 248, 0.12)`

---

## 3. Typography Choices

- **Display & Headings**: `Inter` / system sans-serif with tight negative tracking (`-0.03em` to `-0.01em`) and optical sizing for crisp legibility.
- **Body & Prose**: `Inter` or clean editorial system font stacks with generous line height (`1.6` - `1.7`) for sustained readability.
- **Monospace / Technical Labels**: `JetBrains Mono` or clean monospace stack for timestamps, git hashes, tags, and code elements.

### Fluid Typography Scale (`clamp()`)
- **Display 1 (Hero Title)**: `clamp(2.75rem, 6vw + 1rem, 5.25rem)`
- **Heading 1 (Section Title)**: `clamp(2rem, 3.5vw + 0.5rem, 3.25rem)`
- **Heading 2 (Subsections/Project Titles)**: `clamp(1.35rem, 2vw + 0.5rem, 2rem)`
- **Heading 3 (Card Titles / Roles)**: `clamp(1.1rem, 1.2vw + 0.4rem, 1.35rem)`
- **Body Large**: `clamp(1.05rem, 1vw + 0.2rem, 1.2rem)`
- **Body Base**: `clamp(0.95rem, 0.8vw + 0.2rem, 1rem)`
- **Technical / Caption / Tag**: `clamp(0.75rem, 0.5vw + 0.3rem, 0.85rem)`

---

## 4. Spacing and Layout Principles

- **Base Grid**: 8px modular scale (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`).
- **Container Max-Width**: `1200px` for standard editorial content; `1400px` for wide hero or portfolio showcases.
- **Gutters**: Fluid horizontal padding (`clamp(1.25rem, 5vw, 4rem)`).
- **Vertical Rhythm**: Section gaps of `clamp(4.5rem, 8vw, 8rem)`.

---

## 5. Component Visual Conventions

- **Dividers**: Minimalist `1px` lines utilizing `--border-color`.
- **Buttons**:
  - *Primary*: Solid contrast fill with tactile active state (`transform: translateY(1px)`).
  - *Secondary / Ghost*: Clean hairline border with transparent backdrop and subtle hover fill.
- **Cards & Items**: Editorial rows and grid blocks with subtle border boundaries, generous internal padding, and structured metadata headers.
- **Tags & Badges**: Monospace or clean micro-sans badges with subtle background tint and hairline border.

---

## 6. Animation Principles

- **Subtlety Above All**: Animations should feel like natural physical easing, never distracting or playful.
- **Duration**: Fast, responsive transitions (`150ms` - `250ms` for interactions, `400ms` - `600ms` for scroll reveals).
- **Curves**: Smooth cubic beziers (e.g., `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Reduced Motion**: Complete accessibility support through `@media (prefers-reduced-motion: reduce)` disabling non-essential transitions.

---

## 7. Responsive Design Requirements

- Supported viewports: Mobile (`320px`, `375px`), Tablet (`768px`), Laptop (`1024px`), Desktop (`1440px+`).
- No horizontal scrollbars under any viewport width.
- Responsive touch targets with minimum 44x44px hit areas on mobile devices.

---

## 8. Accessibility Requirements (WCAG 2.1 AA)

- Color contrast ratio of at least 4.5:1 for normal text and 3:1 for large text across both themes.
- Clear `:focus-visible` outlines with high contrast and ring offsets.
- Semantic HTML elements (`<main>`, `<nav>`, `<header>`, `<article>`, `<section>`, `<footer>`).
- Screen reader accessible buttons with descriptive `aria-label`s.

