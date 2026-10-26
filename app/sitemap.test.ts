import { afterEach, describe, expect, it, vi } from "vitest"

import sitemap from "@/app/sitemap"

afterEach(() => vi.useRealTimers())

describe("public sitemap", () => {
  it("contains only public pages and reviewed case studies without crawl-frequency hints", () => {
    const entries = sitemap()
    const urls = entries.map((entry) => entry.url)

    expect(urls).toEqual([
      "https://anujdhanuka.com/",
      "https://anujdhanuka.com/about",
      "https://anujdhanuka.com/experience",
      "https://anujdhanuka.com/skills",
      "https://anujdhanuka.com/projects",
      "https://anujdhanuka.com/certifications",
      "https://anujdhanuka.com/contact",
      "https://anujdhanuka.com/projects/rekha-maa-ki-rasoi",
      "https://anujdhanuka.com/projects/mopedo",
      "https://anujdhanuka.com/projects/quizwar",
    ])
    expect(new Set(urls).size).toBe(entries.length)
    for (const entry of entries) {
      expect(entry).not.toHaveProperty("priority")
      expect(entry).not.toHaveProperty("changeFrequency")
      expect(entry.lastModified).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Number.isFinite(Date.parse(String(entry.lastModified)))).toBe(true)
    }
  })

  it("does not mark unchanged pages as updated when the build or request time changes", () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2030-01-01T00:00:00Z"))
    const first = sitemap()
    vi.setSystemTime(new Date("2031-01-01T00:00:00Z"))

    expect(sitemap()).toEqual(first)
  })
})
