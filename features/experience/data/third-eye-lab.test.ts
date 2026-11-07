import { describe, expect, it } from "vitest"

import { experienceRoles } from "@/features/experience/data/experience"
import * as thirdEyeLab from "@/features/experience/data/third-eye-lab"

const serialized = JSON.stringify(thirdEyeLab)

describe("3rd Eye Lab experience page content", () => {
  it("keeps the company assignment public-safe and separate from QuizWar", () => {
    expect(serialized).not.toMatch(/QuizWar|Levels App|repository|source code/i)
    expect(serialized).not.toMatch(/users|downloads|revenue|conversion/i)
  })

  it("matches the internship role, location and dates on the Experience page", () => {
    const role = experienceRoles.find((item) => item.id === "third-eye-lab")
    expect(thirdEyeLab.thirdEyeLabHero.eyebrow).toContain(role?.position)
    expect(thirdEyeLab.thirdEyeLabHero.meta).toContain(role?.location)
    expect(thirdEyeLab.thirdEyeLabHero.meta).toContain("April 2024 to June 2024")
    expect(role?.duration).toBe("April 2024 – June 2024")
  })

  it("links the role card to the experience page", () => {
    const role = experienceRoles.find((item) => item.id === "third-eye-lab")
    expect(role?.cta).toMatchObject({ href: thirdEyeLab.thirdEyeLabPage.path, external: false })
  })
})
