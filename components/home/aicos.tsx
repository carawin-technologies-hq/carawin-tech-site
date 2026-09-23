import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const audiences = [
    {
        role: "Students",
        items: [
            "Personalised timetables & learning paths",
            "Homework, assignments & feedback loop",
            "Attendance, progress & performance tracking",
            "Digital library & content access",
        ],
    },
    {
        role: "Teachers",
        items: [
            "Lesson planning & content delivery tools",
            "Student progress dashboards",
            "Automated assessment & grading",
            "Collaboration with colleagues & leadership",
        ],
    },
    {
        role: "Parents",
        items: [
            "Real-time attendance & performance alerts",
            "Communication with teachers & school",
            "Fee management & school calendar",
            "Child wellbeing & engagement overview",
        ],
    },
    {
        role: "School Leadership",
        items: [
            "Whole-school analytics & reporting",
            "Staff management & performance data",
            "Examination & results management",
            "Strategic planning & governance dashboards",
        ],
    },
]

export function AICOS() {
    return (
        <section className="relative overflow-hidden bg-[#071a33] py-24 text-white sm:py-32">
            {/* Atmospheric glow */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 15% 40%, #b5122b 0, transparent 30%), radial-gradient(circle at 85% 60%, #1a4a8a 0, transparent 30%)",
                }}
            />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#071a33] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071a33] to-transparent" />

            <div className="container-x relative">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
                    <div>
                        <p className="kicker text-[#e26a7a]">03 / AICOS</p>
                        <h2 className="h2 mt-5 max-w-2xl">
                            The AI-Powered School
                            <br />
                            Operating System.
                        </h2>
                        <p className="mt-5 max-w-2xl text-white/60 leading-7">
                            AICOS is Carawin&apos;s unified school management platform — connecting students, teachers, parents and school leadership into one intelligent operating system. From daily attendance to strategic analytics, AICOS runs the intelligence of your school.
                        </p>
                    </div>
                    <Link
                        href="/solutions/aicos"
                        className="btn-secondary shrink-0 border-white/20 bg-white/5 text-white hover:text-white"
                    >
                        Explore AICOS <ArrowUpRight size={15} />
                    </Link>
                </div>

                {/* Audience Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {audiences.map(({ role, items }, i) => (
                        <div
                            key={role}
                            className="group rounded-2xl border border-white/10 bg-white/[.04] p-6 transition-all duration-300 hover:border-[#b5122b]/60 hover:bg-white/[.07]"
                        >
                            <div className="flex items-center justify-between border-b border-white/[.12] pb-3 mb-4">
                                <span className="font-mono text-[11px] font-bold text-[#e26a7a] tracking-widest uppercase">
                                    0{i + 1} / Role
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#e26a7a] transition-colors">{role}</h3>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-white/60 leading-relaxed">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e26a7a] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
