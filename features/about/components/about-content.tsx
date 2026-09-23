import Link from "next/link"
import { ArrowUpRight, Award, Check, Sparkles, Trophy } from "lucide-react"

import { PageSectionNav } from "@/components/shared/page-section-nav"
import { LinkButton } from "@/components/ui/link-button"
import { site } from "@/config/site"
import {
  certificates,
  futureFocus,
  journey,
  productSurfaces,
  storyStrengths,
} from "@/features/about/data/about"

const aboutSections = [
  { href: "#story-foundation", label: "My approach" },
  { href: "#journey", label: "Career journey" },
  { href: "#learning", label: "Credentials" },
  { href: "#current-chapter", label: "Current work" },
] as const

export function AboutContent() {
  return (
    <>
      <PageSectionNav items={aboutSections} ariaLabel="About page sections" />

      <section
        id="story-foundation"
        aria-labelledby="story-foundation-heading"
        className="relative scroll-mt-24 overflow-hidden bg-white py-16 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <p className="type-label text-brand-700 dark:text-brand-300">What shaped my approach</p>
              <h2 id="story-foundation-heading" className="type-display mt-4 max-w-xl copy-heading">
                Built through learning, responsibility and real delivery.
              </h2>
              <div
                className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600"
                aria-hidden="true"
              />
              <div className="mt-6 max-w-xl space-y-4 text-base leading-8 copy-body">
                <p>
                  My career has grown one responsibility at a time: studying mechanical engineering,
                  supporting an agro-trading business, learning software from the fundamentals, delivering
                  client work and now contributing to live digital products.
                </p>
                <p>
                  That path helps me see an interface from several perspectives: the person using it, the
                  business depending on it and the team that must keep improving it.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {storyStrengths.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="grid gap-4 rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/55 p-5 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:from-gray-900 dark:to-brand-950/20 sm:grid-cols-[52px_1fr] sm:p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/15">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="type-card copy-heading">{title}</h3>
                    <p className="type-small mt-2 copy-body">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="journey"
        aria-labelledby="journey-heading"
        className="relative scroll-mt-24 overflow-hidden border-y border-brand-100 bg-brand-50/55 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
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
            <p className="type-label text-brand-700 dark:text-brand-300">Career journey</p>
            <h2 id="journey-heading" className="type-section mt-4 copy-heading">
              From mechanical engineering and business operations to product engineering.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              Each chapter added a skill I still use today: structured thinking, ownership, technical
              foundations, design judgment and collaboration on production software.
            </p>
          </div>

          <ol className="mx-auto mt-12 max-w-5xl space-y-5 md:mt-16 md:space-y-0">
            {journey.map(({ period, title, description, proof, skills, Icon }, index) => (
              <li
                key={`${period}-${title}`}
                className="grid gap-3 md:grid-cols-[56px_minmax(0,1fr)] md:gap-6"
              >
                <div className="relative hidden justify-center md:flex" aria-hidden="true">
                  {index < journey.length - 1 ? (
                    <span className="absolute bottom-0 top-14 w-px bg-gradient-to-b from-brand-300 to-brand-100 dark:from-brand-700 dark:to-brand-900" />
                  ) : null}
                  <span className="relative z-10 mt-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-brand-50 bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/20 dark:border-gray-900">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                <article className="mb-3 rounded-2xl border border-brand-100 bg-white p-5 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-800/40 dark:bg-gray-950 sm:p-7 md:mb-8">
                  <p className="mb-4 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-300">
                    {period}
                  </p>
                  <div className="flex items-start gap-3 md:hidden">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent1-600 text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="type-card pt-1 copy-heading">{title}</h3>
                  </div>
                  <h3 className="type-card hidden copy-heading md:block">{title}</h3>
                  <p className="type-body mt-4 copy-body">{description}</p>
                  <p className="mt-4 rounded-xl border border-brand-100 bg-brand-50/70 px-4 py-3 text-sm font-medium leading-6 text-brand-900 dark:border-brand-900/50 dark:bg-brand-950/30 dark:text-brand-100">
                    {proof}
                  </p>
                  <ul aria-label={`Skills and context for ${title}`} className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-gray-600 dark:border-brand-800/50 dark:bg-gray-900 dark:text-gray-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="learning"
        aria-labelledby="learning-heading"
        className="relative scroll-mt-24 overflow-hidden bg-white py-16 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">Continuous learning</p>
            <h2 id="learning-heading" className="type-section mt-4 copy-heading">
              A software foundation built through structured learning and practice.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              My CCBP coursework covered static, responsive and dynamic web applications, followed by deeper
              React Native study. The credentials below support the projects and practical experience that
              followed.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {certificates.map(({ title, issuer, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-32 items-start gap-4 rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/45 p-5 shadow-[0_12px_35px_rgba(91,33,182,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_18px_45px_rgba(91,33,182,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none dark:border-brand-900/50 dark:from-gray-900 dark:to-brand-950/20 dark:hover:border-brand-700"
                  aria-label={`View ${title} certificate from ${issuer}`}
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-700 dark:text-brand-300">
                      {issuer}
                    </span>
                    <span className="mt-2 block text-sm font-bold leading-6 copy-heading">{title}</span>
                  </span>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 flex-none text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="current-chapter"
        aria-labelledby="current-chapter-heading"
        className="relative scroll-mt-24 overflow-hidden border-t border-brand-100 bg-gray-950 py-16 text-white dark:border-brand-900/50 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.24),transparent_34%),radial-gradient(circle_at_86%_80%,rgba(236,72,153,0.2),transparent_34%)]"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-sm lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
              <p className="type-label text-brand-300">Current chapter</p>
              <h2 id="current-chapter-heading" className="type-section mt-4 text-white">
                Building products at ChefKart and learning from the complete product cycle.
              </h2>
              <p className="type-body mt-5 text-gray-300">
                I work directly with backend engineers, designers and product managers, with guidance from the
                co-founder and CTO. The short feedback loop lets me share ideas, improve them quickly and
                carry approved features through implementation and release.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {productSurfaces.map((surface) => (
                  <li key={surface} className="flex items-start gap-3 text-sm leading-6 text-gray-200">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {surface}
                  </li>
                ))}
              </ul>

              <LinkButton
                href={site.recognitionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                View my ChefKart recognition
              </LinkButton>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent1-600 text-white shadow-lg shadow-brand-500/20">
                  <Trophy className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="type-label mt-7 text-accent1-300">Technology &amp; Engineering · May 2026</p>
                <h3 className="type-card-large mt-3 text-white">Recognition backed by live product work.</h3>
                <p className="type-small mt-3 text-gray-300">
                  The appreciation reflects contributions across customer-facing and internal product
                  experiences, including the launch of new features and services.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2 text-brand-200">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <p className="text-sm font-bold">What I want to learn next</p>
                </div>
                <p className="type-small mt-3 text-gray-300">
                  I want to understand more of the complete product system while continuing to deepen my
                  frontend and mobile expertise.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {futureFocus.map((focus) => (
                    <li
                      key={focus}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-gray-200"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="type-small mx-auto mt-8 max-w-2xl text-center text-gray-300">
            See how this journey translates into interfaces and shipped work in my{" "}
            <Link
              href="/projects"
              className="font-semibold text-brand-300 underline-offset-4 hover:text-accent1-300 hover:underline"
            >
              selected web and mobile projects
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
