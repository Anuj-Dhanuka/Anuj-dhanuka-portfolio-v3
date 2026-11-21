import { describe, expect, it } from "vitest"

import sitemap from "@/app/sitemap"
import { hirePages } from "@/config/hire-pages"
import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import * as page from "@/features/figma-to-website/data/figma-to-website"
import { projects } from "@/features/projects/data/projects"

// The page's own copy; the shared Mopedo and Rekha project records (reused for their buttons) are excluded.
const serialized = JSON.stringify(page, (key, value) => (key === "project" ? undefined : value))
const byId = (id: string) => page.selectedWork.find((item) => item.id === id)!
// One work item's own copy, without the shared project record.
const ownCopy = (id: string) => JSON.stringify({ ...byId(id), project: undefined })
const projectById = (id: string) => projects.find((project) => project.id === id)!
const content = page.figmaToWebsiteContent
const urls = () => sitemap().map((item) => item.url)

describe("Figma to website service page content", () => {
  it("makes no pricing, tenure, count, metric, certification, testimonial or capacity claims", () => {
    expect(serialized).not.toMatch(/per hour|₹|\$\d|years of experience|\d+\+|\d+%/i)
    expect(serialized).not.toMatch(/testimonial|\brating|\bstars\b|clients served|certified|certification/i)
    expect(serialized).not.toMatch(/response time|within \d+ (hours|days)|24\/7|\bdays?\b delivery/i)
    expect(serialized).not.toMatch(/full[- ]stack|conversion rate|revenue|traffic increase|\bROI\b/i)
    expect(serialized).not.toMatch(
      /award|unlimited revisions?|pixel[- ]perfect|usability test|UX research(?!-)/i,
    )
  })

  it("keeps unpublished agency client work and the agency count out of the public page", () => {
    expect(serialized).not.toMatch(/PPCROY|agency client|\b10\b|ten landing pages/i)
    const externalUrls = (serialized.match(/https?:\/\/[^"\s)]+/g) ?? []).filter(
      (url) => url !== site.linkedIn,
    )
    expect(externalUrls).toEqual([])
    expect(page.selectedWork.map((item) => item.id)).toEqual(["mopedo", "rekha"])
  })

  it("keeps design refinement optional and promises no fidelity, rankings or citations", () => {
    expect(page.capabilities[3].body).toMatch(/We agree on changes before they become part of the build/)
    expect(page.designDetails.closing).toMatch(/An approved design stays the reference/)
    const faq = (start: string) => page.figmaToWebsiteFaqs.find((item) => item.question.startsWith(start))!
    expect(faq("Will the finished").answer).toMatch(/I do not promise identical rendering/)
    expect(faq("Will the website be search-friendly").answer).toMatch(
      /does not guarantee rankings, organic traffic or AI citations/,
    )
    expect(faq("Is this a Figma-to-code converter").answer).toMatch(/^This is a development service/)
    expect(serialized).not.toMatch(
      /rich result|llms\.txt|page one|first page|guaranteed? (results|conversions)/i,
    )
    // No access tokens or passwords are requested; only authorised material is shared.
    expect(serialized).not.toMatch(/token|password/i)
    expect(page.engagements[0].share.note).toMatch(/^Only share design material you are authorised to share/)
  })

  it("keeps Mopedo an independent React demo and Rekha an independent family-business website", () => {
    const mopedo = byId("mopedo")
    expect(mopedo.kind).toBe("Independent project")
    expect(mopedo.summary).toMatch(/^I designed and developed Mopedo as a responsive frontend demo/)
    expect(ownCopy("mopedo")).not.toMatch(/client|customers|riders|orders|Figma file|WordPress|Elementor/i)

    const rekha = byId("rekha")
    expect(rekha.kind).toBe("Independent family-business website")
    expect(rekha.summary).toMatch(/using a premium theme as the foundation/)
    expect(ownCopy("rekha")).not.toMatch(/client|custom-coded|custom theme|React|Figma|conversion/i)
    // No invented design files or before/after comparisons for either project.
    expect(JSON.stringify(page.selectedWork.map((item) => ({ ...item, project: undefined })))).not.toMatch(
      /before\/after|original Figma|supplied design/i,
    )
  })

  it("reuses the canonical project records and screenshots with the brief's ownership captions", () => {
    for (const [id, projectId, src, caption] of [
      [
        "mopedo",
        "mopedo",
        "/Projects_images/Mopedo.webp",
        "Independent frontend demo; interface design and development by Anuj Dhanuka.",
      ],
      [
        "rekha",
        "rekha-maa-ki-rasoi",
        "/project-case-studies/rekha/pricing-2026.webp",
        "Independent family-business website built on a premium WordPress theme.",
      ],
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
        caption,
      })
    }
  })

  it("uses the brief's metadata, H1, breadcrumb and two in-page hero facts", () => {
    expect(page.figmaToWebsitePage).toMatchObject({
      path: "/figma-to-website",
      title: "Figma to Website Development | Anuj Dhanuka",
      breadcrumb: "Figma to Website",
    })
    expect(page.figmaToWebsitePage.description.length).toBeLessThanOrEqual(160)
    const hero = page.figmaToWebsiteHero
    expect(`${hero.title} ${hero.titleAccent}`).toBe("Figma to Website Development Services")
    expect(page.heroFacts).toEqual([
      { label: "React and WordPress", href: "#services" },
      { label: "Design and development work", href: "#selected-work" },
    ])
  })

  it("is in the sitemap and the hire-page list with its exact H1", () => {
    const entry = sitemap().find((item) => item.url === `${site.url}/figma-to-website`)
    expect(entry?.lastModified).toBe(page.figmaToWebsitePage.lastModified)
    expect(hirePages).toContainEqual({
      label: "Figma to Website Development Services",
      role: "Figma-to-website developer",
      href: "/figma-to-website",
    })
  })

  it("leads with the project enquiry and keeps each button's own destination", () => {
    expect(page.figmaToWebsitePrimaryEnquiry).toBe("freelance")
    expect(readEnquiryParams(new URLSearchParams(page.freelanceContactHref.split("?")[1]))).toEqual({
      enquiryType: "freelance",
      source: "figma-to-website",
    })
    expect(readEnquiryParams(new URLSearchParams(page.fullTimeContactHref.split("?")[1]))).toEqual({
      enquiryType: "full-time",
      source: "figma-to-website",
    })
    expect(content.freelanceContactHref).toBe(page.freelanceContactHref)
    const [freelance, fullTime] = page.engagements
    expect(freelance).toMatchObject({
      id: "freelance",
      links: [],
      cta: {
        label: "Discuss Your Figma Design",
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
    expect(fullTime.facts).toEqual([site.availability, site.openTo])
    expect(fullTime.links.map((link) => link.href)).toEqual(["/experience", site.resumeHref, site.linkedIn])
    for (const text of [site.availability, site.openTo]) {
      expect(JSON.stringify(freelance)).not.toContain(text)
      expect(JSON.stringify(page.figmaToWebsiteFaqs)).not.toContain(text)
      expect(JSON.stringify(page.figmaToWebsiteHero)).not.toContain(text)
    }
  })

  it("describes three platform options and links only to published routes", () => {
    const choices = content.capabilities.choices!
    expect(choices.options.map((option) => option.label)).toEqual([
      "React",
      "WordPress with Elementor",
      "HTML, CSS and JavaScript",
    ])
    expect(content.capabilities.comparison).toBeUndefined()
    // Its own section after Services, with a short Services eyebrow (owner request, 21 November 2026).
    expect(choices).toMatchObject({ id: "platform-choice", label: "Platform choice" })
    expect(content.capabilities.label).toBe("Services")
    const internal = [
      ...choices.links.map((link) => link.href),
      page.landingPageNote.link.href,
      ...page.selectedWork.map((item) => `/projects/${item.project!.caseStudy!.slug}`),
    ]
    expect(internal).toEqual([
      "/react-developer",
      "/wordpress-developer",
      "/landing-page-development",
      "/projects/mopedo",
      "/projects/rekha-maa-ki-rasoi",
    ])
    for (const href of internal) expect(urls()).toContain(`${site.url}${href}`)
    expect(page.landingPageNote.text.split(page.landingPageNote.link.text)).toHaveLength(2)
  })

  it("keeps the design-details section to four text-led items", () => {
    expect(page.designDetails.items.map((item) => item.title)).toEqual([
      "Typography and spacing",
      "Responsive decisions",
      "Interaction states",
      "Consistency as the site grows",
    ])
    expect(content.designDetails).toBe(page.designDetails)
  })

  it("lists the brief's seven tools plus the owner's three additions, with an intro naming each", () => {
    const names = page.technologyStack.map((item) => item.name)
    expect(names).toEqual([
      "Figma",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "styled-components",
      "HTML",
      "CSS",
      "WordPress",
      "Elementor",
      "Elementor Pro",
    ])
    for (const name of names) expect(content.technologies.intro).toContain(name)
    expect(content.technologies.intro.split(/\s+/).length).toBeLessThanOrEqual(45)
    // Not a new service target here (Next.js, Webflow) and no integrations, stores, SEO or AI tools.
    expect(names.join(" ")).not.toMatch(
      /Next\.js|Webflow|Shopify|WooCommerce|REST|API|Redux|SEO|Cursor|v0|Lovable/i,
    )
  })

  it("uses the brief's section anchors in page order", () => {
    expect(page.figmaToWebsiteSections.map((item) => item.href)).toEqual([
      "#selected-work",
      "#services",
      "#design-details",
      "#work-with-me",
      "#process",
      "#faqs",
    ])
    expect([
      content.work.id,
      content.capabilities.id,
      content.designDetails!.id,
      content.engagement.id,
      content.approach.id,
      page.figmaToWebsiteFaqId,
    ]).toEqual(page.figmaToWebsiteSections.map((item) => item.href.slice(1)))
  })

  it("keeps process step descriptions short and titles without full stops", () => {
    for (const step of page.approachSteps) {
      expect(step.title).not.toMatch(/\.$/)
      expect(step.body.length).toBeLessThanOrEqual(100)
    }
  })
})
