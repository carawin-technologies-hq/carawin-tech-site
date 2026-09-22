import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { aiProducts } from "@/lib/carawin-content"

export default function Page() {
  return (
    <div className="ai-index">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 ai-index-glow" />

        <div className="container-x relative py-28 sm:py-36">
          <p className="kicker text-[var(--crimson)]">
            Carawin AI
          </p>

          <h1 className="h1 mt-6 max-w-5xl">
            The intelligence layer for education.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            A product platform for personalised learning, teacher support,
            assessment, career intelligence, content, language, STEM and
            institutional insight.
          </p>
        </div>
      </section>

      {/* =====================================================
          AI PRODUCTS
      ===================================================== */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiProducts.map((x, i) => (
            <Link
              key={x.slug}
              href={`/ai/${x.slug}`}
              className="ai-product-card reveal-up group"
              style={{
                animationDelay: `${i * 55}ms`,
              }}
            >
              {/* IMAGE — ONLY RENDER WHEN AN IMAGE EXISTS */}
              {x.image ? (
                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                  <Image
                    src={`/images/details/${x.image}`}
                    alt={`${x.name} visual`}
                    width={800}
                    height={500}
                    className="
                      h-auto
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-[1.035]
                    "
                  />
                </div>
              ) : null}

              <p
                className={`text-xs uppercase tracking-[.16em] text-[var(--crimson)] ${x.image ? "mt-6" : "mt-2"
                  }`}
              >
                {x.short}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {x.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {x.desc}
              </p>

              <span
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[.16em]
                  transition
                  group-hover:gap-3
                "
              >
                Explore
                <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}