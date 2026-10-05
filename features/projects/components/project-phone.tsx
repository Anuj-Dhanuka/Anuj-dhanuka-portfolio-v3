import Image from "next/image"
import type { ProjectCaseStudy } from "@/features/projects/data/projects"

type ProjectPhoneProps = {
  screenshot: ProjectCaseStudy["screenshots"][number]
  decorative?: boolean
  hero?: boolean
  preload?: boolean
}

export function ProjectPhone({
  screenshot,
  decorative = false,
  hero = false,
  preload = false,
}: ProjectPhoneProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border-[6px] border-gray-950 bg-gray-950 shadow-xl shadow-brand-950/20 dark:border-gray-800 dark:shadow-black/40">
      <Image
        src={screenshot.src}
        alt={decorative ? "" : screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        sizes={
          hero
            ? "(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
            : "(min-width: 1024px) 260px, (min-width: 768px) 25vw, 260px"
        }
        preload={preload}
        loading={hero && !preload ? "eager" : undefined}
        className="h-auto w-full"
      />
    </div>
  )
}
