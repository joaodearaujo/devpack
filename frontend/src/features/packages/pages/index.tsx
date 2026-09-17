import { useMemo, useState } from 'react'
import { Header } from '../../../components/layout/Header'
import SearchInput from '../components/SearchInput'
import { CategoryFilter } from '../components/CategoryFilter'
import InstallScript from '../components/InstallScript'
import { PackageList } from '../components/PackageList'
import { packages } from '../data/packages.data'
import { filterPackages } from '../data/packages.selectors'
import { usePackageSelection } from '../../../app/providers/PackagesProvider'
import { usePageMeta } from '../../../lib/usePageMeta'

export function Packages() {
    usePageMeta({
        title: 'Packages',
        description: 'Browse and select development tools for your Ubuntu environment.',
    })

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    const filteredPackages = useMemo(
        () => filterPackages(packages, search, category),
        [category, search],
    )

    return (
        <div className="flex min-h-full flex-col lg:flex-row">
            <section className="min-w-0 flex-1 border-app-border border-b px-4 py-6 sm:px-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                <div className="mx-auto flex max-w-5xl flex-col gap-8">
                    <Header
                        title="Build your development setup"
                        subtitle="Select the tools you need and DevPack will generate the installation commands."
                    />

                    <section aria-labelledby="package-catalog-title" className="flex flex-col gap-4">
                        <h2 id="package-catalog-title" className="sr-only">
                            Package catalog
                        </h2>

                        <SearchInput value={search} onChange={setSearch} />

                        <CategoryFilter value={category} onChange={setCategory} />

                        <p className="text-sm text-app-text-muted" aria-live="polite">
                            {filteredPackages.length} packages
                            {search.trim() ? ` for “${search.trim()}”` : ''}
                        </p>

                        <PackageList packages={filteredPackages} />
                    </section>
                </div>
            </section>

            <aside className="w-full shrink-0 p-4 sm:p-6 lg:sticky lg:top-0 lg:h-[calc(100vh-3rem)] lg:w-80 lg:p-8">
                <InstallScript />
            </aside>
        </div>
    )
}
