# Anuj Dhanuka — Portfolio

The source for **[anujdhanuka.com](https://anujdhanuka.com)** — a Next.js 16 portfolio showcasing my work as a Software Engineer and Frontend Developer.

<p>
  <a href="https://anujdhanuka.com"><img alt="Live site" src="https://img.shields.io/badge/Live-anujdhanuka.com-7c3aed?style=for-the-badge"></a>
  <a href="https://linkedin.com/in/anuj-dhanuka"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Anuj%20Dhanuka-0a66c2?style=for-the-badge&logo=linkedin"></a>
  <img alt="Built with Next.js" src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178c6?style=for-the-badge&logo=typescript">
  <img alt="Tailwind v4" src="https://img.shields.io/badge/Tailwind-v4-06b6d4?style=for-the-badge&logo=tailwindcss">
</p>

## About

I'm Anuj — Software Engineer at **ChefKart**, focused on frontend and React Native development. This portfolio aggregates:

- Live product work at ChefKart (customer mobile app, internal dashboard, website)
- 20+ client projects delivered at PPCROY TECH SOLUTIONS
- React Native and React.js applications, certifications, and recognitions

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Server Components) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** (via `@tailwindcss/postcss`) |
| UI primitives | **Radix UI** + **CVA** (57-component design system) |
| Animation | **Framer Motion** |
| Forms | **react-hook-form** + **zod** |
| Email delivery | **Resend** |
| Hosting | **Netlify** (with the official Next.js plugin) |
| Analytics | **Google Analytics 4** (via `next/script`, `afterInteractive`) |
| Icons | **Lucide** + **react-icons** |

## SEO & metadata foundation

This isn't just a portfolio — it's also a working reference for shipping SEO-tight Next.js 16 sites.

- **Linked JSON-LD `@graph`** — Person + WebSite + ProfilePage entities cross-referenced by `@id`
- **FAQPage schema** auto-built from the FAQ section's data
- **Programmatic OG + Twitter cards** generated at build time via `next/og` — no static `og-image.png` to maintain
- **Favicon stack** — `app/icon.svg` (48×48 vector), `app/apple-icon.png` (180×180), `public/favicon.ico` (16/32/48 multi-size PNG-in-ICO fallback)
- **`app/sitemap.ts`** auto-generates `/sitemap.xml`; **`app/robots.ts`** declares crawl rules + sitemap location
- **Schema.org validator** clean (0 errors, 0 warnings)
- **Google Search Console** verified, sitemap submitted, indexing requested

## Performance

- **Image optimization** via Next.js Image + Netlify plugin (WebP/AVIF, responsive variants)
- **Hero LCP tuning** — `priority` + precomputed `blurDataURL` for blur-up effect
- **Lazy-loaded below-the-fold sections** via `next/dynamic` (SSR preserved for SEO)
- **Font optimization** via `next/font/google` with `display: "swap"`

## Sections

- `hero.tsx` — landing with orbiting tech icons and floating company cards
- `stats-strip.tsx` — animated count-up metrics
- `tech-strip.tsx` — tech stack showcase
- `about.tsx` — capability cards with stacked layout
- `what-i-bring.tsx` — three core strengths
- `experience.tsx` — alternating timeline of roles
- `projects.tsx` — selected client + personal projects
- `featured-product-work.tsx` — ChefKart product surfaces (tabs)
- `skills.tsx` — grouped technical skills + AI tools
- `recognition-certifications.tsx` — ChefKart RNR award, CCBP, Udemy certs
- `education.tsx`, `mentor.tsx` — credentials and mentorship
- `cta.tsx`, `faq.tsx`, `contact.tsx`, `footer.tsx`

## Project structure

```
app/
  api/contact/route.ts          # Contact form → Resend
  layout.tsx                    # Root layout + JSON-LD graph + GA4
  page.tsx                      # Single route: stacks all section components
  opengraph-image.tsx           # Auto-generated OG card
  twitter-image.tsx             # Re-exports OG image for Twitter
  icon.svg / apple-icon.png     # Favicon convention files
  sitemap.ts / robots.ts        # Auto-generated /sitemap.xml + /robots.txt
components/
  ui/                           # Radix-based design system primitives
  *.tsx                         # Feature section components
public/
  Projects_images/, logos/, Recognizations/, product-work/
  favicon.ico, googl...html     # Favicon fallback, GSC verification
```

## Run locally

```bash
npm install
npm run dev          # localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # production server
npm run lint         # ESLint
```

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Required for the `/api/contact` endpoint to deliver form submissions |

Create `.env.local` and set the key. Without it, the contact form will fail on submit.

## License & usage

All code is provided for reference. Project content — copy, images, branding, projects shown — is © Anuj Dhanuka.

## Connect

- **Portfolio:** [anujdhanuka.com](https://anujdhanuka.com)
- **LinkedIn:** [linkedin.com/in/anuj-dhanuka](https://linkedin.com/in/anuj-dhanuka)
- **Email:** [anujd973@gmail.com](mailto:anujd973@gmail.com)
- **Location:** Gurugram, Haryana, India
