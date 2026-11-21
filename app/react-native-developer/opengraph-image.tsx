import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"
import { reactNativeDeveloperImageAlt } from "@/features/react-native-developer/data/react-native-developer"

export const alt = reactNativeDeveloperImageAlt
export const size = hireOgSize
export const contentType = "image/png"

export default function ReactNativeDeveloperImage() {
  return hireOgImage({
    kicker: "ANUJ DHANUKA",
    title: "React Native Developer for Hire",
    subtitle: "Full-time roles · Freelance projects",
    path: "/react-native-developer",
    footerName: false,
  })
}
