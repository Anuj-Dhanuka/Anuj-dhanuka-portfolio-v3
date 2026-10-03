import { Check, Code2, Layers3, LayoutPanelTop, Smartphone } from "lucide-react"
import type { ProjectCaseStudy } from "@/features/projects/data/projects"

const decisionIcons = [LayoutPanelTop, Layers3]

export function MopedoEngineeringNotes({ detail }: { detail: ProjectCaseStudy }) {
  return (
    <div className="mt-12 space-y-12 border-t border-brand-100 pt-12 dark:border-brand-900/50 md:mt-14 md:space-y-12 md:pt-14">
      {detail.decisions && (
        <section id="decisions" aria-labelledby="decisions-heading" className="scroll-mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Implementation choices</p>
            <h3 id="decisions-heading" className="type-section mt-4 copy-heading">
              Engineering decisions
            </h3>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
            {detail.decisions.map((decision, index) => {
              const Icon = decisionIcons[index] ?? Code2
              const iconTone =
                index % 2 === 0
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300"
                  : "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300"

              return (
                <article
                  key={decision.title}
                  className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-sm shadow-brand-950/5 dark:border-gray-800 dark:bg-gray-900/85 sm:p-6 lg:p-8"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600"
                    aria-hidden="true"
                  />
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${iconTone}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h4 className="type-card min-w-0 pt-1 copy-heading">{decision.title}</h4>
                  </div>
                  <p className="type-small mt-5 copy-body">{decision.description}</p>
                </article>
              )
            })}
          </div>
        </section>
      )}
      {detail.challenge && (
        <section
          id="challenge"
          aria-labelledby="challenge-heading"
          className="relative isolate scroll-mt-28 overflow-hidden rounded-2xl border border-brand-900/50 bg-gray-950 p-5 text-white sm:p-8 lg:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/80 via-transparent to-accent1-950/40"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="max-w-3xl">
              <p className="type-label text-brand-300">Challenge and approach</p>
              <h3 id="challenge-heading" className="type-card-large mt-3 text-white">
                {detail.challenge.title}
              </h3>
            </div>
            <span className="type-caption inline-flex w-fit flex-none items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-2 font-semibold text-brand-200">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              768px and below
            </span>
          </div>
          <dl className="mt-7 grid overflow-hidden rounded-xl border border-white/15 bg-white/5 md:grid-cols-2">
            <div className="p-5 sm:p-7">
              <dt className="type-label flex items-center gap-2 text-brand-200">
                <LayoutPanelTop className="h-4 w-4" aria-hidden="true" />
                Layout problem
              </dt>
              <dd className="type-small mt-4 text-gray-300">{detail.challenge.problem}</dd>
            </div>
            <div className="border-t border-white/15 bg-brand-500/10 p-5 sm:p-7 md:border-t-0 md:border-l">
              <dt className="type-label flex items-center gap-2 text-brand-200">
                <Check className="h-4 w-4" aria-hidden="true" />
                Implementation
              </dt>
              <dd className="type-small mt-4 text-gray-300">{detail.challenge.approach}</dd>
            </div>
          </dl>
        </section>
      )}
    </div>
  )
}
