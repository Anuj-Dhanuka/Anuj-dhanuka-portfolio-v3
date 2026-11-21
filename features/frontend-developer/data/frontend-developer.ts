import type { FaqItem } from "@/components/shared/faq-section"
import { site } from "@/config/site"
import { contactHref } from "@/features/contact/enquiry"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { experienceRoles } from "@/features/experience/data/experience"
import type {
  Capability,
  Engagement,
  HireFact,
  HireHeroContent,
  HirePageMeta,
  HirePageSections,
  TechItem,
  WorkItem,
  WorkVisual,
} from "@/features/hire-pages/types"
import { projects, type Project } from "@/features/projects/data/projects"

// Hire-intent page for frontend roles and freelance website projects: one page for both audiences. Copy is
// the owner's brief of 21 November 2026. Its purpose is responsive websites, design implementation,
// interface behaviour and scoped website improvements; React application and dashboard depth stays on
// /react-developer and mobile apps on /react-native-developer. ChefKart is past employment and a team
// contribution. Rama is a freelance WordPress/Elementor HOMEPAGE arranged through a friend who managed the
// college relationship (never "client", never other pages, portals, plugins or hosting). Rekha is an
// independent family-business WordPress/Elementor website on a premium theme foundation (no custom code
// claims, and its demo ratings/testimonials are never endorsements). Availability from config/site.ts
// applies to full-time roles only. No rates, years, client counts, response times, conversion lifts,
// performance scores, certifications, remote arrangements or immediate freelance capacity.
export const frontendDeveloperPage = {
  path: "/frontend-developer",
  breadcrumb: "Frontend Developer",
  title: "Frontend Developer for Hire | Anuj Dhanuka",
  description:
    "Hire Anuj Dhanuka, a frontend developer in India, for full-time roles or freelance projects. Explore responsive websites, interface work and project examples.",
  // Implemented 21 November 2026; update both dates (and the sitemap follows) if first deployed later.
  published: "2026-11-21",
  lastModified: "2026-11-21",
} as const satisfies HirePageMeta

export const frontendDeveloperImageAlt =
  "Anuj Dhanuka, frontend developer for full-time roles and freelance projects."

// Each button preselects its enquiry type on the Contact page; the visitor can still change it.
export const fullTimeContactHref = contactHref("full-time", "frontend-developer")
export const freelanceContactHref = contactHref("freelance", "frontend-developer")
export const workSectionId = "selected-frontend-work"

const chefkartRole = experienceRoles.find((role) => role.id === "chefkart")
const ramaProject = projects.find((project) => project.id === "rama-technical-college")
const rekhaProject = projects.find((project) => project.id === "rekha-maa-ki-rasoi")

const caseStudyPath = (project: Project | undefined) =>
  project?.caseStudy ? `/projects/${project.caseStudy.slug}` : "/projects"

export const ramaCaseStudyPath = caseStudyPath(ramaProject)
export const rekhaCaseStudyPath = caseStudyPath(rekhaProject)

// Role and dates from the shared experience data, so this page cannot drift from /experience.
const chefkartRoleLine = chefkartRole ? `${chefkartRole.position} · ${chefkartRole.duration}` : undefined

export const heroFacts: readonly HireFact[] = [
  { label: site.location },
  ...(chefkartRole
    ? [{ label: `${chefkartRole.position}, ChefKart · ${chefkartRole.duration}`, href: chefkartPage.path }]
    : []),
  { label: "Freelance homepage: Rama Technical College", href: ramaCaseStudyPath },
]

export const frontendDeveloperHero = {
  eyebrow: "Full-time roles · Freelance projects",
  title: "Frontend Developer",
  titleAccent: "for Hire",
  intro:
    "I’m Anuj Dhanuka, a frontend developer in India. I turn designs and requirements into responsive websites and interfaces. My work spans ChefKart’s web experiences, a freelance education homepage and an independent food-business website. I’m open to full-time roles and freelance projects.",
  facts: heroFacts,
  portraitAlt: "Anuj Dhanuka, frontend developer based in India",
  fullTimeLabel: "Discuss a full-time role",
  freelanceLabel: "Discuss a freelance project",
} as const satisfies HireHeroContent

