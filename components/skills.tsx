"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Code2,
  GitBranch,
  MonitorSmartphone,
  PenTool,
  ShoppingBag,
  Sparkles,
} from "lucide-react"

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Development", "API Integration"],
    Icon: Code2,
  },
  {
    title: "Mobile Development",
    skills: [
      "React Native",
      "Mobile UI Development",
      "App Navigation",
      "Cross-Device Compatibility",
      "Performance Optimisation",
    ],
    Icon: MonitorSmartphone,
  },
  {
    title: "Design-to-Code",
    skills: [
      "Figma-to-Code",
      "Pixel-Accurate Development",
      "Responsive Layouts",
      "Visual Hierarchy",
      "Interaction States",
      "UI Refinement",
    ],
    Icon: PenTool,
  },
  {
    title: "Platforms",
    skills: ["WordPress", "Shopify", "Shopify Liquid", "Webflow", "Firebase"],
    Icon: ShoppingBag,
  },
  {
    title: "Development Workflow",
    skills: [
      "Git",
      "GitHub",
      "Analytics Implementation",
      "Debugging",
      "Code Review",
      "Production Issue Resolution",
    ],
    Icon: GitBranch,
  },
]

const aiTools = ["Claude", "Codex", "ChatGPT"]

export function Skills() {
  return (
    <section id="skills" className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24">
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
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <Sparkles className="h-3.5 w-3.5" />
            TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Skills Built Through Real Work
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
        </motion.div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, skills, Icon }, index) => (
            <motion.article
              key={title}
              className="group relative overflow-hidden rounded-lg border border-purple-100 bg-white/92 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_24px_60px_rgba(124,58,237,0.13)] dark:border-purple-800/35 dark:bg-gray-950/60 dark:hover:border-brand-700/70 sm:p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand-500/10 to-accent1-500/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-accent1-50 text-brand-600 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:from-brand-900/30 dark:to-accent1-900/20 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-300 dark:text-gray-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold leading-tight text-gray-900 dark:text-white">{title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-purple-100 bg-purple-50/70 px-2.5 py-1 text-xs font-semibold text-brand-700 transition-colors duration-300 group-hover:border-brand-100 group-hover:bg-brand-50 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300 dark:group-hover:bg-brand-900/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}

          <motion.article
            className="group relative overflow-hidden rounded-lg border border-purple-100 bg-gradient-to-br from-white via-purple-50/70 to-pink-50/70 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_24px_60px_rgba(124,58,237,0.13)] dark:border-purple-800/35 dark:from-gray-950/85 dark:via-purple-950/25 dark:to-pink-950/20 dark:hover:border-brand-700/70 sm:p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
          >
            <span
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent1-600 text-white shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105">
                  <Bot className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-300 dark:text-gray-600">
                  06
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                AI-Assisted Tools
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-purple-100 bg-white/80 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium leading-6 text-gray-700 dark:text-gray-200">
                I use AI tools to support research, debugging and development while keeping technical decisions and
                final implementation under my control.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
