import { ArrowUpRight, Check, FileText, Layers3, Link2, MessageSquareText } from "lucide-react"

import { LinkButton } from "@/components/ui/link-button"
import { site } from "@/config/site"
import { contactSteps, messageGuidance } from "@/features/contact/data/contact"

const guidanceIcons = [MessageSquareText, Layers3, Check, Link2] as const

export function ContactGuidance() {
  return (
    <>
      <section
        id="what-to-share"
        aria-labelledby="what-to-share-heading"
        className="scroll-mt-24 border-y border-brand-100 bg-brand-50/55 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Helpful context</p>
            <h2 id="what-to-share-heading" className="type-section mt-4 copy-heading">
              What to include in your first message.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              You do not need a complete brief. A few practical details help me understand the opportunity and
              respond more clearly.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {messageGuidance.map((item, index) => {
              const Icon = guidanceIcons[index]
              return (
                <li
                  key={item.title}
                  className="rounded-2xl border border-brand-100 bg-white p-5 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:bg-gray-950 sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-md shadow-brand-500/15">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="type-card mt-5 copy-heading">{item.title}</h3>
                  <p className="type-small mt-3 copy-body">{item.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        id="what-happens-next"
        aria-labelledby="what-happens-next-heading"
        className="scroll-mt-24 bg-gradient-to-br from-brand-950 via-gray-950 to-accent1-950 py-16 text-white md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
            <div>
              <p className="type-label text-brand-300">What happens next</p>
              <h2 id="what-happens-next-heading" className="type-section mt-4 text-white">
                A straightforward path from message to conversation.
              </h2>
              <div
                className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent1-500"
                aria-hidden="true"
              />
              <p className="type-body mt-6 max-w-xl text-gray-300">
                I value clear context, direct communication and enough information for both sides to assess
                the fit.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href="/experience"
                  className="w-full sm:w-auto"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Review my experience
                </LinkButton>
                <LinkButton
                  href="/projects"
                  variant="outlineInverse"
                  className="w-full sm:w-auto"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Explore selected projects
                </LinkButton>
              </div>
            </div>

            <ol className="grid gap-4">
              {contactSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:grid-cols-[48px_1fr] sm:p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-sm font-bold text-brand-200">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="type-card text-white">{step.title}</h3>
                    <p className="type-small mt-2 text-gray-300">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-gray-300">
            <FileText className="mt-0.5 h-4 w-4 flex-none text-accent1-300" aria-hidden="true" />
            <p>
              Prefer a direct email? Write to{" "}
              <a
                href={"mailto:" + site.email}
                className="font-semibold text-white underline decoration-brand-400 underline-offset-4 hover:text-brand-200"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
