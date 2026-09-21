import Link from "next/link"

type HeroBreadcrumbProps = {
  current: string
}

export function HeroBreadcrumb({ current }: HeroBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-xs text-brand-200/80">
      <ol className="flex items-center gap-3">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-medium text-white">
          {current}
        </li>
      </ol>
    </nav>
  )
}
