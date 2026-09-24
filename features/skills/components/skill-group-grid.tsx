import { skillIcons } from "@/features/skills/components/skill-icons"
import { skillGroups } from "@/features/skills/data/skills"

type SkillGroupGridProps = {
  showDescriptions?: boolean
}

export function SkillGroupGrid({ showDescriptions = true }: SkillGroupGridProps) {
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skillGroups.map((group, index) => {
        const Icon = skillIcons[group.icon]
        return (
          <li
            key={group.id}
            id={group.id}
            className="group relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white p-5 shadow-[0_16px_45px_rgba(91,33,182,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_22px_55px_rgba(91,33,182,0.11)] motion-reduce:transform-none motion-reduce:transition-none dark:border-brand-900/50 dark:bg-gray-950 dark:hover:border-brand-700 sm:p-6"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-accent1-50 text-brand-700 shadow-sm dark:from-brand-900/35 dark:to-accent1-900/25 dark:text-brand-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="type-caption font-bold text-brand-700 dark:text-brand-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="type-card mt-5 copy-heading">{group.title}</h3>
            {showDescriptions ? <p className="type-small mt-3 copy-body">{group.description}</p> : null}

            <ul aria-label={`${group.title} skills`} className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-brand-100 bg-brand-50/70 px-2.5 py-1 text-xs font-semibold text-brand-800 dark:border-brand-800/50 dark:bg-brand-950/35 dark:text-brand-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
