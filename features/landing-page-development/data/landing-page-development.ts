import type { FaqItem } from "@/components/shared/faq-section"
import { site } from "@/config/site"
import { contactHref } from "@/features/contact/enquiry"
import { chefkartPage } from "@/features/experience/data/chefkart"
import type {
  Capability,
  Engagement,
  HireEnquiryType,
  HireFact,
  HireHeroContent,
  HirePageMeta,
  HirePageSections,
  OptionComparison,
  TechItem,
  WorkItem,
  WorkVisual,
} from "@/features/hire-pages/types"
import { projects, type Project } from "@/features/projects/data/projects"

// Landing-page development SERVICE page (React and WordPress/Elementor), from the owner's research-revised
// brief of 21 November 2026. It reuses the hire-page layout with three deliberate differences: the project
// enquiry leads (hero, freelance card first, closing CTA), the H1 names the service rather than a role, and a
// React/WordPress comparison sits inside Services.
// Evidence boundaries: Mopedo is an independent React frontend demo (not a working transport business or a
// measured campaign); Rekha Maa Ki Rasoi is an independent family-business WordPress/Elementor website on a
// premium theme foundation (not a paid client project or a campaign-performance case study); ChefKart is a
// supporting link to the approved case study, described as team contributions. PPCROY agency client work is
// NOT cleared for publication: no client names, URLs, logos, screenshots, Figma files, details or the
// owner-reported project count anywhere on this page, its metadata, schema or social image. No testimonials,
// tenure, project totals, certifications, prices, turnaround, support entitlements, freelance capacity,
// conversion, ranking or traffic claims; no advertising management, CRO experiments, CRM integrations or
// guaranteed performance scores as standard deliverables. Availability appears on the full-time card only.
export const landingPageDevelopmentPage = {
  path: "/landing-page-development",
  breadcrumb: "Landing Page Development",
  title: "Landing Page Development Services | Anuj Dhanuka",
  description:
    "React and WordPress landing page development by Anuj Dhanuka. Explore relevant work and discuss a responsive page for your campaign, service or product launch.",
  // Implemented 21 November 2026; update both dates (and the sitemap follows) if first deployed later.
  published: "2026-11-21",
  lastModified: "2026-11-21",
} as const satisfies HirePageMeta

export const landingPageDevelopmentImageAlt =
  "Anuj Dhanuka, landing page development with React and WordPress/Elementor."

// The service page leads with the project enquiry; role pages keep the full-time default.
export const landingPagePrimaryEnquiry: HireEnquiryType = "freelance"

// Each button preselects its enquiry type on the Contact page; the visitor can still change it.
export const freelanceContactHref = contactHref("freelance", "landing-page-development")
export const fullTimeContactHref = contactHref("full-time", "landing-page-development")
export const workSectionId = "work"

const mopedoProject = projects.find((project) => project.id === "mopedo")
const rekhaProject = projects.find((project) => project.id === "rekha-maa-ki-rasoi")

const caseStudyPath = (project: Project | undefined) =>
  project?.caseStudy ? `/projects/${project.caseStudy.slug}` : "/projects"

export const mopedoCaseStudyPath = caseStudyPath(mopedoProject)
export const rekhaCaseStudyPath = caseStudyPath(rekhaProject)

export const heroFacts: readonly HireFact[] = [
  { label: site.location },
  { label: "React frontend demo", href: mopedoCaseStudyPath },
  { label: "WordPress business website", href: rekhaCaseStudyPath },
]

export const landingPageDevelopmentHero = {
  eyebrow: "React · WordPress · Elementor",
  title: "Landing Page Development",
  titleAccent: "Services",
  intro:
    "I’m Anuj Dhanuka. I build responsive landing pages with React and WordPress/Elementor for product launches, service enquiries and campaigns. From your design or brief, I shape a clear page journey with readable content, purposeful interactions and a straightforward next step.",
  facts: heroFacts,
  portraitAlt: "Anuj Dhanuka, landing page developer based in India",
  fullTimeLabel: "Discuss a Full-time Role",
  freelanceLabel: "Discuss a Landing Page",
} as const satisfies HireHeroContent

