import {
  BriefcaseBusiness,
  Building2,
  Code2,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Store,
} from "lucide-react"

export const aboutHighlights = [
  { value: "Web + mobile", label: "Product experience" },
  { value: "20+", label: "Client projects delivered" },
  { value: "4", label: "Product surfaces at ChefKart" },
] as const

export const storyStrengths = [
  {
    title: "Engineering discipline",
    description:
      "Mechanical engineering taught me to break complex requirements into practical steps and keep learning through unfamiliar problems.",
    Icon: GraduationCap,
  },
  {
    title: "Business ownership",
    description:
      "Running day-to-day agro-trading operations taught me accountability, stakeholder communication and responsibility for the complete outcome.",
    Icon: Store,
  },
  {
    title: "Product and design judgment",
    description:
      "Agency mentorship and product work taught me to connect visual quality, user needs, technical choices and business goals.",
    Icon: Lightbulb,
  },
] as const

export const journey = [
  {
    period: "Childhood",
    title: "Roots across Indore and Andhra Pradesh",
    description:
      "I was born in Indore. When I was around ten, my family moved to Cheepurupalli in the Vizianagaram district of Andhra Pradesh, where they continue to live.",
    proof: "A move that taught me to adapt to new places and perspectives early in life.",
    skills: ["Indore", "Cheepurupalli", "Andhra Pradesh"],
    Icon: MapPin,
  },
  {
    period: "2019",
    title: "The first step from mechanical engineering into software",
    description:
      "I became interested in software during the final year of my B.Tech in Mechanical Engineering. As regular coursework ended in 2019, I joined an institute to learn computer fundamentals, Java and Android Studio, completed that training in August and then began exploring HTML and CSS independently.",
    proof: "Foundational software training completed in August 2019",
    skills: ["Mechanical Engineering", "Java", "Android Studio", "HTML", "CSS"],
    Icon: GraduationCap,
  },
  {
    period: "2019 – 2023",
    title: "Learning ownership through the family business",
    description:
      "I helped operate my father’s agro-commodities business, which purchased crops such as maize, pulses and ragi and supplied them to exporters, mills and companies. I coordinated vendors, suppliers, transport offices and labour across procurement and delivery.",
    proof:
      "The COVID-19 period and unexpected financial losses strengthened my resilience, business awareness and accountability under pressure.",
    skills: ["Operations", "Vendors", "Logistics", "Labour", "Ownership"],
    Icon: Store,
  },
  {
    period: "Oct 2020 onward",
    title: "Building a structured web development foundation",
    description:
      "Alongside the business, I joined NxtWave’s CCBP program and studied HTML, CSS, JavaScript, React, Node.js, databases and developer foundations. I applied the learning through Todo, travel, food and Jobby applications.",
    proof: "Structured coursework, hands-on projects and verifiable certificates",
    skills: ["JavaScript", "React", "Node.js", "Databases", "Responsive Web Design"],
    Icon: Code2,
  },
  {
    period: "Apr – Jun 2024",
    title: "First professional React Native experience",
    description:
      "After many interviews, I moved from the Visakhapatnam region to Hyderabad for a two-month onsite internship at 3rd Eye Lab. I worked with React Native CLI, Firebase and Git while building the Levels mobile quiz app.",
    proof: "Completed the assigned project ahead of schedule and delivered additional features",
    skills: ["React Native CLI", "Firebase", "Git", "Onsite collaboration"],
    Icon: Building2,
  },
  {
    period: "Oct 2024 – Dec 2025",
    title: "Developing design judgment at PPCROY TECH SOLUTIONS",
    description:
      "Working under the mentorship of founder Anjaneyulu Jadda, I learned UI/UX principles, visual hierarchy, typography, brand systems and how to structure production websites. I delivered work across React, WordPress, Webflow and Shopify and learned Figma and AI-assisted workflows.",
    proof: "20+ client projects delivered across multiple industries and platforms",
    skills: ["React", "WordPress", "Webflow", "Shopify", "Figma", "Lovable · v0 · Bolt · Cursor · ChatGPT"],
    Icon: BriefcaseBusiness,
  },
  {
    period: "Dec 2025 – Present",
    title: "Growing through product engineering at ChefKart",
    description:
      "I contribute to ChefKart’s React Native customer app, React and Next.js website, internal operations dashboard and payment platform. I launch features and services while collaborating with backend engineers, designers and product managers under direct guidance from the co-founder and CTO.",
    proof: "Recognised in Technology & Engineering · May 2026",
    skills: ["React Native", "React", "Next.js", "Product delivery", "Cross-functional collaboration"],
    Icon: Rocket,
  },
] as const

export const certificates = [
  {
    title: "Build Your Own Responsive Website",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/responsive-website?id=FRAWHGBDJK",
  },
  {
    title: "Build Your Own Static Website",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/static-website?id=BMBCYLKHFP",
  },
  {
    title: "JavaScript Essentials",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/javascript-essentials?id=UCSRBZDAHH",
  },
  {
    title: "React JS",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/react-js?id=PBLHJQRRRD",
  },
  {
    title: "Node.js",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/node-js?id=VABNFYXANS",
  },
  {
    title: "Introduction to Databases",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=JEJEQHHSOF",
  },
  {
    title: "Developer Foundations",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/developer-foundations?id=ESCFRTXSGJ",
  },
  {
    title: "Responsive Web Design Using Flexbox",
    issuer: "NxtWave CCBP",
    href: "https://certificates.ccbp.in/intensive/flexbox?id=HCQEFVXZHT",
  },
  {
    title: "React Native",
    issuer: "Udemy · September 2024",
    href: "https://www.udemy.com/certificate/UC-2ccd6fc5-ebdf-4674-8fa6-213dcb33765a/",
  },
] as const

export const productSurfaces = [
  "Customer-facing React Native application",
  "Public website built with React and Next.js",
  "Internal operations dashboard built with React",
  "Payment platform built with React",
] as const

export const futureFocus = [
  "Backend engineering",
  "DevOps",
  "Artificial intelligence",
  "Machine learning",
] as const

export const recognitionUrl =
  "https://www.linkedin.com/posts/anuj-dhanuka_rewardsandrecognition-chefkart-reactnative-share-7463089455172845569-ML3k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACVInBQB17-NdeSfv3bpUy3ZdJaN7NgcWgI"
