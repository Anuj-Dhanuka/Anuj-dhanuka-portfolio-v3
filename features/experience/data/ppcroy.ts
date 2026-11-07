// Content for /experience/ppcroy, from the owner's copy (7 November 2026).
// Role, dates and location follow the resume (updated 7 November 2026) and the Experience page. Selected work stays empty
// until the owner supplies verified projects; never invent client names, outcomes or metrics.

export const ppcroyPage = {
  path: "/experience/ppcroy",
  lastModified: "2026-11-07",
  // Under ~60 characters so search results show it whole; the description stays under ~160.
  title: "PPCROY | React, Shopify, Webflow & WordPress | Anuj Dhanuka",
  description:
    "How Anuj Dhanuka delivered 20+ client projects at PPCROY with React, Shopify, Webflow and WordPress: landing pages, UI/UX, SEO and direct client work.",
}

export const ppcroyHero = {
  eyebrow: "PPCROY · Associate Full Stack Developer",
  title: "Where I learned that a website must do more than work.",
  titleAccent: "It has to earn attention and action.",
  intro: [
    "At PPCROY, I worked across more than 20 client projects using React, Shopify, Webflow and WordPress, building advertising landing pages, business websites and responsive digital experiences.",
    "It was also where I began working directly with clients, and learned how design, SEO, performance and content influence what a visitor does next.",
  ],
  meta: "Full Time · Remote · October 2024 to December 2025",
  stack: [
    "React",
    "JavaScript",
    "Shopify",
    "Webflow",
    "WordPress",
    "HTML",
    "CSS",
    "SEO",
    "Responsive Design",
  ],
  image: {
    src: "/experience/ppcroy/client-websites.webp",
    alt: "Floating browser windows showing a landing page, an online store and a business website, with a phone showing the mobile layout",
  },
}

export const ppcroyProof = [
  { value: "20+", label: "Client projects" },
  { value: "4", label: "Development platforms" },
  { value: "Direct", label: "Client communication" },
  { value: "End to end", label: "Website delivery experience" },
]

export const ppcroyBeginning = {
  label: "The beginning",
  title: "Different clients. Different audiences. Different definitions of success.",
  body: [
    "PPCROY is a service-based company, so no two projects were exactly the same. Some clients needed landing pages for advertising campaigns, some needed websites that generated enquiries, and others needed ecommerce or content-driven experiences.",
    "Before choosing a platform, layout or component, I learned to understand what the business wanted the visitor to see, understand and do.",
  ],
  image: {
    src: "/experience/ppcroy/web-delivery-desk.webp",
    alt: "A laptop and phone showing the same landing page, beside a notebook of page wireframe sketches",
  },
} as const

export const ppcroyBalance = {
  label: "The balance",
  title: "What every project asked me to balance",
  items: [
    {
      icon: "business",
      title: "The business",
      body: "What does the client want the website to achieve?",
    },
    {
      icon: "visitor",
      title: "The visitor",
      body: "What information does someone need before they feel comfortable taking action?",
    },
    {
      icon: "experience",
      title: "The experience",
      body: "How should the content, design and interactions work together to make that action feel natural?",
    },
  ],
  intro:
    "That balance between business goals, visitor needs and implementation became the foundation of how I approach frontend development today.",
} as const

