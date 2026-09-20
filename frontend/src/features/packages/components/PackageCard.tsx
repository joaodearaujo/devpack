import { CheckCircle2, Download } from 'lucide-react'
import { PopularTag } from './PopularTag'
import SelectButton from './SelectButton'
import type { Package } from '../types/package.types'
import { usePackageSelection } from '../../../app/providers/PackagesProvider'
import { cn } from '../../../lib/utils'

export function PackageCard({ package: pack }: { package: Package }) {
    const { isPackageSelected, togglePackageSelection } = usePackageSelection()
    const isSelected = isPackageSelected(pack.id)

    return (
        <article
            className={cn(
                'relative flex min-h-full w-full flex-col gap-4 rounded-xl border bg-card-bg p-5 transition-colors focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-app-bg',
                isSelected
                    ? 'border-primary bg-primary-bg/40'
                    : 'border-app-border-strong hover:border-primary-border hover:bg-app-bg-surface',
            )}
        >
            <label className="flex cursor-pointer flex-col gap-4">
                <span className="sr-only">
                    {isSelected ? 'Deselect' : 'Select'} {pack.name}
                </span>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => togglePackageSelection(pack.id)}
                    className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                />

                <span className="flex items-start gap-4">
                    <SelectButton isChecked={isSelected} />

                    <span className="min-w-0 flex-1">
                        <span className="flex items-start gap-2">
                            <span className="min-w-0 text-sm font-semibold text-app-white">{pack.name}</span>
                            {pack.popular && <PopularTag />}
                            <span className="ml-auto flex shrink-0 items-center gap-1 rounded-full border border-app-border bg-app-bg-surface px-2 py-0.5 text-[10px] text-app-text-muted">
                                <Download aria-hidden="true" size={10} />
                                {pack.source}
                            </span>
                        </span>

                        <span className="mt-2 block text-xs leading-5 text-app-text-muted">
                            {pack.description}
                        </span>
                    </span>
                </span>

                <span className="flex flex-wrap items-center gap-2 pl-9">
                    {pack.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-app-border bg-app-bg-surface px-1.5 py-0.5 text-[10px] text-app-text-muted"
                        >
                            #{tag}
                        </span>
                    ))}
                    {isSelected && (
                        <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-primary">
                            <CheckCircle2 aria-hidden="true" size={12} />
                            Selected
                        </span>
                    )}
                </span>
            </label>
        </article>
    )
}
