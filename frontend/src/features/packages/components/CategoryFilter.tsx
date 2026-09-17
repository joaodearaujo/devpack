import { categories } from '../data/packages.data'
import { cn } from '../../../lib/utils'

interface CategoryFilterProps {
    value: string
    onChange: (category: string) => void
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
    return (
        <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter packages by category"
        >
            {categories.map((category) => {
                const isActive = value === category.name

                return (
                    <button
                        type="button"
                        key={category.name}
                        aria-pressed={isActive}
                        onClick={() => onChange(category.name)}
                        className={cn(
                            'flex cursor-pointer items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                            isActive
                                ? 'border-primary-border bg-primary-bg text-primary'
                                : 'border-app-border-strong bg-app-bg-surface text-app-text-muted hover:border-primary-border hover:text-primary',
                        )}
                    >
                        <span>{category.name}</span>
                        <span aria-label={`${category.count} packages`}>
                            {category.count}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
