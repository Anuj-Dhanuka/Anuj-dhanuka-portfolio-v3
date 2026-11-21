import { describe, expect, it } from "vitest"

import { createContactEmailHtml, escapeHtml } from "@/features/contact/email"

describe("contact email rendering", () => {
  it("escapes user-controlled HTML", () => {
    expect(escapeHtml('<script>alert("x")</script>')).toBe(
      "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;",
    )
  })

  it("preserves safe message line breaks without rendering injected tags", () => {
    const html = createContactEmailHtml(
      {
        name: "Visitor",
        email: "visitor@example.com",
        phone: "",
        subject: "Project",
        message: "First line\n<img src=x onerror=alert(1)>",
        enquiryType: "general",
        source: "direct",
        formCheck: "",
      },
      new Date("2026-01-01T00:00:00.000Z"),
    )

    expect(html).toContain("First line<br />&lt;img")
    expect(html).not.toContain("<img src=x")
    expect(html).toContain("2026-01-01T00:00:00.000Z")
  })

  it("labels the enquiry type and entry page from allowlisted values", () => {
    const html = createContactEmailHtml({
      name: "Recruiter",
      email: "recruiter@example.com",
      phone: "",
      subject: "Frontend role",
      message: "Hello",
      enquiryType: "full-time",
      source: "react-developer",
      formCheck: "",
    })

    expect(html).toContain("<strong>Enquiry type:</strong> Full-time role")
    expect(html).toContain("<strong>Started from:</strong> /react-developer")
    expect(
      createContactEmailHtml({
        name: "Client",
        email: "client@example.com",
        phone: "",
        subject: "Mobile app",
        message: "Hello",
        enquiryType: "freelance",
        source: "react-native-developer",
        formCheck: "",
      }),
    ).toContain("<strong>Started from:</strong> /react-native-developer")
  })
})
