import Image from "next/image"
import { CheckCircle, Monitor, Smartphone } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { CaseStudyProject } from "@/features/projects/project-details"

type Screenshot = CaseStudyProject["caseStudy"]["screenshots"][number]

// Mirrors the homepage "Product experience" section: pill tabs, copy on the left, staged visual on the right.
// Both tabs compare the same pricing section, so the layout change is the only variable.
const views = [
  {
    id: "desktop",
    tabLabel: "Desktop",
    Icon: Monitor,
    category: "Desktop · 1440px",
    title: "Plans compared side by side.",
    description:
      "On wide screens the pricing section uses the full width, so visitors can compare every plan without scrolling between them.",
    points: [
      "Three plan cards sit in one row",
      "The most popular plan is highlighted in the centre",
      "The Standard and Premium switch sits above all plans",
      "Every plan keeps its own booking action",
    ],
    tags: ["Multi-column grid", "Side-by-side comparison"],
    chip: "3 columns",
  },
  {
    id: "mobile",
    tabLabel: "Mobile",
    Icon: Smartphone,
    category: "Mobile · 390px",
    title: "One readable column on phones.",
    description:
      "On phones the same content keeps its order and reflows into a single column, without a separate mobile page.",
    points: [
      "Plan cards stack at full width",
      "Headings, spacing and text scale down together",
      "Booking buttons stay full width and easy to tap",
      "A sticky bar keeps the enquiry action within reach",
    ],
    tags: ["Single column", "Touch-friendly actions"],
    chip: "1 column",
  },
] as const

function Stage({ id, chip, screenshots }: { id: string; chip: string; screenshots: readonly Screenshot[] }) {
  const [screenshot] = screenshots
  const isMobile = id === "mobile"

  return (
    <div className="relative flex items-start justify-center py-6 sm:py-8 lg:py-4">
      <div
        className="absolute left-1/2 top-1/2 h-[78%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300/45 via-accent1-300/35 to-white blur-3xl dark:to-transparent"
        aria-hidden="true"
      />
      <div
        className={`absolute right-0 w-[72%] rounded-lg bg-gradient-to-br from-brand-500 to-accent1-500 opacity-25 shadow-2xl shadow-purple-500/20 ${
          // Behind the phones, clear of their captions; the desktop frame keeps the lower offset.
          isMobile ? "bottom-[18%] h-[52%]" : "bottom-0 h-[62%]"
        }`}
        aria-hidden="true"
      />

      {isMobile ? (
        // Two consecutive phone screens: the plans keep stacking as the visitor scrolls.
        <div className="relative z-10 flex items-start justify-center gap-4 sm:gap-6">
          {screenshots.map((screen, index) => (
            <div
              key={screen.src}
              className={`w-[150px] sm:w-[200px] lg:w-[180px] xl:w-[195px] ${index === 1 ? "mt-10 sm:mt-12" : ""}`}
            >
              <div className="overflow-hidden rounded-[1.6rem] border-[5px] border-gray-900 bg-gray-950 shadow-[0_28px_90px_rgba(124,58,237,0.35)] ring-1 ring-purple-200/60 dark:ring-purple-800/40 sm:rounded-[2rem] sm:border-[6px]">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(min-width: 640px) 210px, 150px"
                  className="h-auto w-full"
                />
              </div>
              <p className="type-caption mt-3 text-center font-semibold copy-body">
                {index === 0 ? "Screen 1: section start" : "Screen 2: plans continue"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative z-10 w-[96%] rounded-lg bg-white/80 p-3 shadow-[0_28px_90px_rgba(124,58,237,0.24)] backdrop-blur dark:bg-gray-950/50">
          <div className="overflow-hidden rounded-lg border border-purple-100 bg-white p-2 shadow-[0_24px_80px_rgba(124,58,237,0.22)] dark:border-purple-800/40 dark:bg-gray-950">
            <div className="overflow-hidden rounded-md bg-gray-950">
              <div
                className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-accent1-400" />
                <span className="h-2 w-2 rounded-full bg-brand-300" />
                <span className="h-2 w-2 rounded-full bg-gray-500" />
              </div>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="h-auto w-full"
              />
            </div>
            <p className="type-label mt-3 px-2 pb-1 text-brand-600 dark:text-brand-300">Pricing section</p>
          </div>
        </div>
      )}

      <div className="absolute -right-1 top-6 z-20 hidden rounded-full border border-purple-100 bg-white/90 px-4 py-2 shadow-lg shadow-purple-500/15 backdrop-blur dark:border-purple-800/40 dark:bg-gray-950/80 sm:block">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent1-500" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] copy-body">{chip}</span>
        </div>
      </div>
    </div>
  )
}

export function RekhaResponsiveShowcase({
  desktop,
  mobile,
}: {
  desktop: Screenshot
  mobile: readonly [Screenshot, Screenshot]
}) {
  return (
    <section
      id="responsive"
      aria-labelledby="responsive-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
            04 / Responsive design
          </p>
          <h2 id="responsive-heading" className="type-section copy-heading">
            One hierarchy, adapted for desktop and mobile.
          </h2>
          <div
            className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
            aria-hidden="true"
          />
          <p className="type-body mt-6 copy-body">
            The same pricing section on two screens. The content and its order stay fixed; only the layout
            changes.
          </p>
        </div>

        <Tabs defaultValue={views[0].id} className="mt-8 w-full">
          <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TabsList className="inline-flex h-auto min-w-max gap-3 bg-transparent p-0 copy-body">
              {views.map(({ id, tabLabel, Icon }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="min-h-12 rounded-full border border-purple-100 bg-gradient-to-r from-brand-50 to-accent1-50 px-6 py-3 text-sm font-bold text-gray-700 shadow-sm shadow-purple-500/5 transition-[background-color,background-image,border-color,color,box-shadow] duration-300 ease-out hover:border-brand-200 hover:from-brand-100 hover:to-accent1-100 data-[state=active]:border-transparent data-[state=active]:from-brand-500 data-[state=active]:to-accent1-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 dark:border-purple-800/40 dark:from-brand-900/25 dark:to-accent1-900/20 dark:text-gray-300"
                >
                  <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  {tabLabel}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {views.map(({ id, category, title, description, points, tags, chip }) => (
            <TabsContent key={id} value={id} className="mt-8">
              <article className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="order-2 lg:order-1">
                  <p className="type-label text-accent1-600 dark:text-accent1-300">{category}</p>
                  <h3 className="type-section mt-3 copy-heading">{title}</h3>
                  <p className="type-body mt-5 max-w-2xl copy-body">{description}</p>

                  <p className="mt-8 text-2xl font-bold copy-heading">What changes</p>
                  <ul className="mt-4 space-y-3">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-base leading-7 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle
                          className="mt-1 h-5 w-5 flex-shrink-0 text-brand-600 dark:text-brand-300"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-7 flex flex-wrap gap-2" aria-label="Layout traits">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-purple-100 bg-purple-50/70 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="order-1 lg:order-2">
                  <Stage id={id} chip={chip} screenshots={id === "mobile" ? mobile : [desktop]} />
                </div>
              </article>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
