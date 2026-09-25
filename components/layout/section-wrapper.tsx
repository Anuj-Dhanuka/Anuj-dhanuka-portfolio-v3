import type React from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
}

export function SectionWrapper({ children, id }: SectionWrapperProps) {
  return <div id={id}>{children}</div>
}
