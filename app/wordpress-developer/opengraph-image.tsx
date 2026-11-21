import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"
import { wordpressDeveloperImageAlt } from "@/features/wordpress-developer/data/wordpress-developer"

export const alt = wordpressDeveloperImageAlt
export const size = hireOgSize
export const contentType = "image/png"

export default function WordPressDeveloperImage() {
  return hireOgImage({
    kicker: "ANUJ DHANUKA",
    title: "WordPress Developer for Hire",
    subtitle: "Full-time roles · Freelance projects",
    path: "/wordpress-developer",
    footerName: false,
  })
}
