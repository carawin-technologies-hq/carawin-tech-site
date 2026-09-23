import Link from "next/link"
import { ArrowUpRight, BookOpen, BarChart2, Layers, ClipboardCheck } from "lucide-react"

const outcomes = [
    {
        icon: BookOpen,
        title: "Personalised Learning",
        desc: "Content and pace adapted to every student's level, learning style and progress.",
    },
    {
        icon: BarChart2,
        title: "Learning Analytics",
        desc: "Real-time insight into student engagement, comprehension and knowledge gaps.",
    },
    {
        icon: Layers,
        title: "Curriculum Alignment",
        desc: "Digital content mapped to national and international curricula frameworks.",
    },
    {
        icon: ClipboardCheck,
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
                        {outcomes.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:shadow-sm transition"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[var(--crimson)]/10 flex items-center justify-center text-[var(--crimson)] mb-4">
                                    <Icon size={19} />
                                </div>
                                <h3 className="text-base font-bold text-[var(--foreground)] mb-1.5">{title}</h3>
                                <p className="text-sm text-[var(--muted)] leading-5">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
