import Link from "next/link"
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Cpu,
    Mail,
    MessageCircleQuestion,
    Radio,
    Search,
} from "lucide-react"

const teams = [
    {
        name: "AI & Product",
        desc: "Design and ship the AI products — Adapt, Teach, Assess, Career, Content, Voice, STEM and Insight — that sit at the core of Carawin.",
        tint: "color-mix(in srgb, var(--crimson) 10%, white)",
    },
    {
        name: "Engineering",
        desc: "Build the platforms, data pipelines and infrastructure that power classrooms, campuses and institutions at scale.",
        tint: "color-mix(in srgb, var(--navy) 7%, var(--surface-2))",
    },
    {
        name: "Education",
        desc: "Shape pedagogy, curriculum and learning design so every product is grounded in how people actually learn and teach.",
        tint: "color-mix(in srgb, var(--crimson) 6%, var(--surface))",
    },
    {
        name: "Data & Research",
        desc: "Turn learner and institutional signals into evidence — measuring what works and feeding it back into product decisions.",
        tint: "color-mix(in srgb, var(--navy) 10%, white)",
    },
    {
        name: "Design",
        desc: "Craft experiences for students, teachers, administrators and government stakeholders that are simple, clear and usable at scale.",
        tint: "color-mix(in srgb, var(--crimson) 10%, white)",
    },
    {
        name: "Implementation & Advisory",
        desc: "Work directly with schools, universities and governments to deploy, adopt and sustain Carawin's technology on the ground.",
        tint: "color-mix(in srgb, var(--navy) 7%, var(--surface-2))",
    },
]

const values = [
    {
        title: "Impact over activity",
        desc: "We measure ourselves by outcomes for learners, teachers and institutions — not by how busy we look.",
    },
    {
        title: "Build with people, not just for them",
        desc: "Educators, administrators and students shape what we build. We stay close to the classroom, not just the codebase.",
    },
    {
        title: "Own the problem end to end",
        desc: "From first line of code to on-ground adoption — people here are trusted to see things through.",
    },
    {
        title: "Rigour, without losing pace",
        desc: "We move quickly, but evidence, data and careful design decide what we ship.",
    },
]

const steps = [
    "Tell us where you fit — pick the team that matches your skills and interests.",
    "Send your CV and a short note on what you'd want to work on.",
    "A short conversation with the team to understand mutual fit.",
    "Meet the people you'd actually work with before any final decision.",
]

const exploreCards = [
    {
        icon: MessageCircleQuestion,
        title: "Talent Network",
        desc: "Not ready to apply yet? Stay in touch and hear about roles as they open up.",
        cta: "Join our talent network",
        href: "mailto:careers@carawintech.com?subject=Join%20the%20Carawin%20talent%20network",
    },
    {
        icon: Radio,
        title: "Life at Carawin",
        desc: "See how our teams work day to day, and what building for real classrooms looks like.",
        cta: "Explore About Carawin",
        href: "/about",
    },
    {
        icon: Search,
        title: "Open Teams",
        desc: "Come build and implement education technology with Carawin.",
        cta: "Browse open teams",
        href: "#teams",
    },
]

