# Project structure and design system

For the complete visual reference—including the approved palette, typography scale, spacing, components, interaction states, imagery, motion, and accessibility rules—see [Portfolio visual identity guidelines](./brand-guidelines.md).

This is a Next.js web application. React Native's component composition and separation of responsibilities apply, but routes, semantic HTML, CSS, metadata and server rendering follow Next.js conventions.

## Where code belongs

```text
app/                         Routes, metadata, sitemap, robots and root layout
components/
  layout/                    Global navbar/footer and layout behavior
  shared/                    Reusable page sections (CTA, hero background)
  ui/                        Generic controls and low-level UI primitives
  icons/                     Brand icons
features/
  contact/
    components/              Shared contact section, route content and interactive form
    data/                    Contact-page content; no React dependencies
  home/components/           Homepage-specific hero
  projects/
    components/              Project cards, hero and overview composition
    data/                    Typed project content; no React dependencies
  skills/
    components/              Shared skill cards, homepage overview and route composition
    data/                    Typed skill groups and page navigation
  portfolio/components/      Homepage portfolio sections and FAQ
config/
  site.ts                    Canonical origin, author and site defaults
styles/
  tokens.css                 Color palettes, light/dark roles, fonts and responsive type sizes
  typography.css             Shared visual typography classes using the tokens
lib/                         General helpers, unrelated to a specific feature
hooks/                       Shared React hooks
utils/                       Browser/interaction helpers
```

Keep page files focused on composition and route metadata. A feature may use shared UI, configuration and helpers. Shared UI must not import feature-specific content. Import modules directly: do not introduce barrel exports that mix client and server modules. Use `use client` only where interaction or browser APIs require it; keep static project content server-rendered.

Portfolio content is reused across the standalone About, Experience, Skills and Contact routes where the same information appears on the homepage. A folder alone does not create a public page: add an `app/.../page.tsx` only when that route is ready. Reviewed project routes use the static `/projects/[slug]` architecture; listing-only projects do not produce detail pages.

## Editing typography

Edit responsive values once in `styles/tokens.css`. Both heroes now use `type-hero` and `type-lead`.

| Visual class                         | Use                                      |
| ------------------------------------ | ---------------------------------------- |
| `type-hero`                          | Main page title (30 / 36 / 48px)         |
| `type-section`                       | Standard section title (30 / 36px)       |
| `type-display`                       | Prominent section title (30 / 48px)      |
| `type-card` / `type-card-large`      | Card titles (20 / 24px)                  |
| `type-cta`                           | Shared CTA heading (24 / 30 / 36 / 48px) |
| `type-body`                          | Standard paragraph (16px)                |
| `type-lead`                          | Hero introduction (16 / 18px)            |
| `type-cta-body`                      | Shared CTA paragraph (16 / 18 / 20px)    |
| `type-small` / `type-caption`        | Supporting copy (14 / 12px)              |
| `type-label`                         | Uppercase section labels                 |
| `copy-heading` / `copy-body`         | Theme-aware text colors                  |
| `copy-inverse` / `copy-inverse-body` | Text on dark hero backgrounds            |
| `hero-gradient-text`                 | Shared hero heading gradient             |

Choose the HTML element for meaning, and the class for appearance:

```tsx
<h1 className="type-hero copy-inverse">Page title</h1>
<h2 className="type-section copy-heading">Section title</h2>
<h3 className="type-card copy-heading">Card title</h3>
<p className="type-body copy-body">Supporting explanation.</p>
```

Do not combine these role classes with `text-4xl`, responsive font-size classes or another role class. Layout spacing stays in the component. Small UI controls, decorative numeric statistics and brand illustrations may retain purpose-specific styles; they are not page headings or prose. Existing `heading-1`, `heading-2`, `heading-3` and `body-text` are compatibility aliases to the same tokens.

To change the font, update `--font-body` in `styles/tokens.css`. The current system stack keeps builds deterministic and avoids a runtime or build-time font request. `--font-heading` can use a different family from `--font-body`.

## Editing colors

