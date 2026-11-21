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
} from "@/features/hire-pages/types"
import { projects } from "@/features/projects/data/projects"

// Hire-intent page for React Native roles and freelance projects: one page for both audiences (owner
// approved; no separate freelance, plural or city pages). Copy is the owner's brief of 21 November 2026.
// The site-wide identity stays "Software Engineer | Frontend Developer"; this page describes a mobile
// specialisation and never changes employment titles. ChefKart is past employment and a team contribution;
// QuizWar is an independent React Native CLI app with public source and no store release. The owner-approved
// availability in config/site.ts applies to full-time roles only. No rates, response times, years of
// experience, client counts, testimonials, downloads, store releases, Expo/EAS, native Swift/Kotlin modules,
// backend ownership or verified Android/iOS release parity.
export const reactNativeDeveloperPage = {
  path: "/react-native-developer",
  breadcrumb: "React Native Developer",
  title: "React Native Developer for Hire | Anuj Dhanuka",
  description:
    "Hire Anuj Dhanuka, a React Native developer in India, for full-time roles or freelance projects. Explore mobile app work at ChefKart and the QuizWar project.",
  // Implemented 21 November 2026; update both dates if the page is first deployed on a later day.
  published: "2026-11-21",
  lastModified: "2026-11-21",
} as const satisfies HirePageMeta

export const reactNativeDeveloperImageAlt =
  "Anuj Dhanuka, React Native developer for full-time roles and freelance projects."

// Each button preselects its enquiry type on the Contact page; the visitor can still change it.
export const fullTimeContactHref = contactHref("full-time", "react-native-developer")
export const freelanceContactHref = contactHref("freelance", "react-native-developer")
export const workSectionId = "selected-react-native-work"

const chefkartRole = experienceRoles.find((role) => role.id === "chefkart")
const quizwarProject = projects.find((project) => project.id === "quizwar")

// Role and dates from the shared experience data, so this page cannot drift from /experience.
const chefkartRoleLine = chefkartRole ? `${chefkartRole.position} · ${chefkartRole.duration}` : undefined

export const heroFacts: readonly HireFact[] = [
  { label: site.location },
  ...(chefkartRole
    ? [{ label: `${chefkartRole.position}, ChefKart · ${chefkartRole.duration}`, href: chefkartPage.path }]
    : []),
  { label: "Independent React Native app: QuizWar", href: "/projects/quizwar" },
]

export const reactNativeDeveloperHero = {
  eyebrow: "Full-time roles · Freelance projects",
  title: "React Native Developer",
  titleAccent: "for Hire",
  intro:
    "I’m Anuj Dhanuka, a React Native developer in India. I build mobile interfaces, connect APIs and handle the states around everyday app journeys. My work includes ChefKart’s customer app and QuizWar, an independent quiz application. I’m open to full-time roles and freelance React Native projects.",
  facts: heroFacts,
  portraitAlt: "Anuj Dhanuka, React Native developer based in India",
  fullTimeLabel: "Discuss a full-time role",
  freelanceLabel: "Discuss a freelance project",
} as const satisfies HireHeroContent

export const reactNativeDeveloperSections = [
  { href: `#${workSectionId}`, label: "Selected work" },
  { href: "#capabilities", label: "What I build" },
  { href: "#work-with-me", label: "Ways to work" },
  { href: "#approach", label: "Approach" },
  { href: "#faq", label: "Questions" },
] as const satisfies HirePageSections["nav"]

const quizwarScreens = ["/quizwar-login.webp", "/quizwar-categories.webp", "/quizwar-quiz.webp"].flatMap(
  (src) => quizwarProject?.caseStudy?.screenshots.filter((screen) => screen.src === src) ?? [],
)

