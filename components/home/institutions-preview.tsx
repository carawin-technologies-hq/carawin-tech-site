
import Link from "next/link"
import { ArrowUpRight, School, University, Landmark } from "lucide-react"
const cards=[['Future-Ready Schools','Infrastructure + learning + AI + teacher capability',School,'/institutions/future-ready-schools'],['Digital University','Learning + administration + research + intelligence',University,'/institutions/digital-university'],['Government','Strategy + infrastructure + technology + AI + governance',Landmark,'/government']]
export function InstitutionsPreview(){return <section className="container-x py-24 sm:py-32"><p className="kicker text-[var(--crimson)]">04 / Institutions</p><h2 className="h2 mt-5 max-w-3xl">From classroom to national scale.</h2><div className="mt-12 grid gap-4 lg:grid-cols-3">{cards.map(([title,desc,Icon,href])=><Link href={href as string} key={title as string} className="node-card rounded-3xl p-7"><div className="flex items-center justify-between"><Icon size={25} className="text-[var(--crimson)]"/><ArrowUpRight size={17} className="text-[var(--muted)]"/></div><h3 className="mt-16 text-2xl font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{desc as string}</p></Link>)}</div></section>}

