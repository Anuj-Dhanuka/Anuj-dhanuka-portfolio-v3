import { describe, expect, it } from "vitest"

import * as chefkart from "@/features/experience/data/chefkart"
import { experienceRoles } from "@/features/experience/data/experience"

const serialized = JSON.stringify(chefkart)

describe("ChefKart experience page content", () => {
  it("keeps internal and third-party details out of public copy", () => {
    // Repository and internal product names, commit hashes and colleague names stay private.
    expect(serialized).not.toMatch(/interstellar|culinarycache|centaurus/i)
    expect(serialized).not.toMatch(/\b[0-9a-f]{7,40}\b/)
    expect(serialized).not.toMatch(
      /umesh|rohit|pratyush|prabhat|utsav|akash|saurav|nihal|hemant|prakhar|yashwant|colleague/i,
    )
    expect(serialized).not.toMatch(/\/customer\/|calculate-price/i)
    // Image sources live in docs/asset-credits.md, never on the page.
    expect(serialized).not.toMatch(/unsplash|pexels|photo by/i)
  })

  it("publishes the owner-confirmed contribution figures with their method", () => {
    expect(chefkart.chefkartProof.map((stat) => stat.value)).toEqual(["#1", "#1", "461", "107,794"])
    expect(chefkart.chefkartProofNote).toMatch(/35\.05%.*33\.18%/)
    expect(chefkart.chefkartStatsMethodology).toMatch(/git blame/)
    expect(chefkart.chefkartStatsMethodology).toMatch(/not every line ever added/)
  })

  it("credits the payments case study to the owner", () => {
    const payments = chefkart.chefkartCaseStudies.find((study) => study.id === "payments")
    expect(JSON.stringify(payments)).toMatch(/Quick Buy/)
    expect(JSON.stringify(payments)).not.toMatch(/colleague/i)
  })

  it("links the ChefKart role card to the case study", () => {
    const role = experienceRoles.find((item) => item.id === "chefkart")
    expect(role?.cta).toMatchObject({ href: chefkart.chefkartPage.path, external: false })
  })
})
