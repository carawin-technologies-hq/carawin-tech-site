
"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"

const cols = [
  [
    "Solutions",
    [
      ["Smart Classrooms", "/solutions/smart-classroom"],
      ["Virtual Classrooms", "/solutions/virtual-classroom"],
      ["LMS", "/solutions/lms"],
      ["ERP", "/solutions/erp"],
      ["Assessment", "/solutions/assessment"],
      ["Digital Education", "/solutions"],
    ],
  ],

  [
    "Carawin AI",
    [
      ["Adaptive Learning", "/ai/adapt"],
      ["AI Teacher", "/ai/teach"],
      ["AI Assessment", "/ai/assess"],
      ["Career AI", "/ai/career"],
      ["Content AI", "/ai/content"],
      ["Institutional Intelligence", "/ai/insight"],
    ],
  ],

  [
    "Company",
    [
      ["About Us", "/about"],
      ["Leadership", "/about"],
      ["Careers", "/careers"],
      ["Partners", "/partners"],
      ["Contact", "/contact"],
    ],
  ],
]

export function SiteFooter() {
  const pathname = usePathname()
  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--navy)] text-white">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 xl:grid-cols-[1.15fr_2fr_.95fr]">

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
                className="
                  h-auto
                  w-[190px]
                  object-contain
                  object-left
                  sm:w-[210px]
                "
                priority={false}
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Future-Ready Education & AI Technology.
              <br />
              Intelligent Technology. Human Potential.
            </p>

            <Link
              href="/contact"
              className="
                mt-7 inline-flex min-h-[50px]
                items-center gap-2 rounded-full
                bg-[#B5122B]
                px-5 text-sm font-bold text-white
                transition
                hover:-translate-y-0.5
                hover:bg-[#c91b37]
              "
            >
              Start a conversation
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map(([title, items]) => (
              <div key={title as string}>
                <h3 className="kicker text-white/45">
                  {title as string}
                </h3>

                <div className="mt-5 space-y-3">
                  {(items as [string, string][]).map(([label, href]) => (
                    <Link
                      key={href + label}
                      href={href}
                      className="
                        block text-sm text-white/65
                        transition
                        hover:text-white
                      "
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Registered Office */}
          <div>
            <h3 className="kicker text-white/45">
              Registered Office
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-white/65">

              <p className="flex gap-3">
                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-[#B5122B]"
                />

                <span>
                  22-A, 2nd Floor, Asaf Ali Road,
                  <br />
                  Ajmeri Gate Extension,
                  <br />
                  New Delhi – 110002
                </span>
              </p>

              <p className="flex gap-3">
                <Mail
                  size={17}
                  className="mt-1 shrink-0 text-[#B5122B]"
                />

                <span>
                  <a
                    href="mailto:office@carawintech.com"
                    className="transition hover:text-white"
                  >
                    office@carawintech.com
                  </a>

                  <br />

                  <a
                    href="mailto:career@carawintech.com"
                    className="transition hover:text-white"
                  >
                    career@carawintech.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-14 flex flex-col gap-4
            border-t border-white/10
            pt-6 text-xs text-white/45
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()} Carawin Technologies Pvt. Ltd.
          </span>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/responsible-ai"
              className="transition hover:text-white"
            >
              Responsible AI
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
