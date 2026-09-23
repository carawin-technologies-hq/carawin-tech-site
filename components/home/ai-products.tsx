import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { aiProducts } from "@/lib/carawin-content"

export function AIProducts() {
    return (
        <section className="relative overflow-hidden bg-[#071a33] py-24 text-white sm:py-32">
            {/* Subtle atmospheric accents — no AI images */}
            <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 30%, #b5122b 0, transparent 25%), radial-gradient(circle at 80% 70%, #1a4a8a 0, transparent 28%)",
                }}
            />

            <div className="container-x relative">
                {/* Section heading */}
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div>
                        <p className="kicker text-[#e26a7a]">
                            09 / Carawin AI
                        </p>

                        <h2 className="h2 mt-5 max-w-3xl">
                            Eight capabilities. One intelligence layer.
                        </h2>

                        <p className="mt-5 max-w-2xl text-white/55 leading-7">
                            Purpose-built AI tools designed around learners, teachers, institutions and education systems — working together in one connected platform.
                        </p>
                    </div>

                    <Link
                        href="/ai"
                        className="btn-secondary shrink-0 border-white/20 bg-white/5 text-white hover:text-white"
                    >
                        Explore the AI platform
                        <ArrowUpRight size={15} />
                    </Link>
                </div>

                {/* AI product cards — clean Option A enterprise style */}
                <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {aiProducts.map((p, i) => (
                        <Link
                            href={`/ai/${p.slug}`}
                            key={p.slug}
                            className="
                                group
                                flex
                                flex-col
                                justify-between
                                rounded-2xl
                                border
                                border-white/[.08]
                                bg-white/[.04]
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#b5122b]/60
                                hover:bg-white/[.07]
                            "
                        >
                            <div>
                                {/* Top mono capability indicator & divider */}
                                <div className="flex items-center justify-between border-b border-white/[.12] pb-3 mb-5">
                                    <span className="font-mono text-[11px] font-bold text-[#e26a7a] tracking-widest uppercase">
                                        AI 0{i + 1} // Capability
                                    </span>
                                    <ArrowUpRight size={15} className="text-white/40 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>

                                {/* Card information */}
                                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#e26a7a] transition-colors">
                                    {p.name}
                                </h3>

                                <p className="mt-1 text-[11px] uppercase tracking-[.13em] text-[#e26a7a]/80 font-medium">
                                    {p.short}
                                </p>

                                <p className="mt-4 text-sm leading-relaxed text-white/50">
                                    {p.desc}
                                </p>
                            </div>

                            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-white/40 transition group-hover:text-white">
                                Explore capability &rarr;
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}