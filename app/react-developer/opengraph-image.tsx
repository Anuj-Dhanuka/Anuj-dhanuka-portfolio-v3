import { hireOgImage, hireOgSize } from "@/features/hire-pages/og-image"

export const alt = "Anuj Dhanuka, React developer for hire in India"
export const size = hireOgSize
export const contentType = "image/png"

export default function ReactDeveloperImage() {
  return hireOgImage({
    kicker: "REACT DEVELOPER · ANUJ DHANUKA",
    title: "React developer for hire.",
    subtitle: "Full-time roles and freelance projects · React · Next.js",
    path: "/react-developer",
  })
}
