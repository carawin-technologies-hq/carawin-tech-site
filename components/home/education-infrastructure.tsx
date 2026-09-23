import Link from "next/link"
import { ArrowUpRight, Monitor, Wifi, FlaskConical, Globe, Cpu } from "lucide-react"

const offerings = [
    {
        icon: Monitor,
        title: "Smart Classrooms",
        desc: "Interactive flat panels, audio-visual integration, teacher control systems and connected learning environments.",
    },
    {
        icon: Wifi,
        title: "Virtual Classrooms",
        desc: "Live streaming, hybrid learning, recorded content delivery and remote student engagement tools.",
    },
    {
        icon: FlaskConical,
        title: "STEM Labs",
        desc: "Equipped science, technology, engineering and mathematics laboratories with hands-on learning resources.",
    },
    {
        icon: Globe,
        title: "Language Labs",
        desc: "Advanced language learning technology, pronunciation coaching and multilingual digital content.",
    },
    {
        icon: Cpu,
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
                {offerings.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:shadow-md hover:border-[var(--crimson)]/30"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[var(--crimson)]/10 flex items-center justify-center text-[var(--crimson)] mb-4 group-hover:scale-110 transition-transform">
                            <Icon size={19} />
                        </div>
                        <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{title}</h3>
                        <p className="text-sm text-[var(--muted)] leading-5">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
