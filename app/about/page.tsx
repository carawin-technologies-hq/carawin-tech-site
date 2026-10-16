
import Link from "next/link"
import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  GraduationCap,
  Lightbulb,
  Network,
  Radio,
  Code2,
} from "lucide-react"
import { aboutData } from "@/lib/carawin-content"
import { Reveal } from "@/components/motion-primitives"

export const metadata = {
  title: "About Us | Carawin Technologies",
  description:
    "Building the technology ecosystem for the future across AI, Education, STEM, Software, IoT, Robotics, Skills and Innovation.",
}

const technologies = [
  { name: "Artificial Intelligence", short: "AI", icon: Cpu },
  { name: "Education", short: "EDU", icon: GraduationCap },
  { name: "STEM & Robotics", short: "STEM", icon: Network },
  { name: "Software", short: "DEV", icon: Code2 },
  { name: "Internet of Things", short: "IoT", icon: Radio },
  { name: "Innovation & Skills", short: "NEXT", icon: Lightbulb },
]

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f5f7fa] text-[#071f40]">
      {/* 01 — About hero */}
      <section className="relative bg-white">
        <div className="container-x mx-auto grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ed174c]">
                ABOUT CARAWIN
                <span className="h-px w-10 bg-[#ed174c]" />
              </p>

              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
                Building the technology ecosystem for the{" "}
                <span className="text-[#ed174c]">future.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {aboutData.intro}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/solutions"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#ed174c] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d80d40]"
                >
                  Explore solutions
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="#our-vision"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#071f40] transition-colors hover:border-[#ed174c]/50 hover:bg-white"
                >
                  Our vision
                  <ArrowDownRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="group relative min-h-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 sm:min-h-[440px] lg:min-h-[520px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
                style={{
                  backgroundImage:
                    "url('/images/technology-background.jpg')",
                }}
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#071f40]/65 via-transparent to-transparent"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="h-px w-12 bg-[#ff7185]" />
                <p className="mt-4 max-w-sm text-xl font-bold leading-snug text-white sm:text-2xl">
                  Technology designed for the real world.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — Technology ecosystem */}
      <section className="bg-[#f5f7fa] py-16 sm:py-24 lg:py-28">
        <div className="container-x mx-auto">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ed174c]">
                  OUR ECOSYSTEM
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-.04em] sm:text-5xl">
                  Different disciplines.
                  <br />
                  <span className="text-slate-400">
                    One connected vision.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-base leading-7 text-slate-600">
                We bring technology, learning and practical problem-solving
                together to develop solutions for real-world needs.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {technologies.map((item, index) => {
              const Icon = item.icon

              return (
                <Reveal key={item.short} delay={index * 0.06}>
                  <article className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ed174c]/40 hover:shadow-[0_16px_40px_rgba(7,31,64,.07)] sm:p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed174c]/[.07] text-[#ed174c] transition-colors duration-300 group-hover:bg-[#ed174c]/[.12]">
                        <Icon size={23} strokeWidth={1.7} />
                      </div>

                      <span className="font-mono text-xs text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-[#071f40] sm:text-lg">
                        {item.name}
                      </h3>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ed174c]"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ed174c] transition-all duration-300 group-hover:w-full" />
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 03 — Vision: all four cards in Carawin blue */}
      <section id="our-vision" className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="container-x mx-auto">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 sm:rounded-[32px] sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ed174c]">
                    OUR VISION
                  </p>

                  <h2 className="mt-5 max-w-2xl text-3xl font-black leading-[1.08] tracking-[-.04em] sm:text-4xl lg:text-5xl">
                    {aboutData.vision.tagline}
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    {aboutData.vision.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {aboutData.vision.pillars.map((pillar, index) => (
                    <Reveal key={pillar} delay={index * 0.08}>
                      <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#071f40] bg-[#071f40] p-5 text-white shadow-[0_12px_30px_rgba(7,31,64,.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b2a52] sm:min-h-32 sm:p-6">
                        <span className="font-mono text-xs font-bold text-[#ff7185]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-extrabold uppercase leading-snug tracking-wide text-white sm:text-base">
                          {pillar}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — Mission and philosophy */}
      <section className="bg-[#f5f7fa] py-16 sm:py-24 lg:py-28">
        <div className="container-x mx-auto">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ed174c]">
              HOW WE WORK
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-[-.04em] sm:text-5xl">
              Purpose first.
              <br />
              <span className="text-slate-400">Progress always.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {[
              { data: aboutData.mission, number: "A" },
              { data: aboutData.philosophy, number: "B" },
            ].map(({ data, number }, index) => (
              <Reveal key={number} delay={index * 0.1}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(7,31,64,.05)] sm:p-10">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                      index === 0
                        ? "bg-[#ed174c]/[.08] text-[#ed174c]"
                        : "bg-[#071f40]/[.06] text-[#071f40]"
                    }`}
                  >
                    {number}
                  </div>

                  <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[.2em] text-[#ed174c]">
                    {data.title}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#071f40] sm:text-3xl">
                    {data.subtitle}
                  </h3>

                  <ul className="mt-8 space-y-4">
                    {data.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-600 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ed174c]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Closing CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="container-x mx-auto rounded-3xl border border-slate-200 bg-[#f8fafc] px-6 py-14 text-center sm:rounded-[32px] sm:px-12 sm:py-20">
            <p className="font-mono text-xs font-bold uppercase tracking-[.22em] text-[#ed174c]">
              LET&apos;S BUILD WHAT COMES NEXT
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-[-.04em] text-[#071f40] sm:text-5xl">
              Turn ambitious ideas into real-world impact.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
              Explore what we can create together across technology,
              education and innovation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#ed174c] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d80d40]"
              >
                Talk to our team
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#071f40] transition-colors hover:border-[#ed174c]/50"
              >
                Explore solutions
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
