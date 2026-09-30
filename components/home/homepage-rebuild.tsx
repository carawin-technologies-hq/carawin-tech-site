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
  GraduationCap,
  Database,
  Bot,
  Cloud,
  Wifi,
  Factory,
  Sprout,
} from "lucide-react"
import { solutionVerticals, whyCarawinData, carawinApproach } from "@/lib/carawin-content"

export function HomepageRebuild() {
  const [activeOrbitNode, setActiveOrbitNode] = useState<string | null>(null)
  const [activeTechNode, setActiveTechNode] = useState<string>("robotics")

  const orbitNodes = [
    {
      id: "education",
      label: "EDUCATION",
      icon: GraduationCap,
      color: "#f43f5e",
      style: { top: "6%", left: "50%", transform: "translate(-50%, -50%)" },
    },
    {
      id: "data",
      label: "DATA",
      icon: Database,
      color: "#38bdf8",
      style: { top: "22%", left: "18%", transform: "translate(-50%, -50%)" },
    },
    {
      id: "robotics",
      label: "ROBOTICS",
      icon: Bot,
      color: "#22d3ee",
      style: { top: "22%", left: "82%", transform: "translate(-50%, -50%)" },
    },
    {
      id: "cloud",
      label: "CLOUD",
      icon: Cloud,
      color: "#0284c7",
      style: { top: "50%", left: "9%", transform: "translate(-50%, -50%)" },
    },
    {
      id: "iot",
      label: "IOT",
      icon: Wifi,
      color: "#10b981",
      style: { top: "50%", left: "91%", transform: "translate(-50%, -50%)" },
    },
    {
      id: "industry",
      label: "INDUSTRY",
      icon: Factory,
      color: "#eab308",
      style: { top: "80%", left: "22%", transform: "translate(-50%, -50%)" },
    },
    {
      id: "agriculture",
      label: "AGRICULTURE",
      icon: Sprout,
      color: "#22c55e",
      style: { top: "78%", left: "80%", transform: "translate(-50%, -50%)" },
    },
  ]

  const stats = [
    { value: "9+", label: "YEARS OF EXPERIENCE", highlight: false },
    { value: "100+", label: "SCHOOLS", highlight: false },
    { value: "25,000+", label: "STUDENTS", highlight: true },
    { value: "6,000+", label: "SCHOOLS IN PIPELINE", highlight: false },
    { value: "3", label: "INTERNATIONAL PROJECTS", highlight: false },
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
    {
      title: "VAYOM",
      image: "/images/home/prod_vayom.png",
      href: "/solutions/ai-software-iot",
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
          1. HERO SECTION & STATS (Dark Tech Grid + Orbital System)
          ======================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#040d1a] pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 163, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 163, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Ambient Radial Lights */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 75% 45%, rgba(0, 102, 204, 0.28) 0%, transparent 55%),
              radial-gradient(circle at 75% 45%, rgba(225, 29, 72, 0.22) 0%, transparent 35%),
              radial-gradient(circle at 20% 30%, rgba(0, 163, 255, 0.15) 0%, transparent 45%)
            `,
          }}
        />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
              {/* Kicker badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--crimson)]/30 bg-[var(--crimson)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[.22em] text-[#ff7185]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff7185] animate-pulse" />
                CARAWIN TECHNOLOGIES
              </div>

              {/* Main Headline (Original Text) */}
              <h1 className="mt-6 text-3xl font-black leading-[1.02] tracking-[-.045em] text-white sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.4rem]">
                INTELLIGENCE.
                <br />
                EXPERIENCE.
                <br />
                <span className="text-[#e11d48]">INNOVATION.</span>
              </h1>

              {/* Subheadline (Original Text) */}
              <p className="mt-5 text-lg font-bold text-slate-100 sm:text-xl lg:text-2xl">
                AI for Learning. Technology for Innovation. Skills for the Future.
              </p>

              {/* Description (Original Text) */}
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                Carawin Technologies builds AI-powered, technology-enabled ecosystems for education, institutions, governments and industries.
              </p>

              {/* Pillars tag list (Original Text) */}
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-200">
                {[
                  "Artificial Intelligence",
                  "Software",
                  "Education Technology",
                  "Virtual STEM",
                  "IoT",
                  "Robotics",
                  "Digital Infrastructure",
                  "Future Skills",
                  "Innovation",
                ].map((item, idx) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#091b35]/80 px-3 py-1.5 text-slate-200 backdrop-blur-sm"
                  >
                    {item}
                    {idx < 8 && <span className="text-[#e11d48]">/</span>}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs font-medium text-slate-400">
                We bring these technologies together to transform ideas into practical solutions.
              </p>

              {/* Ethos Strip (Original Text) */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs font-bold uppercase tracking-[.18em] text-[#ff7185]">
                {["Learn", "Explore", "Experiment", "Build", "Innovate"].map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-4">
                    {step}
                    {i < 4 && <span className="text-slate-500">·</span>}
                  </span>
                ))}
              </div>

              {/* CTAs (Crisp White Text on Secondary Button) */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e11d48] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(225,29,72,0.45)] transition-all duration-300 hover:bg-[#be123c] hover:shadow-[0_0_35px_rgba(225,29,72,0.7)] sm:text-sm"
                >
                  Explore Solutions
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-sm transition-all duration-300 hover:border-white hover:bg-white/20 sm:text-sm"
                >
                  <span className="text-white font-bold">Request a Demonstration</span>
                  <ArrowUpRight size={16} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Right Visual Column: Orbital System Node Graphic (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-[440px] select-none sm:max-w-[490px]">
                {/* Concentric Orbit Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Outer Orbit */}
                  <div className="h-[92%] w-[92%] rounded-full border border-[#1e4976]/35" />
                  {/* Middle Orbit */}
                  <div className="absolute h-[68%] w-[68%] rounded-full border border-[#1e4976]/45" />
                  {/* Inner Orbit */}
                  <div className="absolute h-[44%] w-[44%] rounded-full border border-[#1e4976]/30" />
                </div>

                {/* Center Core Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative flex h-28 w-28 sm:h-34 sm:w-34 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#c81e3a] via-[#881337] to-[#4c0519] border-2 border-[#fb7185]/70 shadow-[0_0_55px_rgba(225,29,72,0.65),inset_0_0_20px_rgba(255,255,255,0.25)] transition-transform duration-300 hover:scale-105">
                    <div className="absolute -inset-2 rounded-full border border-[#e11d48]/40 animate-ping opacity-20 pointer-events-none" />
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      AI
                    </span>
                    <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.22em] text-rose-200 mt-0.5">
                      CORE NODE
                    </span>
                  </div>
                </div>

                {/* Orbiting Satellite Nodes */}
                {orbitNodes.map((node) => {
                  const Icon = node.icon
                  const isActive = activeOrbitNode === node.id

                  return (
                    <div
                      key={node.id}
                      style={node.style}
                      onMouseEnter={() => setActiveOrbitNode(node.id)}
                      onMouseLeave={() => setActiveOrbitNode(null)}
                      className="absolute z-20 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                      <div
                        className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border bg-[#061833]/90 backdrop-blur-md shadow-lg transition-all duration-300 ${
                          isActive
                            ? "border-[#e11d48] shadow-[0_0_20px_rgba(225,29,72,0.6)] scale-110"
                            : "border-blue-400/30 hover:border-blue-400/60"
                        }`}
                      >
                        <Icon size={16} style={{ color: node.color }} />
                      </div>

                      <span
                        className={`mt-1 font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {node.label}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Ecosystem Micro-Banner below the orbital graphic */}
              <div className="mt-4 rounded-xl border border-white/10 bg-[#07162b]/80 p-3.5 text-center backdrop-blur-md">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#ff7185]">
                  Unified Technology Ecosystem
                </span>
                <p className="mt-1 text-sm font-bold text-white tracking-tight">
                  AI × Education × Software × STEM × IoT
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                  Applied technology architectures powering institutional scale, experiential learning and real-world deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM STATS BAR (Screenshot 1)
            ======================================================== */}
        <div className="mt-14 border-t border-white/10 bg-[#020914] py-8 sm:py-10">
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
                  <span className="mt-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOME — INTRODUCTION / ABOUT CARAWIN (Screenshot 2)
          ======================================================== */}
      <section className="border-b border-[var(--border)] bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
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

              {/* 4 Feature Pill Cards (Screenshot 2) */}
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

            {/* Right Visual Card with VR Image (Screenshot 2) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[1.18] w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl">
                <Image
                  src="/images/home/about_vr.png"
                  alt="Carawin Technologies VR Lab and Learning Solutions"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />

                {/* Floating Bottom-Right Badge */}
                <div className="absolute bottom-5 right-5 rounded-2xl border border-white/60 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-md">
                  <p className="text-sm font-black tracking-tight text-[var(--navy)]">
                    Smarter Learning
                  </p>
                  <p className="text-xs font-bold text-[var(--crimson)]">
                    Brighter Future
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intersection and Journey Strip */}
          <div className="mt-14 rounded-2xl border border-[var(--border)] bg-[#f8fafc] p-6 sm:p-10">
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
          4. CARAWIN LABS WIDE BANNER (User's 4th Screenshot)
          ======================================================== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[28px] border border-[#06152b] bg-[#071a33] text-white shadow-2xl">
            <div className="grid items-center lg:grid-cols-12">
              {/* Left Content Area (5 cols) */}
              <div className="relative z-10 p-8 sm:p-12 lg:col-span-5 lg:py-16 lg:pl-14 lg:pr-4">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff7185]">
                  CARAWIN LABS
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
                  LEARN. BUILD.
                  <br />
                  EXPERIMENT. INNOVATE.
                </h2>

                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-300 sm:text-sm">
                  AI • STEM • STEAM • ROBOTICS • IOT • CODING • INNOVATION • SMART CLASS
                </p>

                <div className="mt-8">
                  <Link
                    href="/solutions/ai-software-iot"
                    className="inline-flex items-center gap-2 rounded-full bg-[#e11d48] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(225,29,72,0.45)] transition-all duration-300 hover:bg-[#be123c] hover:shadow-[0_0_35px_rgba(225,29,72,0.7)] sm:text-sm"
                  >
                    EXPLORE CARAWIN LABS →
                  </Link>
                </div>
              </div>

              {/* Right Robotics Image Area (7 cols) */}
              <div className="relative h-80 sm:h-96 lg:col-span-7 lg:h-full lg:min-h-[420px]">
                <Image
                  src="/images/home/carawin_labs_robotics.png"
                  alt="Carawin Labs Robotics and Innovation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover object-[15%_center] lg:object-left"
                />
                {/* Thin edge blend so the student girl is fully and clearly visible */}
                <div className="hidden lg:block absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-[#071a33] to-transparent pointer-events-none z-10" />
                <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#071a33] via-[#071a33]/20 to-transparent pointer-events-none z-10" />
              </div>
            </div>
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

          {/* 6 Products Grid with Crisp HD Assets */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((prod) => (
              <Link
                key={prod.title}
                href={prod.href}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[var(--navy)] sm:text-lg tracking-tight group-hover:text-[var(--crimson)] transition-colors">
                    {prod.title}
                  </h3>
                </div>

                <div className="mt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--crimson)]">
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
          7. OUR TECHNOLOGY (Screenshot 5)
          ======================================================== */}
      <section
        id="technology"
        className="relative overflow-hidden bg-[#040d1a] py-20 text-white sm:py-28"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 163, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 163, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      >
        {/* Ambient Center Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.25) 0%, rgba(0, 102, 204, 0.15) 45%, transparent 70%)
            `,
          }}
        />

        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e11d48]">
              OUR TECHNOLOGY
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              INTELLIGENCE AT THE CORE.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              A single technology ecosystem spanning the digital and physical world.
            </p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            {/* Top Row: AI & Connected Technology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
              <div
                onClick={() => setActiveTechNode("ai")}
                className={`group cursor-pointer rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 ${
                  activeTechNode === "ai"
                    ? "border-[#e11d48]/70 bg-[#07162b] shadow-[0_0_25px_rgba(225,29,72,0.3)]"
                    : "border-white/10 bg-[#07162b]/80 hover:border-white/25 hover:bg-[#07162b]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide text-white">
                      ARTIFICIAL INTELLIGENCE
                    </h3>
                  </div>
                </div>
                <p className="mt-2.5 text-xs text-slate-400">
                  AI • ML • GenAI • NLP • Computer Vision
                </p>
              </div>

              <div
                onClick={() => setActiveTechNode("connected")}
                className={`group cursor-pointer rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 ${
                  activeTechNode === "connected"
                    ? "border-cyan-400/70 bg-[#07162b] shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                    : "border-white/10 bg-[#07162b]/80 hover:border-white/25 hover:bg-[#07162b]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Wifi size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide text-white">
                      CONNECTED TECHNOLOGY
                    </h3>
                  </div>
                </div>
                <p className="mt-2.5 text-xs text-slate-400">
                  IoT • Sensors • Embedded Systems • Edge Computing
                </p>
              </div>
            </div>

            {/* Center Core Engine Badge */}
            <div className="my-10 flex justify-center">
              <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#c81e3a] via-[#881337] to-[#4c0519] border-2 border-[#fb7185] shadow-[0_0_60px_rgba(225,29,72,0.7),inset_0_0_20px_rgba(255,255,255,0.25)] transition-transform duration-300 hover:scale-105">
                <div className="absolute -inset-2.5 rounded-full border border-[#e11d48]/40 animate-pulse pointer-events-none" />
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  AI
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200 mt-1">
                  CORE ENGINE
                </span>
              </div>
            </div>

            {/* Bottom Row: Data & Analytics, Robotics & Automation, Software & Cloud */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div
                onClick={() => setActiveTechNode("data")}
                className={`group cursor-pointer rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 ${
                  activeTechNode === "data"
                    ? "border-blue-400/70 bg-[#07162b] shadow-[0_0_25px_rgba(96,165,250,0.3)]"
                    : "border-white/10 bg-[#07162b]/80 hover:border-white/25 hover:bg-[#07162b]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Database size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide text-white">
                      DATA &amp; ANALYTICS
                    </h3>
                  </div>
                </div>
                <p className="mt-2.5 text-xs text-slate-400">
                  Data Platforms • Analytics • Dashboards • Intelligence
                </p>
              </div>

              <div
                onClick={() => setActiveTechNode("robotics")}
                className="group cursor-pointer rounded-2xl border border-blue-400/40 bg-[#091b35] p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#e11d48]/80 hover:shadow-[0_0_30px_rgba(225,29,72,0.35)] -mt-2 md:-mt-4"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e11d48] shadow-[0_0_8px_#e11d48] animate-pulse" />
                  <h3 className="font-bold text-sm tracking-wide text-white">
                    ROBOTICS &amp; AUTOMATION
                  </h3>
                </div>
                <p className="mt-2.5 text-xs text-slate-300">
                  Robotics • Automation • Smart Devices • Industry 4.0
                </p>
              </div>

              <div
                onClick={() => setActiveTechNode("software")}
                className={`group cursor-pointer rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 ${
                  activeTechNode === "software"
                    ? "border-cyan-400/70 bg-[#07162b] shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                    : "border-white/10 bg-[#07162b]/80 hover:border-white/25 hover:bg-[#07162b]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Cloud size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide text-white">
                      SOFTWARE &amp; CLOUD
                    </h3>
                  </div>
                </div>
                <p className="mt-2.5 text-xs text-slate-400">
                  Mobile • APIs • Cloud • Enterprise Platforms
                </p>
              </div>
            </div>
          </div>
        </div>
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
