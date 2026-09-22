"use client"

import { useEffect, useState, type ReactElement } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

type Slide = {
    emphasis: string
    bg: string
    fg: string
    emphasisBg: string
    emphasisFg: string
    chip: string
    Icon: (props: { color: string }) => ReactElement
}

/* ------------------------------------------------------------------
   Small inline icon glyphs — no external image assets required.
   Each mirrors the shape of the accompanying idea (code, growth,
   learning, network) the way the reference site pairs a line-icon
   with each rotating headline.
------------------------------------------------------------------- */

function IconCode({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16 sm:h-20 sm:w-20">
            <path
                d="M22 20 8 32l14 12M42 20l14 12-14 12M38 16 26 48"
                stroke={color}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function IconGrowth({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16 sm:h-20 sm:w-20">
            <path
                d="M8 46 24 30l10 10 22-24"
                stroke={color}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M46 16h10v10"
                stroke={color}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function IconLearn({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16 sm:h-20 sm:w-20">
            <path
                d="M6 24 32 12l26 12-26 12L6 24Z"
                stroke={color}
                strokeWidth="3.5"
                strokeLinejoin="round"
            />
            <path
                d="M18 30v12c0 4 6.3 8 14 8s14-4 14-8V30"
                stroke={color}
                strokeWidth="3.5"
                strokeLinecap="round"
            />
        </svg>
    )
}

function IconNetwork({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16 sm:h-20 sm:w-20">
            <circle cx="14" cy="16" r="6" stroke={color} strokeWidth="3.5" />
            <circle cx="50" cy="16" r="6" stroke={color} strokeWidth="3.5" />
            <circle cx="32" cy="48" r="6" stroke={color} strokeWidth="3.5" />
            <path
                d="M18 20 28 43M46 20 36 43M20 16h24"
                stroke={color}
                strokeWidth="3.5"
                strokeLinecap="round"
            />
        </svg>
    )
}

const slides: Slide[] = [
    {
        emphasis: "crack the code",
        bg: "color-mix(in srgb, var(--crimson) 12%, white)",
        fg: "var(--navy)",
        emphasisBg: "var(--crimson)",
        emphasisFg: "#fff",
        chip: "var(--crimson)",
        Icon: IconCode,
    },
    {
        emphasis: "ship at scale",
        bg: "var(--navy)",
        fg: "#ffffff",
        emphasisBg: "#ffffff",
        emphasisFg: "var(--navy)",
        chip: "#ffffff",
        Icon: IconGrowth,
    },
    {
        emphasis: "shape how India learns",
        bg: "color-mix(in srgb, var(--navy) 8%, var(--surface-2))",
        fg: "var(--navy)",
        emphasisBg: "var(--navy)",
        emphasisFg: "#fff",
        chip: "var(--navy)",
        Icon: IconLearn,
    },
    {
        emphasis: "build the network",
        bg: "var(--crimson)",
        fg: "#ffffff",
        emphasisBg: "#ffffff",
        emphasisFg: "var(--crimson)",
        chip: "#ffffff",
        Icon: IconNetwork,
    },
]

export function CareersHero() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setActive((i) => (i + 1) % slides.length)
        }, 3600)
        return () => clearInterval(id)
    }, [])

    const slide = slides[active]

    return (
        <section className="relative overflow-hidden border-b border-[var(--border)]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ background: slide.bg, color: slide.fg }}
                    className="relative"
                >
                    <div className="absolute inset-0 grid-fade opacity-[0.12]" />

                    <div className="container-x relative grid min-h-[560px] items-center gap-10 py-24 sm:py-28 lg:grid-cols-[1.15fr_.85fr] lg:py-32">
                        {/* LEFT: rotating headline */}
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] opacity-70 transition hover:opacity-100"
                            >
                                <ArrowLeft size={14} />
                                Carawin
                            </Link>

                            <p
                                className="kicker mt-10"
                                style={{ color: slide.chip }}
                            >
                                Careers
                            </p>

                            <h1 className="mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5.2rem)] font-black leading-[0.95] tracking-tight">
                                Come{" "}
                                <span
                                    className="inline-block rounded-lg px-3 py-1"
                                    style={{
                                        background: slide.emphasisBg,
                                        color: slide.emphasisFg,
                                    }}
                                >
                                    {slide.emphasis}
                                </span>
                                <br />
                                like a Carawin-er.
                            </h1>

                            <p
                                className="mt-8 max-w-xl text-lg leading-8 opacity-80"
                            >
                                We're building the AI and digital infrastructure for the
                                future of education — and we're hiring across product,
                                engineering, education, data, design and implementation.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="mailto:careers@carawintech.com"
                                    className="inline-flex min-h-[50px] items-center gap-2 rounded-full bg-[var(--crimson)] px-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                                >
                                    Send your CV
                                    <ArrowUpRight size={15} />
                                </a>
                                <a
                                    href="#teams"
                                    className="inline-flex min-h-[50px] items-center gap-2 rounded-full border px-5 text-sm font-bold transition hover:-translate-y-0.5"
                                    style={{ borderColor: "currentColor" }}
                                >
                                    Explore open teams
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: icon panel that swaps with the slide */}
                        <div className="flex justify-center lg:justify-end">
                            <div
                                className="flex h-56 w-56 items-center justify-center rounded-[28px] sm:h-64 sm:w-64"
                                style={{
                                    background:
                                        slide.fg === "#ffffff"
                                            ? "rgba(255,255,255,0.12)"
                                            : "color-mix(in srgb, currentColor 8%, transparent)",
                                    border: "1px solid currentColor",
                                    borderOpacity: 0.2 as unknown as number,
                                }}
                            >
                                <slide.Icon color={slide.fg} />
                            </div>
                        </div>
                    </div>

                    {/* Progress dots */}
                    <div className="container-x relative flex gap-2 pb-8">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Show slide ${i + 1}`}
                                onClick={() => setActive(i)}
                                className="h-1.5 rounded-full transition-all"
                                style={{
                                    width: i === active ? 28 : 10,
                                    background: "currentColor",
                                    opacity: i === active ? 0.9 : 0.35,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}