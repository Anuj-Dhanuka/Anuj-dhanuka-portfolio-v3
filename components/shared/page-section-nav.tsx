import Link from "next/link"
import { ArrowDown } from "lucide-react"

type SectionLink = {
  href: `#${string}`
  label: string
}

type PageSectionNavProps = {
  items: readonly SectionLink[]
  label?: string
  ariaLabel?: string
}

export function PageSectionNav({
  items,
  label = "On this page",
  ariaLabel = "Page sections",
}: PageSectionNavProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="border-b border-brand-100 bg-white dark:border-brand-900/40 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="type-label whitespace-nowrap text-brand-700 dark:text-brand-300">{label}</p>
          <ul className="grid grid-cols-2 gap-2 sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-none lg:w-full lg:max-w-3xl">
            {items.map(({ href, label: itemLabel }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex min-h-11 items-center justify-between gap-2 rounded-xl border border-brand-100 bg-brand-50/55 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-brand-900/50 dark:bg-brand-950/20 dark:text-gray-200 dark:hover:border-brand-700 dark:hover:text-brand-300"
                >
                  <span>{itemLabel}</span>
                  <ArrowDown
                    className="h-4 w-4 flex-none text-brand-500 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
