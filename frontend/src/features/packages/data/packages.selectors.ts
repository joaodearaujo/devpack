import type { Package, PackageSort } from '../types/package.types'

type FilterOptions = {
    search: string
    category: string
    sort: PackageSort
}

export function filterPackages(packages: Package[], { search, category, sort }: FilterOptions) {
    const normalizedSearch = search.trim().toLowerCase()

    const filtered = packages.filter((pack) => {
        const matchesCategory = category === 'All' || pack.category === category
        const haystack = [pack.name, pack.description, ...pack.tags].join(' ').toLowerCase()
        const matchesSearch = normalizedSearch.length === 0 || haystack.includes(normalizedSearch)

        return matchesCategory && matchesSearch
    })

    return [...filtered].sort((a, b) => {
        if (sort === 'name-asc') return a.name.localeCompare(b.name)
        if (sort === 'name-desc') return b.name.localeCompare(a.name)
        if (sort === 'popular') return Number(b.popular) - Number(a.popular) || a.name.localeCompare(b.name)

        if (!normalizedSearch) {
            return Number(b.popular) - Number(a.popular) || a.name.localeCompare(b.name)
        }

        const aStarts = a.name.toLowerCase().startsWith(normalizedSearch)
        const bStarts = b.name.toLowerCase().startsWith(normalizedSearch)

        return Number(bStarts) - Number(aStarts) || Number(b.popular) - Number(a.popular) || a.name.localeCompare(b.name)
    })
}
