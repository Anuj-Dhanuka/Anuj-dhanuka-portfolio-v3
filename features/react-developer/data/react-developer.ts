import { site } from "@/config/site"
import { contactHref } from "@/features/contact/enquiry"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { experienceRoles } from "@/features/experience/data/experience"
import { projects, type Project } from "@/features/projects/data/projects"

// Hire-intent page for React roles and freelance projects. One page serves both audiences; do not
// split it into near-identical React / React.js / freelance pages. Copy is the owner's brief of
// 20 November 2026. ChefKart stays a team contribution and Mopedo an independent frontend demo. The
// owner-approved availability in config/site.ts applies to full-time roles only; no freelance capacity,
// rates, hours, years of experience, testimonials or activity metrics.
export const reactDeveloperPage = {
  path: "/react-developer",
  title: "React Developer for Hire | Anuj Dhanuka",
  description:
    "Hire Anuj Dhanuka, a React developer in India, for full-time roles or freelance projects. Explore React and Next.js work, dashboards and frontend experience.",
  published: "2026-11-20",
  // 21 Nov 2026: section-by-section redesign (selected work, capabilities, paths, process, technologies, FAQ).
  lastModified: "2026-11-21",
} as const

// Each button preselects its enquiry type on the Contact page; the visitor can still change it.
export const fullTimeContactHref = contactHref("full-time", "react-developer")
export const freelanceContactHref = contactHref("freelance", "react-developer")
export const workSectionId = "selected-react-work"

const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1)

const chefkartRole = experienceRoles.find((role) => role.id === "chefkart")

// Linked facts under the hero intro: where Anuj is, and where the React work can be checked.
export const heroFacts: readonly { label: string; href?: string }[] = [
  { label: site.location },
  ...(chefkartRole
    ? [
        {
          label: `${chefkartRole.position}, ChefKart · ${chefkartRole.duration}`,
          href: chefkartPage.path,
        },
      ]
    : []),
  { label: "Independent React frontend: Mopedo", href: "/projects/mopedo" },
]

export const reactDeveloperHero = {
  // Names both paths up front; the H1 and intro already say "React.js developer in India".
  eyebrow: "Full-time roles · Freelance projects",
  title: "React Developer",
  titleAccent: "for Hire",
  // One paragraph so both enquiry buttons reach the first phone screen. ChefKart stays "contributed to".
  intro: [
    "I’m Anuj Dhanuka, a React.js developer in India, building responsive interfaces, dashboards and API-connected applications. I’ve contributed to ChefKart’s React operations dashboard and Next.js website, and built independent React projects. I’m open to full-time roles and freelance frontend work.",
  ],
  fullTimeLabel: "Discuss a full-time role",
  freelanceLabel: "Discuss a freelance project",
} as const

export const reactDeveloperSections = [
  { href: `#${workSectionId}`, label: "Selected work" },
  { href: "#capabilities", label: "What I build" },
  { href: "#work-with-me", label: "Ways to work" },
  { href: "#approach", label: "Approach" },
  { href: "#faq", label: "Questions" },
] as const

// Neutral framing only: it introduces the four areas below and makes no new claim.
export const capabilitiesIntro = {
  label: "Capabilities",
  title: "What I can help you build",
  body: "Whether you’re hiring for your team or need help with a specific project, these are the areas where I can contribute.",
  ctaLabel: "Discuss a freelance project",
} as const

export type CapabilityIcon = "interface" | "dashboard" | "api" | "nextjs"

export const capabilities: readonly { title: string; body: string; icon: CapabilityIcon }[] = [
  {
    title: "React web interfaces",
    body: "Turn designs and requirements into reusable React components, responsive layouts and connected user journeys. I can help build a new interface or extend an existing application with additional pages and features.",
    icon: "interface",
  },
  {
    title: "Dashboards and internal tools",
    body: "Build interfaces that help teams review information and take action. My dashboard experience includes contributing to ChefKart’s internal operations tools, where the interface supports the work behind customer bookings and visits.",
    icon: "dashboard",
  },
  {
    title: "API integration and application state",
    body: "Connect the frontend to backend APIs and handle the states around each request: loading, empty results, success and errors. I focus on keeping the interface understandable as data changes and users move through a flow.",
    icon: "api",
  },
  {
    title: "Next.js websites and frontend improvements",
    body: "Develop React-based websites with Next.js, improve responsive layouts and refine existing components. My web experience includes work on ChefKart’s city pages and cook-discovery journeys, connecting page content with booking information.",
    icon: "nextjs",
  },
]

export type EngagementLink = {
  label: string
  href: string
  external?: boolean
  download?: boolean
  // Shorter visible text on phones so a row of links fits; screen readers still hear the full label.
  shortLabel?: string
}
export type WorkLink = EngagementLink

