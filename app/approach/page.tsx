import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { carawinApproach, whyCarawinData } from "@/lib/carawin-content"

export const metadata = {
  title: "Our Approach | Carawin Technologies",
  description:
    "The Carawin Approach: From Learning to Innovation. From Problem to Solution. Experiential learning and systematic organisational execution.",
}

export default function ApproachPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">{carawinApproach.title}</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {carawinApproach.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            We move beyond passive consumption to hands-on experimentation, creative problem-solving and scalable digital execution.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Work With Us
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore Solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Framework Section */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Learning Approach */}
            <div className="rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-8 sm:p-12">
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[var(--crimson)]">
                LEARNING PARADIGM
              </p>
              <h2 className="mt-3 text-2xl font-black text-[var(--navy)] sm:text-3xl">
                {carawinApproach.carawinLearning.title}
              </h2>

              <div className="mt-6 mb-8 border-b border-[var(--border)] pb-6 text-xs text-[var(--muted)]">
                <span className="font-semibold line-through decoration-[var(--crimson)]/50">
                  Traditional: TEACH → MEMORISE → TEST
                </span>
              </div>

              <div className="space-y-3 font-mono">
                {carawinApproach.carawinLearning.steps.map((st, i) => (
                  <div
                    key={st}
                    className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-white p-4 shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[var(--crimson)]">
                        0{i + 1}
                      </span>
                      <span className="text-sm font-black text-[var(--navy)]">
                        {st}
                      </span>
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Organisation Journey */}
            <div className="rounded-2xl border border-[var(--navy)] bg-[var(--navy)] p-8 text-white sm:p-12">
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#ff7185]">
                ORGANISATIONAL JOURNEY
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                {carawinApproach.organisationJourney.title}
              </h2>

              <p className="mt-4 mb-8 border-b border-white/10 pb-6 text-xs text-white/70">
                A disciplined engineering and advisory roadmap to transform challenges into measurable outcomes.
              </p>

              <div className="space-y-3 font-mono">
                {carawinApproach.organisationJourney.steps.map((st, i) => (
                  <div
                    key={st}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#ff7185]">
                        0{i + 1}
                      </span>
                      <span className="text-sm font-black text-white">
                        {st}
                      </span>
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff7185]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Carawin Pillars */}
      <section className="border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">CORE ADVANTAGE</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              {whyCarawinData.headline}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCarawinData.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-7 shadow-2xs sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                    0{idx + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                </div>
                <h3 className="mt-4 text-xl font-black text-[var(--navy)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
