"use client"

import { useEffect, useRef, useState, type ComponentType } from "react"

export function DeferredContactForm() {
  const [ContactForm, setContactForm] = useState<ComponentType | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        void import("@/features/contact/components/contact-form").then((module) => {
          setContactForm(() => module.ContactForm)
        })
      },
      { rootMargin: "400px 0px" },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="min-h-[36rem] sm:min-h-[39rem]">
      {ContactForm ? (
        <ContactForm />
      ) : (
        <div className="flex h-full min-h-[36rem] items-center justify-center rounded-lg border border-purple-100 bg-white/92 p-6 text-center shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_70px_rgba(124,58,237,0.12)] dark:border-purple-800/35 dark:bg-gray-950/65 sm:min-h-[39rem]">
          <p className="type-small copy-body">The contact form loads as you approach this section.</p>
        </div>
      )}
    </div>
  )
}
