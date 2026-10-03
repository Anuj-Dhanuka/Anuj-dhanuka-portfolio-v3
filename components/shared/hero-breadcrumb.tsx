import Link from "next/link"

type HeroBreadcrumbProps = {
  current: string
  parents?: readonly { label: string; href: string }[]
}

export function HeroBreadcrumb({ current, parents = [] }: HeroBreadcrumbProps) {
  const items = [...parents, { label: current, href: null }]
  const itemClassName = "inline-flex min-h-11 min-w-0 items-center sm:min-h-0"

  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-xs leading-5 text-brand-200/80">
      <ol className="flex min-h-11 flex-nowrap items-center gap-2 sm:min-h-0">
        <li className={`${itemClassName} shrink-0 whitespace-nowrap`}>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 sm:min-h-0"
          >
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
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 sm:min-h-0"
              >
                {item.label}
              </Link>
            ) : (
              <span className="inline-flex min-h-11 min-w-0 items-center truncate font-medium text-white sm:min-h-0">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
