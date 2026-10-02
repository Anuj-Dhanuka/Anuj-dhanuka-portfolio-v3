# Anuj Dhanuka portfolio

Source for [anujdhanuka.com](https://anujdhanuka.com), a Next.js 16 portfolio for Anuj Dhanuka’s frontend and React Native work.

## Stack

- Next.js App Router, React 19 and strict TypeScript
- Tailwind CSS with shared design and typography tokens
- Framer Motion with user reduced-motion preferences
- Zod validation and Resend email delivery
- Vitest, ESLint and Prettier
- Optional Google Analytics and Matomo page/event tracking

## Local development

Use Node.js 22 and npm. This repository intentionally keeps one lockfile.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. A Resend key is needed only for a successful contact-form delivery; pages and production builds do not require it.

## Environment

| Variable                        | Required         | Purpose                                                 |
| ------------------------------- | ---------------- | ------------------------------------------------------- |
| `RESEND_API_KEY`                | Contact delivery | Server-only Resend credential                           |
| `RESEND_FROM_EMAIL`             | No               | Verified sender; defaults to Resend’s onboarding sender |
| `CONTACT_TO_EMAIL`              | No               | Contact-form recipient                                  |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No               | Google Analytics measurement ID                         |
| `NEXT_PUBLIC_MATOMO_URL`        | No               | Matomo installation URL                                 |
| `NEXT_PUBLIC_MATOMO_SITE_ID`    | No               | Matomo site ID                                          |

Never commit `.env.local` or production credentials.

## Quality checks

```bash
npm run check          # format, lint, typecheck, tests and production build
npm run test:coverage  # coverage for contact and server utilities
npm run lint:fix
npm run format
```

GitHub Actions runs the same `npm run check` gate for pull requests and pushes to `main`. Dependabot checks npm and GitHub Actions dependencies.

## Structure

```text
app/                 routes, metadata, recovery UI and API handlers
components/layout/   global navigation and footer
components/shared/   reusable composed sections and route states
components/ui/       generic controls
features/            feature UI, data, schemas and services
config/              site, fonts, analytics and validated server env
lib/server/          server-only logging and rate limiting
styles/              shared design and typography tokens
docs/                design-system and production decisions
```

See [the design-system guide](docs/design-system.md) and [production-readiness notes](docs/production-readiness.md) for conventions, trust boundaries, deployment, and checklist scope.

## SEO

The public routes are `/`, `/about`, `/experience`, `/skills`, `/projects`, `/certifications` and `/contact`. Each route includes unique metadata, a canonical URL, social images, relevant JSON-LD, semantic headings and server-rendered content, and each route is listed in the sitemap. The homepage and Contact page reuse the same contact form, validation and server delivery flow.

Add future public pages to `app/sitemap.ts` and give each one unique metadata.

Next.js native `app/sitemap.ts` serves `/sitemap.xml`; `app/robots.ts` serves `/robots.txt` and points to the production sitemap while blocking `/api/`. `config/site.ts` defines the origin (`site.url`) and slash-terminated homepage canonical (`site.homeUrl`); other public URLs omit the trailing slash. Keep sitemap, canonical, Open Graph and page-schema URLs equivalent after URL normalization. Next.js serializes root canonical/OG tags without `/`; both forms identify the same homepage, so existing route normalization is preserved.

Sitemap entries use explicit content-update dates in `lastModified`, not request/build timestamps. Update only affected entries after meaningful content, structured-data or link changes. The initial Experience/Skills dates come from the 23 September 2026 content commit; Projects/Contact reflect reviewed 2 October 2026 updates; Home/Certifications reflect the new Certifications page and homepage link added on 3 October 2026; About reflects the shared certificate reorder on that date. Google ignores `priority` and `changefreq`, so neither is emitted. Add only canonical, indexable production pages and verify the XML after changes. Do not add another sitemap generator.

See the [Certifications design review](docs/certifications-design-review.md) for the research, visual hierarchy and generated artwork behind that page.

See the [technical SEO audit](docs/seo-audit.md) for the route inventory, findings, completed fixes and verification limits.

## License and content

The code is available for reference. Portfolio copy, personal images, company references and project media are © Anuj Dhanuka.
