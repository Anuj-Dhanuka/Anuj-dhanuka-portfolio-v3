// Content for /experience/chefkart, from the owner's case-study copy (3 November 2026).
// Publication boundary: no repository or internal product names, commit hashes, colleague names,
// endpoints or screenshots. Ownership of the payments work, including Quick Buy, is owner-confirmed
// (git attribution on the development branch differs because of how it was merged).
// Contribution figures are owner-confirmed.

export const chefkartPage = {
  path: "/experience/chefkart",
  lastModified: "2026-11-03",
  title: "ChefKart Engineering Case Study — Anuj Dhanuka",
  description:
    "How Anuj Dhanuka built direct app and web-led customer journeys across discovery, serviceability, booking, payments, fulfilment, performance and internal operations at ChefKart.",
  ogTitle: "Multiple entry points, one service journey: my engineering work at ChefKart",
  ogDescription:
    "An end-to-end frontend case study covering direct mobile-app journeys, web acquisition, serviceability, payments, bookings and the internal tools used to fulfil them.",
}

export const chefkartHero = {
  eyebrow: "ChefKart · Associate Software Engineer",
  title: "Building every path into a ChefKart booking",
  titleAccent: "and the systems that fulfil it",
  intro:
    "Customers could arrive in different ways. Some discovered ChefKart through a Google search and a city page. Others opened the mobile app directly, selected their location and checked which services were available nearby.",
  lede: "I helped build these customer paths and the operational systems behind them across ChefKart’s React Native app, Next.js website, payment application and internal operations dashboard.",
  meta: "Gurugram · Onsite · December 2025 – Present",
  stack: ["React Native", "Next.js", "TypeScript", "Redux", "Razorpay", "SSR", "REST APIs"],
}

// Owner-confirmed contribution figures; detail and methodology in chefkartEvidence.
export const chefkartProof = [
  { value: "#1", label: "Of 18 app contributors" },
  { value: "#1", label: "Of 13 website contributors" },
  { value: "461", label: "Authored commits" },
  { value: "107,794", label: "Surviving source lines" },
]

export const chefkartProofNote =
  "35.05% of the app’s and 33.18% of the website’s current source-code ownership"

// Hero diagram: the products a booking passes through.
export const chefkartSystem = [
  {
    surface: "Website",
    stack: "Next.js",
    step: "Search and campaign customers arrive",
    work: ["City pages", "Cooks Near Me", "Campaign pages"],
  },
  {
    surface: "Customer app",
    stack: "React Native",
    step: "Direct and returning customers book",
    work: ["Book by Dish", "Wallet", "Cashback", "Party booking"],
  },
  {
    surface: "Payment application",
    stack: "Payments",
    step: "Payments are executed and confirmed",
    work: ["Payment status", "Transaction types"],
  },
  {
    surface: "Operations dashboard",
    stack: "React",
    step: "The team fulfils the visit",
    work: ["Visit tracking", "SOS alerts", "Cook operations"],
  },
] as const

// The larger story: entry points converge on one service journey, with operations behind it.
export const chefkartStory = {
  label: "Who I built for",
  title: "Three ways people booked a home cook",
  intro:
    "ChefKart lets people book a professional cook for their own kitchen. Customers got there in three different ways, and I worked on the screens behind all three.",
  journey: {
    label: "From booking to visit",
    title: "After booking, the journey is the same",
    intro:
      "Website or app, every booking then followed the same steps, with an operations team making each visit happen.",
  },
  productsHeader: {
    label: "What I worked on",
    title: "The four products behind every booking",
    intro: "Each one handled a different part of getting a cook into someone’s kitchen.",
  },
  customers: [
    {
      kind: "search",
      title: "Through a Google search",
      body: "They landed on a city or Cooks Near Me page from search, checked that ChefKart served their area, looked at what was on offer and started booking on the website.",
    },
    {
      kind: "new",
      title: "Straight from the app",
      body: "They heard about ChefKart from a friend, an ad or the app store, signed up, set their location, checked availability and booked without ever leaving the app.",
    },
    {
      kind: "returning",
      title: "Coming back to book again",
      body: "They opened the app to book again, manage an upcoming visit, pay what was left, change their cook, share feedback or get help from support.",
    },
  ],
  entryPaths: [
    {
      name: "Starting on the website",
      steps: ["Google search or ad", "City or service page", "Check your area", "Choose a service"],
    },
    {
      name: "Starting in the app",
      steps: ["Open the app", "Sign up", "Check your area", "Choose a service or dish"],
    },
  ],
  shared: {
    name: "Then, for everyone",
    steps: ["Book", "Pay", "Cook visits", "Make changes or get help", "Give feedback and book again"],
  },
  operations: {
    name: "Behind the scenes",
    body: "I worked on both sides: the screens customers used, and the dashboard the operations team ran every visit from.",
    steps: [
      "Booking comes in",
      "Cook and time slot assigned",
      "Visit tracked",
      "Problems handled",
      "Visit completed",
    ],
  },
}

