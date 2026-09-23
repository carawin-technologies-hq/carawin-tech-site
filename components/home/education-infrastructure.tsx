import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const offerings = [
    {
        title: "Smart Classrooms",
        desc: "Interactive flat panels, audio-visual integration, teacher control systems and connected learning environments.",
    },
    {
        title: "Virtual Classrooms",
        desc: "Live streaming, hybrid learning, recorded content delivery and remote student engagement tools.",
    },
    {
        title: "STEM Labs",
        desc: "Equipped science, technology, engineering and mathematics laboratories with hands-on learning resources.",
    },
    {
        title: "Language Labs",
        desc: "Advanced language learning technology, pronunciation coaching and multilingual digital content.",
    },
    {
        title: "Innovation Centres",
        desc: "Maker spaces, robotics, coding labs and future-skills environments for the next generation of builders.",
    },
]

export function EducationInfrastructure() {
    return (
        <section className="container-x py-24 sm:py-32">
            <div className="flex flex-col justify-between gap-8 border-b border-[var(--border)] pb-10 lg:flex-row lg:items-end">
                <div>
                    <p className="kicker text-[var(--crimson)]">05 / Education Infrastructure</p>
                    <h2 className="h2 mt-5">
                        Spaces built for
                        <br />
                        tomorrow&apos;s learners.
                    </h2>
                    <p className="mt-5 max-w-2xl text-[var(--muted)] leading-7">
                        Carawin designs and delivers physical and digital learning environments that enable active, technology-integrated education — from a single classroom to an entire campus.
                    </p>
                </div>

                <Link href="/solutions/smart-classroom" className="btn-secondary shrink-0">
                    View infrastructure <ArrowUpRight size={15} />
                </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {offerings.map(({ title, desc }, i) => (
                    <div
                        key={title}
                        className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[#f8f9fa] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--crimson)]/30 hover:bg-white"
                    >
                        <div>
                            <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-4">
                                <span className="font-mono text-[11px] font-bold text-[var(--crimson)] tracking-widest uppercase">
                                    0{i + 1} / Space
                                </span>
                            </div>

                            <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--crimson)] transition-colors mb-2">
                                {title}
                            </h3>

                            <p className="text-sm text-[var(--muted)] leading-relaxed">
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
