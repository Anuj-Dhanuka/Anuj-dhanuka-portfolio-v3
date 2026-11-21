import type { FaqItem } from "@/components/shared/faq-section"
import { site } from "@/config/site"
import { contactHref } from "@/features/contact/enquiry"
import type {
  Capability,
  DesignDetails,
  Engagement,
  HireEnquiryType,
  HireFact,
  HireHeroContent,
  HirePageMeta,
  HirePageSections,
  InlineLinkText,
  PlatformChoices,
  TechItem,
  WorkItem,
  WorkVisual,
} from "@/features/hire-pages/types"
import { projects, type Project } from "@/features/projects/data/projects"

// Figma-to-website development SERVICE page (React, HTML/CSS/JavaScript and WordPress with Elementor), from
// the owner's research-revised brief of 21 November 2026. The defining intent is implementing a supplied
// design; it is not a converter, tutorial or platform directory. Like /landing-page-development it reuses the
// hire-page layout with the project enquiry first, plus a compact three-option platform choice in Services and
// a text-led "design details" section.
// Evidence boundaries: Mopedo is an independent React frontend demo that Anuj designed and built (not a working
// transport/delivery business, a supplied-Figma client project or a measured result); Rekha Maa Ki Rasoi is an
// independent family-business WordPress/Elementor website on a premium theme foundation (not a custom-coded
// theme, an unrelated paying client or a verified conversion increase). Neither has an original Figma file or
// before/after comparison, and none may be invented. PPCROY agency client work is NOT cleared for
// publication: no client names, URLs, logos, screenshots, design assets or the owner-reported project count
// anywhere on this page, its metadata, schema or social image. Design refinement is optional and agreed before
// implementation; no award, UX-research, usability-testing, certification, unlimited-revision, price,
// turnaround, support or conversion claims. Availability appears on the full-time card only.
export const figmaToWebsitePage = {
  path: "/figma-to-website",
  breadcrumb: "Figma to Website",
  title: "Figma to Website Development | Anuj Dhanuka",
  description:
    "Figma to website development by Anuj Dhanuka using React or WordPress. Responsive layouts, thoughtful UI details and editable pages. Discuss your design.",
  // Implemented 21 November 2026; update both dates (and the sitemap follows) if first deployed later.
  published: "2026-11-21",
  lastModified: "2026-11-21",
} as const satisfies HirePageMeta

export const figmaToWebsiteImageAlt = "Figma to website development with React and WordPress by Anuj Dhanuka"

// The service page leads with the project enquiry; role pages keep the full-time default.
export const figmaToWebsitePrimaryEnquiry: HireEnquiryType = "freelance"

// Each button preselects its enquiry type on the Contact page; the visitor can still change it.
export const freelanceContactHref = contactHref("freelance", "figma-to-website")
export const fullTimeContactHref = contactHref("full-time", "figma-to-website")

export const workSectionId = "selected-work"
export const servicesSectionId = "services"

const mopedoProject = projects.find((project) => project.id === "mopedo")
const rekhaProject = projects.find((project) => project.id === "rekha-maa-ki-rasoi")

// Two same-page jumps (plain anchors in the hero), no location fact.
export const heroFacts: readonly HireFact[] = [
  { label: "React and WordPress", href: `#${servicesSectionId}` },
  { label: "Design and development work", href: `#${workSectionId}` },
]

export const figmaToWebsiteHero = {
  eyebrow: "React · WordPress · Design-focused development",
  title: "Figma to Website Development",
  titleAccent: "Services",
  intro:
    "I’m Anuj Dhanuka. I turn Figma designs into responsive React and WordPress websites, with attention to typography, spacing and the details that make an interface feel considered. Bring an approved design, or discuss the refinements it needs before development.",
  facts: heroFacts,
  portraitAlt: "Anuj Dhanuka, Figma to website developer based in India",
  fullTimeLabel: "Discuss a Full-time Role",
  freelanceLabel: "Discuss Your Figma Design",
} as const satisfies HireHeroContent

export const figmaToWebsiteSections = [
  { href: `#${workSectionId}`, label: "Work" },
  { href: `#${servicesSectionId}`, label: "Services" },
  { href: "#design-details", label: "Design details" },
  { href: "#work-with-me", label: "Work with me" },
  { href: "#process", label: "Process" },
  { href: "#faqs", label: "FAQs" },
] as const satisfies HirePageSections["nav"]

// A canonical case-study screenshot (dimensions and alt text from the project record) in the shared
// browser frame, addressed with the live site's host, with the brief's ownership caption underneath.
function screenshotVisual(
  project: Project | undefined,
  src: string,
  caption: string,
): WorkVisual | undefined {
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
    caption,
  }
}