export const chefkartProducts = [
  {
    name: "React Native app",
    body: "The customer app. It took people from signing up and setting their location to seeing what was available, booking, paying, managing upcoming visits, giving feedback and getting support.",
  },
  {
    name: "Next.js website",
    body: "Where people landed from Google or an ad. City, service, cook and pack pages helped them check that ChefKart covered their area and move towards booking.",
  },
  {
    name: "Payment application",
    body: "Took payments and tracked whether each one went through, across different services and types of payment.",
  },
  {
    name: "Operations dashboard",
    body: "The internal tool the operations team used to deliver visits, manage cooks, sort out incidents, review payments and keep service details up to date.",
  },
]

export const chefkartRole = {
  label: "My role",
  title: "More than turning designs into screens",
  intro:
    "I built across the app, website, payments and operations tools. My part usually started before any code was written, and didn’t end at launch.",
  stages: [
    {
      kind: "before",
      name: "Before building",
      title: "Shaping the feature",
      body: "Worked with product, design, backend, QA and operations to agree how each flow should work, question confusing steps and spot missing states and what could go wrong.",
    },
    {
      kind: "during",
      name: "While building",
      title: "Building it properly",
      body: "Turned requirements and designs into working screens, connected them to the APIs, added tracking for key actions and tested them.",
    },
    {
      kind: "after",
      name: "After launch",
      title: "Making it hold up",
      body: "Kept refining the experience and fixed issues as they came up in production.",
    },
  ],
  itemsTitle: "What I took care of in every feature",
  items: [
    "Reusable building blocks instead of copying the same flow twice",
    "Connecting several backend and third-party APIs",
    "Keeping what the server knows and what the screen shows in sync",
    "Fast loading, and pages that feel quick while they load",
    "Payments and network calls that don’t return a clear answer",
    "Responsive, accessible screens",
    "Tracking important actions and failures",
    "Keeping the same promise across the website and the app",
    "Tools for customers and for the internal operations team",
  ],
}

export type CaseStudyBlock = {
  heading: string
  paragraphs?: readonly string[]
  items?: readonly string[]
  ordered?: boolean
}

export type ChefkartPhoto = {
  src: string
  alt: string
  width: number
  height: number
  caption: string
}

// Free-licence stock photos; captions describe the idea, never ChefKart staff, customers or food.
// Sources are recorded in docs/asset-credits.md, not on the page.
export const chefkartPhotos = {
  chef: {
    src: "/experience/chefkart/home-chef.webp",
    alt: "An Indian woman chef in a black chef jacket stirring curry in a kadai on a gas stove in a home kitchen",
    width: 1024,
    height: 1280,
    caption: "Where every path ends: a professional cook in your kitchen",
  },
  dishes: {
    src: "/experience/chefkart/book-by-dish.webp",
    alt: "A phone showing a grid of dishes above a table of home-cooked North Indian food: paneer, dal, rice, rotis, sabzi and raita",
    width: 1280,
    height: 960,
    caption: "Book by Dish starts with the meal, not the service type",
  },
  team: {
    src: "/experience/chefkart/product-team.webp",
    alt: "A small Indian product team reviewing app wireframes on a monitor in a bright office",
    width: 1400,
    height: 933,
    caption: "Much of the work happens before the first component is written",
  },
} satisfies Record<string, ChefkartPhoto>

export type ChefkartVisual =
  | { type: "photo"; photo: ChefkartPhoto }
  | { type: "illustration"; name: "payments" | "city" | "cooks" | "party" | "operations"; caption: string }

export type CaseStudyDecision = {
  heading: string
  paragraphs: readonly string[]
  // How each kind of result is handled; drawn as a small outcome map.
  outcomes?: readonly { tone: "success" | "pending" | "fail"; label: string; detail: string }[]
  // Index of the block the decision follows; defaults to the last block.
  afterBlock?: number
}

