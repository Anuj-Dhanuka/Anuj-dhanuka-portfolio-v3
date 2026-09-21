import Link from "next/link"
import { CodeXml } from "lucide-react"

import { skillIcons } from "@/features/skills/components/skill-icons"
import { skillGroups } from "@/features/skills/data/skills"

const planetLayout = [
  {
    position: "left-1/2 top-[3%] -translate-x-1/2",
    panel: "left-1/2 top-full mt-3 -translate-x-1/2",
  },
  {
    position: "right-[3%] top-[24%]",
    panel: "right-full top-1/2 mr-3 -translate-y-1/2",
  },
  {
    position: "bottom-[16%] right-[5%]",
    panel: "bottom-0 right-full mr-3",
  },
  {
    position: "bottom-[1%] left-1/2 -translate-x-1/2",
    panel: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  },
  {
    position: "bottom-[16%] left-[5%]",
    panel: "bottom-0 left-full ml-3",
  },
  {
    position: "left-[3%] top-[24%]",
    panel: "left-full top-1/2 ml-3 -translate-y-1/2",
  },
] as const

const planetThemes = [
  {
    node: "border-brand-300/25 from-brand-900/90 via-gray-950 to-gray-950 text-brand-200 group-hover:border-brand-300/70 group-hover:shadow-[0_12px_36px_rgba(139,92,246,0.38)]",
    badge: "border-brand-300/40 bg-brand-600",
    glow: "bg-brand-500/35",
  },
  {
    node: "border-accent2-300/25 from-accent2-900/90 via-gray-950 to-gray-950 text-accent2-200 group-hover:border-accent2-300/70 group-hover:shadow-[0_12px_36px_rgba(99,102,241,0.38)]",
    badge: "border-accent2-300/40 bg-accent2-600",
    glow: "bg-accent2-500/35",
  },
  {
    node: "border-accent1-300/25 from-accent1-900/90 via-gray-950 to-gray-950 text-accent1-200 group-hover:border-accent1-300/70 group-hover:shadow-[0_12px_36px_rgba(236,72,153,0.38)]",
    badge: "border-accent1-300/40 bg-accent1-600",
    glow: "bg-accent1-500/35",
  },
  {
    node: "border-brand-300/25 from-brand-800/90 via-gray-950 to-gray-950 text-brand-100 group-hover:border-brand-200/70 group-hover:shadow-[0_12px_36px_rgba(168,85,247,0.36)]",
    badge: "border-brand-200/40 bg-brand-700",
    glow: "bg-brand-400/30",
  },
  {
    node: "border-accent2-300/25 from-accent2-800/90 via-gray-950 to-gray-950 text-accent2-100 group-hover:border-accent2-200/70 group-hover:shadow-[0_12px_36px_rgba(129,140,248,0.36)]",
    badge: "border-accent2-200/40 bg-accent2-700",
    glow: "bg-accent2-400/30",
  },
  {
    node: "border-accent1-300/25 from-accent1-800/90 via-gray-950 to-gray-950 text-accent1-100 group-hover:border-accent1-200/70 group-hover:shadow-[0_12px_36px_rgba(244,114,182,0.36)]",
    badge: "border-accent1-200/40 bg-accent1-700",
    glow: "bg-accent1-400/30",
  },
] as const

const totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0)

