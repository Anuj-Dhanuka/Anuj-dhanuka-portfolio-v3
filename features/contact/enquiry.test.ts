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
  })

  it("builds contact links that round-trip through the parser", () => {
    const href = contactHref("freelance", "react-developer")
    expect(href).toBe("/contact?enquiry=freelance&source=react-developer")
    expect(read(href.split("?")[1])).toEqual({ enquiryType: "freelance", source: "react-developer" })
  })
})
