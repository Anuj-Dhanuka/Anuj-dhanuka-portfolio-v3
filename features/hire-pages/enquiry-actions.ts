import type { HireEnquiryType } from "@/features/hire-pages/types"

export type HireEnquiryAction = {
  type: HireEnquiryType
  href: string
  label: string
  // Delegated cta_clicked identity. Tied to the enquiry type, never to the button's position, so a project
  // enquiry is never reported as a full-time one (or the reverse) when a page changes the order.
  cta: "discuss_full_time_role" | "discuss_freelance_project"
}

// The hero and closing CTA's two enquiry buttons, primary first. Role pages keep the full-time default;
// a service page (/landing-page-development, /figma-to-website) leads with the project enquiry.
export function hireEnquiryActions({
  fullTimeHref,
  freelanceHref,
  fullTimeLabel,
  freelanceLabel,
  primary = "full-time",
}: {
  fullTimeHref: string
  freelanceHref: string
  fullTimeLabel: string
  freelanceLabel: string
  primary?: HireEnquiryType
}): readonly [HireEnquiryAction, HireEnquiryAction] {
  const fullTime: HireEnquiryAction = {
    type: "full-time",
    href: fullTimeHref,
    label: fullTimeLabel,
    cta: "discuss_full_time_role",
  }
  const freelance: HireEnquiryAction = {
    type: "freelance",
    href: freelanceHref,
    label: freelanceLabel,
    cta: "discuss_freelance_project",
  }
  return primary === "freelance" ? [freelance, fullTime] : [fullTime, freelance]
}
