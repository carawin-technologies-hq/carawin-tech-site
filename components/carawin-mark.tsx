
import { cn } from "@/lib/utils"

type CarawinMarkProps = {
  className?: string
  size?: number
  /** Kept for API compatibility with existing callers; no longer used since
   *  we render the authentic logo image rather than an animated SVG path. */
  animated?: boolean
  color?: string
}

/**
 * The authentic Carawin mark — the real logo asset.
 *
 * The OUTER span is the fixed-size box (exact height, overflow hidden), and
 * the image is told height: 100% / width: auto. This guarantees the icon
 * can never render larger than `size` regardless of any competing CSS
 * elsewhere in the page (this mirrors the same fix applied to
 * carawin-wordmark.tsx after the header logo was found rendering oversized).
 */
export function CarawinMark({ className, size = 32 }: CarawinMarkProps) {
  return (
    <span className={cn("inline-flex shrink-0 items-center overflow-hidden", className)} style={{ height: size }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/carawin-icon.png"
        alt="Carawin"
        style={{ height: "100%", width: "auto", maxWidth: "none" }}
        className="object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  )
}

