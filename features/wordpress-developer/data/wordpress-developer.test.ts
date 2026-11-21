import { describe, expect, it } from "vitest"

import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import { projects } from "@/features/projects/data/projects"
import * as page from "@/features/wordpress-developer/data/wordpress-developer"

// The page's own copy; the shared Rekha and Rama project records (reused for their buttons) are checked
// separately.
const serialized = JSON.stringify(page, (key, value) => (key === "project" ? undefined : value))
const byId = (id: string) => page.selectedWork.find((item) => item.id === id)!
const projectById = (id: string) => projects.find((project) => project.id === id)!

describe("WordPress developer page content", () => {
  it("makes no pricing, tenure, metric, certification, testimonial or support-period claims", () => {
    expect(serialized).not.toMatch(/per hour|₹|\$\d|years of experience|\d+\+|\d+%/i)
    expect(serialized).not.toMatch(/testimonial|\brating|\bstars\b|clients served|certified|certification/i)
    expect(serialized).not.toMatch(/response time|within \d+|24\/7|guaranteed?\b(?! rankings)/i)
    expect(serialized).not.toMatch(/full[- ]stack|conversion rate|revenue|traffic increase/i)
  })

  it("does not advertise unsupported WordPress services", () => {
    // These may only appear where the copy says they are outside the demonstrated work.
    const offer = JSON.stringify([
      page.wordpressDeveloperHero,
      page.selectedWork,
      page.capabilities,
      page.engagements,
      page.approachSteps,
      page.technologyStack,
      // The scope note under the tiles names custom theme/plugin development only to rule it out.
      page.wordpressDeveloperContent.technologies.intro,
    ])
    expect(offer).not.toMatch(
      /\bPHP\b|plugin development|custom (plugin|widget|theme)|\bACF\b|Gutenberg|headless|malware|migration|maintenance|retainer/i,
    )
    // WooCommerce is an owner-confirmed tool (21 November 2026), not a service or published store project.
    const services = JSON.stringify([
      page.wordpressDeveloperHero,
      page.selectedWork,
      page.capabilities,
      page.engagements,
    ])
    expect(services).not.toMatch(/WooCommerce|online store|e-?commerce/i)
    const scopeFaq = page.wordpressDeveloperFaqs.find((faq) => faq.question.startsWith("What kind"))!
    expect(scopeFaq.answer).toMatch(/not demonstrated by these projects/)
  })

  it("keeps Rekha an independent family-business website on a premium theme foundation", () => {
    const rekha = byId("rekha")
    expect(rekha.kind).toBe("Independent family-business website")
    expect(rekha.summary).toMatch(/my mother’s homemade-food business idea/)
    expect(rekha.summary).toMatch(/premium theme foundation/)
    expect(JSON.stringify(rekha)).not.toMatch(/client|custom-coded|custom theme|hand-coded/i)
  })

  it("keeps Rama a freelance homepage arranged through a friend, never the college as a client", () => {
    const rama = byId("rama")
    expect(rama.kind).toBe("Freelance homepage")
    expect(rama.title).toMatch(/homepage/)
    expect(rama.summary).toMatch(/arranged by a friend, who managed the college relationship/)
    expect(serialized).not.toMatch(
      /my client|college client|client college|entire website|admissions|portal/i,
    )
    const complete = page.wordpressDeveloperFaqs.find((faq) => faq.question.includes("complete"))!
    expect(complete.answer).toMatch(/limited to its homepage/)
  })

  it("reuses the canonical project records, live links and screenshots", () => {
    for (const [id, projectId, src] of [
      ["rekha", "rekha-maa-ki-rasoi", "/project-case-studies/rekha/pricing-2026.webp"],
      ["rama", "rama-technical-college", "/project-case-studies/rama/courses-2026.webp"],
    ] as const) {
      const work = byId(id)
      const project = projectById(projectId)
      expect(work.project).toBe(project)
      const screen = project.caseStudy!.screenshots.find((entry) => entry.src === src)!
      expect(work.visual).toMatchObject({
        type: "image",
        src,
        alt: screen.alt,
        width: screen.width,
        height: screen.height,
        address: new URL(project.liveLink!).host,
      })
    }
    expect(page.selectedWork.map((item) => item.id)).toEqual(["rekha", "rama"])
  })

  it("links the hero facts to both case studies", () => {
    expect(page.heroFacts).toEqual([
      { label: site.location },
      { label: "Rekha Maa Ki Rasoi", href: "/projects/rekha-maa-ki-rasoi" },
      { label: "Rama College homepage", href: "/projects/rama-technical-college" },
    ])
  })

  it("routes both enquiry buttons to the Contact page with the wordpress-developer source", () => {
    expect(readEnquiryParams(new URLSearchParams(page.fullTimeContactHref.split("?")[1]))).toEqual({
      enquiryType: "full-time",
      source: "wordpress-developer",
    })
    expect(readEnquiryParams(new URLSearchParams(page.freelanceContactHref.split("?")[1]))).toEqual({
      enquiryType: "freelance",
      source: "wordpress-developer",
    })
  })

  it("shows availability on the full-time path only and takes recruiter links from site config", () => {
    const [fullTime, freelance] = page.engagements
    expect(fullTime.facts.slice(0, 2)).toEqual([site.availability, site.openTo])
    expect(fullTime.links.map((link) => link.href)).toEqual(["/experience", site.resumeHref, site.linkedIn])
    expect(freelance.links).toEqual([])
    for (const text of [site.availability, site.openTo]) {
      expect(JSON.stringify(freelance)).not.toContain(text)
      expect(JSON.stringify(page.wordpressDeveloperFaqs)).not.toContain(text)
    }
  })

  it("lists the owner-confirmed tools with a short intro naming the main ones", () => {
    const names = page.technologyStack.map((item) => item.name)
    expect(names).toHaveLength(15)
    expect(names.slice(0, 2)).toEqual(["WordPress", "Elementor"])
    expect(new Set(names).size).toBe(names.length)
    const intro = page.wordpressDeveloperContent.technologies.intro
    for (const term of ["WordPress", "Elementor", "WooCommerce", "HTML", "CSS", "Figma"])
      expect(intro).toContain(term)
    expect(intro.split(/\s+/).length).toBeLessThanOrEqual(45)
    // Generic plugin and hosting names only: no specific product was confirmed.
    expect(JSON.stringify(page.technologyStack)).not.toMatch(
      /Yoast|Rank Math|WPForms|Contact Form 7|cPanel|hPanel|Hostinger|UpdraftPlus|LiteSpeed/i,
    )
  })

  it("uses the brief's section anchors in page order", () => {
    expect(page.wordpressDeveloperSections.map((item) => item.href)).toEqual([
      "#work",
      "#services",
      "#work-together",
      "#process",
      "#technologies",
      "#faqs",
    ])
    const content = page.wordpressDeveloperContent
    expect([
      content.work.id,
      content.capabilities.id,
      content.engagement.id,
      content.approach.id,
      "technologies",
      page.wordpressDeveloperFaqId,
    ]).toEqual(page.wordpressDeveloperSections.map((item) => item.href.slice(1)))
  })

  it("does not promise rankings, AI citations or FAQ rich results", () => {
    const ranking = page.wordpressDeveloperFaqs.find((faq) => faq.question.includes("rank"))!
    expect(ranking.answer).toMatch(/^No developer can guarantee rankings/)
    expect(serialized).not.toMatch(/rich result|llms\.txt|page one|first page/i)
  })
})
