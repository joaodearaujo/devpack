import { SearchX } from 'lucide-react'
import type { Package } from '../types/package.types'
import { PackageCard } from './PackageCard'

export function PackageList({ packages }: { packages: Package[] }) {
    if (packages.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-app-border-strong px-6 py-12 text-center">
                <SearchX aria-hidden="true" size={28} className="mb-3 text-app-text-muted" />
                <h3 className="text-sm font-semibold">No packages found</h3>
                <p className="mt-1 max-w-sm text-xs leading-5 text-app-text-muted">
                    Try a different search term or reset the category and sort filters.
                </p>
            </div>
        )
    }

    return (
        <ul className="grid grid-cols-1 gap-3 xl:grid-cols-2">
            {packages.map((pack) => (
                <li key={pack.id} className="min-w-0">
                    <PackageCard package={pack} />
                </li>
            ))}
        </ul>
    )
}
