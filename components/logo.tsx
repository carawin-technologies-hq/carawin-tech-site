import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Carawin Technologies home"
      className="group inline-flex shrink-0 items-center"
    >
      <Image
        src="/images/carawin_logo.png"
        alt="Carawin Technologies"
        width={596}
        height={238}
        priority
        className="
          block
          h-[38px]
          w-auto
          sm:h-[42px]
          lg:h-[46px]
          object-contain
          transition-transform
          duration-300
          group-hover:scale-[1.02]
        "
      />
    </Link>
  )
}