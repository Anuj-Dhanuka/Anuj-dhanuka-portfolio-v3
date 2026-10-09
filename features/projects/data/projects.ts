export type ProjectEvidence = {
  label: string
  file: string
  startLine: number
  endLine: number
}

export type ProjectCaseStudy = {
  slug: string
  lastModified: string
  summary: string
  metaDescription?: string
  context: string
  responsibility: string
  sourceRevision?: string
  implementation: {
    title: string
    description: string
    evidence?: ProjectEvidence
    source?: { file: string; revision: string; startLine: number; endLine: number; code: string }
  }[]
  decisions?: { title: string; description: string; evidence?: ProjectEvidence }[]
  challenge?: { title: string; problem: string; approach: string; evidence?: ProjectEvidence }
  outcomes: string[]
  experienceHref?: string
  screenshots: { src: string; alt: string; width: number; height: number; title?: string; caption?: string }[]
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
      lastModified: "2026-10-06",
      summary:
        "Mopedo is a responsive React web application for bike taxi, food delivery and goods delivery. I designed its interface and built the frontend from scratch, including its responsive layouts and client-side navigation.",
      context:
        "The interface needed to explain three different service categories as parts of one product. Visitors needed both a short service overview and space to read each offering in detail, with layouts that accommodate the text and images on smaller screens.",
      responsibility: "Interface design, React frontend development and responsive implementation",
      implementation: [
        {
          title: "Page composition and routing",
          description:
            "App.jsx places a shared Header and Footer around React Router routes for Home, About, Services and Contact. Each page composes its own section components; the homepage imports separate hero, features, how-it-works and CTA sections. Vite provides the development and build scripts.",
          source: {
            file: "src/App.jsx",
            revision: "0533af7ca89afc32d98da85b0702a428f20432cf",
            startLine: 17,
            endLine: 26,
            code: `<AppContainer>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactUsPage />} />
    <Route path="/services" element={<ServicesPage />} />
  </Routes>
  <Footer />
</AppContainer>`,
          },
        },
        {
          title: "Component-scoped styling",
          description:
            "The JSX files define their layouts with styled-components. Service cards share ServiceCard and IconWrapper styles, while the detail sections use ServiceRow, ServiceContent and ServiceImage. Media queries at 768px and 480px adjust layout, spacing and text size; index.css supplies the global reset.",
          source: {
            file: "src/pages/ServicesPage/ServiceDetails/index.jsx",
            revision: "0533af7ca89afc32d98da85b0702a428f20432cf",
            startLine: 153,
            endLine: 170,
            code: `const ServiceRow = styled.div\`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
\`;`,
          },
        },
        {
          title: "Navigation state",
          description:
            "Header uses useLocation to mark the current route and useState to toggle the narrow-screen menu. Selecting a navigation link closes that menu and calls the scroll-to-top helper. The same header component serves all four routes.",
          source: {
            file: "src/components/Header/index.jsx",
            revision: "0533af7ca89afc32d98da85b0702a428f20432cf",
            startLine: 5,
            endLine: 15,
            code: `function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };`,
          },
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
        "Designed and delivered a frontend demo spanning Home, About, Services and Contact views, with shared navigation, service presentation patterns and responsive layouts.",
        "Configured and deployed the completed React application through Netlify. The public demo presents the interface and its intentional visual CTA hierarchy, while the public repository makes the frontend implementation inspectable.",
      ],
      screenshots: [
        {
          src: "/Projects_images/Mopedo.webp",
          alt: "Mopedo homepage with bike-taxi introduction, two CTA buttons and a rider illustration",
          width: 2880,
          height: 1520,
          caption:
            "I designed and implemented the interface from scratch around a shared visual system for the three services. The desktop homepage places the introduction and demo CTAs beside a rider illustration, with navigation to Home, About, Services and Contact.",
        },
      ],
    },
    title: "Mopedo",
    category: "React Web Application",
    role: "React.js · JavaScript · styled-components · React Router · Vite",
    description:
      "A responsive frontend demo I designed and developed in React, with Home, About, Services and Contact views for bike taxi, food delivery and goods-delivery services.",
    compactDescription: "A responsive React frontend demo I designed, developed and deployed.",
    image: "/Projects_images/Mopedo.webp",
    type: "web",
    tags: ["React.js", "JavaScript", "styled-components", "React Router", "Vite"],
    liveLink: "https://mopedo.netlify.app/",
    githubLink: "https://github.com/Anuj-Dhanuka/mopedo-web-app",
    contributions: [
      "Designed the website interface from initial concept through the final UI.",
      "Implemented the Home, About, Services and Contact page components.",
      "Built the shared header, footer and configurable banner.",
      "Created service overview cards and image-and-text detail sections.",
      "Adapted layouts and navigation for smaller screens using media queries and menu state.",
      "Configured and deployed the completed frontend through Netlify.",
    ],
    accent: "from-brand-600 to-accent2-600",
    icon: "monitor",
    imageFit: "cover",
  },
  {
    id: "quizwar",
    images: ["/quizwar-quiz.webp", "/quizwar-categories.webp", "/quizwar-login.webp"],
    title: "QuizWar",
    category: "React Native Quiz App",
    role: "React Native CLI · JavaScript · Redux Toolkit · Firebase",
    description:
      "QuizWar is an independent React Native quiz application with category-based gameplay, phone-number authentication and user performance tracking backed by Firebase.",
    compactDescription:
      "An independent React Native quiz application with category-based gameplay and performance tracking.",
    type: "mobile",
    tags: [
      "React Native CLI",
      "JavaScript",
      "Redux Toolkit",
      "Redux Persist",
      "React Navigation",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
    ],
    githubLink: "https://github.com/Anuj-Dhanuka/QuizWar",
    contributions: [
      "Implemented phone-number sign-in, OTP confirmation and registration with user and performance records.",
      "Built category selection, timed questions, answer feedback and a results view with score and point calculations.",
      "Connected user performance to a ranked dashboard with pull-to-refresh.",
      "Built profile editing, cropped image uploads and settings for sound and haptic feedback.",
    ],
    accent: "from-brand-600 to-accent1-600",
    icon: "mobile",
    caseStudy: {
      slug: "quizwar",
      lastModified: "2026-10-09",
      summary:
        "QuizWar is an independent React Native mobile quiz app I built with OTP authentication, category-based gameplay, user profiles and performance tracking.",
      metaDescription:
        "QuizWar is Anuj Dhanuka’s independent React Native project with OTP authentication, Redux Toolkit state and Firebase-backed profiles and performance tracking.",
      context:
        "Players sign in with a phone number, complete a profile and choose a quiz category. A timed multiple-choice flow leads to results, accumulated points and a ranked performance dashboard. Players can also edit their profile and photo, then control sound and haptic feedback in Settings.",
      responsibility: "Independent React Native application development",
      sourceRevision: "d5615500727afef56425fd358202074c2eed79ab",
      implementation: [
        {
          title: "State & persistence",
          description:
            "Redux Persist stores only auth and userPerformance through AsyncStorage; the other four slices stay outside that whitelist.\n\nSix Redux Toolkit slices separate accounts, performance, active category, game results, categories and token state. The app root provides that store alongside authentication, theme, gestures and navigation.",
          evidence: { label: "State persistence", file: "src/store/store.js", startLine: 1, endLine: 42 },
        },
        {
          title: "Authentication & navigation",
          description:
            "React Navigation switches between Sign In / Registration and the application stack after AuthContext restores the stored user identity.\n\nHome, Dashboard and Profile are bottom tabs; Categories, Game, Result, Settings and Edit Profile sit in the surrounding stack.",
          evidence: {
            label: "Navigation structure",
            file: "src/Navigations/index.js",
            startLine: 41,
            endLine: 105,
          },
        },
        {
          title: "Firebase services",
          description:
            "Firebase Authentication requests the SMS code and confirms the OTP, while a Firestore lookup sends new accounts to registration.\n\nFirestore stores categories, profiles and performance data, and Firebase Storage holds profile media. These operations live partly in shared Apiutils methods and partly in the sign-in and registration screens.",
          evidence: {
            label: "Phone authentication",
            file: "src/screens/SigninScreen/index.js",
            startLine: 88,
            endLine: 145,
          },
        },
        {
          title: "Quiz & scoring",
          description:
            "GameScreen keeps the question index, countdown, answer feedback and score in local state, then writes the session summary into Redux.\n\nIt calculates points from correct answers, speed and login streaks, updates completed quizzes and level, and flags a score update when the result improves the score or its tie-break time.",
          evidence: {
            label: "Scoring and performance",
            file: "src/screens/GameScreen/index.js",
            startLine: 123,
            endLine: 205,
          },
        },
      ],
      decisions: [
        {
          title: "Keep durable state separate from a quiz session",
          description:
            "The persistence whitelist retains account and performance data across app launches. Category selection and game results have their own slices, while the current question and transition state live in GameScreen. This gives the saved account and the in-progress quiz different storage lifetimes.",
        },
        {
          title: "Use tabs for destinations and a stack for flows",
          description:
            "Home, Dashboard and Profile are peer destinations in the tab navigator. Quiz and account-editing screens are stack routes above them. The signed-out route tree contains only sign-in and registration, keeping that flow separate from the application screens.",
        },
        {
          title: "Order the leaderboard with explicit tie-breakers",
          description:
            "Dashboard sorts fetched performance records by highest score descending, stored completion time ascending, monthly points descending and total points descending. It then finds the signed-in user’s position in that ordered list. Pull-to-refresh fetches the records again.",
        },
      ],
      challenge: {
        title: "Coordinating a timed question flow with saved results",
        problem:
          "A question can advance after an answer or after its ten-second interval expires. The screen must coordinate answer feedback, progress, score and the final summary, then pass the session into the results and performance views.",
        approach:
          "GameScreen schedules an answer transition after one second and also advances on the timer. The transition resets answer feedback and countdown progress. At completion, the summary dispatches game and performance updates; ResultScreen reads those slices, writes performance through Apiutils and writes the score when its update flag is set. The completed flow coordinates screen-local state, shared Redux state and persisted Firestore data across the quiz and results screens.",
        evidence: {
          label: "Results persistence",
          file: "src/screens/ResultScreen/index.js",
          startLine: 45,
          endLine: 89,
        },
      },
      outcomes: [
        "Built an independent mobile application spanning account onboarding, timed quiz gameplay, score and point tracking, a ranked dashboard, profile editing and image uploads.",
        "The public source includes React Native 0.75, React 18, CLI run scripts, an Android Gradle project and an iOS Xcode project. The application code and both native project structures are available for inspection in the public repository.",
      ],
      screenshots: [
        {
          src: "/quizwar-login.webp",
          title: "Sign in",
          caption: "Phone-number entry starts the SMS and OTP authentication flow.",
          alt: "QuizWar phone-number sign-in screen",
          width: 720,
          height: 1600,
        },
        {
          src: "/quizwar-categories.webp",
          title: "Categories",
          caption: "Category selection stores the active category before opening the game.",
          alt: "QuizWar quiz category-selection screen",
          width: 720,
          height: 1600,
        },
        {
          src: "/quizwar-quiz.webp",
          title: "Quiz",
          caption: "A countdown, score and answer options share one timed question screen.",
          alt: "QuizWar timed quiz question with multiple-choice answers",
          width: 720,
          height: 1600,
        },
      ],
    },
  },
]
