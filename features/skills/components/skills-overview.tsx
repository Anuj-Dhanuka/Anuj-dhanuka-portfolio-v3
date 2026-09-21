import { ArrowUpRight, Sparkles } from "lucide-react"

import { LinkButton } from "@/components/ui/link-button"
import { SkillGroupGrid } from "@/features/skills/components/skill-group-grid"

export function SkillsOverview() {
  return (
    <section
      id="skills"
      aria-labelledby="home-skills-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(219,39,119,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_12%_14%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(236,72,153,0.12),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Technical skills
          </div>
          <h2 id="home-skills-heading" className="type-section copy-heading">
            Skills Built Through Real Work
          </h2>
          <div
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
            aria-hidden="true"
          />
          <p className="type-body mx-auto mt-6 max-w-2xl copy-body">
            A concise view of the technologies and product practices I use across web, mobile and business
            platforms.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <SkillGroupGrid showDescriptions={false} />
        </div>

        <div className="mt-10 flex justify-center">
          <LinkButton href="/skills" variant="line" icon={<ArrowUpRight className="h-4 w-4" />}>
            Explore my complete skills profile
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
