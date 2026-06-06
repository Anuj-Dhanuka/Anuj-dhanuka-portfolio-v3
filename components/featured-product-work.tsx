"use client"

import { motion } from "framer-motion"
import { BarChart3, CheckCircle, LayoutDashboard, Monitor, Smartphone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const productAreas = [
  {
    id: "mobile-app",
    category: "Customer Mobile Application",
    tabLabel: "Mobile App",
    title: "Building clear and dependable customer journeys.",
    technologies: ["React Native", "JavaScript", "Analytics", "Mobile UI"],
    description:
      "I develop and improve mobile experiences that help customers complete important service-related actions with confidence.",
    contributions: [
      "Booking and visit-detail experiences",
      "Wallet and payment journeys",
      "Payment-failure and refund communication",
      "Cancellation and service-state interfaces",
      "Party and ingredient-related experiences",
      "Customer interaction analytics",
      "Responsive behaviour across mobile devices",
    ],
    Icon: Smartphone,
    image: {
      src: "/product-work/mobile-app-3d.png",
      alt: "Modern 3D illustration of mobile app UI design",
      accent: "Mobile journeys",
    },
  },
  {
    id: "dashboard",
    category: "Internal Dashboard",
    tabLabel: "Dashboard",
    title: "Improving tools used by internal teams.",
    technologies: ["React.js", "JavaScript", "Dashboard UI", "Responsive Design"],
    description:
      "I contribute to internal dashboard interfaces by improving structure, consistency, usability and the presentation of operational information.",
    contributions: [
      "Dashboard module redesigns",
      "Responsive web interfaces",
      "Information hierarchy",
      "Reusable UI components",
      "Internal workflow improvements",
      "Interface consistency",
    ],
    Icon: LayoutDashboard,
    image: {
      src: "/product-work/dashboard-3d.png",
      alt: "Modern 3D illustration of dashboard UI and analytics",
      accent: "Workflow clarity",
    },
  },
  {
    id: "website",
    category: "Website",
    tabLabel: "Website",
    title: "Supporting a consistent experience across web touchpoints.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    description:
      "I contribute to website improvements that maintain visual consistency and support ChefKart's broader customer experience.",
    contributions: [
      "Responsive frontend implementation",
      "UI refinement",
      "Content presentation",
      "Cross-device compatibility",
      "Visual consistency",
    ],
    Icon: Monitor,
    image: {
      src: "/product-work/website-3d.png",
      alt: "Modern 3D illustration of digital marketing and web experience",
      accent: "Responsive web",
    },
  },
]

function ProductImage({
  image,
}: {
  image: {
    src: string
    alt: string
    accent: string
  }
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-purple-100 bg-white p-2 shadow-[0_24px_80px_rgba(124,58,237,0.22)] dark:border-purple-800/40 dark:bg-gray-950">
      <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-gradient-to-br from-brand-50 via-white to-accent1-50">
        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-transparent to-accent1-500/10"
          aria-hidden="true"
        />
      </div>
      <p className="mt-3 px-2 pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
        {image.accent}
      </p>
    </div>
  )
}

export function FeaturedProductWork() {
  return (
    <section
      id="product-work"
      className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_86%_36%,rgba(219,39,119,0.07),transparent_32%),linear-gradient(180deg,#ffffff_0%,#faf7ff_50%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_12%_14%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_86%_36%,rgba(236,72,153,0.12),transparent_32%),linear-gradient(180deg,#111827_0%,#0f172a_50%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-10 -z-10 -translate-x-1/2 text-[15vw] font-black leading-none tracking-normal text-purple-900/[0.025] dark:text-white/[0.02]"
        aria-hidden="true"
      >
        PRODUCT
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
              <BarChart3 className="h-3.5 w-3.5" />
              PRODUCT EXPERIENCE
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Contributing across a live digital product ecosystem.
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
              At ChefKart, I work across customer-facing and internal products where clarity, usability and reliable
              frontend execution directly support customer actions and business operations.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 w-full"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Tabs defaultValue={productAreas[0].id} className="w-full">
            <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="inline-flex h-auto min-w-max gap-3 bg-transparent p-0 text-gray-600 dark:text-gray-300">
                {productAreas.map(({ id, tabLabel, Icon }) => (
                  <TabsTrigger
                    key={id}
                    value={id}
                    className="min-h-12 rounded-full border border-purple-100 bg-gradient-to-r from-brand-50 to-accent1-50 px-6 py-3 text-sm font-bold text-gray-700 shadow-sm shadow-purple-500/5 transition-[background-color,background-image,border-color,color,box-shadow,transform] duration-300 ease-out hover:border-brand-200 hover:from-brand-100 hover:to-accent1-100 data-[state=active]:border-transparent data-[state=active]:from-brand-500 data-[state=active]:to-accent1-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 dark:border-purple-800/40 dark:from-brand-900/25 dark:to-accent1-900/20 dark:text-gray-300 dark:hover:from-brand-900/35 dark:hover:to-accent1-900/30"
                  >
                    <Icon className="mr-2 h-4 w-4 transition-colors duration-300 ease-out" />
                    {tabLabel}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {productAreas.map(
              ({ id, category, title, technologies, description, contributions, image }) => (
                <TabsContent key={id} value={id} className="mt-12">
                  <article className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="order-2 lg:order-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent1-600 dark:text-accent1-300">
                        {category}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
                        {title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300">
                        {description}
                      </p>

                      <div className="mt-8">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">Areas of contribution</p>
                        <ul className="mt-4 space-y-3">
                          {contributions.map((item) => (
                            <li key={item} className="flex gap-3 text-base leading-7 text-gray-700 dark:text-gray-300">
                              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand-600 dark:text-brand-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-purple-100 bg-purple-50/70 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                    </div>

                    <div className="relative order-1 min-h-[380px] lg:order-2 lg:min-h-[500px]">
                      <div
                        className="absolute left-1/2 top-1/2 h-[78%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300/45 via-accent1-300/35 to-white blur-3xl"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-0 right-0 h-[70%] w-[72%] rounded-lg bg-gradient-to-br from-brand-500 to-accent1-500 opacity-25 shadow-2xl shadow-purple-500/20" />
                      <div className="absolute inset-x-0 top-0 z-10 mx-auto w-[94%] rounded-lg bg-white/80 p-3 shadow-[0_28px_90px_rgba(124,58,237,0.24)] backdrop-blur dark:bg-gray-950/50">
                        <ProductImage image={image} />
                      </div>
                      <div className="absolute -right-1 top-8 z-20 hidden rounded-full border border-purple-100 bg-white/90 px-4 py-2 shadow-lg shadow-purple-500/15 backdrop-blur dark:border-purple-800/40 dark:bg-gray-950/80 sm:block">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent1-500" />
                          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-600 dark:text-gray-300">
                            UI focus
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </TabsContent>
              ),
            )}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
