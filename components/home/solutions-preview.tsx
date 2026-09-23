"use client"

import Link from "next/link"
import { ArrowUpRight, Monitor, BookOpen, Building2, Users } from "lucide-react"
import { useState } from "react"

const groups = [
    {
        title: "Education Infrastructure",
        desc: "Smart Classroom · Virtual Classroom · ICT · STEM · Innovation · Language",
        href: "/solutions/smart-classroom",
        label: "Smart Classroom",
        icon: Monitor,
        details: [
            "Interactive flat panel & audio-visual systems",
            "STEM and Innovation lab infrastructure",
            "Virtual & hybrid classroom technology",
            "Language lab and digital assessment tools",
        ],
    },
    {
        title: "Digital Education",
        desc: "LMS · Digital Content · Assessment · Digital Records",
        href: "/solutions/lms",
        label: "Learning Management System",
        icon: BookOpen,
        details: [
            "Adaptive learning management platform",
            "Curriculum-aligned digital content",
            "AI-powered assessment and grading",
            "Student digital records and portfolios",
        ],
    },
    {
        title: "Institutional Technology",
        desc: "ERP · Student Information · Faculty · Finance · Examination · Analytics",
        href: "/solutions/erp",
        label: "Institutional ERP",
        icon: Building2,
        details: [
            "Unified student information system",
            "Finance, fees and payroll management",
            "Examination and results automation",
            "Institutional analytics and reporting",
        ],
    },
    {
        title: "Human Capability",
        desc: "Teacher Training · Change Management · Adoption",
        href: "/solutions/teacher-training",
        label: "Teacher Training",
        icon: Users,
        details: [
            "Structured teacher professional development",
            "Technology adoption and change management",
            "AI-fluency programmes for educators",
            "Institutional capacity building",
        ],
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

                <Link href="/solutions" className="btn-secondary shrink-0">
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

                {/* Solutions detail panel — clean enterprise style, no AI images */}
                <div className="relative overflow-hidden rounded-[32px] bg-[#071a33] p-8 lg:p-10 flex flex-col justify-between min-h-[420px]">
                    {/* Subtle atmospheric glow */}
                    <div className="absolute right-[-15%] top-[-15%] h-64 w-64 rounded-full bg-[var(--crimson)]/15 blur-[90px] pointer-events-none" />

                    <div className="relative z-10">
                        {/* Active icon */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[.08] text-[#e26a7a] ring-1 ring-white/[.06]">
                                <current.icon size={24} strokeWidth={1.75} />
                            </span>

                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e26a7a]">
                                    {current.title}
                                </p>
                                <p className="text-sm text-white/50 mt-0.5">
                                    {current.label}
                                </p>
                            </div>
                        </div>

                        {/* Feature list */}
                        <ul className="space-y-3.5">
                            {current.details.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-white/65 leading-6">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e26a7a] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-8">
                        <Link
                            href={current.href}
                            className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors"
                        >
                            Explore {current.label}
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}