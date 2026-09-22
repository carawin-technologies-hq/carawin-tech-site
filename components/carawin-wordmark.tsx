import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function CarawinWordmark({
  className = "",
  markSize = 40,
}: {
  className?: string
  markSize?: number
}) {
  const width = Math.round(markSize * 4.02)
  const height = Math.round(markSize * 1.5)

  return (
    <Image
      src="/images/carawin_logo.png"
      alt="Carawin Technologies"
      width={width}
      height={height}
      priority
      sizes="(max-width: 1024px) 190px, 220px"
      className={cn(
        "block h-auto w-auto object-contain",
        className
      )}
    />
  )
}

export function CarawinBrandLink({
  className = "",
}: {
  className?: string
}) {
  return (
    <Link
      href="/"
      aria-label="Carawin Technologies home"
      className={cn(
        "inline-flex shrink-0 items-center",
        className
      )}
    >
      <CarawinWordmark markSize={54} />
    </Link>
  )
}