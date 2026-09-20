import { RotateCcw } from 'lucide-react'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Header } from '../../../components/layout/Header'
import SearchInput from '../../../components/layout/SearchInput'
import { usePackageSelection } from '../../../app/providers/PackagesProvider'
import { usePageMeta } from '../../../lib/usePageMeta'
import { categories, packages } from '../data/packages.data'
import { filterPackages } from '../data/packages.selectors'
import type { PackageSort } from '../types/package.types'
import { CategoryFilter } from '../components/CategoryFilter'
import InstallScript from '../components/InstallScript'
import { PackageList } from '../components/PackageList'
import { SortSelect } from '../components/SortSelect'

const DEFAULTS = { search: '', category: 'All', sort: 'relevance' as PackageSort }

export default function Packages() {
    usePageMeta({
        title: 'Packages',
        description: 'Build an inspectable Ubuntu development setup from curated Linux packages.',
    })

    const [params, setParams] = useSearchParams()
    const { selectedPackages, clearSelection, selectAllPackages } = usePackageSelection()

    const search = params.get('q') ?? DEFAULTS.search
    const category = params.get('category') ?? DEFAULTS.category
    const sort = (params.get('sort') as PackageSort) || DEFAULTS.sort

    const filteredPackages = useMemo(
        () => filterPackages(packages, { search, category, sort }),
        [category, search, sort],
    )

    function updateParams(next: Partial<typeof DEFAULTS>) {
        const nextParams = new URLSearchParams(params)
        const values = { search, category, sort, ...next }

        nextParams.delete('q')
        nextParams.delete('category')
        nextParams.delete('sort')

        if (values.search.trim()) nextParams.set('q', values.search.trim())
        if (values.category !== DEFAULTS.category) nextParams.set('category', values.category)
        if (values.sort !== DEFAULTS.sort) nextParams.set('sort', values.sort)

        setParams(nextParams)
    }

    function resetFilters() {
        setParams({})
    }

    return (
        <div className="flex min-h-full flex-col lg:flex-row">
            <section className="min-w-0 flex-1 border-b border-app-border px-4 py-6 sm:px-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                <div className="mx-auto flex max-w-5xl flex-col gap-7">
                    <Header
                        eyebrow="Catalog"
                        title="Build your development setup"
                        subtitle="Choose the tools you need. DevPack turns explicit selections into a reviewable installation script."
                    />

                    <section aria-labelledby="package-catalog-title" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="min-w-0 flex-1">
                                <h2 id="package-catalog-title" className="sr-only">Package catalog</h2>
                                <SearchInput value={search} onChange={(value) => updateParams({ search: value })} />
                            </div>
                            <SortSelect value={sort} onChange={(value) => updateParams({ sort: value })} />
                        </div>

                        <CategoryFilter value={category} onChange={(value) => updateParams({ category: value })} />

                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-app-text-muted">
                            <p aria-live="polite">
                                <strong className="text-app-white">{filteredPackages.length}</strong> of {packages.length} packages
                                {search.trim() ? ` matching “${search.trim()}”` : ''}
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    disabled={!search && category === 'All' && sort === 'relevance'}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-app-border-strong px-2 py-1.5 transition-colors hover:text-app-white disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <RotateCcw aria-hidden="true" size={12} />
                                    Reset filters
                                </button>
                                <button
                                    type="button"
                                    onClick={selectAllPackages}
                                    className="rounded-md border border-app-border-strong px-2 py-1.5 transition-colors hover:border-primary-border hover:text-primary"
                                >
                                    Select all
                                </button>
                                {selectedPackages.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={clearSelection}
                                        className="rounded-md border border-app-border-strong px-2 py-1.5 transition-colors hover:text-app-white"
                                    >
                                        Clear selection
                                    </button>
                                )}
                            </div>
                        </div>

                        <PackageList packages={filteredPackages} />
                    </section>
                </div>
            </section>

            <aside className="w-full shrink-0 p-4 sm:p-6 lg:sticky lg:top-12 lg:h-[calc(100vh-3rem)] lg:w-96 lg:p-8">
                <InstallScript />
            </aside>
        </div>
    )
}
