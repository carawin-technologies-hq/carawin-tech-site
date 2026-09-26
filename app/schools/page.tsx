import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { schoolsData } from "@/lib/carawin-content"

export const metadata = {
  title: "For Schools | Carawin Technologies",
  description:
    "Build a Future-Ready School: Combining AI, Virtual STEM, Coding, IoT, Robotics, Teacher Tools, Innovation and Career Readiness.",
}

export default function SchoolsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">WHOLE-SCHOOL TRANSFORMATION</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {schoolsData.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {schoolsData.sub}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/demo" className="btn-primary">
              Request a School Demonstration
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to Our School Specialists
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 Pillars */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">INTEGRATED SCHOOL ECOSYSTEM</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              A Carawin-Enabled School Combines:
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {schoolsData.pillars.map((pillar, idx) => (
              <div
                key={pillar}
                className="rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-6 text-center shadow-2xs transition hover:border-[var(--crimson)]/40 hover:bg-white"
              >
                <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-mono text-base font-black uppercase tracking-wider text-[var(--navy)]">
                  {pillar}
                </h3>
              </div>
            ))}
          </div>

          {/* Classroom to Creation Flow */}
          <div className="mt-16 rounded-[28px] border border-[var(--navy)] bg-[var(--navy)] p-8 text-white shadow-xl sm:p-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ff7185]">
              {schoolsData.journey.title}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              From Curiosity and Inquiry to Real-World Prototypes
            </h3>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {schoolsData.journey.steps.map((st, i) => (
                <div key={st} className="flex items-center gap-3">
                  <span className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 font-mono text-xs font-bold text-white sm:text-sm">
                    {st}
                  </span>
                  {i < schoolsData.journey.steps.length - 1 && (
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
            Ready to bring Carawin to your campus?
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/demo" className="btn-primary">
              Schedule Live Campus Walkthrough
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
