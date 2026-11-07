# Deployment Specification

## 1. Hosting Environment

The portfolio is deployed to **Netlify** as a static Single Page Application (SPA).

- **Hosting Platform**: Netlify
- **Live URL**: https://rajpatel7807.netlify.app/
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: Node 20+ / Node 22 LTS

---

## 2. Configuration (`netlify.toml`)

Netlify serves the static build output from `dist/` created by Vite. The canonical redirection rule ensures proper SPA routing:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 3. Environment Variables

The portfolio runs predominantly as a client-side static site without mandatory server-side environment variables. Optional integrations (e.g. EmailJS for direct contact messaging) are configured in Netlify's Environment Variables dashboard:

| Variable                   | Description                   | Fallback Behavior                 |
| :------------------------- | :---------------------------- | :-------------------------------- |
| `VITE_EMAILJS_PUBLIC_KEY`  | Public key for EmailJS client | Fallback to direct `mailto:` link |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS Service ID            | Fallback to direct `mailto:` link |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Template ID           | Fallback to direct `mailto:` link |

> [!NOTE]
> Never commit actual secret keys or API tokens to the git repository. All `.env` and `.env.*` files are excluded via `.gitignore`, while `.env.example` is retained as a sanitized template.

---

## 4. Pre-Deployment Release Checklist

Before pushing commits to the production branch:

- [ ] Run `npm run build` and ensure clean exit code `0`.
- [ ] Run `npm run typecheck` (or `tsc --noEmit`) to verify zero TypeScript errors.
- [ ] Run `npm run lint` and verify ESLint passes without errors.
- [ ] Verify that `public/resume.pdf` (and `public/Raj_Patel_Resume.pdf`) is accessible.
- [ ] Inspect Lighthouse scores for Performance, Accessibility, Best Practices, and SEO.
- [ ] Check responsive behavior on mobile and desktop viewports.
- [ ] Ensure both Light and Dark modes render with adequate contrast.
