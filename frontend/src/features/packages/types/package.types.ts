export const CATEGORY_NAMES = [
    'Languages',
    'Editors',
    'Version Control',
    'Containers',
    'CLI Tools',
    'Databases',
    'Build Tools',
] as const

export type PackageCategory = (typeof CATEGORY_NAMES)[number]
export type InstallManager = 'apt' | 'snap' | 'manual'

export type InstallRecipe = {
    manager: InstallManager
    packages?: string[]
    command?: string
    note?: string
}

export type Package = {
    id: string
    name: string
    description: string
    tags: string[]
    category: PackageCategory
    popular: boolean
    source: string
    install: InstallRecipe
}

export type PackageCategoryOption = {
    name: 'All' | PackageCategory
    count: number
}

export type PackageSort = 'relevance' | 'name-asc' | 'name-desc' | 'popular'
