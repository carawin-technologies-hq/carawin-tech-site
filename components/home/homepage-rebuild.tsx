"use client"
import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Star,
  Hexagon,
  Lightbulb,
  Zap,
  Sparkles,
  Layers,
  Gauge,
  Workflow,
  Globe,
  BookOpen,
  BarChart3,
  FlaskConical,
  LayoutDashboard,
} from "lucide-react"




import {
  Cpu,
  UsersRound,
  Laptop,
  Building2,
  Network,
  BrainCircuit,
  GraduationCap,
  Code2,
  RadioTower,
  Bot,
} from "lucide-react"


import { solutionVerticals, whyCarawinData, carawinApproach } from "@/lib/carawin-content"
import { TechOrbit } from "./tech-orbit"
import { Reveal } from "@/components/motion-primitives"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

import { useEffect } from "react"



export function HomepageRebuild() {
  const [activeTechNode, setActiveTechNode] = useState<string>("robotics")
  const capabilityRailRef = useRef<HTMLDivElement | null>(null)
  const homepageRef = useRef<HTMLDivElement | null>(null)

const executionRailRef = useRef<HTMLDivElement | null>(null)

const scrollExecution = (direction: number) => {
  const rail = executionRailRef.current
  if (!rail) return

  const card = rail.querySelector<HTMLElement>(
    ".execution-photo-card"
  )

  rail.scrollBy({
    left: direction * ((card?.getBoundingClientRect().width ?? rail.clientWidth * 0.82) + 20),
    behavior: "smooth",
  })
}
const scrollCapabilities = (direction: number) => {
  capabilityRailRef.current?.scrollBy({
    left: direction * 460,
    behavior: "smooth",
  })
}

  const stats = [
    { value: "9+", label: "YEARS OF EXPERIENCE", highlight: false },
    { value: "100+", label: "SCHOOLS", highlight: false },
    { value: "25,000+", label: "STUDENTS", highlight: true },
    { value: "6,000+", label: "SCHOOLS IN PIPELINE", highlight: false },
    { value: "3", label: "INTERNATIONAL PROJECTS", highlight: false },
  ]

  // Hero pills grouped in rows exactly like the reference design (3 / 4 / 2)
  const heroPillRows = [
    ["Artificial Intelligence", "Software", "Education Technology"],
    ["Virtual STEM", "IoT", "Robotics", "Digital Infrastructure"],
    ["Future Skills", "Innovation"],
  ]

  const aboutFeatures = [
    { title: "Technology Excellence", icon: Star },
    { title: "Domain Expertise", icon: Hexagon },
    { title: "Product Thinking", icon: Lightbulb },
    { title: "Implementation", icon: Zap },
  ]

  const products = [
    {
      title: "AI Education Platform",
      image: "/images/home/optimized/prod_ai_education-280kb.jpeg",
      href: "/solutions/ai-in-education",
    },
    {
      title: "AI Tutor",
      image: "/images/home/optimized/prod_ai_tutor-280kb.jpeg",
      href: "/ai",
    },
    {
      title: "Adaptive Learning",
      image: "/images/home/prod_adaptive_learning.png",
      href: "/solutions/ai-in-education",
    },
    {
      title: "Virtual STEM Lab",
      image: "/images/home/optimized/prod_stem_lab-280kb.jpeg",
      href: "/solutions/ai-software-iot",
    },
    {
      title: "AI-Powered ERP",
      image: "/images/home/prod_ai_erp.png",
      href: "/solutions/digital-public-infrastructure",
    },
  ]

  const capabilityImages = [
  {
    src: "/images/home/ai.webp",
    alt: "Technology and digital learning",
  },
  {
    src: "/images/home/optimized/transformation-170kb.webp",
    alt: "Students using technology in a learning environment",
  },
  {
    src: "/images/home/optimized/software-250kb.webp",
    alt: "Student using digital technology",
  },
  {
    src: "/images/home/iot.webp",
    alt: "Industrial technology and infrastructure",
  },
  {
    src: "/images/home/education.webp",
    alt: "Enterprise technology and digital transformation",
  },
  {
  src: "/images/home/one-ecosystem.jpg",
  alt: "Carawin ecosystem integration",
},
]
const labImages = [
  "/images/home/optimized/carawin_labs_students-260kb.webp",
]

const whyCarawinImages = [
  "/images/home/integrated.jpg",
  "/images/home/experiential.jpg",
  "/images/home/practical.jpg",
  "/images/home/scalable.jpg",
  "/images/home/measurable.jpg",
  "/images/home/optimized/cross-sector-280kb.jpg",
]

const executionSteps = [
  {
    number: "01",
    title: "DISCOVER",
    desc: "Understand problem & opportunity",
    image: "/images/home/optimized/discover-280kb (1).jpg",
    highlight: true,
  },
  {
    number: "02",
    title: "DESIGN",
    desc: "Create product & architecture",
    image: "/images/home/design.jpg",
    highlight: false,
  },
  {
    number: "03",
    title: "DEVELOP",
    desc: "Build platform, product or solution",
    image: "/images/home/develop.jpg",
    highlight: false,
  },
  {
    number: "04",
    title: "PILOT",
    desc: "Validate in real-world environments",
    image: "/images/home/optimized/pilot-280kb.jpg",
    highlight: false,
  },
  {
    number: "05",
    title: "DEPLOY",
    desc: "Implement, integrate & operationalize",
    image: "/images/home/deploy.jpg",
    highlight: false,
  },
  {
    number: "06",
    title: "SCALE",
    desc: "Expand across users & markets",
    image: "/images/home/scale.jpg",
    highlight: true,
  },
]

  const technologyRef = useRef<HTMLElement | null>(null)
const technologyVideoRef = useRef<HTMLVideoElement | null>(null)

const { scrollYProgress: technologyProgress } = useScroll()

const technologyOpacity = useTransform(
  technologyProgress,
  [0, 0.18, 0.5, 0.82, 1],
  [0, 1, 1, 0.78, 0]
)

const technologyY = useTransform(
  technologyProgress,
  [0, 0.18, 0.5, 0.82, 1],
  [120, 0, 0, -40, -100]
)

const technologyScale = useTransform(
  technologyProgress,
  [0, 0.18, 0.5, 0.82, 1],
  [0.96, 1, 1, 0.99, 0.975]
)

const aboutSectionRef = useRef<HTMLElement | null>(null)
const [aboutImageVisible, setAboutImageVisible] = useState(false)




useEffect(() => {
  const section = technologyRef.current
  const video = technologyVideoRef.current

  if (!section || !video) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    },
    {
      threshold: 0.45,
    }
  )

  observer.observe(section)

  return () => observer.disconnect()
}, [])



