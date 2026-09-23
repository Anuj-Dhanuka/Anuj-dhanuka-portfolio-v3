export type Project = {
  id: string
  title: string
  role: string
  description: string
  category: string
  image?: string
  images?: string[]
  type: "web" | "mobile" | "business"
  tags: string[]
  liveLink?: string
  githubLink?: string
  contributions: string[]
  accent: string
  icon: "business" | "monitor" | "mobile" | "store"
  imageFit?: "cover" | "contain"
}

export const projects: Project[] = [
  {
    id: "rekha-maa-ki-rasoi",
    title: "Rekha Maa Ki Rasoi",
    category: "Food Business Website",
    role: "WordPress · Responsive Design · UI Customisation",
    description:
      "A warm and approachable WordPress website I created for my mother's homemade food business to give the brand a professional online presence and make its services easier for customers to discover.",
    type: "business",
    image: "/Projects_images/Rekha_maa_ki_rasoi.webp",
    tags: ["WordPress", "Responsive Design", "UI Customisation"],
    liveLink: "https://rekhamaakirasoi.com/",
    contributions: [
      "Planned the website structure around customer needs.",
      "Created the visual direction and page layouts.",
      "Built and customised the website using WordPress.",
      "Organised services and business information clearly.",
      "Optimised the experience for mobile and desktop devices.",
      "Designed the interface to feel personal, trustworthy and welcoming.",
    ],
    accent: "from-brand-600 to-accent1-600",
    icon: "store",
    imageFit: "cover",
  },
  {
    id: "rama-technical-college",
    title: "Rama Technical College of Education",
    category: "Education Website",
    role: "WordPress · Responsive Design · Information Architecture · UI Customisation",
    description:
      "A professional WordPress website created to present institutional and academic information with clearer navigation, stronger content hierarchy and improved credibility.",
    type: "business",
    image: "/Projects_images/Rama_technical_college_of_education.webp",
    tags: ["WordPress", "Responsive Design", "Information Architecture", "UI Customisation"],
    liveLink: "https://rtceindia.in/#",
    contributions: [
      "Structured institutional information into clear and accessible sections.",
      "Designed and developed the complete website using WordPress.",
      "Improved navigation and content readability.",
      "Created a professional visual style suited to an educational institution.",
      "Optimised the layout across mobile, tablet and desktop screens.",
    ],
    accent: "from-accent2-600 to-brand-600",
    icon: "business",
    imageFit: "cover",
  },
  {
    id: "mopedo",
    title: "Mopedo",
    category: "React Web Application",
    role: "React.js · JavaScript · CSS3 · Responsive Design",
    description:
      "A responsive single-page React application for an urban mobility platform offering bike taxi, food delivery and goods-delivery services.",
    image: "/Projects_images/Mopedo.webp",
    type: "web",
    tags: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
    liveLink: "https://mopedo.netlify.app/",
    contributions: [
      "Created the complete website experience from concept to implementation.",
      "Developed reusable interface components using React.",
      "Built responsive, mobile-first sections.",
      "Presented multiple services within a consistent visual system.",
      "Added clear calls to action throughout the application.",
      "Optimised the interface for different screen sizes.",
    ],
    accent: "from-brand-600 to-accent2-600",
    icon: "monitor",
    imageFit: "cover",
  },
  {
    id: "levels-app",
    title: "Levels App",
    category: "React Native Application",
    role: "React Native · JavaScript · Mobile UI · Dynamic Content",
    description:
      "A mobile quiz application built during my internship at 3rd Eye Lab, featuring category-based questions, dynamic content loading and intuitive user flows.",
    images: ["/levels-app-quiz.webp", "/levels-app-categories.webp", "/levels-app-login.webp"],
    type: "mobile",
    tags: ["React Native", "JavaScript", "Mobile UI", "Dynamic Content"],
    githubLink: "https://github.com/Anuj-Dhanuka/levels-app",
    contributions: [
      "Built the application screens using React Native.",
      "Implemented category selection and quiz-question flows.",
      "Added dynamic question-loading behaviour.",
      "Created reusable screens and clear navigation.",
      "Completed the project ahead of schedule.",
      "Delivered additional features beyond the original requirements.",
    ],
    accent: "from-brand-600 to-accent1-600",
    icon: "mobile",
  },
]
