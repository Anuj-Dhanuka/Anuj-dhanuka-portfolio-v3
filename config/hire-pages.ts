// Published hire-intent pages ("React developer for hire", later role pages and the landing-page and Figma-to-website service pages). This one list feeds the
// header Hire Me dropdown, the /hire overview and the contextual links on Skills and Experience (the footer
// shows a shorter selection, below), so a new page appears in all of them by adding one entry here. Add a page only once its route is live and in the sitemap; the test beside
// this file checks that.
export type HirePage = {
  // Footer link text: the page's H1, so the link makes sense on its own (Google anchor-text guidance).
  label: string
  // Lower-case role used inside sentences, e.g. "React developer".
  role: string
  href: `/${string}`
}

export const hirePages: readonly HirePage[] = [
  { label: "React Developer for Hire", role: "React developer", href: "/react-developer" },
  {
    label: "React Native Developer for Hire",
    role: "React Native developer",
    href: "/react-native-developer",
  },
  { label: "Frontend Developer for Hire", role: "frontend developer", href: "/frontend-developer" },
  { label: "Shopify Developer for Hire", role: "Shopify developer", href: "/shopify-developer" },
  { label: "WordPress Developer for Hire", role: "WordPress developer", href: "/wordpress-developer" },
  // A service page rather than a role page (hence the route), listed with the hire pages.
  {
    label: "Landing Page Development Services",
    role: "landing page developer",
    href: "/landing-page-development",
  },
  {
    label: "Figma to Website Development Services",
    role: "Figma-to-website developer",
    href: "/figma-to-website",
  },
]

// The central Hire Me overview. It is not a registry entry (it never lists itself); it is the parent level
// in each specialist page's breadcrumb (Home / Hire Me / page), matching the site's navigation path rather
// than the URL, so the specialist URLs stay unchanged.
export const hireHub = { label: "Hire Me", href: "/hire" } as const

// Breadcrumb levels between Home and the current page: Hire Me for the seven registry pages, none for /hire.
export function hireBreadcrumbParents(path: string): readonly { label: string; href: string }[] {
  return hirePages.some((page) => page.href === path) ? [hireHub] : []
}

// Footer "Hire Me" column (owner request, 21 November 2026): the five role pages only, with short names,
// then a link to the /hire overview, which lists every page including the two service pages.
const footerRoles = [
  ["/react-developer", "React Developer"],
  ["/react-native-developer", "React Native Developer"],
  ["/frontend-developer", "Frontend Developer"],
  ["/shopify-developer", "Shopify Developer"],
  ["/wordpress-developer", "WordPress Developer"],
] as const

export const footerHireLinks: readonly { label: string; href: string }[] = [
  ...footerRoles.map(([href, label]) => {
    if (!hirePages.some((page) => page.href === href)) {
      throw new Error(`Footer links to ${href}, which is not in config/hire-pages.ts`)
    }
    return { label, href }
  }),
  { label: "View all hiring options", href: hireHub.href },
]
