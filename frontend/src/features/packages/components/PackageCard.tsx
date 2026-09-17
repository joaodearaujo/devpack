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
                'relative flex min-h-full w-full flex-col gap-4 rounded-lg border bg-card-bg p-5 transition-colors focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-app-bg',
                isSelected
                    ? 'border-primary bg-primary-bg/40'
                    : 'border-app-border-strong hover:border-primary-border hover:bg-app-bg-surface',
            )}
        >
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => togglePackageSelection(pack.id)}
                aria-label={`${isSelected ? 'Deselect' : 'Select'} ${pack.name}`}
                className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            />

            <div className="pointer-events-none flex items-start gap-4">
                <SelectButton isChecked={isSelected} />

                <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-2">
                        <h2 className="min-w-0 text-sm font-semibold">{pack.name}</h2>
                        {pack.popular && <PopularTag />}
                        <span className="ml-auto shrink-0 text-xs text-app-text-muted">
                            {pack.version}
                        </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-app-text-muted">
                        {pack.description}
                    </p>
                </div>
            </div>

            <div className="pointer-events-none flex flex-wrap gap-2 pl-9">
                {pack.hashtags.map((hashtag) => (
                    <span
                        key={hashtag}
                        className="rounded-sm border border-app-border bg-app-bg-surface px-1 py-0.5 text-[11px] text-app-text-muted"
                    >
                        {hashtag}
                    </span>
                ))}
            </div>
        </article>
    )
}
