import DefaultCard from '../../../components/cards/DefaultCard'
import type { Package } from '../types/package.types'
import { PopularTag } from './PopularTag'

export function PackageCard({
    package: pack,
}: {
    package: Package
}) {
    return (
        <DefaultCard className="flex flex-1 items-start gap-4">
            <button
                type="button"
                className="size-4 shrink-0 rounded-sm border"
                aria-label={`Select ${pack.name}`}
            />

            <div className="flex-1">
                <div className="flex gap-2">
                    <h2>{pack.name}</h2>

                    {pack.popular && <PopularTag />}

                    <p className="ml-auto">{pack.version}</p>
                </div>

                <p className="mb-3">{pack.description}</p>

                <div className="flex gap-2">
                    {pack.hashtags.map((hashtag) => (
                        <span
                            key={hashtag}
                            className="rounded-sm border border-app-border bg-app-bg-surface px-1 py-0.5 text-[11px] text-app-text-muted"
                        >
                            {hashtag}
                        </span>
                    ))}
                </div>
            </div>
        </DefaultCard>
    )
}