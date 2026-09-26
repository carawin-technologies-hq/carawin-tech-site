"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Logo } from "@/components/logo"

const menus = {
  Solutions: [
    ["AI in Education", "/solutions/ai-in-education"],
    ["Digital Public Infrastructure", "/solutions/digital-public-infrastructure"],
    ["Skills & Training", "/solutions/skills-and-training"],
    ["AI, Software & IoT Products", "/solutions/ai-software-iot"],
    ["Consultancy & Advisory", "/solutions/consultancy-and-advisory"],
  ],

  Sectors: [
    ["K–12 Schools", "/sectors/k12-schools"],
    ["Colleges & Universities", "/sectors/colleges-universities"],
    ["Government & Public Education", "/government"],
    ["CSR & Foundations", "/sectors/csr-foundations"],
    ["Industry & Enterprise", "/sectors/industry-enterprise"],
  ],

  Impact: [
    ["Our Impact", "/impact"],
    ["Innovation", "/innovation"],
    ["For Schools", "/schools"],
    ["For Teachers", "/teachers"],
    ["For CSR & Industry", "/csr"],
  ],
} as const

type MenuKey = keyof typeof menus

const menuLandingPages: Record<MenuKey, string> = {
  Solutions: "/solutions",
  Sectors: "/sectors",
  Impact: "/impact",
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState<MenuKey | null>(null)
  const [mobile, setMobile] = useState(false)
  const [visible, setVisible] = useState(true)

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openMenu = (menu: MenuKey) => {
    cancelClose()
    setOpen(menu)
  }

  const scheduleClose = () => {
    cancelClose()

    closeTimer.current = setTimeout(() => {
      setOpen(null)
    }, 250)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 20) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY + 4) {
        setVisible(false)
        setOpen(null)
        cancelClose()
      } else if (currentScrollY < lastScrollY - 4) {
        setVisible(true)
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)

      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!mobile) return

    const closeMobile = () => {
      setMobile(false)
    }

    window.addEventListener("scroll", closeMobile, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", closeMobile)
    }
  }, [mobile])

  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-5",
        "transition-transform duration-300 ease-out",
        visible
          ? "translate-y-0"
          : "-translate-y-[calc(100%+18px)]",
      ].join(" ")}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          overflow-visible
          rounded-[22px]
          border
          border-[var(--border)]
          bg-[var(--surface)]
          shadow-[0_8px_35px_rgba(0,33,71,0.08)]
          transition-colors
          duration-300
        "
      >
        {/* HEADER ROW */}

        <div
          className="
            grid
            min-h-[82px]
            grid-cols-[auto_minmax(0,1fr)_auto]
            items-center
            gap-3
            px-5
            sm:min-h-[86px]
            sm:px-7
            lg:gap-6
          "
        >
          {/* LOGO */}

          <div className="flex min-w-0 shrink-0 items-center">
            <Logo />
          </div>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="
              hidden
              min-w-0
              items-center
              justify-center
              gap-0
              lg:flex
            "
          >
            {/* ABOUT */}
            <Link
              href="/about"
              className="
                whitespace-nowrap
                rounded-full
                px-2.5
                py-2
                text-[13px]
                font-semibold
                text-[var(--muted)]
                transition
                hover:bg-[var(--background)]
                hover:text-[var(--foreground)]
                xl:px-3
              "
            >
              About
            </Link>

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("Solutions")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={open === "Solutions"}
                onFocus={() => openMenu("Solutions")}
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  rounded-full
                  px-2.5
                  py-2
                  text-[13px]
                  font-semibold
                  text-[var(--muted)]
                  transition-all
                  duration-200
                  hover:bg-[var(--background)]
                  hover:text-[var(--foreground)]
                  xl:px-3
                "
              >
                Solutions
                <ChevronDown
                  size={13}
                  className={`
                    shrink-0
                    text-[var(--muted)]
                    transition-transform
                    duration-200
                    ${open === "Solutions" ? "rotate-180" : ""}
                  `}
                />
              </button>

              {open === "Solutions" && (
                <MegaMenu
                  menu="Solutions"
                  items={menus.Solutions}
                  onEnter={cancelClose}
                  onLeave={scheduleClose}
                />
              )}
            </div>

            {/* SECTORS */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("Sectors")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={open === "Sectors"}
                onFocus={() => openMenu("Sectors")}
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  rounded-full
                  px-2.5
                  py-2
                  text-[13px]
                  font-semibold
                  text-[var(--muted)]
                  transition-all
                  duration-200
                  hover:bg-[var(--background)]
                  hover:text-[var(--foreground)]
                  xl:px-3
                "
              >
                Sectors
                <ChevronDown
                  size={13}
                  className={`
                    shrink-0
                    text-[var(--muted)]
                    transition-transform
                    duration-200
                    ${open === "Sectors" ? "rotate-180" : ""}
                  `}
                />
              </button>

              {open === "Sectors" && (
                <MegaMenu
                  menu="Sectors"
                  items={menus.Sectors}
                  onEnter={cancelClose}
                  onLeave={scheduleClose}
                />
              )}
            </div>

            {/* CONSULTANCY */}
            <Link
              href="/consultancy"
              className="
                whitespace-nowrap
                rounded-full
                px-2.5
                py-2
                text-[13px]
                font-semibold
                text-[var(--muted)]
                transition
                hover:bg-[var(--background)]
                hover:text-[var(--foreground)]
                xl:px-3
              "
            >
              Consultancy
            </Link>

            {/* IMPACT */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("Impact")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={open === "Impact"}
                onFocus={() => openMenu("Impact")}
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  rounded-full
                  px-2.5
                  py-2
                  text-[13px]
                  font-semibold
                  text-[var(--muted)]
                  transition-all
                  duration-200
                  hover:bg-[var(--background)]
                  hover:text-[var(--foreground)]
                  xl:px-3
                "
              >
                Impact
                <ChevronDown
                  size={13}
                  className={`
                    shrink-0
                    text-[var(--muted)]
                    transition-transform
                    duration-200
                    ${open === "Impact" ? "rotate-180" : ""}
                  `}
                />
              </button>

              {open === "Impact" && (
                <MegaMenu
                  menu="Impact"
                  items={menus.Impact}
                  onEnter={cancelClose}
                  onLeave={scheduleClose}
                />
              )}
            </div>

            {/* PARTNERS */}
            <Link
              href="/partners"
              className="
                whitespace-nowrap
                rounded-full
                px-2.5
                py-2
                text-[13px]
                font-semibold
                text-[var(--muted)]
                transition
                hover:bg-[var(--background)]
                hover:text-[var(--foreground)]
                xl:px-3
              "
            >
              Partners
            </Link>

            {/* CAREERS */}
            <Link
              href="/careers"
              className="
                whitespace-nowrap
                rounded-full
                px-2.5
                py-2
                text-[13px]
                font-semibold
                text-[var(--muted)]
                transition
                hover:bg-[var(--background)]
                hover:text-[var(--foreground)]
                xl:px-3
              "
            >
              Careers
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="
                whitespace-nowrap
                rounded-full
                px-2.5
                py-2
                text-[13px]
                font-semibold
                text-[var(--muted)]
                transition
                hover:bg-[var(--background)]
                hover:text-[var(--foreground)]
                xl:px-3
              "
            >
              Contact
            </Link>
          </nav>

          {/* DESKTOP ACTIONS */}

          <div
            className="
              hidden
              items-center
              justify-end
              gap-2
              lg:flex
            "
          >
            <Link
              href="/demo"
              className="btn-secondary whitespace-nowrap"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap"
            >
              Talk to Us
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* MOBILE ACTIONS */}

          <div
            className="
              col-start-3
              flex
              items-center
              justify-end
              gap-2
              lg:hidden
            "
          >
            <button
              type="button"
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              onClick={() => setMobile((value) => !value)}
              className="
                grid
                h-10
                w-10
                shrink-0
                place-items-center
                rounded-full
                border
                border-[var(--border)]
                text-[var(--foreground)]
                transition
                duration-200
                hover:bg-[var(--background)]
              "
            >
              {mobile ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

        {mobile && (
          <div
            className="
              border-t
              border-[var(--border)]
              px-5
              pb-5
              pt-3
              lg:hidden
            "
          >
            {[
              "About",
              "Solutions",
              "Sectors",
              "Consultancy",
              "Impact",
              "Partners",
              "Careers",
              "Contact",
            ].map((item) => {
              const href =
                item === "About"
                  ? "/about"
                  : item === "Solutions"
                    ? "/solutions"
                    : item === "Sectors"
                      ? "/sectors"
                      : item === "Consultancy"
                        ? "/consultancy"
                        : item === "Impact"
                          ? "/impact"
                          : item === "Partners"
                            ? "/partners"
                            : item === "Careers"
                              ? "/careers"
                              : "/contact"

              return (
                <Link
                  key={item}
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  onClick={() => setMobile(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[var(--border)]
                    py-4
                    text-sm
                    font-semibold
                    text-[var(--foreground)]
                    transition
                    hover:text-[var(--crimson)]
                  "
                >
                  {item}
                  <ArrowUpRight size={15} />
                </Link>
              )
            })}

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link
                href="/demo"
                onClick={() => setMobile(false)}
                className="
                  btn-secondary
                  w-full
                  justify-center
                "
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobile(false)}
                className="
                  btn-primary
                  w-full
                  justify-center
                "
              >
                Talk to Us
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

/* =========================================================
   MEGA MENU
   ========================================================= */

function MegaMenu({
  menu,
  items,
  onEnter,
  onLeave,
}: {
  menu: MenuKey
  items: readonly (readonly [string, string])[]
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="
        absolute
        left-1/2
        top-full
        z-[200]
        w-[620px]
        max-w-[calc(100vw-24px)]
        -translate-x-1/2
        pt-3
      "
    >
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--background)]
          p-4
          shadow-[0_25px_70px_rgba(0,33,71,0.18)]
          backdrop-blur-xl
          transition-colors
          duration-300
        "
      >
        <div className="grid grid-cols-2 gap-1">
          {items.map(([label, href]) => (
            <Link
              key={href + label}
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="
                group
                rounded-xl
                p-4
                transition-all
                duration-200
                hover:bg-[var(--surface)]
                hover:shadow-sm
              "
            >
              <span
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  text-[15px]
                  font-semibold
                  text-[var(--foreground)]
                "
              >
                {label}

                <ArrowUpRight
                  size={15}
                  className="
                    shrink-0
                    text-[var(--muted)]
                    transition-all
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:text-[var(--crimson)]
                  "
                />
              </span>

              <span
                className="
                  mt-1.5
                  block
                  text-xs
                  leading-5
                  text-[var(--muted)]
                  transition
                  group-hover:text-[var(--foreground)]
                "
              >
                Explore the Carawin ecosystem.
              </span>
            </Link>
          ))}
        </div>

        {/* MENU-SPECIFIC LANDING PAGE */}

        <div
          className="
            mt-3
            border-t
            border-[var(--border)]
            pt-3
          "
        >
          <Link
            href={menuLandingPages[menu]}
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              uppercase
              tracking-[.18em]
              text-[var(--crimson)]
              transition
              hover:gap-3
            "
          >
            {menu === "Solutions"
              ? "View all solutions"
              : menu === "Sectors"
                ? "View all sectors"
                : "View our impact"}

            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}