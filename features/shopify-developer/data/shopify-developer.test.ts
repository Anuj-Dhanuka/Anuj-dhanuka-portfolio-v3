import { existsSync } from "node:fs"
import { join } from "node:path"

import { describe, expect, it } from "vitest"

import { site } from "@/config/site"
import { readEnquiryParams } from "@/features/contact/enquiry"
import * as page from "@/features/shopify-developer/data/shopify-developer"

const serialized = JSON.stringify(page)
const byId = (id: string) => page.selectedWork.find((item) => item.id === id)!

describe("Shopify developer page content", () => {
  it("makes no pricing, tenure, metric, certification, capacity or advanced-platform claims", () => {
    expect(serialized).not.toMatch(/per hour|₹|\$\d|years of experience|\d+\+|\d+%/i)
    expect(serialized).not.toMatch(
      /\btestimonials?\b|\bratings?\b|\bstars\b|\breviews\b|clients served|client count/i,
    )
    expect(serialized).not.toMatch(
      /lighthouse|pagespeed|core web vitals|\bconversions?\b|\brevenue\b|\bsales\b|uplift/i,
    )
    expect(serialized).not.toMatch(/certified|certification|shopify partner|shopify plus|\bplus\b/i)
    expect(serialized).not.toMatch(
      /custom apps?\b|app development|checkout extension|\bmigrat|\bERP\b|hydrogen|headless/i,
    )
    expect(serialized).not.toMatch(/start immediately|immediate start|within \d+|response time|24\/7/i)
    expect(serialized).not.toMatch(
      /full[- ]stack|remote-only|fully remote|worldwide|PPCROY|\bagency\b|\bour team\b/i,
    )
  })

  it("keeps PhoolKalaa an end-to-end direct-client build without inferred technical scope", () => {
    const phoolkalaa = byId("phoolkalaa")
    expect(phoolkalaa.kind).toBe("Direct-client project")
    expect(phoolkalaa.summary).toMatch(/end to end for a direct client/)
    expect(phoolkalaa.stack).toEqual(["Shopify"])
    expect(JSON.stringify(phoolkalaa)).not.toMatch(
      /Liquid|from scratch|custom theme|checkout|integration|app\b/i,
    )
  })

  it("keeps Phoria a scoped freelance contribution, never a direct client or a complete store", () => {
    const phoria = byId("phoria")
    expect(phoria.kind).toBe("Freelance contribution")
    expect(phoria.summary).toMatch(/through a freelance engagement; Phoria was not my direct client/)
    expect(phoria.summary).toMatch(/existing Shopify store/)
    expect(serialized).not.toMatch(
      /Phoria(?: Jewellery)? (?:is|was) my (?:direct )?client|built Phoria|Phoria’s store end to end/i,
    )
    expect(phoria.stack).toEqual(["Shopify", "Liquid"])
    // All six owner-confirmed contributions are present.
    const text = JSON.stringify(phoria)
    for (const feature of [
      /ring-stack/,
      /letter-charm/,
      /sticky product bar/,
      /Collection layouts/,
      /Layer Up/,
      /product-details/,
    ]) {
      expect(text).toMatch(feature)
    }
  })

  it("never says Liquid alone runs browser interactions", () => {
    expect(serialized).not.toMatch(
      /Liquid (?:alone )?(?:runs|executes|powers) (?:the )?(?:browser|client-side|interactive)/i,
    )
    const liquidFaq = page.shopifyDeveloperFaqs.find(
      (faq) => faq.question === "What is custom Liquid development?",
    )!
    expect(liquidFaq.answer).toMatch(/may also require HTML, CSS and JavaScript/)
  })

  it("links both projects to their live storefronts with local, existing screenshots", () => {
    expect(byId("phoolkalaa").liveSite?.href).toBe("https://phoolkalaa.in/")
    expect(byId("phoria").liveSite?.href).toBe("https://www.phoriajewellery.com/")
    for (const item of page.selectedWork) {
      expect(item.project).toBeUndefined()
      expect(item.primaryLink).toBeUndefined()
      expect(item.visual.type).toBe("image")
      if (item.visual.type !== "image") continue
      expect(existsSync(join(process.cwd(), "public", item.visual.src))).toBe(true)
      expect(item.visual.address).toBe(new URL(item.liveSite!.href).host)
      expect(item.visual.caption).toBeTruthy()
    }
  })

  it("points the hero facts at real project anchors", () => {
    expect(page.heroFacts[0]).toEqual({ label: site.location })
    const anchors = page.selectedWork.map((item) => `#${item.anchor}`)
    expect(page.heroFacts.slice(1).map((fact) => fact.href)).toEqual(anchors)
    expect(anchors).toEqual(["#phoolkalaa-work", "#phoria-work"])
  })

  it("routes both enquiry buttons to the Contact page with the shopify-developer source", () => {
    expect(readEnquiryParams(new URLSearchParams(page.fullTimeContactHref.split("?")[1]))).toEqual({
      enquiryType: "full-time",
      source: "shopify-developer",
    })
    expect(readEnquiryParams(new URLSearchParams(page.freelanceContactHref.split("?")[1]))).toEqual({
      enquiryType: "freelance",
      source: "shopify-developer",
    })
  })

  it("shows availability on the full-time path only and takes recruiter links from site config", () => {
    const [fullTime, freelance] = page.engagements
    expect(fullTime.facts).toEqual([site.availability, site.openTo])
    expect(fullTime.links.map((link) => link.href)).toEqual(["/experience", site.resumeHref, site.linkedIn])
    expect(freelance.links).toEqual([])
    expect(JSON.stringify(freelance)).not.toContain(site.availability)
    expect(JSON.stringify(page.shopifyDeveloperFaqs)).not.toContain(site.availability)
  })

  it("lists only the owner-confirmed theme and store-setup tools, with a short intro naming the main terms", () => {
    expect(page.technologyStack).toHaveLength(15)
    expect(page.technologyStack.slice(0, 2).map((item) => item.name)).toEqual(["Shopify", "Liquid"])
    // The intro carries the main search terms; the tiles carry every tool name as server-rendered text.
    const intro = page.shopifyDeveloperContent.technologies.intro
    for (const term of ["Shopify", "Liquid", "theme customization", "store setup"])
      expect(intro).toContain(term)
    expect(intro.split(/\s+/).length).toBeLessThanOrEqual(45)
    // Store-setup tiles stay generic: no advanced platform or app-building claims.
    expect(JSON.stringify(page.technologyStack)).not.toMatch(
      /plus|hydrogen|headless|graphql|storefront api|functions|checkout/i,
    )
  })

  it("asks visitors not to send passwords and keeps the section navigation in page order", () => {
    expect(page.shopifyDeveloperFaqs.at(-1)!.answer).toMatch(/do not send passwords/)
    expect(page.shopifyDeveloperSections.map((item) => item.href)).toEqual([
      "#selected-shopify-work",
      "#capabilities",
      "#work-with-me",
      "#approach",
      "#faq",
    ])
  })
})
