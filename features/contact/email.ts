import type { ContactFormData } from "@/features/contact/schema"

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    }

    return entities[character]
  })
}

function preserveLineBreaks(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />")
}

export function createContactEmailHtml(data: ContactFormData, submittedAt = new Date()) {
  return `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>Message:</strong><br />${preserveLineBreaks(data.message)}</p>
    <hr />
    <p>Submitted on: ${escapeHtml(submittedAt.toISOString())}</p>
  `
}
