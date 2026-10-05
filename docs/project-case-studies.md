# Project case-study engineering report

Reviewed 3 October 2026. Changes are local; deployment and indexing are separate steps.

## 1. Architecture before

Next.js 16.3.5, React 19.1.0 and strict TypeScript use the App Router. `/projects` composed a server-rendered overview, shared cards and CTA. Four records in `features/projects/data/projects.ts` supplied descriptions, contributions, technologies, screenshots and tracked external links. The homepage reused those cards. There were no project detail routes; the listing schema identified projects through page fragments.

## 2. Architecture after

Optional, reviewed `caseStudy` content on the existing records drives `/projects/[slug]`. `features/projects/project-details.ts` handles published records, slug lookup, paths and related projects ranked by shared tags. `project-seo.ts` derives metadata and schema. `project-detail.tsx` renders reusable server content, shared breadcrumbs, section navigation, screenshots, outbound links and related projects. The native sitemap derives detail entries from the same reviewed records.

Mopedo now uses `mopedo-project-detail.tsx` as an art-directed presentation while retaining the shared data and SEO pipeline. Its redesign gives the product screenshot an above-the-fold browser frame, turns project facts into a compact brief, separates contributions from implementation, and uses a full-width interface preview. Levels App now has its own mobile-focused server presentation in `levels-project-detail.tsx`, retaining the five core sections and reviewed copy on the shared data/SEO pipeline. Its current Stitch-based composition is documented below.

Page and social-image routes use `generateStaticParams`. Unknown and listing-only project slugs return 404. The page uses `dynamicParams = false` to ensure unpublished slugs return HTTP 404. The explicit `notFound()` guard remains in both page and metadata lookup. Published pages remain build-time static; there is no request-time content fetch. [Next.js static-params documentation](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) explains this route strategy. Existing global loading, error and not-found boundaries are inherited; no duplicate recovery UI was added.

## 3. Routes added

- `/projects/mopedo`
- `/projects/levels-app`

Each has a corresponding `/opengraph-image` endpoint generated using the existing `next/og` convention.

## 4. Files created

- `app/projects/[slug]/page.tsx`: static route composition and metadata generation.
- `app/projects/[slug]/opengraph-image.tsx`: project-specific social artwork.
- `features/projects/components/project-detail.tsx`: shared semantic case-study presentation.
- `features/projects/project-details.ts`: publication, lookup, paths and related-project selection.
- `features/projects/project-seo.ts`: derived metadata and structured data.
- `features/projects/project-details.test.ts`: publication boundaries, entity/URL consistency and related-project behavior.
- `docs/project-case-studies.md`: this report.

## 5. Files modified

- `features/projects/data/projects.ts`: optional detail model and factual Levels/Mopedo content.
- `features/projects/components/projects.tsx`: normal case-study links alongside existing tracked live/source links.
- `components/shared/hero-breadcrumb.tsx`: optional linked ancestors and safe wrapping.
- `app/projects/page.tsx`: listing schema points to canonical case studies and their work IDs where available.
- `features/experience/data/experience.ts`: internship CTA links to the Levels case study; Skills also inherits this shared link.
- `app/sitemap.ts`: derived reviewed detail routes and explicit affected-page content dates.
- `app/sitemap.test.ts`: nine-route publication contract.
- `AGENTS.md`, `CLAUDE.md`, `README.md`, `docs/design-system.md`, `docs/production-readiness.md`, `docs/seo-audit.md`: durable architecture and project-addition guidance.

## 6. SEO improvements

Unique titles/descriptions, production canonicals, Open Graph/Twitter metadata and project-specific social images derive from each record. Visible Home/Projects/current-project breadcrumbs match BreadcrumbList markup. WebPage and CreativeWork nodes reference the existing Person/WebSite IDs; no duplicate Person definitions, ratings or fabricated dates were added. Listing entities reuse the detail work IDs. JSON-LD retains `<` escaping.

