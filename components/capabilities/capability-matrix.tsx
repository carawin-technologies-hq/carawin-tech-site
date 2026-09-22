
"use client"

import { Reveal } from "@/components/motion-primitives"
import { capabilityMatrix, capabilityPillars, practiceGroups, type PracticeGroupId } from "@/lib/content"

const groupOrder: PracticeGroupId[] = ["government", "corporate", "digital", "infrastructure"]

function StrengthBar({ level }: { level: 0 | 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Strength level ${level} of 3`}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-5 rounded-full transition-colors ${
            n <= level ? "bg-accent" : "bg-border"
          }`}
        />
      ))}
    </div>
  )
}

export function CapabilityMatrix() {
  const pillarMap = Object.fromEntries(capabilityPillars.map((p) => [p.id, p]))

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Cross-Sector Matrix
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-3xl font-medium leading-tight md:text-4xl">
            Capabilities deployed across practice groups — never in isolation.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            Every engagement draws from multiple capability pillars. The matrix below shows typical deployment intensity
            across our four integrated practice groups.
          </p>
        </Reveal>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="pb-4 pr-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Capability
                </th>
                {groupOrder.map((gid) => (
                  <th
                    key={gid}
                    scope="col"
                    className="pb-4 px-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {practiceGroups[gid].label.split(",")[0].split(" &")[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {capabilityMatrix.map((row, i) => {
                const pillar = pillarMap[row.pillarId]
                if (!pillar) return null
                return (
                  <tr key={row.pillarId} className="border-b border-border last:border-0">
                    <th scope="row" className="py-5 pr-6 align-middle">
                      <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <span className="mt-1 block max-w-[14rem] font-serif text-base font-medium leading-snug">
                        {pillar.title}
                      </span>
                    </th>
                    {groupOrder.map((gid) => (
                      <td key={gid} className="px-3 py-5 align-middle">
                        <StrengthBar level={row.groups[gid]} />
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

