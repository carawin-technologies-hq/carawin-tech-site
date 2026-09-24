"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Check,
  GraduationCap,
  Layers3,
  Network,
  Orbit,
  Rocket,
  School,
  Sparkles,
  Users,
} from "lucide-react"

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
}

const solutionAreas = [
  {
    index: "01",
    label: "Core platform",
    title: "AICOS",
    subtitle: "AI-Powered School Operating System",
    description:
      "A unified intelligence and learning platform connecting school leadership, teachers, students and parents.",
    capabilities: ["AI Tutor", "Adaptive Learning", "AI Teacher", "AI Assessment", "RAG", "Student Intelligence"],
    href: "https://aicos.carawintech.com/",
    icon: BrainCircuit,
    image: "/images/details/ai-education.png",
    tone: "dark",
  },
  {
    index: "02",
    label: "Future readiness",
    title: "Career Intelligence",
    subtitle: "From self-discovery to the right career pathway.",
    description:
      "A continuous career-development system combining assessment, exploration, pathways, future skills and guidance.",
    capabilities: ["Assess", "Discover", "Explore", "Map", "Prepare", "Review"],
    href: "https://career.carawintech.com/",
    icon: Orbit,
    image: "/images/details/career-intelligence.png",
    tone: "light",
  },
  {
    index: "03",
    label: "Innovation environments",
    title: "AI & STEM Innovation",
    subtitle: "From learning technology to building with technology.",
    description:
      "AI, coding, IoT, robotics, electronics and virtual STEM delivered through a Centre of Excellence model.",
    capabilities: ["Learn", "Experiment", "Build", "Test", "Improve", "Solve"],
    href: "/ai/stem",
    icon: Rocket,
    image: "/images/details/stem-innovation.png",
    tone: "light",
  },
  {
    index: "04",
    label: "Delivery layer",
    title: "Education Infrastructure",
    subtitle: "The infrastructure required to deliver modern education.",
    description:
      "Smart classrooms, virtual classrooms, STEM labs, innovation centres and connected digital learning environments.",
    capabilities: ["Smart Classrooms", "STEM Labs", "Innovation Centres", "Digital Infrastructure"],
    href: "/solutions/smart-classroom",
    icon: Building2,
    image: "/images/details/infrastructure.png",
    tone: "light",
  },
]

const audiences = [
  { title: "Schools", description: "AI-powered learning, teaching, student development and school intelligence.", href: "/institutions/future-ready-schools", icon: School },
  { title: "Institutions", description: "Technology, infrastructure and intelligence across campuses and programmes.", href: "/institutions", icon: Building2 },
  { title: "Governments", description: "Education transformation programmes combining technology, infrastructure, capability and programme intelligence.", href: "/government", icon: Network },
  { title: "Students", description: "Personalised learning, career discovery, future skills and innovation.", href: "https://career.carawintech.com/", icon: GraduationCap, external: true },
]

const outcomes = [
  ["One-size-fits-all learning", "Personalised learning"],
  ["Manual teacher workflows", "AI-assisted teaching"],
  ["Periodic assessment", "Continuous learning intelligence"],
  ["One-time career counselling", "Continuous career development"],
  ["Basic computer labs", "AI and STEM innovation environments"],
  ["Disconnected systems", "Connected institutional intelligence"],
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="kicker text-[var(--crimson)]">{children}</p>
}

function ExternalArrow() {
  return <ArrowUpRight aria-hidden="true" size={16} />
}

