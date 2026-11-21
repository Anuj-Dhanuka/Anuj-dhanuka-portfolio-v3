import type { FaqItem } from "@/components/shared/faq-section"
import { site } from "@/config/site"
import { contactHref } from "@/features/contact/enquiry"
import type {
  Capability,
  Engagement,
  HireFact,
  HireHeroContent,
  HirePageMeta,
  HirePageSections,
  TechItem,
  WorkItem,
} from "@/features/hire-pages/types"

// Hire-intent page for Shopify storefront development, Liquid/theme customisation, product interactions,
// collection and product-page presentation and scoped storefront redesign: one page for full-time roles and
// freelance projects. Copy is the owner's research-revised brief of 21 November 2026.
//
// Evidence boundaries (owner statements, not an independent code audit):
// - PhoolKalaa: Shopify website developed end to end for a DIRECT client. Never infer a theme built from
//   scratch, custom checkout, particular apps/integrations, a Liquid scope or sales/conversion results.
// - Phoria Jewellery: a FREELANCE engagement, NOT a direct client (intermediary unnamed). Anuj wrote Liquid for
//   six contributions: combo/ring-stack products, letter-charm selection, sticky product bar, collection
//   layouts/cards/banners, the "Layer Up" carousel and product-page layouts/details. Never a complete store
//   built by Anuj, and Liquid alone does not run browser interactions.
// - Neither project is PPCROY work. Neither store's product reviews are testimonials about Anuj.
// - No certification, Partner status, Plus, custom apps, checkout extensions, migrations, ERP, headless/
//   Hydrogen, client counts, years, rates, delivery dates or measured results. Availability from
//   config/site.ts applies to full-time roles only.
export const shopifyDeveloperPage = {
  path: "/shopify-developer",
  breadcrumb: "Shopify Developer",
  title: "Shopify Developer for Hire | Anuj Dhanuka",
  description:
    "Hire Anuj Dhanuka, a Shopify developer in India, for store development, theme customization and Liquid features. Explore PhoolKalaa and Phoria Jewellery.",
  // Implemented 21 November 2026; update both dates (and the sitemap follows) if first deployed later.
  published: "2026-11-21",
  lastModified: "2026-11-21",
} as const satisfies HirePageMeta

export const shopifyDeveloperImageAlt =
  "Anuj Dhanuka, Shopify developer for storefront development and Liquid customization."

// Each button preselects its enquiry type on the Contact page; the visitor can still change it.
export const fullTimeContactHref = contactHref("full-time", "shopify-developer")
export const freelanceContactHref = contactHref("freelance", "shopify-developer")
export const workSectionId = "selected-shopify-work"

export const phoolkalaaUrl = "https://phoolkalaa.in/"
export const phoriaUrl = "https://www.phoriajewellery.com/"

export const heroFacts: readonly HireFact[] = [
  { label: site.location },
  { label: "PhoolKalaa: End-to-end store build", href: "#phoolkalaa-work" },
  { label: "Phoria: Custom Liquid features", href: "#phoria-work" },
]

export const shopifyDeveloperHero = {
  eyebrow: "Full-time roles · Freelance projects",
  title: "Shopify Developer",
  titleAccent: "for Hire",
  intro:
    "I’m Anuj Dhanuka, a Shopify developer in India. I build online stores and customize Shopify themes with Liquid. My work includes PhoolKalaa’s end-to-end storefront and custom product features for Phoria Jewellery. Hire me for a defined Shopify project or discuss a full-time role.",
  facts: heroFacts,
  fullTimeLabel: "Discuss a full-time role",
  freelanceLabel: "Discuss a Shopify project",
} as const satisfies HireHeroContent

export const shopifyDeveloperSections = [
  { href: `#${workSectionId}`, label: "Selected work" },
  { href: "#capabilities", label: "Services" },
  { href: "#work-with-me", label: "Ways to work" },
  { href: "#approach", label: "Approach" },
  { href: "#faq", label: "Questions" },
] as const satisfies HirePageSections["nav"]

