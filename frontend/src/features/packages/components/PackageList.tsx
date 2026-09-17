import type { Package } from '../types/package.types'
import { PackageCard } from './PackageCard'

export function PackageList({ packages }: { packages: Package[] }) {
    if (packages.length === 0) {
        return (
            <p className="rounded-lg border border-dashed border-app-border-strong p-8 text-center text-sm text-app-text-muted">
                No packages match your search.
            </p>
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
