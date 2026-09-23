import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const journey = [
    {
        step: "Discover",
        desc: "Students explore interests, strengths and career possibilities through guided assessment and AI profiling.",
    },
    {
        step: "Plan",
        desc: "Personalised career roadmaps built around academic pathways, skills and aspirations.",
    },
    {
        step: "Develop",
        desc: "Skill-building programmes, industry exposure and mentoring to bridge the gap between learning and work.",
    },
    {
        step: "Connect",
        desc: "Internships, industry partnerships, placement support and employer connections.",
    },
    {
        step: "Grow",
        desc: "Continuous career coaching, alumni networks and lifelong learning pathways.",
    },
]

export function CareerIntelligence() {
    return (
        <section className="container-x py-24 sm:py-32">
            <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
                {/* Left: Copy */}
                <div>
                    <p className="kicker text-[var(--crimson)]">04 / Carawin Career</p>
                    <h2 className="h2 mt-5">
                        Career Intelligence
                        <br />
                        for every learner.
                    </h2>
                    <p className="mt-5 text-[var(--muted)] leading-7 max-w-lg">
                        Carawin Career is a complete career development ecosystem — connecting students from the moment of self-discovery to their first job and beyond. We help institutions make career guidance systematic, scalable and measurable.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/solutions/career" className="btn-primary">
                            Explore Carawin Career <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    {/* Journey tagline */}
                    <p className="mt-8 text-[11px] uppercase tracking-[.18em] text-[var(--muted)] font-semibold">
                        Discover · Plan · Develop · Connect · Grow
                    </p>
                </div>

                {/* Right: Journey steps */}
                <div className="flex flex-col gap-3">
                    {journey.map(({ step, desc }, i) => (
                        <div
                            key={step}
                            className="group flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-[#f8f9fa] p-5 transition-all duration-300 hover:border-[var(--crimson)]/40 hover:bg-white hover:shadow-sm"
                        >
                            <span className="shrink-0 font-mono text-xs font-bold text-[var(--crimson)] pt-0.5 tracking-wider">
                                0{i + 1} //
                            </span>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--crimson)] transition-colors">
                                    {step}
                                </h3>
                                <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
