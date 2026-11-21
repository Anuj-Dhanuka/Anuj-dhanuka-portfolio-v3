import { frontendDeveloperImageAlt } from "@/features/frontend-developer/data/frontend-developer"
import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"

export const alt = frontendDeveloperImageAlt
export const size = hireOgSize
export const contentType = "image/png"

export default function FrontendDeveloperImage() {
  return hireOgImage({
    kicker: "ANUJ DHANUKA",
    title: "Frontend Developer for Hire",
    subtitle: "Full-time roles · Freelance projects",
    path: "/frontend-developer",
    footerName: false,
  })
}
