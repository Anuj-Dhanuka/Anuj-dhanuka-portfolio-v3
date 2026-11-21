import type { FaqItem } from "@/components/shared/faq-section"
import { hireHub, hirePages, type HirePage } from "@/config/hire-pages"
import { site } from "@/config/site"
import { contactHref } from "@/features/contact/enquiry"
import type {
  CapabilityIcon,
  Engagement,
  HireEnquiryType,
  HireFact,
  HireHeroContent,
  HirePageMeta,
} from "@/features/hire-pages/types"
import type { MoreProjectsItem } from "@/features/projects/components/more-projects"
import { projects, type Project } from "@/features/projects/data/projects"

// The central Hire Me overview (/hire), from the owner's brief of 21 November 2026. It helps a visitor choose
// a specialist page or enquire directly; the detailed offers stay on the seven specialist pages, whose URLs
// come from config/hire-pages.ts (the single registry). /hire is not an entry in that registry, so it never
// lists itself. Anuj is one developer: no agency, team, marketplace, full-stack, backend or native
// Swift/Kotlin framing, no prices, turnaround, response times, years, ratings, downloads or results.
// Evidence boundaries follow each project's case study: Mopedo is an independent React frontend demo, QuizWar
// an independent React Native app (no verified store release), Rekha Maa Ki Rasoi an independent
// family-business website on a premium theme, PhoolKalaa a direct-client Shopify store and Phoria Jewellery
// scoped freelance contributions (not a direct client). PPCROY agency client work is not cleared for
// publication and stays out entirely. Availability appears on the full-time card only.

export const hirePage = {
  path: "/hire",
  title: "Hire a Web & Mobile Developer | Anuj Dhanuka",
  description:
    "Hire Anuj Dhanuka for React, React Native, WordPress and Shopify development. Explore services, review projects, or discuss freelance and full-time work.",
  published: "2026-11-21",
  // Content date: move to the actual release day if the page ships later.
  lastModified: "2026-11-21",
  breadcrumb: hireHub.label,
  social: {
    title: "Hire Anuj Dhanuka",
    description:
      "Explore web and mobile development services, selected work, and freelance or full-time opportunities.",
  },
} as const satisfies HirePageMeta

export const hireImageAlt = "Hire Anuj Dhanuka for web and mobile development"

// The overview leads with the project enquiry, like the service pages; each button keeps its own meaning.
export const hirePrimaryEnquiry: HireEnquiryType = "freelance"
export const freelanceContactHref = contactHref("freelance", "hire")
export const fullTimeContactHref = contactHref("full-time", "hire")

export const expertiseSectionId = "expertise"
export const workSectionId = "selected-work"
export const engagementSectionId = "work-with-me"
export const processSectionId = "process"
export const hireFaqId = "faqs"

export const hireHero = {
  eyebrow: "Freelance projects · Full-time opportunities",
  title: "Web & Mobile Developer",
  titleAccent: "for Hire",
  intro:
    "I’m Anuj Dhanuka, a developer based in India. I build React interfaces and React Native apps, and develop WordPress websites and Shopify storefronts. Explore the service that fits your project or discuss a full-time opportunity.",
  facts: [
    { label: "Development expertise", href: `#${expertiseSectionId}` },
    { label: "Selected work", href: `#${workSectionId}` },
  ] satisfies readonly HireFact[],
  fullTimeLabel: "Discuss a Full-time Role",
  freelanceLabel: "Discuss a Project",
} as const satisfies HireHeroContent

export const hireSectionNav = [
  { href: `#${expertiseSectionId}`, label: "Expertise" },
  { href: `#${workSectionId}`, label: "Work" },
  { href: `#${engagementSectionId}`, label: "Work with me" },
  { href: `#${processSectionId}`, label: "Process" },
  { href: `#${hireFaqId}`, label: "FAQs" },
] as const

// One summary per specialist page, keyed by its registry route. Adding a page to config/hire-pages.ts
// without a summary here fails the test beside this file; a summary for an unknown route fails typecheck
// below (the link is resolved from the registry, never written out again).
type ServiceSummary = { title: string; body: string; linkLabel: string; icon: CapabilityIcon }

