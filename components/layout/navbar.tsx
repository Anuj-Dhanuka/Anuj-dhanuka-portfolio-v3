"use client"

import { useState, useEffect, useRef, type MouseEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { smoothScroll } from "@/utils/smooth-scroll"
import { cn } from "@/lib/utils"
import { site } from "@/config/site"

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      if (!isHome) return

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      // Create an array to store all sections and their positions
      const sectionPositions = Array.from(sections).map((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        return {
          id: sectionId,
          top: section.getBoundingClientRect().top + window.scrollY,
          bottom: sectionTop + sectionHeight,
        }
      })

      // Sort sections by their top position to ensure correct order
      sectionPositions.sort((a, b) => a.top - b.top)

      // Find the section that is currently in view with improved logic
      let currentSection = "home" // Default to home

      for (let i = 0; i < sectionPositions.length; i++) {
        const { id, top } = sectionPositions[i]

        // Use a smaller offset and check if we've scrolled past the section start
        if (scrollPosition >= top - 80) {
          currentSection = id
        } else {
          break
        }
      }

      setActiveSection((current) => (current === currentSection ? current : currentSection))
    }

    window.addEventListener("scroll", handleScroll)
    // Initial call to set the active section on page load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  useEffect(() => {
    if (!isOpen) return

    const panel = menuPanelRef.current
    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const focusables = panel ? Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)) : []
    const frame = requestAnimationFrame(() => focusables[0]?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        menuButtonRef.current?.focus()
        return
      }

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

  // Add scroll animation logic
  const { scrollY, scrollYProgress } = useScroll()
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.98])
  const navbarY = useTransform(scrollY, [0, 100], [0, -5])
  const navbarShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 20px rgba(0,0,0,0.1)"],
  )

  // Updated nav links to match the new section order
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const hasDarkHero =
    isHome ||
    pathname === "/about" ||
    pathname === "/experience" ||
    pathname === "/projects" ||
    pathname === "/contact"
  const solidHeader = !hasDarkHero || scrolled
  const isActive = (href: string) => {
    const [route, section] = href.split("#")
    if (section) return isHome && activeSection === section
    if (route === "/") return isHome && activeSection === "home"
    return pathname === route || pathname.startsWith(`${route}/`)
  }

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    setIsOpen(false)
    if (isHome && href.includes("#")) {
      smoothScroll(event, href)
      setActiveSection(href.split("#")[1])
    }
  }

  return (
    <>
      {/* Accessibility announcer for screen readers */}
      <div id="scroll-announcer" className="sr-only" aria-live="polite"></div>

      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
          solidHeader ? "py-2 md:py-3" : "py-3 md:py-5",
          "flex items-center justify-center",
          solidHeader && "bg-white/95 dark:bg-gray-950/95",
        )}
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          opacity: 1,
          scale: navbarScale,
          y: navbarY,
          boxShadow: solidHeader ? "0px 4px 20px rgba(0,0,0,0.1)" : navbarShadow,
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
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
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
                  <motion.span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full w-0 group-hover:w-full transition-all duration-300 ${
                      isActive(link.href) ? "opacity-0" : "opacity-100"
                    }`}
                    layoutId="navUnderline"
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="pl-1 lg:pl-2"
            >
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
            </motion.div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            ref={menuButtonRef}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500",
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
      </motion.header>

      {/* Mobile Navigation Menu - Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuPanelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu - Slide Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[300px] bg-white dark:bg-gray-900 z-50 lg:hidden flex flex-col shadow-xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <Link
                href="/"
                className="text-xl font-bold gradient-text"
                onClick={(e) => handleNavigation(e, "/#home")}
                aria-label="Go to home section"
              >
                Anuj Dhanuka
              </Link>
              <button
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className={cn(
                      "py-3 px-4 rounded-md text-base font-medium transition-colors relative overflow-hidden",
                      isActive(link.href)
                        ? "text-white bg-purple-800 dark:bg-purple-600 shadow-md"
                        : "text-gray-900 dark:text-gray-300 hover:text-white hover:bg-purple-700 dark:hover:text-white dark:hover:bg-purple-700",
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    <span className="relative z-10">{link.name}</span>

                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-purple-600 -z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-purple-700 bg-white text-purple-900 hover:bg-purple-700 hover:text-white dark:border-purple-400 dark:bg-gray-800 dark:text-white dark:hover:bg-purple-600 px-4 py-2 h-12 rounded-lg group shadow-md text-base transition-all duration-300"
              >
                <a
                  href={site.phoneHref}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Call ${site.phoneDisplay}`}
                  className="flex items-center justify-center font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  {site.phoneDisplay}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 z-[60] origin-left"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  )
}
