import { describe, expect, it } from "vitest"

import sitemap from "@/app/sitemap"
import { hirePages } from "@/config/hire-pages"
import { site } from "@/config/site"
import { enquirySources } from "@/features/contact/enquiry"
import { reactDeveloperHero } from "@/features/react-developer/data/react-developer"
import { reactNativeDeveloperHero } from "@/features/react-native-developer/data/react-native-developer"

// The H1 of each published hire page, keyed by route.
const headings: Record<string, string> = {
  "/react-developer": `${reactDeveloperHero.title} ${reactDeveloperHero.titleAccent}`,
  "/react-native-developer": `${reactNativeDeveloperHero.title} ${reactNativeDeveloperHero.titleAccent}`,
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
})
