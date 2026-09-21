export type SkillIconKey = "frontend" | "mobile" | "design" | "platform" | "quality" | "ai"

export type SkillGroup = {
  id: string
  title: string
  description: string
  skills: readonly string[]
  icon: SkillIconKey
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "frontend-engineering",
    title: "Frontend engineering",
    description:
      "Building responsive interfaces and reusable component systems for customer-facing and internal web products.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Component State",
    ],
    icon: "frontend",
  },
  {
    id: "mobile-development",
    title: "Mobile development",
    description:
      "Developing React Native journeys with clear navigation, connected data and layouts that work across devices.",
    skills: [
      "React Native",
      "React Native CLI",
      "Mobile Navigation",
      "API Integration",
      "Firebase",
      "Cross-Device UI",
    ],
    icon: "mobile",
  },
  {
    id: "design-to-code",
    title: "Design-to-code",
    description:
      "Translating visual direction and product requirements into consistent, usable and responsive interfaces.",
    skills: [
      "Figma",
      "Responsive Layouts",
      "Visual Hierarchy",
      "Design Systems",
      "Interaction States",
      "UI Refinement",
    ],
    icon: "design",
  },
  {
    id: "platforms-commerce",
    title: "Platforms and commerce",
    description:
      "Creating and customising business websites across content, commerce and visual-development platforms.",
    skills: ["WordPress", "Shopify", "Shopify Liquid", "Webflow", "CMS Customisation"],
    icon: "platform",
  },
  {
    id: "product-quality",
    title: "Product delivery and quality",
    description:
      "Supporting complete product journeys through integration, analytics, debugging and deliberate interface states.",
    skills: [
      "Product Analytics",
      "Dashboards",
      "Payment Workflows",
      "Loading & Error States",
      "Git & GitHub",
      "Debugging",
      "Responsive QA",
      "Validation & Testing",
    ],
    icon: "quality",
  },
  {
    id: "ai-assisted-workflow",
    title: "AI-assisted workflow",
    description:
      "Using AI for research, exploration and debugging while reviewing technical decisions and final implementation.",
    skills: ["ChatGPT", "Claude", "Codex", "Cursor", "v0", "Lovable", "Bolt"],
    icon: "ai",
  },
] as const

export const skillsPageSections = [
  { href: "#core-skills", label: "Core skills" },
  { href: "#applied-experience", label: "Applied experience" },
  { href: "#engineering-practice", label: "How I work" },
  { href: "#growth", label: "Learning next" },
] as const
