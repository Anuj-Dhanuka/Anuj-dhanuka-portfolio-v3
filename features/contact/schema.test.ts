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
})
