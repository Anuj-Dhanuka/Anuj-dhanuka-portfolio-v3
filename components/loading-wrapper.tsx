"use client"

import type React from "react"

import { ViewportFix } from "@/components/viewport-fix"

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ViewportFix />
      {children}
    </>
  )
}
