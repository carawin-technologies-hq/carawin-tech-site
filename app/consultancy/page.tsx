import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Consultancy & Advisory | Carawin Technologies",
  description:
    "Technology-Led Consultancy for the Real World: Digital Transformation, AI Strategy, Education Tech, DPI, Industrial IoT, and Feasibility Advisory.",
}

const consultancyServices = [
  {
    title: "DIGITAL TRANSFORMATION",
    desc: "Technology strategy, digital maturity assessments, process digitisation and enterprise transformation roadmaps.",
  },
  {
    title: "AI STRATEGY",
    desc: "AI opportunity assessment, use-case identification, AI roadmap, Generative AI integration and implementation planning.",
  },
  {
    title: "EDUCATION TECHNOLOGY",
    desc: "AI education, adaptive learning systems, STEM architecture, digital learning, labs, assessment and future skills.",
  },
  {
    title: "GOVERNMENT & DPI",
    desc: "Digital public infrastructure, state programme design, technology-enabled education and public-sector transformation.",
  },
  {
    title: "INDUSTRIAL TECHNOLOGY",
    desc: "AI, IoT, software, telemetry, monitoring and analytics for heavy and process industry sectors.",
  },
  {
    title: "IoT CONSULTANCY",
    desc: "Sensor architecture, device connectivity, telemetry monitoring, operational dashboards and automation.",
  },
  {
    title: "SOFTWARE & DIGITAL PRODUCT",
    desc: "Product strategy, platform design, cloud technology architecture, MVP scoping and full-stack digital product development.",
  },
  {
    title: "INNOVATION CONSULTANCY",
    desc: "Innovation strategy, corporate technology challenges, rapid prototypes, proof-of-concepts (POCs) and innovation programmes.",
  },
  {
    title: "SKILLS CONSULTANCY",
    desc: "Skill-gap diagnostic assessments, future-skills strategy, training curriculum architecture and institutional capability building.",
  },
  {
    title: "CSR CONSULTANCY",
    desc: "Technology-enabled CSR programme design, community implementation, digital monitoring and audited impact measurement.",
  },
  {
    title: "FEASIBILITY & PROJECT ADVISORY",
    desc: "Technical feasibility, concept development, technology selection, pilot planning and nationwide scale-up roadmaps.",
  },
  {
    title: "DATA & ANALYTICS",
    desc: "Data governance strategy, business intelligence dashboards, real-time analytics and automated decision-support systems.",
  },
]

export default function ConsultancyPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x max-w-4xl">
          <p className="kicker text-[var(--crimson)]">SOLUTION 05 / STRATEGIC ADVISORY</p>
          <h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            TECHNOLOGY-LED CONSULTANCY FOR THE REAL WORLD
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Carawin provides technology and innovation consultancy across sectors. We help leaders and institutions move from abstract challenges to operational systems.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact?interest=Consultancy" className="btn-primary">
              Discuss Your Technology Challenge
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              View All Solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="border-b border-[var(--border)] bg-white py-16 sm:py-20">
        <div className="container-x">
          <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[var(--crimson)]">
            STRATEGIC FRAMEWORK
          </p>
          <h2 className="mt-2 text-2xl font-black text-[var(--navy)] sm:text-3xl">
            We Help Organisations Move From:
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {["PROBLEM", "STRATEGY", "TECHNOLOGY", "IMPLEMENTATION", "IMPACT"].map(
              (step, idx) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-xl border border-[var(--navy)]/15 bg-[#fafbfc] px-5 py-3 font-mono text-xs font-black tracking-wider text-[var(--navy)] shadow-2xs sm:text-sm">
                    {step}
                  </span>
                  {idx < 4 && (
                    <span className="text-base font-bold text-[var(--crimson)]">→</span>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 12 Consultancy Services */}
      <section className="border-b border-[var(--border)] bg-[#f5f8fb] py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="kicker text-[var(--crimson)]">ADVISORY PRACTICES</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
              Consultancy Services
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultancyServices.map((srv, idx) => (
              <div
                key={srv.title}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-white p-7 shadow-2xs transition hover:border-[var(--crimson)]/40 hover:shadow-md sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="font-mono text-xs font-bold text-[var(--crimson)]">
                      0{idx + 1} / PRACTICE
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                  </div>
                  <h3 className="mt-4 font-mono text-base font-black tracking-tight text-[var(--navy)]">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-4">
                  <Link
                    href={`/contact?interest=Consultancy&service=${encodeURIComponent(srv.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--navy)] transition group-hover:text-[var(--crimson)]"
                  >
                    Initiate Advisory Scoping
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center">
        <div className="container-x">
          <h2 className="text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl">
            Schedule a confidential advisory discovery session.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Connect With a Practice Lead
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
