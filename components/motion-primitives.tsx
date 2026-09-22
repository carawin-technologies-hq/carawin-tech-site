
"use client"

import { motion, useInView, type Variants } from "motion/react"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

/** Reveals children upward with a soft fade when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Staggered container for lists of children. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
}: {
  children: ReactNode
  className?: string
  delay?: number
  gap?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" })
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  }
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, y = 20 }: { children: ReactNode; className?: string; y?: number }) {
  const item: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

/** Splits a line of text into words and reveals them in sequence. */
export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const words = text.split(" ")
  const MotionTag = motion[Tag] as typeof motion.span
  return (
    <MotionTag ref={ref} className={cn("inline-block", className)} aria-label={text}>
      {words.map((word, i) => (
        // NOTE: overflow-hidden here is what creates the word-mask reveal effect.
        // Without the pb/-mb compensation below, descenders (g, y, p, j, q) on
        // tight leading get clipped by this box because it sizes to the line's
        // content height, not the font's full em-box. The padding gives the
        // glyphs room below the baseline; the negative margin cancels the
        // added height so layout/spacing stays identical.
        <span key={i} className="inline-block overflow-hidden pb-[0.14em] mb-[-0.14em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : { y: "110%" }}
            transition={{ duration: 0.8, ease, delay: delay + i * 0.05 }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

