"use client"

import { motion } from "framer-motion"
import { CheckCircle, Code, Users, Zap, Award, Briefcase, Globe, ShoppingBag, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  const skills = [
    { name: "Leadership", icon: <Users className="h-5 w-5 text-purple-600" /> },
    { name: "React", icon: <Code className="h-5 w-5 text-purple-600" /> },
    { name: "Next.js", icon: <Zap className="h-5 w-5 text-purple-600" /> },
    { name: "Tailwind CSS", icon: <CheckCircle className="h-5 w-5 text-purple-600" /> },
    { name: "TypeScript", icon: <Code className="h-5 w-5 text-purple-600" /> },
    { name: "Node.js", icon: <Zap className="h-5 w-5 text-purple-600" /> },
    { name: "Shopify", icon: <ShoppingBag className="h-5 w-5 text-purple-600" /> },
    { name: "WordPress", icon: <Globe className="h-5 w-5 text-purple-600" /> },
  ]

  const leadershipQualities = [
    {
      title: "Strategic Vision",
      description: "Ability to see the big picture and align technical solutions with business objectives",
      icon: <Award className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Team Management",
      description: "Experience leading development teams to deliver high-quality products on time",
      icon: <Users className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Technical Expertise",
      description: "Deep knowledge of modern web technologies and development best practices",
      icon: <Code className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Business Acumen",
      description: "Understanding of market trends and how technology drives business growth",
      icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    },
  ]

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden relative z-10"
      tabIndex={-1} // Add this for better focus management
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/10 dark:to-pink-900/10 rounded-3xl blur-3xl z-0 pointer-events-none"></div>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            A passionate developer building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left column - Image with floating skills */}
          <motion.div
            className="md:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg transform rotate-3"></div>
              <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-white dark:border-gray-800">
                <div className="relative aspect-video md:aspect-square w-full">
                  <Image src="/data-programming-in-dark.jpg" alt="About Me" fill className="object-cover" />
                </div>
              </div>

              {/* Floating skill badges */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg shadow-lg z-10 flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <span className="font-medium text-xs sm:text-sm">1+ Year Experience</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Bio and expertise */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With over 1 year of experience in the tech industry, I've delivered exceptional digital products that
                  drive business growth. My expertise spans website development, app creation, Shopify stores, and
                  WordPress solutions.
                </p>
                <p>
                  I've collaborated with startups across India, helping them scale their technical operations and
                  establish strong development practices. My approach focuses on creating user-centered designs that
                  achieve business objectives.
                </p>
                {/* Core skills pills */}
                <div className="mt-6 mb-6 flex flex-wrap gap-2">
                  <p className="w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Core Technologies:</p>
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WordPress"].map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full text-sm font-medium shadow-sm flex items-center hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Code className="h-4 w-4 text-purple-600 mr-1.5" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-6">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      // Get the navbar height for offset calculation
                      const navbar = document.querySelector("header") as HTMLElement
                      const navbarHeight = navbar ? navbar.offsetHeight : 80

                      // Add offset for better visibility
                      const scrollOffset = servicesSection.offsetTop - navbarHeight - 40

                      window.scrollTo({
                        top: scrollOffset,
                        behavior: "smooth",
                      })

                      // Update URL without reloading the page
                      window.history.pushState({}, "", "#services")
                    }
                  }}
                  className="inline-block"
                >
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group transition-all duration-300"
                    aria-label="Navigate to services section"
                  >
                    Explore My Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
