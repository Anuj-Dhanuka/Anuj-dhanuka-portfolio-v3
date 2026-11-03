# ChefKart experience page — design, content and build plan

Status: **built** (owner granted full freedom on 3 November 2026; copy below was revised after source verification — `features/experience/data/chefkart.ts` is now the source of truth) · Prepared 3 November 2026 · Route: `/experience/chefkart`

## 1. What this page is

"ChefKart Experience" in the supplied material means **Anuj's professional engineering work at ChefKart**, not a ChefKart customer service page. The page is a product-engineering case study for hiring audiences. It does not sell ChefKart services and contains no ChefKart prices, booking flow or customer offers.

| Audience                          | Question the page must answer                                     | Where it is answered               |
| --------------------------------- | ----------------------------------------------------------------- | ---------------------------------- |
| Recruiters / HR                   | Role, location, stack, seniority, availability                    | Hero, snapshot, FAQ                |
| Engineering managers / tech leads | Can he reason about architecture, failure states and performance? | Four case studies                  |
| Founders / product leaders        | Does he own business-critical journeys, not just screens?         | Journey map, operations case study |
| Clients                           | Can he turn requirements into a complete, reliable product?       | Principles, collaboration, CTA     |

Primary action: **Discuss a role** (→ `/contact`). Secondary: **Download résumé** (`/ANUJ_DHANUKA_RESUME.pdf`).

## 2. Owner decisions (3 November 2026)

- Publish the code-contribution statistics with a methodology note. Colleagues are never named or ranked individually.
- Describe the internal operations dashboard at **pattern level**: no internal product or repository names, operational thresholds, payout or penalty rules, internal API paths or screenshots.
- Visuals are **simple in-page diagrams only** (no ChefKart screenshots or brand assets beyond the existing logo already used on /experience).
- Copy is approved before build; the build is then reviewed section by section.

## 3. Structured source data

Status key: **Confirmed** = in this repository or ChefKart's public site · **Owner-supplied** = from Anuj's Git-history audit notes, accepted as the brief · **Excluded** = deliberately not published.

| Category      | Item                                                                                                                                                                                                                                                                                                                                   | Source                                                             | Status                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| Role          | Associate Software Engineer, full-time                                                                                                                                                                                                                                                                                                 | `features/experience/data/experience.ts`                           | Confirmed                                          |
| Role          | Gurugram, Haryana · Onsite · December 2025 – Present                                                                                                                                                                                                                                                                                   | same                                                               | Confirmed                                          |
| Recognition   | Technology & Engineering recognition, May 2026, public LinkedIn post                                                                                                                                                                                                                                                                   | `config/site.ts` `recognitionUrl`                                  | Confirmed                                          |
| Surfaces      | Customer React Native app, Next.js customer website, payment experiences, internal operations dashboard                                                                                                                                                                                                                                | experience data + audit notes                                      | Confirmed                                          |
| Stats         | #1 of 18 contributors, React Native app — 35.05% of current source (62,595 lines)                                                                                                                                                                                                                                                      | Audit notes (git blame, dev branch)                                | Owner-supplied                                     |
| Stats         | #1 of 13 contributors, website — 33.18% of current source (27,450 lines)                                                                                                                                                                                                                                                               | Audit notes                                                        | Owner-supplied                                     |
| Stats         | 453 authored commits (240 app · 70 website · 143 dashboard), 1,065 files introduced, ~107,169 surviving lines                                                                                                                                                                                                                          | Audit notes                                                        | Owner-supplied                                     |
| Stats         | Dashboard ownership 11.72%                                                                                                                                                                                                                                                                                                             | Audit notes                                                        | Excluded (not a lead figure; avoids implying rank) |
| Payments      | Quick Buy (Razorpay recommended instruments), UPI-intent handoff, standard checkout fallback, gateway abstraction, shared payment UI, duplicate-attempt guard, server status polling, error normalisation, wallet, cashback, promo cash, split payment, refunds, analytics, tests                                                      | Audit notes                                                        | Owner-supplied                                     |
| Book by Dish  | Discovery, collections, fuzzy search, filters, dish details, cart, area pricing, scheduling, coupons, payment, active booking, version-gated persistent catalogue cache                                                                                                                                                                | Audit notes                                                        | Owner-supplied                                     |
| City pages    | SSR `/city/[citySlug]`, live serviceability/slots/prices, areas, packs, dishes, cuisines, cooks, reviews, FAQs, parallel `Promise.all` orchestration, TTL server cache with shared in-flight promise and failure eviction, live data bypasses cache, isolated optional failures, sticky booking bar, analytics, Gurgaon/Gurugram alias | Audit notes; city pages publicly visible at thechefkart.com/city/… | Owner-supplied; pages confirmed public             |
| Cooks Near Me | Listing/profile redesign, filters, page caching, trust/feedback/service areas, booking entry points                                                                                                                                                                                                                                    | Audit notes; public at thechefkart.com/cooks-near-me               | Owner-supplied; page confirmed public              |
| Party         | Menu/dish editing, ingredients, preferences, pricing, advance/remaining payments, extra charges, post-payment, cancellation, refunds, feedback                                                                                                                                                                                         | Audit notes; "Chef for Party" public                               | Owner-supplied                                     |
| Operations    | Visit tracking, incident (SOS) alerts, party fulfilment views, cook availability/rejection handling, catalogue (cuisine/dish/ingredient) admin, coupon/pack extensions, payout references, payment visibility                                                                                                                          | Audit notes                                                        | Owner-supplied, **pattern level only**             |
| Platform      | Phone/OTP autofill (Android, iOS), onboarding redesign, address/pin fixes, OTA updates, Android 16 KB page size, navigation/crash fixes, keyboard/bottom-sheet/scroll work, Help & FAQ, analytics                                                                                                                                      | Audit notes                                                        | Owner-supplied                                     |
| Excluded      | Repository names, commit hashes, PR numbers, file paths, internal product names, society/campaign client names, AI PR-review workflow, WebP image claim (not proven), any conversion/performance/revenue metric                                                                                                                        | —                                                                  | Excluded                                           |

