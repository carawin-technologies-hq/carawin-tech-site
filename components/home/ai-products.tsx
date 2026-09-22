import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { aiProducts } from "@/lib/carawin-content"

/*
 * Homepage-only image mapping.
 *
 * IMPORTANT:
 * Do not change the image values inside carawin-content.ts.
 * Those values are also used by the individual AI product pages.
 *
 * These replacements affect ONLY this homepage component.
 */
const homepageImages: Record<string, string> = {
    adapt: "/images/details/adaptability.png",
    teach: "/images/details/teach.png",
    assess: "/images/details/assess.png",
    career: "/images/details/career.png",
    content: "/images/details/content.png",
    voice: "/images/details/language.png",
    stem: "/images/details/stem.png",
    insight: "/images/details/insight.png",
}

export function AIProducts() {
    return (
        <section className="relative overflow-hidden bg-[#071a33] py-24 text-white sm:py-32">
            {/* Section backdrop */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/details/solutions-ecosystem.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center opacity-[0.10]"
                    priority={false}
                />

                {/* Dark wash */}
                <div className="absolute inset-0 bg-[#071a33]/85" />

                {/* Top fade */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#071a33] to-transparent" />

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071a33] to-transparent" />
            </div>

            {/* Existing atmospheric accents */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 30%, #b5122b 0, transparent 22%), radial-gradient(circle at 80% 70%, #2d6ea6 0, transparent 24%)",
                }}
            />

            <div className="container-x relative">
                {/* Section heading */}
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div>
                        <p className="kicker text-[#e26a7a]">
                            02 / Carawin AI
                        </p>

                        <h2 className="h2 mt-5 max-w-3xl">
                            The intelligence layer for education.
                        </h2>

                        <p className="mt-5 max-w-2xl text-white/60 leading-7">
                            Eight connected AI capabilities designed around
                            learners, teachers, institutions and education
                            systems.
                        </p>
                    </div>

                    <Link
                        href="/ai"
                        className="btn-secondary border-white/20 bg-white/5 text-white hover:text-white"
                    >
                        Explore the AI platform
                        <ArrowUpRight size={15} />
                    </Link>
                </div>

                {/* AI product cards */}
                <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {aiProducts.map((p, i) => {
                        const image =
                            homepageImages[p.slug] ||
                            "/images/details/solutions-ecosystem.png"

                        return (
                            <Link
                                href={`/ai/${p.slug}`}
                                key={p.slug}
                                className="
                                    group
                                    relative
                                    min-h-[340px]
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[.035]
                                    transition
                                    duration-500
                                    hover:-translate-y-1
                                    hover:border-[#b5122b]/70
                                "
                            >
                                {/* Card image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={image}
                                        alt={p.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="
                                            object-cover
                                            object-center
                                            opacity-55
                                            saturate-90
                                            contrast-105
                                            transition-all
                                            duration-700
                                            ease-out
                                            group-hover:scale-105
                                            group-hover:opacity-70
                                            group-hover:saturate-100
                                        "
                                        priority={i < 4}
                                    />

                                    {/* Dark readability layer */}
                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-b
                                            from-[#071a33]/45
                                            via-[#071a33]/35
                                            to-[#071a33]/95
                                        "
                                    />

                                    {/* Extra bottom readability */}
                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-[#071a33]/90
                                            via-transparent
                                            to-transparent
                                        "
                                    />
                                </div>

                                {/* Card content */}
                                <div className="relative z-10 flex min-h-[340px] flex-col p-6">
                                    {/* Icon + number */}
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="
                                                grid
                                                h-9
                                                w-9
                                                place-items-center
                                                rounded-lg
                                                border
                                                border-white/10
                                                bg-[#071a33]/65
                                                text-[#e05268]
                                                backdrop-blur-sm
                                            "
                                        >
                                            <Sparkles size={17} />
                                        </span>

                                        <span className="font-mono text-[10px] text-white/45">
                                            0{i + 1}
                                        </span>
                                    </div>

                                    {/* Card information */}
                                    <div className="mt-auto">
                                        <h3 className="text-xl font-bold text-white">
                                            {p.name}
                                        </h3>

                                        <p className="mt-2 text-xs uppercase tracking-[.13em] text-[#e05268]">
                                            {p.short}
                                        </p>

                                        <p className="mt-4 text-sm leading-6 text-white/65">
                                            {p.desc}
                                        </p>

                                        <span
                                            className="
                                                mt-6
                                                inline-flex
                                                items-center
                                                gap-1
                                                text-xs
                                                font-bold
                                                text-white/65
                                                transition
                                                group-hover:text-white
                                            "
                                        >
                                            Explore
                                            <ArrowUpRight size={13} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}