import Image from "next/image"

export function CertificationsArtwork() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/10">
      <Image
        src="/certifications/learning-journey-v1.webp"
        width={960}
        height={640}
        sizes="(min-width: 1280px) 512px, (min-width: 1024px) 40vw, (min-width: 640px) 512px, calc(100vw - 32px)"
        alt=""
        className="h-auto w-full"
        loading="eager"
      />
    </div>
  )
}
