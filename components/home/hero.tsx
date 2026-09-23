"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-84px)] overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />

      <div className="container-x relative z-10 flex min-h-[calc(100svh-84px)] flex-col justify-between py-16 sm:py-20 lg:py-24">
        {/* Two-Column Grid: Text Left, Stock Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & CTAs (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-2)] text-xs font-semibold uppercase tracking-wider text-[var(--navy)] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[var(--crimson)]" />
              Carawin Technologies Pvt. Ltd.
            </div>

            <h1 className="display text-slate-900 leading-[1.08] tracking-tight">
              Building the intelligent{" "}
              <span className="text-[var(--crimson)]">infrastructure</span>
              <br />
              <span className="text-[var(--foreground)]">for the future of education.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Carawin brings together AI, learning, education infrastructure, data and human capability to transform how students learn, teachers teach and institutions build the future of education.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/solutions" className="btn-primary">
                Explore Solutions <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Carawin <ArrowUpRight size={16} />
              </Link>
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-[.18em] text-[var(--muted)] font-semibold">
              AI · Learning · Career · Infrastructure · Data · Human Capability
            </p>
          </div>

          {/* Right Column: Stock Photography Hero Visual (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-2.5 shadow-xl sm:p-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/home-hero-stock.jpg"
                    alt="Carawin Technologies AI Education and Smart Classroom Innovation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  {/* Subtle dark gradient overlay at bottom for readability of badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-semibold text-white">Future-Ready Classrooms</span>
                    </div>
                    <span className="text-[11px] text-slate-200">Adaptive AI & Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-12 border-t border-[var(--border)] mt-12">
          <div className="text-xs uppercase tracking-[.18em] text-[var(--muted)] font-semibold">
            Learn · Discover · Develop · Teach · Build · Transform
          </div>
          <a
            href="#who-we-serve"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--muted)] hover:text-[var(--crimson)] transition"
          >
            Discover the ecosystem <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