export type ChefkartCaseStudy = {
  id: string
  label: string
  title: string
  // One-line takeaway shown under the heading.
  summary?: string
  visual?: ChefkartVisual
  decision?: CaseStudyDecision
  blocks: readonly CaseStudyBlock[]
  scale?: readonly string[]
  demonstrates?: string
}

export const chefkartCaseStudies: ChefkartCaseStudy[] = [
  {
    id: "payments",
    label: "Payments",
    title: "One payment layer for every service",
    summary:
      "Almost every ChefKart service takes money. I built the shared payment layer they all use, including Quick Buy, and designed it so an unclear payment isn’t shown as failed before the server confirms it.",
    visual: {
      type: "illustration",
      name: "payments",
      caption: "Wallet, cashback nudge, payment methods and the three ways a payment can end",
    },
    blocks: [
      {
        heading: "The problem",
        paragraphs: [
          "Customers paid for one-time bookings, Book by Dish, party bookings, packs, remaining balances, wallet top-ups and cook tips.",
          "If every service handled payments its own way, the experience would feel inconsistent and failures would be harder to control. UPI adds a twist: what the payment app reports back isn’t always the final word on whether money actually moved.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: ["A reusable React Native payment layer that every service plugs into:"],
        items: [
          "Quick Buy, using the payment methods Razorpay recommends for each customer",
          "A direct handoff to UPI apps, with Razorpay’s standard checkout as the fallback",
          "Shared building blocks: method picker, footer, pay button, loading, progress and failure screens",
          "One gateway layer for the different ways a payment can run",
          "Wallet balance, transactions, top-ups, cashback and promo cash, with wallet and online payment shown side by side",
          "Protection against double payments and rapid repeat taps",
          "Checking with the server when a result is unclear, plus clean handling of cancellations and errors",
          "Analytics on every payment step and failure, and automated tests for the critical payment code",
        ],
      },
      {
        heading: "Extra reliability work",
        paragraphs: [
          "I reviewed the whole payment flow and wrote down the risks: duplicate orders, UPI success arriving late, the app resuming mid-payment, repeated requests, pending states, verification and logging. That led to focused tests for polling, locking, analytics, error handling, amounts, Razorpay calls and Quick Buy preloading.",
        ],
      },
    ],
    decision: {
      heading: "The key decision: don’t call it “failed” too early",
      paragraphs: [
        "A UPI app can finish a payment after the customer has already come back to ChefKart. So when it returns an unclear error, showing “Payment failed” straight away might be wrong, and could push someone to pay twice.",
        "The app sorts every response first. It’s a small UX difference with real money behind it: payment screens have to be designed around uncertainty, not just the happy path.",
      ],
      outcomes: [
        { tone: "success", label: "Clear success", detail: "Confirm the booking" },
        {
          tone: "pending",
          label: "Unclear result",
          detail: "Ask the server for the real status, then decide",
        },
        { tone: "fail", label: "Clear cancel or error", detail: "Return to checkout so they can try again" },
      ],
      afterBlock: 1,
    },
    scale: [
      "Quick Buy integration: 110 files changed, 9,431 additions and 3,486 deletions",
      "Wallet: 116 files changed, 4,957 additions and 542 deletions",
      "Cashback: 84 files changed, 3,614 additions and 165 deletions",
    ],
    demonstrates:
      "Reusable architecture, third-party payment integration, careful failure handling, state management, observability, and working on a product where mistakes cost real money.",
  },
  {
    id: "book-by-dish",
    label: "Book by Dish",
    title: "Booking a cook by choosing the dish",
    summary:
      "Some customers knew what they wanted to eat before they knew which service to book. I built Book by Dish end to end, from finding a dish to paying and following the visit.",
    visual: { type: "photo", photo: chefkartPhotos.dishes },
    blocks: [
      {
        heading: "The problem",
        paragraphs: [
          "Inside the app, people didn’t always start with a service type. Sometimes they started with a dish they were craving. Book by Dish had to turn that into a full booking: finding dishes, choosing them, seeing the price for their area, checking a cook was available, picking a time, paying and following the visit afterwards.",
        ],
      },
      {
        heading: "What I built",
        items: [
          "Ways to find dishes on the home screen: offers, popular dishes and curated collections",
          "Browsing by category and cuisine, forgiving dish search, filters and dietary preferences",
          "Dish details, quantity controls, a cart and prices that change by area",
          "Choosing a location, date and time, a booking summary, coupons and offers",
          "Payment, plus screens for an active visit and after the booking",
        ],
      },
    ],
    decision: {
      heading: "The key decision: show the menu instantly, update it quietly",
      paragraphs: [
        "The dish catalogue is large, and downloading it every time the app opens would make returning customers wait. So the app keeps a saved copy and checks a small version number in the background to see whether anything changed.",
        "It also ignores repeat refreshes when someone quickly switches in and out of the app, so the same request is never sent twice.",
      ],
      outcomes: [
        {
          tone: "success",
          label: "Nothing changed",
          detail: "Show the saved menu straight away, no download",
        },
        {
          tone: "pending",
          label: "Menu updated, or nothing saved yet",
          detail: "Download the full menu once, then save it",
        },
        { tone: "pending", label: "No internet", detail: "Keep showing the last good menu" },
        { tone: "fail", label: "Saved copy is damaged", detail: "Throw it away and fetch a fresh one" },
      ],
      afterBlock: 1,
    },
    scale: ["Initial feature: 147 files changed, 14,826 additions and 452 deletions"],
    demonstrates:
      "End-to-end product ownership, Redux and saved-state design, search and catalogue screens, performance thinking, working offline, and connecting one feature across the whole booking flow.",
  },
  {
    id: "city-pages",
    label: "City pages",
    title: "City pages that lead to a real booking",
    summary:
      "People searching for a cook in their city often met ChefKart on the website first. I built city pages that work for search and stay connected to live availability, slots and prices.",
    visual: {
      type: "illustration",
      name: "city",
      caption: "Content is cached on the server; availability, prices and booking stay live",
    },
    blocks: [
      {
        heading: "The problem",
        paragraphs: [
          "Someone searching for “cooks in Gurugram” might find ChefKart on the web before ever opening the app. For them, a city page couldn’t just be an article written for Google. They wanted to know whether ChefKart covered their area, what they could book, when, and for how much. So the pages had to bring in search traffic and show live booking information at the same time.",
        ],
      },
      {
        heading: "What I built",
        items: [
          "A page for every city, rendered on the server",
          "City content, service areas, live availability, hourly slots and prices",
          "Packs, popular dishes, cuisines, featured cooks, reviews and FAQs",
          "A city directory, location picker, layouts for every screen size and a booking button that stays in view",
          "Tracking for city, slot and pack taps, SEO support and fallbacks when something is missing",
        ],
      },
      {
        heading: "Loading everything at once, not one by one",
        paragraphs: [
          "The page needs data from many separate sources. Instead of waiting for each in turn, everything that doesn’t depend on something else starts together: navigation, content, packs, the city itself, dishes, cuisines, FAQs, reviews and occasions. Once the city is known, availability, live slots, areas and featured cooks load together too.",
        ],
      },
      {
        heading: "Failing gracefully",
        paragraphs: [
          "If an optional section fails, it falls back quietly and the rest of the page keeps working, while serious failures stay visible. The page also tells apart three different situations: a real city ChefKart doesn’t serve yet, a link that doesn’t exist, and a problem on the server.",
        ],
      },
    ],
    decision: {
      heading: "The key decision: cache the content, never the promise",
      paragraphs: [
        "Some things on the page rarely change: city content, cuisines, FAQs, popular dishes and reviews. A small server-side cache keeps those. When lots of visitors arrive at once, they share one request instead of all hitting the backend.",
        "Availability and prices always come fresh. Out-of-date text is a small annoyance; an out-of-date price or slot is a broken promise to a customer.",
      ],
      outcomes: [
        {
          tone: "success",
          label: "City content, FAQs and reviews",
          detail: "Cached on the server and shared by every visitor",
        },
        {
          tone: "pending",
          label: "Availability, slots and prices",
          detail: "Always fetched live, never cached",
        },
        { tone: "fail", label: "A request that fails", detail: "Thrown away, so a failure is never saved" },
      ],
      afterBlock: 1,
    },
    scale: [
      "City pages, first version: 188 files changed, 14,739 additions and 324 deletions",
      "Live city data and booking: 78 files changed, 5,139 additions and 801 deletions",
      "Responsive location picker: 55 files changed, 1,837 additions and 404 deletions",
    ],
    demonstrates:
      "Next.js server rendering, coordinating many APIs, a careful caching strategy, performance work, keeping failures contained, and SEO-aware pages connected to live bookings.",
  },
  {
    id: "cooks-near-me",
    label: "Cooks Near Me",
    title: "Helping people choose the right cook",
    summary:
      "Some customers wanted to pick a cook first, not a service. On the website, I worked on the Cooks Near Me listing and the cook profiles behind it, building on the original pages.",
    visual: {
      type: "illustration",
      name: "cooks",
      caption: "Search and filter the list, then open a profile to see who you’re booking",
    },
    blocks: [
      {
        heading: "The problem",
        paragraphs: [
          "Letting someone cook in your kitchen takes trust. Before booking, a visitor wants to know what each cook makes, whether they cover the area, how experienced they are, what other customers thought and what it costs. The app had its own way of finding a cook, so these pages were for people who started on the website.",
        ],
      },
      {
        heading: "What I built",
        items: [
          "Search and filters to narrow down the list",
          "Each cook’s cuisines and the areas they serve",
          "Experience, ratings and customer feedback, so visitors can trust who they pick",
          "Clear prices, with API and page caching behind them",
          "Layouts for every screen size, with a clear way to start a booking",
        ],
      },
    ],
    scale: ["Listing and profile redesign: 67 files changed, 4,198 additions and 2,481 deletions"],
    demonstrates:
      "Designing for trust, presenting a lot of detail clearly, search and filter UX, caching, and turning browsing into a booking.",
  },
  {
    id: "party-bookings",
    label: "Party bookings",
    title: "Party bookings, start to finish",
    summary:
      "A party is much more than a regular cook visit. I worked on the screens that let customers plan one, pay for it in parts and change it later, and on the view the operations team used to deliver it.",
    visual: {
      type: "illustration",
      name: "party",
      caption: "The customer plans and pays; the operations team sees the same booking",
    },
    blocks: [
      {
        heading: "Why parties are harder",
        paragraphs: [
          "A customer chooses a whole menu, edits dishes and shares food preferences and instructions. They need to know which ingredients and equipment to have ready. Payment is split into an advance and a remaining amount, and the booking still has to work when extra charges come up or plans change after paying.",
        ],
      },
      {
        heading: "What I built",
        items: [
          "Editing the menu and dishes, with ingredient and equipment details",
          "Food preferences and instructions for the cook",
          "Price and payment summaries, with the advance and the remaining amount",
          "Extra charges, and the details shown after paying",
          "Cancellation and refund states",
          "Feedback and ratings for the cook",
        ],
      },
      {
        heading: "Connecting both sides",
        paragraphs: [
          "I also worked on the matching part of the operations dashboard, so everything the customer set up reached the team who had to deliver the party.",
        ],
      },
    ],
    demonstrates:
      "Handling complex booking flows, payments in parts, changes after payment, and keeping the customer app and the operations dashboard in step.",
  },
  {
    id: "operations",
    label: "Operations tools",
    title: "Tools for the team behind every visit",
    summary:
      "Customers only see half of a service business. The operations team needed their own tools to run visits, look after cooks, handle problems and keep the menu up to date, and I worked on many parts of the dashboard they used every day.",
    visual: {
      type: "illustration",
      name: "operations",
      caption: "Visit statuses, a visit timeline and an incident alert in one view",
    },
    blocks: [
      {
        heading: "Why it mattered",
        paragraphs: [
          "Every booking a customer made became work for someone. The operations team needed to see every visit, the cooks, incidents, payments, the dish catalogue and anything that went wrong, in one place.",
        ],
      },
      {
        heading: "Tracking visits",
        items: [
          "A list of every visit, with a detail page for each",
          "Filters by status, a colour key and a timeline of what happened",
          "Links to the related booking, plus technical details for troubleshooting",
        ],
      },
      {
        heading: "Handling emergencies (SOS)",
        items: [
          "A list of alerts, with details and status updates",
          "Comments, timestamps and filters",
          "Links to related records, and shared reference tables for alert types",
        ],
      },
      {
        heading: "Managing cooks",
        items: [
          "Reasons, and sub-reasons, when a cook turns down a visit",
          "Leave and penalties, and undoing a denied visit",
          "Freeing up upcoming slots, filtering by several times, and controls for availability and wallet limits",
        ],
      },
      {
        heading: "Dishes, offers and payouts",
        items: [
          "Managing cuisines, dishes and ingredients, with image upload, preview and verification",
          "More options for coupons and packs",
          "Vendor payout references, and a view of payments and cancellations",
        ],
      },
    ],
    scale: [
      "17,124 surviving source lines, about 11.72% of the dashboard’s current source",
      "First version of visit tracking: 13 files changed, 2,496 additions and 570 deletions",
    ],
    demonstrates:
      "Understanding the business beyond the customer app, and turning day-to-day operations into internal software that is clear and consistent to use. Internal tools are described at a general level; no internal screens or data are shown.",
  },
]

export const chefkartBreadthHeader = {
  label: "Breadth of work",
  title: "Everything I worked on, at a glance",
  intro:
    "The case studies above go deep on a few features. This is the full range, grouped by the product it belongs to.",
}

export const chefkartBreadth = [
  {
    surface: "Customer app",
    icon: "app",
    items: [
      "Starting in the app",
      "Onboarding",
      "Phone number and OTP autofill",
      "Choosing a location",
      "Checking area and availability",
      "Finding a service",
      "Payments",
      "Wallet",
      "Cashback",
      "Book by Dish",
      "Party booking",
      "Packs and coupons",
      "Changing cooks",
      "Visit details",
      "Ratings and feedback",
      "Help and FAQs",
      "Analytics",
      "Over-the-air app updates",
      "App stability",
    ],
  },
  {
    surface: "Customer website",
    icon: "website",
    items: [
      "Visitors from Google search and ads",
      "City pages",
      "Cooks Near Me",
      "Choosing a location",
      "Area check",
      "Live booking slots",
      "Packs",
      "Campaign pages",
      "Booking summaries",
      "A booking button that stays in view",
      "City directory",
      "SEO support",
      "Layouts for every screen size",
      "Analytics",
    ],
  },
  {
    surface: "Operations dashboard",
    icon: "dashboard",
    items: [
      "Visit tracking",
      "SOS alerts",
      "Party operations",
      "Cook availability",
      "Penalties and leave",
      "Dishes and cuisines",
      "Coupons",
      "Vendor payouts",
      "Payment tracking",
      "Customer and address search",
    ],
  },
] as const

export const chefkartPrinciplesHeader = {
  label: "Engineering",
  title: "How I make engineering decisions",
  intro: "The habits behind the case studies above, in plain words.",
}

export const chefkartPrinciples = [
  {
    icon: "risk",
    title: "Start with what could go wrong for the customer",
    body: "The simplest thing to build isn’t always the honest one. In payments, availability, pricing and delivery, showing the wrong state costs real money and trust.",
  },
  {
    icon: "reuse",
    title: "Build it once where it must behave the same",
    body: "Payment screens, booking summaries, status labels and shared operations views work best as common components with clear rules, so they behave the same everywhere.",
  },
  {
    icon: "parallel",
    title: "Don’t make work wait for no reason",
    body: "If two requests don’t depend on each other, neither should wait for the other. This shaped how the city pages load on the server.",
  },
  {
    icon: "cache",
    title: "Cache what’s stable, keep prices and slots live",
    body: "Content, menus, prices and availability go out of date at different speeds. Treating them the same either wastes resources or makes promises that are no longer true.",
  },
  {
    icon: "failure",
    title: "Plan for things going wrong",
    body: "Losing the internet, an unclear payment, a missing section, an unsupported city, a slow API, a retry or a cancellation are all part of the experience, so each one needs proper handling.",
  },
  {
    icon: "entry",
    title: "Design for every way in, not one perfect path",
    body: "A website visitor, a new app user and a returning customer start with different context. Good architecture respects that while keeping booking, payment and delivery the same for everyone.",
  },
  {
    icon: "after",
    title: "Know what happens after the button is pressed",
    body: "Working on the operations tools gave me a clearer picture of delivery, incident response and support, and that made my customer screens better.",
  },
] as const

export const chefkartEvidenceHeader = {
  label: "Contribution",
  title: "Contribution evidence",
  intro: "Where my code stands today in each of ChefKart’s four repositories.",
}

// One card per repository: a headline figure, the ownership share where published, then the rest.
export const chefkartEvidence = {
  repos: [
    {
      icon: "app",
      name: "React Native app",
      headline: "#1",
      headlineLabel: "of 18 current contributors",
      ownership: 35.05,
      facts: [
        ["62,595", "surviving lines"],
        ["240", "authored commits"],
      ],
    },
    {
      icon: "website",
      name: "Customer website",
      headline: "#1",
      headlineLabel: "of 13 current contributors",
      ownership: 33.18,
      facts: [
        ["27,450", "surviving lines"],
        ["70", "authored commits"],
      ],
    },
    {
      icon: "dashboard",
      name: "Operations dashboard",
      headline: "17,124",
      headlineLabel: "surviving lines",
      ownership: 11.72,
      facts: [["143", "authored commits"]],
    },
    {
      icon: "payments",
      name: "Payment application",
      headline: "625",
      headlineLabel: "surviving lines",
      ownership: null,
      facts: [["8", "authored commits"]],
    },
  ],
  combined: [
    { value: "461", label: "Authored commits across four repositories" },
    { value: "107,794", label: "Currently surviving source lines" },
    { value: "1,065", label: "Distinct files introduced across the three main products" },
  ],
} as const

export const chefkartStatsMethodology =
  "Current ownership was calculated with git blame on the development branches across non-blank TypeScript, JavaScript, React, CSS, SCSS and HTML source lines. Generated and vendor code was excluded, and multiple Git identities belonging to the same developer were consolidated. These numbers measure current surviving source ownership, not every line ever added. They are supporting evidence of scope; the product journeys and engineering decisions above are the more important measure of the work."

export const chefkartBringHeader = {
  label: "What I bring",
  title: "What I bring to a team",
  intro: "What the work above adds up to, for the team I join next.",
}

export const chefkartBring = [
  { icon: "journeys", text: "Ownership across multiple customer entry paths and complete service journeys" },
  { icon: "code", text: "Strong React Native, React, Next.js and TypeScript execution" },
  { icon: "product", text: "Product thinking alongside frontend engineering" },
  { icon: "payments", text: "Experience with payments and operationally sensitive workflows" },
  { icon: "performance", text: "Performance, caching and resilience thinking" },
  { icon: "surfaces", text: "Ability to work across customer and internal products" },
  { icon: "team", text: "Clear collaboration with product, design, backend, QA and operations" },
  { icon: "iterate", text: "A habit of improving features after their first release" },
] as const

export const chefkartClosing = {
  title: "I want to build products that customers depend on",
  paragraph:
    "The work I am proudest of is not a single component or a large commit. It is following a real customer problem, whether it begins on the website or inside the app, carrying it across booking and payment, understanding the operational consequences, and building a solution that stays reliable outside the happy path.",
  cta: "I’m looking for frontend and React Native opportunities where I can take meaningful product ownership, collaborate closely with product and design, and help build experiences customers use every day.",
}

export const chefkartFaqHeader = {
  label: "FAQ",
  title: "Quick answers about my ChefKart work",
  intro:
    "The short version: my role, what I built, how much of the code is mine and whether I’m open to new roles.",
}

// Every answer restates something the page already shows; nothing here is new evidence.
export const chefkartFaq = [
  {
    question: "What is your role at ChefKart?",
    answer:
      "I’m an Associate Software Engineer, working there since December 2025. I build the customer app, the website, the payment application and the dashboard the operations team uses every day.",
  },
  {
    question: "What have you built there?",
    answer:
      "Six pieces of work are covered on this page: the payment layer every service uses (including Quick Buy), Book by Dish, city pages, Cooks Near Me, party bookings and the operations team’s tools.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "React Native for the app, Next.js and React for the website and dashboard, and TypeScript throughout. Also Redux, Razorpay, server-side rendering, REST APIs, caching and analytics.",
  },
  {
    question: "Is it only front-end screens?",
    answer:
      "No. I also handle what happens when things go wrong, such as an unclear payment, no internet or a failed request. I make caching and rendering decisions too, and build tools for the operations team.",
  },
  {
    question: "How much of the code is yours?",
    answer:
      "I’m the #1 contributor on both the app (out of 18) and the website (out of 13). Across four repositories, that’s 461 commits and 107,794 lines of my code still in use. The Contribution section shows how this was measured.",
  },
  {
    question: "Are you open to new opportunities?",
    answer:
      "Yes. I’m based in Gurugram, Haryana, and open to frontend and React Native opportunities where I can own a product journey from start to finish.",
  },
]
