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
        width={521}
        height={197}
        priority
        className="
          block
          h-[34px]
          w-auto
          sm:h-[38px]
          lg:h-[40px]
          object-contain
          transition-transform
          duration-300
          group-hover:scale-[1.02]
        "
      />
    </Link>
  )
}