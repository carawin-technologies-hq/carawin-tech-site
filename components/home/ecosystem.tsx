import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const items = [
    {
        title: "AI",
        sub: "Intelligence layer that powers personalised learning, adaptive assessments and institutional decision-making.",
    },
    {
        title: "Learning",
        sub: "Adaptive LMS, digital content and outcome-driven pedagogy for every learner.",
    },
    {
        title: "Career",
        sub: "Discovery, planning, skill-building and placement pathways from school to workforce.",
    },
    {
        title: "Infrastructure",
        sub: "Smart classrooms, virtual labs, STEM centres and digitally-enabled campuses.",
    },
    {
        title: "Data",
        sub: "Dashboards, analytics and decision intelligence for educators and administrators.",
    },
    {
        title: "Human Capability",
        sub: "Teacher training, AI adoption, change management and institutional capacity building.",
    },
]

export function Ecosystem() {
    return (
        <section id="ecosystem" className="container-x py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                {/* Left content */}
                <div>
                    <p className="kicker text-[var(--crimson)]">
                        02 / The Carawin Ecosystem
                    </p>

                    <h2 className="h2 mt-5">
                        Six pillars.
                        <br />
                        One connected
                        <br />
                        education system.
                    </h2>

                    <p className="mt-6 max-w-md text-[var(--muted)] leading-7">
                        Carawin integrates AI, learning, career, infrastructure, data and human capability into one end-to-end ecosystem — enabling institutions, educators and governments to deliver education that is intelligent, personalised and future-ready.
                    </p>

                    <Link
                        href="/about"
                        className="reveal-line mt-7 inline-flex items-center gap-2 pb-2 text-sm font-bold"
                    >
                        Discover Carawin
                        <ArrowUpRight size={15} />
                    </Link>
                </div>

                {/* Ecosystem cards — clean enterprise style */}
                <div className="grid gap-3 sm:grid-cols-2">
                    {items.map(({ title, sub }, i) => (
                        <div
                            key={title}
                            className="group rounded-2xl border border-[var(--border)] bg-[#f8f9fa] p-6 transition-all duration-300 hover:shadow-md hover:border-[var(--crimson)]/30 hover:bg-white hover:-translate-y-0.5"
                        >
                            {/* Top header with mono pillar index and subtle divider */}
                            <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-4">
                                <span className="font-mono text-[11px] font-bold text-[var(--crimson)] uppercase tracking-widest">
                                    Pillar 0{i + 1}
                                </span>
                                <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider">
                                    Core
                                </span>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--crimson)] transition-colors">
                                {title}
                            </h3>

                            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                                {sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}