All shared palettes and semantic light/dark values are in `styles/tokens.css`. Tailwind v4's `@theme` connects palette tokens to utilities, including opacity modifiers. Existing purple/pink colors and the distinct brand/accent palettes are retained to avoid changing the visual identity during this refactor. The legacy Tailwind config holds layout and plugin settings, not a second copy of the custom palette.

Use semantic text roles for prose and headings. Use palette utilities for intentional accents. Page artwork, company logo colors and generated Open Graph images are special cases; `next/og` runs outside the document CSS and does not inherit these browser tokens.

## SEO and new pages

- Set one descriptive H1 and use H2/H3 for meaningful section hierarchy; font size does not determine heading level.
- Export a unique title, description and self-referencing canonical for every new route.
- Use the canonical origin in `config/site.ts` in metadata, sitemap and schema.
- Reuse the global navbar/footer from the root layout; do not render them again inside pages.
- Keep important content and links in server-rendered HTML. Add real pages to the sitemap, not fragment links.
- Keep structured data consistent with visible content. Do not claim ranking benefits from directory names or typography tokens.
- Use a short, semantic in-page navigation for long story-led pages so visitors can scan the page and jump to its major sections.
- Mark a dedicated personal About route as `ProfilePage` with the same `Person` entity used by the site-wide schema.
- Verify typechecking, page rendering, metadata, local anchors and desktop/mobile appearance after changes.

## Sources informing the structure

- [Next.js project structure](https://nextjs.org/docs/app/getting-started/project-structure): supports feature organization and colocation without prescribing one universal directory tree.
- [React: Thinking in React](https://react.dev/learn/thinking-in-react): compose components around responsibilities and the data model.
- [Tailwind theme variables](https://tailwindcss.com/docs/theme): define shared visual values and connect them to utilities.
- [Google's developer SEO guide](https://developers.google.com/search/docs/fundamentals/get-started-developers): meaningful HTML, accessible content and descriptive metadata.

Certificate data lives in `features/certifications/data/certifications.ts` and is reused by the Certifications page, About page and homepage highlights. The Certifications route is server rendered and lists only credentials with distinct certificate URLs documented in `docs/about-story.md`.

Certificates are ordered by relevance to frontend and React Native roles: React JS, React Native, JavaScript, Node.js, databases, Flexbox, responsive websites, developer foundations and static websites. Homepage highlights import named certificate records so display order changes cannot redirect their links to another credential.

The Certifications page uses a decorative, versioned WebP illustration with reserved dimensions in the hero’s right column; original issuer links live in the unified nine-card collection. All nine credentials use identical cards and outlined certificate links; relevance is expressed by their order. See [the product and design review](certifications-design-review.md) for research, acceptance criteria and the image-generation prompt.

## Adding a project case study

1. Edit the existing project record in `features/projects/data/projects.ts`. Keep card facts, tags, links and contributions there; do not add separate SEO/content copies. Confirm public-safe context, responsibility, implementation and a deliverable or verification destination before adding `caseStudy`.
2. Add an explicit permanent lowercase slug, concise summary, context, responsibility, implementation notes, outcomes, dimensioned screenshot metadata and an explicit content date. Use only verified details. Omit unknown challenges, decisions, metrics and dates; publication is an editorial decision, not an automatic conversion of every card.
3. `features/projects/project-details.ts` selects published records for static params, the sitemap and related-project links. `project-seo.ts` builds route metadata and schema referencing existing root entities. The server component in `features/projects/components/project-detail.tsx` renders the evidence with shared typography and page controls.
4. Review affected listing/home/experience/skills sitemap dates when shared links change. Verify HTML, metadata, social images, normal link navigation, mobile/tablet/desktop layouts and unknown-slug 404s with a production build. Run the required repository checks.

Mopedo and Levels App have reviewed case-study content. Rekha Maa Ki Rasoi and Rama Technical College remain listing-only until concrete implementation details are supplied. ChefKart remains in professional experience and product-work sections; publishing an employer case study requires specific public-safe evidence beyond an employment summary.
