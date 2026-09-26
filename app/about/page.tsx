import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { aboutData } from "@/lib/carawin-content"

export const metadata = {
  title: "About Us | Carawin Technologies",
  description:
    "Building the technology ecosystem for the future across AI, Education, STEM, Software, IoT, Robotics, Skills and Innovation.",
}

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x relative z-10 max-w-4xl">
          <p className="kicker text-[var(--crimson)]">ABOUT CARAWIN</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {aboutData.headline}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {aboutData.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-[var(--navy)]">
            {[
              "AI",
              "Education",
              "STEM",
              "Software",
              "IoT",
              "Robotics",
              "Skills",
              "Innovation",
            ].map((tag, idx) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-white px-3 py-1.5 shadow-2xs"
              >
                {tag}
                {idx < 7 && <span className="text-[var(--crimson)]">|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="rounded-[28px] border border-[var(--navy)] bg-[var(--navy)] p-8 text-white shadow-xl sm:p-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ff7185]">
              {aboutData.vision.title}
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {aboutData.vision.tagline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {aboutData.vision.desc}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutData.vision.pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center font-mono text-lg font-black tracking-wider text-white sm:text-xl"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy Grid */}
      <section className="border-b border-[var(--border)] bg-[#f8fafc] py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-2xs sm:p-10">
              <p className="kicker text-[var(--crimson)]">{aboutData.mission.title}</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--navy)] sm:text-3xl">
                {aboutData.mission.subtitle}
              </h2>

              <ul className="mt-8 space-y-4">
                {aboutData.mission.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--crimson)]" />
                    <span className="text-base font-semibold text-[var(--foreground)]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-2xs sm:p-10">
              <p className="kicker text-[var(--crimson)]">{aboutData.philosophy.title}</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--navy)] sm:text-3xl">
                {aboutData.philosophy.subtitle}
              </h2>

              <ul className="mt-8 space-y-4">
                {aboutData.philosophy.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--navy)]" />
                    <span className="text-base font-semibold text-[var(--foreground)]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="bg-white py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
            Partner with Carawin to build what&apos;s next.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Talk to Us
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore Solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
