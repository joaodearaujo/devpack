import { ArrowDownAZ } from 'lucide-react'
import type { PackageSort } from '../types/package.types'

export function SortSelect({ value, onChange }: { value: PackageSort; onChange: (value: PackageSort) => void }) {
    return (
        <label className="flex items-center gap-2 text-xs text-app-text-muted">
            <ArrowDownAZ aria-hidden="true" size={14} />
            <span className="sr-only">Sort packages</span>
            <select
                value={value}
                onChange={(event) => onChange(event.target.value as PackageSort)}
                className="rounded-md border border-app-border-strong bg-app-bg-surface px-2.5 py-2 text-xs text-app-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
                <option value="relevance">Relevance</option>
                <option value="popular">Popular first</option>
                <option value="name-asc">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
            </select>
        </label>
    )
}
