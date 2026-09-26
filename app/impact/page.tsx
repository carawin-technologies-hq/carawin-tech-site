import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { impactData } from "@/lib/carawin-content"

export const metadata = {
  title: "Impact | Carawin Technologies",
  description:
    "Measure What Matters: Structured indicators across Access, Participation, Learning, Skills, Innovation, Opportunity and Scale.",
}

export default function ImpactPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">VERIFIABLE OUTCOMES</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {impactData.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {impactData.sub}
          </p>

          <div className="mt-8 rounded-xl border border-[var(--border)] bg-white p-4 text-xs font-semibold text-[var(--muted)]">
            <span className="font-bold text-[var(--crimson)]">NOTE: </span>
            {impactData.note}
          </div>
        </div>
      </section>

      {/* 7 Measurable Indicators */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">CORE IMPACT PILLARS</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              Structured Around Real-World Metrics
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactData.indicators.map((indicator, idx) => (
              <div
                key={indicator.name}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-7 shadow-2xs transition hover:border-[var(--crimson)]/40 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                      0{idx + 1} / INDICATOR
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                  </div>
                  <h3 className="mt-4 font-mono text-xl font-black tracking-tight text-[var(--navy)]">
                    {indicator.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {indicator.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-4 text-xs font-bold text-[var(--navy)]">
                  Data-enabled tracking
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20 text-center">
        <div className="container-x">
          <h2 className="text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
            Structure your programme around verifiable metrics.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Discuss Programme Metrics
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
