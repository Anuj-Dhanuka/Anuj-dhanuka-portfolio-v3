import { describe, expect, it } from "vitest"

import { metadata } from "@/app/hire/page"
import sitemap from "@/app/sitemap"
import { hirePages } from "@/config/hire-pages"
import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import * as page from "@/features/hire/data/hire"
import { hirePageJsonLd } from "@/features/hire-pages/seo"

// The page's own copy, without the shared project records reused for the proof items.
const serialized = JSON.stringify(page, (key, value) => (key === "project" ? undefined : value))
const query = (href: string) => readEnquiryParams(new URLSearchParams(href.split("?")[1]))

describe("Hire Me overview", () => {
  it("links every specialist page from the registry exactly once, and never itself", () => {
    const linked = page.expertise.items.map((item) => item.href)
    expect(linked).toEqual(hirePages.map((entry) => entry.href))
    expect(Object.keys(page.serviceSummaries).sort()).toEqual(hirePages.map((entry) => entry.href).sort())
    expect(linked).not.toContain(page.hirePage.path)
    expect(hirePages.map((entry) => entry.href)).not.toContain("/hire")
    // Every destination is a published, indexable page.
    const urls = sitemap().map((entry) => entry.url)
    for (const href of [...linked, page.selectedWork.link.href]) {
      expect(urls).toContain(`${site.url}${href}`)
    }
  })

  it("lists five specialisations, then the two project services, with one descriptive link each", () => {
    expect(page.expertise.items.map((item) => item.title)).toEqual([
      "React development",
      "React Native development",
      "Frontend development",
      "Shopify development",
      "WordPress development",
      "Landing-page development",
      "Figma-to-website development",
    ])
    for (const item of page.expertise.items) {
      expect(item.linkLabel.toLowerCase()).toBe(`explore ${item.title.toLowerCase()}`)
      // "Hire" is not repeated in every card heading.
      expect(item.title).not.toMatch(/hire/i)
    }
  })

  it("throws for a route missing from the registry rather than linking to an unpublished page", () => {
    expect(() => page.serviceEntry("/not-published" as page.ServiceRoute)).toThrow(/config\/hire-pages/)
  })

  it("leads with the project enquiry and keeps each button's meaning and the hire source", () => {
    expect(page.hirePrimaryEnquiry).toBe("freelance")
    expect(query(page.freelanceContactHref)).toEqual({ enquiryType: "freelance", source: "hire" })
    expect(query(page.fullTimeContactHref)).toEqual({ enquiryType: "full-time", source: "hire" })
    const [freelance, fullTime] = page.engagements
    expect(freelance.cta).toEqual({
      label: "Discuss a Project",
      href: page.freelanceContactHref,
      analytics: "discuss_freelance_project",
    })
    expect(fullTime.cta).toEqual({
      label: "Discuss a Full-time Role",
      href: page.fullTimeContactHref,
      analytics: "discuss_full_time_role",
    })
  })

  it("shows availability on the full-time card only, with Experience, Resume and LinkedIn there", () => {
    const [freelance, fullTime] = page.engagements
    expect(fullTime.facts).toEqual([site.availability, site.openTo])
    expect(fullTime.links.map((link) => link.href)).toEqual(["/experience", site.resumeHref, site.linkedIn])
    expect(freelance.links).toEqual([])
    const elsewhere = JSON.stringify({ ...page, engagements: [freelance], engagement: undefined })
    for (const text of [site.availability, site.openTo]) expect(elsewhere).not.toContain(text)
  })

  it("keeps each project's scope label and links its canonical case study with an shared project card", () => {
    expect(
      page.proofItems.map((item) => [item.project.id, item.label, item.project.caseStudy?.slug]),
    ).toEqual([
      ["quizwar", "Independent React Native app", "quizwar"],
      ["mopedo", "Independent React frontend demo", "mopedo"],
      ["rekha-maa-ki-rasoi", "Independent family-business website", "rekha-maa-ki-rasoi"],
    ])
    expect(page.selectedWork.items).toBe(page.proofItems)
    expect(page.selectedWork.note).toMatch(/PhoolKalaa, an end-to-end direct-client project/)
    expect(page.selectedWork.note).toMatch(/scoped freelance contributions to Phoria Jewellery/)
  })

  it("makes no agency, pricing, guarantee, result or unpublished-client claims", () => {
    expect(serialized).not.toMatch(
      /agency|\bour team|marketplace|full[- ]stack|backend|Swift|Kotlin|Next\.js/i,
    )
    expect(serialized).not.toMatch(/₹|\$\d|per hour|years of experience|\d+\+|\d+%|within \d+ (hours|days)/i)
    expect(serialized).not.toMatch(
      /testimonial|\brating|award|certified|guarantee|downloads|App Store|Play Store/i,
    )
    expect(serialized).not.toMatch(/PPCROY|agency client|\b10\b/i)
  })

  it("uses the brief's metadata, social wording and structured data", () => {
    expect(page.hirePage).toMatchObject({
      path: "/hire",
      title: "Hire a Web & Mobile Developer | Anuj Dhanuka",
      breadcrumb: "Hire Me",
    })
    expect(page.hirePage.description.length).toBeLessThanOrEqual(160)
    expect(`${page.hireHero.title} ${page.hireHero.titleAccent}`).toBe("Web & Mobile Developer for Hire")
    expect(metadata.title).toBe(page.hirePage.title)
    expect(metadata.alternates?.canonical).toBe("https://anujdhanuka.com/hire")
    expect(metadata.openGraph).toMatchObject({
      title: "Hire Anuj Dhanuka",
      description: page.hirePage.social.description,
      url: "https://anujdhanuka.com/hire",
      type: "website",
    })
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", title: "Hire Anuj Dhanuka" })
    const graph = JSON.stringify(hirePageJsonLd(page.hirePage))
    expect(graph).toContain(`${site.url}/#person`)
    expect(graph).toContain(`${site.url}/#website`)
    expect(graph).not.toMatch(/FAQPage|JobPosting|Offer|AggregateRating|Review/)
    const entry = sitemap().find((item) => item.url === `${site.url}/hire`)
    expect(entry?.lastModified).toBe(page.hirePage.lastModified)
  })

  it("orders the in-page navigation like the sections, with three short process steps", () => {
    expect(page.hireSectionNav.map((item) => item.href)).toEqual([
      `#${page.expertise.id}`,
      `#${page.selectedWork.id}`,
      `#${page.engagement.id}`,
      `#${page.approach.id}`,
      `#${page.hireFaqId}`,
    ])
    expect(page.approach.steps).toHaveLength(3)
    for (const step of page.approach.steps) expect(step.body.length).toBeLessThanOrEqual(100)
    expect(page.hireFaqs).toHaveLength(4)
  })
})
