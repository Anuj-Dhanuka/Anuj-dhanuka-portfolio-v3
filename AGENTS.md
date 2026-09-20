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
- Reuse `config/site.ts` for the canonical origin, contact details and social links.
- Keep structured data consistent with visible content and escape serialized JSON-LD with `.replace(/</g, "\\u003c")`.
- Use semantic HTML and descriptive link text. Do not add keyword-stuffed or unsupported SEO claims.

## Accessibility and interaction

- Use native buttons for actions and links for navigation.
- Give form controls visible labels, accessible validation messages and useful pending/success/error states.
- Preserve keyboard navigation, visible focus styles, sensible focus order and focus containment for dialogs or menus.
- Images need meaningful alt text unless decorative; decorative elements must be hidden from assistive technology.
- Respect reduced-motion preferences through the shared `MotionProvider` and `motion-reduce` styles.
- Maintain at least 44px touch targets for primary mobile controls and prevent fixed elements from covering content.

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
- Do not bypass a failing check. Fix the underlying issue or document why an external operational step cannot run locally.

## Checklist scope

Authentication, authorization, databases, transactions, payments, uploads, search, pagination and user-specific caching currently do not apply to this public portfolio. Do not add infrastructure for them without a real product requirement. If the site gains one of these capabilities, apply the relevant security, data, authorization, failure and testing requirements before release.

## Current roadmap boundaries

- Planned standalone pages: About, Experience and Contact.
- Individual project detail pages are intentionally deferred to a later version.
- Update this file, the README and relevant docs whenever architecture, deployment, environment variables or required checks change.
