import type { Project, ProjectCaseStudy } from "@/features/projects/data/projects"

// Shared shapes for the "<Role> Developer for Hire" pages (/react-developer, /react-native-developer,
// /frontend-developer, /shopify-developer, /wordpress-developer) and the /landing-page-development and
// /figma-to-website service pages, which reuse the same layout with a few optional additions.
// Each page keeps its copy in its own feature data module; the layout lives in features/hire-pages.

export type HirePageMeta = {
  path: `/${string}`
  title: string
  description: string
  published: string
  lastModified: string
  // Breadcrumb and JSON-LD BreadcrumbList name, e.g. "React Developer".
  breadcrumb: string
  // Optional Open Graph/Twitter wording when it differs from the page title and description (/hire).
  social?: { title: string; description: string }
}

export type HireFact = { label: string; href?: string }

// The two enquiry paths. Matches the Contact page's enquiry types other than "general".
export type HireEnquiryType = "full-time" | "freelance"

// A sentence with one phrase as a crawlable inline link (the phrase must occur in `text` exactly once).
export type InlineLinkText = { text: string; link: { text: string; href: `/${string}` } }

// Accessible side-by-side comparison of two options, e.g. React or WordPress for a landing page.
export type OptionComparison = {
  title: string
  intro: string
  // Header of the row-label column, then the two options with their brand icons.
  needLabel: string
  options: readonly [ComparisonOption, ComparisonOption]
  rows: readonly { need: string; icon: CapabilityIcon; values: readonly [string, string] }[]
  // Rendered in one row with the section's contact link; `shortLabel` is the phone text (the full label
  // stays the accessible name) so all three fit one row on small screens.
  links: readonly { label: string; shortLabel: string; href: `/${string}` }[]
}

export type ComparisonOption = { label: string; icon: TechIcon }

// Compact platform choice: each option described once (rather than compared row by row), then a closing
// sentence. Its links share one row with the section's contact link, as with OptionComparison.
export type PlatformChoices = {
  // Rendered as its own section after Services (anchor and eyebrow).
  id: string
  label: string
  title: string
  options: readonly (ComparisonOption & { body: string })[]
  closing: string
  links: OptionComparison["links"]
}

// Optional text-led section after Services (service pages): one intro, short items and a closing line.
export type DesignDetails = {
  id: string
  label: string
  title: string
  // Optional phrase inside `title` shown with the hero gradient (must occur in it exactly once).
  titleAccent?: string
  intro: string
  items: readonly { title: string; body: string; icon: CapabilityIcon }[]
  closing: string
}

export type HireHeroContent = {
  eyebrow: string
  title: string
  titleAccent: string
  // One paragraph so both enquiry buttons reach the first phone screen.
  intro: string
  facts: readonly HireFact[]
  fullTimeLabel: string
  freelanceLabel: string
}

export type EngagementLink = {
  label: string
  href: string
  external?: boolean
  download?: boolean
  // Announced as a PDF to screen readers.
  pdf?: boolean
  // Shorter visible text on phones so a row of links fits; screen readers still hear the full label.
  shortLabel?: string
}

export type CapabilityIcon =
  | "interface"
  | "dashboard"
  | "api"
  | "nextjs"
  | "mobile"
  | "auth"
  | "payments"
  | "responsive"
  | "interactive"
  | "website"
  | "store"
  | "theme"
  | "product"
  | "edit"
  | "handover"
  | "typography"
  | "consistency"

export type Capability = {
  title: string
  body: string
  icon: CapabilityIcon
  // Optional crawlable link on a phrase inside `body` (the text must occur in it exactly once).
  link?: { text: string; href: `/${string}` }
}

export type WorkVisual =
  | {
      type: "image"
      src: string
      alt: string
      width: number
      height: number
      address: string
      // Shows a "Live" indicator in the browser bar for a deployed site.
      live?: boolean
      // Optional line under the frame, e.g. the scope of a contribution to someone else's store.
      caption?: string
    }
  // Existing mobile screenshots in the shared phone presentation.
  | { type: "phones"; screens: readonly ProjectCaseStudy["screenshots"][number][]; caption: string }
  // Public-safe wireframes from the ChefKart case study; the caption says they are not real screens.
  | { type: "illustration"; name: "chefkart-city" | "chefkart-payments"; caption: string }

