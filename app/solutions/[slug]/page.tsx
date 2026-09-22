import { notFound } from "next/navigation"
import { DetailPage } from "@/components/detail-page"
import { solutions } from "@/lib/carawin-content"

export function generateStaticParams(){return solutions.map(x=>({slug:x.slug}))}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const x=solutions.find(y=>y.slug===slug)
  if(!x)notFound()
  return <DetailPage eyebrow={x.group || "Solutions"} title={x.name} description={x.desc} detail={x} />
}
