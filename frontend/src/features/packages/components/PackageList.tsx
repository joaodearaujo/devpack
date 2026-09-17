import type { Package } from '../types/package.types'
import { PackageCard } from './PackageCard'

export function PackageList({ packages }: { packages: Package[] }) {
    return (
        <ul className="flex max-w-full flex-wrap gap-2">
            {packages.map((pack) => (
                <li key={pack.name} className="flex min-w-80 flex-1">
                    <PackageCard package={pack} />
                </li>
            ))}
        </ul>
    )
}