## 4. Research summary (accessed 3 November 2026)

- **ChefKart public services** ([thechefkart.com](https://thechefkart.com/)): "Chef for Party", "Home Cook Service" (also called "Chefit"/"One-Time Cook"), "Cooks Near Me"; city pages for Gurugram, Delhi, Bengaluru, Mumbai, Greater Noida, Noida, Faridabad and Ghaziabad; iOS and Android apps. Brand voice is warm and home-focused ("No more missing Ghar Ka Khana!").
- **Discrepancy:** the audit notes use "ChefIt"; the public site writes "Chefit". The page uses **ChefIt** only inside engineering context (as in the codebase notes) and otherwise says "one-time cook bookings". "Book by Dish" does not appear on the public website; it is an app feature and is described as such.
- **Not used:** third-party funding/acquisition news ([Entrepreneur](https://india.entrepreneur.com/news-and-trends/chefkart-raises-2-million-seed-fund/432041), [YourStory](https://yourstory.com/2021/08/funding-alert-kitchen-aide-startup-chefkart-titan-capital-pravega-ventures)) and an unverified acquisition announcement — irrelevant to Anuj's work and not confirmed.
- **Page-structure guidance** carried over from the owner's strategy brief: people-first, first-hand evidence ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)); visible content rather than tabs/accordions for key case-study text ([Google snippets](https://developers.google.com/search/docs/appearance/snippet)); descriptive internal links ([Google links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)); recruiter keyword visibility ([LinkedIn Recruiter](https://business.linkedin.com/hire/resources/talent-acquisition/how-to-use-linkedin-recruiter)).
- **Missing:** any verified business outcome (conversion, latency, support tickets). Outcomes are therefore written qualitatively and only where the code supports them.

## 5. Page structure

Simple, consistent with the portfolio: shared hero, "On this page" nav, plain section labels, quiet cards, one closing CTA band. No decorative numbering, badges or filled highlight blocks.

1. Hero
2. Contribution snapshot — `#snapshot`
3. Journey map (diagram) — `#journey`
4. Case study: payments — `#payments`
5. Case study: Book by Dish — `#book-by-dish`
6. Case study: city pages — `#city-pages`
7. Case study: customer ↔ operations — `#operations`
8. Broader platform work — `#platform`
9. How I work + recognition — `#approach`
10. FAQ — `#faq`
11. Closing CTA (shared component)

"On this page" (6 short labels): Snapshot · Journey · Payments · Book by Dish · City pages · Operations.

## 6. Final copy (display order)

### Metadata

- **Title:** `ChefKart Product Engineering Case Study | Anuj Dhanuka`
- **Description:** `How Anuj Dhanuka built React Native booking and payment journeys, Next.js city pages and operations tooling across ChefKart's app, website and dashboard.`
- **Canonical:** `https://anujdhanuka.com/experience/chefkart`
- **OG title:** `Building customer and operations products at ChefKart`
- **OG image text:** `ChefKart · React Native · Next.js · Payments · Operations`

### 1. Hero

Breadcrumb: Home / Experience / ChefKart
Eyebrow pill: `ChefKart · Associate Software Engineer`

**H1:** React Native and Next.js product engineering at ChefKart

Lede: I build customer and operational journeys across ChefKart's React Native app, Next.js website, payment experiences and internal operations dashboard — from discovering a cook to booking, paying, fulfilment and support.

Stack: React Native · React · Next.js · TypeScript · Redux · Razorpay · SSR · REST APIs

Buttons: **Discuss a role** (→ /contact) · **Download résumé**

Facts row:

- Role — Associate Software Engineer
- Location — Gurugram · Onsite
- Period — December 2025 – Present
- Recognition — Technology & Engineering, May 2026 (link)

### 2. Contribution snapshot

Label: Snapshot
**H2:** Ownership across the customer app, website and operations

Intro: My work spans three production codebases and the journeys that move between them.

Stat cards:

- **#1 of 18** — contributors to the React Native app · about 35% of current source
- **#1 of 13** — contributors to the customer website · about 33% of current source
- **453** — authored commits across the app, website and operations dashboard
- **~107,000** — surviving source lines across 1,065 files I introduced

Methodology (small text): Based on `git blame` of non-blank frontend source lines on each product's current development branch, with each developer's Git identities consolidated. These figures show breadth of contribution, not business impact.

### 3. Journey map

Label: Journey
**H2:** From finding a cook to fulfilling the visit

Intro: I work across the connected journey instead of treating each screen as a separate task. Each stage below shows where my work lives.

Diagram — six stages left → right (stacked on mobile), each with a surface tag:

1. **Acquisition** · Website — city pages, campaign pages, search-led entry points
2. **Discovery** · App + Website — Book by Dish, Cooks Near Me, cuisines, search and filters
3. **Booking** · App + Website — location, serviceability, live slots, pricing, coupons, summaries
4. **Payment** · App — UPI and Razorpay checkout, wallet, cashback, verification, refunds
5. **Fulfilment** · App + Operations — active bookings, party services, visit details, changes and cancellations
6. **Support** · Operations — visit tracking, incident alerts, feedback and help

### 4. Case study — payments (`#payments`)

Label: Payments
**H2:** A reusable payment foundation for every booking type

**Challenge.** Payments run through one-time bookings, party bookings, wallet top-ups, packs and remaining-balance payments. Separate implementations meant inconsistent states, duplicated logic and more risk around retries and unclear gateway responses.

**What I built.** A reusable React Native payment layer:

- Quick Buy method selection using Razorpay's recommended instruments, with direct UPI-app handoff
- Standard Razorpay checkout as the fallback for cards and other methods, behind one gateway interface
- Shared payment screens, footers, loading and failure states
- Wallet balance and history, add-money, cashback, promotional cash and split wallet/online payments
- Refund and partial-payment states
- Payment lifecycle analytics and automated tests for the critical utilities

**Key decision — don't trust an unclear SDK response.** A customer can leave the app to pay in a UPI app while the SDK returns an ambiguous result. Instead of showing "failed", the flow asks the server for the final status, polls while it is pending, and only then decides. A duplicate-attempt guard stops overlapping payments from repeated taps.

Diagram — payment status: Tap pay → guard against duplicate attempt → open UPI app or checkout → SDK result → **success** → confirm · **cancelled** → back to checkout · **unclear** → poll server → success / failed.

**Result.** One payment foundation shared across services, with consistent method selection, verification, failure handling and analytics.

### 5. Case study — Book by Dish (`#book-by-dish`)

Label: Book by Dish
**H2:** Book by Dish, built end to end in the app

**Challenge.** Book by Dish lets customers choose what they want cooked before booking. The journey crosses catalogue discovery, search, cart, serviceability, scheduling, offers, payment and post-booking states.

**What I built.** Home-page entry points, curated collections and categories, fuzzy search, dietary filters, dish details, quantity controls, cart and area-based pricing, location and slot selection, booking summary, coupons, payment through the shared layer, active-booking states and analytics throughout.

**Key decision — a version-gated catalogue cache.** The full dish catalogue doesn't need downloading on every launch:

1. Show the last saved catalogue immediately.
2. Check a lightweight version endpoint.
3. Download the full catalogue only when the version has changed.
4. Keep the saved catalogue when offline; fall back to a fresh fetch if the cache is incomplete.
5. Guard against duplicate requests when the app returns to the foreground quickly.

Diagram — cache: Launch → show saved catalogue → check version → same: keep · changed: refresh in background → update.

**Result.** Returning users see the catalogue straight away, and the full download happens only when the catalogue actually changes.

### 6. Case study — city pages (`#city-pages`)

Label: City pages
**H2:** Server-rendered city pages that lead into live booking

**Challenge.** ChefKart's city pages (for example Gurugram or Delhi) must be found through search and move visitors straight into booking with current availability and prices.

**What I built.** The Next.js city-page system: dynamic routing and server rendering, live serviceability, hourly slots and prices, service areas, packs, dishes, cuisines, featured cooks, reviews and FAQs, location selection, a mobile sticky booking bar, interaction analytics and SEO support including the Gurgaon/Gurugram alias.

**Key decision — parallel data, cached content, live prices.**

- Independent requests start together; requests that need the city start as soon as the city is resolved.
- Stable content (CMS, cuisines, FAQs, dishes, reviews) is cached on the server; simultaneous cold requests share one upstream call, and failures are not cached.
- Serviceability, slots and prices always stay live, so visitors never see stale availability.
- Optional sections can fail on their own without breaking the page.

Diagram — data flow: Request → [content group: CMS · cuisines · FAQs · reviews → server cache] + [city → serviceability · slots · prices → live] → page.

**Result.** No unnecessary waiting between independent requests or repeated content fetches, while booking-critical information stays current.

Supporting line: I also redesigned **Cooks Near Me** — listings, profiles, filters, trust and feedback content, service areas and booking entry points, with cached page data.

### 7. Case study — customer ↔ operations (`#operations`)

Label: Operations
**H2:** Connecting customer journeys with the tools that fulfil them

**Challenge.** A booking only succeeds when operations teams can deliver and support it. Party bookings add menus, ingredients, preferences, advance and remaining payments, cancellations and refunds.

**Customer side.** Reworked the party journey: menu and dish editing, ingredient details, food preferences and instructions, pricing, advance and remaining payments, extra charges, post-payment details, cancellations, refunds and feedback.

**Operations side.** On ChefKart's internal operations dashboard I built tools for visit tracking, incident alerts, party fulfilment, cook availability and rejections, catalogue management, coupon and pack extensions, and payment visibility.

**Key decision.** Working on both sides changed how I design customer states: each one is built with the operational status, support context and diagnostics in mind, not only the screen.

**Result.** Customers get a clear journey, and internal teams get the information they need to fulfil and support it.

### 8. Broader platform work (`#platform`)

Label: Platform
**H2:** Broader contributions across the product

Six plain groups (title + one line):

- **Sign-in and onboarding** — onboarding redesign, Android phone-number hint, iOS phone and OTP autofill
- **Location and serviceability** — address selection, map-pin debounce, geocoding-loop fixes, saved-location editing
- **Wallet and offers** — wallet, cashback, promotional cash, coupons, pack extensions and refunds
- **Booking management** — cook changes, booking summaries, cancellations, active states and feedback
- **Reliability** — over-the-air updates, Android 16 KB page-size support, navigation and crash fixes, keyboard, bottom-sheet and scrolling performance
- **Analytics and support** — booking and payment analytics, failure reasons, Help and FAQ

### 9. How I work + recognition (`#approach`)

Label: Approach
**H2:** How I approach product engineering

Four short principles:

- **Build complete journeys** — follow the customer goal across entry points, data, payment, fulfilment and support.
- **Optimise the critical path** — run independent work in parallel, cache what's stable, keep prices and availability live.
- **Design for failure** — loading, retry, fallback, cancellation and unclear states are part of the first design.
- **Work across the team** — clarify requirements with product, design, backend, QA and operations before coding, and validate edge cases before release.

Recognition line: In May 2026 my work was recognised in ChefKart's Technology & Engineering team. → View recognition (external)

### 10. FAQ (`#faq`) — visible text, no accordion

**H2:** Questions hiring teams ask

- **What is Anuj's role at ChefKart?** Associate Software Engineer in Gurugram, working across the customer app, website, payment experiences and internal operations dashboard.
- **Which technologies does he use?** React Native, React, Next.js, TypeScript, JavaScript, Redux, Razorpay, server-side rendering, REST APIs, caching, analytics and automated tests for critical utilities.
- **Is the work only customer-facing UI?** No. It includes architecture and performance decisions, payment and failure states, analytics, and internal operations tools.
- **What opportunities is he open to?** Frontend and React Native roles with real product ownership.

### 11. Closing CTA (shared component)

**Heading:** Building a product customers use every day?
**Text:** I'm open to frontend and React Native roles where I can own complete journeys, from the first screen to the systems behind it.
**Buttons:** Discuss a role · Download résumé

## 7. Build plan

- **Route:** `app/experience/chefkart/page.tsx` (static), `app/experience/chefkart/opengraph-image.tsx`.
- **Components:** `features/experience/components/chefkart/*` — server components only; reuse `HeroBackground`, `HeroBreadcrumb`, `PageSectionNav`, `LinkButton`, `TrackedLink`, shared `CTA`. Diagrams are semantic HTML lists styled with Tailwind (readable text, no images, mobile stacks vertically).
- **Content:** one data module `features/experience/data/chefkart.ts` so copy changes don't touch layout.
- **Schema:** `WebPage` + `Article` (author → existing `#person`), `BreadcrumbList` Home → Experience → ChefKart. No FAQPage, Review or Rating markup.
- **Internal links:** /experience ChefKart card gains "Read the ChefKart case study"; homepage ChefKart experience card links to it; sitemap entry with `lastModified` = publish date.
- **Analytics:** reuse `TrackedLink`; add an `experience_case_study` event only if needed (decide at build).
- **Docs/tests:** sitemap test, a content-boundary test (no repository names, commit hashes, colleague names or internal product name), `CLAUDE.md` / `AGENTS.md` notes on the publication boundary.
- **Checks:** format, lint, typecheck, tests, build; desktop and mobile review; Lighthouse ≥ 90 mobile.

## 8. Verification against source (3 November 2026)

The three ChefKart repositories were cloned read-only (development branches) with the owner's GitHub access, checked, and deleted. No ChefKart code was copied into the portfolio.

| Claim in the earlier brief                                                                                                                                | Finding                                                                                                                                                        | Page decision                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Quick Buy, UPI-intent handoff, shared payment gateway, status polling, attempt lock, error normaliser, payment tests                                      | Authored and merged by a colleague (Quick Buy PRs #860–#864); the owner's Quick Buy branch was never merged                                                    | **Not claimed.** Payments case study replaced by **Wallet and cashback**                     |
| Wallet (#741) and cashback (#804)                                                                                                                         | Owner's merged work; cashback shows the server's verdict for the priced order with a campaign-rule fallback and a shared status card across five booking types | Featured case study                                                                          |
| Book by Dish, fuzzy search, version-gated catalogue cache (in-flight + 15 s guards)                                                                       | Owner's work                                                                                                                                                   | Featured as written                                                                          |
| City pages: parallel `Promise.all`, 5-minute stampede-safe server cache, live serviceability/slots/prices uncached, 1-hour edge cache, sticky booking bar | Owner's work (≈80% of city-page code)                                                                                                                          | Featured as written                                                                          |
| Gurgaon/Gurugram alias                                                                                                                                    | Authorship unclear                                                                                                                                             | Removed                                                                                      |
| Cooks Near Me redesign                                                                                                                                    | Builds on a colleague's original pages; owner holds ≈52% of current code                                                                                       | "Redesigned … building on the original pages"                                                |
| Party redesign, extra charges, refunds, party payment polling (#793)                                                                                      | Owner's work                                                                                                                                                   | Included in the operations case study                                                        |
| Dashboard: visit tracking, SOS alerts, party operations, cuisine/ingredient catalogue                                                                     | Owner is leading author                                                                                                                                        | Included (pattern level)                                                                     |
| Dashboard: payouts, cook rejection reasons; coupons                                                                                                       | Not the owner's / contributor only                                                                                                                             | Payouts and rejection reasons removed; coupons not listed                                    |
| Android phone-number hint, map-pin debounce, geocoding fixes                                                                                              | Not found in merged work                                                                                                                                       | Removed                                                                                      |
| 453 commits, 35.05% app, #1 of 18, #1 of 13, ~107k lines                                                                                                  | 288 commits merged to development; app 33.9% (#1, narrowly), website 33.8% (#1), ~104k surviving lines; contributor counts depend on alias merging             | Page shows **#1 / ~34%, #1 / ~34%, 288, ~104k** with methodology; contributor counts omitted |