export const ppcroyLanding = {
  label: "From click to action",
  title: "The advertisement earned the click. The landing page had to earn the next action.",
  intro:
    "A visitor arriving from an advertisement usually has limited time and a specific expectation. The landing page has to communicate the offer quickly, establish trust and make the next step obvious.",
  processTitle: "My landing-page process",
  process: [
    {
      title: "Understand the campaign",
      body: "I started by understanding the service, target audience, advertisement message and action the client wanted visitors to take.",
    },
    {
      title: "Establish the hierarchy",
      body: "I organised the page so the primary message, supporting value and call to action could be understood without unnecessary effort.",
    },
    {
      title: "Build trust",
      body: "I used clear content sections, visual consistency, relevant proof and predictable interactions to make the experience feel credible.",
    },
    {
      title: "Design for mobile visitors",
      body: "Advertising traffic often arrives on mobile devices, so layouts, typography, forms and calls to action had to remain clear on smaller screens.",
    },
    {
      title: "Refine through feedback",
      body: "I discussed the work with clients, collected feedback and improved the page while protecting the original campaign goal.",
    },
  ],
  journeyTitle: "The complete journey",
  journey: [
    "Advertisement",
    "Focused landing page",
    "Understand the offer",
    "Build confidence",
    "Take action",
  ],
  closing:
    "This taught me to see a landing page as part of a customer journey, not as an isolated collection of sections.",
}

export const ppcroyClients = {
  label: "Client ownership",
  title: "I was not only building for clients. I was working with them.",
  intro:
    "At PPCROY, I had the opportunity to communicate directly with clients. These conversations taught me how to understand requirements beyond the first request, ask useful questions and explain design or technical decisions in simple language.",
  flowTitle: "How I worked with clients",
  flow: [
    "Client conversation",
    "Business goal and audience",
    "Requirements and content",
    "Page structure and design direction",
    "Development",
    "Presentation and feedback",
    "Revisions and responsive testing",
    "Launch-ready website",
  ],
  cta: { label: "Talk to me", href: "/contact" },
  lessonsTitle: "What direct communication taught me",
  lessons: [
    "Listen before proposing a solution",
    "Explain technical limitations without unnecessary jargon",
    "Present work with context instead of only sharing a link",
    "Receive feedback without becoming defensive",
    "Balance client preferences with usability",
    "Communicate progress and expectations clearly",
  ],
  quote:
    "The first version of a client request is not always the real requirement. Asking better questions usually leads to a better website.",
  closing:
    "This experience made me comfortable communicating with founders, marketers, designers and non-technical stakeholders.",
}

export const ppcroyDesign = {
  label: "Design judgment",
  title: "More than making websites look attractive",
  intro:
    "Working on more than 20 projects exposed me to different industries, audiences and visual styles. That repetition helped me develop an eye for spacing, typography, contrast, hierarchy, consistency and responsive behaviour.",
  body: "I learned that an aesthetic interface is not created by adding more decoration. It comes from making deliberate decisions about what deserves attention and what should stay out of the way.",
  cta: { label: "See my UI/UX case study", href: "/projects/rekha-maa-ki-rasoi" },
  questionsTitle: "Questions I learned to ask",
  questions: [
    "What should a visitor notice first?",
    "Is the primary message immediately understandable?",
    "Is the next action obvious?",
    "Does every section contribute something useful?",
    "Is the content easy to scan?",
    "Does the design feel consistent?",
    "Does the experience remain usable on mobile?",
    "Are colours and typography supporting readability?",
    "Can the client maintain the website after delivery?",
  ],
  diagram: {
    center: "Deliberate decisions",
    caption: "about what deserves attention",
  },
  principlesTitle: "Principles I carried into every project",
  principles: [
    {
      icon: "hierarchy",
      title: "Visual hierarchy",
      body: "Using size, spacing, colour and position to guide attention through the page.",
    },
    {
      icon: "consistency",
      title: "Consistency",
      body: "Keeping typography, colours, buttons, cards and spacing predictable across the experience.",
    },
    {
      icon: "responsive",
      title: "Responsive design",
      body: "Designing for changing screen sizes rather than shrinking a desktop layout.",
    },
    {
      icon: "clarity",
      title: "Clarity",
      body: "Removing unnecessary elements so the message and intended action remain easy to understand.",
    },
    {
      icon: "accessibility",
      title: "Accessibility",
      body: "Using readable typography, sufficient contrast, meaningful structure and understandable interactions.",
    },
  ],
} as const

