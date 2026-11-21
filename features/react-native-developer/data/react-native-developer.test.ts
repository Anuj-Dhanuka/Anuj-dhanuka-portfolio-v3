import { describe, expect, it } from "vitest"

import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { experienceRoles } from "@/features/experience/data/experience"
import { projects } from "@/features/projects/data/projects"
import * as page from "@/features/react-native-developer/data/react-native-developer"

// The page's own copy; the shared QuizWar project record (reused for its buttons) is checked separately.
const serialized = JSON.stringify(page, (key, value) => (key === "project" ? undefined : value))

describe("React Native developer page content", () => {
  it("makes no pricing, tenure, testimonial, metric or store-release claims", () => {
    expect(serialized).not.toMatch(/per hour|₹|\$\d|years of experience|remote-only/i)
    expect(serialized).not.toMatch(/testimonial|rating|clients served|commits|contributors|\d+%|\d+\+/i)
    expect(serialized).not.toMatch(/downloads|App Store|Play Store|Google Play|published to|store release/i)
    expect(serialized).not.toMatch(
      /\bExpo\b|\bEAS\b|\bSwift\b|\bKotlin\b|native module|full[- ]stack|backend developer/i,
    )
  })

  it("keeps ChefKart a past team contribution and QuizWar independent", () => {
    const [chefkart, quizwar] = page.selectedWork
    expect(chefkart.kind).toBe("Team contribution")
    expect(chefkart.summary).toMatch(/^At ChefKart, I contributed to/)
    expect(JSON.stringify(chefkart)).not.toMatch(/I built ChefKart|I led|I work at/i)
    expect(chefkart.visual).toMatchObject({ type: "illustration", name: "chefkart-payments" })
    expect(chefkart.visual.type === "illustration" && chefkart.visual.caption).toMatch(
      /not a real ChefKart screen/,
    )
    expect(quizwar.kind).toBe("Independent project")
  })

  it("derives the ChefKart role and dates from the shared experience data", () => {
    const role = experienceRoles.find((entry) => entry.id === "chefkart")!
    expect(page.selectedWork[0].meta).toBe(`${role.position} · ${role.duration}`)
    expect(page.heroFacts[1]).toEqual({
      label: `${role.position}, ChefKart · ${role.duration}`,
      href: chefkartPage.path,
    })
  })

  it("reuses the QuizWar project record, its public repository and its screenshot descriptions", () => {
    const quizwar = projects.find((project) => project.id === "quizwar")!
    const work = page.selectedWork[1]
    expect(work.project).toBe(quizwar)
    expect(work.project?.githubLink).toBe("https://github.com/Anuj-Dhanuka/QuizWar")
    // No live website, store or demo destination is invented.
    expect(work.project?.liveLink).toBeUndefined()
    expect(work.visual.type).toBe("phones")
    if (work.visual.type === "phones") {
      expect(work.visual.screens.map((screen) => screen.src)).toEqual([
        "/quizwar-login.webp",
        "/quizwar-categories.webp",
        "/quizwar-quiz.webp",
      ])
      for (const screen of work.visual.screens) {
        expect(quizwar.caseStudy?.screenshots).toContain(screen)
      }
    }
  })

  it("preselects the matching enquiry type and this page as the source on the Contact form", () => {
    const query = (href: string) => readEnquiryParams(new URL(href, site.url).searchParams)
    expect(page.fullTimeContactHref).toBe("/contact?enquiry=full-time&source=react-native-developer")
    expect(page.freelanceContactHref).toBe("/contact?enquiry=freelance&source=react-native-developer")
    expect(query(page.fullTimeContactHref)).toEqual({
      enquiryType: "full-time",
      source: "react-native-developer",
    })
    expect(query(page.freelanceContactHref)).toEqual({
      enquiryType: "freelance",
      source: "react-native-developer",
    })
    const [fullTime, freelance] = page.engagements
    expect(fullTime.cta.href).toBe(page.fullTimeContactHref)
    expect(freelance.cta.href).toBe(page.freelanceContactHref)
    expect(page.reactNativeDeveloperContent.freelanceContactHref).toBe(page.freelanceContactHref)
  })

  it("shows owner-approved availability on the full-time path only", () => {
    const [fullTime, freelance] = page.engagements
    expect(fullTime.facts).toEqual([site.availability, site.openTo])
    expect(freelance.facts).not.toContain(site.availability)
    expect(freelance.facts).not.toContain(site.openTo)
    expect(JSON.stringify(freelance)).not.toMatch(/immediately|join/i)
    expect(freelance.links).toEqual([])
  })

  it("links recruiters to experience, the resume and LinkedIn from config", () => {
    expect(page.engagements[0].links.map((link) => link.href)).toEqual([
      "/experience",
      site.resumeHref,
      site.linkedIn,
    ])
  })

  it("keeps soft-hyphenated tile names identical to their plain names", () => {
    for (const item of page.technologyStack) {
      if (item.breakableName) expect(item.breakableName.replaceAll("\u00AD", "")).toBe(item.name)
    }
  })

  it("puts selected work first in the in-page navigation", () => {
    expect(page.reactNativeDeveloperSections[0].href).toBe("#selected-react-native-work")
    expect(page.reactNativeDeveloperContent.work.id).toBe(page.workSectionId)
  })

  it("links the evidence FAQ to both case studies", () => {
    const evidence = page.reactNativeDeveloperFaqs.find((faq) => faq.links)
    expect(evidence?.links?.map((link) => link.href)).toEqual([chefkartPage.path, "/projects/quizwar"])
  })
})
