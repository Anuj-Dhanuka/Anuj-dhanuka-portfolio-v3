import { describe, expect, it } from "vitest"

import sitemap from "@/app/sitemap"
import { hirePages } from "@/config/hire-pages"
import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import { chefkartPage } from "@/features/experience/data/chefkart"
import * as page from "@/features/landing-page-development/data/landing-page-development"
import { projects } from "@/features/projects/data/projects"

// The page's own copy; the shared Mopedo and Rekha project records (reused for their buttons) are excluded.
const serialized = JSON.stringify(page, (key, value) => (key === "project" ? undefined : value))
const byId = (id: string) => page.selectedWork.find((item) => item.id === id)!
// One work item's own copy, without the shared project record.
const ownCopy = (id: string) => JSON.stringify({ ...byId(id), project: undefined })
const projectById = (id: string) => projects.find((project) => project.id === id)!
const content = page.landingPageDevelopmentContent

describe("Landing page development service page content", () => {
  it("makes no pricing, tenure, count, metric, certification, testimonial or capacity claims", () => {
    expect(serialized).not.toMatch(/per hour|₹|\$\d|years of experience|\d+\+|\d+%/i)
    expect(serialized).not.toMatch(/\brating|\bstars\b|clients served|certified|certification/i)
    expect(serialized).not.toMatch(/response time|within \d+ (hours|days)|24\/7|\bdays?\b delivery/i)
    expect(serialized).not.toMatch(/full[- ]stack|conversion rate|revenue|traffic increase|\bROI\b/i)
    // "testimonials" appears once, in the FAQ asking for permission before using a client's own proof.
    expect(serialized.match(/testimonial/gi)).toHaveLength(1)
    expect(serialized).toContain("Share approved proof or testimonials only if you have permission")
  })

  it("keeps unpublished agency client work out of the public page", () => {
    // PPCROY has not cleared its client projects or the owner-reported count for publication; only the
    // canonical public projects and site config may supply links.
    expect(serialized).not.toMatch(/PPCROY|agency client|\b10\b|ten landing pages/i)
    const externalUrls = (serialized.match(/https?:\/\/[^"\s)]+/g) ?? []).filter(
      (url) => url !== site.linkedIn,
    )
    expect(externalUrls).toEqual([])
    for (const item of page.selectedWork) expect(["mopedo", "rekha"]).toContain(item.id)
  })

  it("does not sell advertising, CRO, CRM integration or guaranteed results as standard deliverables", () => {
    const offer = JSON.stringify([
      page.landingPageDevelopmentHero,
      page.capabilities,
      page.engagements,
      page.approachSteps,
    ])
    expect(offer).not.toMatch(/advertising|\bads\b|\bCRO\b|A\/B|CRM|pixel|automation|guarantee/i)
    const scope = page.landingPageDevelopmentFaqs[0].answer
    expect(scope).toMatch(
      /Advertising management, ongoing optimisation and specialist integrations are separate/,
    )
    const ranking = page.landingPageDevelopmentFaqs.find((faq) => faq.question.includes("rank"))!
    expect(ranking.answer).toMatch(/rankings, traffic and enquiries are not guaranteed/)
    expect(serialized).not.toMatch(/rich result|llms\.txt|page one|first page|AI citation/i)
  })

  it("keeps Mopedo an independent React demo and Rekha an independent family-business website", () => {
    const mopedo = byId("mopedo")
    expect(mopedo.kind).toBe("Independent project")
    expect(mopedo.summary).toMatch(/React frontend demo/)
    expect(ownCopy("mopedo")).not.toMatch(/client|campaign|customers|riders|orders/i)

    const rekha = byId("rekha")
    expect(rekha.kind).toBe("Independent family-business website")
    expect(rekha.summary).toMatch(/my mother’s homemade-food business idea/)
    expect(rekha.summary).toMatch(/premium theme foundation/)
    expect(ownCopy("rekha")).not.toMatch(/client|custom-coded|custom theme|React|campaign/i)
    // WordPress work is never attributed to React, and the React card never cites WordPress evidence.
    expect(ownCopy("mopedo")).not.toMatch(/WordPress|Elementor/)
  })

  it("describes ChefKart only as team contributions, linked to its approved case study", () => {
    expect(content.work.note).toEqual({
      text: "My professional React experience also includes team contributions to ChefKart’s web interfaces.",
      link: { text: "team contributions to ChefKart’s web interfaces", href: chefkartPage.path },
    })
    expect(content.work.note!.text.split(content.work.note!.link.text)).toHaveLength(2)
    for (const match of serialized.matchAll(/[^.]*ChefKart[^.]*\./g))
      expect(match[0]).toMatch(/team contributions/)
  })

  it("reuses the canonical project records, live links and screenshots", () => {
    for (const [id, projectId, src] of [
      ["mopedo", "mopedo", "/Projects_images/Mopedo.webp"],
      ["rekha", "rekha-maa-ki-rasoi", "/project-case-studies/rekha/pricing-2026.webp"],
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
    expect(page.selectedWork.map((item) => item.id)).toEqual(["mopedo", "rekha"])
  })

  it("uses the brief's metadata, H1, breadcrumb and hero facts", () => {
    expect(page.landingPageDevelopmentPage).toMatchObject({
      path: "/landing-page-development",
      title: "Landing Page Development Services | Anuj Dhanuka",
      breadcrumb: "Landing Page Development",
    })
    const hero = page.landingPageDevelopmentHero
    expect(`${hero.title} ${hero.titleAccent}`).toBe("Landing Page Development Services")
    expect(page.heroFacts).toEqual([
      { label: site.location },
      { label: "React frontend demo", href: "/projects/mopedo" },
      { label: "WordPress business website", href: "/projects/rekha-maa-ki-rasoi" },
    ])
  })

  it("is in the sitemap and the hire-page list with its exact H1", () => {
    const entry = sitemap().find((item) => item.url === `${site.url}/landing-page-development`)
    expect(entry?.lastModified).toBe(page.landingPageDevelopmentPage.lastModified)
    expect(hirePages).toContainEqual({
      label: "Landing Page Development Services",
      role: "landing page developer",
      href: "/landing-page-development",
    })
  })

  it("leads with the project enquiry and keeps each button's own destination", () => {
    expect(page.landingPagePrimaryEnquiry).toBe("freelance")
    expect(readEnquiryParams(new URLSearchParams(page.freelanceContactHref.split("?")[1]))).toEqual({
      enquiryType: "freelance",
      source: "landing-page-development",
    })
    expect(readEnquiryParams(new URLSearchParams(page.fullTimeContactHref.split("?")[1]))).toEqual({
      enquiryType: "full-time",
      source: "landing-page-development",
    })
    expect(content.freelanceContactHref).toBe(page.freelanceContactHref)
    const [freelance, fullTime] = page.engagements
    expect(freelance).toMatchObject({
      id: "freelance",
      links: [],
      cta: {
        label: "Discuss a Landing Page",
        href: page.freelanceContactHref,
        analytics: "discuss_freelance_project",
      },
    })
    expect(fullTime).toMatchObject({
      id: "full-time",
      cta: {
        label: "Discuss a Full-time Role",
        href: page.fullTimeContactHref,
        analytics: "discuss_full_time_role",
      },
    })
  })

  it("shows availability on the full-time card only and takes recruiter links from site config", () => {
    const [freelance, fullTime] = page.engagements
    expect(fullTime.facts.slice(0, 2)).toEqual([site.availability, site.openTo])
    expect(fullTime.links.map((link) => link.href)).toEqual(["/experience", site.resumeHref, site.linkedIn])
    for (const text of [site.availability, site.openTo]) {
      expect(JSON.stringify(freelance)).not.toContain(text)
      expect(JSON.stringify(page.landingPageDevelopmentFaqs)).not.toContain(text)
      expect(JSON.stringify(page.landingPageDevelopmentHero)).not.toContain(text)
    }
  })

  it("compares the platforms in four complete rows and links only to published routes", () => {
    const comparison = content.capabilities.comparison!
    expect(comparison.options.map((option) => option.label)).toEqual(["React", "WordPress with Elementor"])
    expect(comparison.rows.map((row) => row.need)).toEqual([
      "Existing setup",
      "Content updates",
      "Custom behaviour",
      "Handover",
    ])
    for (const row of comparison.rows)
      for (const value of row.values) expect(value.length).toBeGreaterThan(20)
    const urls = sitemap().map((item) => item.url)
    for (const link of comparison.links) expect(urls).toContain(`${site.url}${link.href}`)
  })

  it("lists the 15 owner-chosen tools with an intro naming each", () => {
    const names = page.technologyStack.map((item) => item.name)
    expect(names).toHaveLength(15)
    expect(new Set(names).size).toBe(names.length)
    expect(names.slice(0, 2)).toEqual(["React", "Next.js"])
    const intro = content.technologies.intro
    for (const name of names) expect(intro.toLowerCase()).toContain(name.toLowerCase())
    expect(intro.split(/\s+/).length).toBeLessThanOrEqual(45)
    // No integration, store or SEO/performance tools that would read as excluded deliverables.
    expect(names.join(" ")).not.toMatch(/REST|API|Redux|WooCommerce|SEO|performance|CRM/i)
  })

  it("uses the brief's section anchors in page order", () => {
    expect(page.landingPageDevelopmentSections.map((item) => item.href)).toEqual([
      "#work",
      "#services",
      "#work-together",
      "#process",
      "#technologies",
      "#faqs",
    ])
    expect([
      content.work.id,
      content.capabilities.id,
      content.engagement.id,
      content.approach.id,
      "technologies",
      page.landingPageDevelopmentFaqId,
    ]).toEqual(page.landingPageDevelopmentSections.map((item) => item.href.slice(1)))
  })

  it("keeps process step descriptions short and titles without full stops", () => {
    for (const step of page.approachSteps) {
      expect(step.title).not.toMatch(/\.$/)
      expect(step.body.length).toBeLessThanOrEqual(100)
    }
  })
})
