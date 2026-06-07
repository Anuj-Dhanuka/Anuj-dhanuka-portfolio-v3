"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Monitor,
  Smartphone,
  Store,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  role: string
  description: string
  category: string
  image?: string
  images?: string[]
  type: "web" | "mobile" | "business"
  tags: string[]
  liveLink?: string
  githubLink?: string
  contributions: string[]
  accent: string
  Icon: typeof Monitor
  imageFit?: "cover" | "contain"
}

const projects: Project[] = [
  {
    title: "Rekha Maa Ki Rasoi",
    category: "Food Business Website",
    role: "WordPress · Responsive Design · UI Customisation",
    description:
      "A warm and approachable WordPress website I created for my mother's homemade food business to give the brand a professional online presence and make its services easier for customers to discover.",
    type: "business",
    image: "/Projects_images/Rekha_maa_ki_rasoi.webp",
    tags: ["WordPress", "Responsive Design", "UI Customisation"],
    liveLink: "https://rekhamaakirasoi.com/",
    contributions: [
      "Planned the website structure around customer needs.",
      "Created the visual direction and page layouts.",
      "Built and customised the website using WordPress.",
      "Organised services and business information clearly.",
      "Optimised the experience for mobile and desktop devices.",
      "Designed the interface to feel personal, trustworthy and welcoming.",
    ],
    accent: "from-brand-600 to-accent1-600",
    Icon: Store,
    imageFit: "cover",
  },
  {
    title: "Rama Technical College of Education",
    category: "Education Website",
    role: "WordPress · Responsive Design · Information Architecture · UI Customisation",
    description:
      "A professional WordPress website created to present institutional and academic information with clearer navigation, stronger content hierarchy and improved credibility.",
    type: "business",
    image: "/Projects_images/Rama_technical_college_of_education.webp",
    tags: ["WordPress", "Responsive Design", "Information Architecture", "UI Customisation"],
    liveLink: "https://rtceindia.in/#",
    contributions: [
      "Structured institutional information into clear and accessible sections.",
      "Designed and developed the complete website using WordPress.",
      "Improved navigation and content readability.",
      "Created a professional visual style suited to an educational institution.",
      "Optimised the layout across mobile, tablet and desktop screens.",
    ],
    accent: "from-accent2-600 to-brand-600",
    Icon: BriefcaseBusiness,
    imageFit: "cover",
  },
  {
    title: "Mopedo",
    category: "React Web Application",
    role: "React.js · JavaScript · CSS3 · Responsive Design",
    description:
      "A responsive single-page React application for an urban mobility platform offering bike taxi, food delivery and goods-delivery services.",
    image: "/Projects_images/Mopedo.webp",
    type: "web",
    tags: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
    liveLink: "https://mopedo.netlify.app/",
    contributions: [
      "Created the complete website experience from concept to implementation.",
      "Developed reusable interface components using React.",
      "Built responsive, mobile-first sections.",
      "Presented multiple services within a consistent visual system.",
      "Added clear calls to action throughout the application.",
      "Optimised the interface for different screen sizes.",
    ],
    accent: "from-brand-600 to-accent2-600",
    Icon: Monitor,
    imageFit: "cover",
  },
  {
    title: "Levels App",
    category: "React Native Application",
    role: "React Native · JavaScript · Mobile UI · Dynamic Content",
    description:
      "A mobile quiz application built during my internship at 3rd Eye Lab, featuring category-based questions, dynamic content loading and intuitive user flows.",
    images: ["/levels-app-quiz.webp", "/levels-app-categories.webp", "/levels-app-login.webp"],
    type: "mobile",
    tags: ["React Native", "JavaScript", "Mobile UI", "Dynamic Content"],
    githubLink: "https://github.com/Anuj-Dhanuka/levels-app",
    contributions: [
      "Built the application screens using React Native.",
      "Implemented category selection and quiz-question flows.",
      "Added dynamic question-loading behaviour.",
      "Created reusable screens and clear navigation.",
      "Completed the project ahead of schedule.",
      "Delivered additional features beyond the original requirements.",
    ],
    accent: "from-brand-600 to-accent1-600",
    Icon: Smartphone,
  },
]

function ProjectVisual({ project }: { project: Project }) {
  if (project.type === "mobile" && project.images?.length) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent1-50 dark:from-brand-950/30 dark:via-gray-950 dark:to-accent1-950/20">
        <div
          className={`absolute inset-x-8 bottom-2 h-28 rounded-full bg-gradient-to-r ${project.accent} opacity-20 blur-3xl`}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex h-full max-w-md items-center justify-center">
          {project.images.map((image, index) => (
            <div
              key={image}
              className={[
                "absolute overflow-hidden rounded-[1.5rem] border-[6px] border-gray-950 bg-gray-950 shadow-2xl shadow-purple-500/20",
                index === 0
                  ? "z-20 h-[224px] w-[110px] sm:h-[270px] sm:w-[132px] lg:h-[296px] lg:w-[146px]"
                  : index === 1
                    ? "left-4 z-10 h-[190px] w-[94px] -rotate-6 opacity-85 sm:left-8 sm:h-[232px] sm:w-[114px] lg:h-[256px] lg:w-[126px]"
                    : "right-4 z-10 h-[190px] w-[94px] rotate-6 opacity-85 sm:right-8 sm:h-[232px] sm:w-[114px] lg:h-[256px] lg:w-[126px]",
              ].join(" ")}
            >
              <Image
                src={image}
                alt={`${project.title} screen ${index + 1}`}
                width={292}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
          priority
        />
      </div>
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {project.liveLink && (
        <Button
          asChild
          className="h-11 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:from-brand-700 hover:to-accent1-700"
        >
          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
            View Live Project
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      )}
      {project.githubLink && (
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-lg border-purple-200 bg-white px-5 text-brand-700 hover:bg-purple-50 dark:border-purple-800/50 dark:bg-gray-950/30 dark:text-brand-300 dark:hover:bg-purple-900/20"
        >
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            View Source
            <Code2 className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ProjectIcon = project.Icon

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-purple-100 bg-white/92 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 dark:border-purple-800/30 dark:bg-gray-950/35"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${project.accent}`} aria-hidden="true" />
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-accent1-600 dark:text-accent1-300">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600 dark:border-brand-800/50 dark:bg-brand-900/25 dark:text-brand-300">
            <ProjectIcon className="h-5 w-5" />
          </span>
        </div>

        <p className="mt-3 text-sm font-semibold leading-6 text-brand-700 dark:text-brand-300">{project.role}</p>
        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{project.description}</p>

        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
            My contribution
          </p>
          <ul className="mt-3 space-y-2">
            {project.contributions.map((contribution) => (
              <li key={contribution} className="flex gap-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${project.accent}`} />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple-100 bg-purple-50/70 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_82%_50%,rgba(219,39,119,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_14%_18%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_82%_50%,rgba(236,72,153,0.12),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
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
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            SELECTED PROJECTS
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Projects that show how I turn ideas into complete digital experiences.
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
            Each project was planned and built by me, from structuring the content and defining the visual direction
            to development and responsive implementation.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
