import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { csrData } from "@/lib/carawin-content"

export const metadata = {
  title: "CSR & Industry | Carawin Technologies",
  description:
    "Turn Technology Investment Into Human Capital. Measurable, high-impact education programmes across AI, STEM, Robotics, and Digital Literacy.",
}

export default function CSRPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">MEASURABLE SOCIAL IMPACT</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {csrData.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {csrData.sub}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact?interest=CSR%20Programme" className="btn-primary">
              Partner on CSR Programme
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/impact" className="btn-secondary">
              View Impact Framework
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9 Support Areas */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">PROGRAMME MANDATES</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              CSR & Industry Partners Can Support:
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {csrData.focusAreas.map((area, idx) => (
              <div
                key={area}
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[#fafbfc] p-6 shadow-2xs transition hover:border-[var(--crimson)]/40 hover:bg-white"
              >
                <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-black text-[var(--navy)]">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* CSR Impact Cycle */}
          <div className="mt-16 rounded-[28px] border border-[var(--navy)] bg-[var(--navy)] p-8 text-white shadow-xl sm:p-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ff7185]">
              {csrData.journey.title}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              End-to-End Governance, Deployment and Outcome Verification
            </h3>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {csrData.journey.steps.map((st, i) => (
                <div key={st} className="flex items-center gap-3">
                  <span className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 font-mono text-xs font-bold text-white sm:text-sm">
                    {st}
                  </span>
                  {i < csrData.journey.steps.length - 1 && (
                    <span className="text-[#ff7185] font-bold text-base">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20 text-center">
        <div className="container-x">
          <h2 className="text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
            Design an audited, high-impact CSR technology initiative.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Connect With Our CSR Advisory Team
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