const mopedoVisual = screenshotVisual(
  mopedoProject,
  "/Projects_images/Mopedo.webp",
  "Independent frontend demo; interface design and development by Anuj Dhanuka.",
)
const rekhaVisual = screenshotVisual(
  rekhaProject,
  "/project-case-studies/rekha/pricing-2026.webp",
  "Independent family-business website built on a premium WordPress theme.",
)

export const selectedWork: readonly WorkItem[] = [
  ...(mopedoProject && mopedoVisual
    ? [
        {
          id: "mopedo",
          kind: "Independent project",
          title: "Mopedo, designed and built in React",
          summary:
            "I designed and developed Mopedo as a responsive frontend demo for three delivery-service categories, using a shared visual system across Home, About, Services and Contact.",
          highlights: [
            {
              label: "Visual hierarchy",
              text: "A clear service overview leads into more detailed sections.",
            },
            {
              label: "Consistency",
              text: "Shared navigation and reusable presentation patterns connect the pages.",
            },
            {
              label: "Mobile layouts",
              text: "Service rows change order and stack to preserve the intended reading sequence.",
            },
          ],
          stack: ["React", "JavaScript", "styled-components"],
          visual: mopedoVisual,
          // Shared project buttons: live demo, case study, GitHub repo.
          project: mopedoProject,
        } satisfies WorkItem,
      ]
    : []),
  ...(rekhaProject && rekhaVisual
    ? [
        {
          id: "rekha",
          kind: "Independent family-business website",
          title: "Rekha Maa Ki Rasoi, shaped around a food-service idea",
          summary:
            "I shaped the page structure, visual direction and content, then built the responsive website in WordPress and Elementor using a premium theme as the foundation.",
          highlights: [
            {
              label: "Visual direction",
              text: "A dark-teal base, warm accents and original food photography establish the look.",
            },
            {
              label: "Information order",
              text: "Meal plans and pricing appear before the ordering process.",
            },
            {
              label: "Responsive detail",
              text: "Columns, plan cards, typography and enquiry controls adapt for smaller screens.",
            },
          ],
          stack: ["WordPress", "Elementor", "Responsive design"],
          visual: rekhaVisual,
          // Shared project buttons: live project, then case study (no public source exists).
          project: rekhaProject,
        } satisfies WorkItem,
      ]
    : []),
]

export const capabilities: readonly Capability[] = [
  {
    title: "Figma to React development",
    body: "Turn your designs into reusable React components, responsive pages and interactive UI states. Existing code conventions and any required API connections are reviewed before the scope is agreed.",
    icon: "interactive",
  },
  {
    title: "Figma to WordPress with Elementor",
    body: "Build your design as editable WordPress pages using Elementor. Plan the page structure, reusable sections and content controls around what your team needs to manage after handover.",
    icon: "website",
  },
  {
    title: "Figma to HTML, CSS and JavaScript",
    body: "For a focused website or frontend handoff that does not need React, I can build responsive layouts and agreed interactions with HTML, CSS and JavaScript.",
    icon: "responsive",
  },
  {
    title: "Design refinement before development",
    body: "If the design needs work, I can review hierarchy, spacing, typography, mobile layouts and missing interaction states. We agree on changes before they become part of the build.",
    icon: "theme",
  },
]

// No option is presented as faster, better for SEO or higher-converting.
export const platformChoices: PlatformChoices = {
  id: "platform-choice",
  label: "Platform choice",
  title: "React or WordPress?",
  options: [
    {
      label: "React",
      icon: "react",
      body: "A fit for an existing React product or a custom interface with reusable components and interaction logic. Content editing needs a separately planned workflow.",
    },
    {
      label: "WordPress with Elementor",
      icon: "wordpress",
      body: "A fit when your team wants visual editing for business pages and reusable content sections. Theme and plugin choices are agreed around the design.",
    },
    {
      label: "HTML, CSS and JavaScript",
      icon: "html",
      body: "A fit for a focused frontend deliverable without a framework or built-in content editor.",
    },
  ],
  closing:
    "Not sure which approach to choose? Share your design and how the website needs to work, including who will update it.",
  // Both routes are published and in the sitemap. They share one row with "Discuss Your Figma Design".
  links: [
    { label: "Explore my React work", shortLabel: "React work", href: "/react-developer" },
    {
      label: "Explore my WordPress experience",
      shortLabel: "WordPress",
      href: "/wordpress-developer",
    },
  ],
}