export const selectedWork: readonly WorkItem[] = [
  {
    id: "chefkart",
    kind: "Team contribution",
    meta: chefkartRoleLine,
    title: "Booking and payment journeys at ChefKart",
    summary:
      "At ChefKart, I contributed to the React Native customer app, working with product, design, backend and QA teams on booking journeys, payments and the screens around them.",
    // Scope from the reviewed case study (features/experience/data/chefkart.ts); no internal names,
    // endpoints, thresholds or activity counts.
    highlights: [
      {
        label: "Booking",
        text: "Dish discovery, cart and booking screens, followed by visit and party-booking journeys.",
      },
      {
        label: "Payments",
        text: "Shared payment interfaces, wallet flows and checks for unclear payment results.",
      },
      {
        label: "State",
        text: "Saved catalogue data, API-connected screens and handling for loading, cancellations and errors.",
      },
    ],
    stack: ["React Native", "TypeScript", "Redux", "REST APIs", "Razorpay"],
    // The case study's payments wireframe, distinct from the React page's city-page visual.
    visual: {
      type: "illustration",
      name: "chefkart-payments",
      caption: "Illustration of a payment journey, not a real ChefKart screen.",
    },
    primaryLink: { label: "Read my ChefKart case study", href: chefkartPage.path },
  },
  {
    id: "quizwar",
    kind: "Independent project",
    title: "QuizWar, an independently built React Native app",
    summary:
      "I built QuizWar around phone-number sign-in, timed quizzes and player progress. Its case study links to the public implementation and explains the application’s state, navigation and Firebase integration.",
    highlights: [
      { label: "Accounts", text: "OTP sign-in, registration, profile editing and profile-image uploads." },
      { label: "Gameplay", text: "Category selection, timed questions, answer feedback and results." },
      {
        label: "Progress",
        text: "A ranked performance dashboard, with selected account and performance state persisted between launches.",
      },
    ],
    stack: [
      "React Native CLI",
      "JavaScript",
      "Redux Toolkit",
      "Redux Persist",
      "React Navigation",
      "Firebase",
    ],
    // Existing screenshots with their case-study descriptions; no store badge, live indicator or demo link.
    visual: {
      type: "phones",
      screens: quizwarScreens,
      caption: "QuizWar screens: sign-in, category selection and timed gameplay.",
    },
    // Shared project buttons: case study, then the public GitHub repository (QuizWar has no live link).
    project: quizwarProject,
  },
]

export const workIntro =
  "A customer application I contributed to within a team, and an independent app with public source code. Explore what I built and the decisions behind it."

export const capabilities: readonly Capability[] = [
  {
    title: "Mobile interfaces and navigation",
    body: "Build reusable screens and navigation for onboarding, browsing, bookings, profiles and other product journeys. I focus on layouts, interaction states and how people move through the app.",
    icon: "mobile",
  },
  {
    title: "API integration and application state",
    body: "Connect screens to backend APIs and manage loading, empty results, errors and updates. My work includes Redux-based state and persisting selected data between app launches.",
    icon: "api",
  },
  {
    title: "Authentication and Firebase features",
    body: "Implement account flows and Firebase-connected features. In QuizWar, I built phone-number sign-in, profile management, performance records and profile-image uploads.",
    icon: "auth",
  },
  {
    title: "Booking and payment flows",
    body: "Build the interfaces around bookings, wallets and payments, including cancellations and unclear results. My ChefKart work involved shared payment UI and checking status with the server before deciding what to show.",
    icon: "payments",
  },
]