export function SkillsOrbit() {
  return (
    <nav aria-label="Skills galaxy" className="relative isolate mx-auto aspect-square w-full max-w-[520px]">
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-gradient-to-br from-brand-500/20 via-accent2-500/10 to-accent1-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-[15%] rotate-12 scale-y-[0.42] rounded-full border border-brand-300/20 shadow-[0_0_35px_rgba(139,92,246,0.13)]" />
      <div className="pointer-events-none absolute inset-[18%] -rotate-12 scale-y-[0.62] rounded-full border border-accent1-300/15" />
      <div className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.17),transparent_28%),radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.13)_0_1px,transparent_2px),radial-gradient(circle_at_73%_67%,rgba(249,168,212,0.2)_0_1px,transparent_2px)] bg-[length:auto,38px_38px,52px_52px] shadow-[inset_0_0_90px_rgba(124,58,237,0.1)]" />

      <div className="skills-galaxy-ring inset-[10%]">
        <span className="absolute left-[14%] top-[5%] h-1.5 w-1.5 rounded-full bg-brand-300 shadow-[0_0_12px_rgba(196,181,253,0.9)]" />
      </div>
      <div className="skills-galaxy-ring inset-[22%] [animation-direction:reverse] [animation-duration:36s]">
        <span className="absolute bottom-[8%] right-[12%] h-1.5 w-1.5 rounded-full bg-accent1-300 shadow-[0_0_12px_rgba(249,168,212,0.85)]" />
      </div>
      <div className="skills-galaxy-ring inset-[34%] [animation-duration:24s]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/25 bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.28),transparent_22%),linear-gradient(145deg,#7c3aed_0%,#6d28d9_48%,#db2777_100%)] text-center shadow-[0_0_0_8px_rgba(139,92,246,0.07),0_0_34px_rgba(139,92,246,0.58),0_0_90px_rgba(219,39,119,0.26)] lg:h-32 lg:w-32">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
          <CodeXml className="h-5 w-5" />
        </span>
        <span className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-white">
          Skills galaxy
        </span>
        <span className="mt-0.5 text-[10px] font-medium text-brand-100">
          {totalSkills} skills · {skillGroups.length} areas
        </span>
        <span className="mt-0.5 text-[8px] font-medium text-brand-200">Explore each area</span>
      </div>

      <ul className="absolute inset-0 z-30">
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[group.icon]
          const layout = planetLayout[index]
          const theme = planetThemes[index]

          return (
            <li key={group.id} className={`group absolute ${layout.position}`}>
              <Link
                href={`#${group.id}`}
                className="flex min-h-16 min-w-20 flex-col items-center justify-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-950"
                aria-label={`${group.title}: ${group.skills.length} skills`}
              >
                <span
                  className={`absolute top-2 h-12 w-12 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 lg:h-14 lg:w-14 ${theme.glow}`}
                  aria-hidden="true"
                />
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full border bg-gradient-to-br shadow-[0_10px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm transition duration-300 group-hover:-translate-y-1 motion-reduce:transform-none lg:h-14 lg:w-14 ${theme.node}`}
                >
                  <Icon className="h-5 w-5 lg:h-6 lg:w-6" aria-hidden="true" />
                  <span
                    className={`absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border px-1 text-[9px] font-bold text-white ${theme.badge}`}
                  >
                    {group.skills.length}
                  </span>
                </span>
                <span className="mt-1.5 max-w-28 rounded-full border border-white/10 bg-gray-950/65 px-2 py-1 text-center text-[10px] font-bold leading-3 text-white/90 shadow-sm backdrop-blur-sm">
                  {group.title}
                </span>
              </Link>

              <div
                className={`pointer-events-none invisible absolute z-40 w-64 rounded-2xl border border-white/15 bg-gray-950/95 p-4 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-md transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${layout.panel}`}
                aria-hidden="true"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg border bg-gradient-to-br ${theme.node}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">{group.title}</p>
                    <p className="mt-0.5 text-[10px] text-gray-400">{group.skills.length} applied skills</p>
                  </div>
                </div>
                <p className="mt-3 text-[10px] leading-4 text-gray-300">{group.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-brand-400/20 bg-brand-500/10 px-2 py-1 text-[10px] font-medium leading-4 text-brand-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <span className="pointer-events-none absolute right-[8%] top-[46%] h-2 w-2 rounded-full bg-accent1-300 shadow-[0_0_14px_rgba(249,168,212,0.85)]" />
      <span className="pointer-events-none absolute bottom-[14%] left-[27%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
      <span className="pointer-events-none absolute left-[12%] top-[42%] h-1 w-1 rounded-full bg-accent2-200 shadow-[0_0_9px_rgba(199,210,254,0.9)]" />
      <span className="pointer-events-none absolute right-[23%] top-[12%] h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]" />
    </nav>
  )
}