export type WorkItem = {
  id: string
  // Ownership boundary in the overline: ChefKart is team work, Mopedo is independent.
  kind: "Team contribution" | "Independent project"
  // Role and dates where they add information; omitted when the summary already says it.
  meta?: string
  title: string
  summary: string
  // Three scannable highlights; the full detail lives in each case study.
  highlights: readonly { label: string; text: string }[]
  stack: readonly string[]
  visual:
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
    | { type: "illustration"; name: "chefkart-city"; caption: string }
  // ChefKart links to its case study. Mopedo, a published project, reuses the site-wide project buttons
  // (live project, case study, GitHub repo) so it matches the Projects page.
  primaryLink?: WorkLink
  links: readonly WorkLink[]
  project?: Project
}

const mopedoProject = projects.find((project) => project.id === "mopedo")

export const workIntro =
  "One team product and one independent build, each linked to its full case study, with a live demo and source for the independent project."

export const selectedWork: readonly WorkItem[] = [
  {
    id: "chefkart",
    kind: "Team contribution",
    meta: chefkartRole ? `${chefkartRole.position} · ${chefkartRole.duration}` : "ChefKart",
    title: "Web experiences and internal operations at ChefKart",
    summary:
      "At ChefKart, I contributed to React and Next.js web journeys, internal tools and API integration, working with product, design, backend and QA teams.",
    // Scope from the reviewed case study (features/experience/data/chefkart.ts); no internal names,
    // endpoints, thresholds or activity counts.
    highlights: [
      {
        label: "Next.js website",
        text: "Server-rendered city and cook-discovery pages showing live availability and prices, guiding visitors towards a booking.",
      },
      {
        label: "React operations dashboard",
        text: "Interfaces used to manage the work behind customer visits.",
      },
      {
        label: "Approach",
        text: "Clarify the data and interaction states, then build each interface as part of the wider product.",
      },
    ],
    stack: ["React.js", "Next.js", "API integration"],
    visual: {
      type: "illustration",
      name: "chefkart-city",
      caption: "How a city page connects search visitors to live booking information",
    },
    primaryLink: { label: "Read my ChefKart case study", href: chefkartPage.path },
    links: [],
  },
  {
    id: "mopedo",
    kind: "Independent project",
    title: "Mopedo, an independently built React frontend",
    summary:
      "I designed and developed Mopedo, a responsive frontend demo for bike taxi, food delivery and goods-delivery services.",
    highlights: [
      {
        label: "Pages",
        text: "Home, About, Services and Contact views sharing one header and footer.",
      },
      {
        label: "Components",
        text: "Reusable components and mobile-friendly navigation, deployed on Netlify.",
      },
      {
        label: "Scope",
        text: "A frontend demo of interface design, components and responsive layouts.",
      },
    ],
    stack: ["React", "JavaScript", "React Router", "styled-components", "Vite", "Netlify"],
    visual: {
      type: "image",
      live: true,
      src: "/Projects_images/Mopedo.webp",
      alt: "Mopedo homepage with bike-taxi introduction, two CTA buttons and a rider illustration",
      width: 2880,
      height: 1520,
      address: "mopedo.netlify.app",
    },
    links: [],
    project: mopedoProject,
  },
]

export type Engagement = {
  id: "full-time" | "freelance"
  icon: "role" | "project"
  label: string
  title: string
  summary: string
  // The brief's "share …" sentence as a scannable checklist, with its closing line kept as a note.
  share: { heading: string; items: readonly string[]; note: string }
  cta: { label: string; href: string; analytics: string }
  // Plain, non-interactive pills above the main button: availability (full-time) or services (freelance).
  facts: readonly string[]
  factsLabel: string
  links: readonly EngagementLink[]
  // A plain sentence under the main button where the full-time card has links. It restates facts already on
  // the page (location in the hero, services in the summary) in a quotable form for search and AI answers.
  footnote?: string
}

export const engagementIntro =
  "Choose the path that fits. Both open the contact form with your enquiry type already selected."

export const engagements: readonly Engagement[] = [
  {
    id: "full-time",
    icon: "role",
    label: "Full-time roles",
    title: "Hire a React developer for your team",
    summary:
      "I’m interested in full-time opportunities where I can contribute to React and Next.js products, collaborate with designers and backend engineers, and take responsibility for frontend features.",
    share: {
      heading: "Hiring a React.js developer? Share:",
      items: ["The role and product", "Your team setup", "Location or remote-work requirements"],
      note: "We can discuss how my experience fits what your team needs.",
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
      { label: "Download my resume", shortLabel: "Resume", href: "/ANUJ_DHANUKA_RESUME.pdf", download: true },
      { label: "Connect on LinkedIn", shortLabel: "LinkedIn", href: site.linkedIn, external: true },
    ],
  },
  {
    id: "freelance",
    icon: "project",
    label: "Freelance projects",
    title: "Work with me on a freelance React project",
    summary:
      "I’m also open to freelance React development, including responsive interfaces, dashboard screens, API-connected features and improvements to existing React or Next.js applications.",
    share: {
      heading: "Planning a freelance project? Share:",
      items: ["What you want to build", "What already exists", "Your target timeline"],
      note: "We can then agree on the frontend scope, required inputs, deliverables and availability before starting.",
    },
    cta: {
      label: "Discuss a freelance project",
      href: freelanceContactHref,
      analytics: "discuss_freelance_project",
    },
    facts: ["Responsive interfaces", "Dashboards", "API integration", "Next.js"],
    factsLabel: "Freelance services",
    links: [],
    footnote:
      "Freelance React.js developer in India for responsive interfaces, dashboards and API-connected features.",
  },
]

