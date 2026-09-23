import { site } from "@/config/site"

export type ExperienceAccent = "purple" | "blue" | "pink"
export type ExperienceRoleId = "chefkart" | "ppcroy" | "third-eye-lab"

export type ExperienceRole = {
  id: ExperienceRoleId
  position: string
  company: string
  logo: string
  logoAlt: string
  location: string
  workMode: "Onsite" | "Remote"
  type: "Full-time" | "Internship"
  duration: string
  description: string
  responsibilities: readonly string[]
  technologies: readonly string[]
  achievement: string
  isCurrent: boolean
  accent: ExperienceAccent
  cta?: {
    label: string
    href: string
    external?: boolean
  }
}

export const experienceRoles: readonly ExperienceRole[] = [
  {
    id: "chefkart",
    position: "Associate Software Engineer",
    company: "ChefKart",
    logo: "/logos/chefkart-logo.webp",
    logoAlt: "ChefKart logo",
    location: "Gurugram, Haryana",
    workMode: "Onsite",
    type: "Full-time",
    duration: "December 2025 – Present",
    description:
      "I contribute across ChefKart’s customer mobile application, public website, internal operations dashboard and payment platform, building interfaces used by customers and internal teams.",
    responsibilities: [
      "Build and improve React Native journeys for bookings, visits, wallets, payments, refunds, cancellations and party services.",
      "Contribute to React and Next.js interfaces across the public website, payment platform and internal operations dashboard.",
      "Implement product analytics for meaningful customer actions and support frontend debugging, UI quality and responsive behaviour.",
      "Collaborate with backend engineers, designers and product managers from requirement discussion through testing and release.",
    ],
    technologies: ["React Native", "React.js", "Next.js", "JavaScript", "Analytics", "Product UI"],
    achievement: "Recognised in Technology & Engineering · May 2026",
    isCurrent: true,
    accent: "purple",
    cta: {
      label: "View ChefKart recognition",
      href: site.recognitionUrl,
      external: true,
    },
  },
  {
    id: "ppcroy",
    position: "Junior Web Developer",
    company: "PPCROY TECH SOLUTIONS",
    logo: "/logos/ppcroy-logo.svg",
    logoAlt: "PPCROY Tech Solutions logo",
    location: "Remote",
    workMode: "Remote",
    type: "Full-time",
    duration: "October 2024 – December 2025",
    description:
      "I delivered more than 20 client projects across business websites, landing pages, e-commerce experiences and responsive frontend interfaces for different industries.",
    responsibilities: [
      "Developed responsive websites and interfaces with React.js, JavaScript, HTML and CSS.",
      "Built client solutions with WordPress, Shopify and Webflow according to business goals and platform requirements.",
      "Translated Figma files, design references and client requirements into polished, responsive experiences.",
      "Managed multiple projects while maintaining visual consistency, usability and delivery quality.",
    ],
    technologies: ["React.js", "JavaScript", "Figma", "WordPress", "Shopify", "Webflow"],
    achievement: "20+ client projects delivered across multiple domains",
    isCurrent: false,
    accent: "blue",
    cta: {
      label: "View selected client projects",
      href: "/projects#selected-work",
    },
  },
  {
    id: "third-eye-lab",
    position: "Associate Software Engineer Intern",
    company: "3rd Eye Lab",
    logo: "/logos/3rd-eye-lab-logo.png",
    logoAlt: "3rd Eye Lab logo",
    location: "Hyderabad",
    workMode: "Onsite",
    type: "Internship",
    duration: "April 2024 – June 2024",
    description:
      "I developed the Levels App, a React Native quiz application with category-based questions, dynamically loaded content and clear mobile navigation.",
    responsibilities: [
      "Developed mobile application screens using React Native CLI and JavaScript.",
      "Implemented category-based quiz flows and dynamic question loading.",
      "Applied Firebase and Git fundamentals while working in an onsite development environment.",
      "Completed the assigned project ahead of schedule and delivered additional features beyond the initial requirements.",
    ],
    technologies: ["React Native CLI", "JavaScript", "Firebase", "Git", "Mobile UI"],
    achievement: "Completed ahead of schedule with additional features",
    isCurrent: false,
    accent: "pink",
    cta: {
      label: "View the Levels App project",
      href: "/projects#project-levels-app",
    },
  },
] as const

export const experienceHighlights = [
  { value: "3", label: "Professional roles" },
  { value: "20+", label: "Client projects delivered" },
  { value: "4", label: "ChefKart product surfaces" },
] as const

export const productSurfaces = [
  {
    icon: "mobile",
    title: "Customer mobile application",
    description: "React Native journeys for bookings, visits, wallets, payments and service management.",
  },
  {
    icon: "website",
    title: "Public website",
    description: "Responsive React and Next.js interfaces that communicate services clearly across devices.",
  },
  {
    icon: "dashboard",
    title: "Operations dashboard",
    description: "Internal React modules that support teams managing day-to-day customer operations.",
  },
  {
    icon: "payment",
    title: "Payment platform",
    description: "Frontend experiences for payment-related workflows, states and customer communication.",
  },
] as const

export const deliveryApproach = [
  {
    title: "Understand the complete journey",
    description:
      "Clarify the user goal, business requirement, data states and edge cases before implementation.",
  },
  {
    title: "Build reusable interfaces",
    description:
      "Translate designs and product requirements into responsive components that stay consistent.",
  },
  {
    title: "Collaborate across disciplines",
    description:
      "Work with product, design and backend teammates to resolve dependencies and refine decisions.",
  },
  {
    title: "Validate and improve",
    description:
      "Test responsive behaviour, analytics, loading and error states before supporting a reliable release.",
  },
] as const
