import { describe, expect, it } from "vitest"

import sitemap from "@/app/sitemap"
import { hirePages } from "@/config/hire-pages"
import { site } from "@/config/site"

describe("hire pages", () => {
  it("only lists pages that are published in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url)
    for (const page of hirePages) expect(urls).toContain(`${site.url}${page.href}`)
  })

  it("has unique routes and labels", () => {
    expect(new Set(hirePages.map((page) => page.href)).size).toBe(hirePages.length)
    expect(new Set(hirePages.map((page) => page.label)).size).toBe(hirePages.length)
  })
})
