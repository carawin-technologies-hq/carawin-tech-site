import { notFound } from "next/navigation"
import { institutions } from "@/lib/carawin-content"
import { DetailPage } from "@/components/detail-page"

export function generateStaticParams(){return institutions.map(x=>({slug:x.slug}))}

export default async function Page(props: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await Promise.resolve(props.params)
  const slug = resolvedParams?.slug
  const x = institutions.find((y) => y.slug === slug)
  if (!x) notFound()
  return <DetailPage eyebrow="For institutions" title={x.name} description={x.desc} detail={x} />
}
