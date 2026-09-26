import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { solutionVerticals } from "@/lib/carawin-content"

export const metadata = {
  title: "Solutions | Carawin Technologies",
  description:
    "Our Technology Portfolio: Five Verticals. One Integrated Ecosystem across AI, Digital Infrastructure, Skills, Product Development and Consultancy.",
}

export default function SolutionsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">OUR TECHNOLOGY PORTFOLIO</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            FIVE VERTICALS. ONE INTEGRATED ECOSYSTEM.
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Carawin brings together Artificial Intelligence, Software, Education Technology, Virtual STEM, IoT, Robotics, Digital Infrastructure, Future Skills and Innovation into practical technology solutions.
          </p>
        </div>
      </section>

      {/* 5 Verticals Grid */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="space-y-12">
            {solutionVerticals.map((vertical) => (
              <div
                key={vertical.slug}
                id={vertical.slug}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#fafbfc] transition duration-200 hover:border-[var(--navy)]/30"
              >
                <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_1.9fr] lg:p-12">
                  {/* Left Column */}
                  <div className="flex flex-col justify-between border-b border-[var(--border)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                    <div>
                      <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                        SOLUTION {vertical.index}
                      </span>
                      <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
                        {vertical.name}
                      </h2>
                      <p className="mt-3 text-sm font-bold uppercase tracking-wider text-[var(--crimson)]">
                        {vertical.tagline}
                      </p>
                      <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                        {vertical.desc}
                      </p>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={vertical.href}
                        className="btn-primary inline-flex text-xs uppercase tracking-wider"
                      >
                        Explore {vertical.name}
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & SubFeatures */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[.18em] text-[var(--muted)]">
                      Key Capabilities & Architecture
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {vertical.details?.subFeatures.map((feat) => (
                        <div
                          key={feat.title}
                          className="rounded-xl border border-[var(--border)] bg-white p-5 shadow-2xs"
                        >
                          <h4 className="text-sm font-black text-[var(--navy)]">
                            {feat.title}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                            {feat.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {vertical.details?.coreJourney && (
                      <div className="mt-8 rounded-xl border border-[var(--navy)]/15 bg-white p-5">
                        <p className="font-mono text-[11px] font-bold text-[var(--crimson)]">
                          {vertical.details.coreJourney.title}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-[var(--navy)]">
                          {vertical.details.coreJourney.steps.map((st, i) => (
                            <span key={st} className="inline-flex items-center gap-2">
                              <span className="rounded bg-[#f1f5f9] px-2.5 py-1">
                                {st}
                              </span>
                              {i < vertical.details!.coreJourney!.steps.length - 1 && (
                                <span className="text-[var(--crimson)]">→</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
            Need a tailored solution for your institution or sector?
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Talk to Our Solution Architects
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/demo" className="btn-secondary">
              Request a Demonstration
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}