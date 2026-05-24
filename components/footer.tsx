"use client"

import Link from "next/link"
import { smoothScroll } from "@/utils/smooth-scroll"
import { BsInstagram } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"
import { LuLinkedin } from "react-icons/lu"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pointer-events-auto">
          <div className="sm:col-span-2">
            <Link
              href="#home"
              onClick={(e) => smoothScroll(e, "#home")}
              className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 pointer-events-auto"
              aria-label="Go to home section"
            >
              Portfolio
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
              Full-stack developer specializing in creating exceptional digital experiences through websites, mobile
              apps, Shopify stores, and WordPress solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://github.com/Anuj-Dhanuka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors hover:scale-110 transform"
                aria-label="GitHub profile"
              >
                <FiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/anuj-dhanuka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors hover:scale-110 transform"
                aria-label="LinkedIn profile"
              >
                <LuLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/anuj_dhanuka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors hover:scale-110 transform"
                aria-label="Instagram profile"
              >
                <BsInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors hover:translate-x-1 transform inline-block"
                    aria-label={`Go to ${link.name} section`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Website Development", href: "#services" },
                { name: "App Development", href: "#services" },
                { name: "Shopify Development", href: "#services" },
                { name: "WordPress Solutions", href: "#services" },
                { name: "AI-Powered Development", href: "#ai-innovation" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    onClick={(e) => smoothScroll(e, service.href)}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors hover:translate-x-1 transform inline-block"
                    aria-label={`Learn about ${service.name}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Your Portfolio. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                  aria-label="View privacy policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                  aria-label="View terms of service"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
