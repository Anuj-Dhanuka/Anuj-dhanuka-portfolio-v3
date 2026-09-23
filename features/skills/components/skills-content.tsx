import { ArrowUpRight, Award, Check, GraduationCap, Rocket, Sparkles } from "lucide-react"

import { PageSectionNav } from "@/components/shared/page-section-nav"
import { LinkButton } from "@/components/ui/link-button"
import { futureFocus } from "@/features/about/data/about"
import { deliveryApproach, experienceRoles } from "@/features/experience/data/experience"
import { SkillGroupGrid } from "@/features/skills/components/skill-group-grid"
import { skillsPageSections } from "@/features/skills/data/skills"

export function SkillsContent() {
  return (
    <>
      <PageSectionNav items={skillsPageSections} ariaLabel="Skills page sections" />

      <section
        id="core-skills"
        aria-labelledby="core-skills-heading"
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
            <p className="type-label text-brand-700 dark:text-brand-300">Core capabilities</p>
            <h2 id="core-skills-heading" className="type-section mt-4 copy-heading">
              A practical toolkit for building and improving digital products.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              These skills reflect technologies and practices I have used through professional roles, client
              delivery, training and maintained portfolio work.
            </p>
          </div>

          <div className="mt-10 md:mt-12">
            <SkillGroupGrid />
          </div>
        </div>
      </section>

      <section
        id="applied-experience"
        aria-labelledby="applied-experience-heading"
        className="scroll-mt-24 bg-white py-16 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Applied experience</p>
            <h2 id="applied-experience-heading" className="type-section mt-4 copy-heading">
              Skills connected to roles, responsibilities and delivered work.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              Technology names are most useful with context. Each role below shows where the tools were
              applied and the outcome connected to that work.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-3">
            {experienceRoles.map((role) => (
              <li
                key={role.id}
                className="flex h-full flex-col rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/45 p-5 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:from-gray-900 dark:to-brand-950/20 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="type-label text-brand-700 dark:text-brand-300">{role.company}</p>
                    <h3 className="type-card mt-3 copy-heading">{role.position}</h3>
                    <p className="type-caption mt-2 font-semibold text-gray-500 dark:text-gray-400">
                      {role.duration} · {role.workMode}
                    </p>
                  </div>
                  <span className="rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:border-brand-800/50 dark:bg-gray-950 dark:text-gray-300">
                    {role.type}
                  </span>
                </div>

                <p className="type-small mt-4 copy-body">{role.description}</p>

                <ul aria-label={"Technologies used at " + role.company} className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-brand-100 bg-white px-2.5 py-1 text-xs font-semibold text-brand-800 dark:border-brand-800/50 dark:bg-gray-950 dark:text-brand-200"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 flex items-start gap-2 border-t border-brand-100 pt-5 text-sm font-semibold leading-6 text-gray-800 dark:border-brand-900/50 dark:text-gray-200">
                  <Award className="mt-0.5 h-4 w-4 flex-none text-accent1-500" aria-hidden="true" />
                  {role.achievement}
                </p>

                <div className="mt-auto pt-6">
                  <LinkButton
                    href={role.cta?.href ?? "/experience"}
                    variant="line"
                    target={role.cta?.external ? "_blank" : undefined}
                    rel={role.cta?.external ? "noopener noreferrer" : undefined}
                    icon={<ArrowUpRight className="h-4 w-4" />}
                  >
                    {role.cta?.label ?? "Review this experience"}
                  </LinkButton>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="engineering-practice"
        aria-labelledby="engineering-practice-heading"
        className="relative scroll-mt-24 overflow-hidden bg-gray-950 py-16 text-white md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.24),transparent_34%),radial-gradient(circle_at_86%_80%,rgba(236,72,153,0.2),transparent_34%)]"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <p className="type-label text-brand-300">Engineering practice</p>
              <h2 id="engineering-practice-heading" className="type-display mt-4 max-w-xl text-white">
                The way I apply the tools matters as much as the tools themselves.
              </h2>
              <div
                className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent1-500"
                aria-hidden="true"
              />
              <p className="type-body mt-6 max-w-xl text-gray-300">
                I use technology within a repeatable delivery process that connects requirements, interface
                quality, collaboration and release readiness.
              </p>
              <LinkButton href="/experience" className="mt-8" icon={<ArrowUpRight className="h-4 w-4" />}>
                Review my professional experience
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
        id="growth"
        aria-labelledby="growth-heading"
        className="relative scroll-mt-24 overflow-hidden border-b border-brand-100 bg-brand-50/55 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Learning and direction</p>
            <h2 id="growth-heading" className="type-section mt-4 copy-heading">
              Clear about the foundation I have and the areas I am developing next.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              My current strength is frontend and mobile product development. I continue to deepen that work
              while building a broader understanding of the systems around it.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2">
            <article className="rounded-3xl border border-brand-100 bg-white p-6 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:bg-gray-950 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/15">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="type-label mt-6 text-brand-700 dark:text-brand-300">Verified foundation</p>
              <h3 className="type-card-large mt-3 copy-heading">Structured learning backed by practice.</h3>
              <p className="type-body mt-4 copy-body">
                My foundation includes CCBP coursework in responsive development, JavaScript, React, Node.js
                and databases, followed by deeper React Native study and professional product work.
              </p>
              <LinkButton
                href="/about#learning"
                variant="line"
                className="mt-7"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                View certificates and learning
              </LinkButton>
            </article>

            <article className="rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50/70 to-accent1-50/60 p-6 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:from-gray-950 dark:via-brand-950/25 dark:to-accent1-950/20 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                <Rocket className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="type-label mt-6 text-brand-700 dark:text-brand-300">Developing next</p>
              <h3 className="type-card-large mt-3 copy-heading">
                Expanding toward the complete product system.
              </h3>
              <p className="type-body mt-4 copy-body">
                These are active learning directions rather than claims of production-level expertise. The
                goal is to collaborate across a wider technical surface over time.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {futureFocus.map((focus) => (
                  <li
                    key={focus}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-sm font-semibold text-brand-800 dark:border-brand-800/60 dark:bg-gray-950 dark:text-brand-200"
                  >
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    {focus}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
