import { beforeEach, describe, expect, it } from "vitest"

import { clearRateLimitStore } from "@/lib/server/rate-limit"
import { POST } from "./route"

const endpoint = "http://localhost/api/contact"

function createRequest(body: string, headers: Record<string, string> = {}) {
  return new Request(endpoint, {
    method: "POST",
    body,
    headers: { "content-type": "application/json", "x-forwarded-for": "203.0.113.10", ...headers },
  })
}

describe("contact route", () => {
  beforeEach(clearRateLimitStore)

  it("rejects unsupported content types", async () => {
    const response = await POST(createRequest("name=Anuj", { "content-type": "text/plain" }))
    expect(response.status).toBe(415)
  })

  it("rejects malformed JSON without leaking details", async () => {
    const response = await POST(createRequest("{"))
    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toEqual({
      success: false,
      error: "Request body must contain valid JSON.",
    })
  })

  it("returns field validation errors", async () => {
    const response = await POST(
      createRequest(JSON.stringify({ name: "", email: "bad", phone: "", subject: "", message: "" })),
    )
    const body = await response.json()
    expect(response.status).toBe(400)
    expect(body.success).toBe(false)
    expect(body.fieldErrors.email).toBeDefined()
  })

  it("silently accepts a honeypot submission without calling email infrastructure", async () => {
    const response = await POST(
      createRequest(
        JSON.stringify({
          name: "Bot",
          email: "bot@example.com",
          phone: "",
          subject: "Hello",
          message: "Automated spam",
          formCheck: "filled-by-a-bot",
        }),
      ),
    )
    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ success: true })
  })

  it("rejects oversized requests from the declared content length", async () => {
    const response = await POST(createRequest("{}", { "content-length": "12001" }))
    expect(response.status).toBe(413)
  })
})
