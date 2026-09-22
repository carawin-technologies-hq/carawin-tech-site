
"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

export function CountUp({ value, suffix = "", duration = 1600 }: { value: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const target = Number.parseInt(value, 10)
  const isNumeric = !Number.isNaN(target)
  const [display, setDisplay] = useState(isNumeric ? 0 : value)

  useEffect(() => {
    if (!inView || !isNumeric) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, isNumeric, target, duration])

  return (
    <span ref={ref}>
      {isNumeric ? display : display}
      {suffix}
    </span>
  )
}

