"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { OpenAIIcon } from "@/components/icons/openai-icon"
import {
  SiReact,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiClaude,
  SiV0,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiWordpress,
  SiShopify,
} from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import { smoothScroll } from "@/utils/smooth-scroll"

// Lovable has no official icon in any library yet
const LovableIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <Heart className={className} style={style} fill="currentColor" strokeWidth={0} />
)

type IconComponent = React.ComponentType<{ className?: string; style?: React.CSSProperties }>

// ─────────────────────────────────────────────────────────────────────────────
// PRIMARY ICONS — 52 px — strict octagon around the orbit ring
// 10:30 → 12 → 1:30 → 3 → 4:30 → 6 → 7:30 → 9
// AI icons carry isAI=true → pulsing ambient ring
// ─────────────────────────────────────────────────────────────────────────────
const techIcons: {
  name: string
  Icon: IconComponent
  color: string
  className: string
  duration: number
  delay: number
  isAI?: boolean
}[] = [
  {
    name: "React",
    Icon: SiReact as IconComponent,
    color: "#61DAFB",
    className: "left-[4px] top-[58px] sm:left-[6px] sm:top-[70px] md:left-[4px] md:top-[82px]",
    duration: 5.2,
    delay: 0,
  },
  {
    name: "Claude",
    Icon: SiClaude as IconComponent,
    color: "#D97706",
    className: "left-[132px] top-[4px] sm:left-[168px] sm:top-[2px] md:left-[201px] md:top-[0px]",
    duration: 6.6,
    delay: 0.3,
    isAI: true,
  },
  {
    name: "v0",
    Icon: SiV0 as IconComponent,
    color: "#e2e2e2",
    className: "right-[4px] top-[58px] sm:right-[6px] sm:top-[70px] md:right-[4px] md:top-[82px]",
    duration: 5.8,
    delay: 0.6,
    isAI: true,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript as IconComponent,
    color: "#3178C6",
    className: "right-[-2px] top-[184px] sm:right-[-4px] sm:top-[202px] md:right-[-6px] md:top-[236px]",
    duration: 6.4,
    delay: 0.9,
  },
  {
    name: "OpenAI",
    Icon: OpenAIIcon as IconComponent,
    color: "#19c37d",
    className: "right-[4px] bottom-[58px] sm:right-[6px] sm:bottom-[70px] md:right-[4px] md:bottom-[82px]",
    duration: 7.1,
    delay: 1.2,
    isAI: true,
  },
  {
    name: "Lovable",
    Icon: LovableIcon,
    color: "#F97316",
    className: "left-[132px] bottom-[4px] sm:left-[168px] sm:bottom-[2px] md:left-[201px] md:bottom-[0px]",
    duration: 6.0,
    delay: 1.5,
    isAI: true,
  },
  {
    name: "Firebase",
    Icon: SiFirebase as IconComponent,
    color: "#FFCA28",
    className: "left-[4px] bottom-[58px] sm:left-[6px] sm:bottom-[70px] md:left-[4px] md:bottom-[82px]",
    duration: 5.9,
    delay: 1.8,
  },
  {
    name: "Tailwind",
    Icon: SiTailwindcss as IconComponent,
    color: "#06B6D4",
    className: "left-[-2px] top-[172px] sm:left-[-4px] sm:top-[190px] md:left-[-6px] md:top-[221px]",
    duration: 6.8,
    delay: 0.15,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// SECONDARY ICONS — 38 px — fill the 6 diagonal gaps between primary vertices
// Overlap-free at mobile (320×400), sm (390×440), md (460×500)
// ─────────────────────────────────────────────────────────────────────────────
const secondaryIcons: {
  name: string
  Icon: IconComponent
  color: string
  className: string
  duration: number
  delay: number
}[] = [
  {
    name: "HTML5",
    Icon: SiHtml5 as IconComponent,
    color: "#E34F26",
    className: "left-[62px] top-[18px] sm:left-[76px] sm:top-[18px] md:left-[92px] md:top-[24px]",
    duration: 6.1,
    delay: 0.1,
  },
  {
    name: "CSS",
    Icon: SiCss as IconComponent,
    color: "#1572B6",
    className: "right-[62px] top-[18px] sm:right-[76px] sm:top-[18px] md:right-[92px] md:top-[24px]",
    duration: 6.7,
    delay: 0.45,
  },
  {
    name: "Git",
    Icon: SiGit as IconComponent,
    color: "#F05032",
    className: "left-[24px] top-[128px] sm:left-[28px] sm:top-[148px] md:left-[34px] md:top-[176px]",
    duration: 5.5,
    delay: 0.75,
  },
  {
    name: "JavaScript",
    Icon: SiJavascript as IconComponent,
    color: "#F7DF1E",
    className: "right-[-18px] top-[116px] sm:right-[-22px] sm:top-[134px] md:right-[-28px] md:top-[152px]",
    duration: 6.3,
    delay: 1.05,
  },
  {
    name: "WordPress",
    Icon: SiWordpress as IconComponent,
    color: "#21759B",
    className: "left-[62px] bottom-[18px] sm:left-[76px] sm:bottom-[18px] md:left-[92px] md:bottom-[24px]",
    duration: 7.0,
    delay: 1.35,
  },
  {
    name: "Shopify",
    Icon: SiShopify as IconComponent,
    color: "#96BF48",
    className: "right-[62px] bottom-[18px] sm:right-[76px] sm:bottom-[18px] md:right-[92px] md:bottom-[24px]",
    duration: 6.5,
    delay: 1.65,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// COMPANY CARDS
// PPCROY  → dark glass  (white + yellow logo needs dark bg)
// Others  → white glass (light logos need light bg)
// ─────────────────────────────────────────────────────────────────────────────
const companyCards: {
  name: string
  logo: string
  imageClassName: string
  className: string
  duration: number
  delay: number
  darkBg: boolean
}[] = [
  {
    name: "ChefKart",
    logo: "/logos/chefkart-logo.webp",
    imageClassName: "h-6 max-w-[112px]",
    className:
      "right-[18px] top-[104px] sm:right-[22px] sm:top-[120px] md:right-[28px] md:top-[132px]",
    duration: 6.2,
    delay: 0.9,
    darkBg: false,
  },
  {
    name: "PPCROY TECH SOLUTIONS",
    logo: "/logos/ppcroy-logo.svg",
    imageClassName: "h-5 max-w-[92px]",
    className:
      "right-[18px] bottom-[115px] sm:right-[22px] sm:bottom-[128px] md:right-[28px] md:bottom-[140px]",
    duration: 7,
    delay: 0.5,
    darkBg: true,
  },
  {
    name: "3rd Eye Lab",
    logo: "/logos/3rd-eye-lab-logo.png",
    imageClassName: "h-6 max-w-[130px]",
    className:
      "left-[52px] bottom-[90px] sm:left-[68px] sm:bottom-[100px] md:left-[84px] md:bottom-[110px]",
    duration: 7.4,
    delay: 1.3,
    darkBg: false,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function FloatingTechIcon({
  name,
  Icon,
  color,
  className,
  duration,
  delay,
  isAI = false,
}: {
  name: string
  Icon: IconComponent
  color: string
  className: string
  duration: number
  delay: number
  isAI?: boolean
}) {
  return (
    <motion.div
      role="img"
      aria-label={`${name} icon`}
      className={`absolute z-30 ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, y: [0, -9, 0], scale: [1, 1.06, 1] }}
      transition={{
        opacity: { duration: 0.25, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        scale: {
          duration: duration * 1.15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.25,
        },
      }}
    >
      {isAI && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-[-7px] rounded-full"
          style={{ background: `radial-gradient(circle, ${color}50 0%, transparent 68%)` }}
          animate={{ opacity: [0, 0.85, 0], scale: [0.88, 1.5, 1.5] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay }}
        />
      )}
      <div
        aria-hidden="true"
        className="relative h-12 w-12 sm:h-[54px] sm:w-[54px] md:h-[58px] md:w-[58px] rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at 38% 32%, ${color}30 0%, rgba(6,6,18,0.93) 68%)`,
          boxShadow: [
            "0 0 0 1px rgba(255,255,255,0.10)",
            "inset 0 1px 0 rgba(255,255,255,0.16)",
            "0 8px 32px rgba(0,0,0,0.65)",
            `0 0 28px ${color}28`,
          ].join(", "),
        }}
      >
        <Icon className="h-5 w-5 sm:h-[23px] sm:w-[23px] md:h-[25px] md:w-[25px]" style={{ color }} />
      </div>
    </motion.div>
  )
}

function FloatingSecondaryIcon({
  name,
  Icon,
  color,
  className,
  duration,
  delay,
}: {
  name: string
  Icon: IconComponent
  color: string
  className: string
  duration: number
  delay: number
}) {
  return (
    <motion.div
      role="img"
      aria-label={`${name} icon`}
      className={`absolute z-30 ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, y: [0, -6, 0], scale: [1, 1.04, 1] }}
      transition={{
        opacity: { duration: 0.25, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        scale: {
          duration: duration * 1.1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.2,
        },
      }}
    >
      <div
        aria-hidden="true"
        className="h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] md:h-[48px] md:w-[48px] rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at 38% 32%, ${color}25 0%, rgba(6,6,18,0.9) 70%)`,
          boxShadow: [
            "0 0 0 1px rgba(255,255,255,0.09)",
            "inset 0 1px 0 rgba(255,255,255,0.12)",
            "0 6px 22px rgba(0,0,0,0.58)",
            `0 0 18px ${color}22`,
          ].join(", "),
        }}
      >
        <Icon className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]" style={{ color }} />
      </div>
    </motion.div>
  )
}

function FloatingCompanyCard({
  name,
  logo,
  imageClassName,
  className,
  duration,
  delay,
  darkBg,
}: {
  name: string
  logo: string
  imageClassName: string
  className: string
  duration: number
  delay: number
  darkBg: boolean
}) {
  return (
    <motion.div
      className={`absolute z-30 ${className}`}
      initial={{ opacity: 0, scale: 0.82, y: 6 }}
      animate={{ opacity: 1, scale: [1, 1.022, 1], y: [0, -7, 0] }}
      transition={{
        opacity: { duration: 0.25, delay },
        scale: { duration, repeat: Infinity, ease: "easeInOut", delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <div
        className={[
          "relative flex h-9 sm:h-10 min-w-[104px] items-center justify-center overflow-hidden rounded-lg border px-3 pl-4 backdrop-blur-sm",
          darkBg
            ? "border-white/12 bg-neutral-900/90 shadow-[0_8px_28px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "border-white/20 bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.95)]",
        ].join(" ")}
      >
        <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-gradient-to-b from-purple-500 to-pink-500" />
        <Image
          src={logo}
          alt={`${name} — company where Anuj Dhanuka has worked as a developer`}
          width={124}
          height={36}
          className={`${imageClassName} w-auto object-contain`}
        />
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16 lg:min-h-screen lg:items-center lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 bg-black z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(139,92,246,0.5) 2px, transparent 0),
                              radial-gradient(circle at 75px 75px, rgba(236,72,153,0.5) 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "linear-gradient(120deg, rgba(139,92,246,0.3) 0%, rgba(236,72,153,0.3) 100%)",
              "linear-gradient(120deg, rgba(236,72,153,0.3) 0%, rgba(139,92,246,0.3) 100%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-600/15 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:flex lg:min-h-[calc(100vh-14rem)] lg:items-center lg:px-8">
        <div className="flex w-full flex-col-reverse items-center gap-2 md:flex-row md:gap-12">

          {/* Left: text */}
          <motion.div
            className="flex-1 space-y-6 text-left md:mt-0"
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
              <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-green-400 mr-2" />
              SOFTWARE ENGINEER · FRONTEND DEVELOPER
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] text-white">
              I turn product ideas and designs into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                polished digital experiences
              </span>
              .
            </h1>

            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-gray-100 sm:text-lg">
              <p>
                I'm Anuj Dhanuka, a Software Engineer and Frontend Developer working with
                React.js and React Native to build responsive, intuitive and production-ready
                interfaces for web and mobile products.
              </p>
              <p>
                With experience delivering 20+ client projects and contributing across ChefKart's
                customer mobile app, internal dashboard and website, I combine reliable frontend
                development with strong attention to visual quality, usability and product
                requirements.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="#projects"
                  onClick={(e) => smoothScroll(e, "#projects")}
                  aria-label="Navigate to projects section"
                  className="w-full sm:w-auto"
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-lg group hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      View My Work{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>

                <a href="/ANUJ_DHANUKA_RESUME.pdf" download target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-purple-300 text-white hover:bg-purple-700 hover:border-purple-300 px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-lg group hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium bg-purple-900/30"
                    aria-label="Download resume"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />{" "}
                    Download Resume
                  </Button>
                </a>
              </div>

              <a
                href="https://linkedin.com/in/anuj-dhanuka"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-200 transition-colors duration-300 hover:text-white"
                aria-label="Connect with Anuj Dhanuka on LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
                Connect on LinkedIn
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            </div>
          </motion.div>

          {/* Right: orbit visual */}
          <motion.div
            className="flex-1 relative py-4 sm:py-8 md:py-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto h-[400px] w-[320px] sm:h-[440px] sm:w-[390px] md:h-[500px] md:w-[460px]">

              {/* Ambient glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="h-[280px] w-[280px] rounded-full bg-gradient-to-br from-purple-600/35 to-pink-600/35 blur-3xl sm:h-[340px] sm:w-[340px] md:h-[390px] md:w-[390px]"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.82, 0.5] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                />
              </div>

              {/* Outer orbit ring — clockwise */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="relative h-[270px] w-[270px] rounded-full border border-purple-300/28 sm:h-[330px] sm:w-[330px] md:h-[390px] md:w-[390px]"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                >
                  <span className="absolute left-8 top-4 h-[7px] w-[7px] rounded-full bg-purple-300 shadow-[0_0_14px_rgba(216,180,254,0.9)]" />
                  <span className="absolute bottom-8 right-5 h-[5px] w-[5px] rounded-full bg-pink-300 shadow-[0_0_12px_rgba(249,168,212,0.9)]" />
                </motion.div>
              </div>

              {/* Inner orbit ring — counter-clockwise */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="h-[215px] w-[215px] rounded-full border border-white/15 sm:h-[268px] sm:w-[268px] md:h-[320px] md:w-[320px]"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
                />
              </div>

              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-20 h-[228px] w-[228px] overflow-hidden rounded-full border-[3px] border-purple-300/30 shadow-2xl shadow-purple-950/40 sm:h-[278px] sm:w-[278px] md:h-[318px] md:w-[318px]">
                  <Image
                    src="/anuj_profile_pic.png"
                    alt="Anuj Dhanuka — Software Engineer and Frontend Developer based in Gurugram, India"
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 640px) 228px, (max-width: 768px) 278px, 318px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABIAEgAAD/2wBDAAQEBAQEBAYEBAYJBgYGCQwJCQkJDA8MDAwMDA8SDw8PDw8PEhISEhISEhIVFRUVFRUZGRkZGRwcHBwcHBwcHBz/2wBDAQQFBQcHBwwHBwwdFBAUHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/3QAEAAH/2gAMAwEAAhEDEQA/APV/iX8QtI0zWY9FE93Fc6IE1O5FvL5SyRjGIeD87HcDtYbcda9g8P65ZeJdEstf03d9mv4hNGHGGAPYgEjIPB5r8+fizGbj4l+IppXZma72deAsaKqge2BX2l8G4kh+HunRp91ZLnaOyj7RJgAdgOwr0UrSbM+a6SP/2Q=="
                  />
                </div>
              </div>

              {/* Primary tech + AI icons — octagon outer ring */}
              {techIcons.map((icon) => (
                <FloatingTechIcon key={icon.name} {...icon} />
              ))}

              {/* Secondary icons — diagonal gaps, smaller */}
              {secondaryIcons.map((icon) => (
                <FloatingSecondaryIcon key={icon.name} {...icon} />
              ))}

              {/* Company cards — inner ring */}
              {companyCards.map((card) => (
                <FloatingCompanyCard key={card.name} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