export const serviceSummaries = {
  "/react-developer": {
    title: "React development",
    body: "Build or extend React interfaces with reusable components, responsive layouts, application state and API-connected features. Explore my experience with web journeys, dashboards and frontend implementation.",
    linkLabel: "Explore React development",
    icon: "interface",
  },
  "/react-native-developer": {
    title: "React Native development",
    body: "Develop mobile interfaces, navigation, authentication and API-connected journeys with React Native. Review my team contributions and independent mobile project to understand the scope of my experience.",
    linkLabel: "Explore React Native development",
    icon: "mobile",
  },
  "/frontend-developer": {
    title: "Frontend development",
    body: "Turn requirements and designs into responsive websites and usable interfaces. My frontend work covers layout, typography, navigation, interaction states and improvements to existing pages.",
    linkLabel: "Explore frontend development",
    icon: "responsive",
  },
  "/shopify-developer": {
    title: "Shopify development",
    body: "Build a Shopify storefront or refine an existing store through theme customisation, Liquid contributions and product-page features. Review my end-to-end store work and scoped freelance contributions.",
    linkLabel: "Explore Shopify development",
    icon: "store",
  },
  "/wordpress-developer": {
    title: "WordPress development",
    body: "Create and improve business websites using WordPress and Elementor. I work on content structure, theme styling, responsive pages and enquiry journeys within the agreed website scope.",
    linkLabel: "Explore WordPress development",
    icon: "website",
  },
  "/landing-page-development": {
    title: "Landing-page development",
    body: "Build a focused page for a campaign, product launch or service. I can help organise the content, implement responsive sections and connect the page to agreed enquiry actions using React or WordPress with Elementor.",
    linkLabel: "Explore landing-page development",
    icon: "interactive",
  },
  "/figma-to-website": {
    title: "Figma-to-website development",
    body: "Turn your supplied Figma design into a React, HTML/CSS or WordPress website. I pay attention to typography, spacing, responsive behaviour and interaction details, with optional design refinements agreed before development.",
    linkLabel: "Explore Figma-to-website development",
    icon: "typography",
  },
} as const satisfies Record<string, ServiceSummary>

export type ServiceRoute = keyof typeof serviceSummaries
export type ServiceEntry = ServiceSummary & { href: HirePage["href"] }

// The destination always comes from the registry; a route missing from it is a build-time error, so the hub
// can never link to an unpublished page.
export function serviceEntry(route: ServiceRoute): ServiceEntry {
  const page = hirePages.find((entry) => entry.href === route)
  if (!page) throw new Error(`/hire links to ${route}, which is not in config/hire-pages.ts`)
  return { ...serviceSummaries[route], href: page.href }
}

// Specialisations in the brief's order, then the two outcome-led project services (shown last).
export const expertiseRoutes = [
  "/react-developer",
  "/react-native-developer",
  "/frontend-developer",
  "/shopify-developer",
  "/wordpress-developer",
] as const satisfies readonly ServiceRoute[]
export const projectServiceRoutes = [
  "/landing-page-development",
  "/figma-to-website",
] as const satisfies readonly ServiceRoute[]

// One Expertise section with all seven pages (the brief's separate Project services section was merged
// into it at the owner's request, 21 November 2026): the five specialisations, then the landing-page and
// Figma services, then the brief's direct project enquiry.
export const expertise = {
  id: expertiseSectionId,
  label: "Expertise",
  title: "Find the development expertise you need",
  intro:
    "Choose a specialisation to explore the work, scope and ways I can contribute. If you are unsure which fits, describe your requirements and we can discuss the approach.",
  items: [...expertiseRoutes, ...projectServiceRoutes].map(serviceEntry),
  supportingLine: "You can discuss a project directly without choosing a technology first.",
  ctaLabel: "Discuss a Project",
}

// Proof, shown in the case studies' "Continue exploring" layout (compact project cards with the shared
// live / case study / GitHub buttons). The canonical project records supply the image and links; this page
// supplies each card's visible scope label and summary. Order follows the site-wide project order: QuizWar,
// Mopedo, then Rekha Maa Ki Rasoi.
const projectById = (id: string): Project => {
  const project = projects.find((entry) => entry.id === id)
  if (!project?.caseStudy) throw new Error(`/hire proof needs the published ${id} case study`)
  return project
}

export const proofItems = [
  {
    project: projectById("quizwar"),
    label: "Independent React Native app",
    summary:
      "An independent React Native quiz application covering phone authentication, gameplay, profiles and performance records. Its case study explains the implementation and links to the public source.",
  },
  {
    project: projectById("mopedo"),
    label: "Independent React frontend demo",
    summary:
      "I designed and built a responsive React frontend demo with shared navigation, reusable presentation patterns and layouts that adapt across screen sizes.",
  },
  {
    project: projectById("rekha-maa-ki-rasoi"),
    label: "Independent family-business website",
    summary:
      "I shaped the information structure, visual direction and content, then delivered the responsive WordPress and Elementor website using a premium theme as the foundation.",
  },
] as const satisfies readonly MoreProjectsItem[]

