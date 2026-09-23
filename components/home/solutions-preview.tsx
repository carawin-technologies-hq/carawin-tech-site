"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const groups = [
    {
        title: "Education Infrastructure",
        desc: "Smart Classroom · Virtual Classroom · ICT · STEM · Innovation · Language",
        href: "/solutions/smart-classroom",
        image: "eduinfra.png",
        label: "Smart Classroom",
    },
    {
        title: "Digital Education",
        desc: "LMS · Digital Content · Assessment · Digital Records",
        href: "/solutions/lms",
        image: "digischool.png",
        label: "Learning Management System",
    },
    {
        title: "Institutional Technology",
        desc: "ERP · Student Information · Faculty · Finance · Examination · Analytics",
        href: "/solutions/erp",
        image: "erp.png",
        label: "Institutional ERP",
    },
    {
        title: "Human Capability",
        desc: "Teacher Training · Change Management · Adoption",
        href: "/solutions/teacher-training",
        image: "aitrain.png",
        label: "Teacher Training",
    },
]

export function SolutionsPreview() {
    const [active, setActive] = useState(0)
    const current = groups[active]

    return (
        <section className="container-x py-24 sm:py-32">
            <div className="flex flex-col justify-between gap-8 border-b border-[var(--border)] pb-10 lg:flex-row lg:items-end">
                <div>
                    <p className="kicker text-[var(--crimson)]">
                        10 / Solutions
                    </p>

                    <h2 className="h2 mt-5">
                        Technology that works
                        <br />
                        across the ecosystem.
                    </h2>
                </div>

                <Link href="/solutions" className="btn-secondary">
                    View all solutions
                    <ArrowUpRight size={15} />
                </Link>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-stretch">
                {/* Solutions list */}
                <div>
                    {groups.map((g, i) => {
                        const isActive = i === active

                        return (
                            <button
                                key={g.title}
                                type="button"
                                onMouseEnter={() => setActive(i)}
                                onClick={() => setActive(i)}
                                className={`group flex w-full flex-col gap-4 border-b border-[var(--border)] py-7 text-left transition sm:flex-row sm:items-center sm:justify-between ${isActive ? "px-3" : "hover:px-3"
                                    }`}
                            >
                                <div className="flex items-start gap-5">
                                    <span
                                        className={`font-mono text-xs transition-colors ${isActive
                                            ? "text-[var(--crimson)]"
                                            : "text-[var(--muted)]"
                                            }`}
                                    >
                                        0{i + 1}
                                    </span>

                                    <h3
                                        className={`text-2xl font-bold tracking-tight transition-colors ${isActive
                                            ? "text-[var(--crimson)]"
                                            : ""
                                            }`}
                                    >
                                        {g.title}
                                    </h3>
                                </div>

                                <div className="flex max-w-xl items-center justify-between gap-8 text-sm text-[var(--muted)]">
                                    <span>{g.desc}</span>

                                    <Link
                                        href={g.href}
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={`View ${g.title}`}
                                    >
                                        <ArrowUpRight
                                            size={18}
                                            className={`shrink-0 transition ${isActive
                                                ? "text-[var(--crimson)]"
                                                : "group-hover:text-[var(--crimson)]"
                                                }`}
                                        />
                                    </Link>
                                </div>

                                {/* Active indicator bar */}
                                <span
                                    className={`absolute -bottom-px left-0 h-[2px] bg-[var(--crimson)] transition-all duration-500 ${isActive ? "w-16" : "w-0"
                                        }`}
                                />
                            </button>
                        )
                    })}
                </div>

                {/* Solutions ecosystem visual — swaps with active group */}
                <div className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-[var(--deep)] lg:min-h-full">
                    {groups.map((g, i) => (
                        <div
                            key={g.image}
                            className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <Image
                                src={`/images/details/${g.image}`}
                                alt={g.label}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-contain object-center"
                                priority={i === 0}
                            />
                        </div>
                    ))}

                    {/* Readability / brand overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)] via-[var(--deep)]/10 to-transparent" />

                    {/* Subtle crimson atmosphere */}
                    <div className="absolute right-[-15%] top-[-15%] h-64 w-64 rounded-full bg-[var(--crimson)]/20 blur-[90px]" />

                    {/* Small contextual label — swaps with active group */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                        <div className="rounded-2xl border border-white/10 bg-[var(--deep)]/75 p-5 backdrop-blur-md transition-all duration-300">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e26a7a]">
                                {current.title}
                            </p>

                            <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
                                {current.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}