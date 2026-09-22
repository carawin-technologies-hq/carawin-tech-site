import { ListPage } from "@/components/list-page"
import { solutions } from "@/lib/carawin-content"

export default function Page() {
    return (
        <ListPage
            eyebrow="Solutions"
            title="Technology for every layer of education."
            description="From connected classrooms to digital learning, institutional systems and teacher capability, Carawin connects the essential pieces into one ecosystem."
            items={solutions.map((x) => ({
                name: x.name,
                slug: `/solutions/${x.slug}`,
                desc: x.desc,
                image: x.image,
            }))}
        />
    )
}