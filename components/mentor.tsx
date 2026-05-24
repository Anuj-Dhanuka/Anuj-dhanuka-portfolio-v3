"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Heart, TrendingUp, User, Award, Quote, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Mentor() {
  return (
    <section
      id="mentor"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500"
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
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pink-500"
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-3">
            <Heart className="h-4 w-4 mr-2" />
            Mentorship & Guidance
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            My Mentor
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">
            The invaluable guidance that shaped my professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left column - Photo and Stats */}
          <motion.div
            className="md:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg transform rotate-3"></div>
              <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-white dark:border-gray-800">
                <div className="aspect-ratio-box relative" style={{ paddingBottom: "100%" }}>
                  <Image
                    src="/anjneyulu-jadda-sir.png"
                    alt="Anjaneyulu Sir - My Mentor"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white font-medium">Digital Marketing & UI/UX Expert</p>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-10 flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="font-medium text-sm">8+ Years Experience</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-2 flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-xs">Digital Marketing</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">$5M+ ad spend</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-2 flex-shrink-0">
                  <User className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-xs">UI/UX Design</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Brand expert</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 text-white">
              <h3 className="font-bold text-lg mb-2">Anjaneyulu Sir</h3>
              <p className="text-white/90 text-sm">
                Google-certified performance marketing expert and founder of PPCROY & Scale Minds, with over a decade of
                experience in digital strategy.
              </p>
              <div className="mt-3 flex justify-end">
                <a href="https://www.linkedin.com/in/anjaneyulu-jadda/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" /> Connect
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column - Testimonial and impact */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-none shadow-md h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6 relative">
                  <Quote className="h-12 w-12 text-purple-200 dark:text-purple-800 absolute -top-2 -left-2" />
                  <h3 className="text-2xl font-bold ml-6 relative z-10">The Impact of Great Mentorship</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-600 ml-6 mt-2"></div>
                </div>

                <div className="space-y-4 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 italic relative text-lg">
                    "I'm proud to be mentored by Anjaneyulu Jadda, a Google-certified performance marketing expert and
                    founder of PPCROY & Scale Minds. With over a decade of experience and $15M+ in managed ad spend,
                    he's helped me sharpen my skills in digital strategy, UI/UX, and high-converting growth systems. His
                    guidance continues to shape the way I think, build, and lead."
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    Working under his mentorship at PPCROY Tech Solutions has been an invaluable experience. His deep
                    understanding of design principles, strategic thinking, and humble nature make him an inspiring
                    leader and mentor.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Skills I've Developed Under His Guidance:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm">
                        <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm">Strategic Planning</span>
                      </div>
                      <div className="flex items-center bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm">
                        <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm">User-Centered Design</span>
                      </div>
                      <div className="flex items-center bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm">
                        <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm">Problem Solving</span>
                      </div>
                      <div className="flex items-center bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm">
                        <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm">Professional Growth</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-3">
                      <Heart className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      "His mentorship has been the cornerstone of my professional development."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
