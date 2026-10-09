# Portfolio engineering guidelines

These instructions apply to the entire repository. Read this file before changing the portfolio.

## Product and brand

- This is Anuj Dhanuka’s portfolio, positioned as **Software Engineer | Frontend Developer** with React.js and React Native experience.
- Keep public claims, dates, employment details, links and project descriptions factual and consistent across visible copy, metadata, Open Graph images and structured data.
- Preserve the established purple-to-pink visual identity. Shared colors, typography and spacing belong in `styles/tokens.css` and `styles/typography.css`.
- Reuse the global navbar and footer from `app/layout.tsx`. Reuse shared buttons, CTA sections, project cards and headings before creating another variant.
- Match the existing homepage and projects-page spacing, responsive behaviour and content hierarchy. Check small mobile, tablet, desktop and large desktop layouts.

## Architecture

- Use the Next.js App Router and Server Components by default.
- Add `"use client"` only to the smallest component that needs state, effects, event handlers or browser APIs.
- Keep route files focused on route composition and metadata.
- Put reusable layout in `components/layout`, generic controls in `components/ui`, cross-feature sections in `components/shared`, and domain code in `features/<feature>`.
- Keep feature data, schemas, services and presentation separate when complexity warrants it.
- Do not add duplicate helpers, validation, API calls, analytics calls, design tokens or hardcoded contact/site values.
- Avoid components approaching 500 lines. Split them by responsibility before they become difficult to review.
- Do not keep unused components, packages, assets, commented implementations or alternative lockfiles.

See `docs/design-system.md` and `docs/production-readiness.md` for the current folder model, design roles, runtime flow and trust boundaries.

## TypeScript and code quality

- Keep TypeScript strict. Do not add `any`, suppress type errors or enable `ignoreBuildErrors`.
- Validate untrusted runtime values instead of relying on TypeScript assertions.
- Prefer `unknown` for uncertain values and explicit unions for meaningful states.
- Keep functions focused, use clear names and clean up browser subscriptions.
- Do not add premature abstractions. Extract code when responsibilities or behaviour are genuinely shared.
- Use npm and commit only `package-lock.json`. Do not add another package manager lockfile.
- Use maintained dependencies with bounded versions. Remove packages when their final consumer is removed.

## SEO and content

- Every public route needs a unique title, description, canonical URL, Open Graph data and appropriate Twitter metadata.
- Maintain one descriptive H1 per page and a logical H2/H3 hierarchy.
- Keep important copy and links server rendered.
- Add new indexable routes to `app/sitemap.ts`; keep API routes blocked in `app/robots.ts`.
- Use only Next.js native `app/sitemap.ts` and `app/robots.ts`; do not add a second implementation or `next-sitemap`.
- Sitemap entries must be canonical, indexable production pages only: currently `/`, `/about`, `/experience`, `/skills`, `/projects`, `/certifications`, `/contact` and reviewed `/projects/[slug]` case studies derived from project data. Exclude API, preview, localhost, redirect, noindex, debug and missing-page URLs.
- Keep sitemap, canonical, Open Graph and page-schema URLs equivalent after URL normalization. `site.url` is the production origin without a trailing slash; `site.homeUrl` is the homepage canonical with `/`. Other public page URLs have no trailing slash. Next.js serializes root canonical/OG tags without `/`; this is the same normalized homepage URL. Do not change global trailing-slash routing solely for that serialization difference.
- Do not add sitemap `priority` or `changefreq`. Maintain explicit `lastModified` date strings for meaningful page content, structured-data or link changes in `app/sitemap.ts` (reviewed case-study dates come from their project records); never derive them from request/build time or file modification times.
- When adding or updating a public page, review its sitemap entry/date, confirm `/robots.txt` still references `${site.url}/sitemap.xml`, and verify the generated XML and metadata with a production build.
- Reuse `config/site.ts` for the canonical origin, contact details and social links.
- Keep structured data consistent with visible content and escape serialized JSON-LD with `.replace(/</g, "\\u003c")`.
- Use `ProfilePage` structured data with a `Person` as `mainEntity` for the dedicated About page; use the most specific schema type that matches each route.
- Use semantic HTML and descriptive link text. Do not add keyword-stuffed or unsupported SEO claims.
- Give long editorial pages a concise in-page navigation with real anchor links, descriptive labels and enough scroll offset for the fixed header.
- Treat `docs/about-story.md` as the canonical source for Anuj's personal history, career chronology, credentials and future direction. Preserve its facts when updating public copy or structured data.

