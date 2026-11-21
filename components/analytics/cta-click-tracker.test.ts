import { describe, expect, it } from "vitest"

import { ctaEventProperties } from "@/components/analytics/cta-click-tracker"
import { site } from "@/config/site"

const link = (
  dataset: Record<string, string>,
  href: string | null,
  around: Record<string, { id?: string }> = {},
) => ({
  dataset,
  getAttribute: (name: string) => (name === "href" ? href : null),
  // Matches the selectors the tracker asks for: "section[id], header[id]", "[data-page-hero]", "footer", "header, nav".
  closest: (selector: string) => (around[selector] as Element | undefined) ?? null,
})

describe("CTA click analytics", () => {
  it("reports a tagged button with its section, page and destination", () => {
    expect(
      ctaEventProperties(
        link({ cta: "talk_to_me", ctaSection: "client_ownership" }, "/contact"),
        "/experience/ppcroy",
      ),
    ).toEqual({
      cta: "talk_to_me",
      section: "client_ownership",
      page: "/experience/ppcroy",
      destination: "/contact",
    })
  })

  it("reports an explicit destination instead of a long href", () => {
    expect(
      ctaEventProperties(
        link(
          { cta: "whatsapp_anuj", ctaSection: "mobile_sticky", ctaDestination: site.whatsappHref },
          `${site.whatsappHref}?text=Hi%20Anuj`,
        ),
        "/hire",
      ),
    ).toMatchObject({ cta: "whatsapp_anuj", destination: site.whatsappHref })
  })

  it("recognises contact links by address and finds their section", () => {
    const inSection = { "section[id], header[id]": { id: "contact" } }
    expect(ctaEventProperties(link({}, `mailto:${site.email}`, inSection), "/")).toMatchObject({
      cta: "email",
      section: "contact",
    })
    expect(ctaEventProperties(link({}, site.phoneHref, { "header, nav": {} }), "/about")).toMatchObject({
      cta: "phone",
      section: "header",
    })
    expect(ctaEventProperties(link({}, `${site.linkedIn}/`, { footer: {} }), "/")).toMatchObject({
      cta: "linkedin",
      section: "footer",
    })
    expect(ctaEventProperties(link({}, site.github), "/")).toMatchObject({ cta: "github" })
  })

  it("names a page hero without an id as the hero section", () => {
    expect(
      ctaEventProperties(
        link({ cta: "explore_my_journey" }, "#journey", { "[data-page-hero]": {} }),
        "/about",
      ),
    ).toMatchObject({ cta: "explore_my_journey", section: "hero", page: "/about" })
    // An id or explicit section still wins.
    const both = { "section[id], header[id]": { id: "overview" }, "[data-page-hero]": {} }
    expect(ctaEventProperties(link({ cta: "x" }, "/contact", both), "/")).toMatchObject({
      section: "overview",
    })
  })

  it("ignores plain navigation and in-page jumps", () => {
    expect(ctaEventProperties(link({}, "/about"), "/")).toBeNull()
    expect(ctaEventProperties(link({}, "#overview"), "/projects/mopedo")).toBeNull()
  })
})
