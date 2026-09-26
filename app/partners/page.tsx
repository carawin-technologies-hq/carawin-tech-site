import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { partnersData } from "@/lib/carawin-content"

export const metadata = {
  title: "Partners | Carawin Technologies",
  description:
    "Building the Ecosystem Together: Partnering with Government, Schools, Universities, Industry, CSR, Technology Companies and Innovation Ecosystems.",
}

export default function PartnersPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">PARTNER ECOSYSTEM</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {partnersData.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {partnersData.sub}
          </p>

          <p className="mt-5 font-mono text-sm font-bold uppercase tracking-wider text-[var(--crimson)]">
            {partnersData.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact?interest=Partnership" className="btn-primary">
              Become a Partner
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 Categories */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">COLLABORATION CATEGORIES</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              Carawin Seeks Partnerships With:
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnersData.categories.map((cat, idx) => (
              <div
                key={cat.title}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[#fafbfc] p-7 shadow-2xs transition hover:border-[var(--crimson)]/40 hover:bg-white"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-mono text-base font-black tracking-wider text-[var(--navy)]">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-4">
                  <Link
                    href={`/contact?interest=Partnership&type=${encodeURIComponent(cat.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--navy)] transition group-hover:text-[var(--crimson)]"
                  >
                    Initiate Alliance
                    <ArrowUpRight size={13} />
                  </Link>
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
            Together, we can turn technology into opportunity.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Partner With Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
