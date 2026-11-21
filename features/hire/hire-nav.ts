import type { ProjectNavItem } from "@/components/layout/projects-nav"
import { hirePages } from "@/config/hire-pages"

// Header "Hire Me" dropdown: the seven specialist pages from the registry (link text is each page's H1, as
// in the footer), followed by the menu's "View all" link to /hire. Built on the server like the project list.
export const hireNavItems: ProjectNavItem[] = hirePages.map((page) => ({
  id: page.href.slice(1),
  title: page.label,
  href: page.href,
}))
