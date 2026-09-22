
"use client"

import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives"
import { CountUp } from "@/components/count-up"
import { advisoryEdge, stats } from "@/lib/content"

export function EdgeStats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
            We partner with clients to move from intent to impact.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advisoryEdge.map((item, i) => (
            <StaggerItem key={item.title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-serif text-xl font-medium leading-snug text-balance">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-14 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center sm:text-left">
              <p className="font-serif text-5xl font-medium tracking-tight text-foreground lg:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

