"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Pass-through wrapper — renders children with no animation. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}) {
  return <div className={className}>{children}</div>
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
