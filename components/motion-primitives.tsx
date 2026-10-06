"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

/** Pass-through wrapper — renders children with no animation. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 35,
  once = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

/** Pass-through stagger container — renders children with no animation. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
  delay?: number
  gap?: number
}) {
  return <div className={className}>{children}</div>
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string; y?: number }) {
  return <div className={className}>{children}</div>
}

/** Renders text directly with no word-by-word animation. */
export function TextReveal({
  text,
  className,
  as: Tag = "span",
}: {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  delay?: number
}) {
  return <Tag className={cn("inline-block", className)}>{text}</Tag>
}
