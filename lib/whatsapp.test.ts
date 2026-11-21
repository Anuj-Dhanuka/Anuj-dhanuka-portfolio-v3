import { describe, expect, it } from "vitest"

import { site } from "@/config/site"
import { whatsappGeneralMessage, whatsappLink } from "@/lib/whatsapp"

describe("WhatsApp links", () => {
  it("opens a chat on the site number with the message prefilled", () => {
    const url = new URL(whatsappLink(whatsappGeneralMessage))
    expect(`${url.origin}${url.pathname}`).toBe(site.whatsappHref)
    expect(url.searchParams.get("text")).toBe(
      "Hi Anuj, I came across your portfolio and would like to get in touch.",
    )
  })
})
