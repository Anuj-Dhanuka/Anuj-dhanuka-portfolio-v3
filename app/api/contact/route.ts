import { NextResponse } from "next/server"
import { Resend } from "resend"

import { getServerEnv } from "@/config/env"
import { createContactEmailHtml } from "@/features/contact/email"
import { contactFormSchema, type ContactApiResponse } from "@/features/contact/schema"
import { logError, logInfo } from "@/lib/server/logger"
import { checkRateLimit, getClientIp } from "@/lib/server/rate-limit"

const MAX_REQUEST_BYTES = 12_000
const RATE_LIMIT = { limit: 5, windowMs: 60 * 60 * 1000 }

function jsonResponse(
  body: ContactApiResponse,
  status: number,
  requestId: string,
  extraHeaders?: HeadersInit,
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Request-Id": requestId,
      ...extraHeaders,
    },
  })
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID()
  const clientIp = getClientIp(request.headers)

  try {
    if (request.headers.get("sec-fetch-site") === "cross-site") {
      return jsonResponse({ success: false, error: "Request origin is not allowed." }, 403, requestId)
    }

    if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
      return jsonResponse({ success: false, error: "Content-Type must be application/json." }, 415, requestId)
    }

    const rateLimit = checkRateLimit(`contact:${clientIp}`, RATE_LIMIT)
    if (!rateLimit.allowed) {
      const retryAfter = Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000))
      return jsonResponse(
        { success: false, error: "Too many messages were submitted. Please try again later." },
        429,
        requestId,
        { "Retry-After": String(retryAfter) },
      )
    }

    const declaredLength = Number(request.headers.get("content-length") || 0)
    if (declaredLength > MAX_REQUEST_BYTES) {
      return jsonResponse({ success: false, error: "Request is too large." }, 413, requestId)
    }

    const rawBody = await request.text()
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return jsonResponse({ success: false, error: "Request is too large." }, 413, requestId)
    }

    let body: unknown
    try {
      body = JSON.parse(rawBody)
    } catch {
      return jsonResponse({ success: false, error: "Request body must contain valid JSON." }, 400, requestId)
    }

    const validation = contactFormSchema.safeParse(body)
    if (!validation.success) {
      return jsonResponse(
        {
          success: false,
          error: "Please correct the highlighted fields.",
          fieldErrors: validation.error.flatten().fieldErrors,
        },
        400,
        requestId,
      )
    }

    const contact = validation.data
    if (contact.formCheck) {
      logInfo("contact.spam_honeypot", { requestId })
      return jsonResponse({ success: true }, 200, requestId)
    }

    const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL } = getServerEnv()
    const resend = new Resend(RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Portfolio Contact: ${contact.subject}`,
      html: createContactEmailHtml(contact),
      replyTo: contact.email,
    })

    if (error) {
      logError("contact.email_failed", error, { requestId })
      return jsonResponse({ success: false, error: "Unable to send your message right now." }, 502, requestId)
    }

    logInfo("contact.email_sent", { requestId })
    return jsonResponse({ success: true }, 200, requestId)
  } catch (error) {
    logError("contact.unexpected_error", error, { requestId })
    return jsonResponse({ success: false, error: "Unable to send your message right now." }, 500, requestId)
  }
}