export const frontendDeveloperSections = [
  { href: `#${workSectionId}`, label: "Selected work" },
  { href: "#capabilities", label: "What I build" },
  { href: "#work-with-me", label: "Ways to work" },
  { href: "#approach", label: "Approach" },
  { href: "#faq", label: "Questions" },
] as const satisfies HirePageSections["nav"]

// An existing case-study screenshot (dimensions and alt text from the project record) in the shared
// browser frame, addressed with the live site's host.
function screenshotVisual(project: Project | undefined, src: string): WorkVisual | undefined {
  const screen = project?.caseStudy?.screenshots.find((entry) => entry.src === src)
  if (!project?.liveLink || !screen) return undefined
  return {
    type: "image",
    src: screen.src,
    alt: screen.alt,
    width: screen.width,
    height: screen.height,
    address: new URL(project.liveLink).host,
    live: true,
  }
}

const ramaVisual = screenshotVisual(ramaProject, "/project-case-studies/rama/courses-2026.webp")
const rekhaVisual = screenshotVisual(rekhaProject, "/project-case-studies/rekha/pricing-2026.webp")

export const selectedWork: readonly WorkItem[] = [
  {
    id: "chefkart",
    kind: "Team contribution",
    meta: chefkartRoleLine,
    title: "Web interfaces at ChefKart",
    summary:
      "At ChefKart, I contributed to web interfaces with React and Next.js, working alongside product, design, backend and QA teams.",
    // Scope from the reviewed case study (features/experience/data/chefkart.ts); no internal names,
    // endpoints, thresholds or activity counts, and not the React page's dashboard narrative.
    highlights: [
      {
        label: "Website journeys",
        text: "City and cook-discovery pages presenting availability, prices and booking information.",
      },
      {
        label: "Interface behaviour",
        text: "Connecting page content with API data and the states around user interactions.",
      },
      {
        label: "Collaboration",
        text: "Developing frontend features within an existing product and team workflow.",
      },
    ],
    stack: ["React.js", "Next.js", "API integration"],
    visual: {
      type: "illustration",
      name: "chefkart-city",
      caption: "Illustration of a city-page journey, not a real ChefKart screen.",
    },
    primaryLink: { label: "Read my ChefKart case study", href: chefkartPage.path },
  },
  ...(ramaProject && ramaVisual
    ? [
        {
          id: "rama",
          kind: "Freelance homepage",
          title: "A responsive education homepage for Rama Technical College",
          summary:
            "I designed and built the college homepage in WordPress and Elementor through a freelance project arranged by a friend, who managed the college relationship.",
          highlights: [
            {
              label: "Content structure",
              text: "Organised course information, credentials and FAQs into a clear homepage sequence.",
            },
            {
              label: "Responsive layout",
              text: "Adapted course tabs, cards and enquiry actions for tablet and mobile screens.",
            },
            {
              label: "Scope",
              text: "Delivered the homepage; other pages, portals and hosting were outside my responsibility.",
            },
          ],
          stack: ["WordPress", "Elementor", "Responsive design"],
          visual: ramaVisual,
          // Shared project buttons: live project, then case study (no public source exists).
          project: ramaProject,
        } satisfies WorkItem,
      ]
    : []),
  ...(rekhaProject && rekhaVisual
    ? [
        {
          id: "rekha",
          kind: "Independent family-business website",
          title: "A food-business website for Rekha Maa Ki Rasoi",
          summary:
            "I turned my mother’s homemade-food business idea into a responsive website, shaping the content and visual direction and delivering it with WordPress and Elementor on a premium theme foundation.",
          highlights: [
            {
              label: "Information",
              text: "Structured meal plans, pricing and practical questions so visitors could understand the offer.",
            },
            {
              label: "Responsive design",
              text: "Adapted plan cards, typography, images and enquiry controls for smaller screens.",
            },
            {
              label: "Delivery",
              text: "Handled the website setup, forms, domain, hosting and deployment.",
            },
          ],
          stack: ["WordPress", "Elementor", "Content structure", "Responsive design"],
          visual: rekhaVisual,
          project: rekhaProject,
        } satisfies WorkItem,
      ]
    : []),
]