useEffect(() => {
  const root = homepageRef.current
  if (!root) return

  const sections = Array.from(
    root.querySelectorAll<HTMLElement>(":scope > section")
  )

  sections.forEach((section) => {
    section.classList.add("homepage-snap-section")
  })

  // Do not interfere with existing Reveal/Framer Motion animations.
  const targets = sections.flatMap((section) =>
    Array.from(
      section.querySelectorAll<HTMLElement>(
        ".homepage-reveal-target"
      )
    )
  )

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  if (reducedMotion || targets.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "homepage-revealed",
          entry.isIntersecting
        )
      })
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    }
  )

  targets.forEach((element) => observer.observe(element))

  return () => observer.disconnect()
}, [])



const [activeHeroVideo, setActiveHeroVideo] = useState(0)

const heroVideoRefs = useRef<Array<HTMLVideoElement | null>>([
  null,
  null,
])

const activeHeroVideoRef = useRef(0)
const heroCrossfadeRef = useRef(false)

const handleHeroVideoTimeUpdate = (index: number) => {
  if (
    index !== activeHeroVideoRef.current ||
    heroCrossfadeRef.current
  ) {
    return
  }

  const currentVideo = heroVideoRefs.current[index]

  if (
    !currentVideo ||
    !Number.isFinite(currentVideo.duration) ||
    currentVideo.duration <= 1.2
  ) {
    return
  }

  // Begin the crossfade 1.1 seconds before the video ends.
  if (currentVideo.duration - currentVideo.currentTime > 1.1) {
    return
  }

  const nextIndex = index === 0 ? 1 : 0
  const nextVideo = heroVideoRefs.current[nextIndex]

  if (!nextVideo) return

  heroCrossfadeRef.current = true
  nextVideo.currentTime = 0

  nextVideo.play()
    .then(() => {
      activeHeroVideoRef.current = nextIndex
      setActiveHeroVideo(nextIndex)
    })
    .catch(() => {
      heroCrossfadeRef.current = false
      currentVideo.loop = true
    })
}

