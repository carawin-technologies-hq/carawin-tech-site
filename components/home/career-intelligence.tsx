import Link from "next/link"
import { ArrowUpRight, Compass, Map, TrendingUp, Briefcase, Star } from "lucide-react"

const journey = [
    {
        icon: Compass,
        step: "Discover",
        desc: "Students explore interests, strengths and career possibilities through guided assessment and AI profiling.",
    },
    {
        icon: Map,
        step: "Plan",
        desc: "Personalised career roadmaps built around academic pathways, skills and aspirations.",
    },
    {
        icon: TrendingUp,
        step: "Develop",
        desc: "Skill-building programmes, industry exposure and mentoring to bridge the gap between learning and work.",
    },
    {
        icon: Briefcase,
        step: "Connect",
        desc: "Internships, industry partnerships, placement support and employer connections.",
    },
    {
        icon: Star,
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
                    {journey.map(({ icon: Icon, step, desc }, i) => (
                        <div
                            key={step}
                            className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--crimson)]/40 hover:shadow-sm"
                        >
                            <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--crimson)]/10 flex items-center justify-center text-[var(--crimson)] group-hover:bg-[var(--crimson)]/20 transition-colors">
                                <Icon size={18} />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-mono text-[var(--muted)]">0{i + 1}</span>
                                    <h3 className="text-base font-bold text-[var(--foreground)]">{step}</h3>
                                </div>
                                <p className="text-sm text-[var(--muted)] leading-5">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
