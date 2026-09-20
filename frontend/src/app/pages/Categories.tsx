import { ArrowRight, Boxes } from 'lucide-react'
import { Link } from 'react-router-dom'
import DefaultCard from '../../components/cards/DefaultCard'
import { Header } from '../../components/layout/Header'
import { categories } from '../../features/packages/data/packages.data'
import { usePageMeta } from '../../lib/usePageMeta'

export default function Categories() {
    usePageMeta({
        title: 'Categories',
        description: 'Explore DevPack package categories and their curated Linux tooling.',
    })

    return (
        <div className="flex min-h-full max-w-6xl flex-col gap-7 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <Header eyebrow="Catalog" title="Categories" subtitle="Browse packages by the workflow they support." />
            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {categories.map((category) => (
                    <li key={category.name}>
                        <DefaultCard className="flex h-full flex-col gap-4">
                            <span className="flex size-10 items-center justify-center rounded-lg border border-app-border-strong bg-app-bg-surface text-primary">
                                <Boxes aria-hidden="true" size={18} />
                            </span>
                            <div>
                                <h2 className="font-semibold">{category.name}</h2>
                                <p className="mt-1 text-xs text-app-text-muted">{category.count} curated package(s)</p>
                            </div>
                            {category.name === 'All' ? (
                                <Link to="/packages" className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                                    View all
                                    <ArrowRight aria-hidden="true" size={13} />
                                </Link>
                            ) : (
                                <Link to={`/packages?category=${encodeURIComponent(category.name)}`} className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                                    Browse category
                                    <ArrowRight aria-hidden="true" size={13} />
                                </Link>
                            )}
                        </DefaultCard>
                    </li>
                ))}
            </ul>
        </div>
    )
}
