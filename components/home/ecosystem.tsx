import Link from "next/link"
import Image from "next/image"
import {
    ArrowUpRight,
    BrainCircuit,
    Building2,
    Database,
    GraduationCap,
    Laptop,
    Users,
} from "lucide-react"

const items = [
    ["AI", "Intelligence layer", BrainCircuit, "/images/details/ai.png"],
    [
        "Education",
        "Learning journeys",
        GraduationCap,
        "/images/details/education.png",
    ],
    [
        "Infrastructure",
        "Future-ready spaces",
        Building2,
        "/images/details/infrastructure.png",
    ],
    [
        "Software",
        "Institutional systems",
        Laptop,
        "/images/details/software.png",
    ],
    [
        "Data",
        "Decision intelligence",
        Database,
        "/images/details/data.png",
    ],
    [
        "Human capability",
        "Teachers & teams",
        Users,
        "/images/details/humancapa.png",
    ],
] as const

export function Ecosystem() {
    return (
        <section id="ecosystem" className="container-x py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                {/* Left content */}
                <div>
                    <p className="kicker text-[var(--crimson)]">
                        01 / Carawin ecosystem
                    </p>

                    <h2 className="h2 mt-5">
                        One ecosystem.
                        <br />
                        The entire
                        <br />
                        education journey.
                    </h2>

                    <p className="mt-6 max-w-md text-[var(--muted)] leading-7">
                        Carawin brings AI, education, infrastructure, software,
                        data and human capability into one connected technology
                        ecosystem.
                    </p>

                    <Link
                        href="/about"
                        className="reveal-line mt-7 inline-flex items-center gap-2 pb-2 text-sm font-bold"
                    >
                        Discover Carawin
                        <ArrowUpRight size={15} />
                    </Link>
                </div>

                {/* Ecosystem cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                    {items.map(([title, sub, Icon, img], i) => (
                        <div
                            key={title}
                            className="node-card group relative min-h-[230px] overflow-hidden rounded-2xl p-6"
                            style={{
                                animation: `floatNode 6s ease-in-out ${i * 0.15
                                    }s infinite`,
                            }}
                        >
                            {/* Background image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={img}
                                    alt={title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="
                                        object-cover
                                        opacity-60
                                        saturate-75
                                        contrast-105
                                        grayscale-[20%]
                                        transition-all
                                        duration-700
                                        ease-out
                                        group-hover:scale-110
                                        group-hover:opacity-75
                                        group-hover:saturate-100
                                        group-hover:grayscale-0
                                    "
                                />

                                {/* Main readability overlay */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        from-[var(--surface)]/65
                                        via-[var(--surface)]/20
                                        to-transparent
                                    "
                                />

                                {/* Bottom fade */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[var(--surface)]/40
                                        via-transparent
                                        to-transparent
                                    "
                                />
                            </div>

                            {/* Card content */}
                            <div className="relative z-10 flex h-full flex-col">
                                {/* Icon + number */}
                                <div className="flex items-center justify-between">
                                    <span
                                        className="
                                            grid
                                            h-11
                                            w-11
                                            place-items-center
                                            rounded-xl
                                            bg-[var(--surface)]/90
                                            text-[var(--crimson)]
                                            shadow-sm
                                            ring-1
                                            ring-black/5
                                            backdrop-blur-sm
                                        "
                                    >
                                        <Icon size={20} />
                                    </span>

                                    <span className="text-xs font-medium text-[var(--muted)]">
                                        0{i + 1}
                                    </span>
                                </div>

                                {/* Text */}
                                <div className="mt-auto pt-12">
                                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                                        {title}
                                    </h3>

                                    <p className="mt-2 text-sm text-[var(--muted)]">
                                        {sub}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}