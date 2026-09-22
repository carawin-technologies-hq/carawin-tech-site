
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"

export function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              The Carawin Advisory Edge
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-lg font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Most advisors stop at strategy. We stay until it is running.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              About Bharat Strategix
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
              <Image
                src="/images/advisory-session.png"
                alt="A senior strategy advisory session in progress"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-foreground/80">
              Operating at the convergence of{" "}
              <span className="text-foreground">public policy, deep technology, infrastructure, and capital markets</span>
              , we convert complex systemic challenges into sustainable, measurable economic realities.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Our multidisciplinary cohorts integrate deep industry insight, advanced analytical models, and hands-on
              Program Management Unit leadership to execute critical societal and corporate transformations — bridging
              the gap between strategic intent and operational reality.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