const handleHeroVideoTransitionEnd = (index: number) => {
  // Clean up the outgoing video after its fade-out finishes.
  if (
    !heroCrossfadeRef.current ||
    index === activeHeroVideoRef.current
  ) {
    return
  }

  const outgoingVideo = heroVideoRefs.current[index]

  if (outgoingVideo) {
    outgoingVideo.pause()
    outgoingVideo.currentTime = 0
  }

  heroCrossfadeRef.current = false
}



  return (
<div
  ref={homepageRef}
  className="homepage-scroll-root overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
><section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#011E42] via-[#011A3E] to-[#001739]">
{/* ========================================================
    HERO + INTEGRATED STATS
    ======================================================== */}

<div className="relative min-h-0 overflow-hidden lg:min-h-[100svh]">

  {/* ONE SINGLE BACKGROUND FOR THE ENTIRE HERO */}
  <div className="pointer-events-none absolute inset-0 z-0">

{[0, 1].map((index) => (
<video
  key={index}
  className="hero-bg-video"
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  poster="/images/home/BG-IMG-2.webp"
  aria-hidden="true"
>
  <source src="/videos/bg-video-new.mp4" type="video/mp4" />
</video>
))}

    {/* Readability overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#001739]/90 via-[#001739]/55 to-[#001739]/10" />

    {/* Slight darkening toward the bottom so stats blend naturally */}
    <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#02142d]/80 to-transparent" />

    <div className="hero-light-sweep" />
    <div className="hero-scan-lines" />

  </div>


  {/* ======================================================
      HERO CONTENT
      ====================================================== */}

  <div className="relative z-10 flex-1 w-full">
<div className="w-full px-5 pb-10 pt-[120px] sm:px-8 sm:pb-12 sm:pt-[150px] lg:px-[4vw] lg:pb-28 lg:pt-[6.5rem]">
      <div className="max-w-[620px] text-left">

        {/* Kicker */}
        <div className="inline-flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white sm:text-xs">
          <span>CARAWIN TECHNOLOGIES</span>
          <span className="h-0.5 w-6 bg-[#E11D48]" />
        </div>


        {/* Main headline */}
        <h1 className="hero-headline mt-4 font-black leading-[0.9] tracking-[-0.055em]">

          <span className="hero-word hero-word-1 hero-word-glow-blue block text-[clamp(2.8rem,4.6vw,4.8rem)] font-black text-white">
            EXPERIENCE<span className="text-white"></span>
          </span>

          <span className="hero-word hero-word-2 hero-word-glow-red block text-[clamp(2.8rem,4.6vw,4.8rem)] font-black text-[#E11D48]">
            INNOVATION<span className="hero-red-dot">.</span>
          </span>

        </h1>


        {/* Hero statement */}
        <div className="mt-4">
          <p className="text-[clamp(1.15rem,1.7vw,1.8rem)] font-black leading-[1.05] tracking-[-0.02em] text-white">
            BUILDING INTELLIGENCE
            <br />
            <span className="text-white/90">
              FOR THE REAL WORLD.
            </span>
          </p>
        </div>


        {/* Subheadline */}
        <p className="mt-3 max-w-xl text-sm font-bold leading-snug text-white/90 sm:text-base lg:text-[1.05rem]">
          AI for Learning. Technology for Innovation.
          <br className="hidden sm:block" />
          Skills for the Future.
        </p>


        {/* Description */}
        <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm lg:text-[0.95rem]">
          Carawin Technologies builds AI-powered, technology-enabled ecosystems
          for education, institutions, governments and industries.
        </p>


        {/* Pillars */}
        <div className="mt-4 flex flex-col gap-1.5">
          {heroPillRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center gap-1.5"
            >
              {row.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-lg border border-white/25 bg-[#00132e]/55 px-2.5 py-1 text-[9px] font-semibold text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[10px]"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>


        {/* Ethos */}
        <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#F43F5E] sm:text-[10px]">
          {["Learn", "Explore", "Experiment", "Build", "Innovate"].map(
            (step, i) => (
              <span
                key={step}
                className="inline-flex items-center gap-2.5"
              >
                {step}

                {i < 4 && (
                  <span className="text-white/80">·</span>
                )}
              </span>
            )
          )}
        </div>


        {/* CTAs */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5">

          <Link
            href="/solutions"
className="hero-cta hero-cta-red inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E11D48] px-5 py-2.5 text-[10px] font-black uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(225,29,72,0.35)] transition-all duration-300 hover:bg-[#F02A52] sm:w-auto sm:px-6 sm:py-3 sm:text-xs"  >
            Explore Solutions

            <span className="hero-cta-arrow">
              <ArrowUpRight size={15} />
            </span>
          </Link>


          <Link
            href="/demo"
className="hero-cta hero-cta-blue inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/80 bg-[#0B2850]/90 px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:bg-[#123A70] hover:border-white sm:w-auto sm:px-6 sm:py-3 sm:text-xs" 
       >
            <span className="!text-white font-bold">
  Request a Demonstration
</span>
            <span className="hero-cta-arrow text-white">
  <ArrowUpRight size={15} />
</span>
          </Link>

        </div>

      </div>

    </div>

  </div>


  {/* ======================================================
      INTEGRATED STATS
      SAME BACKGROUND — NO SECOND IMAGE
      ====================================================== */}

<div className="relative z-20 mt-8 w-full lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-[145px]">
  <div className="h-full bg-[#02142d]/30">
      <div className="w-full px-6 sm:px-10 lg:px-[4vw]">

        <div className="mx-auto grid max-w-[1500px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

          {stats.map((st, index) => (
            <div
              key={st.label}
              className={`
                min-w-0 py-4 sm:py-5 lg:py-6
              `}
            >

              <span
                className={`block text-2xl font-black tracking-[-0.04em] sm:text-3xl lg:text-4xl xl:text-[2.7rem] ${
                  st.highlight
                    ? "text-[#E11D48]"
                    : "text-white"
                }`}
              >
                {st.value}
              </span>

              <span className="mt-1 block max-w-[150px] font-mono text-[8px] font-bold uppercase leading-[1.3] tracking-[0.15em] text-white/65 sm:text-[9px] lg:text-[10px]">
                {st.label}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

</div>
</section>

{/* ========================================================
    2. HOME — INTRODUCTION / ABOUT CARAWIN
    Natural image blending · Responsive · Animated
    ======================================================== */}
<section
  ref={aboutSectionRef}
  className="about-blended-hero relative isolate overflow-hidden border-b border-slate-200 bg-[#f8faff] text-[#08284d]"
>
  {/* Full-bleed atmospheric artwork */}
  <div className="about-blended-art pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <Image
      src="/images/home/about_bg.webp"
      alt=""
      fill
      priority
      quality={80}
      sizes="100vw"
      aria-hidden="true"
      className={`about-blended-art__image object-cover ${
        aboutImageVisible ? "about-blended-art__image--active" : ""
      }`}
    />

    {/* Dissolves the image into the white text area */}
    <div className="about-blended-art__wash absolute inset-0" />

    {/* Softens the transition into the feature strip */}
    <div className="about-blended-art__bottom absolute inset-0" />

    {/* Restrained blue and crimson ambient light */}
    <div className="about-blended-art__glow absolute inset-0" />
  </div>

  {/* Main content */}
  <div className="relative z-10 mx-auto w-full max-w-[1680px] px-5 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:px-[4vw] lg:pb-12 lg:pt-28">
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
      {/* Introduction copy */}
      <div className="relative z-10 w-full max-w-[660px] lg:col-span-7 xl:col-span-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48]" />

            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#b5122b] sm:text-xs">
              HOME — INTRODUCTION
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} y={28}>
          <h2 className="mt-5 text-[clamp(2.8rem,5.4vw,5.6rem)] font-black leading-[0.91] tracking-[-0.065em] text-[#08284d] sm:mt-6">
            BUILDING
            <br />
            TECHNOLOGY
            <br />
            FOR A CHANGING
            <br />
            <span className="bg-gradient-to-r from-[#1769d2] via-[#6560d5] to-[#e11d48] bg-clip-text text-transparent">
              WORLD.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.16} y={18}>
          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
            The future will require people and organisations to continuously
            learn, adapt and innovate.
          </p>
        </Reveal>

        <Reveal delay={0.22} y={16}>
          <div className="mt-5 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-[15px] sm:leading-7">
            <p>
              Carawin Technologies is an AI, EdTech and technology product
              development company working across Artificial Intelligence,
              Education, IoT, Robotics, Electronics and Digital Transformation.
            </p>

            <p>
              Since 2017, we have developed and implemented technology
              solutions for schools, institutions, government, enterprises
              and industry.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.3} y={14}>
          <div className="mt-7 sm:mt-8">
            <Link
              href="/about"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48] px-6 text-sm font-bold text-white shadow-[0_10px_28px_rgba(23,105,210,.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(225,29,72,.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769d2] focus-visible:ring-offset-2"
            >
              Discover Carawin

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Open space lets the VR artwork remain visible */}
      <div className="hidden lg:col-span-5 lg:block xl:col-span-6" />
    </div>

    {/* Capability strip */}
<div className="relative z-10 mt-5 grid grid-cols-2 gap-3 border-t border-white/70 pt-4 sm:mt-6 sm:grid-cols-4 sm:gap-4 sm:pt-5 lg:mt-8">      {aboutFeatures.map((feat, index) => {
        const Icon = feat.icon;

        return (
          <Reveal
            key={feat.title}
            delay={0.12 + index * 0.07}
            y={14}
          >
            <div className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/80 bg-white/65 p-3 shadow-[0_8px_24px_rgba(8,40,77,.035)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white/90 hover:shadow-[0_14px_30px_rgba(8,40,77,.08)] sm:p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50/90 text-[#1769d2] transition-all duration-300 group-hover:border-rose-100 group-hover:bg-rose-50 group-hover:text-[#e11d48] sm:h-11 sm:w-11">
                <Icon size={19} strokeWidth={1.8} />
              </span>

              <span className="min-w-0 text-xs font-bold leading-snug text-[#08284d] sm:text-sm">
                {feat.title}
              </span>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>

{/* ========================================================
    WHAT WE BUILD — CONNECTED TECHNOLOGY TIMELINE
    ======================================================== */}
<section className="relative isolate overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
  {/* Very subtle brand atmosphere */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-[100px]" />
    <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-rose-100/30 blur-[100px]" />
  </div>

  <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-[4vw]">
    {/* Editorial header */}
    <Reveal>
      <div className="flex items-center gap-3">
        <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48]" />
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
          WHAT WE BUILD
        </p>
      </div>
    </Reveal>

    {/* Main statement */}
    <div className="mt-7 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
      <Reveal delay={0.08} y={24}>
        <h2 className="max-w-[1000px] text-4xl font-black leading-[0.94] tracking-[-0.055em] text-[#08284d] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
          WE CONNECT
          <br />
          <span className="text-[#1769d2]">TECHNOLOGY,</span>
          <br />
          PEOPLE AND REAL-WORLD
          <br />
          <span className="bg-gradient-to-r from-[#5268d5] to-[#e11d48] bg-clip-text text-transparent">
            OUTCOMES.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.16} y={18}>
        <div className="max-w-xl pb-1 lg:justify-self-end">
          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            From intelligent learning systems to digital infrastructure,
            robotics and enterprise technology, Carawin builds technology
            that moves from idea to implementation and measurable impact.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-[3px] w-9 rounded-full bg-[#1769d2]" />
            <span className="h-[3px] w-5 rounded-full bg-[#e11d48]" />
            <span className="ml-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 sm:text-[10px]">
              Idea · Implementation · Impact
            </span>
          </div>
        </div>
      </Reveal>
    </div>

    {/* Connected technology timeline */}
    <div className="mt-12 border-t border-slate-200 pt-8 sm:mt-16 sm:pt-10 lg:mt-20">
      <Reveal>
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
            TECHNOLOGY DOMAINS
          </p>

        </div>
      </Reveal>

      <div className="technology-timeline-shell">
        <div className="technology-timeline">
          {/* The line sits behind the timeline nodes */}
          <div className="technology-timeline__track" aria-hidden="true">
            <span className="technology-timeline__signal" />
          </div>

          {[
            { number: "", name: "Artificial Intelligence", Icon: BrainCircuit },
            { number: "02", name: "Education", Icon: GraduationCap },
            { number: "03", name: "Software", Icon: Code2 },
            { number: "04", name: "IoT", Icon: RadioTower },
            { number: "05", name: "Robotics", Icon: Bot },
            { number: "06", name: "Digital Transformation", Icon: Workflow },
          ].map((domain, index) => {
            const Icon = domain.Icon

            return (
              <Reveal
                key={domain.number}
                delay={0.08 + index * 0.07}
                y={14}
              >
                <div
                  className="technology-timeline__item"
                  style={{ animationDelay: `${index * 0.7}s` }}
                >
                  <div className="technology-timeline__node">
                    <span className="technology-timeline__dot" />

                    <span className="technology-timeline__icon">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                  </div>

                  <span className="technology-timeline__number">
                    {domain.number}
                  </span>

                  <span className="technology-timeline__name">
                    {domain.name}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  </div>
</section>




{/* ========================================================
    3. CAPABILITIES — RESPONSIVE CARD LAYOUT
    ======================================================== */}
<section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f7faff] py-16 sm:py-20 lg:py-24">
  {/* Blue and red ambient background */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-[100px]" />
    <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rose-100/40 blur-[100px]" />
  </div>

  <div className="relative mx-auto w-full max-w-[1900px] px-5 sm:px-8 lg:px-10 xl:px-12">
    {/* Header */}
    <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48]" />
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#b5122b] sm:text-xs">
              CAPABILITIES
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} y={28}>
          <h2 className="mt-3 text-3xl font-black leading-[0.95] tracking-[-0.045em] text-[var(--navy)] sm:text-5xl lg:text-6xl">
            TECHNOLOGY
            <br />
            THAT MOVES
            <span className="bg-gradient-to-r from-[#1769d2] to-[#e11d48] bg-clip-text text-transparent">
              {" "}WITH YOU.
            </span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.16} y={18}>
        <div className="flex flex-col gap-5 lg:items-end">
          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-right">
            We bring together technology, education and domain expertise
            to create end-to-end solutions that drive measurable change.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-[3px] w-10 rounded-full bg-[#1769d2]" />
            <span className="h-[3px] w-5 rounded-full bg-[#e11d48]" />
          </div>
        </div>
      </Reveal>
    </div>

    {/* Cards: horizontal on mobile, grid on tablet and desktop */}
    <div
      ref={capabilityRailRef}
      className="mt-9 flex items-stretch gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-mandatory pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 lg:mt-14 xl:grid-cols-6"
    >
      {solutionVerticals.map((vertical, index) => {
        const image = capabilityImages[index % capabilityImages.length]

        const icons = [
          Cpu,
          UsersRound,
          Laptop,
          Workflow,
          Building2,
          Network,
        ]

        const Icon = icons[index % icons.length]

        return (
          <div
            key={vertical.slug}
            className="w-[82vw] max-w-[320px] shrink-0 snap-start sm:w-full sm:max-w-none sm:min-w-0"
          >
            <Reveal
              delay={0.05 + (index % 4) * 0.06}
              y={20}
            >
              <Link
                href={vertical.href}
                className="group block h-full min-w-0"
              >
                <article className="relative flex h-[350px] flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-[0_8px_24px_rgba(8,40,77,.045)] transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-blue-200 group-hover:shadow-[0_18px_40px_rgba(8,40,77,.12)] sm:h-[360px]">
                  {/* Image */}
                  <div className="relative h-[145px] shrink-0 overflow-hidden bg-[#e8eff8] sm:h-[155px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 639px) 82vw, (max-width: 1023px) 30vw, 17vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#08284d]/35 to-transparent" />

                    <span className="absolute left-3 top-3 rounded-md border border-white/70 bg-white/95 px-2 py-1 font-mono text-[9px] font-bold tracking-[0.15em] text-[#08284d] shadow-sm">
                      {vertical.index}
                    </span>

                    <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#e11d48] ring-4 ring-rose-300/20" />
                  </div>

                  {/* Card content */}
                  <div className="relative flex min-h-0 flex-1 flex-col px-3.5 pb-4 pt-7 sm:px-4 sm:pb-4">
                    <span className="absolute -top-5 left-3.5 grid h-10 w-10 place-items-center rounded-xl border border-blue-100 bg-white text-[#1769d2] shadow-[0_5px_16px_rgba(8,40,77,.09)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:bg-blue-50 sm:left-4">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>

                    <h3 className="line-clamp-2 text-xs font-bold leading-snug tracking-[-0.02em] text-[#08284d] transition-colors duration-300 group-hover:text-[#1769d2] sm:text-sm">
                      {vertical.name}
                    </h3>

                    <p className="mt-2 line-clamp-4 text-[11px] leading-[1.55] text-slate-500 sm:text-xs sm:leading-5">
                      {vertical.desc}
                    </p>

                    <div className="mt-auto flex items-center gap-1.5 pt-4">
                      <span className="h-[3px] w-7 rounded-full bg-[#1769d2] transition-all duration-500 group-hover:w-12" />
                      <span className="h-[3px] w-2 rounded-full bg-blue-200" />
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          </div>
        )
      })}

      {/* Ecosystem Integration — existing image */}
      <div className="w-[82vw] max-w-[320px] shrink-0 snap-start sm:w-full sm:max-w-none sm:min-w-0">
        <Reveal delay={0.2} y={20}>
          <Link
            href="/solutions"
            className="group block h-full min-w-0"
          >
            <article className="relative flex h-[350px] flex-col overflow-hidden rounded-[18px] border border-rose-100 bg-white shadow-[0_8px_24px_rgba(8,40,77,.045)] transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-rose-200 group-hover:shadow-[0_18px_40px_rgba(181,18,43,.10)] sm:h-[360px]">
              <div className="relative h-[145px] shrink-0 overflow-hidden bg-[#e8eff8] sm:h-[155px]">
                <Image
                  src="/images/home/one-ecosystem.webp"
                  alt="Carawin ecosystem integration"
                  fill
                  sizes="(max-width: 639px) 82vw, (max-width: 1023px) 30vw, 17vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08284d]/45 to-transparent" />

                <span className="absolute left-3 top-3 rounded-md border border-white/70 bg-white/95 px-2 py-1 font-mono text-[9px] font-bold tracking-[0.15em] text-[#08284d] shadow-sm">
                  06
                </span>

                <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#e11d48] ring-4 ring-rose-300/20" />
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col px-3.5 pb-4 pt-7 sm:px-4 sm:pb-4">
                <span className="absolute -top-5 left-3.5 grid h-10 w-10 place-items-center rounded-xl border border-rose-100 bg-white text-[#e11d48] shadow-[0_5px_16px_rgba(8,40,77,.09)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-rose-50 sm:left-4">
                  <Network size={19} strokeWidth={1.8} />
                </span>

                <h3 className="line-clamp-2 text-xs font-bold leading-snug tracking-[-0.02em] text-[#08284d] transition-colors duration-300 group-hover:text-[#b5122b] sm:text-sm">
                  Ecosystem Integration
                </h3>

                <p className="mt-2 line-clamp-4 text-[11px] leading-[1.55] text-slate-500 sm:text-xs sm:leading-5">
                  Connecting AI, education, robotics, IoT and digital infrastructure.
                </p>

                <div className="mt-auto flex items-center gap-1.5 pt-4">
                  <span className="h-[3px] w-7 rounded-full bg-[#e11d48] transition-all duration-500 group-hover:w-12" />
                  <span className="h-[3px] w-2 rounded-full bg-rose-200" />
                </div>
              </div>
            </article>
          </Link>
        </Reveal>
      </div>
    </div>
  </div>
</section>







 {/* ========================================================
    4. CARAWIN LABS — CINEMATIC IMMERSIVE BANNER
    ======================================================== */}
<section className="labs-hero relative isolate w-full overflow-hidden bg-[#071832] text-white">

  {/* Full-bleed background image */}
  <div className="labs-hero__background absolute inset-0 z-0 overflow-hidden">
    <Image
      src="/images/home/optimized/carawin_labs_students.jpg"
      alt=""
      fill
      sizes="100vw"
      quality={88}
      className="labs-hero__image object-cover object-[65%_center]"
      aria-hidden="true"
    />

    {/* Natural blend from navy copy area into the photo */}
    <div className="labs-hero__scrim absolute inset-0" />

    {/* Subtle atmospheric blue light */}
    <div className="labs-hero__light absolute inset-0" />

    {/* Lower cinematic fade */}
    <div className="labs-hero__bottom absolute inset-x-0 bottom-0 h-28" />
  </div>

  {/* Main content */}
  <div className="relative z-10 mx-auto flex min-h-[240px] w-full max-w-[1800px] items-center px-5 py-10 sm:min-h-[380px] sm:px-8 sm:py-12 lg:min-h-[420px] lg:px-[5vw] lg:py-14">
    <div className="max-w-[650px]">

      {/* Eyebrow */}
      <Reveal>
        <div className="inline-flex items-center gap-3 border border-white/15 bg-[#071832]/45 px-3 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60a5fa] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#60a5fa]" />
          </span>

          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white sm:text-xs">
            CARAWIN LABS
          </span>
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={0.08} y={28}>
        <h2 className="mt-6 text-[clamp(2.5rem,5.2vw,4.5rem)] font-black leading-[0.94] tracking-[-0.06em] text-white">
          LEARN. BUILD.
          <br />
          EXPERIMENT.
          <br />
          <span
  data-text="INNOVATE."
  className="labs-hero__beam-word relative inline-block bg-gradient-to-r from-[#7cc7ff] via-[#d5e9ff] to-white bg-clip-text text-transparent"
>
  INNOVATE.
</span>
        </h2>
      </Reveal>

      {/* Technology categories */}
      <Reveal delay={0.16} y={18}>
        <div className="mt-6 max-w-[520px]">
          <p className="font-mono text-[10px] font-bold uppercase leading-6 tracking-[0.14em] text-blue-200 sm:text-xs sm:leading-7">
            AI <span className="px-1.5 text-[#f87191]">•</span>
            STEM <span className="px-1.5 text-[#f87191]">•</span>
            STEAM <span className="px-1.5 text-[#f87191]">•</span>
            ROBOTICS <span className="px-1.5 text-[#f87191]">•</span>
            IOT <span className="px-1.5 text-[#f87191]">•</span>
            CODING
            <br />
            INNOVATION <span className="px-1.5 text-[#f87191]">•</span>
            SMART CLASS
          </p>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal delay={0.24} y={16}>
        <div className="mt-8">
          <Link
            href="/solutions/ai-software-iot"
            className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48] px-6 text-xs font-bold uppercase tracking-[0.09em] text-white shadow-[0_10px_30px_rgba(23,105,210,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_38px_rgba(225,29,72,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071832] sm:text-sm"
          >
            EXPLORE CARAWIN LABS

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Reveal>
    </div>
  </div>

  {/* Fine brand accent at the bottom */}
  <div className="absolute inset-x-0 bottom-0 z-20 h-[2px] bg-gradient-to-r from-[#1769d2] via-[#8190db] to-[#e11d48]" />
</section>

{/* ========================================================
    OUR PRODUCTS & LABS — PREMIUM RESPONSIVE SHOWCASE
    Desktop: five image cards, no navigation arrows
    Mobile: horizontal product tiles with icon badges
    ======================================================== */}
<section
  id="products-labs"
  className="relative isolate overflow-hidden border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20"
>
  {/* Subtle background atmosphere */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-blue-50/80 to-transparent"
  />

  <div className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-[4vw]">

    {/* Section heading */}
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48]" />

            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#b5122b] sm:text-xs">
              OUR PRODUCTS & LABS
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} y={22}>
          <h2 className="mt-3 text-3xl font-black leading-[0.96] tracking-[-0.055em] text-[#08284d] sm:text-5xl lg:text-6xl">
            FROM IDEAS TO PRODUCTS
            <span className="text-[#e11d48]">.</span>
          </h2>
        </Reveal>
      </div>

      {/* Desktop link only — no desktop carousel arrows */}
      <Reveal delay={0.15} y={12}>
        <Link
          href="/solutions"
          className="group hidden items-center gap-2 border-b border-slate-200 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#193653] transition-colors duration-300 hover:border-[#1769d2] hover:text-[#1769d2] sm:inline-flex"
        >
          VIEW ALL PRODUCTS & LABS
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>
    </div>

    {/* =====================================================
        DESKTOP PRODUCT CARDS
        ===================================================== */}
    <div className="mt-9 hidden grid-cols-2 gap-4 sm:grid lg:mt-11 lg:grid-cols-5 lg:gap-5">
      {products.slice(0, 5).map((product, index) => (
        <Reveal
          key={`desktop-product-${product.title}`}
          delay={0.05 + index * 0.06}
          y={18}
        >
          <Link
            href={product.href}
            className="group block h-full min-w-0"
          >
            <article className="relative flex h-full flex-col overflow-hidden rounded-[17px] border border-slate-200 bg-white transition-all duration-400 ease-out group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-[0_16px_35px_rgba(8,40,77,0.09)]">

              {/* Product image */}
              <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-[#edf3fa]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1023px) 45vw, 19vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                {/* Light image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08284d]/25 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute left-3 top-3 rounded-md border border-white/75 bg-white/90 px-2 py-1 font-mono text-[9px] font-bold tracking-[0.12em] text-[#08284d] shadow-sm backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>

              {/* Product label */}
              <div className="flex flex-1 flex-col px-3.5 py-4 sm:px-4">
                <h3 className="text-sm font-bold leading-snug tracking-[-0.025em] text-[#08284d] transition-colors duration-300 group-hover:text-[#1769d2]">
                  {product.title}
                </h3>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-500 transition-colors duration-300 group-hover:text-[#1769d2]">
                    Explore product
                  </span>

                  <span className="grid h-7 w-7 place-items-center rounded-full border border-slate-200 text-[#1769d2] transition-all duration-300 group-hover:border-[#1769d2] group-hover:bg-[#1769d2] group-hover:text-white">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* Brand accent */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-r-full transition-all duration-500 group-hover:w-16 ${
                    index % 2 === 0
                      ? "w-8 bg-[#1769d2]"
                      : "w-8 bg-[#e11d48]"
                  }`}
                />
              </div>
            </article>
          </Link>
        </Reveal>
      ))}
    </div>

    {/* =====================================================
        MOBILE PRODUCT TILES
        Horizontal, swipeable, original product order
        ===================================================== */}
    <div className="mt-7 sm:hidden">

      {/* Mobile-only carousel controls */}
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
          EXPLORE OUR PRODUCTS
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous product"
            onClick={() =>
              document
                .getElementById("products-labs-mobile-rail")
                ?.scrollBy({ left: -310, behavior: "smooth" })
            }
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-[#08284d] transition-colors duration-300 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ArrowLeft size={15} />
          </button>

          <button
            type="button"
            aria-label="Next product"
            onClick={() =>
              document
                .getElementById("products-labs-mobile-rail")
                ?.scrollBy({ left: 310, behavior: "smooth" })
            }
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-[#08284d] transition-colors duration-300 hover:border-rose-300 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Horizontal row of compact tiles */}
      <div
        id="products-labs-mobile-rail"
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.slice(0, 5).map((product, index) => {
          const icons = [
            BookOpen,
            Bot,
            BarChart3,
            FlaskConical,
            LayoutDashboard,
          ]

          const Icon = icons[index]

          const summaries = [
            "Interactive learning with AI for future-ready skills.",
            "Personalised AI tutoring for every learner.",
            "Learning paths that adapt to individual needs.",
            "Hands-on exploration through virtual experiments.",
            "Intelligent tools for smarter operations.",
          ]

          return (
            <Reveal
              key={`mobile-product-${product.title}`}
              delay={index * 0.045}
              y={12}
            >
              <Link
                href={product.href}
                className="group block w-[86vw] max-w-[360px] shrink-0 snap-start"
              >
                <article className="relative flex min-h-[112px] items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_5px_18px_rgba(8,40,77,0.035)] transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-[0_10px_24px_rgba(8,40,77,0.075)]">

                  {/* Product thumbnail */}
                  <div className="relative h-[84px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-[#edf3fa]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="88px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1 py-1">
                    <h3 className="line-clamp-2 text-xs font-bold leading-snug text-[#08284d] group-hover:text-[#1769d2]">
                      {product.title}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-[10px] leading-[1.5] text-slate-500">
                      {summaries[index]}
                    </p>

                    <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#1769d2]">
                      Explore
                      <ArrowRight size={11} />
                    </span>
                  </div>

                  {/* Relevant product icon at the far edge */}
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center self-center rounded-xl border transition-colors duration-300 ${
                      index % 2 === 0
                        ? "border-blue-100 bg-blue-50 text-[#1769d2] group-hover:border-blue-200 group-hover:bg-blue-100"
                        : "border-rose-100 bg-rose-50 text-[#e11d48] group-hover:border-rose-200 group-hover:bg-rose-100"
                    }`}
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </span>

                  {/* Fine bottom accent */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-8 rounded-r-full transition-all duration-500 group-hover:w-14 ${
                      index % 2 === 0
                        ? "bg-[#1769d2]"
                        : "bg-[#e11d48]"
                    }`}
                  />
                </article>
              </Link>
            </Reveal>
          )
        })}
      </div>

      <Link
        href="/solutions"
        className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#08284d] transition-colors hover:text-[#1769d2]"
      >
        VIEW ALL PRODUCTS & LABS
        <ArrowRight size={13} />
      </Link>
    </div>
  </div>
</section>


{/* ========================================================
    6. HOW WE WORK — IMAGE-LED WORKFLOW
    ======================================================== */}
{/* HOW WE WORK — FROM IDEA TO IMPACT */}
<section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f3f7fc] py-14 sm:py-20 lg:py-24">
  {/* Subtle background atmosphere */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-[100px]" />
    <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-rose-100/50 blur-[100px]" />
    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(8,40,77,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(8,40,77,.035)_1px,transparent_1px)] [background-size:48px_48px]" />
  </div>

  <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-[4vw]">
    {/* Section header */}
    <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48]" />
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#b5122b] sm:text-xs">
              HOW WE WORK
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} y={28}>
          <h2 className="mt-4 text-4xl font-black leading-[0.94] tracking-[-0.06em] text-[#08284d] sm:text-5xl lg:text-6xl">
            FROM IDEA TO{" "}
            <span className="bg-gradient-to-r from-[#1769d2] to-[#e11d48] bg-clip-text text-transparent">
              IMPACT.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} y={16}>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
            Structured execution, from discovery to scale.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} y={14}>
        <div className="flex items-center justify-between gap-5 lg:justify-end">
          
        </div>
      </Reveal>
    </div>

    {/* Connected timeline and photographic cards */}
    <div className="relative mt-10 sm:mt-14">
      <div
        ref={executionRailRef}
        className="relative overflow-x-auto overscroll-x-contain pb-5 pt-9 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
<div className="relative flex w-max items-stretch gap-3 sm:gap-4 xl:grid xl:w-full xl:min-w-0 xl:grid-cols-6 xl:gap-4">
  
  
            {/* Timeline connector */}
          <div
            aria-hidden="true"
className="pointer-events-none absolute left-0 right-0 top-[-25px] h-px bg-gradient-to-r from-[#e11d48]/60 via-[#1769d2]/45 to-[#e11d48]/60"
          />

          {executionSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.07}
              y={22}
            >
<div className="relative w-[76vw] max-w-[290px] shrink-0 pt-0 sm:w-[260px] sm:max-w-none xl:w-full xl:min-w-0 xl:max-w-none">                {/* Timeline marker */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-[31px] left-1/2 z-10 h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2 bg-white transition-all duration-300 ${
                    index === 0 || index === 5
                      ? "border-[#e11d48] group-hover:bg-rose-500"
                      : "border-[#4387ed]"
                  }`}
                />

                {/* Card */}
                <article
className={`group relative flex h-full flex-col overflow-hidden rounded-[18px] border bg-white shadow-[0_8px_24px_rgba(8,40,77,.045)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_38px_rgba(8,40,77,.12)] xl:h-[276px] ${                    index === 0 || index === 5
                      ? "border-rose-100 hover:border-rose-200"
                      : "border-slate-200 hover:border-blue-200"
                  }`}
                >
                  {/* Original image from executionSteps */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e7eef7]">
                    <Image
                      src={step.image}
                      alt={`${step.title}: ${step.desc}`}
                      fill
                      sizes="(max-width: 640px) 76vw, (max-width: 1024px) 260px, 225px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#08284d]/45 via-transparent to-transparent" />

                    {/* Number badge */}
                    <span
                      className={`absolute left-3 top-3 grid h-8 min-w-8 place-items-center rounded-lg border px-1.5 text-[11px] font-black shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${
                        index === 0 || index === 5
                          ? "border-rose-200 bg-white/95 text-[#e11d48]"
                          : "border-blue-200 bg-white/95 text-[#1769d2]"
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Image hover tint */}
                    <div
                      className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                        index === 5
                          ? "bg-rose-500/10"
                          : "bg-blue-500/10"
                      }`}
                    />
                  </div>

                  {/* Card information */}
                  <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-xs font-black tracking-[0.035em] sm:text-sm ${
                          index === 5
                            ? "text-[#b5122b]"
                            : "text-[#08284d]"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 ${
                          index === 0 || index === 5
                            ? "bg-rose-50 text-[#e11d48] group-hover:bg-[#e11d48] group-hover:text-white"
                            : "bg-blue-50 text-[#1769d2] group-hover:bg-[#1769d2] group-hover:text-white"
                        }`}
                      >
                        <ArrowRight size={13} />
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] leading-[1.55] text-slate-500 sm:text-xs">
                      {step.desc}
                    </p>

                    {/* Animated progress accent */}
                    <div className="mt-auto flex gap-1 pt-4">
                      <span
                        className={`h-[3px] w-7 origin-left rounded-full transition-all duration-500 group-hover:w-12 ${
                          index === 0 || index === 5
                            ? "bg-[#e11d48]"
                            : "bg-[#1769d2]"
                        }`}
                      />
                      <span
                        className={`h-[3px] w-2 rounded-full opacity-20 ${
                          index === 0 || index === 5
                            ? "bg-[#e11d48]"
                            : "bg-[#1769d2]"
                        }`}
                      />
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile scroll hint */}
      <p className="mt-1 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:hidden">
        Swipe to explore all six steps →
      </p>
    </div>
  </div>
</section>




{/* ========================================================
    8. WHY CARAWIN?
    ======================================================== */}
<section
  id="why-carawin"
  className="relative isolate overflow-hidden border-y border-slate-200 bg-[#f8faff] py-16 sm:py-20 lg:py-24"
>
  {/* Subtle brand atmosphere */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-100/70 blur-[100px]" />
    <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rose-100/60 blur-[100px]" />
  </div>

  {/* Header: wider layout */}
  <div className="mx-auto grid w-full max-w-[1800px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12 xl:px-16">
    <div>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48]" />
          <p className="kicker text-[var(--crimson)]">
            WHY CARAWIN?
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} y={25}>
        <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.94] tracking-[-0.065em] text-[#08284d] sm:text-6xl lg:text-7xl">
          ONE TECHNOLOGY
          <br />
          ECOSYSTEM.
          <br />
          <span className="bg-gradient-to-r from-[#1769d2] via-[#6260d2] to-[#e11d48] bg-clip-text text-transparent">
            MULTIPLE POSSIBILITIES.
          </span>
        </h2>
      </Reveal>
    </div>

    <Reveal delay={0.18} y={20}>
      <div className="max-w-md pb-2 lg:justify-self-end">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#1769d2]">
          ● BUILT TO WORK TOGETHER
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          We combine deep domain expertise with technology innovation to
          deliver solutions that are integrated, experiential and scalable.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-[#1769d2]" />
          <span className="h-[2px] w-6 bg-[#e11d48]" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
            From ideas to measurable impact
          </span>
        </div>
      </div>
    </Reveal>
  </div>

  {/* FULL-WIDTH CARDS — no carousel, no images */}
  <div className="mx-auto mt-10 grid w-full max-w-[1900px] grid-cols-2 gap-3 px-4 sm:mt-14 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-10 xl:grid-cols-6 xl:gap-4 2xl:gap-5">
    {whyCarawinData.pillars.map((pillar, idx) => {
      const icons = [
        Sparkles,
        Lightbulb,
        Layers,
        Gauge,
        Workflow,
        Globe,
      ]

      const Icon = icons[idx % icons.length]
      const accent = idx === 5

      return (
        <Reveal
          key={pillar.title}
          delay={idx * 0.07}
          y={24}
        >
          <article
            className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(8,40,77,0.10)] sm:min-h-[250px] sm:p-5 lg:min-h-[270px] lg:p-5 xl:min-h-[285px] ${
              accent
                ? "border-rose-200 bg-gradient-to-br from-white to-rose-50/90 hover:border-rose-300"
                : "border-blue-100 bg-white/90 hover:border-blue-300"
            }`}
          >
            {/* Animated top accent */}
            <div
              className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                accent
                  ? "bg-gradient-to-r from-[#e11d48] to-[#fb7185]"
                  : "bg-gradient-to-r from-[#1769d2] to-[#75bdff]"
              }`}
            />

            <div className="flex items-center justify-between gap-2">
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl border transition-all duration-300 group-hover:scale-110 sm:h-12 sm:w-12 ${
                  accent
                    ? "border-rose-200 bg-rose-50 text-[#e11d48] group-hover:bg-rose-100"
                    : "border-blue-100 bg-blue-50 text-[#1769d2] group-hover:border-blue-200 group-hover:bg-blue-100"
                }`}
              >
                <Icon size={21} strokeWidth={1.8} />
              </span>

              <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-slate-300 transition-colors group-hover:text-slate-500">
                0{idx + 1}
              </span>
            </div>

            <h3 className="mt-5 text-sm font-extrabold leading-snug tracking-[-0.025em] text-[#102d50] transition-colors duration-300 group-hover:text-[#1769d2] sm:mt-7 sm:text-base">
              {pillar.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-[13px] sm:leading-6">
              {pillar.desc}
            </p>

            <div className="mt-auto flex items-center justify-between gap-3 pt-5">
              <span
                className={`h-1 w-8 rounded-full transition-all duration-500 group-hover:w-14 ${
                  accent ? "bg-[#e11d48]" : "bg-[#1769d2]"
                }`}
              />
            </div>
          </article>
        </Reveal>
      )
    })}
  </div>

  {/* Closing line */}
  <Reveal delay={0.18} y={12}>
    <div className="mx-auto mt-7 flex w-full max-w-[1900px] flex-col gap-3 border-t border-slate-200 px-5 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      

      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
        <span className="mr-2 text-[#1769d2]">●</span>
        <span className="mr-2 text-violet-500">●</span>
        <span className="mr-3 text-[#e11d48]">●</span>
        ONE CONNECTED ECOSYSTEM
      </p>
    </div>
  </Reveal>
</section>

    </div>
  )
}