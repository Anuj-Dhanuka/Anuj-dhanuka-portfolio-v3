import { analyticsEvents } from "@/config/analytics"
import type { ContactApiResponse, ContactFormData } from "@/features/contact/schema"
import { trackEvent } from "@/lib/analytics"

export async function submitContactForm(formData: ContactFormData): Promise<ContactApiResponse> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const result = (await response.json()) as ContactApiResponse
    if (!response.ok) {
      return result.success ? { success: false, error: "Unable to send your message." } : result
    }

    // Reported only after the API accepts the message, with allowlisted context and never form content.
    // An accepted message is not proof of inbox delivery or a qualified lead.
    if (result.success) {
      trackEvent(analyticsEvents.contactSubmitted, {
        enquiry_type: formData.enquiryType,
        // The entry page the visitor started from; an editable hint, not acquisition attribution.
        entry_source: formData.source,
      })
    }

    return result
  } catch {
    return { success: false, error: "Unable to send your message. Please try again or email me directly." }
  }
}
