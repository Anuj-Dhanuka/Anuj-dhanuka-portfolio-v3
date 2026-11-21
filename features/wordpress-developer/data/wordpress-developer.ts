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
  WorkVisual,
} from "@/features/hire-pages/types"
import { projects, type Project } from "@/features/projects/data/projects"

// Hire-intent page for WordPress and Elementor roles and freelance website projects: one page for both
// audiences. Copy is the owner's research-revised brief of 21 November 2026. Evidence boundaries:
// Rekha Maa Ki Rasoi is an independent family-business website (Anuj's mother's homemade-food idea) on a
// premium theme foundation, never a custom-coded theme, a paid client engagement or a source of results, and
// its demo ratings/testimonials are never endorsements. Rama Technical College is a freelance HOMEPAGE only,
// arranged through a friend who managed the college relationship (never a direct client, never the whole
// website, portals or admissions backend). No custom PHP, plugin or widget development, ACF/Gutenberg,
// headless, WooCommerce, malware removal, migrations or maintenance retainers; no rates, years, response
// times, support periods, certifications, logos, testimonials or metrics. Availability from config/site.ts
// appears on the full-time path only.
export const wordpressDeveloperPage = {
  path: "/wordpress-developer",
  breadcrumb: "WordPress Developer",
  title: "WordPress Developer for Hire | Anuj Dhanuka",
  description:
    "Hire Anuj Dhanuka for WordPress and Elementor websites, responsive business pages and clear enquiry journeys. Explore projects and discuss your requirements.",
  // Implemented 21 November 2026; update both dates (and the sitemap follows) if first deployed later.
  published: "2026-11-21",
  lastModified: "2026-11-21",
} as const satisfies HirePageMeta

export const wordpressDeveloperImageAlt =
  "Anuj Dhanuka, WordPress developer for full-time roles and freelance projects."

// Each button preselects its enquiry type on the Contact page; the visitor can still change it.
export const fullTimeContactHref = contactHref("full-time", "wordpress-developer")
export const freelanceContactHref = contactHref("freelance", "wordpress-developer")
export const workSectionId = "work"

const rekhaProject = projects.find((project) => project.id === "rekha-maa-ki-rasoi")
const ramaProject = projects.find((project) => project.id === "rama-technical-college")

const caseStudyPath = (project: Project | undefined) =>
  project?.caseStudy ? `/projects/${project.caseStudy.slug}` : "/projects"

export const rekhaCaseStudyPath = caseStudyPath(rekhaProject)
export const ramaCaseStudyPath = caseStudyPath(ramaProject)

export const heroFacts: readonly HireFact[] = [
  { label: site.location },
  { label: "Rekha Maa Ki Rasoi", href: rekhaCaseStudyPath },
  { label: "Rama College homepage", href: ramaCaseStudyPath },
]

export const wordpressDeveloperHero = {
  eyebrow: "Full-time roles · Freelance projects",
  title: "WordPress Developer",
  titleAccent: "for Hire",
  intro:
    "I’m Anuj Dhanuka, a WordPress developer in India building responsive business websites with Elementor. I turn services, course information and business ideas into clear pages with practical enquiry paths, drawing on my work for Rekha Maa Ki Rasoi and the Rama Technical College homepage.",
  facts: heroFacts,
  fullTimeLabel: "Discuss a Full-time Role",
  freelanceLabel: "Discuss a WordPress Project",
} as const satisfies HireHeroContent