## Accessibility and interaction

- Use native buttons for actions and links for navigation.
- Give form controls visible labels, accessible validation messages and useful pending/success/error states.
- Preserve keyboard navigation, visible focus styles, sensible focus order and focus containment for dialogs or menus.
- Images need meaningful alt text unless decorative; decorative elements must be hidden from assistive technology.
- Respect reduced-motion preferences through Framer Motion viewport behavior and `motion-reduce` styles.
- Maintain at least 44px touch targets for primary mobile controls and prevent fixed elements from covering content.
- Treat the homepage animations as product behaviour, not disposable decoration. Preserve the two-direction technology marquee, its hover pause, the interactive stacking in the “Building With Purpose” cards, and the Experience timeline entrance/pulse effects.
- The overlapping About cards must activate on pointer hover, keyboard focus and click. The active card must rise above its siblings as well as move visually.
- Do not place `content-visibility: auto` on wrappers containing Framer Motion `whileInView`, Intersection Observer logic or CSS marquees. Skipped subtrees previously prevented the technology strip and Experience timeline from starting reliably.
- When changing shared button variants or hero button classes, verify default, hover and keyboard-focus contrast. The hero “Download Resume” button must retain white text and icon against its purple background.

## Security and server boundaries

- Never expose server credentials through `NEXT_PUBLIC_*` variables or commit `.env` files.
- Document new environment variables in `.env.example` and validate server-only values in `config/env.ts`.
- Every mutation must validate server-side input and return safe, typed responses.
- Preserve contact-route content-type and size checks, rate limiting, honeypot handling, escaped email output, request IDs and generic provider errors.
- Do not log contact-form values, credentials, tokens or other sensitive information.
- Keep security headers in `next.config.mjs`. When adding an external script or API, update the Content Security Policy narrowly for its exact origin.
- Serialize JSON-LD only from trusted application data and keep the existing `<` escaping.

## Performance

- Use `next/image` with accurate dimensions or `fill`, responsive `sizes` and stable aspect ratios.
- Keep hero/LCP images intentional; lazy-load below-the-fold media through Next.js defaults.
- Avoid client-side fetching for static portfolio content and avoid converting full routes into Client Components.
- Do not introduce a large library for a small interaction already covered by the platform or existing dependencies.
- Keep builds independent of remote font downloads. The shared system font stack is defined in `styles/tokens.css`.
- The mobile PageSpeed baseline reached 90 in September 2026. Treat 90+ as a regression floor while recognizing that lab scores vary with Netlify edge latency and Lighthouse conditions.
- Preserve `/public/anuj-profile-400.jpg` as the homepage LCP asset unless replacing it with an equally small, correctly sized version. It is intentionally preloaded/high priority and served directly to avoid a cold image-transformation request.
- Preserve the Netlify durable homepage cache policy and immutable policy for the versioned LCP portrait in `netlify.toml`. Rename the portrait URL whenever its contents change.
- Keep the homepage contact form deferred until its section approaches the viewport, but keep contact copy and direct contact links server rendered. The dedicated Contact page should continue to render the shared form immediately.
- Keep Zod as the authoritative server/API boundary. Do not reintroduce Zod into the browser contact-form bundle; client validation is intentionally lightweight and the server validates again.
- Do not remove or weaken visible animations merely to improve a synthetic score. Optimize their implementation, client boundary and payload while preserving behaviour.

## Analytics and observability