// Each line of a page's HTML beside the practice it takes care of. Together the lines cover all 12
// practices; the markup is illustrative and borrows this page's own content.
export const ppcroySeo = {
  label: "Discoverability",
  title: "SEO is built in, not added on",
  intro:
    "At PPCROY, I learned that search visibility comes from how a page is built: clear content, semantic structure, responsive layouts and solid performance, not keywords added at the end.",
  sourceTitle: "What search engines read",
  fileName: "ppcroy.html",
  practicesTitle: "SEO practices I learned to include",
  source: [
    { code: "<head>", depth: 0 },
    {
      code: "<title>PPCROY Experience | React, Shopify…</title>",
      depth: 1,
      practices: ["Clear and descriptive page titles"],
    },
    {
      code: '<meta name="description" content="How Anuj delivered 20+…">',
      depth: 1,
      practices: ["Relevant meta descriptions"],
    },
    {
      code: '<meta name="viewport" content="width=device-width">',
      depth: 1,
      practices: ["Mobile-responsive layouts"],
    },
    {
      code: '<link rel="preload" as="image" href="hero.webp">',
      depth: 1,
      practices: ["Performance-conscious implementation"],
    },
    { code: "</head>", depth: 0 },
    { code: "<body>", depth: 0 },
    { code: "<nav>…</nav>", depth: 1, practices: ["Consistent internal navigation"] },
    { code: "<main>", depth: 1, practices: ["Semantic HTML structure"] },
    { code: "<h1>Where I learned…</h1>", depth: 2, practices: ["Logical heading hierarchy"] },
    { code: "<section>", depth: 2, practices: ["Clean page structure"] },
    { code: "<p>At PPCROY, I worked across…</p>", depth: 3, practices: ["Search-friendly page content"] },
    {
      code: '<img src="desk.webp" alt="Laptop showing a landing page" loading="lazy">',
      depth: 3,
      practices: ["Descriptive image alternative text", "Optimized images and assets"],
    },
    {
      code: '<a href="/experience/chefkart">Read the ChefKart case study</a>',
      depth: 3,
      practices: ["Meaningful link text"],
    },
    { code: "</section>", depth: 2 },
    { code: "</main>", depth: 1 },
    { code: "</body>", depth: 0 },
  ],
}

export const ppcroyPlatforms = {
  label: "Platform experience",
  title: "Choosing the right way to build",
  intro:
    "Working in a service-based company exposed me to different platforms and different kinds of client requirements. I learned that the best technology is not always the most complex option. It is the one that gives the client the right balance of flexibility, maintainability, delivery speed and control.",
  items: [
    {
      icon: "react",
      name: "React",
      summary: "Custom, interactive web experiences",
      description:
        "I used React for custom and interactive web experiences that needed reusable components, structured state and greater control over frontend behaviour.",
      caseStudy: { label: "See my React case study", href: "/projects/mopedo" },
      skills: ["Components", "Props", "State", "Reusability", "Responsive Interfaces", "API Integration"],
    },
    {
      icon: "shopify",
      name: "Shopify",
      summary: "Ecommerce journeys",
      description:
        "Shopify introduced me to ecommerce journeys involving products, collections, themes and customer purchasing behaviour.",
      skills: ["Storefronts", "Themes", "Product Pages", "Collections", "Responsive Commerce"],
    },
    {
      icon: "webflow",
      name: "Webflow",
      summary: "Visually refined marketing websites",
      description:
        "Webflow helped me build visually refined marketing websites while strengthening my understanding of responsive layouts, spacing and design systems.",
      skills: ["Responsive Layouts", "CMS", "Visual Development", "Interactions", "Content Management"],
    },
    {
      icon: "wordpress",
      name: "WordPress",
      summary: "Content-driven business websites",
      description:
        "WordPress gave me experience with content-driven and business websites that needed flexibility and easier long-term maintenance.",
      caseStudy: { label: "See my WordPress case study", href: "/projects/rekha-maa-ki-rasoi" },
      skills: ["Business Websites", "Content Management", "Themes", "Responsive Pages", "Client Handover"],
    },
  ],
} as const