// Public storefront views captured 21 November 2026 from each store's published (main) theme, with no theme
// preview active, at 1440×900. Only the stores' own pages; no admin, account, cart or preview screens.
export const selectedWork: readonly WorkItem[] = [
  {
    id: "phoolkalaa",
    anchor: "phoolkalaa-work",
    kind: "Direct-client project",
    title: "PhoolKalaa, an end-to-end Shopify website",
    summary:
      "I developed PhoolKalaa’s Shopify website end to end for a direct client. The floral-candle storefront brings together the brand’s story, product collection and shopping pages.",
    highlights: [
      { label: "End-to-end delivery", text: "Developed the Shopify website for the client." },
      {
        label: "Product presentation",
        text: "Built the storefront around the brand’s handcrafted floral candles.",
      },
      {
        label: "Website structure",
        text: "Brought product browsing and brand content together in one store.",
      },
    ],
    stack: ["Shopify"],
    visual: {
      type: "image",
      src: "/project-case-studies/shopify/phoolkalaa-launch-collection-2026.webp",
      alt: "PhoolKalaa Shopify website showing its floral candle collection.",
      width: 1440,
      height: 900,
      address: new URL(phoolkalaaUrl).host,
      live: true,
      caption: "End-to-end Shopify website development for a direct client.",
    },
    liveSite: { id: "phoolkalaa", title: "PhoolKalaa", href: phoolkalaaUrl },
  },
  {
    id: "phoria",
    anchor: "phoria-work",
    kind: "Freelance contribution",
    title: "Phoria Jewellery, Liquid development and storefront redesign",
    summary:
      "I wrote custom Liquid code for product features and redesign work on Phoria Jewellery’s existing Shopify store. I delivered these contributions through a freelance engagement; Phoria was not my direct client.",
    highlights: [
      {
        label: "Product selection",
        text: "Combo/ring-stack products and letter-charm choices with coordinated product titles, images and price updates.",
      },
      {
        label: "Product-page experience",
        text: "A sticky product bar, revised page layouts and product-details sections.",
      },
      {
        label: "Storefront browsing",
        text: "Collection layouts, product cards, banners and the “Layer Up” related-products carousel.",
      },
    ],
    stack: ["Shopify", "Liquid"],
    visual: {
      type: "image",
      src: "/project-case-studies/shopify/phoria-ring-stack-product-page-2026.webp",
      alt: "Phoria Jewellery Shopify product page with jewellery options and product details.",
      width: 1440,
      height: 900,
      address: new URL(phoriaUrl).host,
      live: true,
      caption: "Custom Liquid features and redesign contributions through a freelance engagement.",
    },
    liveSite: { id: "phoria-jewellery", title: "Phoria Jewellery", href: phoriaUrl },
  },
]

export const workIntro =
  "An end-to-end store build and a focused contribution to an existing storefront. Here is what I personally delivered on each project."

export const capabilities: readonly Capability[] = [
  {
    title: "Shopify store development",
    body: "Build a Shopify website around your products and brand content. My PhoolKalaa project demonstrates end-to-end storefront delivery, from the website as a whole to the pages visitors use to explore the candle collection.",
    icon: "store",
  },
  {
    title: "Shopify theme customization",
    body: "Customize your existing theme with Liquid when its current layouts or sections do not meet the brief. My work includes collection layouts, banners, product cards and product-details sections.",
    icon: "theme",
  },
  {
    title: "Product-page features and combo products",
    body: "Add the product choices and presentation your customers need. My Phoria work includes ring-stack combinations and letter-charm selection, with product information and imagery responding to the selected option.",
    icon: "product",
  },
  {
    title: "Shopify storefront redesign",
    body: "Update selected parts of an existing storefront, such as product-page layouts, collection presentation and related-product browsing. My Phoria contributions also include a sticky product bar that keeps the product action accessible.",
    icon: "interface",
  },
]

