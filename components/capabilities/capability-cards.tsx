
"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"
import { capabilityPillars, getSector } from "@/lib/content"

export function CapabilityCards() {
  const [active, setActive] = useState(0)
  const pillar = capabilityPillars[active]
  const related = pillar.relatedSectorSlugs
    .map((slug) => getSector(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Four Capability Pillars
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-3xl text-balance font-serif text-3xl font-medium leading-tight md:text-4xl">
          Integrated capabilities that compound across every engagement.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="flex flex-col">
          {capabilityPillars.map((p, i) => {
            const isActive = i === active
            return (
              <button
                key={p.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="group relative border-b border-border py-6 text-left first:border-t"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={`mt-2 block font-serif text-xl font-medium leading-snug transition-colors sm:text-2xl ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={`mt-1 h-5 w-5 shrink-0 transition-all ${
                      isActive ? "text-accent opacity-100" : "opacity-0 -translate-x-2"
                    }`}
                  />
                </div>
                <span
                  className={`absolute -left-4 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-accent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-xl border border-border bg-card p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl font-medium leading-snug text-balance">{pillar.headline}</h3>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{pillar.description}</p>
            <ul className="mt-8 space-y-3">
              {pillar.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            {related.length > 0 && (
              <div className="mt-10 border-t border-border pt-8">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Related Industries
                </p>
                <ul className="mt-4 space-y-2">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/sectors/${s.slug}`}
                        className="group inline-flex items-center gap-2 text-sm text-foreground/75 transition-colors hover:text-accent"
                      >
                        <span className="font-mono text-[0.65rem] text-muted-foreground">
                          {String(s.number).padStart(2, "0")}
                        </span>
                        {s.title.split(",")[0]}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

