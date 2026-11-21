import { hireImageAlt } from "@/features/hire/data/hire"
import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"

export const alt = hireImageAlt
export const size = hireOgSize
export const contentType = "image/png"

export default function HireImage() {
  return hireOgImage({
    kicker: "WEB & MOBILE DEVELOPMENT",
    title: "Hire Anuj Dhanuka",
    subtitle: "React · React Native · WordPress · Shopify",
    path: "/hire",
    footerName: false,
  })
}
