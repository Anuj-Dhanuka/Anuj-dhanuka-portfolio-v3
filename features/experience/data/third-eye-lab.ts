import { site } from "@/config/site"

// Public-safe content for /experience/third-eye-lab.
// The internship assignment was company work, so the page explains the learning and delivery
// without exposing private source, internal screenshots or unverified product outcomes.

export const thirdEyeLabPage = {
  path: "/experience/third-eye-lab",
  published: "2026-11-07",
  // 4. Content date for the sitemap.
  lastModified: "2026-11-11",
  title: "3rd Eye Lab | React Native Internship | Anuj Dhanuka",
  description:
    "How Anuj Dhanuka moved from learning React Native to delivering a mobile assignment at 3rd Eye Lab using JavaScript, Firebase, Git and mobile UI fundamentals.",
} as const

export const thirdEyeLabHero = {
  eyebrow: "3rd Eye Lab · Associate Software Engineer Intern",
  title: "The internship that made mobile development",
  titleAccent: "feel real.",
  intro: [
    "At 3rd Eye Lab, I moved from guided learning into an onsite development environment and worked on a category-based quiz application using React Native CLI and JavaScript.",
    "The assignment was compact, but it taught me something important: a mobile screen only becomes useful when navigation, changing data, feedback and device behaviour work together as one journey.",
  ],
  stack: ["React Native CLI", "JavaScript", "Firebase", "Git", "Mobile UI", "Application Navigation"],
  // Illustration of the assignment's flow, deliberately unlike any real product UI.
  image: {
    src: "/experience/third-eye-lab/quiz-flow.webp",
    alt: "Illustration of a quiz app flow on three phones: choosing a category, answering a timed question and seeing the final score",
  },
} as const

// Duration, two counts the page shows (journey steps, foundations) and the delivery result.
export const thirdEyeLabProof = [
  { value: "2", label: "Months onsite" },
  { value: "4", label: "Journey steps" },
  { value: "5", label: "Foundations practised" },
  { value: "Early", label: "Assigned scope delivered" },
] as const

export const thirdEyeLabBeginning = {
  label: "The first step",
  title: "From isolated exercises to one connected mobile experience.",
  body: [
    "Before this internship, I had practised React Native concepts individually. At 3rd Eye Lab, I had to connect them inside a working application where one decision affected the next screen, the next state and the overall user journey.",
    "My assignment centred on a category-based quiz experience with dynamic content loading. That gave me a practical way to understand how application structure, navigation and data flow come together beyond a tutorial.",
  ],
  facts: [
    { label: "Role", value: "Associate Software Engineer Intern" },
    { label: "Where", value: "Onsite in Hyderabad" },
    { label: "When", value: "Apr – Jun 2024 · 2 months" },
    { label: "Built with", value: "React Native CLI · JavaScript · Firebase" },
  ],
  image: {
    src: "/experience/third-eye-lab/developer-desk.webp",
    alt: "Illustration of a developer desk with React Native code on a laptop, a quiz app on a phone and a sketched screen flow",
  },
} as const

export const thirdEyeLabJourney = {
  label: "The application flow",
  title: "A simple user journey still has several moving parts.",
  cta: { label: "Explore my projects", href: "/projects" },
  intro:
    "The work helped me stop thinking in disconnected screens and start thinking in transitions, state and feedback.",
  steps: [
    {
      number: "01",
      title: "Choose a category",
      body: "I made the category the clear starting point and carried that choice into the next screen.",
    },
    {
      number: "02",
      title: "Load the right content",
      body: "I used the selected category to load the matching questions instead of treating each screen as static.",
    },
    {
      number: "03",
      title: "Move through the quiz",
      body: "I kept progress visible and updated the interface as the user answered and moved on.",
    },
    {
      number: "04",
      title: "Close the feedback loop",
      body: "I showed the finished result clearly so the user knew what happened and what to do next.",
    },
  ],
} as const

export const thirdEyeLabFoundations = {
  label: "What I practised",
  title: "The foundations behind a dependable mobile flow.",
  cta: { label: "Explore my skills", href: "/skills" },
  intro:
    "The value of the internship was not one isolated feature. It was learning how the pieces of a mobile application depend on each other.",
  items: [
    {
      title: "React Native CLI",
      body: "Working inside a native project structure and understanding how a cross-platform application is organised.",
    },
    {
      title: "Component thinking",
      body: "Breaking interfaces into smaller pieces that could be understood, reused and improved independently.",
    },
    {
      title: "Navigation and state",
      body: "Carrying user choices and changing information through a multi-screen mobile journey.",
    },
    {
      title: "Firebase fundamentals",
      body: "Building familiarity with a backend service used by the application while keeping the interface responsive to data states.",
    },
    {
      title: "Git and iteration",
      body: "Using version control, testing changes and improving the assignment through repeated implementation and review.",
    },
  ],
} as const

export const thirdEyeLabDelivery = {
  label: "Delivery mindset",
  title: "Delivered ahead of schedule, then went further.",
  cta: { label: "Talk to me", href: "/contact" },
  body: [
    "I completed the assigned project ahead of schedule.",
    "What stayed with me was the habit behind that result: understand the expected scope, make the core flow reliable, then use the remaining time to improve the experience instead of stopping at the first working version.",
  ],
  principles: [
    "Clarify the complete flow before polishing individual screens",
    "Make the assigned scope work reliably first",
    "Test transitions and changing states, not only static layouts",
    "Use extra time to improve useful parts of the experience",
  ],
  // Proportions are illustrative: the copy states "ahead of schedule", not by how much.
  timeline: {
    track: "Assigned time",
    delivered: "Delivered early",
    further: "Used to go further",
  },
} as const

export const thirdEyeLabProgression = {
  label: "What carried forward",
  title: "The first layer of a broader frontend journey.",
  intro:
    "The role gave me the confidence to work on mobile interfaces, but its larger value became visible in the roles that followed.",
  stages: [
    {
      company: "3rd Eye Lab",
      period: "Apr – Jun 2024",
      focus: "Mobile fundamentals",
      body: "React Native CLI, application navigation, dynamic content, Firebase and Git.",
      href: "/experience/third-eye-lab",
    },
    {
      company: "PPCROY",
      period: "Oct 2024 – Dec 2025",
      focus: "Client delivery",
      body: "Responsive web development, UI/UX judgment, SEO, multiple platforms and direct client communication.",
      href: "/experience/ppcroy",
    },
    {
      company: "ChefKart",
      period: "Dec 2025 – Oct 2026",
      focus: "Production ownership",
      body: "Customer mobile journeys, React and Next.js products, payments, internal tools and cross-functional delivery.",
      href: "/experience/chefkart",
    },
  ],
} as const

export const thirdEyeLabClosing = {
  title: "From mobile foundations to product ownership.",
  // Ends with the same job-search line as the PPCROY closing.
  description:
    "I bring React Native beginnings, client-facing delivery experience and production work across customer and internal products. I'm looking for frontend roles where I can build with React, React Native, Next.js and TypeScript.",
  // Same wording as the homepage, Contact and PPCROY pages, from the shared site config.
  availability: [site.availability, `Based in ${site.location}`, site.openTo],
  contactLabel: "Discuss a frontend opportunity",
  resumeLabel: "Download my resume",
  linkedInLabel: "Connect on LinkedIn",
} as const