export const engagements: readonly Engagement[] = [
  {
    id: "full-time",
    icon: "role",
    label: "Full-time",
    title: "Shopify and frontend development for your team",
    summary:
      "My experience combines Shopify storefront work, custom Liquid contributions and broader frontend development. Share the role responsibilities and technical scope so we can assess the fit.",
    share: {
      heading: "Share the opportunity:",
      items: [
        "Responsibilities and expected Shopify scope",
        "Team, location and working arrangement",
        "Hiring process and expected start date",
      ],
      note: "Review my experience and résumé for the wider engineering context.",
    },
    cta: {
      label: "Discuss a full-time role",
      href: fullTimeContactHref,
      analytics: "discuss_full_time_role",
    },
    // Owner-approved facts from config/site.ts; they describe full-time availability only.
    facts: [site.availability, site.openTo],
    factsLabel: "Availability for full-time roles",
    links: [
      { label: "View my experience", shortLabel: "Experience", href: "/experience" },
      { label: "View my resume", shortLabel: "Resume", href: site.resumeHref, pdf: true, external: true },
      { label: "Connect on LinkedIn", shortLabel: "LinkedIn", href: site.linkedIn, external: true },
    ],
  },
  {
    id: "freelance",
    icon: "project",
    label: "Freelance",
    title: "A freelance Shopify developer for your project",
    summary:
      "Bring a new-store brief or a defined theme, product-feature or redesign request. We can review the existing setup and agree what the work should deliver.",
    share: {
      heading: "Share your project:",
      items: [
        "Store URL and current theme, or a new-store brief",
        "Pages, product features and any supplied designs",
        "Preferred timeline and budget range",
      ],
      note: "Scope, delivery timing and availability are agreed after reviewing the request.",
    },
    cta: {
      label: "Discuss a Shopify project",
      href: freelanceContactHref,
      analytics: "discuss_freelance_project",
    },
    facts: ["Store development", "Theme customization", "Product features"],
    factsLabel: "Freelance services",
    links: [],
    footnote:
      "Work directly with me on the agreed Shopify development scope, from a new storefront to a focused Liquid customization.",
  },
]

// The proposed collaboration workflow, not a description of undocumented past processes.
export const approachSteps = [
  {
    title: "Review the brief",
    body: "Share the store, theme and relevant product pages, or the requirements for a new website.",
  },
  {
    title: "Agree the scope",
    body: "Define the layouts, product choices, deliverables and review points before development.",
  },
  {
    title: "Build and review",
    body: "Develop the agreed changes in a reviewable theme and check the relevant layouts and states.",
  },
  {
    title: "Check and hand over",
    body: "Review the work together and document the changes before an approved release.",
  },
] as const

// Owner-confirmed 21 November 2026: the core theme-development tools and the store-setup features he uses.
// `kind` describes the tool, not a project claim; none is attributed to PhoolKalaa or Phoria specifically.
export const technologyStack: readonly TechItem[] = [
  { name: "Shopify", kind: "Ecommerce platform", icon: "shopify" },
  { name: "Liquid", kind: "Theme templating language", icon: "liquid" },
  { name: "HTML", kind: "Theme markup", icon: "html" },
  { name: "CSS", kind: "Theme styling", icon: "css" },
  { name: "JavaScript", kind: "Storefront interactions", icon: "javascript" },
  { name: "JSON templates", kind: "Online Store 2.0 sections and schema", icon: "json" },
  { name: "Theme editor", kind: "Sections, blocks and templates", icon: "themeEditor" },
  { name: "Shopify CLI", kind: "Local theme development", icon: "cli" },
  { name: "Git", kind: "Version control", icon: "git" },
  { name: "GitHub", kind: "Theme repositories", icon: "github" },
  { name: "Metafields", kind: "Product data and variants", icon: "metafields" },
  { name: "Collections and filters", kind: "Catalogue and navigation", icon: "collections" },
  { name: "Shopify apps", kind: "App setup and configuration", icon: "apps" },
  { name: "Payments and shipping", kind: "Store settings", icon: "shipping" },
  { name: "SEO settings", kind: "Titles, descriptions and redirects", icon: "seo" },
]

