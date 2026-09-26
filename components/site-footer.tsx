"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"

const solutionsList = [
  ["AI in Education", "/solutions/ai-in-education"],
  ["Digital Public Infrastructure", "/solutions/digital-public-infrastructure"],
  ["Skills & Training", "/solutions/skills-and-training"],
  ["AI, Software & IoT Products", "/solutions/ai-software-iot"],
  ["Consultancy & Advisory", "/consultancy"],
]

const sectorsList = [
  ["Education", "/schools"],
  ["Government", "/government"],
  ["Power & Energy", "/sectors"],
  ["Steel & Manufacturing", "/sectors"],
  ["Agriculture", "/sectors"],
  ["Water", "/sectors"],
  ["Air & Environment", "/sectors"],
  ["Infrastructure", "/sectors"],
  ["CSR", "/csr"],
  ["Workforce & Skills", "/solutions/skills-and-training"],
]

const companyList = [
  ["About", "/about"],
  ["Our Approach", "/approach"],
  ["Impact", "/impact"],
  ["Innovation", "/innovation"],
  ["Partners", "/partners"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
]

export function SiteFooter() {
  const pathname = usePathname()
  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--navy)] text-white">
      {/* Top CTA Bar */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ff7185]">
              BUILDING THE TECHNOLOGY ECOSYSTEM FOR THE FUTURE
            </p>
            <p className="mt-1 text-sm text-white/70">
              Ready to explore what technology can do for your organisation?
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-[var(--navy)]"
            >
              Request a Demo
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--crimson)] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#d41836]"
            >
              Talk to Us
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-transparent px-4 py-2 text-xs font-bold text-white/80 transition hover:border-white hover:text-white"
            >
              Partner With Us
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.1fr_0.8fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Carawin Technologies home"
              className="inline-flex items-center"
            >
              <Image
                src="/images/carawin_logo_white.png"
                alt="Carawin Technologies"
                width={596}
                height={238}
                className="h-auto w-[190px] object-contain object-left sm:w-[210px]"
                priority={false}
              />
            </Link>

            <div className="mt-6 space-y-2">
              <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#ff7185]">
                INTELLIGENCE. EXPERIENCE. INNOVATION.
              </p>
              <p className="text-sm font-medium text-white/90">
                AI for Learning.
                <br />
                Technology for Innovation.
                <br />
                Skills for the Future.
              </p>
              <p className="pt-2 text-xs leading-6 text-white/60">
                Carawin Technologies builds AI-powered, technology-enabled ecosystems for education, institutions, governments and industries.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[var(--crimson)] px-5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d41836]"
            >
              Start a Conversation
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Solutions */}
            <div>
              <h3 className="kicker text-white/45">Solutions</h3>
              <div className="mt-5 space-y-2.5">
                {solutionsList.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block text-xs font-medium text-white/70 transition hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sectors */}
            <div>
              <h3 className="kicker text-white/45">Sectors</h3>
              <div className="mt-5 space-y-2.5">
                {sectorsList.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block text-xs font-medium text-white/70 transition hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="kicker text-white/45">Company</h3>
              <div className="mt-5 space-y-2.5">
                {companyList.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block text-xs font-medium text-white/70 transition hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Registered Office */}
          <div>
            <h3 className="kicker text-white/45">Registered Office</h3>
            <div className="mt-5 space-y-4 text-xs leading-6 text-white/65">
              <p className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--crimson)]" />
                <span>
                  22-A, 2nd Floor, Asaf Ali Road,
                  <br />
                  Ajmeri Gate Extension,
                  <br />
                  New Delhi – 110002, India
                </span>
              </p>

              <p className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-[var(--crimson)]" />
                <span>
                  <a
                    href="mailto:contact@carawintech.com"
                    className="transition hover:text-white"
                  >
                    contact@carawintech.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Carawin Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link href="/responsible-ai" className="transition hover:text-white">
              Responsible AI
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