export const ppcroyProcess = {
  label: "How I worked",
  title: "From an initial conversation to a launch-ready website",
  from: "Initial conversation",
  to: "Launch-ready website",
  cta: { label: "Explore my projects", href: "/projects" },
  steps: [
    {
      title: "Discover",
      body: "Understand the client, audience, business goal, campaign and intended action.",
    },
    {
      title: "Structure",
      body: "Organise the content and decide what visitors should see first, what builds trust and what moves them towards action.",
    },
    {
      title: "Design",
      body: "Create a clear visual direction using hierarchy, typography, spacing, colour and responsive behaviour.",
    },
    {
      title: "Build",
      body: "Develop the website using the platform that best fits the project requirements.",
    },
    {
      title: "Review",
      body: "Present progress, collect feedback and explain important design or technical decisions.",
    },
    {
      title: "Refine",
      body: "Apply useful feedback while maintaining consistency, usability and the original business goal.",
    },
    {
      title: "Test",
      body: "Review responsiveness, interactions, links, content, forms and important user paths.",
    },
    {
      title: "Deliver",
      body: "Prepare the final website for launch and make it manageable for the client.",
    },
  ],
  closing:
    "Repeating this process across different projects made me faster, more adaptable and more thoughtful about the decisions behind each screen.",
}

export type PpcroyProject = {
  title: string
  type: string
  platform: string
  goal: string
  responsibility: string
  decision: string
  outcome: string
}

export const ppcroySelectedWork = {
  label: "Projects",
  title: "Selected work from more than 20 client projects",
  intro:
    "Each project required a different balance of design, development, SEO, communication and business understanding. These examples represent the kind of problems I worked on at PPCROY.",
}

// The section stays hidden until this holds owner-verified projects.
export const ppcroyProjects: readonly PpcroyProject[] = []

export const ppcroyImpact = {
  label: "The impact",
  title: "The experience that shaped the developer I became",
  intro: "PPCROY gave me the foundation that I carried into product engineering.",
  body: [
    "It taught me how to understand a client, structure a message and build a website that feels clear, trustworthy and purposeful.",
    "I learned to work across different platforms, adapt to changing requirements, communicate with stakeholders and think about the complete visitor journey.",
    "Later, when I began building larger products using React, React Native and Next.js, I was not only thinking about components and APIs. I was also thinking about hierarchy, responsiveness, trust, usability and what the user needed to do next.",
  ],
  progressionTitle: "My progression",
  progression: [
    {
      name: "PPCROY",
      items: [
        "Client communication",
        "Landing pages",
        "UI/UX judgment",
        "SEO fundamentals",
        "Responsive websites",
        "Multi-platform delivery",
      ],
    },
    {
      name: "ChefKart",
      items: [
        "Product engineering",
        "React and React Native",
        "Complex customer journeys",
        "Payments and booking flows",
        "Operational systems",
        "Production ownership",
      ],
    },
  ],
  closing:
    "PPCROY taught me how to build experiences that earn attention. ChefKart taught me how to carry that thinking across complex products and production systems.",
  cta: "Explore my ChefKart experience",
}

export const ppcroyClosing = {
  title: "I bring more than frontend implementation",
  paragraphs: [
    "I understand stakeholders and business goals, and I turn ideas into polished, responsive experiences. I'm looking for frontend roles where I can build with React, React Native, Next.js and TypeScript.",
  ],
  // Owner-supplied; conflicts with the ChefKart "Present" record elsewhere until the owner confirms.
  availability: [
    "Immediate joiner",
    "Based in Vizianagaram, Andhra Pradesh",
    "Open to opportunities across India",
  ],
  contactLabel: "Discuss a frontend opportunity",
  resumeLabel: "Download my resume",
  linkedInLabel: "Connect on LinkedIn",
}
