import { describe, expect, it } from "vitest"

import { contactHref, enquiryParamsKey, readEnquiryParams } from "@/features/contact/enquiry"

const read = (query: string) => readEnquiryParams(new URLSearchParams(query))

describe("enquiry URL context", () => {
  it("reads allowlisted enquiry types and sources", () => {
    expect(read("enquiry=full-time&source=react-developer")).toEqual({
      enquiryType: "full-time",
      source: "react-developer",
    })
    expect(read("enquiry=freelance")).toEqual({ enquiryType: "freelance", source: "direct" })
    expect(read("enquiry=full-time&source=react-native-developer")).toEqual({
      enquiryType: "full-time",
      source: "react-native-developer",
    })
    expect(read("enquiry=freelance&source=frontend-developer")).toEqual({
      enquiryType: "freelance",
      source: "frontend-developer",
    })
  })

  const neutral = { enquiryType: "general", source: "direct" }

  it("falls back to a general, direct enquiry for missing, unknown, tampered and repeated values", () => {
    expect(read("")).toEqual(neutral)
    expect(read("enquiry=FULL-TIME&source=https://evil.example")).toEqual(neutral)
    expect(read("enquiry=<script>&source=/react-developer")).toEqual(neutral)
    expect(read("enquiry=freelance&enquiry=full-time&source=react-developer")).toEqual({
      enquiryType: "general",
      source: "react-developer",
    })
    expect(read("enquiry=freelance&source=react-developer&source=react-developer")).toEqual({
      enquiryType: "freelance",
      source: "direct",
    })
    expect(read("enquiry=&source=")).toEqual(neutral)
    // Near-misses of the React Native source are not accepted.
    expect(read("enquiry=freelance&source=React-Native-Developer").source).toBe("direct")
    expect(read("enquiry=freelance&source=react-native").source).toBe("direct")
    expect(read("enquiry=freelance&source=%20react-native-developer").source).toBe("direct")
    expect(read("enquiry=freelance&source=frontend").source).toBe("direct")
    expect(read("enquiry=freelance&source=front-end-developer").source).toBe("direct")
    expect(read("enquiry=freelance&source=frontend-developer&source=frontend-developer").source).toBe(
      "direct",
    )
    // Two different sources are as ambiguous as two identical ones.
    expect(read("enquiry=freelance&source=react-developer&source=react-native-developer")).toEqual({
      enquiryType: "freelance",
      source: "direct",
    })
  })

  it("clears previous context when navigating to a contact URL without parameters", () => {
    // The form applies the resolved context in full, so stale freelance/source values cannot survive.
    expect(read("enquiry=freelance&source=react-developer")).not.toEqual(read(""))
    expect(read("")).toEqual(neutral)
  })

  it("changes its key only when enquiry parameters change", () => {
    const key = (query: string) => enquiryParamsKey(new URLSearchParams(query))
    expect(key("enquiry=freelance&utm_campaign=a")).toBe(key("utm_campaign=b&enquiry=freelance"))
    expect(key("enquiry=freelance")).not.toBe(key(""))
    expect(key("enquiry=freelance")).not.toBe(key("enquiry=freelance&source=react-developer"))
    expect(key("enquiry=freelance&enquiry=freelance")).not.toBe(key("enquiry=freelance"))
    // Moving between hire pages with the same enquiry type still re-applies the context.
    expect(key("enquiry=freelance&source=react-developer")).not.toBe(
      key("enquiry=freelance&source=react-native-developer"),
    )
  })

  it("builds contact links that round-trip through the parser", () => {
    const href = contactHref("freelance", "react-developer")
    expect(href).toBe("/contact?enquiry=freelance&source=react-developer")
    expect(read(href.split("?")[1])).toEqual({ enquiryType: "freelance", source: "react-developer" })
    const native = contactHref("full-time", "react-native-developer")
    expect(native).toBe("/contact?enquiry=full-time&source=react-native-developer")
    expect(read(native.split("?")[1])).toEqual({ enquiryType: "full-time", source: "react-native-developer" })
    for (const type of ["full-time", "freelance"] as const) {
      const frontend = contactHref(type, "frontend-developer")
      expect(frontend).toBe(`/contact?enquiry=${type}&source=frontend-developer`)
      expect(read(frontend.split("?")[1])).toEqual({ enquiryType: type, source: "frontend-developer" })
    }
    for (const type of ["full-time", "freelance"] as const) {
      const shopify = contactHref(type, "shopify-developer")
      expect(shopify).toBe(`/contact?enquiry=${type}&source=shopify-developer`)
      expect(read(shopify.split("?")[1])).toEqual({ enquiryType: type, source: "shopify-developer" })
    }
    for (const type of ["full-time", "freelance"] as const) {
      const wordpress = contactHref(type, "wordpress-developer")
      expect(wordpress).toBe(`/contact?enquiry=${type}&source=wordpress-developer`)
      expect(read(wordpress.split("?")[1])).toEqual({ enquiryType: type, source: "wordpress-developer" })
    }
    for (const type of ["full-time", "freelance"] as const) {
      const landing = contactHref(type, "landing-page-development")
      expect(landing).toBe(`/contact?enquiry=${type}&source=landing-page-development`)
      expect(read(landing.split("?")[1])).toEqual({ enquiryType: type, source: "landing-page-development" })
    }
    expect(read("enquiry=freelance&source=landing-page").source).toBe("direct")
    expect(
      read("enquiry=freelance&source=landing-page-development&source=landing-page-development").source,
    ).toBe("direct")
    // Near-miss and repeated values still fall back to the neutral default.
    expect(read("enquiry=freelance&source=wordpress").source).toBe("direct")
    expect(read("enquiry=freelance&source=shopify").source).toBe("direct")
    expect(read("enquiry=freelance&source=shopify-developer&source=shopify-developer").source).toBe("direct")
  })
})
