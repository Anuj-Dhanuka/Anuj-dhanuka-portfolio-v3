import { PageSectionNav } from "@/components/shared/page-section-nav"
import { ContactGuidance } from "@/features/contact/components/contact-guidance"
import { ContactSection } from "@/features/contact/components/contact-section"

const contactSections = [
  { href: "#contact", label: "Send a message" },
  { href: "#what-to-share", label: "What to share" },
  { href: "#what-happens-next", label: "What happens next" },
] as const

export function ContactPageContent() {
  return (
    <>
      <PageSectionNav items={contactSections} />
      <ContactSection />
      <ContactGuidance />
    </>
  )
}
