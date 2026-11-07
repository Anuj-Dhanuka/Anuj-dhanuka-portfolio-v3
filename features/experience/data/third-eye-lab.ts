// Public-safe content for /experience/third-eye-lab.
// The internship assignment was company work, so the page explains the learning and delivery
// without exposing private source, internal screenshots or unverified product outcomes.

export const thirdEyeLabPage = {
  path: "/experience/third-eye-lab",
  lastModified: "2026-11-07",
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
  meta: "Internship · Onsite in Hyderabad · April 2024 to June 2024",
  stack: ["React Native CLI", "JavaScript", "Firebase", "Git", "Mobile UI", "Application Navigation"],
} as const

export const thirdEyeLabProof = [
  { value: "3", label: "Months onsite" },
  { value: "1", label: "Mobile assignment" },
  { value: "5", label: "Core foundations" },
  { value: "Early", label: "Assigned scope delivered" },
] as const

export const thirdEyeLabBeginning = {
  label: "The first step",
  title: "From isolated exercises to one connected mobile experience.",
  body: [
    "Before this internship, I had practised React Native concepts individually. At 3rd Eye Lab, I had to connect them inside a working application where one decision affected the next screen, the next state and the overall user journey.",
    "My assignment centred on a category-based quiz experience with dynamic content loading. That gave me a practical way to understand how application structure, navigation and data flow come together beyond a tutorial.",
  ],
} as const

export const thirdEyeLabJourney = {
  label: "The application flow",
  title: "A simple user journey still has several moving parts.",
  intro:
    "The work helped me stop thinking in disconnected screens and start thinking in transitions, state and feedback.",
  steps: [
    {
      number: "01",
      title: "Choose a category",
      body: "Give the user a clear starting point and carry that choice into the next part of the experience.",
    },
    {
      number: "02",
      title: "Load the right content",
      body: "Use the selected category to present the relevant questions instead of treating every screen as static.",
    },
    {
      number: "03",
      title: "Move through the quiz",
      body: "Keep progress understandable while updating the interface as the user answers and advances.",
    },
    {
      number: "04",
      title: "Close the feedback loop",
      body: "Reflect the completed interaction clearly so the user understands what happened and what comes next.",
    },
  ],
} as const

export const thirdEyeLabFoundations = {
  label: "What I practised",
  title: "The foundations behind a dependable mobile flow.",
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
  title: "Finishing early was useful only because I used the time to go further.",
  body: [
    "I completed the assigned project ahead of schedule and delivered additional features beyond the initial requirements.",
    "What stayed with me was the habit behind that result: understand the expected scope, make the core flow reliable, then use the remaining time to improve the experience instead of stopping at the first working version.",
  ],
  principles: [
    "Clarify the complete flow before polishing individual screens",
    "Make the assigned scope work reliably first",
    "Test transitions and changing states, not only static layouts",
    "Use extra time to improve useful parts of the experience",
  ],
} as const

export const thirdEyeLabProgression = {
  label: "What carried forward",
  title: "A small internship became the first layer of a much broader frontend journey.",
  intro:
    "The role gave me the confidence to work on mobile interfaces, but its larger value became visible in the roles that followed.",
  stages: [
    {
      company: "3rd Eye Lab",
      period: "Apr 2024 – Jun 2024",
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
  title:
    "Looking for a frontend developer who understands how small foundations grow into real product ownership?",
  description:
    "I bring React Native beginnings, client-facing delivery experience and production work across customer and internal products.",
} as const
