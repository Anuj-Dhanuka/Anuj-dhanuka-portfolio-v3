"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  ExternalLink,
  Code,
  Monitor,
  ShoppingBag,
  Globe,
  MapPin,
  Award,
  CheckCircle,
  Clock,
  Briefcase,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const recognitionUrl =
    "https://www.linkedin.com/posts/anuj-dhanuka_rewardsandrecognition-chefkart-reactnative-share-7463089455172845569-ML3k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACVInBQB17-NdeSfv3bpUy3ZdJaN7NgcWgI"

  const experienceData = [
    {
      position: "Associate Software Engineer",
      company: "ChefKart",
      location: "Gurugram, Haryana",
      workMode: "Onsite",
      type: "Full-time",
      duration: "December 2025 - Present",
      description:
        "I contribute across ChefKart's customer mobile application, internal team dashboard and website, building and refining interfaces used by customers and internal teams.",
      responsibilities: [
        "Build and improve React Native interfaces across booking, visit, wallet, payment, refund, cancellation and party-related customer journeys.",
        "Improve communication and usability across important payment, refund and service-status states.",
        "Contribute to the redesign and development of internal dashboard modules.",
        "Implement analytics tracking for meaningful customer and product interactions.",
        "Resolve responsive UI issues and improve interface consistency across different screen sizes.",
        "Collaborate on production features from implementation through testing and release.",
      ],
      technologies: ["React Native", "React.js", "JavaScript", "Analytics", "Mobile UI", "Dashboard UI"],
      ctaLabel: "View Recognition",
      ctaUrl: recognitionUrl,
      isCurrent: true,
      icons: [
        <Code key="code" className="h-5 w-5 text-blue-500" />,
        <Monitor key="monitor" className="h-5 w-5 text-indigo-500" />,
      ],
      color: "purple",
      bgImage: "/modern-office-workspace.jpg",
      achievement: "Recognised in Technology & Engineering - May 2026",
    },
    {
      position: "Junior Web Developer",
      company: "PPCROY",
      location: "Remote",
      workMode: "Remote",
      type: "Full-time",
      duration: "October 2024 - December 2025",
      description:
        "Delivered 20+ client projects across business websites, landing pages, e-commerce experiences and responsive frontend interfaces.",
      responsibilities: [
        "Developed responsive websites and user-facing interfaces using React.js, JavaScript, HTML5 and CSS3.",
        "Built client solutions using React, WordPress, Shopify and Webflow based on business goals and project requirements.",
        "Converted design references and client requirements into polished, responsive web experiences.",
        "Worked across projects for different industries, audiences and business use cases.",
        "Maintained visual consistency, usability and responsiveness throughout project delivery.",
        "Managed multiple project requirements while maintaining delivery quality.",
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "WordPress", "Shopify", "Webflow"],
      isCurrent: false,
      icons: [
        <Code key="code" className="h-5 w-5 text-blue-500" />,
        <ShoppingBag key="shop" className="h-5 w-5 text-green-500" />,
        <Globe key="globe" className="h-5 w-5 text-orange-500" />,
      ],
      color: "blue",
      bgImage: "/collaborative-workspace.jpg",
      achievement: "20+ client projects delivered",
    },
    {
      position: "Associate Software Engineer Intern",
      company: "Third Eye Lab",
      location: "Hyderabad",
      workMode: "Onsite",
      type: "Internship",
      duration: "April 2024 - June 2024",
      description:
        "Developed the Levels App, a React Native mobile quiz application featuring category-based questions and dynamically loaded content.",
      responsibilities: [
        "Developed mobile application screens using React Native and JavaScript.",
        "Implemented category-based quiz flows and dynamic question loading.",
        "Built intuitive navigation and user-friendly mobile interactions.",
        "Completed the assigned project ahead of schedule.",
        "Delivered additional features beyond the original project requirements.",
      ],
      technologies: ["React Native", "JavaScript", "Mobile UI", "Dynamic Content"],
      isCurrent: false,
      icons: [
        <Monitor key="monitor" className="h-5 w-5 text-pink-500" />,
        <Code key="code" className="h-5 w-5 text-purple-500" />,
      ],
      color: "pink",
      bgImage: "/mobile-app-development.jpg",
      achievement: "Completed ahead of schedule with additional features",
    },
  ]

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 overflow-hidden"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 dark:from-purple-600/30 dark:to-pink-600/30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/40 to-purple-400/40 dark:from-blue-600/30 dark:to-purple-600/30 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 25,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400/30 to-purple-400/30 dark:from-pink-600/20 dark:to-purple-600/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 mb-3 shadow-lg shadow-purple-500/10 dark:shadow-purple-900/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Calendar className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
            EXPERIENCE
          </motion.div>
          <h2 className="mx-auto mb-3 max-w-4xl text-3xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 md:text-4xl">
            Experience across product development and client delivery.
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 mx-auto mb-4 rounded-full shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey includes React Native mobile development, high-volume client project delivery
            and ongoing ownership across customer-facing and internal product experiences.
          </p>
        </motion.div>

        {/* Main timeline line with enhanced gradient */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 rounded-full transform md:-translate-x-1/2 shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline connector and dot */}
                <div className="absolute left-4 md:left-1/2 top-0 flex flex-col items-center transform -translate-x-1/2 z-20">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-500 dark:border-purple-400 flex items-center justify-center shadow-md">
                    <Briefcase className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-purple-500 dark:text-purple-400" />
                  </div>
                  <motion.div
                    className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500/30 dark:bg-purple-400/30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                {/* Date flag */}
                <div
                  className={`hidden md:flex absolute top-0 ${
                    index % 2 === 0 ? "md:left-[calc(50%+20px)]" : "md:right-[calc(50%+20px)]"
                  } items-center`}
                >
                  <div
                    className={`px-4 py-2 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg shadow-sm text-${item.color}-700 dark:text-${item.color}-300 text-sm font-medium flex items-center hover:bg-${item.color}-200 dark:hover:bg-${item.color}-800/40 transition-colors hover:shadow-md cursor-pointer`}
                  >
                    <Clock className="h-3.5 w-3.5 mr-2" />
                    {item.duration}
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -5 }}
                  >
                    {/* Card header with position and company */}
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                      <div className="flex md:hidden items-center mb-3">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${
                            item.color === 'purple'
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                              : item.color === 'blue'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                          }`}
                        >
                          <Clock className="h-3 w-3 mr-1.5" />
                          {item.duration}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.position}</h3>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className={`font-medium ${
                          item.color === 'purple'
                            ? 'text-purple-600 dark:text-purple-400'
                            : item.color === 'blue'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-pink-600 dark:text-pink-400'
                        }`}>
                          {item.company}
                        </span>

                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {item.location}
                        </div>

                        <div className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                          {item.workMode}
                        </div>

                        <div
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            item.color === 'purple'
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                              : item.color === 'blue'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                          }`}
                        >
                          {item.type}
                        </div>

                        {item.isCurrent && (
                          <div className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                            Current
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Achievement banner */}
                    <div
                      className={`py-3 px-6 text-white text-sm font-medium flex items-center transition-all duration-300 cursor-pointer hover:shadow-md ${
                        item.color === 'purple'
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                          : item.color === 'blue'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                          : 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
                      }`}
                    >
                      <Award className="h-4 w-4 mr-2" />
                      <span>{item.achievement}</span>
                    </div>

                    {/* Card content */}
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>

                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key contributions:</h4>
                      <ul className="space-y-3 mb-6">
                        {item.responsibilities.map((responsibility, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start hover:translate-x-1 transition-transform cursor-pointer"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <div
                              className={`mt-1 h-4 w-4 rounded-full flex-shrink-0 flex items-center justify-center mr-3 ${
                                item.color === 'purple'
                                  ? 'bg-purple-100 dark:bg-purple-900/30'
                                  : item.color === 'blue'
                                  ? 'bg-blue-100 dark:bg-blue-900/30'
                                  : 'bg-pink-100 dark:bg-pink-900/30'
                              }`}
                            >
                              <CheckCircle
                                className={
                                  item.color === 'purple'
                                    ? 'h-2.5 w-2.5 text-purple-600 dark:text-purple-400'
                                    : item.color === 'blue'
                                    ? 'h-2.5 w-2.5 text-blue-600 dark:text-blue-400'
                                    : 'h-2.5 w-2.5 text-pink-600 dark:text-pink-400'
                                }
                              />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <h4 className="font-medium text-sm mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              className={`transition-colors hover:scale-105 transform cursor-pointer ${
                                item.color === 'purple'
                                  ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
                                  : item.color === 'blue'
                                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                                  : 'bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/30'
                              }`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {item.ctaLabel && item.ctaUrl && (
                          <Link
                            href={item.ctaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/25"
                          >
                            {item.ctaLabel}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
