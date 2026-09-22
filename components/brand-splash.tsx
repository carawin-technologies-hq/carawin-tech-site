"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

export function BrandSplash() {
  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reduce) {
      setVisible(false)
      return
    }

    document.body.style.overflow = "hidden"

    const start = performance.now()
    const duration = 4000

    let raf = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - p, 2.4)

      setCount(Math.round(eased * 100))

      if (p < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)

    const hideTimer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ""
    }, 4550)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hideTimer)
      document.body.style.overflow = ""
    }
  }, [])

  // Light mode only — the splash screen always renders with the light palette.
  const bg = "bg-[#FAFAFA]"
  const baseText = "text-[#111111]"
  const labelText = "text-black/70"
  const bodyText = "text-black/70"
  const counterText = "text-black"
  const footerText = "text-black/55"

  const gridOpacity = "opacity-[0.07]"

  const glowBg = "bg-[#B5122B]/[0.06]"

  const logoGlow = "bg-[#B5122B]/[0.08]"

  const particleColor = "bg-black/20"

  const trackBg = "bg-black/10"

  const progressShadow = "shadow-[0_0_12px_rgba(181,18,43,0.35)]"

  const highlightBg = "bg-white/70"

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className={`fixed inset-0 z-[99999] overflow-hidden ${bg} ${baseText}`}
          aria-hidden="true"
        >
          {/* Background grid */}
          <div
            className={`absolute inset-0 loader-grid ${gridOpacity}`}
          />

          {/* Central glow */}
          <div
            className={`
                            absolute
                            left-1/2
                            top-1/2
                            h-[55vmin]
                            w-[55vmin]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            ${glowBg}
                            blur-[120px]
                        `}
          />

          {/* Particles */}
          <div
            className={`absolute left-[14%] top-[38%] h-1 w-1 rounded-full ${particleColor}`}
          />
          <div
            className={`absolute left-[70%] top-[30%] h-1 w-1 rounded-full ${particleColor}`}
          />
          <div
            className={`absolute left-[82%] top-[65%] h-1 w-1 rounded-full ${particleColor}`}
          />
          <div
            className={`absolute left-[35%] top-[20%] h-1 w-1 rounded-full ${particleColor}`}
          />

          {/* Top information */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-8 py-8 sm:px-12">
            <span
              className={`
                                font-mono
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                ${labelText}
                            `}
            >
              Carawin Technologies Pvt. Ltd.
            </span>

            <span
              className={`
                                font-mono
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                ${labelText}
                            `}
            >
              360° Technology Partner
            </span>
          </div>

          {/* Main content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 pb-20">
            <div className="relative flex w-full max-w-2xl flex-col items-center">
              {/* Logo */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div
                  className={`
                                        absolute
                                        inset-0
                                        -z-10
                                        rounded-full
                                        ${logoGlow}
                                        blur-[65px]
                                    `}
                />

                <Image
                  src="/images/carawin_logo.png"
                  alt="Carawin Technologies"
                  width={430}
                  height={160}
                  priority
                  className="h-auto w-[260px] object-contain sm:w-[390px]"
                />
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                }}
                className={`
                                    mt-10
                                    text-center
                                    text-[12px]
                                    font-bold
                                    uppercase
                                    tracking-[0.3em]
                                    ${bodyText}
                                    sm:text-sm
                                `}
              >
                Intelligent Technology. Human Potential.
              </motion.p>

              {/* Loading dots */}
              <div className="mt-9 flex items-center justify-center gap-2">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#B5122B]"
                    animate={{
                      y: [0, -7, 0],
                      opacity: [
                        0.25,
                        1,
                        0.25,
                      ],
                      scale: [
                        0.8,
                        1,
                        0.8,
                      ],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom information */}
          <div className="absolute inset-x-0 bottom-0 px-8 pb-8 sm:px-12 sm:pb-10">
            <div className="flex items-end justify-between">
              <div>
                <div
                  className={`
                                        font-mono
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.3em]
                                        ${labelText}
                                    `}
                >
                  Building the future of education
                </div>

                <motion.div
                  className={`
                                        mt-1
                                        text-6xl
                                        font-black
                                        leading-none
                                        tracking-[-0.07em]
                                        ${counterText}
                                        tabular-nums
                                        sm:text-8xl
                                    `}
                >
                  {String(count).padStart(3, "0")}
                </motion.div>
              </div>

              <div
                className={`
                                    font-mono
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.3em]
                                    ${labelText}
                                `}
              >
                Initializing ecosystem
              </div>
            </div>

            {/* Progress */}
            <div
              className={`
                                relative
                                mt-5
                                h-[2px]
                                w-full
                                overflow-hidden
                                ${trackBg}
                            `}
            >
              <motion.div
                className={`
                                    absolute
                                    inset-y-0
                                    left-0
                                    bg-[#B5122B]
                                    ${progressShadow}
                                `}
                style={{
                  width: `${count}%`,
                }}
              />

              <motion.div
                className={`
                                    absolute
                                    inset-y-0
                                    w-24
                                    ${highlightBg}
                                    blur-sm
                                `}
                animate={{
                  left: ["-10%", "110%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Footer */}
            <div
              className={`
                                mt-5
                                flex
                                items-center
                                justify-between
                                font-mono
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[0.25em]
                                ${footerText}
                            `}
            >
              <span>
                Transforming governance · education · public
                service delivery
              </span>

              <span>
                10 core verticals
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}