- Use `lib/analytics.ts` and event names from `config/analytics.ts`; do not call GA or Matomo directly from feature components.
- Analytics must remain production-only and optional when environment variables are absent.
- Use structured server logs with request correlation and no personal form content.
- A production monitoring service requires an external account. If one is introduced, document ownership, environment variables, sampling and alert routing.

## Tests and required checks

- Add meaningful tests for validation, security boundaries, data transformations and failure behaviour.
- Do not add tests that only repeat implementation details or trivial markup.
- Before handing off any change, run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

- Run `npm run test:coverage` when changing contact or server utilities.
- Run `npm audit --audit-level=moderate` after dependency changes.
- For UI work, verify keyboard behaviour and mobile, tablet and desktop layouts. For route work, verify metadata, status codes, sitemap entries, loading, error and 404 states.
- For animation or overlapping-card work, perform a real-browser verification: confirm marquee transforms change over time, About hover/focus changes the active stacking layer, and timeline items transition into view after scrolling.
- Do not bypass a failing check. Fix the underlying issue or document why an external operational step cannot run locally.

## Checklist scope

Authentication, authorization, databases, transactions, payments, uploads, search, pagination and user-specific caching currently do not apply to this public portfolio. Do not add infrastructure for them without a real product requirement. If the site gains one of these capabilities, apply the relevant security, data, authorization, failure and testing requirements before release.

## Current roadmap boundaries

- Implemented standalone pages: About, Experience, Skills, Projects, Certifications and Contact.
- Keep the homepage contact section and standalone Contact page on the same shared form, validation and contact-detail implementation.
- Project detail pages use `app/projects/[slug]/page.tsx`; only reviewed records with `caseStudy` in `features/projects/data/projects.ts` are published. Mopedo V2, QuizWar V2 and Rekha Maa Ki Rasoi are published; Rama Technical College remains listing-only pending specific implementation evidence. ChefKart remains professional product work, not a public case study.
- Update this file, the README and relevant docs whenever architecture, deployment, environment variables or required checks change.

## Project case-study architecture

- Project records in `features/projects/data/projects.ts` are the canonical source for cards and detail content. `features/projects/project-details.ts` selects reviewed case studies, resolves explicit stable slugs, builds paths and selects three other projects for the shared Continue exploring section. Listing-only projects retain external links and are never published as detail routes.
- Routes and their programmatic OG images use `generateStaticParams`; unknown or listing-only slugs return 404. Keep the page and content components server rendered. Reuse the global layout, hero background, breadcrumb, in-page navigation, link buttons, tracked outbound links and CTA.
- `features/projects/project-seo.ts` derives unique metadata and WebPage/CreativeWork/BreadcrumbList markup from each project. Reference the existing `/#person` and `/#website` entities through `config/site.ts`; do not duplicate Person definitions or hardcode another origin. Escape JSON-LD with the existing `<` replacement.
- Extend only native `app/sitemap.ts`, deriving detail entries and explicit content dates from reviewed records. Review dates for listing/Home/Experience/Skills when shared links change; never use build timestamps. Robots already allows public case studies and must retain its production sitemap declaration.
- To publish another project, first verify public-safe context, personal responsibility, concrete implementation and a deliverable or verification link. Add its optional `caseStudy` with a permanent lowercase slug, factual summary/context, implementation notes, outcomes, dimensioned screenshots and a meaningful content date. Missing challenge/decision/metric evidence is omitted, never invented. Do not add thin pages just to expose every card.
- Keep showcase screenshots below the fold with Next.js image defaults, accurate intrinsic dimensions and responsive sizes. QuizWar’s owner-requested three-phone hero loads its images eagerly and preloads the center category screen. Do not add galleries, client-side fetching, new fonts, dependencies or route-wide client boundaries without a real interaction requirement. Preserve homepage LCP/cache policies and animations.
- Mopedo uses the frozen V2 server presentation in `features/projects/components/mopedo-project-detail.tsx`. QuizWar uses the frozen V2 server presentation in `features/projects/components/quizwar-project-detail.tsx`, with the restored layered three-phone hero in `quizwar-project-hero.tsx` and shared `project-phone.tsx` frames. Both reuse the canonical project data, SEO pipeline and `more-projects.tsx` three-card Continue exploring section; exclude the current project. Do not reuse client-project source excerpts for QuizWar. The owner confirmed the three existing screenshots accurately show QuizWar and are publishable; reuse is authorized under QuizWar asset names.
- Levels App is no longer a public portfolio project because company/client ownership and publication rights are treated conservatively. Do not recreate `/projects/levels-app` without explicit owner approval; it returns 404, with no redirect to QuizWar. QuizWar is the independent React Native project at `/projects/quizwar`; the two are separate projects, never describe QuizWar as a renamed Levels project. Preserve high-level 3rd Eye Lab internship history without linking it to QuizWar source. QuizWar V2 is the reference React Native/mobile case study; technical claims require public-source verification and revision-pinned evidence.
- Validate publication boundaries, related-project filtering, URL/entity consistency, generated HTML, HTTP 404 behavior, social images, sitemap and responsive/keyboard behavior alongside the required checks.

