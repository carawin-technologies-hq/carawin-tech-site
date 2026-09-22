
"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"
import { FrameworkTimeline } from "@/components/framework-timeline"
import { practiceGroups, sectors, type Sector } from "@/lib/content"

const groupImage: Record<string, string> = {
  government: "/images/sector-government.png",
  corporate: "/images/sector-industry.png",
  digital: "/images/sector-digital.png",
  infrastructure: "/images/sector-energy.png",
}

export function SectorDetail({ sector }: { sector: Sector }) {
  const group = practiceGroups[sector.group]
  const related = sectors.filter((s) => s.group === sector.group && s.slug !== sector.slug).slice(0, 3)

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={groupImage[sector.group] || "/placeholder.svg"}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
          <Link
            href="/sectors"
            className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Sectors
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            <span>{String(sector.number).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-accent/50" />
            <span>{group.label}</span>
          </motion.div>

          <Reveal>
            <h1 className="mt-6 max-w-4xl text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              {sector.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {sector.intro}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Service Offerings
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {sector.services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.05}>
              <div className="flex h-full flex-col bg-card p-8">
                <span className="font-mono text-xs text-accent">{`S${i + 1}`}</span>
                <h3 className="mt-5 text-balance font-serif text-xl font-medium leading-snug">{svc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{svc.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Framework */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="max-w-2xl text-balance font-serif text-3xl font-medium leading-tight md:text-4xl">
              How we deliver in {sector.title.split(",")[0]}
            </h2>
          </Reveal>
          <div className="mt-14">
            <FrameworkTimeline />
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-serif text-2xl font-medium">Engage this practice</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{group.blurb}</p>
            <a
              href={`mailto:${group.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
            >
              {group.email} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {related.length > 0 && (
            <div>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Related Sectors
              </h3>
              <div className="divide-y divide-border border-y border-border">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/sectors/${r.slug}`}
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
                  >
                    <span className="text-balance font-serif text-lg leading-snug">{r.title}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </article>
  )
}

