
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const cards = [
  ['Future-Ready Schools', 'Infrastructure + learning + AI + teacher capability', '/institutions/future-ready-schools'],
  ['Digital University', 'Learning + administration + research + intelligence', '/institutions/digital-university'],
  ['Government', 'Strategy + infrastructure + technology + AI + governance', '/government']
]

export function InstitutionsPreview() {
  return (
    <section className="container-x py-24 sm:py-32">
      <p className="kicker text-[var(--crimson)]">04 / Institutions</p>
      <h2 className="h2 mt-5 max-w-3xl">From classroom to national scale.</h2>
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {cards.map(([title, desc, href], i) => (
          <Link
            href={href as string}
            key={title as string}
            className="group rounded-2xl border border-[var(--border)] bg-[#f8f9fa] p-7 transition-all duration-300 hover:shadow-md hover:border-[var(--crimson)]/30 hover:bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-6">
                <span className="font-mono text-xs font-semibold text-[var(--crimson)] tracking-widest uppercase">
                  0{i + 1} / Scale
                </span>
                <ArrowUpRight size={17} className="text-[var(--muted)] group-hover:text-[var(--crimson)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--crimson)] transition-colors">
                {title as string}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {desc as string}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