export const wordpressDeveloperSections = [
  { href: `#${workSectionId}`, label: "Selected work" },
  { href: "#services", label: "Services" },
  { href: "#work-together", label: "Work together" },
  { href: "#process", label: "Process" },
  { href: "#technologies", label: "Technologies" },
  { href: "#faqs", label: "FAQs" },
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

const rekhaVisual = screenshotVisual(rekhaProject, "/project-case-studies/rekha/pricing-2026.webp")
const ramaVisual = screenshotVisual(ramaProject, "/project-case-studies/rama/courses-2026.webp")

export const selectedWork: readonly WorkItem[] = [
  ...(rekhaProject && rekhaVisual
    ? [
        {
          id: "rekha",
          kind: "Independent family-business website",
          title: "Rekha Maa Ki Rasoi, a family-business website",
          summary:
            "I turned my mother’s homemade-food business idea into a WordPress website, shaping its content and visual direction and building the pages in Elementor on a premium theme foundation.",
          highlights: [
            {
              label: "Content",
              text: "Meal plans, pricing and enquiry options arranged into one customer journey.",
            },
            {
              label: "Responsive layouts",
              text: "Plan cards, imagery and navigation adapted for desktop and mobile.",
            },
            {
              label: "Delivery",
              text: "WordPress setup, forms, plugins, domain, hosting and deployment.",
            },
          ],
          stack: ["WordPress", "Elementor", "Content structure", "Responsive design"],
          visual: rekhaVisual,
          // Shared project buttons: live project, then case study (no public source exists).
          project: rekhaProject,
        } satisfies WorkItem,
      ]
    : []),
  ...(ramaProject && ramaVisual
    ? [
        {
          id: "rama",
          kind: "Freelance homepage",
          title: "Rama Technical College, a responsive homepage",
          summary:
            "I designed and built the college homepage in WordPress and Elementor through a freelance project arranged by a friend, who managed the college relationship.",
          highlights: [
            {
              label: "Course information",
              text: "A tabbed catalogue with consistent course cards.",
            },
            {
              label: "Page structure",
              text: "Credentials, practical FAQs and a closing enquiry section.",
            },
            {
              label: "Mobile layout",
              text: "Wrapping tabs, stacked cards and full-width contact actions.",
            },
          ],
          stack: ["WordPress", "Elementor", "Information architecture", "Responsive design"],
          visual: ramaVisual,
          project: ramaProject,
        } satisfies WorkItem,
      ]
    : []),
]

export const workIntro =
  "Two projects showing how I organise business information, build responsive layouts and make the next step clear."

export const capabilities: readonly Capability[] = [
  {
    title: "WordPress business websites",
    body: "Bring your services, business story and contact details together in a responsive website. I can help organise the content and build the pages around what visitors need to understand before getting in touch.",
    icon: "website",
  },
  {
    title: "Elementor pages and landing pages",
    body: "Build homepages, service pages and focused landing pages in Elementor. Arrange headings, images, cards, FAQs and contact sections into a clear layout that works across screen sizes.",
    icon: "responsive",
  },
  {
    title: "Theme styling and page redesign",
    body: "Adapt an existing WordPress theme and Elementor pages to your brand, refining typography, spacing, imagery and mobile layouts. For an existing website, we first review the theme and setup to agree what can be changed.",
    icon: "theme",
  },
  {
    title: "Enquiry forms and launch setup",
    body: "Connect the page journey to contact forms and direct enquiry actions. Depending on the agreed scope, I can also help with WordPress setup, domain and hosting configuration, and launch checks.",
    icon: "interactive",
  },
]

export const engagements: readonly Engagement[] = [
  {
    id: "full-time",
    icon: "role",
    label: "Full-time roles",
    title: "Full-time WordPress and Elementor roles",
    summary:
      "I’m interested in roles focused on WordPress websites, Elementor implementation and responsive page design. Explore the selected work above and my broader frontend experience to assess the fit for your team.",
    share: {
      heading: "Share:",
      items: [
        "The role and the kind of websites your team builds",
        "The expected WordPress and Elementor responsibilities",
        "Location, working arrangement and hiring timeline",
      ],
    },
    cta: {
      label: "Discuss a Full-time Role",
      href: fullTimeContactHref,
      analytics: "discuss_full_time_role",
    },
    // Owner-approved availability from config/site.ts (full-time path only), then the role focus pills.
    facts: [site.availability, site.openTo, "WordPress websites", "Elementor", "Responsive design"],
    factsLabel: "Availability and focus for full-time roles",
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
    title: "Freelance WordPress developer",
    summary:
      "I work as a freelance WordPress developer in India on business websites, Elementor pages and scoped layout improvements. Share your current website or brief so we can agree the pages, responsibilities and review points.",
    share: {
      heading: "Share:",
      items: [
        "Your website URL or business idea",
        "The pages, content and features you need",
        "Your preferred timeline and budget range",
      ],
    },
    cta: {
      label: "Discuss a WordPress Project",
      href: freelanceContactHref,
      analytics: "discuss_freelance_project",
    },
    facts: ["Business websites", "Landing pages", "Page redesign"],
    factsLabel: "Freelance services",
    links: [],
    // Quotable line under the button, like the other hire pages' freelance cards.
    footnote:
      "Freelance WordPress developer in India for Elementor business websites, landing pages and scoped page redesigns.",
  },
]

export const approachSteps = [
  {
    title: "Understand the brief",
    body: "Review your business, audience, content and current website before defining the work.",
  },
  {
    title: "Agree the page plan",
    body: "Set the pages, theme approach, enquiry actions, responsibilities and review points.",
  },
  {
    title: "Build and review",
    body: "Develop the Elementor layouts and review content, navigation and mobile behaviour.",
  },
  {
    title: "Check and hand over",
    body: "Check agreed forms and links, review launch requirements and explain routine content edits.",
  },
] as const

// Owner-confirmed tools (21 November 2026): the build stack, then site setup and launch. Plugins, hosts and
// analytics are named generically because no specific product was confirmed. WooCommerce is a tool he knows;
// neither published project is a WooCommerce store, so no store project or results are implied.
export const technologyStack: readonly TechItem[] = [
  { name: "WordPress", kind: "Content management", icon: "wordpress" },
  { name: "Elementor", kind: "WordPress page builder", icon: "elementor" },
  { name: "Elementor Pro", kind: "Theme builder and popups", icon: "elementorPro" },
  { name: "WordPress themes", kind: "Theme setup and styling", icon: "wpThemes" },
  {
    name: "WooCommerce",
    breakableName: "Woo\u00ADCommerce",
    kind: "WordPress store plugin",
    icon: "woocommerce",
  },
  { name: "HTML", kind: "Markup", icon: "html" },
  { name: "CSS", kind: "Styling adjustments", icon: "css" },
  { name: "Plugins", kind: "Setup and configuration", icon: "plugins" },
  { name: "Contact forms", kind: "Enquiry form plugins", icon: "forms" },
  { name: "SEO plugins", kind: "Titles, meta and sitemaps", icon: "wpSeo" },
  { name: "Responsive settings", kind: "Elementor breakpoints", icon: "breakpoints" },
  { name: "Domain and hosting", kind: "DNS and control panels", icon: "hosting" },
  { name: "Site Kit and Analytics", kind: "Analytics and Search Console", icon: "analytics" },
  { name: "Backups and performance", kind: "Backup, caching and images", icon: "performance" },
  { name: "Figma", kind: "Design mockups", icon: "figma" },
]

export const wordpressDeveloperContent: HirePageSections = {
  navLabel: "WordPress developer page sections",
  nav: wordpressDeveloperSections,
  work: {
    id: workSectionId,
    title: "Selected WordPress and Elementor work",
    intro: workIntro,
    items: selectedWork,
  },
  capabilities: {
    id: "services",
    label: "Services",
    title: "What I can help you build",
    intro:
      "WordPress website development focused on business content, Elementor layouts and a clear route from browsing to enquiry.",
    ctaLabel: "Discuss your website requirements",
    items: capabilities,
  },
  engagement: {
    id: "work-together",
    intro: "Discuss a WordPress and Elementor role, or bring a defined website project.",
    items: engagements,
  },
  approach: {
    id: "process",
    intro: "Start with the business need, agree the page scope, then review the build before launch.",
    steps: approachSteps,
  },
  technologies: {
    intro:
      "I build WordPress websites with Elementor, themes, HTML and CSS, and set up WooCommerce, plugins, forms and SEO. Launch work covers domain and hosting, analytics, backups, caching and image optimisation, with Figma for mockups.",
    items: technologyStack,
  },
  freelanceContactHref,
}

export const wordpressDeveloperFaqId = "faqs"
export const wordpressDeveloperFaqIntro =
  "Practical answers about scope, editing, project costs and getting started."

// Real buying questions in plain text (no FAQPage markup). Availability is stated on the full-time path only.
export const wordpressDeveloperFaqs: readonly FaqItem[] = [
  {
    question: "What kind of WordPress developer are you?",
    answer:
      "I focus on business websites, Elementor page building, responsive layouts and clear enquiry journeys. My published examples show a family-business website and a freelance college homepage. Custom PHP applications, plugin development and complex WooCommerce work need a separate scope discussion; they are not demonstrated by these projects.",
  },
  {
    question: "Can I hire you for freelance work or a full-time role?",
    answer:
      "Yes. You can contact me about a defined WordPress project or a full-time role involving WordPress, Elementor and website interfaces. Choose the relevant enquiry option and share the project brief or job description so we can discuss the fit.",
  },
  {
    question: "Can you build a complete WordPress website?",
    answer:
      "Yes, for an agreed business-website scope. Rekha Maa Ki Rasoi is an example where I handled content, visual direction, WordPress and Elementor implementation, forms, domain, hosting and deployment. My Rama Technical College contribution was limited to its homepage.",
  },
  {
    question: "Can you redesign my existing WordPress website?",
    answer:
      "I can help with page structure, visual styling, Elementor layouts and mobile presentation. I would first review your existing theme, builder and required features before confirming the scope. A migration, custom backend feature or major integration needs its own assessment.",
  },
  {
    question: "Do you use a theme or build everything from scratch?",
    answer:
      "My Rekha Maa Ki Rasoi project used a premium WordPress theme as the foundation, with business-specific content and layouts built in Elementor. The right approach depends on your design and editing needs. I describe theme-based work honestly and do not present it as a custom-coded WordPress theme.",
  },
  {
    question: "Will I be able to edit the website myself?",
    answer:
      "WordPress and Elementor let you manage content and edit page layouts through their interfaces. We can identify the text, images and sections you expect to update and include a walkthrough in the handover scope. Available controls depend on the theme, plugins and account permissions.",
  },
  {
    question: "How much does a WordPress website cost, and how long does it take?",
    answer:
      "Cost and timing depend on the page count, design work, content readiness, theme, forms and required features. Send your brief or current website, budget range and target date so we can agree the scope. Domain, hosting and paid theme or plugin licences should be identified separately.",
  },
  {
    question: "Do I need Elementor Pro or a premium theme?",
    answer:
      "That depends on the features and design. We should check what your existing setup supports before choosing paid tools. Any required licence, account owner, renewal cost and responsibility should be agreed before the build.",
  },
  {
    question: "Will the website rank on Google or appear in AI answers?",
    answer:
      "No developer can guarantee rankings, traffic or AI recommendations. Clear content, sensible headings, usable mobile layouts and accessible pages provide a useful foundation. Search visibility also depends on competition, indexing, authority and continued work on the website.",
  },
  {
    question: "What should I send before we start?",
    answer:
      "Share your business goals, website URL if you have one, required pages, brand assets, available content, feature needs, budget range and target date. Mention any existing theme, Elementor licence or hosting setup. We can then agree responsibilities, review stages and any post-launch support.",
  },
]

export const wordpressDeveloperClosing = {
  title: "Let’s discuss your WordPress website",
  description:
    "Need an Elementor business website, a clearer homepage or a developer for your team? Share the brief or role, and we can discuss the scope and next steps.",
} as const
