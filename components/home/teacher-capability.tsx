import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const pillars = [
    {
        title: "Teacher Training",
        desc: "Structured, accredited professional development programmes that build 21st-century teaching skills and pedagogy.",
    },
    {
        title: "AI Adoption Programmes",
        desc: "Hands-on training to help teachers confidently use AI tools in lesson planning, content creation and classroom delivery.",
    },
    {
        title: "Change Management",
        desc: "End-to-end implementation support to ensure new technology is adopted, embedded and sustained across institutions.",
    },
    {
        title: "Institutional Capacity Building",
        desc: "Leadership coaching, curriculum design support and long-term capability frameworks for schools and education systems.",
    },
]

export function TeacherCapability() {
    return (
        <section className="container-x py-24 sm:py-32">
            <div className="flex flex-col justify-between gap-8 border-b border-[var(--border)] pb-10 lg:flex-row lg:items-end mb-12">
                <div>
                    <p className="kicker text-[var(--crimson)]">07 / Human Capability</p>
                    <h2 className="h2 mt-5">
                        The most important
                        <br />
                        technology is the teacher.
                    </h2>
                    <p className="mt-5 max-w-2xl text-[var(--muted)] leading-7">
                        Carawin&apos;s human capability programmes invest in the skills, confidence and capacity of educators — because no technology transformation succeeds without the people who deliver it.
                    </p>
                </div>
                <Link href="/solutions/teacher-training" className="btn-secondary shrink-0">
                    Teacher programmes <ArrowUpRight size={15} />
                </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pillars.map(({ title, desc }, i) => (
                    <div
                        key={title}
                        className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[#f8f9fa] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--crimson)]/30 hover:bg-white"
                    >
                        <div>
                            <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-5">
                                <span className="font-mono text-[11px] font-bold text-[var(--crimson)] tracking-widest uppercase">
                                    0{i + 1} / Capability
                                </span>
                            </div>

                            <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--crimson)] transition-colors mb-3">
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
