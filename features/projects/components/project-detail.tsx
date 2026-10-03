import Image from "next/image"
import Link from "next/link"
import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { LinkButton } from "@/components/ui/link-button"
import { ProjectLinks } from "@/features/projects/components/projects"
import { getRelatedProjects, projectPath, type CaseStudyProject } from "@/features/projects/project-details"

const sectionClass = "scroll-mt-28 border-b border-brand-100 py-12 dark:border-brand-900/40 md:py-16"
const textLinkClass =
  "inline-flex min-h-11 items-center font-semibold text-brand-700 underline underline-offset-4 hover:text-accent1-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:text-brand-300 dark:hover:text-accent1-300"

export function ProjectDetail({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const related = getRelatedProjects(project)

  return (
    <article>
      <header className="relative isolate overflow-hidden pb-12 pt-24 text-white md:pb-16 md:pt-32">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBreadcrumb current={project.title} parents={[{ label: "Projects", href: "/projects" }]} />
          <p className="type-label mb-4 text-brand-200">{project.category} · Case study</p>
          <h1 className="type-hero max-w-4xl text-white">{project.title}</h1>
          <p className="type-lead mt-6 max-w-3xl copy-inverse-body">{detail.summary}</p>
          <dl className="mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div>
              <dt className="type-label text-brand-200">My responsibility</dt>
              <dd className="type-small mt-2 text-white">{detail.responsibility}</dd>
            </div>
            <div>
              <dt className="type-label text-brand-200">Technology and interface focus</dt>
              <dd className="type-small mt-2 text-white">{project.tags.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <PageSectionNav
        items={[
          { href: "#context", label: "Project context" },
          { href: "#contribution", label: "My contribution" },
          { href: "#implementation", label: "Implementation" },
          { href: "#outcome", label: "Deliverables" },
          { href: "#screenshots", label: "Screenshots & links" },
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <section id="context" aria-labelledby="context-heading" className={sectionClass}>
            <h2 id="context-heading" className="type-section copy-heading">
              Project context
            </h2>
            <p className="type-body mt-5 max-w-3xl copy-body">{detail.context}</p>
            {detail.experienceHref && (
              <Link href={detail.experienceHref} className={`${textLinkClass} mt-4`}>
                Read about my 3rd Eye Lab internship
              </Link>
            )}
          </section>

          <section id="contribution" aria-labelledby="contribution-heading" className={sectionClass}>
            <h2 id="contribution-heading" className="type-section copy-heading">
              My contribution
            </h2>
            <ul className="type-body mt-5 list-disc space-y-3 pl-5 copy-body">
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </section>

          <section id="implementation" aria-labelledby="implementation-heading" className={sectionClass}>
            <h2 id="implementation-heading" className="type-section copy-heading">
              Technical implementation
            </h2>
            <div className="mt-7 space-y-8">
              {detail.implementation.map((item) => (
                <div key={item.title}>
                  <h3 className="type-card copy-heading">{item.title}</h3>
                  <p className="type-body mt-3 max-w-3xl copy-body">{item.description}</p>
                </div>
              ))}
            </div>
            <Link href="/skills#core-skills" className={`${textLinkClass} mt-5`}>
              Explore my frontend and mobile skills
            </Link>
          </section>

          <section id="outcome" aria-labelledby="outcome-heading" className={sectionClass}>
            <h2 id="outcome-heading" className="type-section copy-heading">
              Deliverables
            </h2>
            <ul className="type-body mt-5 list-disc space-y-3 pl-5 copy-body">
              {detail.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>

          <section id="screenshots" aria-labelledby="screenshots-heading" className={sectionClass}>
            <h2 id="screenshots-heading" className="type-section copy-heading">
              Screenshots and verification
            </h2>
            <div className={`mt-7 grid gap-6 ${project.type === "mobile" ? "sm:grid-cols-3" : ""}`}>
              {detail.screenshots.map((screenshot) => (
                <figure key={screenshot.src} className="min-w-0">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes={
                      project.type === "mobile"
                        ? "(min-width: 640px) 280px, 260px"
                        : "(min-width: 1024px) 896px, 100vw"
                    }
                    className={`h-auto rounded-xl border border-brand-100 dark:border-brand-900/50 ${project.type === "mobile" ? "mx-auto w-full max-w-[260px]" : "w-full"}`}
                  />
                  <figcaption className="type-small mt-3 copy-body">{screenshot.alt}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8">
              <ProjectLinks project={project} />
            </div>
          </section>

          {related.length > 0 && (
            <section aria-labelledby="related-heading" className="py-12 md:py-16">
              <h2 id="related-heading" className="type-section copy-heading">
                Related project work
              </h2>
              <p className="type-body mt-4 copy-body">
                More interface work using{" "}
                {project.tags.filter((tag) => related.some((item) => item.tags.includes(tag))).join(" and ")}.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 dark:border-brand-900/50 dark:bg-brand-950/20"
                  >
                    <h3 className="type-card copy-heading">{item.title}</h3>
                    <p className="type-small mt-3 copy-body">{item.description}</p>
                    <LinkButton href={projectPath(item)} variant="line" className="mt-5">
                      Read the {item.title} case study
                    </LinkButton>
                  </div>
                ))}
              </div>
              <Link href="/experience" className={`${textLinkClass} mt-6`}>
                Explore my professional experience
              </Link>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}
