# Project structure and design system

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
  home/components/           Homepage-specific hero
  projects/
    components/              Project cards, hero and overview composition
    data/                    Typed project content; no React dependencies
  portfolio/components/      About, experience, contact and other portfolio sections
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

The portfolio sections can be reused in the standalone About route and the upcoming Experience and Contact routes. A folder alone does not create a public page: add an `app/.../page.tsx` only when that route is ready. Individual project routes are intentionally deferred.

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
