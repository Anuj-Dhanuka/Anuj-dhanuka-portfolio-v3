# Project case-study engineering report

Current migration reviewed 6 October 2026. Changes are local; deployment and indexing are separate steps.

Current publication: Mopedo V2 and QuizWar V2. Sections 1–14 are historical implementation records and do not authorize republishing Levels App. Sections 15–20 document the final Mopedo and QuizWar evidence, presentation and freeze passes.

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

The record documents Anuj’s owner-confirmed interface-design, frontend-development and Netlify-deployment ownership. The public [mopedo-web-app](https://github.com/Anuj-Dhanuka/mopedo-web-app) repository remains the technical source of truth. The review used source revision `0533af7`; the owner confirms that the current [live demo](https://mopedo.netlify.app/) corresponds to that reviewed implementation, and both destinations returned HTTP 200. The README is a generic Vite template, so it supplies no requirements, delivery history or impact evidence.

| Published detail                                                        | Source at the reviewed revision                                             |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| React, JavaScript, Vite, React Router and styled-components             | `package.json`, `src/main.jsx`, `src/App.jsx` and JSX imports               |
| Four page views with shared Header/Footer outside Routes                | `src/App.jsx`                                                               |
| Homepage composed from section components                               | `src/pages/HomePage/index.jsx`                                              |
| Banner reused with a heading prop on Services and Contact               | `src/components/BannerSection/index.jsx`, Services/Contact page entry files |
| Shared service card styles with explicit JSX content                    | `src/pages/ServicesPage/ServicesCards/index.jsx`                            |
| Alternating service rows stack at 768px; second row uses column-reverse | `src/pages/ServicesPage/ServiceDetails/index.jsx`                           |
| Route-aware navigation, local menu state and close/scroll behavior      | `src/components/Header/index.jsx`                                           |
| Demo CTA elements establish visual hierarchy without a backend flow     | `src/pages/HomePage/components/HomePageHeroSection/index.jsx`               |
| Screenshot appearance and intrinsic dimensions                          | `public/Projects_images/Mopedo.webp` (2880 × 1520)                          |

“Single-page application” previously obscured the four client-side routes. Copy now names those views. Source CSS uses desktop defaults and narrower-screen overrides; the case study does not call it mobile-first. Service content is explicit JSX, so it does not claim a data-driven service renderer. Mopedo is owner-confirmed as a frontend demo with no backend or external API; product-marketing references in the source do not establish implemented AI, GPS, booking or ordering systems and are not presented as Anuj’s engineering work.

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

- What specific constraint or alternative led you to choose React Router and styled-components?
- Are there recorded usability or performance measurements, with their method and date, that can be published?

## 13. Levels App visual redesign

Reviewed 5 October 2026. The redesign preserves all reviewed summary, context, responsibility, technology, contribution, implementation and outcome copy, plus the five anchor IDs and their section order. A decorative CSS hero graphic introduces the mobile work without adding fabricated app screens or loading screenshots above the fold. Numbered contribution cards, implementation cards, a contrasting delivery section and dimensioned phone-framed screenshots improve scanning. Related work uses the shared project card and published-project ranking. The global layout, CTA, tracked source links, metadata and structured data remain shared. No dependencies, client boundaries, animation or image assets were added. The content date remains `2026-10-03` because this pass changes presentation only.

Validation: formatting, lint, strict TypeScript and all 21 tests pass. The production Webpack build passes; default Turbopack still hits the previously documented PostCSS worker-port restriction even after escalation. Chrome checks cover 320/375/768/1440/1920px without horizontal overflow, loaded proportional screenshots, light/dark presentation and actual Tab/Enter section navigation with 112px header clearance. Production HTML retains all 22 checked existing content strings and one H1. Both reviewed routes return 200; unknown and listing-only routes return 404; Levels social artwork returns 200 PNG. Sitemap XML contains nine production entries and robots retains the production sitemap declaration.

## 14. Levels App Stitch composition and source excerpts

Reviewed 5 October 2026. The supplied HTML and screenshot are visual references. Their 60 FPS, sub-millisecond transitions, QA collaboration, sprint timings and specific additional-feature claims are not supported by the reviewed portfolio facts and were not imported. The original summary, context, responsibility, contributions, implementation descriptions and outcomes remain intact. New descriptive headings, an internship dossier sourced from `experienceRoles` and screen labels make that evidence easier to scan.

The composition now follows the reference: light two-column hero with three real app screenshots, compact six-link navigation, centered section headings, two-column context card, six ownership cards, three implementation/code cards, inset dark outcomes panel and login/category/quiz showcase. Header, footer and CTA components/props remain unchanged. Mopedo’s Continue exploring section is extracted into `MoreProjects` and reused exactly with Mopedo, Rekha Maa Ki Rasoi and Rama Technical College on Levels; Mopedo retains its original three cards. Listing-only cards remain external destinations, not case-study publication.

Code excerpts are contiguous source lines from the formerly reviewed Levels App revision: category state selection in `src/screens/HomeScreen/index.js`, question extraction/dispatch in `src/store/actions/QuestionDataAction.js`, and reusable button layout styles in `src/components/buttons/Button.js`. Each excerpt links to its original file and lines. This establishes source provenance, not a runtime correctness or production-quality claim. No remote source fetching happens in the portfolio application; excerpts live in the canonical project record. Levels’ explicit content date advances to `2026-10-05` for the source evidence and new project links. No other route gains content changes requiring a date advance.

Shared metadata, canonicals, Open Graph/Twitter images, WebPage/CreativeWork/BreadcrumbList schema and escaped JSON-LD remain intact. Crawlable summary, semantic headings, dossier facts, real anchor links and linked evidence support answer extraction without invented FAQ/schema claims or ranking guarantees. No dependency, remote font, CDN script, server mutation or route-wide client boundary is added.

A Levels-scoped CSS module changes viewport horizontal clipping from `hidden` to `clip` while this page is present. This avoids a scroll ancestor that prevents CSS sticky positioning, without changing the global header/footer or other routes. The compact section bar uses native scrollable links, 44px targets and visible keyboard focus; anchor offsets account for both navigation bars. Phone layering is decorative and static, so content and operation do not depend on hover or motion.

Validation for this composition: format, lint, strict TypeScript and all 21 tests pass; the production Webpack build passes. Required default Turbopack was attempted inside and outside the sandbox and remains blocked by the known PostCSS worker-port restriction. Chrome verifies 320/375/768/1440/1920px with no document overflow, all hero/showcase images loaded proportionally, six valid anchors, visible Tab focus, Enter navigation and light/dark layouts. Both pages render their expected three distinct other projects. All 21 checked original Levels content strings remain in production HTML with one descriptive H1. Canonical/OG URLs match, JSON-LD contains the existing Person/WebSite and project WebPage/CreativeWork/BreadcrumbList entities, unknown/listing-only detail routes remain 404, Levels artwork returns 200 PNG, and the nine-entry sitemap/robots declaration remain production-only. Homepage browser regression checks confirm both marquees move and pause on hover, About hover/focus selects stacking layer 30, and timeline items enter from opacity 0 to 1 after scrolling. Local screenshots are saved under `/private/tmp/levels-stitch-final-{desktop,mobile,dark}.png`.

## 15. Mopedo V2 source evidence

Reviewed 6 October 2026. Mopedo now links each technical implementation note to an exact file and line range at reviewed source revision `0533af7`. The evidence covers the four-route shared page shell, responsive service-row styling and header navigation state. These links make the implementation claims independently inspectable while keeping the case-study copy and source references in the existing typed project record.

The visual design, route architecture, metadata and schema pipeline remain unchanged. The refinement adds no dependency, image, dynamic fetch, route-wide client boundary or new JavaScript feature; it reuses the existing tracked-link component already present on project pages. The Mopedo content date advances to 6 October 2026 so the derived sitemap records the evidence update.

## 16. Mopedo owner-evidence freeze

Reviewed 6 October 2026. Anuj confirms that he independently created Mopedo’s complete visual/interface design, implemented its React frontend, configured Netlify and deployed the reviewed implementation. Mopedo was intentionally scoped as a frontend demo; its CTA elements communicate visual hierarchy rather than a production booking or ordering flow, and no backend or external API was part of the project.

The public case study now reflects that ownership in its hero summary, responsibility and scope facts, contribution list, interface walkthrough and delivery outcomes. The technology list contains runtime and development tools only. Engineering decisions remain limited to source-observable implementation effects because the original selection rationale for React Router and styled-components remains unknown. No business, traffic, conversion, user or performance metrics are claimed.

This owner-evidence refinement freezes Mopedo V2 as the portfolio’s React/web reference case study. Do not add speculative SEO/AEO/GEO copy or unverified backend, API, booking, ordering, authentication, payment or database capabilities to Mopedo.

## 17. QuizWar Phase 1 migration — 6 October 2026

Levels App is no longer a public portfolio project because company/client ownership and publication rights are intentionally treated conservatively. Do not recreate `/projects/levels-app` without explicit owner approval. It is absent from static generation and the sitemap and returns 404, without a redirect. QuizWar and Levels are separate projects; never describe QuizWar as a renamed Levels project or associate its source with 3rd Eye Lab.

QuizWar is the portfolio’s independent React Native project, with canonical route `/projects/quizwar` and source `https://github.com/Anuj-Dhanuka/QuizWar`. The central project record drives Home, Projects, related cards, metadata, schema, sitemap and social artwork. Mopedo V2 content and metadata remain frozen; only its data-derived related card changes. High-level internship employment, dates and technologies remain factual. Public About/FAQ/Experience copy no longer names the client project or exposes quiz implementation details; the internship CTA now links to its experience entry, including where Skills reuses it. The canonical private career story retains its historical facts.

Baseline verification used public revision `d5615500727afef56425fd358202074c2eed79ab`: package.json, App.js, navigation, screen inventory, Redux store, auth context, API utilities, phone sign-in, game/dashboard screens and native Android/iOS configuration. Confirmed JavaScript and React Native CLI; Redux Toolkit and Redux Persist; React Navigation; Firebase Authentication, Firestore and Storage; category/game/result, dashboard/leaderboard, profile/settings areas and sound/haptic calls. These establish source presence, not runtime testing or production release claims. No app dates, delivery metrics or internship claims were imported.

The baseline uses `project-detail.tsx` on the existing static route and SEO pipeline. It has overview, ownership, three concise capabilities, stack and tracked source links, shared related cards and CTA. No new dependencies, client components, global state, runtime fetching or dynamic rendering were introduced. All four retired Levels presentation files were removed. The owner explicitly confirmed that the three existing screenshots accurately show QuizWar and are theirs to publish, overriding the initial exclusion. The image bytes are reused under `/quizwar-login.webp`, `/quizwar-categories.webp` and `/quizwar-quiz.webp` with factual alt text, dimensions and below-fold detail-page loading. The former Levels asset paths are removed. A fresh screenshot capture may still be reviewed in Phase 2.

Lightweight public-repository safety review: `android/app/google-services.json` contains Firebase client configuration, which is not automatically a secret. Verify Firestore and Storage rules, Authentication settings and Google/Firebase API restrictions in the owning account; no rules files were found in the reviewed repository tree, so deployed access controls are unverified. Android release configuration uses the checked-in debug keystore; review release signing before distribution. Auth context restores token/user values from AsyncStorage and API/dashboard code logs user/performance data; review storage and logging. No configuration values or credentials are copied into the portfolio. The QuizWar repository was not modified.

The deep case-study optimization described here was completed in section 19. Improving the template README remains a separate repository task.

Intentional remaining Levels occurrences: AGENTS.md, CLAUDE.md, README.md and design-system/SEO docs record retirement; this report retains historical implementation/validation records; docs/about-story.md retains canonical career history. Publication tests explicitly reject the retired slug. The word “levels” in certifications-design-review.md refers to certification levels, not the project. 3rd Eye Lab names, logo and high-level employment history remain in Home, About, Experience, Skills/FAQ and career documentation; none links that employer to QuizWar source.

Validation: `npm run format:check`, `npm run lint`, `npm run typecheck` and `npm test` pass (7 files, 22 tests). `npm run build` was attempted in and outside the sandbox and retains the documented Turbopack/PostCSS worker-port restriction; `npm run build -- --webpack` passes and generates QuizWar and Mopedo plus their social images statically. No build configuration or required checks were bypassed or changed.

Local production HTTP checks: QuizWar, Mopedo and Projects return 200; retired Levels page and its OG route return 404 with no redirect; unknown, alternative and listing-only project slugs also return 404. The retired page retains the shared noindex 404 UI. The local Next.js server logs internal `NoFallbackError` messages for excluded static slugs while returning the expected HTTP 404; the existing publication guard remains unchanged. QuizWar artwork returns 200 image/png and was visually inspected. Canonical, OG and schema URLs agree; Twitter uses QuizWar artwork and descriptions. Sitemap contains nine canonical pages with QuizWar dated `2026-10-06`, no Levels entry and no crawl-frequency hints. Robots still declares the production sitemap and blocks `/api/`. Important summary, stack, source and related links exist in server HTML. Generated public HTML contains no Levels references. Existing loading/error boundaries were inspected unchanged; an artificial production fault was not injected.

Chrome checks covered QuizWar, Projects, Mopedo, Home, About, Experience and Skills at 320/375/768/1440/1920px (35 combinations): no horizontal overflow, one H1, valid section anchors and image alt attributes. A follow-up scroll check verified all QuizWar screenshots load at every width. Mobile/desktop full-page and dark screenshots were reviewed. Native Tab/Enter navigation reaches source and overview links with visible focus and approximately 112px anchor clearance. No runtime exceptions were reported. This is a responsive/keyboard review, not a full accessibility certification or a new PageSpeed measurement. No animations were changed. Dependencies and client boundaries remain unchanged; no deployment or QuizWar repository edits were performed.

## 18. QuizWar hero restoration — 6 October 2026

At the owner’s request, QuizWar restores the former three-phone hero composition: category selection centered above angled sign-in and quiz screenshots, purple/pink shared hero background, gradient React Native heading, pill eyebrow, technology badges, source CTA and responsive spacing/order. Copy remains QuizWar-specific; the eyebrow identifies an independent project rather than importing internship delivery claims. The overview anchor replaces the retired context anchor. The presentation uses `quizwar-project-hero.tsx`, a scoped CSS module and shared `project-phone.tsx` frames also reused below the fold. Center screenshot is preloaded; side hero images are eager, while showcase screenshots remain lazy. No global viewport override, new client boundary, dependencies or project content/metadata change is introduced. The existing migration content date remains 6 October 2026.

Hero restoration validation: format, lint, strict TypeScript and all 22 tests pass. Production Webpack build passes; required default Turbopack attempts inside/outside the sandbox retain the documented PostCSS worker-port restriction. Chrome checks at 320/375/768/1440/1920px confirm all three hero images load proportionally, no document overflow, one H1, valid anchors and correct responsive ordering. Tab/Enter navigation retains visible focus and 112px overview clearance. Desktop/mobile screenshots were visually reviewed; dark styling and reduced-motion transition removal were checked. Phone hover changes the center transform, both homepage marquees move in opposite directions and hover pauses the targeted track, About hover/focus activates stacking layer 30, and timeline entrance changes opacity 0 to 1 after scrolling. No browser exceptions were reported. Local production checks retain QuizWar/Mopedo HTTP 200, Levels HTTP 404, correct canonical and sitemap/robots publication boundaries.

## 19. QuizWar V2 source-evidence case study — 6 October 2026

### Architecture reviewed and source revision

QuizWar is an independent JavaScript application built with React Native 0.75 and the React Native CLI. The root composes Redux, Redux Persist, authentication and theme contexts, gesture handling and React Navigation. Authentication state selects either a sign-in/registration stack or an application stack; Home, Dashboard and Profile form its bottom tabs. Six Redux Toolkit slices separate account, performance, active category, game result, category and token state. Only `auth` and `userPerformance` are persisted through AsyncStorage.

Firebase Authentication handles phone-number SMS and OTP confirmation. Firestore stores user, category, score and performance records. Firebase Storage receives profile images selected and cropped through the native picker. Shared `Apiutils` methods cover several data operations, while sign-in and registration screens also call Firebase directly; the page does not claim a fully centralized data layer. The game screen uses a shared local question bank, not category-specific questions fetched from Firestore.

The reviewed public `main` revision is `d5615500727afef56425fd358202074c2eed79ab`. All public implementation evidence points to that exact SHA, file and line range. Git history shows staged additions for the home, categories, results, mobile feedback, Firebase/OTP and performance/dashboard work, but commit messages are not used as public claims.

### Source verification table

| Public claim                                      | Verified | Reviewed source                                            | Published wording                                                                        |
| ------------------------------------------------- | -------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| React Native CLI application                      | Yes      | `package.json`, `android/`, `ios/`                         | React Native CLI quiz app with native Android and iOS project structures                 |
| Redux Toolkit domains                             | Yes      | `src/store/store.js` and six slice files                   | Six slices separate account, performance, category, session, result and token concerns   |
| Persisted state                                   | Yes      | `src/store/store.js`                                       | Only auth and user performance are persisted through AsyncStorage                        |
| Authentication-aware navigation                   | Yes      | `src/Navigations/index.js`, `TabNavigator.js`, AuthContext | Signed-out and application stacks are selected from restored user state                  |
| Firebase Authentication and OTP                   | Yes      | `SigninScreen`                                             | Phone-number SMS and OTP confirmation                                                    |
| Firestore                                         | Yes      | `ApiUtils`, Signin, Registration, Result                   | User, category, score and performance records                                            |
| Firebase Storage                                  | Yes      | `ApiUtils`, Registration, Edit Profile                     | Cropped profile-image upload and download URL                                            |
| Timed quiz and scoring                            | Yes      | `GameScreen`                                               | Countdown, answer lock/feedback, score, speed/streak points and highest-score comparison |
| Leaderboard                                       | Yes      | `DashboardScreen`                                          | Deterministic ordering by score, time, monthly points and total points                   |
| Sound and haptics                                 | Yes      | common utilities, Game, Tabs, Settings                     | Preference-controlled native interaction feedback                                        |
| App-store release, users or business impact       | No       | No supporting evidence                                     | Omitted                                                                                  |
| TypeScript, REST API, push notifications or CI/CD | No       | No supporting implementation                               | Omitted                                                                                  |

### Public page changes

The concise baseline is replaced by a dedicated server component with project facts, answer-first overview, concrete ownership, five architecture cards, three observable engineering decisions, a source-backed timed-flow challenge, three real screenshots with captions, technical delivery outcomes and a public-source section. Five contextual “Inspect source” links use the pinned revision. The existing three-phone hero, global layout, CTA, related-project selection and purple/pink identity remain intact. Levels remains absent and returns 404 without redirecting to QuizWar.

Metadata now resolves to `QuizWar — React Native Quiz App | Anuj Dhanuka`, with a unique answer-first description. Canonical and Open Graph URLs remain `https://anujdhanuka.com/projects/quizwar`; Twitter reuses the same description and generated image. Existing WebPage, CreativeWork and BreadcrumbList JSON-LD references the root Person/WebSite entities and matches visible content. The sitemap retains the explicit `2026-10-06` update date, and robots retains the production sitemap declaration and `/api/` exclusion.

Clear entity relationships, descriptive headings and first-hand source evidence make the page easier for recruiters, clients and retrieval systems to understand. The content demonstrates mobile authentication, state persistence, navigation, Firebase data/storage work, timed application state, ranking, profiles and native feedback without promising citations or adding FAQ/AI-specific markup.

### Performance and security review

The change adds no dependency, route-wide Client Component, global state, runtime fetch, dynamic rendering, font or third-party script. Important content remains statically rendered. The only existing leaf client boundary used here is the tracked external link. Existing hero image behavior is preserved; interface screenshots remain dimensioned, responsive and lazy below the fold.

The public QuizWar repository includes Android Firebase client configuration. No private credential candidate, rules file or iOS Firebase configuration file was found in the tracked tree. Firebase client configuration is not automatically a server secret, but the owner should verify Firestore rules, Storage rules, Authentication settings and API restrictions in Firebase/Google Cloud. The portfolio never exposes configuration values. The QuizWar repository was not modified.

### Validation

- `npm run format:check`, `npm run lint`, `npm run typecheck` and all 23 tests pass.
- The required default `npm run build` was attempted inside and outside the sandbox and still encounters the documented Turbopack/PostCSS worker-port restriction. `npm run build -- --webpack` succeeds and statically generates both case studies and social images.
- Production HTTP checks return 200 for QuizWar, Mopedo, Projects, QuizWar artwork, sitemap and robots. Levels, its artwork, an unknown slug and a listing-only slug return 404; HTML 404s retain `noindex`.
- Returned QuizWar HTML has one H1, the factual summary and architecture, five pinned source links, a matching canonical/Open Graph URL, Twitter metadata and parsed WebPage/CreativeWork/BreadcrumbList schema. The root layout supplies the single Person and WebSite entities.
- The sitemap has nine unique canonical production URLs, explicit dates and no priority/change-frequency hints. Levels is absent. Robots references `https://anujdhanuka.com/sitemap.xml` and blocks `/api/`.
- Chrome checks at 320, 375, 640, 768, 1440 and 1920 pixels found no horizontal overflow, broken section targets or runtime exceptions. Every hero, interface and related-project image loaded after scrolling. Tab/Enter reached the Architecture anchor with a visible focus ring and approximately 112px fixed-header clearance. The case-study H1, architecture and five source links remain present with JavaScript disabled. Mobile, desktop, dark and social-image captures were visually reviewed.

### Follow-ups

- Replace the default QuizWar README with a project-specific setup, architecture and feature guide in a separate source-repository task.
- Review the live Firebase rules, Authentication settings and API restrictions in their owning console.
- Future React Native expertise or hire pages should link to this case study instead of duplicating it.

## 20. QuizWar V2 final polish and freeze — 6 October 2026

The final pass keeps the validated V2 architecture and visual composition. The hero now explains the product and ownership before the stack, while a separate concise metadata description retains the verified React Native, OTP, Redux Toolkit and Firebase signals. Responsibility wording is natural, and the overview label now introduces a descriptive heading instead of repeating “Project overview.” The overview stays product-focused; the five architecture cards retain their technical claims with shorter lead sentences. The engineering decisions, timed-flow challenge, three screenshots, technical delivery outcomes and five pinned evidence links remain intact. The challenge conclusion now describes the coordination between screen-local state, Redux and Firestore without self-promotional proof language. The full reviewed revision remains in canonical project data and every evidence URL; the source section displays its short form to reduce visual noise.

No route, visual system, section count, dependency, Client Component, client request, global state, image-loading rule or dynamic-rendering behavior changed. No FAQ, AI-only summary, additional schema, acquisition copy, unsupported technology or metric was added. QuizWar remains static, server rendered and tied to public revision `d5615500727afef56425fd358202074c2eed79ab`.

Final validation passes formatting, lint, strict TypeScript, all 23 tests, the Webpack production build and `git diff --check`. The required default Turbopack build was attempted both inside and outside the sandbox and retains the documented PostCSS worker-port error (`binding to a port: Operation not permitted`); the successful Webpack build confirms the application change. Production HTTP checks return 200 for QuizWar, Mopedo, the QuizWar social image, sitemap and robots, while Levels and an invalid project return 404. Generated HTML has one H1, the expected canonical/Open Graph/Twitter descriptions, escaped project JSON-LD and five revision-pinned evidence links. The sitemap has nine unique production URLs, keeps QuizWar dated `2026-10-06`, excludes Levels and emits no priority or change-frequency values.

Chrome checks at 320, 375, 640, 768, 1440 and 1920 pixels found no horizontal overflow, broken anchors, broken or unloaded images, or runtime exceptions after the lazy images settled. Heading order remains logical. Keyboard Tab reaches Architecture with a visible focus ring; Enter places the section about 112 pixels below the fixed header. With JavaScript disabled, the H1, architecture content and five source links remain present. Final mobile and desktop captures were visually reviewed.

QuizWar V2 is now frozen as the reference React Native/mobile case study. Mopedo remains the React/web benchmark, and Levels remains intentionally excluded. Do not repeatedly rewrite QuizWar for SEO. Reopen it only for new factual evidence, a reviewed source change, Search Console findings, an accessibility defect or substantive user feedback. Future commercial and search expansion belongs on dedicated React Native expertise and hire-intent pages that link to QuizWar as evidence.

Remaining follow-ups are separate work:

1. Professional QuizWar README.
2. Firebase public-repository security review, including live rules, Authentication settings and API restrictions.
3. ChefKart professional case study, subject to public-safe evidence and owner approval.
4. `/expertise/react-native`.
5. `/hire-react-native-developer`.