export const designDetails: DesignDetails = {
  id: "design-details",
  label: "Design attention through the build",
  title: "The details matter beyond the first screenshot",
  titleAccent: "first screenshot",
  intro:
    "My design work informs how I build. I pay attention to the relationships between content, type, spacing and interaction, while respecting the direction you have already approved.",
  items: [
    {
      title: "Typography and spacing",
      body: "I carry the design’s type hierarchy, alignment and spacing into the implementation, then check how real headings and longer content behave in the layout.",
      icon: "typography",
    },
    {
      title: "Responsive decisions",
      body: "Mobile needs more than smaller text. I review reading order, image crops, stacked sections and touch controls. Where the design leaves a decision open, I propose an approach for review.",
      icon: "responsive",
    },
    {
      title: "Interaction states",
      body: "Buttons, navigation and forms need clear feedback. We identify relevant hover, focus, loading, empty and error states so the build accounts for use beyond the static mockup.",
      icon: "interactive",
    },
    {
      title: "Consistency as the site grows",
      body: "Reusable React components or Elementor sections help repeated elements follow the same design decisions. I plan the structure around the pages and editing needs we agree.",
      icon: "consistency",
    },
  ],
  closing:
    "An approved design stays the reference. Suggested refinements are discussed before implementation.",
}

