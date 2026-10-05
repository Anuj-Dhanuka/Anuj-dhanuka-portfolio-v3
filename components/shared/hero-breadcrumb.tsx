import Link from "next/link"

type HeroBreadcrumbProps = {
  current: string
  parents?: readonly { label: string; href: string }[]
  tone?: "inverse" | "default"
}

export function HeroBreadcrumb({ current, parents = [], tone = "inverse" }: HeroBreadcrumbProps) {
  const items = [...parents, { label: current, href: null }]
  const itemClassName = "inline-flex min-h-11 min-w-0 items-center sm:min-h-0"
  const linkClassName = `inline-flex min-h-11 items-center transition-colors focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 sm:min-h-0 ${tone === "inverse" ? "hover:text-white focus-visible:ring-brand-300" : "hover:text-brand-700 focus-visible:ring-brand-500 dark:hover:text-brand-200"}`

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-5 text-xs leading-5 ${tone === "inverse" ? "text-brand-200/80" : "text-gray-600 dark:text-gray-300"}`}
    >
      <ol className="flex min-h-11 flex-nowrap items-center gap-2 sm:min-h-0">
        <li className={`${itemClassName} shrink-0 whitespace-nowrap`}>
          <Link href="/" className={linkClassName}>
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li
            key={item.href ?? item.label}
            className={`${itemClassName} gap-2 whitespace-nowrap`}
            {...(item.href === null ? { "aria-current": "page" as const } : {})}
          >
            <span className="inline-flex min-h-11 shrink-0 items-center sm:min-h-0" aria-hidden="true">
              /
            </span>
            {item.href ? (
              <Link href={item.href} className={linkClassName}>
                {item.label}
              </Link>
            ) : (
              <span
                className={`inline-flex min-h-11 min-w-0 items-center truncate font-medium sm:min-h-0 ${tone === "inverse" ? "text-white" : "text-brand-700 dark:text-brand-300"}`}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
