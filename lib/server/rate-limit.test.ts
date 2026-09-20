import { beforeEach, describe, expect, it } from "vitest"

import { checkRateLimit, clearRateLimitStore, getClientIp } from "@/lib/server/rate-limit"

describe("checkRateLimit", () => {
  beforeEach(clearRateLimitStore)

  it("blocks requests after the configured limit", () => {
    const options = { limit: 2, windowMs: 1000 }

    expect(checkRateLimit("visitor", options, 0).allowed).toBe(true)
    expect(checkRateLimit("visitor", options, 1).allowed).toBe(true)
    expect(checkRateLimit("visitor", options, 2).allowed).toBe(false)
  })

  it("resets the window after it expires", () => {
    const options = { limit: 1, windowMs: 1000 }

    expect(checkRateLimit("visitor", options, 0).allowed).toBe(true)
    expect(checkRateLimit("visitor", options, 500).allowed).toBe(false)
    expect(checkRateLimit("visitor", options, 1000).allowed).toBe(true)
  })

  it("uses the first forwarded IP address", () => {
    expect(getClientIp(new Headers({ "x-forwarded-for": "203.0.113.1, 10.0.0.1" }))).toBe("203.0.113.1")
  })
})