- Mopedo V2 is the reference quality benchmark for project case studies. Future pages should explain factual project context, specific personal responsibility, source-backed technical implementation and engineering reasoning; include challenge/solution and outcomes only when verified. Minimize repetition and generic marketing copy, never fabricate metrics, and keep evidence server rendered. Add project-specific content through the existing `caseStudy` record and its project-specific server component, reusing architecture and content principles rather than copying Mopedo’s narrative.
- Mopedo’s owner-verified scope is independent visual/interface design, React frontend development, responsive implementation, and Netlify configuration/deployment. It is intentionally a frontend demo: its CTAs demonstrate interface hierarchy, and no backend or external API was part of the project. Do not add booking, ordering, authentication, payment, database, backend or API capabilities to its public copy without new evidence.
- The Mopedo case study is frozen after its 6 October 2026 owner-evidence refinement. Treat it as the React/web benchmark; do not make speculative SEO, AEO or GEO additions to Mopedo.

- QuizWar V2 verifies React Native CLI/JavaScript, native Android/iOS structure, OTP, auth-aware stack/tabs, six Redux slices with only auth/userPerformance persisted, Firebase utilities plus screen-level operations, local question-bank gameplay, scoring, ranking, profile media and preference-controlled feedback. Keep evidence pinned to the reviewed public revision. Do not add unsupported TypeScript, REST API, store releases, user counts or business impact. Mopedo is the React/web reference; QuizWar is the React Native/mobile reference. Future expertise/hire pages should link to these evidence pages.

- QuizWar V2 is frozen as the reference React Native/mobile case study. Do not repeatedly rewrite it for SEO or commercial positioning. Reopen it only for new factual evidence, a reviewed source change, Search Console findings, an accessibility defect or substantive user feedback. Build future React Native SEO and conversion work in dedicated expertise and hire-intent pages that link back to QuizWar as evidence. Mopedo remains the React/web benchmark, and Levels remains intentionally excluded.

- Rekha Maa Ki Rasoi is the reference UI/UX + WordPress/Elementor business-website case study. The business idea originated with Anuj's mother; they shaped the meal plans and pricing together, while Anuj owned the digital execution end to end: information architecture, visual direction, brand treatment, copy, original food photography, responsive layouts, WordPress/Elementor implementation, forms/plugins, domain, hosting and deployment. A premium WordPress theme was the foundation and was customized for the business; do not claim custom CSS, JavaScript, PHP or custom-theme development. The live site generated inbound enquiries, but no numeric lead, order, revenue or conversion claim is verified. Its testimonials and 4.3-star rating are placeholder/demo content and must never be presented as factual evidence. Use 2026 only if a project year is needed; March is unverified.

- Case-study benchmarks: Mopedo is the React/web engineering reference; QuizWar is the React Native/mobile engineering reference; Rekha Maa Ki Rasoi is the UI/UX + WordPress/Elementor + small-business website reference. Keep all three factual, server rendered and distinct in purpose.
