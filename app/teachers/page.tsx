import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { teachersData } from "@/lib/carawin-content"

export const metadata = {
  title: "For Teachers | Carawin Technologies",
  description:
    "AI Doesn't Replace Great Teachers. It Empowers Them. Teacher + Technology + AI for lesson planning, differentiated worksheets, quizzes, analytics and STEM.",
}

export default function TeachersPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">EDUCATOR EMPOWERMENT</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {teachersData.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {teachersData.sub}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-5 py-2 font-mono text-sm font-black tracking-widest text-[var(--navy)] shadow-2xs">
            {teachersData.formula}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/demo" className="btn-primary">
              Experience Teacher Tools
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/solutions/skills-and-training" className="btn-secondary">
              Teacher Training Programmes
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9 Support Pillars */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">SUPPORTING PEDAGOGICAL EXCELLENCE</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              Carawin Supports Teachers Through:
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teachersData.supportAreas.map((area, idx) => (
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
        </div>
      </section>

      {/* Philosophy callout */}
      <section className="bg-[#f8fafc] py-20">
        <div className="container-x text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[var(--crimson)]">
            HUMAN-IN-THE-LOOP PHILOSOPHY
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
            Teachers remain the pedagogical decision-makers.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Our AI assistance handles repetitive administrative preparation, diagnostic grading and differentiation suggestions so educators can spend more high-value time mentoring students.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request Educator Workshop
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
