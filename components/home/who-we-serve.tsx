import Link from "next/link"
import { ArrowUpRight, GraduationCap, BookOpen, Building2, Landmark } from "lucide-react"

const audiences = [
    {
        icon: GraduationCap,
        title: "Students",
        desc: "Personalised learning journeys, career discovery, mentoring and pathways to the world of work.",
        href: "/solutions/lms",
    },
    {
        icon: BookOpen,
        title: "Teachers",
        desc: "AI-powered teaching tools, professional development, content creation and adaptive classroom support.",
        href: "/solutions/teacher-training",
    },
    {
        icon: Building2,
        title: "Institutions",
        desc: "Smart infrastructure, digital operations, data intelligence and technology ecosystems for schools and universities.",
        href: "/institutions",
    },
    {
        icon: Landmark,
        title: "Governments",
        desc: "National education strategy, programme implementation, system intelligence and transformation at scale.",
        href: "/government",
    },
]

export function WhoWeServe() {
    return (
        <section id="who-we-serve" className="container-x py-24 sm:py-32">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="kicker text-[var(--crimson)]">01 / Who we serve</p>
                <h2 className="h2 mt-5">One ecosystem. Every stage of education.</h2>
                <p className="mt-5 text-[var(--muted)] leading-7">
                    Whether you are a student finding your path, a teacher shaping minds, an institution building the future, or a government transforming a system — Carawin is built for you.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {audiences.map(({ icon: Icon, title, desc, href }) => (
                    <Link
                        key={title}
                        href={href}
                        className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--crimson)]/30"
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] flex items-center justify-center text-[var(--crimson)] mb-5 group-hover:bg-[var(--crimson)]/10 transition-colors">
                                <Icon size={20} strokeWidth={1.75} />
                            </div>

                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{title}</h3>
                            <p className="text-sm text-[var(--muted)] leading-6 flex-1">{desc}</p>

                            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--muted)] group-hover:text-[var(--crimson)] transition-colors">
                                Learn more <ArrowUpRight size={13} />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

