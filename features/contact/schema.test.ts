import { describe, expect, it } from "vitest"

import { contactFormSchema } from "@/features/contact/schema"

const validSubmission = {
  name: "Anuj Dhanuka",
  email: "anuj@example.com",
  phone: "+91 98765 43210",
  subject: "React project",
  message: "I would like to discuss a frontend project.",
  formCheck: "",
}

describe("contactFormSchema", () => {
  it("accepts and trims a valid submission", () => {
    const result = contactFormSchema.parse({ ...validSubmission, name: "  Anuj Dhanuka  " })
    expect(result.name).toBe("Anuj Dhanuka")
  })

  it("rejects invalid email addresses and multiline subjects", () => {
    const result = contactFormSchema.safeParse({
      ...validSubmission,
      email: "not-an-email",
      subject: "Hello\nBcc: attacker@example.com",
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toBeDefined()
      expect(result.error.flatten().fieldErrors.subject).toBeDefined()
    }
  })

  it("rejects oversized messages", () => {
    const result = contactFormSchema.safeParse({ ...validSubmission, message: "a".repeat(3001) })
    expect(result.success).toBe(false)
  })

  it("defaults enquiry context only when older payloads omit it", () => {
    expect(contactFormSchema.parse(validSubmission)).toMatchObject({
      enquiryType: "general",
      source: "direct",
    })
  })

  it("rejects enquiry context outside the allowlist", () => {
    const result = contactFormSchema.safeParse({
      ...validSubmission,
      enquiryType: "<b>vip</b>",
      source: "https://evil.example",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.enquiryType).toBeDefined()
      expect(result.error.flatten().fieldErrors.source).toBeDefined()
    }
  })

  it("keeps allowlisted enquiry context", () => {
    expect(
      contactFormSchema.parse({ ...validSubmission, enquiryType: "freelance", source: "react-developer" }),
    ).toMatchObject({ enquiryType: "freelance", source: "react-developer" })
    expect(
      contactFormSchema.parse({
        ...validSubmission,
        enquiryType: "full-time",
        source: "react-native-developer",
      }),
    ).toMatchObject({ enquiryType: "full-time", source: "react-native-developer" })
    expect(contactFormSchema.safeParse({ ...validSubmission, source: "react-native" }).success).toBe(false)
    expect(
      contactFormSchema.parse({ ...validSubmission, enquiryType: "freelance", source: "frontend-developer" }),
    ).toMatchObject({ enquiryType: "freelance", source: "frontend-developer" })
    expect(contactFormSchema.safeParse({ ...validSubmission, source: "frontend" }).success).toBe(false)
    expect(
      contactFormSchema.parse({ ...validSubmission, enquiryType: "freelance", source: "shopify-developer" }),
    ).toMatchObject({ enquiryType: "freelance", source: "shopify-developer" })
    expect(contactFormSchema.safeParse({ ...validSubmission, source: "shopify" }).success).toBe(false)
    expect(
      contactFormSchema.parse({
        ...validSubmission,
        enquiryType: "full-time",
        source: "wordpress-developer",
      }),
    ).toMatchObject({ enquiryType: "full-time", source: "wordpress-developer" })
    expect(contactFormSchema.safeParse({ ...validSubmission, source: "elementor" }).success).toBe(false)
    expect(
      contactFormSchema.parse({
        ...validSubmission,
        enquiryType: "freelance",
        source: "landing-page-development",
      }),
    ).toMatchObject({ enquiryType: "freelance", source: "landing-page-development" })
    expect(contactFormSchema.safeParse({ ...validSubmission, source: "landing-page" }).success).toBe(false)
    expect(
      contactFormSchema.parse({ ...validSubmission, enquiryType: "freelance", source: "figma-to-website" }),
    ).toMatchObject({ enquiryType: "freelance", source: "figma-to-website" })
    expect(contactFormSchema.safeParse({ ...validSubmission, source: "figma-to-react" }).success).toBe(false)
  })
})
