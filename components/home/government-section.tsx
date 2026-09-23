import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"

const steps = [
    { label: "Strategy", desc: "National & institutional education vision and roadmap design." },
    { label: "Infrastructure", desc: "Physical and digital infrastructure planning and delivery." },
    { label: "Technology", desc: "Systemic technology platforms, data architecture and connectivity." },
    { label: "Capability", desc: "Educator training, institutional capacity building and change management." },
    { label: "Intelligence", desc: "Programme monitoring, data dashboards and evidence-based governance." },
]

export function GovernmentSection() {
    return (
        <section className="relative bg-[var(--surface-2)] py-24 sm:py-32">
            <div className="container-x">
                <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
                    {/* Left */}
                    <div>
                        <p className="kicker text-[var(--crimson)]">08 / Government & System</p>
                        <h2 className="h2 mt-5">
                            Transforming education
                            <br />
                            at national scale.
                        </h2>
                        <p className="mt-5 text-[var(--muted)] leading-7">
                            Carawin works with ministries, state governments and education authorities to design, implement and sustain national education transformation programmes — from strategy through to measurable impact.
                        </p>
                        <Link href="/government" className="btn-primary mt-8 inline-flex">
                            Government solutions <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    {/* Right: Process flow */}
                    <div className="flex flex-col gap-3">
                        {steps.map(({ label, desc }, i) => (
                            <div key={label} className="flex items-start gap-4">
                                {/* Step connector */}
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full border border-[var(--crimson)]/30 text-[var(--crimson)] bg-white flex items-center justify-center text-[11px] font-mono font-bold shrink-0 shadow-sm">
                                        0{i + 1}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="w-px flex-1 bg-[var(--border)] my-1" style={{ minHeight: "20px" }} />
                                    )}
                                </div>
                                <div className="pt-1 pb-4">
                                    <h3 className="text-base font-bold text-[var(--foreground)]">{label}</h3>
                                    <p className="mt-1 text-sm text-[var(--muted)] leading-5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
