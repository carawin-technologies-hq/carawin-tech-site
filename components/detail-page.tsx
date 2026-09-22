import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react"

import type { DetailContent } from "@/lib/carawin-content"
import { DetailVisual } from "@/components/detail-visual"

export function DetailPage({
  eyebrow,
  title,
  description,
  items = [],
  cta = "Start a conversation",
  href = "/contact",
  detail,
}: {
  eyebrow: string
  title: string
  description: string
  items?: string[]
  cta?: string
  href?: string
  detail?: DetailContent
}) {
  const e = eyebrow.toLowerCase()
  const t = title.toLowerCase()

  /*
   * ============================================================
   * DETERMINE THE CORRECT VISUAL
   * ============================================================
   *
   * Specific subsection checks come BEFORE generic checks.
   *
   * This prevents:
   *
   * Government Technology
   *      -> government-technology.png
   *
   * instead of:
   *
   * Government Technology
   *      -> government-hero.png
   *
   * Likewise:
   *
   * Digital Universities
   *      -> digital-universityy.png
   *
   * instead of:
   *
   * Digital Universities
   *      -> institution-university.png
   */

  const variant =
    // ----------------------------------------------------------
    // About Carawin
    // ----------------------------------------------------------
    e.includes("about")
      ? "about"

      // --------------------------------------------------------
      // AI & Education
      // --------------------------------------------------------
      : e.includes("ai") && e.includes("education")
        ? "ai-education"

        // ------------------------------------------------------
        // Future of Schools
        // ------------------------------------------------------
        : e.includes("future") && e.includes("school")
          ? "future-schools"

          // ----------------------------------------------------
          // Government Technology
          // ----------------------------------------------------
          : e.includes("government") && e.includes("technology")
            ? "government-technology"

            // --------------------------------------------------
            // Government Technology fallback using title
            // --------------------------------------------------
            : t.includes("government") && t.includes("technology")
              ? "government-technology"

              // ------------------------------------------------
              // Advisory & Implementation
              // ------------------------------------------------
              : e.includes("advisory")
                ? "advisory"

                // ------------------------------------------------
                // Digital Universities
                // ------------------------------------------------
                : e.includes("digital") && e.includes("universit")
                  ? "digital-university"

                  // ------------------------------------------------
                  // Digital Universities fallback using title
                  // ------------------------------------------------
                  : t.includes("digital") && t.includes("universit")
                    ? "digital-university"

                    // ------------------------------------------------
                    // STEM & Innovation
                    // ------------------------------------------------
                    : e.includes("stem") && e.includes("innovation")
                      ? "stem-innovation"

                      // ------------------------------------------------
                      // STEM fallback
                      // ------------------------------------------------
                      : e.includes("stem")
                        ? "stem-innovation"

                        // ------------------------------------------------
                        // Career Intelligence
                        // ------------------------------------------------
                        : e.includes("career") && e.includes("intelligence")
                          ? "career-intelligence"

                          // ------------------------------------------------
                          // Career fallback
                          // ------------------------------------------------
                          : e.includes("career")
                            ? "career-intelligence"

                            // ------------------------------------------------
                            // Generic AI
                            // ------------------------------------------------
                            : e.includes("ai")
                              ? "ai"

                              // ------------------------------------------------
                              // Main Government page
                              // ------------------------------------------------
                              : e.includes("government")
                                ? "government"

                                // ------------------------------------------------
                                // Generic University
                                // ------------------------------------------------
                                : e.includes("university")
                                  ? "university"

                                  // ------------------------------------------------
                                  // Infrastructure / Labs / Classrooms
                                  // ------------------------------------------------
                                  : e.includes("lab") ||
                                    e.includes("classroom")
                                    ? "infrastructure"

                                    // ------------------------------------------------
                                    // Default
                                    // ------------------------------------------------
                                    : "education"

  /*
   * ============================================================
   * CAPABILITIES
   * ============================================================
   */

  const capabilities = detail?.capabilities?.length
    ? detail.capabilities
    : items.length
      ? items
      : [
        "Connected technology",
        "Human-centred design",
        "Data and intelligence",
        "Implementation support",
        "Measurable outcomes",
      ]

  return (
    <div
      className={`detail-page ${variant === "ai" || variant === "ai-education"
          ? "detail-page-ai"
          : ""
        }`}
    >
      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 detail-hero-glow" />

        <div className="absolute inset-0 grid-fade opacity-40" />

        <div className="container-x relative grid min-h-[640px] items-center gap-12 py-28 sm:py-36 lg:grid-cols-[1.05fr_.95fr] lg:py-40">

          {/* LEFT CONTENT */}

          <div className="reveal-up">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--muted)] transition hover:text-[var(--crimson)]"
            >
              <ArrowLeft size={14} />
              Carawin
            </Link>

            <p className="kicker mt-14 text-[var(--crimson)]">
              {eyebrow}
            </p>

            <h1 className="h1 mt-6 max-w-5xl">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {detail?.intro || description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={href} className="btn-primary">
                {cta}
                <ArrowUpRight size={15} />
              </Link>

              {detail?.short && (
                <span className="btn-secondary">
                  {detail.short}
                </span>
              )}
            </div>
          </div>

          {/* RIGHT VISUAL */}

          {detail?.image ? (
            <div className="detail-image-wrap reveal-up delay-1">
              <Image
                src={`/images/details/${detail.image}`}
                alt={`${title} visual`}
                width={800}
                height={500}
                className="h-auto w-full rounded-[30px] shadow-2xl"
                priority
              />

              <div className="detail-image-caption">
                <Sparkles size={13} />
                {detail.focus}
              </div>
            </div>
          ) : (
            <div className="reveal-up delay-1">
              <DetailVisual
                variant={variant}
                label={title}
              />
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          WHAT IT IS
      ======================================================== */}

      <section className="container-x grid gap-10 py-20 sm:py-28 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
        <div className="reveal-up">
          <p className="kicker text-[var(--crimson)]">
            What it is
          </p>

          <h2 className="h2 mt-5">
            {detail?.focus ||
              "Designed for adoption. Built for scale."}
          </h2>
        </div>

        <div className="reveal-up delay-1">
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {detail?.desc || description}
          </p>

          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Cpu
                className="text-[var(--crimson)]"
                size={20}
              />

              <span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">
                Carawin system view
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              The experience is designed as a connected layer:
              people, workflows, technology and evidence work
              together instead of operating as isolated tools.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          CAPABILITIES
      ======================================================== */}

      <section className="container-x pb-20 sm:pb-28">
        <div className="mb-8 reveal-up">
          <p className="kicker text-[var(--crimson)]">
            Capabilities
          </p>

          <h2 className="h2 mt-4 max-w-4xl">
            The parts that make the experience useful.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {capabilities.map((x, i) => (
            <div
              key={x}
              className="node-card reveal-up rounded-2xl p-6 sm:p-7"
              style={{
                animationDelay: `${Math.min(i, 7) * 55}ms`,
              }}
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

                  <p className="mt-1 font-semibold leading-6">
                    {x}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          WORKFLOW
      ======================================================== */}

      {detail?.workflow?.length ? (
        <section className="container-x grid gap-10 pb-20 sm:pb-28 lg:grid-cols-[.75fr_1.25fr]">
          <div className="reveal-up">
            <p className="kicker text-[var(--crimson)]">
              How it works
            </p>

            <h2 className="h2 mt-4">
              From question to action.
            </h2>
          </div>

          <div className="space-y-3">
            {detail.workflow.map((step, i) => (
              <div
                key={step}
                className="workflow-step reveal-up"
              >
                <span>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ========================================================
          OUTCOMES
      ======================================================== */}

      {detail?.outcomes?.length ? (
        <section className="container-x pb-24 sm:pb-32">
          <div className="rounded-[32px] bg-[var(--surface)] p-7 sm:p-10 lg:p-12">
            <p className="kicker text-[var(--crimson)]">
              Designed outcomes
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">
              Technology should lead to better decisions,
              learning and capability.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {detail.outcomes.map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[var(--crimson)]"
                  />

                  <p className="mt-4 text-sm font-semibold leading-6">
                    {x}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ========================================================
          CTA
      ======================================================== */}

      <section className="container-x pb-24 sm:pb-32">
        <div className="cta-panel">
          <p className="kicker text-[var(--crimson)]">
            Next step
          </p>

          <h2 className="mt-4 max-w-5xl text-3xl font-black tracking-tight sm:text-5xl">
            Let’s build what education needs next.
          </h2>

          <Link
            href="/contact"
            className="btn-primary mt-7"
          >
            Talk to Carawin
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}