export function HomepageRebuild() {
  return (
    <div className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative min-h-[720px] overflow-hidden border-b border-[var(--border)] bg-[#f5f7fa]">
        <div className="absolute inset-0 grid-fade opacity-20" />
        <div className="container-x relative z-10 flex min-h-[720px] flex-col justify-between py-28 sm:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-[.86fr_1.14fr]">
            <div className="max-w-2xl">
              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[var(--crimson)]">
                <Sparkles size={15} />
                AI-powered education technology
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[.96] tracking-[-.055em] text-[var(--navy)] sm:text-7xl lg:text-[6.3rem]">
                Building the intelligent infrastructure for the future of education.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                We combine AI, education technology, career intelligence and innovation infrastructure to help schools, institutions and governments build better learning systems and future-ready students.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/solutions" className="btn-primary">
                  Explore Solutions <ExternalArrow />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to Carawin <ExternalArrow />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[640px]">
              <div className="relative aspect-[1.05] overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-2 shadow-[0_25px_75px_rgba(0,33,71,.14)] sm:p-3">
                <div className="relative h-full overflow-hidden rounded-[22px]">
                  <Image src="/images/home-hero-stock.jpg" alt="Technology-enabled learning environment" fill priority sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a32]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#ff9aaa]"><span className="h-2 w-2 rounded-full bg-[#ff7185]" /> Connected education systems</div>
                    <p className="max-w-md text-xl font-black leading-tight tracking-[-.03em] sm:text-3xl">Institution - AICOS - AI - Learning - Career - STEM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#architecture" className="mt-16 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-white/55 transition hover:text-white">
            See how the system connects <ArrowDown size={15} />
          </a>
        </div>
      </section>

      <section id="architecture" className="border-b border-[var(--border)] bg-[#f2f5f7] py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <SectionLabel>One company. One connected capability.</SectionLabel>
              <h2 className="h2 mt-5 max-w-xl">Technology built around the complete education journey.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              From intelligent learning and AI-assisted teaching to career development and STEM innovation, Carawin connects the technologies and infrastructure required to modernise education.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-[26px] border border-[var(--navy)]/15 bg-white shadow-[0_25px_80px_rgba(0,33,71,.08)]">
            <div className="grid divide-y divide-[var(--border)] lg:grid-cols-[.65fr_1.35fr] lg:divide-x lg:divide-y-0">
              <div className="flex flex-col justify-between bg-[var(--navy)] p-8 text-white sm:p-12">
                <div><Layers3 size={27} className="text-[#ff7185]" /><p className="mt-12 text-4xl font-black tracking-[-.05em] sm:text-6xl">CARAWIN</p><p className="mt-3 max-w-xs text-sm leading-6 text-white/60">AI-powered education technology and transformation.</p></div>
                <div className="mt-16 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-[.18em] text-white/45">Strategy to implementation</div>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  ["AICOS", "AI-powered education and intelligence layer", "Learning · Teaching · Assessment · Career · Student Intelligence"],
                  ["AI & STEM Innovation", "Build with technology", "AI · Coding · IoT · Robotics · Virtual STEM · Projects"],
                  ["Education Infrastructure", "Make the model real", "Smart Classrooms · STEM Labs · Innovation Centres · Digital Infrastructure"],
                  ["Outcome", "Learn, build, solve and innovate", "Connected systems that improve learning and institutional capability"],
                ].map(([title, subtitle, detail], index) => (
                  <div key={title} className="grid gap-5 p-7 sm:grid-cols-[120px_1fr] sm:p-9">
                    <div className="font-mono text-xs font-bold text-[var(--crimson)]">0{index + 1} / LAYER</div>
                    <div><h3 className="text-xl font-black tracking-tight text-[var(--navy)] sm:text-2xl">{title}</h3><p className="mt-1 font-semibold text-[var(--foreground)]">{subtitle}</p><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{detail}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="container-x py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 border-b border-[var(--border)] pb-10 lg:flex-row lg:items-end">
          <div><SectionLabel>What Carawin does</SectionLabel><h2 className="h2 mt-5 max-w-3xl">Four connected capabilities. One transformation model.</h2></div>
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">Each capability can stand alone. Together, they form the operating model for intelligent education.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {solutionAreas.map(({ index, label, title, subtitle, description, capabilities, href, icon: Icon, image, tone }) => (
            <article key={title} className={`group relative overflow-hidden rounded-[22px] border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,33,71,.1)] sm:p-9 ${tone === "dark" ? "border-[#071a33] bg-[#071a33] text-white" : "border-[var(--border)] bg-white"}`}>
              <div className="relative mb-7 aspect-[2.2] overflow-hidden rounded-xl">
                <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className={`absolute inset-0 ${tone === "dark" ? "bg-[#071a32]/35" : "bg-[#071a32]/10"}`} />
              </div>
              <div className="flex items-start justify-between"><div><p className={`font-mono text-xs font-bold uppercase tracking-[.16em] ${tone === "dark" ? "text-[#ff7185]" : "text-[var(--crimson)]"}`}>{index} / {label}</p><h3 className="mt-8 text-3xl font-black tracking-[-.04em]">{title}</h3></div><Icon size={30} className={tone === "dark" ? "text-[#ff7185]" : "text-[var(--crimson)]"} /></div>
              <p className={`mt-3 text-lg font-semibold ${tone === "dark" ? "text-white" : "text-[var(--navy)]"}`}>{subtitle}</p><p className={`mt-4 max-w-lg text-sm leading-7 ${tone === "dark" ? "text-white/60" : "text-[var(--muted)]"}`}>{description}</p>
              <div className={`mt-7 flex flex-wrap gap-2 border-t pt-6 ${tone === "dark" ? "border-white/15" : "border-[var(--border)]"}`}>{capabilities.map((capability) => <span key={capability} className={`text-[10px] font-bold uppercase tracking-[.13em] ${tone === "dark" ? "text-white/65" : "text-[var(--muted)]"}`}>{capability}</span>)}</div>
              <Link href={href} {...(href.startsWith("http") ? externalLinkProps : {})} className={`mt-8 inline-flex items-center gap-2 text-sm font-bold ${tone === "dark" ? "text-white" : "text-[var(--navy)]"}`}>Explore {title} <ExternalArrow /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[#f2f5f7] py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div><SectionLabel>Our core platform</SectionLabel><h2 className="mt-5 text-5xl font-black tracking-[-.055em] text-[var(--navy)] sm:text-7xl">AICOS</h2><p className="mt-3 text-xl font-semibold text-[var(--navy)]">The AI-Powered School Operating System</p><p className="mt-6 max-w-md text-sm leading-7 text-[var(--muted)]">AICOS is the digital intelligence and learning layer behind the Carawin education model. It connects leadership, teachers, students and parents with intelligence that helps every part of the school adapt.</p><Link href="https://aicos.carawintech.com/" {...externalLinkProps} className="btn-primary mt-8">Explore AICOS <ExternalArrow /></Link></div>
            <div className="rounded-[25px] border border-[#071a33] bg-[#071a33] p-6 text-white shadow-[0_24px_70px_rgba(0,33,71,.14)] sm:p-9">
              <div className="grid gap-3 sm:grid-cols-4">{["School Leadership", "Teachers", "Students", "Parents"].map((role) => <div key={role} className="border border-white/15 bg-white/[.04] px-4 py-5 text-center text-xs font-bold text-white/75">{role}</div>)}</div>
              <div className="my-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7185]"><div className="h-px flex-1 bg-[#ff7185]/35" /> Intelligence layer <div className="h-px flex-1 bg-[#ff7185]/35" /></div>
              <div className="grid gap-2 sm:grid-cols-3">{["AI Tutor", "Adaptive Learning", "RAG", "AI Assessment", "Recommendations", "Student Insights", "Career Intelligence"].map((item) => <div key={item} className="flex items-center gap-2 border border-white/10 px-3 py-3 text-xs text-white/65"><Check size={13} className="shrink-0 text-[#ff7185]" />{item}</div>)}</div>
              <div className="mt-8 border-t border-white/15 pt-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/45">Student journey</p><div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-black tracking-tight text-white">{["Understand", "Personalise", "Learn", "Measure", "Adapt"].map((item, index) => <span key={item} className="flex items-center gap-3">{item}{index < 4 && <ArrowRight size={14} className="text-[#ff7185]" />}</span>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div><SectionLabel>Career intelligence</SectionLabel><h2 className="h2 mt-5 max-w-xl">Career guidance should become a continuous journey.</h2><p className="mt-6 max-w-lg text-base leading-8 text-[var(--muted)]">Students move from discovery to direction with a continuous system for assessment, exploration, education pathways, future skills, expert guidance and personal roadmaps.</p><Link href="https://career.carawintech.com/" {...externalLinkProps} className="btn-primary mt-8">Explore Career Intelligence <ExternalArrow /></Link></div>
          <div className="grid gap-3 sm:grid-cols-2">{["Career Assessment", "Student Career Profile", "Career Exploration", "Subject & Stream Guidance", "Higher Education Pathways", "Future Skills", "Personal Career Roadmap", "AI Career Companion", "Expert Counselling", "Parent Engagement"].map((item, index) => <div key={item} className="flex items-center gap-4 border-b border-[var(--border)] py-4"><span className="font-mono text-xs font-bold text-[var(--crimson)]">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-[var(--navy)]">{item}</span></div>)}</div>
        </div>
      </section>

      <section className="bg-[#f2f5f7] py-24 sm:py-32">
        <div className="container-x"><div className="max-w-2xl"><SectionLabel>Who we serve</SectionLabel><h2 className="h2 mt-5">Built for classrooms, campuses and systems.</h2></div><div className="mt-12 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">{audiences.map(({ title, description, href, icon: Icon, external }) => <Link key={title} href={href} {...(external ? externalLinkProps : {})} className="group bg-white p-7 transition hover:bg-[var(--navy)] hover:text-white sm:p-8"><Icon className="text-[var(--crimson)]" size={25} /><h3 className="mt-10 text-2xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)] group-hover:text-white/65">{description}</p><span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[var(--navy)] group-hover:text-white">Explore <ArrowUpRight size={14} /></span></Link>)}</div></div>
      </section>

      <section className="container-x py-24 sm:py-32"><div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end"><div><SectionLabel>From transformation to outcomes</SectionLabel><h2 className="h2 mt-5">A clearer path from fragmented systems to intelligent education.</h2></div><div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">{outcomes.map(([from, to]) => <div key={from} className="grid gap-4 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center"><span className="text-sm text-[var(--muted)] line-through decoration-[var(--crimson)]/50">{from}</span><ArrowRight size={16} className="hidden text-[var(--crimson)] sm:block" /><span className="text-sm font-bold text-[var(--navy)]">{to}</span></div>)}</div></div></section>

      <section className="border-y border-[var(--border)] bg-white py-24 sm:py-32"><div className="container-x"><div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end"><div><SectionLabel>Government and institutional capability</SectionLabel><h2 className="h2 mt-5 max-w-2xl">Transforming education at institutional and system scale.</h2><p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">Carawin operates beyond individual software products, bringing strategy, technology, infrastructure, capability building, implementation and intelligence into one transformation model.</p></div><div className="grid grid-cols-2 border-l border-t border-[var(--border)] sm:grid-cols-3">{["Strategy", "Technology", "Infrastructure", "Capability", "Implementation", "Intelligence"].map((item) => <div key={item} className="border-b border-r border-[var(--border)] p-5 text-xs font-bold uppercase tracking-[.14em] text-[var(--navy)] sm:p-7">{item}</div>)}</div></div></div></section>

      <section className="container-x pb-24 pt-24 sm:pb-32 sm:pt-32"><div className="relative overflow-hidden rounded-[28px] bg-[#071a33] px-7 py-14 text-white sm:px-14 sm:py-20"><div className="absolute inset-0 grid-fade opacity-10" /><div className="relative max-w-3xl"><SectionLabel>Build what education needs next</SectionLabel><h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-6xl">Build the next generation of education with Carawin.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-white/60">Whether you are a school, institution or government programme, Carawin brings together the technology, infrastructure and implementation capabilities required to build a more intelligent education system.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="btn-primary">Talk to Carawin <ExternalArrow /></Link><Link href="/solutions" className="btn-secondary border-white/20 bg-white/5 text-white hover:border-white hover:text-white">Explore Solutions <ExternalArrow /></Link></div></div></div></section>
    </div>
  )
}
