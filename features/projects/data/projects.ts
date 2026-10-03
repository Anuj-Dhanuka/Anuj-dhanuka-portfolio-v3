export type ProjectCaseStudy = {
  slug: string
  lastModified: string
  summary: string
  context: string
  responsibility: string
  implementation: { title: string; description: string }[]
  decisions?: { title: string; description: string }[]
  challenge?: { title: string; problem: string; approach: string }
  outcomes: string[]
  experienceHref?: string
  screenshots: { src: string; alt: string; width: number; height: number; caption?: string }[]
}

export type Project = {
  id: string
  title: string
  role: string
  description: string
  compactDescription?: string
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
  caseStudy?: ProjectCaseStudy
}

export const projects: Project[] = [
  {
    id: "rekha-maa-ki-rasoi",
    title: "Rekha Maa Ki Rasoi",
    category: "Food Business Website",
    role: "WordPress · Responsive Design · UI Customisation",
    description:
      "A warm and approachable WordPress website I created for my mother's homemade food business to give the brand a professional online presence and make its services easier for customers to discover.",
    compactDescription:
      "A responsive WordPress website for a homemade food business, designed to make its services easy to explore.",
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
    compactDescription:
      "A responsive education website with clearer navigation, structured information and stronger content hierarchy.",
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
    caseStudy: {
      slug: "mopedo",
      lastModified: "2026-10-03",
      summary:
        "Mopedo is a React website for bike taxi, food delivery and goods delivery. I built its frontend in JavaScript, with responsive layouts and client-side navigation.",
      context:
        "The interface needed to explain three different service categories as parts of one product. Visitors needed both a short service overview and space to read each offering in detail, with layouts that accommodate the text and images on smaller screens.",
      responsibility: "Frontend components, service sections and responsive layouts",
      implementation: [
        {
          title: "Page composition and routing",
          description:
            "App.jsx places a shared Header and Footer around React Router routes for Home, About, Services and Contact. Each page composes its own section components; the homepage imports separate hero, features, how-it-works and CTA sections. Vite provides the development and build scripts.",
        },
        {
          title: "Component-scoped styling",
          description:
            "The JSX files define their layouts with styled-components. Service cards share ServiceCard and IconWrapper styles, while the detail sections use ServiceRow, ServiceContent and ServiceImage. Media queries at 768px and 480px adjust layout, spacing and text size; index.css supplies the global reset.",
        },
        {
          title: "Navigation state",
          description:
            "Header uses useLocation to mark the current route and useState to toggle the narrow-screen menu. Selecting a navigation link closes that menu and calls the scroll-to-top helper. The same header component serves all four routes.",
        },
      ],
      decisions: [
        {
          title: "Shared page shell and configurable banner",
          description:
            "Keeping Header and Footer outside Routes gives every page the same navigation and footer. Services and Contact reuse BannerSection with a heading prop, so their page titles differ while the banner layout and responsive styles stay in one component.",
        },
        {
          title: "Shared styles, explicit service content",
          description:
            "The three service cards and detail rows reuse styled components, but their text, icons and images are written explicitly in JSX. This keeps presentation rules shared while leaving each service’s content separate; the source does not use a data-driven service renderer.",
        },
      ],
      challenge: {
        title: "Keeping alternating service rows in order on mobile",
        problem:
          "Desktop service details alternate image and text placement. The food-delivery row puts text first, which would also put its image last when stacked vertically.",
        approach:
          "At 768px and below, ServiceRow switches to a column. Its second-row selector uses column-reverse so the food-delivery image appears first, matching the other two services without a separate mobile component.",
      },
      outcomes: [
        "Delivered Home, About, Services and Contact views in one React application, with shared navigation, service overview cards and detailed service sections.",
        "Inspect the interface through the live demo and the implementation through the public source. The homepage’s Get Started and Learn More buttons have no click handlers in the reviewed source; they establish visual CTA placement, not a verified booking or ordering flow.",
      ],
      screenshots: [
        {
          src: "/Projects_images/Mopedo.webp",
          alt: "Mopedo homepage with bike-taxi introduction, two CTA buttons and a rider illustration",
          width: 2880,
          height: 1520,
          caption:
            "The desktop homepage places the introduction and Get Started / Learn More buttons beside a rider illustration. Its top navigation links to Home, About, Services and Contact. Open the demo to inspect the remaining sections and narrow-screen layout.",
        },
      ],
    },
    title: "Mopedo",
    category: "React Web Application",
    role: "React.js · JavaScript · styled-components · Responsive Design",
    description:
      "A responsive React website with Home, About, Services and Contact views for a mobility platform offering bike taxi, food delivery and goods-delivery services.",
    compactDescription: "A responsive React application for mobility and delivery services.",
    image: "/Projects_images/Mopedo.webp",
    type: "web",
    tags: ["React.js", "JavaScript", "styled-components", "React Router", "Vite", "Responsive Design"],
    liveLink: "https://mopedo.netlify.app/",
    githubLink: "https://github.com/Anuj-Dhanuka/mopedo-web-app",
    contributions: [
      "Implemented the Home, About, Services and Contact page components.",
      "Built the shared header, footer and configurable banner.",
      "Created service overview cards and image-and-text detail sections.",
      "Adapted layouts and navigation for smaller screens using media queries and menu state.",
    ],
    accent: "from-brand-600 to-accent2-600",
    icon: "monitor",
    imageFit: "cover",
  },
  {
    id: "levels-app",
    caseStudy: {
      slug: "levels-app",
      lastModified: "2026-10-03",
      summary:
        "Levels App is a React Native quiz application I built during my internship at 3rd Eye Lab. I implemented the mobile screens, category-based quiz flows and dynamic question loading using React Native and JavaScript.",
      context:
        "This application was developed during my onsite internship at 3rd Eye Lab in Hyderabad, from April to June 2024. It applied my web-development foundation to mobile interfaces, with category-based questions and dynamically loaded quiz content.",
      responsibility: "Mobile screens, category selection and quiz-question flows",
      experienceHref: "/experience#role-third-eye-lab",
      implementation: [
        {
          title: "Category-based quiz flows",
          description:
            "I implemented category selection and the quiz-question flows, connecting subject selection with the question-and-answer experience.",
        },
        {
          title: "Dynamic question loading",
          description:
            "I added dynamic question-loading behaviour for the quiz content. This was part of the assigned mobile application work alongside building its screens and navigation.",
        },
        {
          title: "Reusable mobile screens",
          description:
            "I built the application screens using React Native and JavaScript, created reusable screens and implemented clear navigation. The internship also gave me practical experience with React Native CLI, Firebase and Git in an onsite development environment.",
        },
      ],
      outcomes: [
        "Completed the assigned project ahead of schedule.",
        "Delivered additional features beyond the original requirements.",
        "The linked GitHub repository and screenshots provide evidence of the application work.",
      ],
      screenshots: [
        {
          src: "/levels-app-quiz.webp",
          alt: "Levels App quiz question with multiple-choice answers",
          width: 720,
          height: 1600,
        },
        {
          src: "/levels-app-categories.webp",
          alt: "Levels App category-selection screen",
          width: 720,
          height: 1600,
        },
        { src: "/levels-app-login.webp", alt: "Levels App login screen", width: 720, height: 1600 },
      ],
    },
    title: "Levels App",
    category: "React Native Application",
    role: "React Native · JavaScript · Mobile UI · Dynamic Content",
    description:
      "A mobile quiz application built during my internship at 3rd Eye Lab, featuring category-based questions, dynamic content loading and intuitive user flows.",
    compactDescription:
      "A React Native quiz app with category-based questions, dynamic content and clear mobile user flows.",
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
