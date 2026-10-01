"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  ArrowRight,
  Star,
  Hexagon,
  Lightbulb,
  Zap,
} from "lucide-react"
import { solutionVerticals, whyCarawinData, carawinApproach } from "@/lib/carawin-content"

export function HomepageRebuild() {
  const [activeTechNode, setActiveTechNode] = useState<string>("robotics")

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
      {/* ========================================================
          1. HERO SECTION & STATS
          The clean artwork (hero_bg.png, 2084x754) is the full background
          of the hero banner and all text sits on top of it.
          ======================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#011E42] via-[#011A3E] to-[#001739]">
        {/* ---------- HERO BANNER ---------- */}
        <div className="relative flex flex-col lg:min-h-[calc(100vw/2.764)] lg:justify-center">
          {/* Artwork: below the text on mobile/tablet, full background on desktop */}
          <div className="pointer-events-none relative order-2 aspect-[16/10] w-full overflow-hidden sm:aspect-[2/1] lg:absolute lg:inset-0 lg:z-0 lg:order-none lg:aspect-auto">
            <Image
              src="/images/home/hero_bg.png"
              alt="Carawin Technologies AI & Technology Ecosystem"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-right"
            />
            {/* Soft blend between text block and artwork on mobile/tablet */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#001739] to-transparent lg:hidden" />
            {/* Left shade on desktop so text stays readable over the skyline */}
            <div className="absolute inset-0 hidden bg-gradient-to-r from-[#001739]/80 via-[#001739]/30 to-transparent lg:block lg:[background-size:60%_100%] lg:bg-no-repeat" />
          </div>

          {/* Text content */}
          <div className="container-x relative z-10 order-1 w-full pt-24 pb-6 sm:pt-28 lg:order-none lg:!mx-0 lg:!max-w-none lg:!px-[4vw] lg:pt-[7rem] lg:pb-[2.5vw]">
            <div className="max-w-xl lg:max-w-[44vw]">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.22em] text-white lg:gap-[1.2vw] lg:text-[clamp(10px,0.85vw,18px)]">
                <span>CARAWIN TECHNOLOGIES</span>
                <span className="h-0.5 w-6 bg-[#e11d48] lg:w-[2.6vw]" />
              </div>

              {/* Main Headline */}
              <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-.045em] text-white sm:text-6xl lg:mt-[1vw] lg:text-[clamp(2.75rem,4.2vw,6.5rem)] lg:leading-[0.92]">
                EXPERIENCE<span className="text-white">.</span>
                <br />
                <span className="text-[#e11d48]">INNOVATION.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-4 text-base font-bold leading-snug text-white sm:text-lg lg:mt-[1.1vw] lg:text-[clamp(1rem,1.4vw,2.1rem)]">
                AI for Learning. Technology for Innovation.
                <br className="hidden sm:block" /> Skills for the Future.
              </p>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-white lg:mt-[0.8vw] lg:text-[clamp(0.8rem,1vw,1.5rem)]">
                Carawin Technologies builds AI-powered, technology-enabled ecosystems
                <br className="hidden lg:block" /> for education, institutions, governments and industries.
              </p>

              {/* Pillars tag list (3 / 4 / 2 rows) */}
              <div className="mt-5 flex flex-col gap-1.5 lg:mt-[1vw] lg:gap-[0.45vw]">
                {heroPillRows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex flex-wrap items-center gap-1.5 lg:gap-[0.55vw]">
                    {row.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/25 bg-[#00132e]/70 px-2.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm sm:text-xs lg:gap-[0.5vw] lg:px-[0.9vw] lg:py-[0.45vw] lg:text-[clamp(10px,0.82vw,18px)]"
                      >
                        {item}
                        <span className="text-[#e11d48]">/</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Ethos Strip */}
              <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f43f5e] sm:text-[11px] lg:mt-[1.2vw] lg:gap-x-[1vw] lg:text-[clamp(9px,0.78vw,16px)] lg:tracking-[.3em]">
                {["Learn", "Explore", "Experiment", "Build", "Innovate"].map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-2.5 lg:gap-[1vw]">
                    {step}
                    {i < 4 && <span className="text-white">·</span>}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5 lg:mt-[1.5vw]">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e11d48] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(225,29,72,0.45)] transition-all duration-300 hover:bg-[#be123c] hover:shadow-[0_0_35px_rgba(225,29,72,0.7)] sm:text-sm"
                >
                  Explore Solutions
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-sm transition-all duration-300 hover:border-white hover:bg-white/20 sm:text-sm"
                >
                  <span className="text-white font-bold">Request a Demonstration</span>
                  <ArrowUpRight size={16} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM STATS BAR
            ======================================================== */}
        <div className="relative z-10 mt-0 border-t border-white/10 bg-[#081933]/95 py-8 sm:py-10 backdrop-blur-sm">
          <div className="container-x">
            <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-5">
              {stats.map((st) => (
                <div key={st.label} className="flex flex-col items-center justify-center">
                  <span
                    className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
                      st.highlight ? "text-[#e11d48]" : "text-white"
                    }`}
                  >
                    {st.value}
                  </span>
                  <span className="mt-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOME — INTRODUCTION / ABOUT CARAWIN
          about_bg.png (white -> blue VR artwork) is the background of the
          top block; all original content sits on top of it.
          ======================================================== */}
      <section className="border-b border-[var(--border)] bg-white">
        {/* ---------- TOP BLOCK WITH BACKGROUND IMAGE ---------- */}
        <div className="relative flex flex-col">
          {/* Artwork: below the text on mobile/tablet, full background on desktop */}
          <div className="pointer-events-none relative order-2 aspect-[16/10] w-full overflow-hidden sm:aspect-[2/1] lg:absolute lg:inset-0 lg:z-0 lg:order-none lg:aspect-auto">
            <Image
              src="/images/home/about_bg.png"
              alt="Carawin Technologies VR Lab and Learning Solutions"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-right"
            />
            {/* Soft white blend between text block and artwork on mobile/tablet */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent lg:hidden" />
            {/* Left white shade on desktop so dark text stays readable */}
            <div className="absolute inset-y-0 left-0 hidden w-[55%] bg-gradient-to-r from-white from-40% via-white/60 to-transparent lg:block" />

            {/* Floating Bottom-Right Badge */}
            <div className="absolute bottom-5 right-5 rounded-2xl border border-white/60 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-md lg:bottom-10 lg:right-[6vw]">
              <p className="text-sm font-black tracking-tight text-[var(--navy)]">
                Smarter Learning
              </p>
              <p className="text-xs font-bold text-[var(--crimson)]">
                Brighter Future
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="container-x relative z-10 order-1 py-20 sm:py-28 lg:order-none">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Content Column */}
              <div className="lg:col-span-6">
                <p className="kicker text-[var(--crimson)]">HOME — INTRODUCTION</p>

                <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-[var(--navy)] sm:text-5xl">
                  BUILDING TECHNOLOGY FOR A CHANGING WORLD
                </h2>

                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  The future will require people and organisations to continuously learn, adapt and innovate.
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  <p>
                    Carawin Technologies is an AI, EdTech and technology product development company working across Artificial Intelligence, Education, IoT, Robotics, Electronics and Digital Transformation.
                  </p>
                  <p>
                    Since 2017, we have developed and implemented technology solutions for schools, institutions, government, enterprises and industry.
                  </p>
                </div>

                {/* 4 Feature Pill Cards */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {aboutFeatures.map((feat) => {
                    const Icon = feat.icon
                    return (
                      <div
                        key={feat.title}
                        className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-[var(--crimson)] border border-rose-100 transition-colors group-hover:bg-[var(--crimson)] group-hover:text-white">
                          <Icon size={18} />
                        </div>
                        <span className="mt-2.5 text-xs font-bold text-[var(--navy)] sm:text-sm">
                          {feat.title}
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

        {/* ---------- Intersection and Journey Strip ---------- */}
        <div className="container-x pb-20 pt-14 sm:pb-28">
          <div className="rounded-2xl border border-[var(--border)] bg-[#f8fafc] p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--muted)]">
              Carawin works at the intersection of:
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-sm font-black tracking-tight text-[var(--navy)] sm:text-base">
              {["AI", "EDUCATION", "SOFTWARE", "STEM", "IoT", "SKILLS", "INNOVATION"].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3">
                  <span className="rounded-lg border border-[var(--border)] bg-white px-3 py-1.5 shadow-2xs">
                    {item}
                  </span>
                  {index < 6 && <span className="text-[var(--crimson)] font-bold">×</span>}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-8">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--muted)]">
                We help organisations:
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {[
                  "Understand technology",
                  "Build capability",
                  "Deploy solutions",
                  "Measure outcomes",
                  "Scale impact",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-[var(--navy)]/15 bg-white px-4 py-2 text-xs font-bold text-[var(--navy)] shadow-2xs sm:text-sm">
                      {step}
                    </span>
                    {index < 4 && (
                      <ArrowRight size={14} className="text-[var(--crimson)] shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR TECHNOLOGY PORTFOLIO / FIVE CORE VERTICALS (Screenshot 3)
          ======================================================== */}
      <section className="border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 border-b border-[var(--border)] pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="kicker text-[var(--crimson)]">OUR TECHNOLOGY PORTFOLIO</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-[var(--navy)] sm:text-5xl">
                FIVE CORE VERTICALS
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
              One connected technology ecosystem powering intelligent learning, modern infrastructure and enterprise-grade execution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionVerticals.map((vertical) => (
              <div
                key={vertical.slug}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-[var(--crimson)]/40 hover:shadow-lg sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                      {vertical.index} / VERTICAL
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--crimson)] opacity-70" />
                  </div>

                  <h3 className="mt-5 text-2xl font-black tracking-tight text-[var(--navy)]">
                    {vertical.name}
                  </h3>

                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--crimson)]">
                    {vertical.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {vertical.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {vertical.subItems.slice(0, 4).map((sub) => (
                      <span
                        key={sub}
                        className="rounded-md bg-[#f1f5f9] px-2.5 py-1 text-[11px] font-semibold text-[var(--navy)]"
                      >
                        {sub}
                      </span>
                    ))}
                    {vertical.subItems.length > 4 && (
                      <span className="rounded-md bg-[#f1f5f9] px-2.5 py-1 text-[11px] font-semibold text-[var(--muted)]">
                        +{vertical.subItems.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-8 border-t border-[var(--border)] pt-5">
                  <Link
                    href={vertical.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--navy)] transition group-hover:text-[var(--crimson)]"
                  >
                    Explore Details
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Overview / Ecosystem Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[var(--navy)] bg-[var(--navy)] p-7 text-white sm:p-8">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#ff7185]">
                  ECOSYSTEM INTEGRATION
                </p>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-white">
                  ONE ECOSYSTEM. MULTIPLE POSSIBILITIES.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  From AI tutors and virtual simulations to physical robotics labs, custom industrial IoT, and statewide policy advisory — Carawin connects all 5 verticals into one coherent delivery framework.
                </p>
              </div>

              <div className="mt-8 border-t border-white/15 pt-5">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition hover:text-[#ff7185]"
                >
                  View All Solutions
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CARAWIN LABS WIDE BANNER (Learn. Build. Experiment. Innovate.)
          ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#071832] text-white border-y border-[#0f294d]">
        <div className="w-full grid lg:grid-cols-12 items-stretch min-h-[380px] lg:min-h-[440px]">
          {/* Left Content Area (5 cols) */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-12 lg:col-span-5 lg:py-16 lg:pl-16 xl:pl-24 bg-[#071832]">
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
                className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(37,99,235,0.45)] transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95 sm:text-sm"
              >
                EXPLORE CARAWIN LABS →
              </Link>
            </div>
          </div>

          {/* Right Image Area (7 cols) with Crystal Clear 4K Image */}
          <div className="relative h-80 sm:h-96 lg:col-span-7 lg:h-full lg:min-h-[440px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full lg:[clip-path:polygon(7%_0,100%_0,100%_100%,0%_100%)]">
              <Image
                src="/images/home/carawin_labs_students.png"
                alt="Carawin Labs STEM & Robotics Students Collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Seamless edge blend on large screens */}
            <div className="hidden lg:block absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-[#071832] via-[#071832]/60 to-transparent pointer-events-none z-10" />
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#071832] via-[#071832]/25 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR PRODUCTS & LABS (Ultra Crisp 4K Images)
          ======================================================== */}
      <section id="products" className="border-b border-[var(--border)] bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
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
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
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
      <section className="border-b border-[var(--border)] bg-[#f8fafc] py-20 sm:py-28">
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
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
            {executionSteps.map((step) => (
              <div
                key={step.number}
                className="group flex flex-col items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
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

                  <h3 className="mt-4 font-mono text-sm font-black tracking-wider text-[var(--navy)] uppercase">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
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
        <Image
          src="/images/home/tech_orbital.jpg"
          alt="Our technology ecosystem with AI at the core, connected to artificial intelligence, connected technology, data and analytics, software and cloud, and robotics and automation."
          width={1376}
          height={768}
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* ========================================================
          8. WHY CARAWIN? (Original Content)
          ======================================================== */}
      <section className="border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="kicker text-[var(--crimson)]">WHY CARAWIN?</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-[var(--navy)] sm:text-5xl">
              {whyCarawinData.headline}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCarawinData.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-7 shadow-2xs sm:p-8"
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