export const engagements: readonly Engagement[] = [
  {
    id: "full-time",
    icon: "role",
    label: "Full-time roles",
    title: "Hire a React Native developer for your team",
    summary:
      "I’m interested in full-time roles where I can contribute to mobile features, collaborate with product and engineering teams, and take responsibility for the frontend work from requirements through testing.",
    share: {
      heading: "Share the opportunity:",
      items: [
        "The role and mobile product",
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
    title: "Work with me on a freelance React Native project",
    summary:
      "I’m open to freelance React Native work on mobile screens, API-connected features, account flows and improvements to existing applications. We’ll review the requirements and codebase before agreeing on scope and availability.",
    share: {
      heading: "Share your project:",
      items: [
        "What you want to build or improve",
        "Existing app, designs and API details",
        "Target timeline and indicative budget",
      ],
      note: "We can define the screens, integrations, testing and handover needed for the project.",
    },
    cta: {
      label: "Discuss a freelance project",
      href: freelanceContactHref,
      analytics: "discuss_freelance_project",
    },
    facts: ["Mobile interfaces", "API integration", "Firebase features", "Existing apps"],
    factsLabel: "Freelance services",
    links: [],
    footnote:
      "Freelance React Native developer in India for mobile interfaces, connected app features and frontend improvements.",
  },
]

export const approachSteps = [
  {
    title: "Understand the app",
    body: "Review the users, existing code, designs and the problem the feature needs to solve.",
  },
  {
    title: "Agree on the scope",
    body: "Define screens, APIs, target platforms, testing responsibilities and deliverables.",
  },
  {
    title: "Build and review",
    body: "Develop in manageable steps, review the flows and check loading, success and error states.",
  },
  {
    title: "Test and hand over",
    body: "Test the agreed journeys and devices, address feedback and document the handover.",
  },
] as const

// Only tools documented as Anuj's work: ChefKart's case-study stack and QuizWar's verified source.
export const technologyStack: readonly TechItem[] = [
  { name: "React Native", kind: "Mobile framework", icon: "reactNative" },
  { name: "JavaScript", kind: "Language", icon: "javascript" },
  { name: "TypeScript", kind: "Typed JavaScript", icon: "typescript" },
  { name: "REST APIs", kind: "API integration", icon: "restApi" },
  { name: "Redux Toolkit", kind: "State management", icon: "redux" },
  { name: "Redux Persist", kind: "State persistence", icon: "redux" },
  { name: "React Navigation", kind: "Navigation", icon: "navigation" },
  {
    name: "Firebase Authentication",
    breakableName: "Firebase Authen\u00ADtication",
    kind: "Authentication",
    icon: "firebase",
  },
  { name: "Cloud Firestore", kind: "Database", icon: "firestore" },
  { name: "Firebase Storage", kind: "Media storage", icon: "storage" },
]

export const reactNativeDeveloperContent: HirePageSections = {
  navLabel: "React Native developer page sections",
  nav: reactNativeDeveloperSections,
  work: {
    id: workSectionId,
    title: "Selected React Native work",
    intro: workIntro,
    items: selectedWork,
  },
  capabilities: {
    title: "What I can help you build",
    intro:
      "From a new mobile flow to improvements in an existing app, I can help turn designs and requirements into connected React Native screens.",
    ctaLabel: "Discuss a freelance project",
    items: capabilities,
  },
  engagement: {
    intro: "Hiring for your team or planning a mobile feature? Choose the conversation that fits your needs.",
    items: engagements,
  },
  approach: {
    intro: "A clear path from understanding the app to reviewing the work and handing it over.",
    ctaLabel: "Discuss your project",
    steps: approachSteps,
  },
  technologies: {
    // One quotable sentence naming every tile, for search and AI answers.
    intro:
      "My mobile work includes React Native, JavaScript, TypeScript and REST APIs. QuizWar uses Redux Toolkit, Redux Persist, React Navigation, Firebase Authentication, Cloud Firestore and Firebase Storage.",
    items: technologyStack,
  },
  freelanceContactHref,
}

export const reactNativeDeveloperFaqIntro =
  "Answers for recruiters and clients considering a React Native role or project."

// Real hiring questions in plain text (no FAQPage markup). Availability is stated on the full-time path only.
export const reactNativeDeveloperFaqs: readonly FaqItem[] = [
  {
    question: "Are you available for full-time and freelance React Native work?",
    answer:
      "I’m open to discussing both. For full-time roles, my current availability is shown above. For freelance work, we’ll review the scope, timing and existing commitments before agreeing on a start date.",
  },
  {
    question: "Can you work on an existing React Native application?",
    answer:
      "Yes. I can help with additional screens, navigation, API integration, account flows and frontend improvements. I would first review the relevant code, dependencies and requirements to understand the work involved.",
  },
  {
    question: "What React Native projects can I review?",
    answer:
      "My ChefKart case study explains my contribution to a customer app within a product team. QuizWar is an independent React Native application with a case study and public source code. Together, they show mobile interfaces, state management and API or Firebase integration.",
    links: [
      { label: "ChefKart case study", href: chefkartPage.path },
      { label: "QuizWar case study", href: "/projects/quizwar" },
    ],
  },
  {
    question: "Can we discuss Android and iOS requirements?",
    answer:
      "Yes. React Native supports both platforms. We’ll agree on the target platforms, device testing, native integrations and release responsibilities for your project before confirming the scope.",
  },
  {
    question: "Do you work with Firebase and backend APIs?",
    answer:
      "Yes. QuizWar uses Firebase Authentication, Cloud Firestore and Firebase Storage. My work also includes connecting mobile interfaces to backend APIs. Developing a new backend would need to be scoped separately from the mobile interface work.",
  },
  {
    question: "What should I send for a freelance enquiry?",
    answer:
      "Send a short description of the app or feature, any existing designs or codebase details, API availability, target platforms, your timeline and an indicative budget. That gives us a useful starting point for discussing fit and scope.",
  },
  {
    question: "How much will a React Native project cost?",
    answer:
      "The estimate depends on the screens, integrations, existing code, platform requirements and testing involved. We can discuss pricing after reviewing the scope and expected deliverables.",
  },
]

export const reactNativeDeveloperClosing = {
  title: "Let’s discuss your mobile app or role",
  description:
    "Need a React Native developer for your team or help with a mobile feature? Share what you’re building and where you need support.",
} as const
