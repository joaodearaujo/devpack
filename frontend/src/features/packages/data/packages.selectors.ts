import type { Package } from '../types/package.types'

export function filterPackages(
    packages: Package[],
    search: string,
    category: string,
) {
    const normalizedSearch = search.trim().toLowerCase()

    return packages.filter((pack) => {
        const matchesCategory = category === 'All' || pack.category === category
        const matchesSearch =
            normalizedSearch.length === 0 ||
            pack.name.toLowerCase().includes(normalizedSearch) ||
            pack.description.toLowerCase().includes(normalizedSearch) ||
            pack.hashtags.some((hashtag) =>
                hashtag.toLowerCase().includes(normalizedSearch),
            )

        return matchesCategory && matchesSearch
    })
}
