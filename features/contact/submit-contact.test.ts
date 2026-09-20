import { afterEach, describe, expect, it, vi } from "vitest"

import { submitContactForm } from "@/features/contact/submit-contact"

const submission = {
  name: "Anuj Dhanuka",
  email: "anuj@example.com",
  phone: "",
  subject: "Project enquiry",
  message: "I would like to discuss a frontend project.",
  website: "",
}

describe("submitContactForm", () => {
  afterEach(() => vi.unstubAllGlobals())

  it("returns a successful API response", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    )
    vi.stubGlobal("fetch", fetchMock)

    await expect(submitContactForm(submission)).resolves.toEqual({ success: true })
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST", body: JSON.stringify(submission) }),
    )
  })

  it("preserves safe validation errors from the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ success: false, error: "Please correct the highlighted fields." }), {
          status: 400,
          headers: { "content-type": "application/json" },
        }),
      ),
    )

    await expect(submitContactForm(submission)).resolves.toEqual({
      success: false,
      error: "Please correct the highlighted fields.",
    })
  })

  it("normalizes network and malformed response failures", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("private provider detail")))

    await expect(submitContactForm(submission)).resolves.toEqual({
      success: false,
      error: "Unable to send your message. Please try again or email me directly.",
    })
  })
})
