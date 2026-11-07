import { describe, expect, it } from "vitest"

import { experienceRoles } from "@/features/experience/data/experience"
import * as ppcroy from "@/features/experience/data/ppcroy"

const serialized = JSON.stringify(ppcroy)

describe("PPCROY experience page content", () => {
  it("publishes no unfilled template placeholders", () => {
    expect(serialized).not.toMatch(/\[[A-Z][a-z]/)
    expect(serialized).not.toMatch(/Month Year|Location or Remote|Project or client name/)
  })

  it("matches the role, location and dates on the Experience page and resume", () => {
    const role = experienceRoles.find((item) => item.id === "ppcroy")
    expect(ppcroy.ppcroyHero.eyebrow).toContain(role?.position)
    expect(ppcroy.ppcroyHero.meta).toContain(role?.location)
    expect(ppcroy.ppcroyHero.meta).toContain("October 2024 to December 2025")
    expect(role?.duration).toBe("October 2024 – December 2025")
  })

  it("links the PPCROY role card to the experience page", () => {
    const role = experienceRoles.find((item) => item.id === "ppcroy")
    expect(role?.cta).toMatchObject({ href: ppcroy.ppcroyPage.path, external: false })
  })
})
