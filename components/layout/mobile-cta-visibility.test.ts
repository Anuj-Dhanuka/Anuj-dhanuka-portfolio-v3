import { describe, expect, it } from "vitest"

import {
  isEditableElement,
  hireWhatsappHref,
  isHirePath,
  isMobileCtaVisible,
  isPastHero,
  type MobileCtaState,
} from "./mobile-cta-visibility"

const shown: MobileCtaState = {
  hasHero: true,
  pastHero: true,
  menuOpen: false,
  hideRegionVisible: false,
  editing: false,
  focusInBar: false,
}

describe("mobile CTA bar visibility", () => {
  it("shows only after the opening section on pages that have one", () => {
    expect(isMobileCtaVisible(shown)).toBe(true)
    expect(isMobileCtaVisible({ ...shown, pastHero: false })).toBe(false)
    // 404, error and other non-content routes have no marked opening section.
    expect(isMobileCtaVisible({ ...shown, hasHero: false })).toBe(false)
  })

  it("hides for the mobile menu, a visible contact form and text entry", () => {
    expect(isMobileCtaVisible({ ...shown, menuOpen: true })).toBe(false)
    expect(isMobileCtaVisible({ ...shown, hideRegionVisible: true })).toBe(false)
    expect(isMobileCtaVisible({ ...shown, editing: true })).toBe(false)
  })

  it("stays visible while one of its own links has keyboard focus", () => {
    expect(isMobileCtaVisible({ ...shown, focusInBar: true, hideRegionVisible: true })).toBe(true)
    expect(isMobileCtaVisible({ ...shown, focusInBar: true, pastHero: false })).toBe(true)
    // ...but never on a route that does not use the bar at all.
    expect(isMobileCtaVisible({ ...shown, focusInBar: true, hasHero: false })).toBe(false)
  })

  it("treats the opening section as passed only when it is fully above the viewport", () => {
    expect(isPastHero({ isIntersecting: false, boundingClientRect: { bottom: -1 } })).toBe(true)
    expect(isPastHero({ isIntersecting: true, boundingClientRect: { bottom: 40 } })).toBe(false)
    // Below the viewport (e.g. restored scroll position before layout) is not "passed".
    expect(isPastHero({ isIntersecting: false, boundingClientRect: { bottom: 900 } })).toBe(false)
  })

  it("recognises fields that open the on-screen keyboard", () => {
    const el = (tag: string, type?: string) =>
      ({ tagName: tag, getAttribute: () => type ?? null }) as unknown as Element
    expect(isEditableElement(el("INPUT", "email"))).toBe(true)
    expect(isEditableElement(el("INPUT"))).toBe(true)
    expect(isEditableElement(el("TEXTAREA"))).toBe(true)
    expect(isEditableElement(el("SELECT"))).toBe(true)
    expect(isEditableElement(el("INPUT", "submit"))).toBe(false)
    expect(isEditableElement(el("A"))).toBe(false)
    expect(isEditableElement(null)).toBe(false)
  })
})

describe("hire-page WhatsApp swap", () => {
  it("applies to /hire and all seven specialist hire pages only", () => {
    const hire = [
      "/hire",
      "/react-developer",
      "/react-native-developer",
      "/frontend-developer",
      "/shopify-developer",
      "/wordpress-developer",
      "/landing-page-development",
      "/figma-to-website",
    ]
    for (const path of hire) expect(isHirePath(path)).toBe(true)
    for (const path of ["/", "/about", "/contact", "/projects/mopedo", "/hire/extra", null]) {
      expect(isHirePath(path)).toBe(false)
    }
  })
})

describe("hire-page WhatsApp message", () => {
  const message = (path: string) => {
    const href = hireWhatsappHref(path)
    return href && new URL(href).searchParams.get("text")
  }

  it("prefills a message naming the page the visitor is on", () => {
    expect(hireWhatsappHref("/react-developer")).toMatch(/^https:\/\/wa\.me\/918978264705\?text=/)
    expect(message("/react-developer")).toBe(
      "Hi Anuj, I found your React Developer for Hire page and would like to discuss working with you.",
    )
    expect(message("/figma-to-website")).toContain("Figma to Website Development Services page")
    expect(message("/hire")).toBe(
      "Hi Anuj, I found your Hire Me page and would like to discuss working with you.",
    )
  })

  it("returns nothing outside the hire pages", () => {
    for (const path of ["/", "/contact", "/projects/mopedo"]) expect(hireWhatsappHref(path)).toBeNull()
  })
})