export type WorkItem = {
  id: string
  // Ownership boundary in the overline: employer work is a team contribution; freelance and personal work
  // name the kind of engagement exactly.
  kind:
    | "Team contribution"
    | "Independent project"
    | "Freelance homepage"
    | "Independent family-business website"
    | "Direct-client project"
    | "Freelance contribution"
  // In-page target for hero facts (rendered as the article id, e.g. "phoolkalaa-work").
  anchor?: string
  // Role and dates where they add information; omitted when the summary already says it.
  meta?: string
  title: string
  summary: string
  // Three scannable highlights; the full detail lives in each case study.
  highlights: readonly { label: string; text: string }[]
  stack: readonly string[]
  visual: WorkVisual
  // Employer work links to its case study. A published project reuses the site-wide project buttons
  // (live project, case study, GitHub repo) so it matches the Projects page.
  primaryLink?: EngagementLink
  project?: Project
  // A live site that has no project record or case study (client storefronts): one tracked "View Live
  // Project" button reporting project_viewed with this id.
  liveSite?: { id: string; title: string; href: string }
}

export type Engagement = {
  id: "full-time" | "freelance"
  icon: "role" | "project"
  label: string
  title: string
  summary: string
  // A scannable checklist with its closing line kept as a note.
  share: { heading: string; items: readonly string[]; note?: string }
  cta: { label: string; href: string; analytics: string }
  // Plain, non-interactive pills above the main button: availability (full-time) or services (freelance).
  facts: readonly string[]
  factsLabel: string
  links: readonly EngagementLink[]
  // A quotable sentence under the main button where the full-time card has links.
  footnote?: string
}

export type TechIcon =
  | "react"
  | "reactNative"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "html"
  | "css"
  | "redux"
  | "tailwind"
  | "restApi"
  | "reactRouter"
  | "navigation"
  | "vite"
  | "figma"
  | "styledComponents"
  | "git"
  | "github"
  | "firebase"
  | "firestore"
  | "storage"
  | "wordpress"
  | "elementor"
  | "shopify"
  | "liquid"
  | "json"
  | "cli"
  | "themeEditor"
  | "metafields"
  | "collections"
  | "apps"
  | "shipping"
  | "seo"
  | "woocommerce"
  | "elementorPro"
  | "wpThemes"
  | "plugins"
  | "forms"
  | "wpSeo"
  | "breakpoints"
  | "hosting"
  | "analytics"
  | "performance"

// `kind` describes the tool itself (not a claim about experience), shown under each name.
export type TechItem = {
  name: string
  kind: string
  icon: TechIcon
  // The name with soft hyphens (U+00AD) where a word is too long for a half-width phone tile, so it breaks
  // as "Authen-tication" rather than at an arbitrary letter. Must equal `name` once the hyphens are removed.
  breakableName?: string
}

// Everything between the hero and the FAQ.
export type HirePageSections = {
  navLabel: string
  nav: readonly { href: `#${string}`; label: string }[]
  work: {
    id: string
    title: string
    intro: string
    items: readonly WorkItem[]
    // Optional closing sentence under the projects, e.g. a link to related professional work.
    note?: InlineLinkText
  }
  // Optional `label` (eyebrow) and `title` overrides; omitted, the reference page's wording is used.
  // Optional `id` overrides set a section's in-page anchor (defaults: capabilities, work-with-me, approach).
  capabilities: {
    id?: string
    label?: string
    title: string
    intro: string
    ctaLabel: string
    // Shorter phone text for the line button (used when it shares a row with the comparison links).
    ctaShortLabel?: string
    items: readonly Capability[]
    // Optional comparison after the cards, inside the same section (service page platform choice): a
    // row-by-row table, or a compact description of each option. Use one, not both.
    comparison?: OptionComparison
    choices?: PlatformChoices
  }
  designDetails?: DesignDetails
  // Optional `title` override (default "Two ways to work with me").
  engagement: { id?: string; title?: string; intro: string; items: readonly Engagement[] }
  approach: {
    id?: string
    label?: string
    title?: string
    intro: string
    // Omitted, the section ends without its line button.
    ctaLabel?: string
    steps: readonly { title: string; body: string }[]
  }
  technologies: {
    label?: string
    title?: string
    intro: string
    items: readonly TechItem[]
    // Optional sentence under the tiles, e.g. a scope boundary for the tools shown.
    note?: string
  }
  freelanceContactHref: string
}
