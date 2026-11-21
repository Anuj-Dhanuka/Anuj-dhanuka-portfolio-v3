// Published hire-intent pages ("React developer for hire" and future role pages). This one list feeds the
// footer "Hire Me" column and the contextual links on Skills and Experience, so a new page appears in all
// three by adding one entry here. Add a page only once its route is live and in the sitemap; the test beside
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
]
