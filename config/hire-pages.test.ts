import { describe, expect, it } from "vitest"

import sitemap from "@/app/sitemap"
import { footerHireLinks, hireBreadcrumbParents, hireHub, hirePages } from "@/config/hire-pages"
import { site } from "@/config/site"
import { enquirySources } from "@/features/contact/enquiry"
import { figmaToWebsiteHero } from "@/features/figma-to-website/data/figma-to-website"
import { landingPageDevelopmentHero } from "@/features/landing-page-development/data/landing-page-development"
import { frontendDeveloperHero } from "@/features/frontend-developer/data/frontend-developer"
import { reactDeveloperHero } from "@/features/react-developer/data/react-developer"
import { reactNativeDeveloperHero } from "@/features/react-native-developer/data/react-native-developer"
import { shopifyDeveloperHero } from "@/features/shopify-developer/data/shopify-developer"
import { hirePage } from "@/features/hire/data/hire"
import { hireNavItems } from "@/features/hire/hire-nav"
import { hirePageJsonLd } from "@/features/hire-pages/seo"
import { wordpressDeveloperHero } from "@/features/wordpress-developer/data/wordpress-developer"

// The H1 of each published hire page, keyed by route.
const headings: Record<string, string> = {
  "/react-developer": `${reactDeveloperHero.title} ${reactDeveloperHero.titleAccent}`,
  "/react-native-developer": `${reactNativeDeveloperHero.title} ${reactNativeDeveloperHero.titleAccent}`,
  "/frontend-developer": `${frontendDeveloperHero.title} ${frontendDeveloperHero.titleAccent}`,
  "/shopify-developer": `${shopifyDeveloperHero.title} ${shopifyDeveloperHero.titleAccent}`,
  "/wordpress-developer": `${wordpressDeveloperHero.title} ${wordpressDeveloperHero.titleAccent}`,
  "/landing-page-development": `${landingPageDevelopmentHero.title} ${landingPageDevelopmentHero.titleAccent}`,
  "/figma-to-website": `${figmaToWebsiteHero.title} ${figmaToWebsiteHero.titleAccent}`,
}

describe("hire pages", () => {
  it("only lists pages that are published in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url)
    for (const page of hirePages) expect(urls).toContain(`${site.url}${page.href}`)
  })

  it("has unique routes and labels", () => {
    expect(new Set(hirePages.map((page) => page.href)).size).toBe(hirePages.length)
    expect(new Set(hirePages.map((page) => page.label)).size).toBe(hirePages.length)
  })

  it("uses each page's exact H1 as its link text and accepts the page as a contact source", () => {
    for (const page of hirePages) {
      expect(page.label).toBe(headings[page.href])
      expect(enquirySources).toContain(page.href.slice(1))
    }
  })

  it("puts every specialist page under Hire Me in its breadcrumb trail, and /hire directly under Home", () => {
    const trail = (path: `/${string}`, breadcrumb: string) => {
      const graph = hirePageJsonLd({ ...hirePage, path, breadcrumb })["@graph"]
      const list = graph.find((node) => node["@type"] === "BreadcrumbList") as {
        itemListElement: { position: number; name: string; item: string }[]
      }
      return list.itemListElement.map(({ position, name, item }) => [position, name, item])
    }
    for (const page of hirePages) {
      expect(hireBreadcrumbParents(page.href)).toEqual([hireHub])
      expect(trail(page.href, "Page")).toEqual([
        [1, "Home", site.homeUrl],
        [2, "Hire Me", `${site.url}/hire`],
        [3, "Page", `${site.url}${page.href}`],
      ])
    }
    expect(hireBreadcrumbParents(hirePage.path)).toEqual([])
    expect(trail(hirePage.path, hirePage.breadcrumb)).toEqual([
      [1, "Home", site.homeUrl],
      [2, "Hire Me", `${site.url}/hire`],
    ])
  })

  it("feeds the header Hire Me dropdown from the registry, without listing /hire itself", () => {
    expect(hireNavItems.map(({ title, href }) => ({ title, href }))).toEqual(
      hirePages.map(({ label, href }) => ({ title: label, href })),
    )
    expect(hireNavItems.map((item) => item.href)).not.toContain(hireHub.href)
  })

  it("keeps the footer to the five role pages and a link to the Hire Me overview", () => {
    expect(footerHireLinks).toEqual([
      { label: "React Developer", href: "/react-developer" },
      { label: "React Native Developer", href: "/react-native-developer" },
      { label: "Frontend Developer", href: "/frontend-developer" },
      { label: "Shopify Developer", href: "/shopify-developer" },
      { label: "WordPress Developer", href: "/wordpress-developer" },
      { label: "View all hiring options", href: "/hire" },
    ])
  })
})
