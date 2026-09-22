
"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"

export function CapabilitiesCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-primary px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Engage Our Practice</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance font-serif text-3xl font-medium leading-tight text-primary-foreground sm:text-4xl">
            Ready to move from diagnosis to measurable impact?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/75">
            Our practice groups combine deep sector expertise with end-to-end delivery — from strategy design through
            on-ground Program Management Unit leadership.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Schedule a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Our engagement framework
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