export const workIntro =
  "Examples of coding within a product team and delivering responsive business websites. Each case study explains the platform, my contribution and the scope of the work."

export const capabilities: readonly Capability[] = [
  {
    title: "Responsive websites and landing pages",
    body: "Build layouts that adapt across phones, tablets and desktops. I focus on readable content, consistent spacing, clear navigation and actions that remain usable on smaller screens.",
    icon: "responsive",
  },
  {
    title: "Design-to-interface implementation",
    body: "Turn supplied designs and product requirements into web interfaces, including layout, typography, reusable components and interaction states. We can review the details together as the work develops.",
    icon: "interface",
  },
  {
    title: "Interactive frontend features",
    body: "Implement forms, navigation, filters and API-connected interfaces within the agreed scope. For React-specific application and dashboard work, explore my React developer page.",
    icon: "interactive",
    link: { text: "React developer page", href: "/react-developer" },
  },
  {
    title: "WordPress and Elementor websites",
    body: "Build and refine business-site pages using WordPress and Elementor. My Rama and Rekha work demonstrates responsive layouts, content organisation and clear enquiry paths.",
    icon: "website",
  },
]

export const engagements: readonly Engagement[] = [
  {
    id: "full-time",
    icon: "role",
    label: "Full-time roles",
    title: "Hire a frontend developer for your team",
    summary:
      "I’m interested in full-time roles where I can implement interfaces, collaborate with designers and backend engineers, and contribute to frontend features from requirements through testing.",
    share: {
      heading: "Share the opportunity:",
      items: [
        "The role and product",
        "Your team and technology stack",
        "Location or remote-work requirements",
      ],
      note: "We can discuss how my experience fits the role and what your team needs next.",
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
    label: "Freelance projects",
    title: "Work with a freelance frontend developer",
    summary:
      "I’m open to scoped website and frontend projects, including responsive pages, design implementation and improvements to existing interfaces. We’ll review your requirements before agreeing on scope and availability.",
    share: {
      heading: "Share your project:",
      items: [
        "What you want to build or improve",
        "Existing website, platform and designs",
        "Target timeline and indicative budget",
      ],
      note: "We can agree on the pages, functionality, review stages and handover before work starts.",
    },
    cta: {
      label: "Discuss a freelance project",
      href: freelanceContactHref,
      analytics: "discuss_freelance_project",
    },
    facts: ["Responsive websites", "Interface implementation", "WordPress/Elementor"],
    factsLabel: "Freelance services",
    links: [],
    footnote:
      "Freelance frontend developer in India for responsive websites, interface implementation and scoped website improvements.",
  },
]

export const approachSteps = [
  {
    title: "Understand the requirements",
    body: "Review the audience, designs, content, current website and the work you need.",
  },
  {
    title: "Agree on the scope",
    body: "Define pages, functionality, platform, testing coverage and deliverables.",
  },
  {
    title: "Build and review",
    body: "Develop the interfaces and review layouts, content and interaction states together.",
  },
  {
    title: "Check and hand over",
    body: "Check agreed screen sizes and journeys, address feedback and document the handover.",
  },
] as const

// Only tools documented as Anuj's work (Skills page, ChefKart case study, Rama and Rekha case studies).
export const technologyStack: readonly TechItem[] = [
  { name: "HTML", kind: "Markup", icon: "html" },
  { name: "CSS", kind: "Styling", icon: "css" },
  { name: "JavaScript", kind: "Language", icon: "javascript" },
  { name: "TypeScript", kind: "Typed JavaScript", icon: "typescript" },
  { name: "React.js", kind: "UI library", icon: "react" },
  { name: "Next.js", kind: "React framework", icon: "nextjs" },
  { name: "WordPress", kind: "Content platform", icon: "wordpress" },
  { name: "Elementor", kind: "WordPress page builder", icon: "elementor" },
  { name: "Figma", kind: "Design handoff", icon: "figma" },
  { name: "Git", kind: "Version control", icon: "git" },
]

export const frontendDeveloperContent: HirePageSections = {
  navLabel: "Frontend developer page sections",
  nav: frontendDeveloperSections,
  work: {
    id: workSectionId,
    title: "Selected frontend and website work",
    intro: workIntro,
    items: selectedWork,
  },
  capabilities: {
    title: "Frontend development for websites and interfaces",
    intro:
      "I can help with a new website, a defined interface feature or improvements to an existing frontend. The implementation should fit your requirements and current platform.",
    ctaLabel: "Discuss a freelance project",
    items: capabilities,
  },
  engagement: {
    intro:
      "Looking for a frontend team member or help with a website project? Choose the conversation that fits your needs.",
    items: engagements,
  },
  approach: {
    intro: "Agree on the requirements, review working pages and check the details before handover.",
    ctaLabel: "Discuss your project",
    steps: approachSteps,
  },
  technologies: {
    // One quotable sentence naming every tile, for search and AI answers.
    intro:
      "My frontend toolkit includes HTML, CSS, JavaScript, TypeScript, React.js and Next.js, with Figma for design handoff and Git for version control. My business-website work also includes WordPress and Elementor.",
    items: technologyStack,
  },
  freelanceContactHref,
}

export const frontendDeveloperFaqIntro =
  "Practical answers for teams and clients considering a frontend role or website project."

// Real hiring questions in plain text (no FAQPage markup). Availability is stated on the full-time path only.
export const frontendDeveloperFaqs: readonly FaqItem[] = [
  {
    question: "Are you available for full-time and freelance frontend work?",
    answer:
      "I’m open to discussing both. My current full-time availability is shown above. For freelance work, we’ll review the requirements, timeline and existing commitments before agreeing on a start date.",
  },
  {
    question: "Can you build a website from an existing design?",
    answer:
      "Yes. I can work from supplied designs and requirements to implement responsive pages and interfaces. We’ll review the layouts, interactions, content and platform before defining the scope.",
  },
  {
    question: "Can you improve an existing website?",
    answer:
      "Yes. We can discuss layout issues, mobile presentation, page structure and defined frontend features. I would first review the website and relevant code or platform access to understand what needs changing.",
  },
  {
    question: "Do you work with React and WordPress?",
    answer:
      "Yes, for different kinds of work. My experience includes React and Next.js web interfaces at ChefKart, and WordPress/Elementor delivery for Rama Technical College and Rekha Maa Ki Rasoi. The choice depends on the website’s functionality, content-editing needs and existing setup.",
    links: [
      { label: "ChefKart case study", href: chefkartPage.path },
      { label: "Rama Technical College case study", href: ramaCaseStudyPath },
      { label: "Rekha Maa Ki Rasoi case study", href: rekhaCaseStudyPath },
      { label: "React developer page", href: "/react-developer" },
    ],
  },
  {
    question: "How do you approach mobile and browser testing?",
    answer:
      "We’ll agree on the screen sizes, browsers and user journeys to check. This can include navigation, forms, content layout and interactive states. Any formal accessibility audit or specific performance target needs to be defined and tested as part of the scope.",
  },
  {
    question: "What should I send for a project estimate?",
    answer:
      "Share the website or idea, the pages and features you need, available designs and content, your current platform, timeline and indicative budget. Those details help us discuss scope and a suitable approach.",
  },
  {
    question: "How much does frontend development cost?",
    answer:
      "The estimate depends on the pages, design complexity, interactions, integrations, existing code or platform, and testing involved. Pricing can be discussed after reviewing the requirements and deliverables.",
  },
  {
    question: "Do you also develop mobile applications?",
    answer:
      "I also work with React Native. My React Native developer page covers mobile interfaces, application flows and relevant project examples.",
    links: [{ label: "React Native developer page", href: "/react-native-developer" }],
  },
]

export const frontendDeveloperClosing = {
  title: "Let’s discuss your website or frontend role",
  description:
    "Need a frontend developer for your team or help turning a website requirement into working pages? Share the opportunity or project.",
} as const
