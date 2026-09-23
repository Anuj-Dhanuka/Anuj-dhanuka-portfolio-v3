# Production readiness

## Architecture

The application is a content portfolio built with the Next.js App Router. Route files compose feature components, static content stays server rendered, and browser interaction lives in small client components. Shared layout, UI, analytics and configuration live outside feature folders.

```text
Browser
  ├─ server-rendered portfolio routes
  ├─ client interaction and typed analytics
  └─ POST /api/contact
          ├─ request limits and rate limit
          ├─ shared Zod validation
          ├─ escaped email template
          └─ Resend API
```

The contact request is the only server-side mutation and the only boundary accepting untrusted input. It has request-size limits, JSON content enforcement, client and server validation, a honeypot, generic public errors, structured server logs and request IDs. The email API key remains server-only.

## Runtime and failure behaviour

- Pages are statically rendered unless Next.js requires otherwise.
- Route, global, loading and 404 states are provided under `app/`.
- Contact submissions return typed responses and never expose provider errors.
- Analytics loads only in production and only when its environment variables are configured.
- The in-memory contact rate limiter is suitable for one long-running instance. Use a shared durable limiter such as a managed Redis store before horizontal or serverless scale where instances do not share memory.
- Production errors are written as structured logs. Connect platform logs to the chosen alerting provider during deployment; external monitoring requires an account and credentials and cannot be completed in source code alone.

## Checklist scope

Authentication, authorization, database queries, transactions, payments, uploads, search, pagination and user-specific caching do not apply to this public portfolio. Internationalized routes are not enabled because the published content currently has one locale (`en-IN`). If another locale is added, introduce locale routes and message catalogs rather than duplicating pages.

## Deployment

1. Use Node.js 22 and run `npm ci`.
2. Configure the variables in `.env.example` in the deployment platform.
3. Use `npm run check` as the required build gate.
4. Deploy with `npm run build` and `npm run start`, or use a platform with native Next.js App Router support.
5. Verify `/`, `/about`, `/experience`, `/skills`, `/projects`, `/contact`, `/sitemap.xml`, `/robots.txt`, the 404 page and a real contact submission.
6. Confirm CSP and analytics endpoints after configuring a custom Matomo origin.

## Pull request evidence

Include a short description, relevant desktop/mobile screenshots for UI changes, configuration changes, and the output of `npm run check`. Keep unrelated product changes in separate pull requests.
