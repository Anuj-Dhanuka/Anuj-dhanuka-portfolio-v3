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

## SEO & Metadata

The site is positioned as **"Frontend & React Native Developer"** — keep all metadata, hero copy, and FAQ answers aligned with this positioning. Do NOT reintroduce "Full-Stack" or "Firebase Expert" framing in `app/layout.tsx` metadata; it conflicts with the rest of the site and was deliberately removed.

- Canonical title pattern: `Anuj Dhanuka | Frontend & React Native Developer`
- Canonical description anchors: *"20+ client projects"*, *"ChefKart's customer app, internal dashboard and website"*
- `app/layout.tsx` exports `metadata` (title, description, openGraph, twitter, robots, alternates) and a separate `viewport` export — do not merge these back together (Next.js 15 requires the split)
- The `generator: "v0.dev"` field was removed from metadata — do not re-add it (it leaks AI-scaffolded origin into the HTML source)

## Favicon stack

The site uses Next.js's **file-based metadata convention** for icons — Next auto-emits the correct `<link>` tags from these files. Do not manually re-add an `icons: {...}` block in `app/layout.tsx`; it overrides the convention.

| File | Size | Served at | Purpose |
|---|---|---|---|
| `app/icon.svg` | 48×48 (vector) | `/icon.svg?<hash>` | Modern browsers, Google Search favicon |
| `app/apple-icon.png` | 180×180 | `/apple-icon.png?<hash>` | iOS / macOS Apple ecosystem, iMessage previews |
| `public/favicon.ico` | 16/32/48 multi-size, PNG-embedded | `/favicon.ico` | Legacy browsers, Google crawler default probe |
| `public/Anuj_favicon.svg` | 32×32 | `/Anuj_favicon.svg` | Original source SVG — kept as the master vector for regeneration |

### Regenerating the favicon stack from the source SVG

If the master SVG (`public/Anuj_favicon.svg`) changes, regenerate the derived files using macOS `sips` (no extra tools needed):

```bash
# 1. Regenerate app/icon.svg (same content, just bump display size to 48)
#    — usually just edit width/height attributes to "48" on the master and copy.

# 2. Regenerate apple-icon.png (180×180)
sips -s format png -Z 180 public/Anuj_favicon.svg --out app/apple-icon.png

# 3. Regenerate favicon.ico (16/32/48 multi-size PNG-in-ICO)
sips -s format png -Z 16 public/Anuj_favicon.svg --out /tmp/fav-16.png
sips -s format png -Z 32 public/Anuj_favicon.svg --out /tmp/fav-32.png
sips -s format png -Z 48 public/Anuj_favicon.svg --out /tmp/fav-48.png
# Then run the build-ico.mjs script (Node.js, no deps) to wrap PNGs into ICO container.
```

Google's favicon requirements: at least **48×48**, served at a stable URL, valid PNG/JPG/SVG. After redeploying, request reindex in Google Search Console — favicon refresh cycle can take **days to weeks**.

## HR / positioning audit history

This portfolio underwent a full HR-perspective audit. The following issues were **fixed** and should not regress:

1. **Title/meta vs hero mismatch** — fixed by aligning all metadata to "Frontend & React Native Developer"
2. **`v0.dev` generator leak** — removed
3. **Favicon missing from Google search** — added `app/icon.svg` (48×48), `app/apple-icon.png` (180×180), `public/favicon.ico` (multi-size)

Open follow-ups noted for the candidate (not code changes — content/copy work):
- LinkedIn recognition date alignment ("May 2026" badge vs Jan 2025 post ID)
- "20+ client projects" — only 3 visible in portfolio
- 4-year education gap (2015–2019) unexplained in `components/education.tsx`
- Mechanical → Software career pivot not narrated in `components/about.tsx`
- PPCROY `companyUrl: "#"` in `components/experience.tsx` (broken link)
- "Reply within an hour" claim in `components/faq.tsx` and `components/contact.tsx` (overpromise)
- GitHub surface area thin (only 1 public repo linked)
- TypeScript / testing / state-management missing from `components/skills.tsx`
- No disclosure that ChefKart product work is proprietary (would contextualize the lighter public portfolio)