Normal anchors connect cards, case studies, related projects, Skills, Experience and Contact. Nine canonical pages enter the existing sitemap; robots remains unchanged, permits public pages and declares the production sitemap. The raw returned HTML includes summaries, responsibilities, contributions, implementation, technologies and links.

## 7. AEO/GEO improvements

Answer-first introductions connect the project, Anuj's responsibility and actual technologies. Context, contribution lists, implementation notes, deliverables and screenshots provide independently understandable evidence. The Levels page links to its documented internship; both pages link to related JavaScript work and broader skills/experience. Unsupported challenge narratives and numerical impact claims are omitted. There are no AI-specific files, FAQ stuffing or citation/ranking guarantees.

Content sources are the existing project records, experience records and `docs/about-story.md`. Descriptions summarize those sources; they do not establish undocumented internals. Firebase is described as internship experience, without inventing its role in question loading.

## 8. Performance review

No dependencies, fonts, third-party scripts, client components or remote content fetches were added. All core detail content is static/server rendered; outbound interaction reuses the existing small TrackedLink client boundary. No complete project objects are passed to a new client component. Below-the-fold screenshots use Next.js image defaults, responsive sizes and actual intrinsic dimensions; no new image is marked priority. Reserved image ratios prevent screenshot loading from shifting surrounding content.

Homepage portrait/cache policy, deferred contact form, animations, analytics and global navigation are preserved. Chrome confirmed loaded images and stable page width at 320, 375, 768, 1440 and 1920 pixels. This is architectural/browser validation, not a new Lighthouse or field CWV measurement; the deployed 90+ mobile baseline still needs post-deployment verification.

## 9. Project content readiness

| Project                             | Detail page                    | Evidence quality                                                                          | Missing information                                                            |
| ----------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Levels App                          | Implemented                    | Documented internship, specific quiz flows, screenshots and public source                 | Specific additional features, challenge/solution details and measured outcomes |
| Mopedo                              | Implemented                    | Public source, shared page shell, routing, scoped styles and mobile row-ordering approach | Design provenance, deployment ownership and measured outcomes                  |
| Rekha Maa Ki Rasoi                  | Listing-only                   | Website purpose, broad WordPress responsibilities and screenshot                          | Concrete customisation/implementation details and delivery challenges          |
| Rama Technical College of Education | Listing-only                   | Website purpose, information architecture, broad responsibilities and screenshot          | Concrete WordPress implementation details and delivery challenges              |
| ChefKart product work               | Existing professional sections | Public-safe roles and product surfaces already documented                                 | A focused, public-safe engineering case study with specific approved evidence  |

## 10. Technical validation

- `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`: pass; seven test files and 21 tests.
- `npm run build -- --webpack`: production build passes; reviewed project pages and their social images are generated from static params.
- Default `npm run build`: blocked by the previously documented Turbopack PostCSS worker-port `Operation not permitted` failure, including an escalation attempt. The script/config was not changed or suppressed.
- HTTP: listing and both case studies return 200; invalid and listing-only detail slugs return 404 with noindex. Next.js 16.3.5 logs an internal `NoFallbackError` for excluded slugs despite those correct responses. Allowing fallback, including with `force-static`, instead returned streamed HTTP 200, so static exclusion is retained. No diagnostic is suppressed.
- Raw HTML: one H1 per detail page; summaries, JavaScript, contributions, implementation and internal links present; correct canonical and OG URL; valid JSON-LD and exactly one root Person entity.
- Sitemap: HTTP 200 XML, nine unique production URLs, explicit dates, no priority/changefreq. Robots: HTTP 200 with correct production sitemap declaration.
- Social images: both return HTTP 200 PNG with project-specific artwork; visually inspected.
- Chrome: listing and both details checked at 320/375/768/1440/1920px; no horizontal scrolling. Only clipped, aria-hidden hero/CTA decoration extends beyond narrow viewports. Screenshots load after scrolling with meaningful alt text and preserved proportions.
- Keyboard: actual Tab focus produces a visible ring on the Implementation link; Enter navigates to the section with approximately 112px header clearance. Local section anchors resolve. Dark theme colors were checked. Detail evidence and related links remain available with JavaScript execution disabled; no runtime exceptions occurred.
- Existing error/loading UI is reused and reviewed in source. No artificial runtime exception was introduced to force an error screen.
- Existing Levels source and Mopedo live destinations each returned HTTP 200 in direct external checks. Reachability is not an audit of source correctness or live functionality.

