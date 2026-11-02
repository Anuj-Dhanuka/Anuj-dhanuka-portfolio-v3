"use client"

import { useState, useEffect, useRef, type MouseEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { smoothScroll } from "@/utils/smooth-scroll"
import { cn } from "@/lib/utils"
import { site } from "@/config/site"
import {
  DesktopProjectsMenu,
  MobileProjectsMenu,
  type ProjectNavItem,
} from "@/components/layout/projects-nav"

export function Navbar({ projects }: { projects: ProjectNavItem[] }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = ""
      }
    }
  }, [isOpen])

  useEffect(() => {
    let frame = 0

    const handleScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setScrolled(window.scrollY > 10)
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial call to set the active section on page load
    handleScroll()

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const panel = menuPanelRef.current
    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    // Re-queried on each Tab because the projects accordion adds and removes links.
    const getFocusables = () =>
      panel ? Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)) : []
    const frame = requestAnimationFrame(() => getFocusables()[0]?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      const focusables = getFocusables()
      if (event.key !== "Tab" || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    mediaQuery.addEventListener("change", closeAtDesktop)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("keydown", handleKeyDown)
      mediaQuery.removeEventListener("change", closeAtDesktop)
    }
  }, [isOpen])

  // Updated nav links to match the new section order
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ]

  const hasDarkHero =
    isHome ||
    pathname === "/about" ||
    pathname === "/experience" ||
    pathname === "/skills" ||
    pathname === "/projects" ||
    pathname === "/contact" ||
    pathname === "/certifications"
  const solidHeader = !hasDarkHero || scrolled
  const isActive = (href: string) => {
    const [route] = href.split("#")
    if (route === "/") return isHome
    return pathname === route || pathname.startsWith(`${route}/`)
  }

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    setIsOpen(false)
    if (isHome && href.includes("#")) {
      smoothScroll(event, href)
    }
  }

  return (
    <>
      {/* Accessibility announcer for screen readers */}
      <div id="scroll-announcer" className="sr-only" aria-live="polite"></div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
          solidHeader ? "py-2 md:py-3" : "py-3 md:py-5",
          "flex items-center justify-center",
          solidHeader && "bg-white/95 dark:bg-gray-950/95",
        )}
        style={{
          boxShadow: solidHeader ? "0px 4px 20px rgba(0,0,0,0.1)" : undefined,
          backdropFilter: solidHeader ? "blur(12px)" : undefined,
        }}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-2xl font-bold gradient-text py-1 truncate max-w-[140px] sm:max-w-[180px] md:max-w-none"
            onClick={(e) => handleNavigation(e, "/#home")}
            aria-label="Go to home section"
          >
            Anuj Dhanuka
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.href === "/projects" ? (
                // Projects keeps its link to /projects and adds a hover/disclosure dropdown of case studies.
                <div
                  key={link.name}
                  className={cn(
                    // The pill stays highlighted while the pointer is inside the dropdown, which is a descendant.
                    "flex items-center rounded-md pr-1 transition-colors",
                    isActive(link.href)
                      ? "text-white bg-purple-800 dark:bg-purple-600 shadow-md"
                      : solidHeader
                        ? "copy-heading hover:text-white hover:bg-purple-700 dark:hover:text-white dark:hover:bg-purple-700"
                        : "text-white hover:bg-purple-700/90 dark:hover:bg-purple-700",
                  )}
                >
                  <DesktopProjectsMenu
                    items={projects}
                    pathname={pathname}
                    isActive={isActive(link.href)}
                    onNavigate={handleNavigation}
                    linkClassName="pl-2 xl:pl-3 py-2 rounded-md text-sm font-medium"
                  />
                </div>
              ) : (
                <div key={link.name} className="transition-transform hover:-translate-y-0.5">
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className={cn(
                      "px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                      isActive(link.href)
                        ? "text-white bg-purple-800 dark:bg-purple-600 shadow-md"
                        : solidHeader
                          ? "copy-heading hover:text-white hover:bg-purple-700 dark:hover:text-white dark:hover:bg-purple-700"
                          : "text-white hover:text-white hover:bg-purple-700/90 dark:text-white dark:hover:bg-purple-700",
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.name}

                    {/* Animated underline effect on hover */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full w-0 group-hover:w-full transition-all duration-300 ${
                        isActive(link.href) ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </Link>
                </div>
              ),
            )}
            <div className="pl-1 transition-transform hover:scale-105 lg:pl-2">
              <Button
                asChild
                variant="outline"
                className={cn(
                  "border-2",
                  solidHeader
                    ? "border-purple-700 bg-white text-purple-900 hover:bg-purple-700 hover:text-white dark:border-purple-400 dark:bg-gray-800 dark:text-white dark:hover:bg-purple-600"
                    : "border-white bg-purple-800/90 text-white hover:bg-white hover:text-purple-800 dark:border-white dark:bg-purple-700 dark:text-white dark:hover:bg-white dark:hover:text-purple-800",
                  "px-3 lg:px-4 py-1 h-9 rounded-lg group shadow-md transition-all duration-300",
                )}
              >
                <a
                  href={site.phoneHref}
                  aria-label={`Call ${site.phoneDisplay}`}
                  className="flex items-center font-semibold text-current"
                >
                  <Phone className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">{site.phoneDisplay}</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            ref={menuButtonRef}
            className={cn(
              "lg:hidden min-h-11 min-w-11 p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500",
              solidHeader
                ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10 dark:text-white dark:hover:bg-gray-800/30",
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile navigation: a focused sheet above a blurred overlay that also covers the header. */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[55] bg-gray-950/50 backdrop-blur-[2px] lg:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div
          ref={menuPanelRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className="animate-slide-in-right fixed bottom-0 right-0 top-0 z-[56] flex w-[88%] max-w-sm flex-col rounded-l-3xl bg-white shadow-2xl motion-reduce:animate-none dark:bg-gray-950 lg:hidden"
        >
          <div className="flex items-center justify-between gap-3 px-5 pb-4 pt-5">
            <Link
              href="/"
              className="min-w-0"
              onClick={(e) => handleNavigation(e, "/#home")}
              aria-label="Go to home section"
            >
              <span className="block text-xl font-bold gradient-text">Anuj Dhanuka</span>
            </Link>
            <button
              className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-5 h-px bg-gray-100 dark:bg-gray-800" />

          <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Pages">
            <ul className="divide-y divide-gray-100 dark:divide-gray-800">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                const linkClassName = cn(
                  "flex min-h-12 flex-1 items-center text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
                  active
                    ? "text-brand-700 dark:text-brand-300"
                    : "text-gray-800 hover:text-brand-700 dark:text-gray-200 dark:hover:text-brand-300",
                )

                return (
                  <li key={link.name}>
                    {link.href === "/projects" ? (
                      <MobileProjectsMenu
                        items={projects}
                        pathname={pathname}
                        onNavigate={handleNavigation}
                        linkClassName={linkClassName}
                      />
                    ) : (
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavigation(e, link.href)}
                        className={linkClassName}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="border-t border-gray-100 px-5 pb-6 pt-4 dark:border-gray-800">
            <a
              href={site.phoneHref}
              onClick={() => setIsOpen(false)}
              aria-label={`Call ${site.phoneDisplay}`}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-purple-700 text-base font-semibold text-purple-900 transition-colors hover:bg-purple-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:border-purple-400 dark:text-white dark:hover:bg-purple-600"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 z-[60] origin-left"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />
    </>
  )
}
