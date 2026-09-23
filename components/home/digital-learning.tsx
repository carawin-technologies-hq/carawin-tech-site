import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const outcomes = [
    {
        title: "Personalised Learning",
        desc: "Content and pace adapted to every student's level, learning style and progress.",
    },
    {
        title: "Learning Analytics",
        desc: "Real-time insight into student engagement, comprehension and knowledge gaps.",
    },
    {
        title: "Curriculum Alignment",
        desc: "Digital content mapped to national and international curricula frameworks.",
    },
    {
        title: "Outcome Measurement",
        desc: "Tracked, evidenced and reported improvement in student learning outcomes over time.",
    },
]

export function DigitalLearning() {
    return (
        <section className="relative bg-[var(--surface-2)] py-24 sm:py-32">
            <div className="container-x">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                    {/* Left */}
                    <div>
                        <p className="kicker text-[var(--crimson)]">06 / Digital Learning</p>
                        <h2 className="h2 mt-5">
                            Technology that puts
                            <br />
                            learning outcomes first.
                        </h2>
                        <p className="mt-5 text-[var(--muted)] leading-7">
                            Carawin&apos;s digital learning ecosystem combines an adaptive LMS, rich digital content and AI-powered assessment to create measurable improvements in how students learn — in the classroom, at home and everywhere in between.
                        </p>
                        <Link href="/solutions/lms" className="btn-primary mt-8 inline-flex">
                            Explore digital learning <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    {/* Right: Outcome cards */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {outcomes.map(({ title, desc }, i) => (
                            <div
                                key={title}
                                className="group rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm hover:shadow-md hover:border-[var(--crimson)]/30 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-4">
                                    <span className="font-mono text-[11px] font-bold text-[var(--crimson)] tracking-widest uppercase">
                                        Outcome 0{i + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--crimson)] transition-colors mb-2">
                                    {title}
                                </h3>
                                <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
