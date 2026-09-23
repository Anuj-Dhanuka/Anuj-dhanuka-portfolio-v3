import type { ContactApiResponse, ContactFormData } from "@/features/contact/schema"

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

    return result
  } catch {
    return { success: false, error: "Unable to send your message. Please try again or email me directly." }
  }
}
