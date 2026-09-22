import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HomeCTA() {
    return (
        <section className="container-x pb-24 sm:pb-32">
            <div className="relative overflow-hidden rounded-[32px] bg-[var(--deep)] p-8 text-white sm:p-14 lg:p-20">
                {/* Background artwork */}
                <div
                    className="absolute inset-0 bg-cover bg-right-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('/images/details/cta-education-ecosystem.png')",
                    }}
                />

                {/* Keeps the left/text side readable while letting the artwork show */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--deep)_0%,rgba(7,26,51,0.96)_35%,rgba(7,26,51,0.72)_58%,rgba(7,26,51,0.28)_100%)]" />

                {/* Bottom atmospheric fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--deep)]/50 to-transparent" />

                {/* Existing crimson glow */}
                <div className="absolute right-[-10%] top-[-40%] h-[500px] w-[500px] rounded-full bg-[var(--crimson)]/25 blur-[100px]" />

                {/* CTA content */}
                <div className="relative z-10 max-w-4xl">
                    <p className="kicker text-[#e26a7a]">
                        Let’s build the future of education.
                    </p>

                    <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.06em] sm:text-7xl">
                        Ready to transform education?
                    </h2>

                    <p className="mt-6 max-w-2xl text-white/60 leading-7">
                        Tell us where you are today. We’ll help design the technology,
                        capability and implementation pathway for what comes next.
                    </p>

                    <Link
                        href="/contact"
                        className="btn-secondary mt-8 border-white/20 bg-white text-[#071a33]"
                    >
                        Start a conversation
                        <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    )
}