export const shopifyDeveloperContent: HirePageSections = {
  navLabel: "Shopify developer page sections",
  nav: shopifyDeveloperSections,
  work: {
    id: workSectionId,
    title: "Shopify stores I’ve built and customized",
    intro: workIntro,
    items: selectedWork,
  },
  capabilities: {
    label: "Services",
    title: "Shopify development services for your storefront",
    intro:
      "Whether you need a new Shopify website or changes to an existing theme, I can help with storefront development, Liquid customization and product-page features. We agree the scope around your store and requirements.",
    ctaLabel: "Discuss a Shopify project",
    items: capabilities,
  },
  engagement: {
    intro:
      "Work with me on a defined Shopify project or discuss a full-time role involving storefront development and frontend implementation.",
    items: engagements,
  },
  approach: {
    label: "Approach",
    title: "How we can approach your Shopify project",
    intro:
      "Start with the store and the change you need. A clear scope helps us choose between a focused customization, a broader redesign and a new storefront.",
    ctaLabel: "Discuss a Shopify project",
    steps: approachSteps,
  },
  technologies: {
    label: "Tools",
    title: "Shopify development with Liquid",
    // Short and quotable: the main search terms plus one natural mention of each group. Every tool is still
    // crawlable as text in its tile. Liquid generates markup; JavaScript handles storefront interactions.
    intro:
      "I build Shopify storefronts with Liquid, HTML, CSS and JavaScript, using JSON templates, the theme editor and Shopify CLI for theme customization. I also handle store setup, from metafields and collections to apps, shipping and SEO settings.",
    items: technologyStack,
  },
  freelanceContactHref,
}

export const shopifyDeveloperFaqTitle = "Questions about hiring a Shopify developer"
export const shopifyDeveloperFaqIntro =
  "Answers about project fit, theme customization, cost and getting started."

// Genuine buying questions in plain text (no FAQPage markup). Availability is stated on the full-time path only.
export const shopifyDeveloperFaqs: readonly FaqItem[] = [
  {
    question: "Can I hire you as a freelance Shopify developer?",
    answer:
      "Yes. I take enquiries for Shopify store development, theme customization and product features. Share your store or brief, timeline and budget range so we can discuss the work and my availability.",
  },
  {
    question: "Can you develop a Shopify website end to end?",
    answer:
      "Yes. I developed PhoolKalaa’s Shopify website end to end for a direct client. For your project, we would agree the pages, content, product requirements and delivery responsibilities before starting.",
  },
  {
    question: "Can you customize my existing Shopify theme, or do I need a new store?",
    answer:
      "I can work on an existing Shopify theme. A specific layout or product-feature request may only need a focused customization. A broader redesign or new build depends on the current setup and your requirements; we would review those before deciding.",
  },
  {
    question: "Can you add combo products or custom product choices?",
    answer:
      "Yes, I can discuss that scope. My Phoria work includes combo/ring-stack products and letter-charm selection with coordinated product information, images and price changes. Your store’s product combinations, stock rules and cart behaviour would need to be reviewed before agreeing an implementation.",
  },
  {
    question: "What is custom Liquid development?",
    answer:
      "Liquid is Shopify’s templating language for generating storefront markup from store data. Custom Liquid work can change how sections, product information and collections are presented. Interactive features may also require HTML, CSS and JavaScript as part of the theme implementation.",
  },
  {
    question: "How much does it cost to hire you for Shopify development?",
    answer:
      "The estimate depends on the existing theme, the pages involved and the complexity of the features. A single product-page change and an end-to-end store build need different scopes. Share the brief and budget range; any required paid theme or app costs should be identified separately.",
  },
  {
    question: "How long does Shopify development or theme customization take?",
    answer:
      "Timing depends on the scope, available content, existing theme and review process. We would agree a delivery schedule after assessing the work, rather than apply the same turnaround to every project.",
  },
  {
    question: "Are you open to full-time Shopify developer roles?",
    answer:
      "Yes. I’m open to roles that fit my Shopify and frontend experience. Review my résumé and experience, then share the responsibilities, location and working arrangement.",
    links: [{ label: "View my experience", href: "/experience" }],
  },
  {
    question: "What do you need to review my project?",
    answer:
      "Send the store URL, theme name if known, the product pages or sections involved, any designs and your preferred timeline and budget range. For a new store, send a brief describing the products and required pages. Please do not send passwords through the enquiry form.",
  },
]

export const shopifyDeveloperClosing = {
  title: "Hire a Shopify developer for your next store or theme update",
  description:
    "Share your store URL and the changes you need, or send a brief for a new Shopify website. For a full-time opportunity, share the role and team details.",
} as const
