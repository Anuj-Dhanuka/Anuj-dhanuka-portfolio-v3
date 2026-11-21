import { describe, expect, it } from "vitest"

import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { experienceRoles } from "@/features/experience/data/experience"
import * as page from "@/features/frontend-developer/data/frontend-developer"
import { projects } from "@/features/projects/data/projects"

// The page's own copy; the shared Rama and Rekha project records (reused for their buttons) are checked
// separately.
const serialized = JSON.stringify(page, (key, value) => (key === "project" ? undefined : value))
const byId = (id: string) => page.selectedWork.find((item) => item.id === id)!
const projectById = (id: string) => projects.find((project) => project.id === id)!

describe("Frontend developer page content", () => {
  it("makes no pricing, tenure, metric, performance, certification or capacity claims", () => {
    expect(serialized).not.toMatch(/per hour|₹|\$\d|years of experience|\d+\+|\d+%/i)
    expect(serialized).not.toMatch(/testimonial|rating|stars|clients served|commits|contributors/i)
    expect(serialized).not.toMatch(/lighthouse|pagespeed|core web vitals|wcag|conversion|seo ranking/i)
    expect(serialized).not.toMatch(/start immediately|immediate start|within \d+|response time|24\/7/i)
    expect(serialized).not.toMatch(/full[- ]stack|remote-only|fully remote/i)
  })

  it("keeps ChefKart a past team contribution with its city-page illustration", () => {
    const chefkart = byId("chefkart")
    expect(chefkart.kind).toBe("Team contribution")
    expect(chefkart.summary).toMatch(/^At ChefKart, I contributed to/)
    expect(JSON.stringify(chefkart)).not.toMatch(/I built ChefKart|I led|I work at|I own/i)
    expect(chefkart.visual).toMatchObject({ type: "illustration", name: "chefkart-city" })
    expect(chefkart.visual.type === "illustration" && chefkart.visual.caption).toMatch(
      /not a real ChefKart screen/,
    )
  })

  it("keeps Rama a freelance homepage arranged through a friend, with its scope boundary", () => {
    const rama = byId("rama")
    expect(rama.kind).toBe("Freelance homepage")
    expect(rama.summary).toMatch(/WordPress and Elementor/)
    expect(rama.summary).toMatch(/arranged by a friend, who managed the college relationship/)
    expect(rama.highlights.find((item) => item.label === "Scope")?.text).toMatch(
      /other pages, portals and hosting were outside my responsibility/,
    )
    // Never the college as Anuj's client, and never the wider site, plugins or the college's figures.
    expect(serialized).not.toMatch(/my client|college client|client college|for the college directly/i)
    expect(JSON.stringify(rama)).not.toMatch(/website for Rama|plugins|students trained|employment rate/i)
    expect(rama.title).toMatch(/homepage/i)
  })

  it("keeps Rekha a WordPress/Elementor site on a premium theme with no custom-code claims", () => {
    const rekha = byId("rekha")
    expect(rekha.kind).toBe("Independent family-business website")
    expect(rekha.summary).toMatch(/WordPress and Elementor on a premium theme foundation/)
    expect(JSON.stringify(rekha)).not.toMatch(/React|custom theme|PHP|\bCSS\b|JavaScript|hand-coded/i)
    expect(rekha.stack).toEqual(["WordPress", "Elementor", "Content structure", "Responsive design"])
  })

  it("reuses the Rama and Rekha project records, live links and screenshots, with no invented source", () => {
    for (const [id, projectId, src] of [
      ["rama", "rama-technical-college", "/project-case-studies/rama/courses-2026.webp"],
      ["rekha", "rekha-maa-ki-rasoi", "/project-case-studies/rekha/pricing-2026.webp"],
    ] as const) {
      const work = byId(id)
      const project = projectById(projectId)
      expect(work.project).toBe(project)
      expect(project.githubLink).toBeUndefined()
      expect(project.liveLink).toMatch(/^https:\/\//)
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
  })

  it("derives the ChefKart role and dates from the shared experience data", () => {
    const role = experienceRoles.find((entry) => entry.id === "chefkart")!
    expect(byId("chefkart").meta).toBe(`${role.position} · ${role.duration}`)
    expect(page.heroFacts[1]).toEqual({
      label: `${role.position}, ChefKart · ${role.duration}`,
      href: chefkartPage.path,
    })
    expect(page.heroFacts[0]).toEqual({ label: site.location })
    expect(page.heroFacts[2]).toEqual({
      label: "Freelance homepage: Rama Technical College",
      href: "/projects/rama-technical-college",
    })
  })

  it("labels both WordPress projects with their platform", () => {
    for (const id of ["rama", "rekha"]) {
      expect(byId(id).stack.slice(0, 2)).toEqual(["WordPress", "Elementor"])
    }
  })

  it("routes both enquiry buttons to the Contact page with the frontend-developer source", () => {
    expect(readEnquiryParams(new URLSearchParams(page.fullTimeContactHref.split("?")[1]))).toEqual({
      enquiryType: "full-time",
      source: "frontend-developer",
    })
    expect(readEnquiryParams(new URLSearchParams(page.freelanceContactHref.split("?")[1]))).toEqual({
      enquiryType: "freelance",
      source: "frontend-developer",
    })
  })

  it("shows availability on the full-time path only and takes recruiter links from site config", () => {
    const [fullTime, freelance] = page.engagements
    expect(fullTime.facts).toEqual([site.availability, site.openTo])
    expect(fullTime.links.map((link) => link.href)).toEqual(["/experience", site.resumeHref, site.linkedIn])
    expect(freelance.links).toEqual([])
    expect(JSON.stringify(freelance)).not.toContain(site.availability)
    expect(JSON.stringify(page.frontendDeveloperFaqs)).not.toContain(site.availability)
  })

  it("links React application work and mobile apps to their own hire pages with real anchors", () => {
    const interactive = page.capabilities.find((item) => item.link)!
    expect(interactive.link).toEqual({ text: "React developer page", href: "/react-developer" })
    expect(interactive.body.split(interactive.link!.text)).toHaveLength(2)
    const links = page.frontendDeveloperFaqs.flatMap((faq) => faq.links ?? []).map((link) => link.href)
    expect(links).toEqual(
      expect.arrayContaining([
        chefkartPage.path,
        "/projects/rama-technical-college",
        "/projects/rekha-maa-ki-rasoi",
        "/react-developer",
        "/react-native-developer",
      ]),
    )
  })

  it("lists only the ten documented technologies, each named in the quotable intro", () => {
    expect(page.technologyStack).toHaveLength(10)
    for (const item of page.technologyStack) {
      expect(page.frontendDeveloperContent.technologies.intro).toContain(item.name)
    }
  })

  it("keeps the section navigation in page order", () => {
    expect(page.frontendDeveloperSections.map((item) => item.href)).toEqual([
      "#selected-frontend-work",
      "#capabilities",
      "#work-with-me",
      "#approach",
      "#faq",
    ])
  })
})
