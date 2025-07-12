"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, CheckCircle, Calendar } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { smoothScroll } from "@/utils/smooth-scroll"

export function Hero() {
  const [showBookingModal, setShowBookingModal] = useState(false)

  const achievements = [
    "React & Firebase Expert",
    "WordPress & Shopify Specialist",
    "1+ Year Experience",
    "Multiple Projects Delivered",
  ]

  return (
    <section id="home" className="pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
      {/* Dark background with improved contrast */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Subtle pattern overlay with improved visibility */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.5) 2px, transparent 0), 
                              radial-gradient(circle at 75px 75px, rgba(236, 72, 153, 0.5) 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Brand color gradient overlay with better contrast */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "linear-gradient(120deg, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
              "linear-gradient(120deg, rgba(236, 72, 153, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Enhanced glow effects for better visual separation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/15 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-600/15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="flex-1 space-y-6 text-left mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-block px-3 py-1 bg-purple-900/80 text-purple-200 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-green-400 mr-2"></span>
              Available for New Projects
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Transforming{" "}
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Ideas
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-2 sm:h-3 text-pink-500"
                  viewBox="0 0 100 15"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path
                    d="M0,7.5 C15,2.5 35,12.5 50,7.5 C65,2.5 85,12.5 100,7.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>{" "}
              Into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Digital Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-100 max-w-2xl leading-relaxed">
              I'm a dynamic tech leader specializing in <strong className="text-purple-300">React</strong>,{" "}
              <strong className="text-yellow-300">Firebase</strong>,{" "}
              <strong className="text-blue-300">WordPress</strong>, and{" "}
              <strong className="text-green-300">Shopify</strong> solutions that deliver exceptional digital experiences
              and drive business growth. Let's build something amazing together.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="#contact"
                  onClick={(e) => smoothScroll(e, "#contact")}
                  aria-label="Navigate to contact section"
                  className="w-full sm:w-auto"
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-lg group hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Hire Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>

                    {/* Button hover animation */}
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>

             <a
              href="/ANUJ_DHANUKA_RESUME.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-purple-300 text-white hover:bg-purple-700 hover:border-purple-300 px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-lg group hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium bg-purple-900/30"
                  aria-label="Download resume"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" /> Download
                  Resume
                </Button>
                </a>

                {/* <Button
                  variant="ghost"
                  className="w-full sm:w-auto text-pink-300 hover:bg-pink-900/50 px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-lg group hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-medium"
                  onClick={() => setShowBookingModal(true)}
                  aria-label="Schedule a call"
                >
                  <Calendar className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" /> Schedule a Call
                </Button> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-sm md:text-base text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-2">
                <p className="text-sm text-gray-300">Trusted by companies like</p>
                <div className="flex flex-wrap gap-4">
                  {/* Note: These are placeholder images. Replace with actual company logos */}
                  <div className="h-6 w-20 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-6 w-20 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-6 w-20 bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative py-12 sm:py-8 md:py-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[280px] sm:w-[320px] md:w-full max-w-md mx-auto">
              {/* Animated gradient background with improved visibility */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />

              {/* Main profile image with enhanced border */}
              <motion.div
                className="relative z-20 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] mx-auto rounded-full overflow-hidden border-4 border-purple-300/30 shadow-xl shadow-purple-900/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <Image
                  src="/anuj_profile_pic.png"
                  alt="Anuj Dhanuka"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
                />
              </motion.div>

              {/* Floating elements with improved visibility */}
              <motion.div
                className="absolute -top-2 sm:-top-6 -left-2 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-purple-900/80 rounded-lg z-10 shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-[#61DAFB]">
                  {/* React logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 841.9 595.3"
                    className="h-10 w-10 sm:h-12 sm:w-12"
                  >
                    <g fill="currentColor">
                      <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.6 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2-46.9-84-46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                      <circle cx="420.9" cy="296.5" r="45.7" />
                      <path d="M520.5 78.1z" />
                    </g>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 sm:-bottom-6 -right-2 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-pink-900/80 rounded-lg z-10 shadow-lg"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-[#FFCA28]">
                  {/* Firebase logo */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-12 w-12 sm:h-14 sm:w-14">
                    <path fill="#FF8F00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z" />
                    <path
                      fill="#FFA000"
                      d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
                    />
                    <path fill="#FF6F00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z" />
                    <path
                      fill="#FFC400"
                      d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* WordPress floating element with improved contrast */}
              <motion.div
                className="absolute top-[25%] sm:top-[20%] left-[15%] sm:left-[20%] w-14 h-14 sm:w-16 sm:h-16 bg-blue-900/80 rounded-lg z-10 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-[#21759B]">
                  {/* WordPress logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 sm:h-10 sm:w-10 text-blue-300"
                  >
                    <path
                      fill="currentColor"
                      d="M12.158,12.786L9.46,20.625c0.806,0.237,1.657,0.366,2.54,0.366c1.047,0,2.051-0.181,2.986-0.51 c-0.024-0.038-0.046-0.079-0.065-0.124L12.158,12.786z M3.009,12c0,3.559,2.068,6.634,5.067,8.092L3.788,8.341 C3.289,9.459,3.009,10.696,3.009,12z M18.069,11.546c0-1.112-0.399-1.881-0.741-2.48c-0.456-0.741-0.883-1.368-0.883-2.109 c0-0.826,0.627-1.596,1.51-1.596c0.04,0,0.078,0.005,0.116,0.007C16.472,3.904,14.34,3.009,12,3.009 c-3.141,0-5.904,1.612-7.512,4.052c0.211,0.007,0.41,0.011,0.579,0.011c0.94,0,2.396-0.114,2.396-0.114 C7.947,6.93,8.004,7.642,7.52,7.699c0,0-0.487,0.057-1.029,0.085l3.274,9.739l1.968-5.901l-1.401-3.838 C9.848,7.756,9.389,7.699,9.389,7.699C8.904,7.67,8.961,6.93,9.446,6.958c0,0,1.484,0.114,2.368,0.114 c0.94,0,2.397-0.114,2.397-0.114c0.485-0.028,0.542,0.684,0.057,0.741c0,0-0.488,0.057-1.029,0.085l3.249,9.665l0.897-2.996 C17.841,13.284,18.069,12.316,18.069,11.546z M19.889,7.686c0.039,0.286,0.06,0.593,0.06,0.924c0,0.912-0.171,1.938-0.684,3.22 l-2.746,7.94c2.673-1.558,4.47-4.454,4.47-7.771C20.991,10.436,20.591,8.967,19.889,7.686z M12,22C6.486,22,2,17.514,2,12 C2,6.486,6.486,2,12,2c5.514,0,10,4.486,10,10C22,17.514,17.514,22,12,22z"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Shopify floating element with improved contrast */}
              <motion.div
                className="absolute bottom-[25%] sm:bottom-[20%] left-[55%] sm:left-[60%] w-14 h-14 sm:w-16 sm:h-16 bg-green-900/80 rounded-lg z-10 shadow-lg"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-green-300">
                  {/* Shopify logo */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10">
                    <path
                      fill="currentColor"
                      d="M14.49 3.99c-.06-.28-.3-.6-.6-.6s-.84-.06-1.26-.06c-.48 0-1.02.06-1.44.12-.42-1.32-1.14-2.51-2.4-2.51-.06 0-.12 0-.18.06C8.13.4 7.95.06 7.59.06 6.33.12 5.07 1.8 4.23 4.92c-.6 2.34-.42 3.48-.36 3.48.36.18 7.35 1.08 7.35 1.08-.42 1.14-1.08 3.96-1.14 4.32-.06.3.12.36.3.36.18 0 2.58-1.02 2.82-1.08.24-.06.36-.18.48-.36.84-1.8 2.1-6.24 2.28-7.02.24-.9-.06-1.38-.48-1.68zm-1.92-.3c-.24.06-.54.12-.84.18V3.5c0-.54-.06-1.26-.18-1.86.42.06.78.36.9.78.12.48.12 1.08.12 1.26zm-.9-1.92c.12.48.18 1.14.18 1.74v.18c-.36.06-.78.12-1.2.24 0-.06 0-.12.06-.18.24-.66.6-1.32.96-1.98zm-.3-.6c-.36.6-.72 1.32-1.02 2.04-.42.12-.84.18-1.26.3.36-.9.96-1.68 2.28-2.34z"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
