import { notFound } from "next/navigation"

const sectors = [
    "digital",
    "energy",
    "government",
    "industry",
]

export function generateStaticParams() {
    return sectors.map((slug) => ({
        slug,
    }))
}

export default async function Page(props: {
    params: Promise<{ slug: string }> | { slug: string }
}) {
    const resolvedParams = await Promise.resolve(props.params)
    const slug = resolvedParams?.slug

    if (!slug || !sectors.includes(slug)) {
        notFound()
    }

    return (
        <main className="min-h-screen px-6 py-32">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-4xl font-bold capitalize">
                    {slug}
                </h1>
            </div>
        </main>
    )
}