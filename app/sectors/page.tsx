import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { sectorsData } from "@/lib/carawin-content"

export const metadata = {
  title: "Sectors | Carawin Technologies",
  description:
    "Technology Without Sectoral Boundaries: Education, Government, Power, Steel, Agriculture, Water, Air, Infrastructure, CSR, Skills and Startups.",
}

export default function SectorsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">CROSS-SECTOR APPLICATION</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            TECHNOLOGY WITHOUT SECTORAL BOUNDARIES
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Carawin applies its core capabilities in Artificial Intelligence, Software, Embedded IoT, Robotics and Data Engineering across key socioeconomic and industrial sectors.
          </p>
        </div>
      </section>

      {/* 11 Sectors Grid */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectorsData.map((sector, idx) => (
              <div
                key={sector.name}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-7 shadow-2xs transition duration-200 hover:-translate-y-1 hover:border-[var(--crimson)]/40 hover:bg-white sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                      SECTOR {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                  </div>

                  <h2 className="mt-4 text-xl font-black tracking-tight text-[var(--navy)]">
                    {sector.name}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {sector.desc}
                  </p>

                  {sector.highlights && (
                    <div className="mt-5 rounded-lg border border-[var(--border)] bg-white p-3 text-xs font-medium text-[var(--navy)]">
                      <span className="font-bold text-[var(--crimson)]">Key Focus: </span>
                      {sector.highlights}
                    </div>
                  )}
                </div>

                <div className="mt-8 border-t border-[var(--border)] pt-5">
                  <Link
                    href={`/contact?sector=${encodeURIComponent(sector.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--navy)] transition group-hover:text-[var(--crimson)]"
                  >
                    Discuss Sector Requirement
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross link CTA */}
      <section className="bg-[#f8fafc] py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
            Have a custom industrial or institutional challenge?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-[var(--muted)]">
            Our engineering and advisory teams work with leaders across domains to design tailored, outcome-focused solutions.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/solutions/ai-software-iot" className="btn-secondary">
              Explore Product Development
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