export const approachIntro = {
  body: "A clear, four-step path from the first conversation to handover.",
  ctaLabel: "Discuss your project",
} as const

export const approachSteps = [
  {
    title: "Understand the requirement",
    body: "Discuss who will use the interface, what they need to do and how you will judge the finished work.",
  },
  {
    title: "Define the scope",
    body: "Agree on screens, interactions, designs, API dependencies and the expected deliverables.",
  },
  {
    title: "Build and review",
    body: "Develop the interface in manageable stages and review progress against the agreed requirements.",
  },
  {
    title: "Check and hand over",
    body: "Check responsive behaviour and interaction states, apply agreed feedback, and document the setup.",
  },
] as const

export type TechIcon =
  | "react"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "html"
  | "css"
  | "redux"
  | "tailwind"
  | "restApi"
  | "reactRouter"
  | "vite"
  | "figma"
  | "styledComponents"
  | "git"
  | "github"

// One grid of brand-icon tiles: the core stack first, then the tools used alongside it. The tile names
// carry the brief's full technology list as text.
// `kind` describes the tool itself (not a claim about experience), shown under each name.
export const technologyStack: readonly { name: string; kind: string; icon: TechIcon }[] = [
  { name: "React.js", kind: "UI library", icon: "react" },
  { name: "Next.js", kind: "React framework", icon: "nextjs" },
  { name: "JavaScript", kind: "Language", icon: "javascript" },
  { name: "TypeScript", kind: "Typed JavaScript", icon: "typescript" },
  { name: "HTML", kind: "Markup", icon: "html" },
  { name: "CSS", kind: "Styling", icon: "css" },
  // Added 21 Nov 2026 at the owner's request; each is already documented elsewhere on the site as his work:
  // Redux and REST APIs (ChefKart case-study stack), Tailwind CSS and Figma (Skills page), Vite (Mopedo).
  { name: "Redux", kind: "State management", icon: "redux" },
  { name: "Tailwind CSS", kind: "Utility-first CSS", icon: "tailwind" },
  { name: "REST APIs", kind: "API integration", icon: "restApi" },
  { name: "React Router", kind: "Routing", icon: "reactRouter" },
  { name: "styled-components", kind: "CSS-in-JS", icon: "styledComponents" },
  { name: "Vite", kind: "Build tool", icon: "vite" },
  { name: "Figma", kind: "Design handoff", icon: "figma" },
  { name: "Git", kind: "Version control", icon: "git" },
  { name: "GitHub", kind: "Code hosting", icon: "github" },
]

export const technologies = {
  // One quotable sentence tying Anuj to the stack (for search and AI answers), plus the brief's closing line.
  intro:
    "I build with React.js, Next.js, JavaScript and TypeScript, alongside HTML and CSS, and have used Redux, Tailwind CSS, REST APIs, React Router, styled-components, Vite, Figma, Git and GitHub. The tools should fit the application and its existing codebase.",
} as const

export const reactDeveloperFaqIntro = "Quick answers for recruiters and clients before you get in touch."

export const reactDeveloperFaqs = [
  {
    question: "Are you available for full-time and freelance work?",
    answer: `I’m open to discussing both full-time React developer roles and freelance frontend projects. For full-time roles, I’m ${lowerFirst(site.availability)} and ${lowerFirst(site.openTo)}. Share the opportunity so we can confirm fit, availability and a suitable start date.`,
  },
  {
    question: "Can you work on an existing React application?",
    answer:
      "Yes. I can help with additional screens, responsive improvements, reusable components and frontend API integration. I would first review the relevant code and requirements to understand the scope.",
  },
  {
    question: "Do you work with Next.js as well as React?",
    answer:
      "Yes. My experience includes React interfaces and Next.js website work at ChefKart. The case study explains the web journeys I contributed to.",
  },
  {
    question: "What should I send for a freelance enquiry?",
    answer:
      "Send a short project description, the pages or features you need, any existing website or designs, API availability, your target timeline and an indicative budget. This gives us a useful starting point for discussing scope.",
  },
  {
    question: "How much will a React project cost?",
    answer:
      "The cost depends on the agreed scope, the existing codebase, design readiness, integrations and delivery requirements. We can discuss an estimate after reviewing those details.",
  },
] as const

export const reactDeveloperClosing = {
  title: "Let’s discuss your role or project",
  description:
    "Looking for a React developer for your team or a freelance developer for a web interface? Tell me what you’re building and where you need help.",
} as const
