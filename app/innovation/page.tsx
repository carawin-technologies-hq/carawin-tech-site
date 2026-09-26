import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { innovationData } from "@/lib/carawin-content"

export const metadata = {
  title: "Innovation Programmes | Carawin Technologies",
  description:
    "From Local Problems to Real-World Solutions: Facilitating innovation programmes across Water, Agriculture, Energy, Environment, Safety and Community Services.",
}

export default function InnovationPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">STUDENT & INSTITUTIONAL INNOVATION</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {innovationData.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {innovationData.sub}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/demo" className="btn-primary">
              View Innovation Projects
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Set Up an Innovation Lab
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 Domains */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">CHALLENGE DOMAINS</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              Learners and Institutions Identify Challenges In:
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {innovationData.domains.map((domain, idx) => (
              <div
                key={domain}
                className="rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-6 text-center shadow-2xs transition hover:border-[var(--crimson)]/40 hover:bg-white"
              >
                <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-mono text-base font-black uppercase tracking-wider text-[var(--navy)]">
                  {domain}
                </h3>
              </div>
            ))}
          </div>

          {/* Innovation Journey */}
          <div className="mt-16 rounded-[28px] border border-[var(--navy)] bg-[var(--navy)] p-8 text-white shadow-xl sm:p-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ff7185]">
              {innovationData.journey.title}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              From Inquiry to Demonstration and Practical Prototyping
            </h3>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {innovationData.journey.steps.map((st, i) => (
                <div
                  key={st}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <span className="font-mono text-[10px] font-bold text-[#ff7185]">
                    0{i + 1}
                  </span>
                  <p className="mt-2 font-mono text-xs font-bold tracking-wider text-white">
                    {st}
                  </p>
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
            Launch an Innovation Challenge at your institution.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Connect With Innovation Mentors
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
