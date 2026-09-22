
import { notFound } from "next/navigation"
import { DetailPage } from "@/components/detail-page"
const data={
 "ai-education": ["AI & Education","How intelligence can support better learning outcomes.","Carawin explores practical AI applications across personalised learning, teacher support, assessment and institutional insight."],
 "future-schools": ["Future of Schools","Designing schools for a technology-rich learning future.","Future-ready schools connect infrastructure, learning, teacher capability, data and responsible AI."],
 "digital-universities": ["Digital Universities","Building connected higher education ecosystems.","Digital university architecture brings learning, administration, research, career and analytics into one connected experience."],
 "government-technology": ["Government Technology","Transforming education at system scale.","Technology programmes need strategy, infrastructure, adoption, governance and measurable outcomes working together."],
 "stem-innovation": ["STEM & Innovation","Learning by making, experimenting and solving.","Modern STEM ecosystems give learners the tools, spaces and guidance to build future capabilities."],
 "career-intelligence": ["Career Intelligence","Connecting learning with future pathways.","Career intelligence can help learners understand skills, opportunities and pathways while institutions see emerging needs."],
} as const
export function generateStaticParams(){return Object.keys(data).map(slug=>({slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=data[slug as keyof typeof data];if(!x)notFound();return <DetailPage eyebrow={x[0]} title={x[0]} description={x[1]+" "+x[2]} items={["Research and perspective","Education-specific technology","Responsible AI","Implementation lessons","Future-focused thinking"]}/>}