export const selectedWork = {
  id: workSectionId,
  label: "Evidence",
  title: "Selected work behind these services",
  description:
    "Explore the implementation and design decisions behind my work, with each example’s scope clearly explained.",
  items: proofItems,
  note: "For Shopify work, explore PhoolKalaa, an end-to-end direct-client project, and my scoped freelance contributions to Phoria Jewellery.",
  link: { label: "View my Shopify work", href: serviceEntry("/shopify-developer").href },
}

export const engagements: readonly Engagement[] = [
  {
    id: "freelance",
    icon: "project",
    label: "Freelance projects",
    title: "Have a website or app project?",
    summary:
      "If you are looking to hire a freelance web developer or need React Native implementation, share what you want to build or improve. We can discuss the requirements, technical fit and scope before agreeing on the work.",
    share: {
      heading: "Share:",
      items: [
        "The goal and what already exists.",
        "Your website, app or design reference, if available.",
        "The pages or features you need.",
        "Your target date and budget range, if known.",
      ],
    },
    cta: { label: "Discuss a Project", href: freelanceContactHref, analytics: "discuss_freelance_project" },
    facts: ["Websites", "Mobile interfaces", "Storefronts"],
    factsLabel: "Freelance project types",
    links: [],
    footnote: "Project scope, timing and commercial terms are discussed around your requirements.",
  },
  {
    id: "full-time",
    icon: "role",
    label: "Full-time opportunities",
    title: "Looking for a developer for your team?",
    summary:
      "I’m interested in suitable frontend and mobile development opportunities where I can contribute to implementation, collaborate with designers and engineers, and bring attention to interface quality.",
    share: {
      heading: "Share:",
      items: [
        "The role and product context.",
        "Your technology stack and responsibilities.",
        "Location or working arrangement.",
        "Your hiring timeline.",
      ],
    },
    cta: {
      label: "Discuss a Full-time Role",
      href: fullTimeContactHref,
      analytics: "discuss_full_time_role",
    },
    // Owner-approved availability from config/site.ts, on this card only.
    facts: [site.availability, site.openTo],
    factsLabel: "Availability for full-time roles",
    links: [
      { label: "View my experience", shortLabel: "Experience", href: "/experience" },
      { label: "View my resume", shortLabel: "Resume", href: site.resumeHref, pdf: true, external: true },
      { label: "Connect on LinkedIn", shortLabel: "LinkedIn", href: site.linkedIn, external: true },
    ],
  },
]

export const engagement = {
  id: engagementSectionId,
  title: "Freelance projects and full-time opportunities",
  intro:
    "Choose the kind of conversation you want to start. You can review the relevant service and project evidence before getting in touch.",
  items: engagements,
}

export const approach = {
  id: processSectionId,
  title: "How to get started",
  intro: "A short introduction is enough to begin. We can work through the details together.",
  steps: [
    {
      title: "Share the project or role",
      body: "Send the goal, relevant links and the kind of development help you need.",
    },
    {
      title: "Discuss the fit",
      body: "Review the requirements, relevant experience and any questions about scope or collaboration.",
    },
    {
      title: "Agree the next step",
      body: "For projects, define the scope and delivery plan. For roles, discuss the hiring process.",
    },
  ],
}

export const hireFaqTitle = "Questions about hiring me"
export const hireFaqIntro = "A few practical answers before you get in touch."

export const hireFaqs: readonly FaqItem[] = [
  {
    question: "Which service should I choose?",
    answer:
      "Choose React for React application interfaces, React Native for mobile work, and frontend development for broader website and interface implementation. Shopify and WordPress cover those platforms. The landing-page service focuses on a campaign or launch page, while Figma-to-website starts with a supplied design. If you are unsure, describe the requirement and we can discuss the fit.",
  },
  {
    question: "Can I contact you for both freelance projects and full-time roles?",
    answer:
      "Yes. Use the project enquiry for scoped development work or the full-time enquiry for an employment opportunity. You can also review my experience and resume to understand my background before getting in touch.",
  },
  {
    question: "Do I need a finished design or a technical brief?",
    answer:
      "No. Share what you have: a goal, an existing website, a design or a description of the problem. For Figma implementation, the design and its readiness help define the scope. Missing design or technical decisions can be discussed before work begins.",
  },
  {
    question: "How are project costs and timelines decided?",
    answer:
      "They depend on the scope, number of unique pages or screens, required interactions, integrations and readiness of the content or designs. We discuss those requirements before agreeing on an estimate and delivery plan.",
  },
]

export const hireClosing = {
  title: "Let’s discuss what you need to build",
  description:
    "Share your project or role, the relevant context and what you need next. We can discuss how my experience fits.",
}
