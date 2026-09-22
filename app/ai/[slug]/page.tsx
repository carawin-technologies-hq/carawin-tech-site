import { notFound } from "next/navigation"
import { aiProducts } from "@/lib/carawin-content"
import { DetailPage } from "@/components/detail-page"

export function generateStaticParams(){return aiProducts.map(x=>({slug:x.slug}))}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const x=aiProducts.find(y=>y.slug===slug)
  if(!x)notFound()
  return <DetailPage eyebrow={`Carawin AI · ${x.short}`} title={x.name} description={x.desc} detail={x} />
}
