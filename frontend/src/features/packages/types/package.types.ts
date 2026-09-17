export type Package = {
    id: string
    name: string
    version: string
    description: string
    hashtags: string[]
    category: string
    popular: boolean
    installCommand?: string
}

export type PackageCategory = {
    name: string
    count: number
}
