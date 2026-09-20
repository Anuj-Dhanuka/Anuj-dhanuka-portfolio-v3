"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "Satya Institute Of Technology And Management",
      location: "Andhra Pradesh, India",
      duration: "2019 - 2023",
      graduationDate: "May 2023",
      description:
        "Completed B.Tech in Mechanical Engineering with a focus on technical problem-solving and analytical thinking. Applied these skills to transition into software development.",
      achievements: ["Technical Projects", "Problem Solving", "Analytical Thinking"],
      image: "/abstract-engineering-emblem.png",
      color: "purple",
    },
    {
      degree: "Intermediate",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Vasavi Junior College",
      location: "Andhra Pradesh, India",
      duration: "2013 - 2015",
      graduationDate: "April 2015",
      description:
        "Completed intermediate education with a focus on Mathematics, Physics, and Chemistry, building a strong foundation in analytical and logical thinking.",
      achievements: ["Mathematics", "Physics", "Chemistry"],
      image: "/aspiring-scholars-crest.png",
      color: "blue",
    },
    {
      degree: "SSC",
      field: "Secondary School Certificate",
      institution: "Sri Ravi Teja English Medium High School",
      location: "Andhra Pradesh, India",
      duration: "2011 - 2013",
      graduationDate: "May 2013",
      description:
        "Completed secondary education with a well-rounded curriculum that developed foundational academic skills and knowledge.",
      achievements: ["Academic Excellence", "Foundational Learning"],
      image: "/soaring-eagle-crest.png",
      color: "green",
    },
  ]

  return (
    <section
      id="education"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-300 mb-2 sm:mb-3">
            <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            <span className="whitespace-nowrap">Academic Qualifications</span>
          </div>
          <h2 className="type-section mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-accent2-700 dark:from-brand-500 dark:to-accent2-500">
            Education & Credentials
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-brand-600 to-accent2-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="type-body copy-body">
            My academic foundation that supports my professional expertise and technical capabilities
          </p>
        </motion.div>

        {/* Modern card grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: [-8, -4], transition: { duration: 0.3 } }}
            >
              {/* Decorative top element */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-brand-500 to-accent2-500 rounded-lg transform rotate-12 opacity-70 hidden sm:block"></div>

              {/* Main card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full relative z-10">
                {/* Card header with image */}
                <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-r from-brand-600/90 to-accent2-600/90 relative flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  {/* Card header with consistent padding */}
                  <div className="relative z-10 text-center px-4 sm:px-5 lg:px-6 w-full">
                    <h3 className="type-card text-white mb-0.5 sm:mb-1 line-clamp-1">{item.degree}</h3>
                    <p className="type-caption text-white/90 line-clamp-1">{item.field}</p>
                  </div>
                </div>

                {/* Institution badge with consistent horizontal spacing */}
                <div className="bg-white dark:bg-gray-800 shadow-md mx-4 sm:mx-5 lg:mx-6 -mt-4 sm:-mt-5 rounded-lg p-2 sm:p-3 relative z-20 border border-gray-100 dark:border-gray-700">
                  <p
                    className="type-caption text-center font-semibold text-gray-800 dark:text-gray-200 line-clamp-2"
                    title={item.institution} // Add tooltip for accessibility
                  >
                    {item.institution}
                  </p>
                </div>

                {/* Card content with consistent padding */}
                <div className="p-4 sm:p-5 lg:p-6 pt-3 sm:pt-4">
                  <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mb-3 sm:mb-4 gap-2">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="truncate max-w-[120px]" title={item.location}>
                        {item.location}
                      </span>
                    </div>
                    <div className="flex items-center text-brand-600 dark:text-brand-400 text-xs font-medium ml-auto sm:ml-0">
                      <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span>{item.graduationDate.split(" ")[1]}</span>
                    </div>
                  </div>

                  <p className="type-caption copy-body mb-3 sm:mb-4 line-clamp-3">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
