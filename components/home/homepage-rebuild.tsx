"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { solutionVerticals, whyCarawinData, carawinApproach } from "@/lib/carawin-content"

export function HomepageRebuild() {
  return (
    <div className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32 lg:py-36">
        <div className="absolute inset-0 grid-fade opacity-30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--crimson)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[var(--navy)]/5 blur-3xl" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--crimson)]/20 bg-[var(--crimson)]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[.22em] text-[var(--crimson)]">
                CARAWIN TECHNOLOGIES
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[.96] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-[4.6rem]">
                INTELLIGENCE. EXPERIENCE. INNOVATION.
              </h1>

              <p className="mt-5 text-xl font-bold text-[var(--navy)] sm:text-2xl">
                AI for Learning. Technology for Innovation. Skills for the Future.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Carawin Technologies builds AI-powered, technology-enabled ecosystems for education, institutions, governments and industries.
              </p>

              {/* Pillars tag list */}
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--navy)]">
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
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-white px-3 py-1.5 shadow-2xs"
                  >
                    {item}
                    {idx < 8 && <span className="text-[var(--crimson)]">/</span>}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs font-medium text-[var(--muted)]">
                We bring these technologies together to transform ideas into practical solutions.
              </p>

              {/* Ethos Strip */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs font-bold uppercase tracking-[.18em] text-[var(--crimson)]">
                {["Learn", "Explore", "Experiment", "Build", "Innovate"].map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-4">
                    {step}
                    {i < 4 && <span className="text-[var(--muted)]/40">·</span>}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/solutions" className="btn-primary">
                  Explore Solutions
                  <ArrowUpRight size={16} />
                </Link>
                <Link href="/demo" className="btn-secondary">
                  Request a Demonstration
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Visual Hero Panel */}
            <div className="relative mx-auto w-full max-w-[580px]">
              <div className="relative aspect-[1.12] overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-3 shadow-[0_24px_70px_rgba(0,33,71,.12)]">
                <div className="relative h-full overflow-hidden rounded-[20px]">
                  <Image
                    src="/images/home-hero-stock.jpg"
                    alt="Carawin Technology Ecosystem"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 580px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a32]/90 via-[#061a32]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#ff7185]">
                      Unified Technology Ecosystem
                    </span>
                    <p className="mt-2 text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                      AI × Education × Software × STEM × IoT
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/70">
                      Applied technology architectures powering institutional scale, experiential learning and real-world deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOME — INTRODUCTION
          ======================================================== */}
      <section className="border-b border-[var(--border)] bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="kicker text-[var(--crimson)]">HOME — INTRODUCTION</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-[var(--navy)] sm:text-5xl">
              BUILDING TECHNOLOGY FOR A CHANGING WORLD
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              The future will require people and organisations to continuously learn, adapt and innovate.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[#f8fafc] p-6 sm:p-10">
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

            <div className="mt-10 border-t border-[var(--border)] pt-8">
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
          3. FIVE CORE VERTICALS
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

            {/* Overview Card */}
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
          4. THE CARAWIN APPROACH
          ======================================================== */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="kicker text-[var(--crimson)]">{carawinApproach.title}</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-[var(--navy)] sm:text-5xl">
              {carawinApproach.headline}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Learning Paradigm Comparison */}
            <div className="rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-7 sm:p-9">
              <h3 className="text-xs font-bold uppercase tracking-[.2em] text-[var(--muted)]">
                Learning Framework Transformation
              </h3>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold text-[var(--muted)]">
                    {carawinApproach.traditional.title}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs font-bold text-[var(--muted)]">
                    {carawinApproach.traditional.steps.map((st, i) => (
                      <span key={st} className="inline-flex items-center gap-2">
                        <span className="line-through decoration-[var(--crimson)]/60 rounded bg-neutral-200 px-3 py-1 text-neutral-600">
                          {st}
                        </span>
                        {i < carawinApproach.traditional.steps.length - 1 && <span>→</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[var(--border)] pt-6">
                  <p className="text-xs font-bold text-[var(--crimson)]">
                    {carawinApproach.carawinLearning.title}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs font-black text-[var(--navy)]">
                    {carawinApproach.carawinLearning.steps.map((st, i) => (
                      <span key={st} className="inline-flex items-center gap-2">
                        <span className="rounded-md border border-[var(--navy)]/15 bg-white px-3 py-1.5 shadow-2xs">
                          {st}
                        </span>
                        {i < carawinApproach.carawinLearning.steps.length - 1 && (
                          <span className="text-[var(--crimson)]">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Organisation Journey */}
            <div className="rounded-2xl border border-[var(--navy)] bg-[var(--navy)] p-7 text-white sm:p-9">
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#ff7185]">
                {carawinApproach.organisationJourney.title}
              </p>
              <h3 className="mt-3 text-xl font-black tracking-tight text-white sm:text-2xl">
                Structured Execution From Discovery to Scale
              </h3>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {carawinApproach.organisationJourney.steps.map((step, idx) => (
                  <div
                    key={step}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="font-mono text-[10px] font-bold text-[#ff7185]">
                      0{idx + 1}
                    </span>
                    <p className="mt-1 font-mono text-sm font-bold text-white tracking-wider">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHY CARAWIN?
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

      {/* ========================================================
          6. HOME — FINAL CTA
          ======================================================== */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[28px] border border-[#071a33] bg-[#071a33] px-7 py-16 text-white shadow-xl sm:px-14 sm:py-20">
            <div className="absolute inset-0 grid-fade opacity-10" />
            <div className="relative max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ff7185]">
                HOME — FINAL CTA
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-6xl">
                WHAT ARE YOU TRYING TO BUILD?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Whether you are a government department, school, university, industry, CSR organisation, startup or institution, tell us about your challenge.
              </p>
              <p className="mt-4 font-mono text-sm font-bold uppercase tracking-wider text-white">
                LET&apos;S EXPLORE WHAT TECHNOLOGY CAN DO.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/demo"
                  className="btn-secondary border-white/20 bg-white/5 text-white hover:border-white hover:text-white"
                >
                  Request a Demo
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
