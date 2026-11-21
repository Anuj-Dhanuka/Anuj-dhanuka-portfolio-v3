import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"
import { landingPageDevelopmentImageAlt } from "@/features/landing-page-development/data/landing-page-development"

export const alt = landingPageDevelopmentImageAlt
export const size = hireOgSize
export const contentType = "image/png"

export default function LandingPageDevelopmentImage() {
  return hireOgImage({
    kicker: "ANUJ DHANUKA",
    title: "Landing Page Development Services",
    subtitle: "React · WordPress · Elementor",
    path: "/landing-page-development",
    footerName: false,
  })
}
