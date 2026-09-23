
"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"
import { sectors, practiceGroups, type PracticeGroupId } from "@/lib/content"

const groupImages: Record<PracticeGroupId, string> = {
  government: "/images/sector-government.svg",
  corporate: "/images/sector-industry.svg",
  digital: "/images/sector-digital.svg",
  infrastructure: "/images/sector-energy.svg",
}

const order: PracticeGroupId[] = ["government", "corporate", "digital", "infrastructure"]

export function SectorsShowcase() {
  const [active, setActive] = useState<PracticeGroupId>("government")
  const activeSectors = sectors.filter((s) => s.group === active)

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              24 Deployment Cohorts
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Four integrated practice groups. One delivery engine.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Link
            href="/sectors"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            All sectors <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Group selector */}
        <div className="flex flex-col">
          {order.map((gid) => {
            const g = practiceGroups[gid]
            const isActive = gid === active
            return (
              <button
                key={gid}
                onMouseEnter={() => setActive(gid)}
                onClick={() => setActive(gid)}
                className="group relative border-b border-border py-6 text-left first:border-t"
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`font-serif text-xl font-medium transition-colors sm:text-2xl ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {g.label}
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition-all ${
                      isActive ? "text-accent opacity-100" : "opacity-0 -translate-x-2"
                    }`}
                  />
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden text-sm text-muted-foreground"
                    >
                      <span className="block pt-3">{g.blurb}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
                <span
                  className={`absolute -left-4 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-accent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Preview panel */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={groupImages[active]} alt={practiceGroups[active].label} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
            >
              {activeSectors.map((s) => (
                <li key={s.slug} className="bg-card">
                  <Link
                    href={`/sectors/${s.slug}`}
                    className="group flex items-start gap-3 p-4 transition-colors hover:bg-secondary"
                  >
                    <span className="font-mono text-xs text-accent">{String(s.number).padStart(2, "0")}</span>
                    <span className="text-sm font-medium leading-snug text-balance text-foreground/85 group-hover:text-foreground">
                      {s.title.split(",")[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

