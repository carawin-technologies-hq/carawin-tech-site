
"use client"

const items = [
  "Governments",
  "Multilateral Development Banks",
  "Fortune 500",
  "Public Institutions",
  "Global Investors",
  "Smart Cities",
  "High-Growth Enterprises",
  "Regulatory Bodies",
]

export function TrustMarquee() {
  return (
    <section className="border-y border-border bg-card py-6" aria-label="Clients we serve">
      <div className="flex items-center gap-4">
        <span className="shrink-0 pl-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground sm:pl-8">
          Trusted across
        </span>
        <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-12 pr-12 group-hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap text-sm text-foreground/60">
                {item}
                <span className="h-1 w-1 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

