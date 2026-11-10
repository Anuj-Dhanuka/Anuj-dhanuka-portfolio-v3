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
    const facts = Object.fromEntries(thirdEyeLab.thirdEyeLabBeginning.facts.map((f) => [f.label, f.value]))
    expect(facts.Where).toContain(role?.location)
    // April to June 2024 was two months; show both so the range never reads as three.
    expect(facts.When).toBe("Apr – Jun 2024 · 2 months")
    expect(role?.duration).toBe("April 2024 – June 2024")
  })

  it("never claims additional features, which the owner confirmed were not delivered", () => {
    const about = JSON.stringify(experienceRoles)
    expect(serialized).not.toMatch(/additional features|beyond the (initial )?requirements|beyond the brief/i)
    expect(about).not.toMatch(/additional features/i)
  })

  it("links the role card to the experience page", () => {
    const role = experienceRoles.find((item) => item.id === "third-eye-lab")
    expect(role?.cta).toMatchObject({ href: thirdEyeLab.thirdEyeLabPage.path, external: false })
  })
})