## 11. Risks and follow-up

The default Turbopack build requires resolution of the local worker-port restriction; webpack provides a validated production artifact. Next.js 16.3.5 emits an internal `NoFallbackError` when requesting an excluded slug; the actual response is 404, and fixing that framework diagnostic must preserve this status contract. The two WordPress projects need specific factual implementation evidence before publication. Both initial case studies can be deepened when concrete tradeoffs, challenges or outcomes are supplied. Deploy before submitting the changed sitemap or expecting production URLs to exist; verify deployed canonicals, indexing and field performance afterward.

## 12. Mopedo source-evidence review

Reviewed 3 October 2026. Mopedo is the reference quality standard for future case studies: distinct context, specific ownership, source-backed implementation, engineering reasoning, verified challenge/solution and deliverables. Reuse these principles and the existing architecture, not its narrative. Keep repetition low, omit invented metrics and keep evidence in server HTML.

### Evidence and publication limits

The existing record documents Anuj’s frontend ownership. A local search found the portfolio screenshot but no Mopedo application checkout or source link. Inspection of Anuj’s public GitHub repositories located [mopedo-web-app](https://github.com/Anuj-Dhanuka/mopedo-web-app). The review used source revision `0533af7`; both this public URL and the unchanged [live demo](https://mopedo.netlify.app/) returned HTTP 200. The README is a generic Vite template, so it supplies no requirements, delivery history or impact evidence. Live-link reachability does not prove every interaction or that the deployment uses the reviewed revision.

| Published detail                                                        | Source at the reviewed revision                                             |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| React, JavaScript, Vite, React Router and styled-components             | `package.json`, `src/main.jsx`, `src/App.jsx` and JSX imports               |
| Four page views with shared Header/Footer outside Routes                | `src/App.jsx`                                                               |
| Homepage composed from section components                               | `src/pages/HomePage/index.jsx`                                              |
| Banner reused with a heading prop on Services and Contact               | `src/components/BannerSection/index.jsx`, Services/Contact page entry files |
| Shared service card styles with explicit JSX content                    | `src/pages/ServicesPage/ServicesCards/index.jsx`                            |
| Alternating service rows stack at 768px; second row uses column-reverse | `src/pages/ServicesPage/ServiceDetails/index.jsx`                           |
| Route-aware navigation, local menu state and close/scroll behavior      | `src/components/Header/index.jsx`                                           |
| Hero CTA buttons have no click handlers                                 | `src/pages/HomePage/components/HomePageHeroSection/index.jsx`               |
| Screenshot appearance and intrinsic dimensions                          | `public/Projects_images/Mopedo.webp` (2880 × 1520)                          |

“Single-page application” previously obscured the four client-side routes. Copy now names those views. Source CSS uses desktop defaults and narrower-screen overrides; the case study no longer calls it mobile-first. Service content is explicit JSX, so it does not claim a data-driven service renderer. Product marketing text in the source mentions AI, GPS and ordering, but that does not verify implementation of those systems; none is presented as Anuj’s engineering work.

### Content and architecture changes

The hero identifies the product, services, role and language. Context explains service overview/detail needs; contributions name owned frontend surfaces. Three implementation notes expose composition, styling and navigation. Two decisions explain the observable effects of shared shell/banner and shared styles with separate content, without inventing historical motivations. The challenge describes a concrete layout constraint and its CSS solution, without claiming a client incident or measured impact. The walkthrough describes what the screenshot actually shows. Delivery separates built pages from live/source inspection and explicitly limits CTA claims.

Repeated summaries, generic service-flow descriptions, the duplicate brief-principles block and implementation/outcome preambles were removed. No extra technical snapshot duplicates hero facts. Optional decisions, challenge and screenshot caption stay in the project record; a small Mopedo server component renders the engineering notes. Levels retains its existing renderer. Mopedo now uses the shared published-project ranking; compact cards show the internal case-study link before external actions.

Metadata and JSON-LD continue deriving from the same data, with centralized origin and existing Person/WebSite references. The Mopedo title already identifies React and Anuj; its description now inherits the concise summary. The sitemap derives the record’s explicit `2026-10-03` date, which remains correct for this same-day refinement. Shared Home/Projects content dates are already that date. No routing, SEO system, font, dependency, client boundary, animation or image asset was added. Existing hero image priority and lazy below-the-fold screenshots are preserved.

### Validation of this refinement

- Formatting, lint, typecheck and all 21 existing tests pass. Typecheck was rerun after build generation to avoid a concurrent generated-type race.
- `npm run build -- --webpack` passes and statically generates both reviewed pages and social images. Default `npm run build` still fails at the existing Turbopack CSS worker-port restriction, including outside the sandbox; no script or error suppression changed.
- Production HTTP checks: Mopedo and Levels return 200, unknown/listing-only details return 404, and Mopedo social artwork returns 200 PNG. Existing loading/error/not-found boundaries and static publication guards remain unchanged.
- Parsed returned HTML, excluding script data, contains contributions, engineering decisions, the CSS solution and source links. It contains one H1; JSON-LD parses with the root Person/WebSite and project WebPage/CreativeWork/BreadcrumbList entities.
- Canonical and Open Graph URL both equal `https://anujdhanuka.com/projects/mopedo`; unique title/description and Twitter summary-large-image metadata are present. Sitemap/robots return 200 and retain the production case-study URL and sitemap declaration.
- Chrome checked 320, 375, 768, 1440 and 1920px: no horizontal scrolling, valid local anchor targets and loaded screenshots. Mobile/tablet/desktop captures were visually inspected. Tab reaches the implementation anchor with a visible focus ring; Enter lands with approximately 112px clearance.
- Live/source links return 200 and retain new-tab behavior with `noopener noreferrer`; the related Levels case study returns 200 and is the primary card link.
- Performance protections are preserved, but no new Lighthouse or field-CWV measurement establishes a score or a measured absence of regression. Verify the deployed 90+ mobile baseline after publication.

### Owner input still needed

- Did you create the visual design, or implement a supplied design? Which parts were yours?
- Did you deploy and configure the Netlify site? Does the current demo correspond to revision `0533af7`?
- Were the hero CTA buttons intentionally placeholders, or is there a later implementation with working destinations?
- What specific constraint or alternative led you to choose React Router and styled-components?
- Are there recorded usability or performance measurements, with their method and date, that can be published?

## 13. Levels App visual redesign

Reviewed 5 October 2026. The redesign preserves all reviewed summary, context, responsibility, technology, contribution, implementation and outcome copy, plus the five anchor IDs and their section order. A decorative CSS hero graphic introduces the mobile work without adding fabricated app screens or loading screenshots above the fold. Numbered contribution cards, implementation cards, a contrasting delivery section and dimensioned phone-framed screenshots improve scanning. Related work uses the shared project card and published-project ranking. The global layout, CTA, tracked source links, metadata and structured data remain shared. No dependencies, client boundaries, animation or image assets were added. The content date remains `2026-10-03` because this pass changes presentation only.

Validation: formatting, lint, strict TypeScript and all 21 tests pass. The production Webpack build passes; default Turbopack still hits the previously documented PostCSS worker-port restriction even after escalation. Chrome checks cover 320/375/768/1440/1920px without horizontal overflow, loaded proportional screenshots, light/dark presentation and actual Tab/Enter section navigation with 112px header clearance. Production HTML retains all 22 checked existing content strings and one H1. Both reviewed routes return 200; unknown and listing-only routes return 404; Levels social artwork returns 200 PNG. Sitemap XML contains nine production entries and robots retains the production sitemap declaration.

## 14. Levels App Stitch composition and source excerpts

Reviewed 5 October 2026. The supplied HTML and screenshot are visual references. Their 60 FPS, sub-millisecond transitions, QA collaboration, sprint timings and specific additional-feature claims are not supported by the reviewed portfolio facts and were not imported. The original summary, context, responsibility, contributions, implementation descriptions and outcomes remain intact. New descriptive headings, an internship dossier sourced from `experienceRoles` and screen labels make that evidence easier to scan.

The composition now follows the reference: light two-column hero with three real app screenshots, compact six-link navigation, centered section headings, two-column context card, six ownership cards, three implementation/code cards, inset dark outcomes panel and login/category/quiz showcase. Header, footer and CTA components/props remain unchanged. Mopedo’s Continue exploring section is extracted into `MoreProjects` and reused exactly with Mopedo, Rekha Maa Ki Rasoi and Rama Technical College on Levels; Mopedo retains its original three cards. Listing-only cards remain external destinations, not case-study publication.

Code excerpts are contiguous source lines from [Levels App revision 6bcf151](https://github.com/Anuj-Dhanuka/levels-app/tree/6bcf15136f214ff74166da8c18b1359edf44de2c): category state selection in `src/screens/HomeScreen/index.js`, question extraction/dispatch in `src/store/actions/QuestionDataAction.js`, and reusable button layout styles in `src/components/buttons/Button.js`. Each excerpt links to its original file and lines. This establishes source provenance, not a runtime correctness or production-quality claim. No remote source fetching happens in the portfolio application; excerpts live in the canonical project record. Levels’ explicit content date advances to `2026-10-05` for the source evidence and new project links. No other route gains content changes requiring a date advance.

Shared metadata, canonicals, Open Graph/Twitter images, WebPage/CreativeWork/BreadcrumbList schema and escaped JSON-LD remain intact. Crawlable summary, semantic headings, dossier facts, real anchor links and linked evidence support answer extraction without invented FAQ/schema claims or ranking guarantees. No dependency, remote font, CDN script, server mutation or route-wide client boundary is added.

A Levels-scoped CSS module changes viewport horizontal clipping from `hidden` to `clip` while this page is present. This avoids a scroll ancestor that prevents CSS sticky positioning, without changing the global header/footer or other routes. The compact section bar uses native scrollable links, 44px targets and visible keyboard focus; anchor offsets account for both navigation bars. Phone layering is decorative and static, so content and operation do not depend on hover or motion.

Validation for this composition: format, lint, strict TypeScript and all 21 tests pass; the production Webpack build passes. Required default Turbopack was attempted inside and outside the sandbox and remains blocked by the known PostCSS worker-port restriction. Chrome verifies 320/375/768/1440/1920px with no document overflow, all hero/showcase images loaded proportionally, six valid anchors, visible Tab focus, Enter navigation and light/dark layouts. Both pages render their expected three distinct other projects. All 21 checked original Levels content strings remain in production HTML with one descriptive H1. Canonical/OG URLs match, JSON-LD contains the existing Person/WebSite and project WebPage/CreativeWork/BreadcrumbList entities, unknown/listing-only detail routes remain 404, Levels artwork returns 200 PNG, and the nine-entry sitemap/robots declaration remain production-only. Homepage browser regression checks confirm both marquees move and pause on hover, About hover/focus selects stacking layer 30, and timeline items enter from opacity 0 to 1 after scrolling. Local screenshots are saved under `/private/tmp/levels-stitch-final-{desktop,mobile,dark}.png`.
