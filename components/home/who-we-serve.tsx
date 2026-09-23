import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const audiences = [
    {
        title: "Students",
        desc: "Personalised learning journeys, career discovery, mentoring and pathways to the world of work.",
        href: "/solutions/lms",
    },
    {
        title: "Teachers",
        desc: "AI-powered teaching tools, professional development, content creation and adaptive classroom support.",
        href: "/solutions/teacher-training",
    },
    {
        title: "Institutions",
        desc: "Smart infrastructure, digital operations, data intelligence and technology ecosystems for schools and universities.",
        href: "/institutions",
    },
    {
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
                {audiences.map(({ title, desc, href }, i) => (
                    <Link
                        key={title}
                        href={href}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[#f8f9fa] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--crimson)]/30 hover:bg-white"
                    >
                        <div>
                            <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-4 mb-6">
                                <span className="font-mono text-xs font-semibold text-[var(--crimson)] tracking-widest uppercase">
                                    0{i + 1} / Cohort
                                </span>
                                <ArrowUpRight size={16} className="text-[var(--muted)] group-hover:text-[var(--crimson)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--crimson)] transition-colors mb-3">
                                {title}
                            </h3>
                            <p className="text-sm text-[var(--muted)] leading-relaxed">
                                {desc}
                            </p>
                        </div>

                        <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--muted)] group-hover:text-[var(--crimson)] transition-colors">
                            Explore pathways &rarr;
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

