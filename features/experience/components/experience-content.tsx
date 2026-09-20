import {
  ArrowUpRight,
  Check,
  CreditCard,
  LayoutDashboard,
  MonitorSmartphone,
  Smartphone,
  Trophy,
} from "lucide-react"

import { PageSectionNav } from "@/components/shared/page-section-nav"
import { LinkButton } from "@/components/ui/link-button"
import { site } from "@/config/site"
import { ExperienceRoleCard } from "@/features/experience/components/experience-role-card"
import { deliveryApproach, experienceRoles, productSurfaces } from "@/features/experience/data/experience"

const experienceSections = [
  { href: "#roles", label: "Professional roles" },
  { href: "#product-scope", label: "Product scope" },
  { href: "#collaboration", label: "How I work" },
  { href: "#experience-proof", label: "Evidence" },
] as const

const surfaceIcons = {
  mobile: Smartphone,
  website: MonitorSmartphone,
  dashboard: LayoutDashboard,
  payment: CreditCard,
} as const

const evidence = [
  {
    label: "Project evidence",
    title: "Selected web and mobile projects",
    description: "Review interfaces built across React, React Native and business website platforms.",
    href: "/projects",
    linkLabel: "Explore selected projects",
    external: false,
  },
  {
    label: "Professional recognition",
    title: "Technology & Engineering · May 2026",
    description: "View the ChefKart appreciation connected to contributions across live product experiences.",
    href: site.recognitionUrl,
    linkLabel: "View ChefKart recognition",
    external: true,
  },
  {
    label: "Career context",
    title: "The journey behind the work",
    description: "See how business ownership, structured learning and design mentorship shaped my approach.",
    href: "/about",
    linkLabel: "Read my career story",
    external: false,
  },
] as const

export function ExperienceContent() {
  return (
    <>
      <PageSectionNav items={experienceSections} ariaLabel="Experience page sections" />

      <section
        id="roles"
        aria-labelledby="roles-heading"
        className="relative scroll-mt-24 overflow-hidden border-b border-brand-100 bg-brand-50/55 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Professional roles</p>
            <h2 id="roles-heading" className="type-section mt-4 copy-heading">
              Experience that progressed from mobile development to complete product delivery.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              Each role added a different layer: React Native fundamentals, multi-platform client delivery and
              ongoing ownership across live customer and internal products.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:mt-16">
            {experienceRoles.map((role) => (
              <ExperienceRoleCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="product-scope"
        aria-labelledby="product-scope-heading"
        className="scroll-mt-24 bg-white py-16 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Current product scope</p>
            <h2 id="product-scope-heading" className="type-section mt-4 copy-heading">
              Contributing across customer journeys and the systems that support them.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              At ChefKart, my frontend work spans four connected product surfaces rather than a single screen
              or platform.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {productSurfaces.map((surface) => {
              const SurfaceIcon = surfaceIcons[surface.icon]
              return (
                <li
                  key={surface.title}
                  className="rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/55 p-5 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:from-gray-900 dark:to-brand-950/20 sm:p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/15">
                    <SurfaceIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="type-card mt-5 copy-heading">{surface.title}</h3>
                  <p className="type-small mt-3 copy-body">{surface.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        id="collaboration"
        aria-labelledby="collaboration-heading"
        className="relative scroll-mt-24 overflow-hidden bg-gray-950 py-16 text-white md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.24),transparent_34%),radial-gradient(circle_at_86%_80%,rgba(236,72,153,0.2),transparent_34%)]"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <p className="type-label text-brand-300">Cross-functional delivery</p>
              <h2 id="collaboration-heading" className="type-display mt-4 max-w-xl text-white">
                How I contribute within a product team.
              </h2>
              <div
                className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent1-500"
                aria-hidden="true"
              />
              <p className="type-body mt-6 max-w-xl text-gray-300">
                I connect implementation with user needs, business context and the work of the teammates who
                design, build and operate the product alongside me.
              </p>
              <LinkButton href="/projects" className="mt-8" icon={<ArrowUpRight className="h-4 w-4" />}>
                See this approach in my projects
              </LinkButton>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              {deliveryApproach.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="type-caption font-bold text-brand-300">0{index + 1}</span>
                  </div>
                  <h3 className="type-card mt-5 text-white">{step.title}</h3>
                  <p className="type-small mt-3 text-gray-300">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="experience-proof"
        aria-labelledby="experience-proof-heading"
        className="scroll-mt-24 border-b border-brand-100 bg-brand-50/55 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Evidence</p>
            <h2 id="experience-proof-heading" className="type-section mt-4 copy-heading">
              Follow the work, recognition and story behind the experience.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              These links connect the role descriptions to project examples, professional recognition and the
              longer career journey.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3">
            {evidence.map((item, index) => (
              <li
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:bg-gray-950"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="type-label text-brand-700 dark:text-brand-300">{item.label}</p>
                  {index === 1 ? (
                    <Trophy className="h-5 w-5 text-accent1-500" aria-hidden="true" />
                  ) : (
                    <span className="type-caption font-bold text-brand-400">0{index + 1}</span>
                  )}
                </div>
                <h3 className="type-card mt-5 copy-heading">{item.title}</h3>
                <p className="type-small mt-3 flex-1 copy-body">{item.description}</p>
                <LinkButton
                  href={item.href}
                  variant="line"
                  className="mt-6 self-start"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  {item.linkLabel}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
