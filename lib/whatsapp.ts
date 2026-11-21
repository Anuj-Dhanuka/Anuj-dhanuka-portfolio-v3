import { site } from "@/config/site"

// The prefilled message for WhatsApp links outside the hire pages (Contact details, mobile menu). Visitors
// can send it as is or edit it first.
export const whatsappGeneralMessage = "Hi Anuj, I came across your portfolio and would like to get in touch."

// A wa.me chat link with a prefilled message. Analytics records site.whatsappHref (data-cta-destination),
// never the message.
export function whatsappLink(message: string): string {
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`
}
