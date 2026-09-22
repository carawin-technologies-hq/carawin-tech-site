
"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { sectors, practiceGroups, type PracticeGroupId } from "@/lib/content"

type Filter = "all" | PracticeGroupId

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Sectors" },
  { id: "government", label: "Government & Sovereign" },
  { id: "corporate", label: "Corporate & Finance" },
  { id: "digital", label: "Technology & AI" },
  { id: "infrastructure", label: "Infrastructure & Energy" },
]

export function SectorsGrid() {
  const [filter, setFilter] = useState<Filter>("all")
  const visible = sectors.filter((s) => filter === "all" || s.group === filter)

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = filter === f.id
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`relative rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((s) => (
            <motion.div
              key={s.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/sectors/${s.slug}`}
                className="group flex h-full flex-col justify-between bg-card p-7 transition-colors hover:bg-secondary"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">{String(s.number).padStart(2, "0")}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <h3 className="mt-6 text-balance font-serif text-xl font-medium leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <span className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  {practiceGroups[s.group].label}
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

