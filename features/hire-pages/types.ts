import type { Project, ProjectCaseStudy } from "@/features/projects/data/projects"

// Shared shapes for the "<Role> Developer for Hire" pages (/react-developer, /react-native-developer).
// Each page keeps its copy in its own feature data module; the layout lives in features/hire-pages.

export type HirePageMeta = {
  path: `/${string}`
  title: string
  description: string
  published: string
  lastModified: string
  // Breadcrumb and JSON-LD BreadcrumbList name, e.g. "React Developer".
  breadcrumb: string
}

export type HireFact = { label: string; href?: string }

export type HireHeroContent = {
  eyebrow: string
  title: string
  titleAccent: string
  // One paragraph so both enquiry buttons reach the first phone screen.
  intro: string
  facts: readonly HireFact[]
  portraitAlt: string
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

export type CapabilityIcon = "interface" | "dashboard" | "api" | "nextjs" | "mobile" | "auth" | "payments"

export type Capability = { title: string; body: string; icon: CapabilityIcon }

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
    }
  // Existing mobile screenshots in the shared phone presentation.
  | { type: "phones"; screens: readonly ProjectCaseStudy["screenshots"][number][]; caption: string }
  // Public-safe wireframes from the ChefKart case study; the caption says they are not real screens.
  | { type: "illustration"; name: "chefkart-city" | "chefkart-payments"; caption: string }

export type WorkItem = {
  id: string
  // Ownership boundary in the overline: employer work is a team contribution, the rest independent.
  kind: "Team contribution" | "Independent project"
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
}

export type Engagement = {
  id: "full-time" | "freelance"
  icon: "role" | "project"
  label: string
  title: string
  summary: string
  // A scannable checklist with its closing line kept as a note.
  share: { heading: string; items: readonly string[]; note: string }
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
  work: { id: string; title: string; intro: string; items: readonly WorkItem[] }
  capabilities: { title: string; intro: string; ctaLabel: string; items: readonly Capability[] }
  engagement: { intro: string; items: readonly Engagement[] }
  approach: { intro: string; ctaLabel: string; steps: readonly { title: string; body: string }[] }
  technologies: { intro: string; items: readonly TechItem[] }
  freelanceContactHref: string
}