export default function Page() {
    return (
        <div>
            {/* ========================================================
          HERO
      ======================================================== */}
            <section className="relative overflow-hidden border-b border-[var(--border)]">
                <div className="absolute inset-0 detail-hero-glow" />
                <div className="absolute inset-0 grid-fade opacity-40" />

                <div className="container-x relative py-28 sm:py-36 lg:py-40">
                    <div className="reveal-up max-w-4xl">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--muted)] transition hover:text-[var(--crimson)]"
                        >
                            <ArrowLeft size={14} />
                            Carawin
                        </Link>

                        <p className="kicker mt-14 text-[var(--crimson)]">Careers</p>

                        <h1 className="h1 mt-6 max-w-4xl">
                            Build the future of education with Carawin.
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                            We're building the AI and digital infrastructure for the
                            future of education — and we're hiring across product,
                            engineering, education, data, design and implementation.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="mailto:careers@carawintech.com" className="btn-primary">
                                Send your CV
                                <ArrowUpRight size={15} />
                            </a>
                            <a href="#teams" className="btn-secondary">
                                Explore open teams
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================
          WHY CARAWIN
      ======================================================== */}
            <section className="container-x grid gap-10 py-20 sm:py-28 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
                <div className="reveal-up">
                    <p className="kicker text-[var(--crimson)]">Why Carawin</p>
                    <h2 className="h2 mt-5">Work that reaches real classrooms.</h2>
                </div>

                <div className="reveal-up delay-1">
                    <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                        Carawin sits at the intersection of AI, education and public
                        infrastructure. What you build here doesn't stay in a demo — it
                        ends up in schools, colleges, universities and government
                        programmes, used by teachers and students every day.
                    </p>

                    <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
                        <div className="flex items-center gap-3">
                            <Cpu className="text-[var(--crimson)]" size={20} />
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">
                                How we work
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                            Small, cross-functional teams that own a problem end to end —
                            from AI and product to education expertise and on-ground
                            implementation — instead of working in isolated silos.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================================================
          VALUES
      ======================================================== */}
            <section className="container-x pb-20 sm:pb-28">
                <div className="mb-8 reveal-up">
                    <p className="kicker text-[var(--crimson)]">What we value</p>
                    <h2 className="h2 mt-4 max-w-4xl">
                        The principles that shape how we build.
                    </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {values.map((v, i) => (
                        <div
                            key={v.title}
                            className="node-card reveal-up rounded-2xl p-6 sm:p-7"
                            style={{ animationDelay: `${Math.min(i, 7) * 55}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <CheckCircle2
                                    className="mt-0.5 shrink-0 text-[var(--crimson)]"
                                    size={20}
                                />
                                <div>
                                    <span className="font-mono text-[10px] text-[var(--muted)]">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="mt-1 font-semibold leading-6">{v.title}</p>
                                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================================
          TEAMS  (colour-tinted cards, IBM "career areas" style)
      ======================================================== */}
            <section id="teams" className="container-x pb-20 sm:pb-28 scroll-mt-28">
                <div className="mb-8 reveal-up">
                    <p className="kicker text-[var(--crimson)]">Where you could work</p>
                    <h2 className="h2 mt-4 max-w-4xl">Teams hiring across Carawin.</h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                        We don't always have a fixed list of open roles — if your skills
                        fit one of these teams, we want to hear from you.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {teams.map((team, index) => (
                        <a
                            key={team.name}
                            href={`mailto:careers@carawintech.com?subject=${encodeURIComponent(
                                `Application — ${team.name}`
                            )}`}
                            className="group overflow-hidden rounded-2xl border border-[var(--border)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-7"
                            style={{ background: team.tint }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex min-w-0 gap-4">
                                    <span className="shrink-0 pt-1 font-mono text-xs text-[var(--muted)]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="min-w-0">
                                        <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                                            {team.name}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                            {team.desc}
                                        </p>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={20}
                                    className="shrink-0 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--crimson)]"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* ========================================================
          KEEP EXPLORING  (IBM "Keep exploring" strip)
      ======================================================== */}
            <section className="pb-20 sm:pb-28">
                <div className="border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-20">
                    <div className="container-x">
                        <p className="kicker text-[var(--crimson)]">Keep exploring</p>
                        <h2 className="h2 mt-4 max-w-3xl text-3xl sm:text-5xl">
                            More ways to get started.
                        </h2>

                        <div className="mt-10 grid gap-8 sm:grid-cols-3">
                            {exploreCards.map((card) => {
                                const Icon = card.icon
                                return (
                                    <div key={card.title}>
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--crimson)] text-[var(--crimson)]">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="mt-5 text-lg font-bold">{card.title}</h3>
                                        <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--muted)]">
                                            {card.desc}
                                        </p>
                                        <a
                                            href={card.href}
                                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--crimson)] transition hover:gap-2.5"
                                        >
                                            {card.cta}
                                            <ArrowUpRight size={15} />
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================
          HOW TO APPLY
      ======================================================== */}
            <section className="container-x grid gap-10 pb-20 sm:pb-28 lg:grid-cols-[.75fr_1.25fr]">
                <div className="reveal-up">
                    <p className="kicker text-[var(--crimson)]">How to apply</p>
                    <h2 className="h2 mt-4">Simple, direct, no portals.</h2>
                </div>

                <div className="space-y-3">
                    {steps.map((step, i) => (
                        <div key={step} className="workflow-step reveal-up">
                            <span>{String(i + 1).padStart(2, "0")}</span>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================================
          CTA
      ======================================================== */}
            <section className="container-x pb-24 sm:pb-32">
                <div className="cta-panel">
                    <p className="kicker text-[var(--crimson)]">Get in touch</p>
                    <h2 className="mt-4 max-w-5xl text-3xl font-black tracking-tight sm:text-5xl">
                        Don't see your team listed? Reach out anyway.
                    </h2>
                    <p className="mt-5 max-w-2xl text-[var(--muted)]">
                        We're growing across every function. Send us your CV and a note
                        on what you'd want to work on.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href="mailto:careers@carawintech.com" className="btn-primary">
                            <Mail size={15} />
                            careers@carawintech.com
                        </a>
                        <Link href="/contact" className="btn-secondary">
                            Talk to Carawin
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}