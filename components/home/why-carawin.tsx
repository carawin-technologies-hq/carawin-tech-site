import { CheckCircle2, Globe2, Layers3, Lightbulb, Users2 } from "lucide-react"

const reasons = [
    {
        icon: Layers3,
        title: "End-to-end. Not point solutions.",
        desc: "Carawin is the only partner that covers infrastructure, learning, career, data and human capability in one connected ecosystem.",
    },
    {
        icon: Lightbulb,
        title: "Built for the education context.",
        desc: "Everything we design is purpose-built for how schools, universities and governments actually work — not adapted from another industry.",
    },
    {
        icon: Globe2,
        title: "Proven at scale.",
        desc: "We have delivered education transformation programmes across multiple countries, institution types and system scales.",
    },
    {
        icon: Users2,
        title: "Outcomes, not just outputs.",
        desc: "Our programmes are designed to achieve measurable improvements in learning, teaching quality and institutional effectiveness.",
    },
    {
        icon: CheckCircle2,
        title: "Trusted implementation partner.",
        desc: "From strategy to deployment to sustained adoption — Carawin stays with you through every stage of the transformation journey.",
    },
]

export function WhyCarawin() {
    return (
        <section className="container-x py-24 sm:py-32">
            <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="kicker text-[var(--crimson)]">Why Carawin</p>
                <h2 className="h2 mt-5">
                    What makes Carawin different.
                </h2>
                <p className="mt-5 text-[var(--muted)] leading-7">
                    We are not a software vendor. We are an education transformation partner.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {reasons.map(({ icon: Icon, title, desc }, i) => (
                    <div
                        key={title}
                        className={`group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:shadow-md hover:border-[var(--crimson)]/30 ${
                            i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                        }`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[var(--crimson)]/10 flex items-center justify-center text-[var(--crimson)] group-hover:scale-110 transition-transform shrink-0">
                                <Icon size={19} />
                            </div>
                        </div>
                        <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{title}</h3>
                        <p className="text-sm text-[var(--muted)] leading-6">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
