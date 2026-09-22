
"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives"
import { capabilities } from "@/lib/content"

export function CapabilitiesPreview() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" />
                Cross-Sector Capability Matrix
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                We never analyse problems in isolation.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Explore capabilities <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {capabilities.map((c) => (
            <StaggerItem key={c.title} className="bg-card p-8 lg:p-10">
              <h3 className="font-serif text-xl font-medium tracking-tight">{c.title}</h3>
              <ul className="mt-6 space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

