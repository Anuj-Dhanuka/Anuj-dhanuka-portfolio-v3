import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { HeroBackground } from "@/components/shared/hero-background"
import { LinkButton } from "@/components/ui/link-button"
import { projects } from "@/features/projects/data/projects"

export function ProjectsHero() {
  const webProject = projects.find((project) => project.id === "mopedo")!
  const mobileProject = projects.find((project) => project.id === "levels-app")!

  return (
    <section
      aria-labelledby="projects-hero-heading"
      className="relative overflow-hidden pb-12 pt-20 text-white md:pb-14 md:pt-24 lg:min-h-[75svh] lg:pb-12 lg:pt-24"
    >
      <HeroBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0 text-left">
            <nav aria-label="Breadcrumb" className="mb-5 text-xs text-brand-200/80">
              <ol className="flex items-center gap-3">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-white">
                  Projects
                </li>
              </ol>
            </nav>

            <div className="space-y-5">
              <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-950/70 px-3 py-1 font-medium text-brand-200 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
                Projects overview
              </p>
              <h1 id="projects-hero-heading" className="type-hero max-w-2xl text-white">
                Web and mobile projects, <span className="hero-gradient-text">built with purpose.</span>
              </h1>
              <p className="type-lead max-w-2xl copy-inverse-body">
                I’m Anuj Dhanuka, a software engineer and frontend developer building responsive web and
                mobile experiences with React, React Native and WordPress. Explore selected work, the
                technology behind it and my contribution to each project.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href="#selected-work"
                  className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                  icon={<ArrowDown className="h-4 w-4" />}
                >
                  Explore my projects
                </LinkButton>
                <LinkButton
                  href="/contact"
                  variant="outlineInverse"
                  className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Let’s work together
                </LinkButton>
              </div>
              <p className="type-small hidden text-brand-200 sm:block">
                {projects.length} selected projects{" "}
                <span className="px-2" aria-hidden="true">
                  ·
                </span>{" "}
                Web, mobile &amp; business websites
              </p>
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-[500px] lg:block">
            <div
              className="pointer-events-none absolute inset-[10%] rounded-full bg-gradient-to-br from-brand-600/25 to-accent1-600/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-[7%] rounded-full border border-brand-300/15"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-[18%] rounded-full border border-brand-300/10"
              aria-hidden="true"
            />

            <a
              href="#project-mopedo"
              className="absolute left-[2%] top-[19%] block w-[86%] overflow-hidden rounded-2xl border border-brand-300/30 bg-gray-950 shadow-2xl shadow-brand-950/60 transition-transform hover:z-30 hover:-translate-y-1 focus-visible:z-30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300"
              aria-label="Explore the Mopedo web development project"
            >
              <div
                className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2.5"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent1-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-200" />
                <span className="ml-2 text-[10px] text-gray-300 sm:text-xs">
                  {webProject.title} / Web experience
                </span>
              </div>
              <div className="relative aspect-video bg-white">
                <Image
                  src={webProject.image!}
                  alt="Mopedo website showing its mobility and delivery services"
                  fill
                  priority
                  sizes="(min-width: 1024px) 448px, (min-width: 640px) 430px, 80vw"
                  className="object-contain"
                />
              </div>
            </a>
            <a
              href="#project-levels-app"
              className="absolute bottom-[13%] right-[1%] block w-[24%] overflow-hidden rounded-[1.4rem] border-[4px] border-gray-700 bg-gray-950 shadow-2xl shadow-black/60 transition-transform hover:z-30 hover:-translate-y-1 focus-visible:z-30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300"
              aria-label="Explore the Levels mobile app project"
            >
              <Image
                src={mobileProject.images![0]}
                alt="Levels App quiz question with multiple-choice answers"
                width={292}
                height={600}
                sizes="125px"
                className="h-auto w-full"
              />
            </a>
            <div className="absolute bottom-[12%] left-[9%] flex items-center gap-3 rounded-xl border border-brand-300/20 bg-brand-950/70 px-4 py-3 shadow-lg backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-100 sm:text-sm">
                Designed for web &amp; mobile
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
