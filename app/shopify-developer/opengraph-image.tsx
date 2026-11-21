import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"
import { shopifyDeveloperImageAlt } from "@/features/shopify-developer/data/shopify-developer"

export const alt = shopifyDeveloperImageAlt
export const size = hireOgSize
export const contentType = "image/png"

export default function ShopifyDeveloperImage() {
  return hireOgImage({
    kicker: "ANUJ DHANUKA",
    title: "Shopify Developer for Hire",
    subtitle: "Full-time roles · Freelance projects",
    path: "/shopify-developer",
    footerName: false,
  })
}
