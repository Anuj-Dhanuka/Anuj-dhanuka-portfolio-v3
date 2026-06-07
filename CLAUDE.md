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
- Image optimization is **enabled** (Next.js default) — runs through Netlify's Next.js plugin, which auto-installs on deploy. All `<Image>` components get on-demand resizing, WebP/AVIF conversion, and lazy loading for free

### Forms

Contact form uses **react-hook-form** + **zod** for validation, submitting to `/api/contact`. Email delivery is via **Resend**.

### Animation

**Framer Motion** is used for section entrance animations and interactive effects. Animations are typically triggered on scroll via Intersection Observer inside individual section components.

### Deployment

Deployed via **Netlify** with the official Next.js plugin (auto-installed by Netlify on deploy — no manual `netlify.toml` needed). Netlify watches `master` and rebuilds on every push.

A legacy `.cpanel.yml` file remains from a prior cPanel setup but is no longer used; safe to remove if it surfaces as a confusion source.

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Required for contact form email delivery |

## SEO & Metadata

The site is positioned as **"Software Engineer | Frontend Developer"** with React.js + React Native as the technologies surfaced in description copy. Keep all metadata, hero copy, OG card, and FAQ answers aligned with this positioning. Do NOT reintroduce "Full-Stack" or "Firebase Expert" framing in `app/layout.tsx` metadata.

- Canonical title pattern: `Anuj Dhanuka | Software Engineer | Frontend Developer`
- Canonical description anchors: *"Software Engineer and Frontend Developer with React.js and React Native experience"*, *"20+ client projects"*, *"ChefKart's customer app, internal dashboard and website"*
- JSON-LD `jobTitle` is **"Software Engineer"** (the formal title); the Frontend Developer + React.js/React Native specialty lives in `description` + `knowsAbout`
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

## Search-engine plumbing

The site uses Next.js's file-based metadata convention for sitemap, robots, and structured data:

| File | Served at | Purpose |
|---|---|---|
| `app/sitemap.ts` | `/sitemap.xml` | Lists homepage + all in-page section anchors; submit this URL in Search Console → Sitemaps |
| `app/robots.ts` | `/robots.txt` | Allows everything except `/api/`; declares sitemap location |
| `app/layout.tsx` (`personJsonLd`) | inline `<script type="application/ld+json">` | Schema.org Person markup — name, role, employer, skills, social links. Improves search snippet appearance. |
| `public/googlefcb50a119eef10da.html` | `/googlefcb50a119eef10da.html` | Google Search Console ownership verification — never delete |

Site URL is hard-coded as `https://anujdhanuka.com` in sitemap/robots/JSON-LD. If the canonical domain ever changes, update all three.

## Search Console & Analytics — accounts, IDs, and what to do if anything migrates

Everything below is live and verified as of 2026-06-07. If domain, Google account, or hosting changes, this section is the migration checklist.

### Google Search Console
- **Property type:** URL prefix
- **Property URL:** `https://anujdhanuka.com/`
- **Ownership verified via:** HTML file at `public/googlefcb50a119eef10da.html` (must remain in repo permanently; Google re-checks periodically)
- **Sitemap submitted:** `/sitemap.xml` — status Success, 10 URLs discovered
- **Verification token (in the file):** `googlefcb50a119eef10da`

### Google Analytics 4
- **Measurement ID:** `G-Z31QZE55CS` (hard-coded in `app/layout.tsx` as `GA_MEASUREMENT_ID`; GA IDs are public so no env var needed)
- **Property name:** `Anuj Dhanuka Portfolio`
- **Stream name:** `Portfolio Site`
- **Stream URL:** `https://anujdhanuka.com`
- **Enhanced measurement:** ON (auto-tracks page views, scrolls, outbound clicks, site search, form interactions, file downloads, video engagement)
- **Implementation:** `app/layout.tsx` — two `<Script>` tags via `next/script` with `strategy="afterInteractive"` (no LCP impact)
- **Production-only:** wrapped in `process.env.NODE_ENV === "production"` so localhost dev runs do not pollute analytics
- **Verified live:** 2026-06-07 — Realtime report confirmed 1 active user from `anujdhanuka.com`

### Search Console ↔ GA4 association
- **Status:** Linked — Search Console property and GA4 property are associated
- Where to check: GA4 Admin → Product Links → Search Console links
- Search query data flows from Search Console into GA4 (Acquisition → Search Console reports)

### Google account that owns everything
- The Google account used to verify Search Console AND create the GA4 property MUST be the same account (or have admin access on both). Currently both are owned by the user's primary Google account.

### Migration scenarios

**If the canonical domain changes (e.g. `anujdhanuka.com` → `anuj.dev`):**
1. Update `SITE_URL` constant in `app/layout.tsx` (and any other hard-coded URLs — `app/sitemap.ts`, `app/robots.ts`)
2. In Search Console: add the new property (URL prefix), verify ownership (drop a new verification file in `public/`), submit sitemap
3. In GA4: create a new data stream for the new domain (or update the existing stream's URL). Get a new Measurement ID if you create a new property; update `GA_MEASUREMENT_ID` constant
4. Re-link Search Console ↔ GA4 for the new properties
5. Set up 301 redirects from the old domain to the new one (Netlify `_redirects` file)
6. Update OG image base URL, JSON-LD `@id` URLs (they reference the SITE_URL constant — should auto-update), `metadataBase` in layout.tsx
7. Update LinkedIn Featured link, GitHub profile, Dev.to bio, etc.

**If the Google account changes:**
1. In Search Console: Admin → Users and Permissions → add the new account as Owner
2. In GA4: Admin → Property Access Management → add the new account as Admin
3. Old account can be removed afterwards
4. No code changes needed

**If you want to rotate the GA4 property** (e.g. create a fresh property and stop using the old one):
1. Create new GA4 property + stream, copy the new `G-XXXXXXXXXX`
2. Update `GA_MEASUREMENT_ID` constant in `app/layout.tsx`
3. Re-link to Search Console
4. Historical data in the old property is read-only; new data flows to the new one

**If hosting moves off Netlify** (e.g. to Vercel or self-hosted):
- The `next/script` GA4 setup works identically on any Next.js host
- Make sure `NODE_ENV === "production"` is set in the new environment (most hosts do this by default)
- Image optimization may need re-checking (Vercel handles `<Image>` natively; cPanel/static export breaks it)
- Re-verify Search Console ownership at the new host (the verification file at `/googlefcb50a119eef10da.html` must still be reachable)

**If you need to rotate the Search Console verification file:**
- Don't delete the existing `public/googlefcb50a119eef10da.html` until the new method is verified
- Add an alternate verification method first (DNS TXT record, or HTML meta tag in `app/layout.tsx` via `verification.google`) → verify → only then remove the old file

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
