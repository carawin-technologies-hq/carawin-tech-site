
"use client"

import { motion } from "motion/react"
import { Reveal } from "@/components/motion-primitives"

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: string
  lede?: string
}) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-card">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="grid-lines h-full w-full" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-accent"
        >
          {eyebrow}
        </motion.p>
        <Reveal>
          <h1 className="max-w-4xl text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </header>
  )
}

