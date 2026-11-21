import { figmaToWebsiteImageAlt } from "@/features/figma-to-website/data/figma-to-website"
import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"

export const alt = figmaToWebsiteImageAlt
export const size = hireOgSize
export const contentType = "image/png"

export default function FigmaToWebsiteImage() {
  return hireOgImage({
    kicker: "ANUJ DHANUKA",
    title: "Figma to Website Development",
    subtitle: "React · WordPress · Thoughtful UI implementation",
    path: "/figma-to-website",
    footerName: false,
  })
}
