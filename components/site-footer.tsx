"use client"

import { Reveal } from "@/components/motion-primitives"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Globe,
  Lightbulb,
  Cpu,
  Layers,
  TrendingUp,
} from "lucide-react"

import { Phone } from "lucide-react"

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products & Labs", href: "/solutions/ai-software-iot" },
  { label: "Skills & Training", href: "/solutions/skills-and-training" },
  { label: "Advisory & Consulting", href: "/consultancy" },
  { label: "Product Development", href: "/capabilities" },
]

const connectLinks = [
  { label: "Partnerships", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export function SiteFooter() {
  const pathname = usePathname()
  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <footer className="relative z-10 bg-[#030d1d] text-white">
{/* ========================================================
    FOOTER CTA — IDEAS TO REAL-WORLD IMPACT
    ======================================================== */}
<section className="footer-journey relative isolate overflow-hidden border-y border-white/10 bg-[#020b18] text-white">

  {/* Full-bleed mountain image */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <Image
      src="/images/home/cta_landscape.png"
      alt=""
      fill
      sizes="100vw"
      quality={80}
      className="footer-journey__image object-cover object-[66%_center]"
    />

    {/* Deep navy copy area, fading naturally into the landscape */}
    <div className="footer-journey__scrim absolute inset-0" />

    {/* Subtle atmospheric brand lighting */}
    <div className="footer-journey__atmosphere absolute inset-0" />

    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020b18]/65 to-transparent sm:h-32" />
  </div>

  <div className="container-x relative z-10">
    <div className="relative flex min-h-[440px] items-center py-12 sm:min-h-[470px] sm:py-16 lg:min-h-[510px] lg:py-20">

      {/* LEFT — Main CTA */}
      <div className="relative z-20 max-w-[690px] lg:w-[58%]">

        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1769d2] to-[#e11d48]" />

            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff5578] sm:text-xs">
              HAVE AN IDEA?
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} y={25}>
          <h2 className="mt-5 text-[clamp(2.6rem,5.1vw,5rem)] font-black leading-[0.94] tracking-[-0.06em] text-white">
            LET&apos;S BUILD
            <br />
            <span className="bg-gradient-to-r from-[#71bdff] via-[#c3d9ff] to-white bg-clip-text text-transparent">
              WHAT&apos;S NEXT
            </span>
            <span className="text-[#ed174c]">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16} y={16}>
          <p className="mt-5 max-w-[620px] text-sm leading-6 text-slate-300 sm:mt-6 sm:text-base sm:leading-7">
            Build a product <span className="text-[#ed174c]">•</span>{" "}
            Deploy AI <span className="text-[#ed174c]">•</span>{" "}
            Transform an organization <span className="text-[#ed174c]">•</span>{" "}
            Establish a technology lab <span className="text-[#ed174c]">•</span>{" "}
            Implement a large-scale programme
          </p>
        </Reveal>

        {/* Process indicator */}
        <Reveal delay={0.22} y={12}>
          <div className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-white/10 bg-[#071832]/65 px-4 py-3 backdrop-blur-md sm:mt-8 sm:gap-x-4 sm:px-5">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-slate-200 sm:text-[10px]">
              IDEA
            </span>

            <ArrowRight size={13} className="text-[#438cff]" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-slate-200 sm:text-[10px]">
              INNOVATION
            </span>

            <ArrowRight size={13} className="text-[#e11d48]" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white sm:text-[10px]">
              IMPACT
            </span>
          </div>
        </Reveal>

        {/* Primary action */}
        <Reveal delay={0.28} y={12}>
          <div className="mt-7 sm:mt-8">
            <Link
              href="/contact"
              className="group inline-flex min-h-[52px] items-center gap-4 rounded-full bg-gradient-to-r from-[#1769d2] via-[#405de6] to-[#e11d48] px-6 py-3 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_34px_rgba(23,105,210,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(225,29,72,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71bdff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020b18] sm:min-h-[58px] sm:px-8 sm:text-sm"
            >
              START A CONVERSATION

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>

    </div>
  </div>

  {/* Brand signature line */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 bottom-0 z-20 h-[2px] bg-gradient-to-r from-[#1769d2] via-[#8273dc] to-[#e11d48]"
  />
</section>

      {/* ========================================================
          MAIN FOOTER COLUMNS (Matching User's Screenshot)
          ======================================================== */}
      <div className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Carawin Technologies home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/carawin_logo_white.png"
                alt="Carawin Technologies"
                width={596}
                height={238}
                className="h-auto w-[180px] sm:w-[200px] object-contain object-left"
                priority={false}
              />
            </Link>

            <p className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-white">
              BUILDING INTELLIGENT TECHNOLOGY FOR THE REAL WORLD.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              AI • EdTech • Robotics • IoT • Product Development • Digital Transformation
            </p>
          </div>

          {/* Column 2: Company (3 cols) */}
          <div className="lg:col-span-3 lg:pl-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              COMPANY
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 transition-colors hover:text-[#e11d48]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              CONNECT
            </h3>
            <ul className="mt-5 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 transition-colors hover:text-[#e11d48]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition-colors hover:bg-[#e11d48] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition-colors hover:bg-[#e11d48] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.95C17.93 4.75 12 4.75 12 4.75s-5.93 0-7.64.49A2.76 2.76 0 0 0 2.42 7.19 28.78 28.78 0 0 0 2 12a28.78 28.78 0 0 0 .42 4.81 2.76 2.76 0 0 0 1.94 1.95c1.71.49 7.64.49 7.64.49s5.93 0 7.64-.49a2.76 2.76 0 0 0 1.94-1.95c.34-1.57.42-3.19.42-4.81s-.08-3.24-.42-4.81ZM10 15.5V8.5l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              CONTACT
            </h3>
            <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#e11d48]" />
                <span className="leading-snug">
                  INNOV8 OKHLA, 3rd Floor, 211, OKHLA INDL. ESTATE PHASE -III NEW DELHI 110020
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-[#e11d48]" />
                <a
                  href="mailto:office@carawintech.com"
                  className="transition-colors hover:text-[#e11d48]"
                >
                  office@carawintech.com
                </a>
              </div>

<div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
  <Phone
    size={16}
    className="shrink-0 text-[#ed174c]"
  />
  <a
    href="tel:+918924099910"
    className="text-sm text-white transition-colors hover:text-[#ed174c]"
  >
    +91 89240 99910
  </a>
</div>


              <div className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-[#e11d48]" />
                <a
                  href="mailto:hr@carawintech.com"
                  className="transition-colors hover:text-[#e11d48]"
                >
                  hr@carawintech.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe size={16} className="shrink-0 text-[#e11d48]" />
                <a
                  href="https://carawintech.com"
                  className="transition-colors hover:text-[#e11d48]"
                >
                  carawintech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM LEGAL & ETHOS BAR (Matching User's Screenshot)
            ======================================================== */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <p>© {new Date().getFullYear()} Carawin Technologies Pvt. Ltd. All Rights Reserved.</p>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/responsible-ai" className="transition-colors hover:text-white">
              Responsible AI
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
