import Link from "next/link"
import { Fragment } from "react"

import { hirePages } from "@/config/hire-pages"

// Inline text-link style, also used for links inside hire-page copy.
export const inlineLinkClass =
  "font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-accent1-700 hover:decoration-accent1-500 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300 dark:hover:text-accent1-300"

// Inline sentence linking every published hire page. With one page the whole phrase is the link
// ("…as a [React developer for hire]."), so the anchor text describes the destination on its own. With
// several, each role is linked: "…as a [React developer] or [React Native developer] for hire." It grows
// automatically as pages are added to config/hire-pages.ts.
export function HirePageLinks() {
  if (hirePages.length === 0) return null
  if (hirePages.length === 1) {
    const [page] = hirePages
    return (
      <>
        Hiring? See how I work as a{" "}
        <Link href={page.href} className={inlineLinkClass}>
          {page.role} for hire
        </Link>
        .
      </>
    )
  }
  return (
    <>
      Hiring? See how I work as a{" "}
      {hirePages.map((page, index) => (
        <Fragment key={page.href}>
          {index > 0 && (index === hirePages.length - 1 ? " or " : ", ")}
          <Link href={page.href} className={inlineLinkClass}>
            {page.role}
          </Link>
        </Fragment>
      ))}{" "}
      for hire.
    </>
  )
}
