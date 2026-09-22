
"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Reveal } from "@/components/motion-primitives"
import { framework } from "@/lib/content"

export function FrameworkTimeline({ heading = true }: { heading?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
      {heading && (
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              The Engagement Framework
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              A structured, four-stage delivery methodology.
            </h2>
          </Reveal>
        </div>
      )}

      <div ref={ref} className="relative mt-16 lg:mt-20">
        {/* Track */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-border lg:left-1/2 lg:-translate-x-1/2" aria-hidden />
        <motion.div
          style={{ height }}
          className="absolute left-[7px] top-2 w-px bg-accent lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden
        />

        <ol className="space-y-14 lg:space-y-24">
          {framework.map((stage, i) => (
            <li key={stage.step} className="relative pl-10 lg:pl-0">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background lg:left-1/2 lg:-translate-x-1/2" />
              <div
                className={`lg:grid lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:col-start-2 lg:[&>*:first-child]:row-start-1" : ""}`}
              >
                <Reveal className={i % 2 === 1 ? "lg:text-left" : "lg:text-right"}>
                  <div className={i % 2 === 1 ? "lg:pl-16" : "lg:pr-16"}>
                    <span className="font-mono text-sm text-accent">{stage.step}</span>
                    <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight sm:text-3xl">{stage.title}</h3>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:max-w-md lg:inline-block">
                      {stage.body}
                    </p>
                  </div>
                </Reveal>
                <div className="hidden lg:block" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

