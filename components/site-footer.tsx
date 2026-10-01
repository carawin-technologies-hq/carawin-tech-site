"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Globe,
} from "lucide-react"

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
          TOP CTA SECTION (Matching User's Reference Screenshot)
          ======================================================== */}
      <div
        className="relative overflow-hidden border-t border-b border-white/10 bg-[#020b18] py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(2,11,24,0.92) 0%, rgba(2,11,24,0.7) 45%, rgba(2,11,24,0.3) 100%), url('/images/home/cta_landscape.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Subtle glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b18]/90 via-[#020b18]/60 to-transparent pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e11d48]">
                HAVE AN IDEA?
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                LET&apos;S BUILD WHAT&apos;S NEXT.
              </h2>

              <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-slate-200">
                Build a product • Deploy AI • Transform an organization • Establish a technology lab • Implement a large-scale programme
              </p>
            </div>

            {/* Right Action Button & Ethos */}
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
                <span>IDEA</span>
                <span className="mx-2 text-[#e11d48]">→</span>
                <span>INNOVATION</span>
                <span className="mx-2 text-[#e11d48]">→</span>
                <span>IMPACT</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0070f3] px-8 py-4 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(0,112,243,0.5)] transition-all duration-300 hover:bg-[#0060df] hover:shadow-[0_0_40px_rgba(0,112,243,0.8)] sm:text-sm whitespace-nowrap"
              >
                START A CONVERSATION
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

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

          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
            IDEA • INNOVATION • IMPACT
          </div>
        </div>
      </div>
    </footer>
  )
}
