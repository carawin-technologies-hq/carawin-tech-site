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
} from "lucide-react"
import { solutionVerticals, whyCarawinData, carawinApproach } from "@/lib/carawin-content"
import { TechOrbit } from "./tech-orbit"
import { Reveal } from "@/components/motion-primitives"

export function HomepageRebuild() {
  const [activeTechNode, setActiveTechNode] = useState<string>("robotics")
  const capabilityRailRef = useRef<HTMLDivElement | null>(null)

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
      image: "/images/home/prod_ai_education.png",
      href: "/solutions/ai-in-education",
    },
    {
      title: "AI Tutor",
      image: "/images/home/prod_ai_tutor.png",
      href: "/ai",
    },
    {
      title: "Adaptive Learning",
      image: "/images/home/prod_adaptive_learning.png",
      href: "/solutions/ai-in-education",
    },
    {
      title: "Virtual STEM Lab",
      image: "/images/home/prod_stem_lab.png",
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
    src: "/images/home/ai.jpg",
    alt: "Technology and digital learning",
  },
  {
    src: "/images/home/transformation.jpg",
    alt: "Students using technology in a learning environment",
  },
  {
    src: "/images/home/software.jpg",
    alt: "Student using digital technology",
  },
  {
    src: "/images/home/iot.jpg",
    alt: "Industrial technology and infrastructure",
  },
  {
    src: "/images/home/education.jpg",
    alt: "Enterprise technology and digital transformation",
  },
  {
  src: "/images/home/one-ecosystem.jpg",
  alt: "Carawin ecosystem integration",
},
]


  const executionSteps = [
    {
      number: "01",
      title: "DISCOVER",
      desc: "Understand problem & opportunity",
      highlight: true,
    },
    {
      number: "02",
      title: "DESIGN",
      desc: "Create product & architecture",
      highlight: false,
    },
    {
      number: "03",
      title: "DEVELOP",
      desc: "Build platform, product or solution",
      highlight: false,
    },
    {
      number: "04",
      title: "PILOT",
      desc: "Validate in real-world environments",
      highlight: false,
    },
    {
      number: "05",
      title: "DEPLOY",
      desc: "Implement, integrate & operationalize",
      highlight: false,
    },
    {
      number: "06",
      title: "SCALE",
      desc: "Expand across users & markets",
      highlight: true,
    },
  ]

  return (
    <div className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
<section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#011E42] via-[#011A3E] to-[#001739]">
{/* ========================================================
    HERO + INTEGRATED STATS
    ======================================================== */}

<div className="relative min-h-0 overflow-hidden lg:min-h-[100svh]">

  {/* ONE SINGLE BACKGROUND FOR THE ENTIRE HERO */}
  <div className="pointer-events-none absolute inset-0 z-0">

    <Image
      src="/images/home/BG-IMG-2.png"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />

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
            EXPERIENCE<span className="text-white">.</span>
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
          about_bg.png (white -> blue VR artwork) is the background of the
          top block; all original content sits on top of it.
          ======================================================== */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#011E42] via-[#011A3E] to-[#001739]">
  {/* ---------- TOP BLOCK WITH BACKGROUND IMAGE ---------- */}
        <div className="relative min-h-[70vw] sm:min-h-[55vw] lg:min-h-0">
          {/* Artwork: always a full background layer at all screen sizes */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/home/about_bg.png"
              alt="Carawin Technologies VR Lab and Learning Solutions"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/40 to-transparent sm:h-40 lg:h-48" />
    

            {/* Left white shade so dark text stays readable at all sizes */}
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white from-30% via-white/80 via-55% to-transparent sm:from-white sm:from-35% sm:via-white/70 sm:via-55% lg:w-[55%] lg:from-white lg:from-40% lg:via-white/60" />

            
          </div>

          {/* Content */}
          <div className="container-x relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Content Column */}
              <div className="lg:col-span-6">
                <Reveal>
  <p className="kicker text-[var(--crimson)]">
    HOME — INTRODUCTION
  </p>
</Reveal>

<Reveal delay={0.08} y={45}>
  <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-[var(--navy)] sm:text-5xl">
    BUILDING TECHNOLOGY FOR A CHANGING WORLD
  </h2>
</Reveal>

                <Reveal delay={0.16} y={25}>
  <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
    The future will require people and organisations to continuously learn, adapt and innovate.
  </p>
</Reveal>

<Reveal delay={0.24} y={25}>
  <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      <p>
                    Carawin Technologies is an AI, EdTech and technology product development company working across Artificial Intelligence, Education, IoT, Robotics, Electronics and Digital Transformation.
                  </p>
                  <p>
                    Since 2017, we have developed and implemented technology solutions for schools, institutions, government, enterprises and industry.
                  </p>
                </div>
</Reveal>
                {/* 4 Feature Pill Cards */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
                  {aboutFeatures.map((feat) => {
                    const Icon = feat.icon
                    return (
                      <div
                        key={feat.title}
className="group flex min-w-0 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-[#f8fafc] p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md sm:p-4"                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-[var(--crimson)] border border-rose-100 transition-colors group-hover:bg-[var(--crimson)] group-hover:text-white">
                          <Icon size={18} />
                        </div>
<span className="mt-2.5 text-[11px] font-bold leading-tight text-[var(--navy)] sm:text-sm">                          {feat.title}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Discover Carawin CTA */}
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Discover Carawin
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right column intentionally empty so the background artwork shows through */}
              <div className="hidden lg:col-span-6 lg:block" />
            </div>
          </div>
        </div>


<div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-28 bg-gradient-to-b from-transparent via-white/20 to-white sm:h-36 lg:h-44" />
</section>
{/* ---------- Editorial Technology Statement ---------- */}
<section className="border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
  <div className="container-x">

<div className="max-w-[1280px]">
      {/* Left editorial label */}
      <Reveal>
  <div className="flex items-center gap-3">
    <span className="h-2 w-2 rounded-full bg-[#E11D48]" />

    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
      WHAT WE BUILD
    </p>
  </div>

  <div className="mt-5 h-px w-20 bg-[#00AEEF]" />
</Reveal>

      {/* Main statement */}
      <div>
        <Reveal delay={0.08} y={45}>
<h2 className="mt-10 max-w-[980px] text-4xl font-black leading-[0.94] tracking-[-0.045em] text-[#061A35] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
  WE CONNECT
  <br />
  <span className="text-[#0077C8]">TECHNOLOGY,</span>
  <br />
  PEOPLE AND REAL-WORLD
  <br />
  <span className="text-[#E11D48]">OUTCOMES.</span>
</h2>
        </Reveal>

        <Reveal delay={0.18} y={30}>
<p className="mt-8 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">            From intelligent learning systems to digital infrastructure,
            robotics and enterprise technology, Carawin builds technology
            that moves from idea to implementation and measurable impact.
          </p>
        </Reveal>

        <Reveal delay={0.28} y={20}>
<div className="mt-10 pt-6 lg:mt-14">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#667892] sm:gap-x-8 sm:text-xs">
      <span>AI</span>
      <span>Education</span>
      <span>Software</span>
      <span>IoT</span>
      <span>Robotics</span>
      <span>Digital Transformation</span>
    </div>
  </div>
</Reveal>
      </div>

    </div>
  </div>
</section>
{/* ========================================================
    3. CAPABILITIES
    ======================================================== */}
<section className="border-b border-slate-200 bg-[#f7f9fc] py-20 sm:py-24 lg:py-32">
  <div className="container-x">

    {/* Section header */}
    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">

      <Reveal>
  <div className="flex items-center gap-3">
    <span className="h-2 w-2 rounded-full bg-[#E11D48]" />

    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#E11D48] sm:text-xs">
      CAPABILITIES
    </p>
  </div>
</Reveal>

      <Reveal delay={0.08} y={35}>
  <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#061A35] sm:text-5xl lg:text-6xl">
    TECHNOLOGY
    <br />
    THAT MOVES
    <span className="text-[#0077C8]"> WITH YOU.</span>
  </h2>
</Reveal>

    </div>

{/* Capability carousel */}
<div className="relative mt-14 sm:mt-16 lg:mt-20">

  {/* Navigation arrows */}
  <div className="mb-5 flex items-center justify-end gap-2 sm:mb-6">

    <button
      type="button"
      onClick={() => scrollCapabilities(-1)}
      aria-label="Previous capability"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#061A35]/15 bg-white text-[#061A35] transition-all duration-300 hover:border-[#061A35] hover:bg-[#061A35] hover:text-white"
    >
      <ArrowLeft size={18} />
    </button>

    <button
      type="button"
      onClick={() => scrollCapabilities(1)}
      aria-label="Next capability"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#061A35]/15 bg-white text-[#061A35] transition-all duration-300 hover:border-[#061A35] hover:bg-[#061A35] hover:text-white"
    >
      <ArrowRight size={18} />
    </button>

  </div>


  {/* Scrollable rail */}
  <div
    ref={capabilityRailRef}
    className="capability-marquee-shell"
  >

    <div className="capability-marquee">

      {solutionVerticals.map((vertical, index) => {

        const image =
          capabilityImages[index % capabilityImages.length]

        return (
          <Link
            key={vertical.slug}
            href={vertical.href}
            className="capability-card group"
          >

            <div className="capability-card-media">

              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 420px"
                className="object-cover opacity-[0.70] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061A35] via-[#061A35]/35 to-transparent" />


              {/* Number */}
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#E11D48]" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                  {vertical.index}
                </span>
              </div>


              {/* Content */}
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">

                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#65C7FF] sm:text-[10px]">
                  {vertical.tagline}
                </p>

                <h3 className="mt-2 text-2xl font-black leading-none tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                  {vertical.name}
                </h3>

                <p className="mt-3 max-w-sm text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                  {vertical.desc}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">

                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/65 sm:text-[10px]">
                    Explore capability
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#061A35] sm:h-10 sm:w-10">
                    <ArrowUpRight size={16} />
                  </span>

                </div>

              </div>

            </div>

          </Link>
        )
      })}


      {/* ECOSYSTEM INTEGRATION CARD */}
<div className="capability-card group">

  <div className="capability-card-media">

    <Image
      src="/images/home/one-ecosystem.jpg"
      alt="Carawin ecosystem integration"
      fill
      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 420px"
      className="object-cover opacity-[0.45]"
    />

    <div className="absolute inset-0 bg-[#061A35]/80" />

    <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white sm:p-8">

      <div>

        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF7185]">
          ECOSYSTEM INTEGRATION
        </p>

        <h3 className="mt-5 text-3xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl">
          ONE ECOSYSTEM.
          <br />
          MULTIPLE
          <br />
          POSSIBILITIES.
        </h3>

        <p className="mt-5 max-w-md text-sm leading-6 text-white/75 sm:text-base">
          From AI tutors and virtual simulations to physical robotics
          labs, custom industrial IoT, and statewide policy advisory —
          Carawin connects all 5 verticals into one coherent delivery
          framework.
        </p>

      </div>

      <div className="border-t border-white/20 pt-5">

        <Link
          href="/solutions"
          className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white transition hover:text-[#FF7185]"
        >
          VIEW ALL SOLUTIONS
          <ArrowUpRight size={16} />
        </Link>

      </div>

    </div>

  </div>

</div>
      

    </div>

  </div>

</div>


  </div>
</section>

      {/* ========================================================
          4. CARAWIN LABS WIDE BANNER (Learn. Build. Experiment. Innovate.)
          ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#071832] text-white border-y border-[#0f294d]">
        <div className="relative w-full min-h-[380px] lg:min-h-[440px]">
          {/* Background Image — always fills the entire section */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 w-full h-full lg:[clip-path:polygon(7%_0,100%_0,100%_100%,0%_100%)]">
              <Image
                src="/images/home/carawin_labs_students.png"
                alt="Carawin Labs STEM & Robotics Students Collaborating"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Gradient overlay so text is readable at all sizes */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071832] from-20% via-[#071832]/80 via-50% to-[#071832]/20 sm:from-[#071832] sm:from-15% sm:via-[#071832]/70 sm:via-45% lg:from-[#071832] lg:from-10% lg:via-[#071832]/60 lg:via-40% lg:to-transparent pointer-events-none z-10" />
          </div>

          {/* Left Content Area — overlays the image */}
          <div className="relative z-20 flex flex-col justify-center px-6 py-12 sm:px-12 lg:py-16 lg:pl-16 xl:pl-24 max-w-2xl">
            {/* Subtle ambient glow behind text */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#38bdf8]">
              CARAWIN LABS
            </span>

            <h2 className="relative z-10 mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              LEARN. BUILD. EXPERIMENT.
              <br />
              INNOVATE.
            </h2>

            <p className="relative z-10 mt-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#93c5fd] leading-relaxed">
              AI • STEM • STEAM • ROBOTICS • IOT • CODING
              <br />
              INNOVATION • SMART CLASS
            </p>

            <div className="relative z-10 mt-8">
              <Link
                href="/solutions/ai-software-iot"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(37,99,235,0.45)] transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95 sm:text-sm">
                EXPLORE CARAWIN LABS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR PRODUCTS & LABS (Ultra Crisp 4K Images)
          ======================================================== */}
      <section id="products" className="border-b border-[var(--border)] bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="flex flex-row justify-between gap-4 items-end">
            <div>
              <p className="kicker text-[var(--crimson)]">OUR PRODUCTS &amp; LABS</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl lg:text-[2.75rem]">
                FROM IDEAS TO PRODUCTS.
              </h2>
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--navy)] transition-colors hover:text-[var(--crimson)]"
            >
              VIEW ALL PRODUCTS &amp; LABS →
            </Link>
          </div>

          {/* 5 Products Grid (5 cols on desktop) */}
          <div className="mt-10 grid grid-cols-5 gap-2 sm:gap-3.5 lg:gap-4">
            {products.map((prod) => (
              <Link
                key={prod.title}
                href={prod.href}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 text-xs sm:text-sm font-bold text-[var(--navy)] tracking-tight leading-snug group-hover:text-[var(--crimson)] transition-colors">
                    {prod.title}
                  </h3>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--crimson)]">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. HOW WE WORK / STRUCTURED EXECUTION (User's 5th Screenshot)
          ======================================================== */}
      <section className="border-b border-[var(--border)] bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--crimson)]">
              HOW WE WORK
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl lg:text-[2.75rem]">
              FROM IDEA TO IMPACT.
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Structured Execution From Discovery to Scale
            </p>
          </div>

          {/* 6 Step Cards in a Single Row / Responsive Grid (User's 5th Screenshot) */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {executionSteps.map((step) => (
              <div
                key={step.number}
                className="group flex min-w-0 flex-col items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-6"
              >
                <div className="flex flex-col items-center">
                  {/* Step Number Badge */}
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-black ${
                      step.highlight
                        ? "bg-rose-50 text-[var(--crimson)] border border-rose-200"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {step.number}
                  </div>

                  <h3 className="mt-4 break-words font-mono text-xs font-black tracking-wide text-[var(--navy)] uppercase sm:text-sm sm:tracking-wider">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. OUR TECHNOLOGY — orbital ecosystem visual
          ======================================================== */}
      <section id="technology" className="relative overflow-hidden bg-[#061428]">
        <h2 className="sr-only">Our Technology. Intelligence at the core.</h2>
        <TechOrbit />
      </section>

      {/* ========================================================
          8. WHY CARAWIN? (Original Content)
          ======================================================== */}
<section className="bg-white py-16 sm:py-20 lg:py-24">       
   <div className="container-x">
          <div className="max-w-3xl">
            <p className="kicker text-[var(--crimson)]">WHY CARAWIN?</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-[var(--navy)] sm:text-5xl">
              {whyCarawinData.headline}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {whyCarawinData.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-2xs sm:p-7 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                    0{idx + 1} / PILLAR
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[var(--crimson)]" />
                </div>
                <h3 className="mt-4 text-xl font-black tracking-tight text-[var(--navy)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}