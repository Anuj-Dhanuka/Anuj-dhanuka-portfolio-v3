import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

import { describe, expect, it } from "vitest"

import { hirePages } from "@/config/hire-pages"
import { hireEnquiryActions } from "@/features/hire-pages/enquiry-actions"

const input = {
  fullTimeHref: "/contact?enquiry=full-time&source=x",
  freelanceHref: "/contact?enquiry=freelance&source=x",
  fullTimeLabel: "Discuss a Full-time Role",
  freelanceLabel: "Discuss a Project",
}

describe("hire page enquiry actions", () => {
  it("puts the full-time enquiry first by default, as on every role page", () => {
    const actions = hireEnquiryActions(input)
    expect(actions).toEqual(hireEnquiryActions({ ...input, primary: "full-time" }))
    expect(actions.map((action) => [action.type, action.href, action.cta])).toEqual([
      ["full-time", input.fullTimeHref, "discuss_full_time_role"],
      ["freelance", input.freelanceHref, "discuss_freelance_project"],
    ])
  })

  it("leads with the project enquiry when asked, without swapping destinations or analytics ids", () => {
    const actions = hireEnquiryActions({ ...input, primary: "freelance" })
    expect(actions.map((action) => [action.type, action.href, action.label, action.cta])).toEqual([
      ["freelance", input.freelanceHref, input.freelanceLabel, "discuss_freelance_project"],
      ["full-time", input.fullTimeHref, input.fullTimeLabel, "discuss_full_time_role"],
    ])
  })

  it("is changed only by the landing-page service route; role pages keep the default order", () => {
    const appDir = join(process.cwd(), "app")
    const leadsWithProject = hirePages
      .map((page) => page.href)
      .filter((href) => {
        const source = readFileSync(join(appDir, href.slice(1), "page.tsx"), "utf8")
        return /primary=\{/.test(source)
      })
    expect(leadsWithProject).toEqual(["/landing-page-development"])
    // Every hire route is listed, so none is skipped by this check.
    const routes = readdirSync(appDir).filter((name) => /-developer$|^landing-page-development$/.test(name))
    expect(routes.sort()).toEqual(hirePages.map((page) => page.href.slice(1)).sort())
  })
})
