import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { solutionVerticals, solutions } from "@/lib/carawin-content"

export function generateStaticParams() {
  const slugs = new Set([
    ...solutionVerticals.map((x) => x.slug),
    ...solutions.map((x) => x.slug),
  ])
  return Array.from(slugs).map((slug) => ({ slug }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const vertical = solutionVerticals.find((y) => y.slug === slug)
  const genericSolution = solutions.find((y) => y.slug === slug)

  if (!vertical && !genericSolution) {
    notFound()
  }

  const title = vertical?.name || genericSolution?.name || "Solution"
  const tagline = vertical?.tagline || genericSolution?.intro || ""
  const desc = vertical?.desc || genericSolution?.desc || ""
  const subFeatures = vertical?.details?.subFeatures || genericSolution?.capabilities.map(c => ({ title: c, desc: "" })) || []
  const coreJourney = vertical?.details?.coreJourney

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <div className="flex items-center gap-2">
            <Link
              href="/solutions"
              className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--navy)]"
            >
              Solutions
            </Link>
            <span className="text-[var(--muted)]">/</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--crimson)]">
              {vertical?.index ? `Vertical ${vertical.index}` : "Overview"}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {tagline && (
            <p className="mt-4 text-base font-bold uppercase tracking-wider text-[var(--crimson)] sm:text-lg">
              {tagline}
            </p>
          )}

          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {desc}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Talk to Our Team
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/demo" className="btn-secondary">
              Request a Demonstration
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SubFeatures Section */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">ARCHITECTURE & CAPABILITIES</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              Engineered for Institutional Scale
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subFeatures.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-6 shadow-2xs transition hover:border-[var(--crimson)]/40 hover:bg-white"
              >
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <span className="font-mono text-[11px] font-bold text-[var(--crimson)]">
                    CAPABILITY
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                </div>
                <h3 className="mt-4 text-lg font-black text-[var(--navy)]">
                  {feat.title}
                </h3>
                {feat.desc && (
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                    {feat.desc}
                  </p>
                )}
                {"bullets" in feat && Array.isArray((feat as any).bullets) && (
                  <ul className="mt-3 space-y-1.5 border-t border-[var(--border)] pt-3 text-[11px] text-[var(--muted)]">
                    {((feat as any).bullets as string[]).map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[var(--crimson)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {coreJourney && (
            <div className="mt-14 rounded-2xl border border-[var(--navy)] bg-[var(--navy)] p-8 text-white shadow-xl sm:p-12">
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#ff7185]">
                {coreJourney.title}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Integrated Implementation Flow
              </h3>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {coreJourney.steps.map((st, i) => (
                  <div key={st} className="flex items-center gap-3">
                    <span className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-mono text-xs font-bold text-white sm:text-sm">
                      {st}
                    </span>
                    {i < coreJourney.steps.length - 1 && (
                      <span className="text-[#ff7185] font-bold text-base">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Cross link */}
      <section className="bg-[#f8fafc] py-20">
        <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="text-xl font-black text-[var(--navy)]">
              Explore All Solution Verticals
            </h3>
            <p className="text-sm text-[var(--muted)]">
              Discover how our connected portfolio works as one unified ecosystem.
            </p>
          </div>
          <Link href="/solutions" className="btn-secondary">
            View All Verticals
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
