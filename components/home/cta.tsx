import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HomeCTA() {
    return (
        <section className="container-x pb-24 sm:pb-32">
            <div className="relative overflow-hidden rounded-[32px] bg-[#071a33] p-8 text-white sm:p-14 lg:p-20">
                {/* Subtle atmospheric effects — no AI artwork */}
                <div
                    className="absolute inset-0 opacity-[0.12] pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 75% 30%, #b5122b 0, transparent 30%), radial-gradient(circle at 25% 80%, #1a4a8a 0, transparent 30%)",
                    }}
                />

                {/* Crimson glow accent */}
                <div className="absolute right-[-10%] top-[-40%] h-[500px] w-[500px] rounded-full bg-[var(--crimson)]/20 blur-[120px] pointer-events-none" />

                {/* CTA content */}
                <div className="relative z-10 max-w-4xl">
                    <p className="kicker text-[#e26a7a]">
                        Let&apos;s build the future together.
                    </p>

                    <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.06em] sm:text-7xl">
                        Let&apos;s build what education needs next.
                    </h2>

                    <p className="mt-6 max-w-2xl text-white/55 leading-7">
                        Tell us where you are today. We&apos;ll help design the technology, capability and implementation pathway for what comes next.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            className="btn-secondary border-white/20 bg-white text-[#071a33]"
                        >
                            Start a conversation
                            <ArrowUpRight size={15} />
                        </Link>
                        <Link
                            href="/solutions"
                            className="btn-secondary border-white/30 text-white hover:text-white"
                        >
                            Explore solutions
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}