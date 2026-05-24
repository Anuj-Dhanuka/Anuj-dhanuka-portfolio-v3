# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page Next.js 15 portfolio using the **App Router**. All portfolio sections render in `app/page.tsx` as a stack of full-width section components, each wrapped in `components/section-wrapper.tsx` for consistent padding/animation.

### Key structural points

- **`app/page.tsx`** — assembles every section component in order; this is the only route
- **`app/api/contact/route.ts`** — single POST endpoint; sends email via **Resend** (`RESEND_API_KEY` env var required)
- **`app/layout.tsx`** — root layout with SEO metadata, theme provider, Inter font, and Open Graph/Twitter card tags
- **`components/`** — feature section components (`hero.tsx`, `about.tsx`, `projects.tsx`, etc.) plus a large `ui/` subdirectory of Radix UI–based primitives
- **`components/ui/`** — 57 Radix UI + CVA components; treat these as a design system; avoid modifying unless fixing a bug in the component itself

### Styling

- Tailwind CSS v4 (via `@tailwindcss/postcss`); config in `tailwind.config.ts`
- Dark mode uses the `class` strategy via `next-themes`
- Custom color palettes: `brand`, `accent1`, `accent2`, `neutral`, `success`
- Use `clsx` + `tailwind-merge` (re-exported as `cn` from `lib/utils.ts`) for conditional class names
- Custom screen sizes: `xs` (480px) through `2xl` (1400px)

### TypeScript

- Path alias `@/*` maps to the repo root
- Build errors are ignored (`ignoreBuildErrors: true` in `next.config.mjs`) — type errors won't block builds but should still be fixed
- Image optimization is disabled (`unoptimized: true`) — suited for static export / cPanel deployment

### Forms

Contact form uses **react-hook-form** + **zod** for validation, submitting to `/api/contact`. Email delivery is via **Resend**.

### Animation

**Framer Motion** is used for section entrance animations and interactive effects. Animations are typically triggered on scroll via Intersection Observer inside individual section components.

### Deployment

Configured for **cPanel** deployment (`.cpanel.yml`). The build output is a static/Node.js export deployed to a shared hosting environment.

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Required for contact form email delivery |
