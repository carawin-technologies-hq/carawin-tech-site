import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type ListItem = {
    name: string
    slug: string
    desc: string
    image?: string
}

export function ListPage({
    eyebrow,
    title,
    description,
    items,
}: {
    eyebrow: string
    title: string
    description: string
    items: ListItem[]
}) {
    return (
        <div>
            {/* =========================================================
          PAGE INTRO
      ========================================================= */}
            <section className="container-x py-24 sm:py-32">
                <p className="kicker text-[var(--crimson)]">
                    {eyebrow}
                </p>

                <h1 className="h1 mt-6 max-w-5xl">
                    {title}
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                    {description}
                </p>
            </section>

            {/* =========================================================
          SOLUTION LIST
      ========================================================= */}
            <section className="container-x pb-24 sm:pb-32">
                <div className="grid gap-5">
                    {items.map((item, index) => (
                        <Link
                            key={item.slug}
                            href={item.slug}
                            className="
                node-card
                group
                overflow-hidden
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
                        >
                            <div
                                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-stretch
                "
                            >
                                {/* =================================================
                    IMAGE
                    Only rendered when an image actually exists.
                    No empty attachment/image box.
                ================================================= */}
                                {item.image && (
                                    <div
                                        className="
                      relative
                      aspect-[16/9]
                      w-full
                      shrink-0
                      overflow-hidden
                      sm:aspect-auto
                      sm:h-auto
                      sm:w-[280px]
                      lg:w-[330px]
                    "
                                    >
                                        <Image
                                            src={`/images/details/${item.image}`}
                                            alt={`${item.name} visual`}
                                            fill
                                            sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 280px,
                        330px
                      "
                                            className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.035]
                      "
                                        />

                                        <div
                                            className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/15
                        via-transparent
                        to-transparent
                      "
                                        />
                                    </div>
                                )}

                                {/* =================================================
                    CONTENT
                ================================================= */}
                                <div
                                    className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    justify-center
                    gap-5
                    p-6
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:p-8
                  "
                                >
                                    <div className="flex min-w-0 gap-5">
                                        {/* Number */}
                                        <span
                                            className="
                        shrink-0
                        pt-1
                        font-mono
                        text-xs
                        text-[var(--muted)]
                      "
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {/* Text */}
                                        <div className="min-w-0">
                                            <h2
                                                className="
                          text-2xl
                          font-bold
                          tracking-tight
                          text-[var(--foreground)]
                        "
                                            >
                                                {item.name}
                                            </h2>

                                            <p
                                                className="
                          mt-2
                          max-w-2xl
                          text-sm
                          leading-6
                          text-[var(--muted)]
                        "
                                            >
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <ArrowUpRight
                                        size={20}
                                        className="
                      shrink-0
                      text-[var(--muted)]
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[var(--crimson)]
                    "
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}