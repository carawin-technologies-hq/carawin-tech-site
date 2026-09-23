const reasons = [
    {
        title: "End-to-end. Not point solutions.",
        desc: "Carawin is the only partner that covers infrastructure, learning, career, data and human capability in one connected ecosystem.",
    },
    {
        title: "Built for the education context.",
        desc: "Everything we design is purpose-built for how schools, universities and governments actually work — not adapted from another industry.",
    },
    {
        title: "Proven at scale.",
        desc: "We have delivered education transformation programmes across multiple countries, institution types and system scales.",
    },
    {
        title: "Outcomes, not just outputs.",
        desc: "Our programmes are designed to achieve measurable improvements in learning, teaching quality and institutional effectiveness.",
    },
    {
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
                {reasons.map(({ title, desc }, i) => (
                    <div
                        key={title}
                        className={`group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[#f8f9fa] p-7 transition-all duration-300 hover:shadow-md hover:border-[var(--crimson)]/30 hover:bg-white ${
                            i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                        }`}
                    >
                        <div>
                            <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-4">
                                <span className="font-mono text-[11px] font-bold text-[var(--crimson)] tracking-widest uppercase">
                                    0{i + 1} / Differentiator
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