// Freelance first on this service page.
export const engagements: readonly Engagement[] = [
  {
    id: "freelance",
    icon: "project",
    label: "Freelance projects",
    title: "Have a Figma design ready to build?",
    summary:
      "Work directly with me on the agreed React, HTML or WordPress implementation. Designers, agencies and business owners can share their requirements for a scoped development discussion.",
    share: {
      heading: "Share:",
      items: [
        "Your Figma link or an overview of the design.",
        "The pages, responsive layouts and interactions required.",
        "Your preferred platform or existing website.",
        "Your target date and budget range, if known.",
      ],
      note: "Only share design material you are authorised to share. Access requirements can be agreed after the initial discussion.",
    },
    cta: {
      label: "Discuss Your Figma Design",
      href: freelanceContactHref,
      analytics: "discuss_freelance_project",
    },
    facts: ["React", "WordPress", "Responsive implementation"],
    factsLabel: "Freelance services",
    links: [],
    footnote: "Design review, implementation scope and handover are agreed before work begins.",
  },
  {
    id: "full-time",
    icon: "role",
    label: "Full-time opportunities",
    title: "Need a frontend developer with design judgement?",
    summary:
      "I’m also open to discussing frontend roles involving React, responsive interfaces and collaboration with designers and product teams.",
    share: {
      heading: "Share:",
      items: [
        "The role and product context.",
        "Your technology stack and team expectations.",
        "Location or remote setup and hiring timeline.",
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

export const approachSteps = [
  {
    title: "Review the design",
    body: "Check pages, components, assets, interactions and any missing responsive states.",
  },
  {
    title: "Agree the scope",
    body: "Choose the platform and confirm functionality, refinements, costs and delivery expectations.",
  },
  {
    title: "Build and review",
    body: "Implement the agreed design and review progress on a preview or staging environment.",
  },
  {
    title: "Check and hand over",
    body: "Review layouts, links, agreed interactions and the editing or code handover.",
  },
] as const

// The brief's seven tools plus three the owner added on 21 November 2026 (Tailwind CSS, styled-components,
// Elementor Pro), all already documented as the owner's work elsewhere on the site: ten tiles fill two rows
// of five. `kind` describes the tool, not a claim about experience. Next.js, Webflow, store, integration,
// SEO and AI tools are deliberately left off.
export const technologyStack: readonly TechItem[] = [
  { name: "Figma", kind: "Design handoff", icon: "figma" },
  { name: "React", kind: "UI components", icon: "react" },
  { name: "JavaScript", kind: "Interactions", icon: "javascript" },
  { name: "Tailwind CSS", kind: "Utility-first CSS", icon: "tailwind" },
  { name: "styled-components", kind: "CSS-in-JS", icon: "styledComponents" },
  { name: "HTML", kind: "Page structure", icon: "html" },
  { name: "CSS", kind: "Layout and styling", icon: "css" },
  { name: "WordPress", kind: "Content management", icon: "wordpress" },
  { name: "Elementor", kind: "Visual page building", icon: "elementor" },
  { name: "Elementor Pro", kind: "Theme builder and templates", icon: "elementorPro" },
]

export const figmaToWebsiteContent: HirePageSections = {
  navLabel: "Figma to website development sections",
  nav: figmaToWebsiteSections,
  work: {
    id: workSectionId,
    title: "Design judgement you can see in the work",
    intro:
      "These projects show how I approach interface design, responsive layouts and implementation in React and WordPress.",
    items: selectedWork,
  },
  capabilities: {
    id: servicesSectionId,
    // Shortened from the brief's "From approved design to working website" at the owner's request.
    label: "Services",
    title: "Choose the build that fits your website",
    intro:
      "My Figma to website service covers custom frontend development and editable WordPress websites. The right approach depends on the interface, your existing technology and who will update the content.",
    ctaLabel: "Discuss Your Figma Design",
    ctaShortLabel: "Discuss",
    items: capabilities,
    choices: platformChoices,
  },
  designDetails,
  engagement: {
    id: "work-with-me",
    title: "Work with me on your design",
    intro:
      "Bring a single page, a multi-page website or a defined part of an existing interface. We can discuss the scope and the right way to collaborate.",
    items: engagements,
  },
  approach: {
    id: "process",
    title: "From Figma handoff to reviewed implementation",
    intro: "We agree on the design, functionality and delivery expectations before development begins.",
    steps: approachSteps,
  },
  technologies: {
    title: "Tools for design implementation",
    intro:
      "I use Figma to inspect designs, React, JavaScript, Tailwind CSS and styled-components for custom interfaces, HTML and CSS for page structure and styling, and WordPress with Elementor and Elementor Pro for editable websites.",
    items: technologyStack,
  },
  freelanceContactHref,
}

export const figmaToWebsiteFaqId = "faqs"
export const figmaToWebsiteFaqTitle = "Questions about Figma to website development"
export const figmaToWebsiteFaqIntro =
  "What to prepare, how to choose a platform and what we agree before the build."

// Buying questions in plain text (no FAQPage markup). Availability is stated on the full-time card only.
export const figmaToWebsiteFaqs: readonly FaqItem[] = [
  {
    question: "What does Figma to website development include?",
    answer:
      "It means implementing a design file as working web pages. For my service, the scope can include responsive layouts, reusable components or Elementor sections, agreed interactions and a code or editing handover. Backend features, content creation and third-party integrations are reviewed separately before they are included.",
  },
  {
    question: "Can you build my Figma design in React or WordPress?",
    answer:
      "Yes. I offer Figma to React development and Figma to WordPress implementation using Elementor. React can fit custom interfaces or an existing application; WordPress can fit a website your team needs to edit visually. I can also discuss HTML, CSS and JavaScript for a simpler frontend deliverable.",
  },
  {
    question: "Can you improve the design before building it?",
    answer:
      "Yes, we can include a focused design-refinement stage. I can review visual hierarchy, typography, spacing, responsive layouts and interaction details. Changes are discussed and agreed before implementation. The scope is defined around your page or interface rather than assuming a full branding or UX-research project.",
  },
  {
    question: "What if I only have a desktop Figma design?",
    answer:
      "I can propose how the layout adapts to tablet and mobile. We agree on content order, navigation, image treatment and key actions before finalising the responsive build. If your designer has specific mobile requirements, include those in the handoff.",
  },
  {
    question: "Will the finished website match my design exactly?",
    answer:
      "The approved design is the reference for typography, spacing, colours and layout. I review the implementation against it and discuss any differences caused by responsive behaviour, fonts, content or platform constraints. I do not promise identical rendering on every device and browser.",
  },
  {
    question: "Will I be able to edit the website after handover?",
    answer:
      "With WordPress and Elementor, we plan which content and sections you can edit. A React or HTML build needs its own editing approach; a CMS or visual editor is not automatically included. We agree on the handover and any editing requirements before development.",
  },
  {
    question: "How much does Figma to website development cost, and how long does it take?",
    answer:
      "Cost and timing depend on the number of unique layouts, interactions, responsive designs, content readiness and integrations. Share the design and requirements so I can review the work and discuss an estimate. Any paid themes, plugins or other required services are identified during scoping.",
  },
  {
    question: "Is this a Figma-to-code converter or a development service?",
    answer:
      "This is a development service. We discuss your requirements, agree on the implementation and review the finished work. You do not need to select an export plugin or know the right technical stack before getting in touch.",
  },
  {
    question: "Will the website be search-friendly?",
    answer:
      "We can include page titles, descriptions, heading structure, crawlable content and image optimisation in the agreed scope. The setup depends on the platform and deployment. These foundations support discoverability, but a website build does not guarantee rankings, organic traffic or AI citations.",
  },
]

// The landing-page service exists in this repository, so the brief's optional sentence links to it.
export const landingPageNote: InlineLinkText = {
  text: "Need a focused page for a campaign or launch? Explore my landing-page development service.",
  link: { text: "landing-page development service", href: "/landing-page-development" },
}

export const figmaToWebsiteClosing = {
  title: "Let’s turn your design into a working website",
  description:
    "Share your Figma design, preferred platform and what the website needs to do. We can discuss the implementation and any design refinements before the build.",
  note: landingPageNote,
} as const