export const landingPageDevelopmentSections = [
  { href: `#${workSectionId}`, label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#work-together", label: "Work together" },
  { href: "#process", label: "Process" },
  { href: "#technologies", label: "Technologies" },
  { href: "#faqs", label: "FAQs" },
] as const satisfies HirePageSections["nav"]

// A canonical case-study screenshot (dimensions and alt text from the project record) in the shared
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

const mopedoVisual = screenshotVisual(mopedoProject, "/Projects_images/Mopedo.webp")
const rekhaVisual = screenshotVisual(rekhaProject, "/project-case-studies/rekha/pricing-2026.webp")

export const selectedWork: readonly WorkItem[] = [
  ...(mopedoProject && mopedoVisual
    ? [
        {
          id: "mopedo",
          kind: "Independent project",
          title: "Mopedo, a React frontend demo",
          summary:
            "I designed and built Mopedo as a responsive React frontend demo for bike-taxi, food-delivery and goods-delivery services. It shows how I organise service information and reuse components across pages.",
          highlights: [
            {
              label: "Structure",
              text: "Home, About, Services and Contact views with shared navigation.",
            },
            { label: "Components", text: "Reusable React sections and mobile-friendly navigation." },
            {
              label: "Scope",
              text: "An independent frontend demonstration, with public source code and a live demo.",
            },
          ],
          stack: ["React", "JavaScript", "React Router", "styled-components"],
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
          title: "Rekha Maa Ki Rasoi, a WordPress business website",
          summary:
            "I turned my mother’s homemade-food business idea into a WordPress website, building its content and Elementor layouts on a premium theme foundation.",
          highlights: [
            {
              label: "Journey",
              text: "Meal plans, pricing and enquiry options organised into one page.",
            },
            {
              label: "Mobile",
              text: "Cards, imagery and contact actions adapted for smaller screens.",
            },
            {
              label: "Delivery",
              text: "Content, WordPress setup, forms, domain, hosting and deployment.",
            },
          ],
          stack: ["WordPress", "Elementor", "Content structure", "Responsive design"],
          visual: rekhaVisual,
          // Shared project buttons: live project, then case study (no public source exists).
          project: rekhaProject,
        } satisfies WorkItem,
      ]
    : []),
]

export const workIntro =
  "Explore a React frontend demo and a WordPress business website that demonstrate responsive layouts, content structure and clear visitor journeys."

export const capabilities: readonly Capability[] = [
  {
    title: "React landing page development",
    body: "Build a custom page with reusable React components, responsive sections and interactive elements. This can suit a standalone launch or a new page within an existing React website. We agree the forms, data connections and deployment requirements before development.",
    icon: "interactive",
  },
  {
    title: "WordPress and Elementor landing pages",
    body: "Build an editable page within your WordPress website using Elementor. I organise the offer, supporting content and contact sections around the campaign goal, while working with your existing theme and the features your setup supports.",
    icon: "website",
  },
  {
    title: "Design-to-page implementation",
    body: "Turn a supplied Figma design or approved layout into a responsive page. We review the sections, assets, interaction states and mobile behaviour before building in React or WordPress/Elementor. Missing design decisions are agreed during review.",
    icon: "responsive",
  },
  {
    title: "Existing landing page improvements",
    body: "Refine an existing page’s structure, spacing, mobile presentation and calls to action. Share the current URL and the issue you want to address so we can agree a focused change, rather than assuming the entire page needs rebuilding.",
    icon: "theme",
  },
]

// Neither platform is presented as faster, better for SEO or higher-converting.
export const platformComparison: OptionComparison = {
  title: "React or WordPress for your landing page?",
  intro:
    "The choice depends on your existing website, required interactions and who will update the content.",
  needLabel: "Need",
  options: [
    { label: "React", icon: "react" },
    { label: "WordPress with Elementor", icon: "wordpress" },
  ],
  rows: [
    {
      need: "Existing setup",
      icon: "website",
      values: [
        "Fits a React website or a separately scoped React build.",
        "Fits an existing WordPress website and compatible theme.",
      ],
    },
    {
      need: "Content updates",
      icon: "edit",
      values: [
        "Usually handled in code unless an editing system is included.",
        "Text, images and supported layouts can be edited visually.",
      ],
    },
    {
      need: "Custom behaviour",
      icon: "interactive",
      values: [
        "Components can manage interactions and connect to agreed APIs.",
        "Behaviour depends on the builder, plugins and agreed customisation.",
      ],
    },
    {
      need: "Handover",
      icon: "handover",
      values: [
        "Source code and deployment details are agreed in scope.",
        "Page editing, account access and required licences are agreed in scope.",
      ],
    },
  ],
  // Both routes are published and in the sitemap. They share one row with "Discuss your landing page".
  links: [
    { label: "Explore my React work", shortLabel: "React work", href: "/react-developer" },
    {
      label: "Explore my WordPress experience",
      shortLabel: "WordPress",
      href: "/wordpress-developer",
    },
  ],
}

// Freelance first on this service page.
export const engagements: readonly Engagement[] = [
  {
    id: "freelance",
    icon: "project",
    label: "Freelance projects",
    title: "Freelance landing page development",
    summary:
      "Work with me as your freelance landing page developer for a new page, an approved design or a scoped improvement to an existing site. I’m based in India and work with React and WordPress/Elementor, with responsibilities and review points agreed around your brief.",
    share: {
      heading: "Share:",
      items: [
        "The offer, audience and main action visitors should take",
        "Your current website, design file and available content",
        "Required features, budget range and target launch date",
      ],
    },
    cta: {
      label: "Discuss a Landing Page",
      href: freelanceContactHref,
      analytics: "discuss_freelance_project",
    },
    facts: ["React pages", "WordPress/Elementor", "Design implementation"],
    factsLabel: "Freelance services",
    links: [],
    // Quotable line under the button, as on the other hire pages' freelance cards (copy adjustment).
    footnote:
      "Freelance landing page developer in India for React and WordPress/Elementor pages for launches, services and campaigns.",
  },
  {
    id: "full-time",
    icon: "role",
    label: "Full-time roles",
    title: "Full-time frontend opportunities",
    summary:
      "Hiring for a team that builds web interfaces and business websites? My experience includes React development and WordPress/Elementor implementation. Share the role and responsibilities so we can discuss the fit.",
    share: {
      heading: "Share:",
      items: [
        "Your product, website or client-delivery workflow",
        "The technical responsibilities and expected ownership",
        "Working arrangement, location and hiring timeline",
      ],
    },
    cta: {
      label: "Discuss a Full-time Role",
      href: fullTimeContactHref,
      analytics: "discuss_full_time_role",
    },
    // Owner-approved availability from config/site.ts (full-time card only), then the role focus pills.
    facts: [site.availability, site.openTo, "React", "Responsive interfaces", "WordPress/Elementor"],
    factsLabel: "Availability and focus for full-time roles",
    links: [
      { label: "View my experience", shortLabel: "Experience", href: "/experience" },
      { label: "View my resume", shortLabel: "Resume", href: site.resumeHref, pdf: true, external: true },
      { label: "Connect on LinkedIn", shortLabel: "LinkedIn", href: site.linkedIn, external: true },
    ],
  },
]

export const approachSteps = [
  {
    title: "Define the goal",
    body: "Review the offer, audience, traffic source and action you want visitors to take.",
  },
  {
    title: "Plan the page",
    body: "Agree the content, design, platform, forms, responsibilities and review points.",
  },
  {
    title: "Build and review",
    body: "Develop the page and review its layout, interactions and behaviour across screen sizes.",
  },
  {
    title: "Check and hand over",
    body: "Check agreed links and forms, prepare deployment, and explain updates and next steps.",
  },
] as const

// Tools already documented as the owner's work elsewhere on the site, chosen by the owner on 21 November 2026:
// the React build stack (React and Frontend pages), shared foundations, then the owner-confirmed WordPress
// tools from /wordpress-developer. `kind` describes the tool, not a claim about experience. Integrations
// (REST APIs), state management, store tools and SEO/performance plugins are deliberately left off.
export const technologyStack: readonly TechItem[] = [
  { name: "React", kind: "UI library", icon: "react" },
  { name: "Next.js", kind: "React framework", icon: "nextjs" },
  { name: "JavaScript", kind: "Language", icon: "javascript" },
  { name: "TypeScript", kind: "Typed JavaScript", icon: "typescript" },
  { name: "Tailwind CSS", kind: "Utility-first CSS", icon: "tailwind" },
  { name: "HTML", kind: "Markup", icon: "html" },
  { name: "CSS", kind: "Styling", icon: "css" },
  { name: "Figma", kind: "Design handoff", icon: "figma" },
  { name: "Git", kind: "Version control", icon: "git" },
  { name: "WordPress", kind: "Content management", icon: "wordpress" },
  { name: "Elementor", kind: "WordPress page builder", icon: "elementor" },
  { name: "Elementor Pro", kind: "Theme builder and popups", icon: "elementorPro" },
  { name: "Contact forms", kind: "Enquiry form plugins", icon: "forms" },
  { name: "Responsive settings", kind: "Elementor breakpoints", icon: "breakpoints" },
  { name: "Site Kit and Analytics", kind: "Analytics and Search Console", icon: "analytics" },
]

export const landingPageDevelopmentContent: HirePageSections = {
  navLabel: "Landing page development sections",
  nav: landingPageDevelopmentSections,
  work: {
    id: workSectionId,
    title: "Selected React and WordPress work",
    intro: workIntro,
    items: selectedWork,
    note: {
      text: "My professional React experience also includes team contributions to ChefKart’s web interfaces.",
      link: {
        text: "team contributions to ChefKart’s web interfaces",
        href: chefkartPage.path as `/${string}`,
      },
    },
  },
  capabilities: {
    id: "services",
    label: "Services",
    title: "Landing page development for your next launch",
    intro:
      "A focused page can explain one offer and guide visitors towards an enquiry, signup or next step. I work with founders, businesses and agencies on the layout and implementation, using React or WordPress to suit the project.",
    ctaLabel: "Discuss your landing page",
    ctaShortLabel: "Discuss",
    items: capabilities,
    comparison: platformComparison,
  },
  engagement: {
    id: "work-together",
    intro: "Bring a defined landing-page project, or discuss a role involving React and website development.",
    items: engagements,
  },
  approach: {
    id: "process",
    title: "From your brief to a reviewed page",
    intro:
      "Agree the page’s purpose and platform first, then review the content, build and launch requirements.",
    steps: approachSteps,
  },
  technologies: {
    title: "Technologies behind the page",
    intro:
      "I build React pages with Next.js, JavaScript, TypeScript and Tailwind CSS, and WordPress pages with Elementor and Elementor Pro. HTML, CSS, Figma and Git support the build, and WordPress launches use contact forms, responsive settings, Site Kit and Analytics.",
    items: technologyStack,
  },
  freelanceContactHref,
}

export const landingPageDevelopmentFaqId = "faqs"
export const landingPageDevelopmentFaqTitle = "Questions about landing page development"
export const landingPageDevelopmentFaqIntro =
  "Answers about the build, platform choice, costs and what to prepare."

// Buying questions in plain text (no FAQPage markup). Availability is stated on the full-time card only.
export const landingPageDevelopmentFaqs: readonly FaqItem[] = [
  {
    question: "What do your landing page development services include?",
    answer:
      "The scope can cover page structure, responsive implementation, supplied-design adaptation, contact actions and launch preparation. Before starting, we agree the sections, platform, forms, integrations and handover requirements. Advertising management, ongoing optimisation and specialist integrations are separate discussions.",
  },
  {
    question: "Can you build my landing page in React?",
    answer:
      "Yes. I can build a React page with reusable components, responsive layouts and agreed interactions, either within an existing React website or as a separately scoped build. Mopedo shows my independent React frontend work, and my ChefKart case study explains my professional team contributions.",
  },
  {
    question: "Can you build it in WordPress using Elementor?",
    answer:
      "Yes. I use WordPress and Elementor to build pages that can be edited through a visual interface. We review your theme, plugins and required features first. Premium tools or licences are included only when needed and agreed.",
  },
  {
    question: "Can you work from my Figma design?",
    answer:
      "Yes. Share the design, assets and any mobile layouts or interaction notes. I review the handoff and implement the agreed design in React or WordPress/Elementor. If a layout or behaviour is missing, we agree it before that part of the build. Implementing a supplied design is distinct from creating the original design.",
  },
  {
    question: "Can you help if I do not have a finished design?",
    answer:
      "We can start with your offer, content, brand guidelines and reference pages, then agree the structure and visual direction. If you need extensive brand work, specialist copywriting or a separate design system, we should identify that before setting the development scope.",
  },
  {
    question: "Will you connect the enquiry form and analytics?",
    answer:
      "We first agree where enquiries should go and how to confirm a successful submission. We can then scope the form and any required event tracking around your existing setup. CRM integrations, advertising pixels and marketing automation require separate review; they are not assumed to be included.",
  },
  {
    question: "How much does a landing page cost, and how long will it take?",
    answer:
      "Cost and timing depend on the sections, design readiness, content, platform, interactions and integrations. Send your brief, budget range and target date so we can agree a realistic scope. Hosting, domain and paid plugin or theme costs should be identified separately.",
  },
  {
    question: "Will I be able to update the page after launch?",
    answer:
      "With WordPress and Elementor, you can usually edit supported text, images and page sections visually. A React page normally needs code changes and deployment unless a content-editing system is included. We agree the update process and handover responsibilities before building.",
  },
  {
    question: "Will the landing page rank on Google and generate leads?",
    answer:
      "A well-built page can make your offer clearer and easier to act on, but rankings, traffic and enquiries are not guaranteed. For a page intended for organic search, we plan readable content, headings and indexing requirements. Results also depend on the offer, competition, traffic quality and follow-up.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Send your website URL, the offer and audience, the main action visitors should take, brand assets, available copy and any design file. Include the platform, required forms or integrations, budget range and target date. Share approved proof or testimonials only if you have permission to use them.",
  },
]

export const landingPageDevelopmentClosing = {
  title: "Let’s build a page around your next offer",
  description:
    "Tell me what you are launching, who the page is for and what visitors should do next. We can plan the right React or WordPress build around your requirements.",
} as const
