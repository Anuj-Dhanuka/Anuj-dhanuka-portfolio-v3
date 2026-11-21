import { describe, expect, it } from "vitest"

import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { projects } from "@/features/projects/data/projects"
import * as page from "@/features/react-developer/data/react-developer"

const serialized = JSON.stringify(page)

describe("React developer page content", () => {
  it("makes no pricing, tenure, testimonial or activity-metric claims", () => {
    expect(serialized).not.toMatch(/per hour|₹|\$\d|years of experience|remote-only/i)
    expect(serialized).not.toMatch(/testimonial|rating|clients served|commits|contributors|\d+%|\d+\+/i)
  })

  it("keeps ChefKart a team contribution and Mopedo a frontend demo", () => {
    const [chefkart, mopedo] = page.selectedWork
    expect(chefkart.kind).toBe("Team contribution")
    expect(chefkart.summary).toMatch(/I contributed to/)
    expect(JSON.stringify(chefkart)).not.toMatch(/I built ChefKart|I led/i)
    expect(chefkart.visual).toMatchObject({ type: "illustration" })
    expect(page.reactDeveloperHero.intro).toContain("contributed to ChefKart’s React operations dashboard")
    expect(mopedo.kind).toBe("Independent project")
    expect(mopedo.highlights.find((highlight) => highlight.label === "Scope")?.text).toMatch(
      /^A frontend demo/,
    )
  })

  it("preselects the matching enquiry type and entry page on the Contact form", () => {
    const query = (href: string) => readEnquiryParams(new URL(href, site.url).searchParams)
    expect(page.fullTimeContactHref.startsWith("/contact?")).toBe(true)
    expect(query(page.fullTimeContactHref)).toEqual({ enquiryType: "full-time", source: "react-developer" })
    expect(query(page.freelanceContactHref)).toEqual({ enquiryType: "freelance", source: "react-developer" })
    const [fullTime, freelance] = page.engagements
    expect(fullTime.cta.href).toBe(page.fullTimeContactHref)
    expect(freelance.cta.href).toBe(page.freelanceContactHref)
  })

  it("shows owner-approved availability on the full-time path only", () => {
    const [fullTime, freelance] = page.engagements
    expect(fullTime.facts).toContain(site.availability)
    expect(fullTime.facts).toContain(site.openTo)
    // The freelance pills list services, never availability.
    expect(freelance.facts).not.toContain(site.availability)
    expect(freelance.facts).not.toContain(site.openTo)
    expect(JSON.stringify(freelance)).not.toMatch(/immediately|join/i)
  })

  it("gives recruiters the resume and LinkedIn on the full-time path", () => {
    const hrefs = page.engagements[0].links.map((link) => link.href)
    expect(hrefs).toEqual(["/experience", "/ANUJ_DHANUKA_RESUME.pdf", site.linkedIn])
  })

  it("links to the published ChefKart and Mopedo evidence", () => {
    const mopedo = projects.find((project) => project.id === "mopedo")
    const [chefkart, mopedoWork] = page.selectedWork
    expect(chefkart.primaryLink?.href).toBe(chefkartPage.path)
    // Mopedo reuses the shared project buttons: live project, case study, GitHub repo.
    expect(mopedoWork.project).toBe(mopedo)
    expect(mopedoWork.project?.liveLink).toBe("https://mopedo.netlify.app/")
    expect(mopedoWork.project?.githubLink).toBe("https://github.com/Anuj-Dhanuka/mopedo-web-app")
    expect(mopedoWork.project?.caseStudy?.slug).toBe("mopedo")
    expect(page.heroFacts.map((fact) => fact.href).filter(Boolean)).toEqual([
      chefkartPage.path,
      `/projects/${mopedo?.caseStudy?.slug}`,
    ])
  })

  it("puts selected work first in the in-page navigation", () => {
    expect(page.reactDeveloperSections[0].href).toBe(`#${page.workSectionId}`)
    expect(page.workSectionId).toBe("selected-react-work")
  })
})
