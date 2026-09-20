import { ArrowRight, Box, CheckCircle2, History, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import DefaultCard from '../../../components/cards/DefaultCard'
import { Header } from '../../../components/layout/Header'
import { useHistory } from '../../../app/providers/HistoryProvider'
import { usePackageSelection } from '../../../app/providers/PackagesProvider'
import { usePageMeta } from '../../../lib/usePageMeta'
import { categories, packages } from '../../packages/data/packages.data'

export default function Overview() {
    usePageMeta({
        title: 'Overview',
        description: 'Build and review a Linux development environment with DevPack.',
    })

    const { selectedPackages } = usePackageSelection()
    const { entries } = useHistory()
    const popularPackages = packages.filter((pkg) => pkg.popular).slice(0, 8)

    const stats = [
        { value: packages.length, label: 'Packages', detail: 'curated catalog' },
        { value: categories.length, label: 'Categories', detail: 'organized workflows' },
        { value: selectedPackages.length, label: 'Selected', detail: 'current setup' },
        { value: entries.length, label: 'History', detail: 'local generations' },
    ]

    return (
        <div className="flex min-h-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <Header
                eyebrow="Linux environment builder"
                title="Build a setup you can understand."
                subtitle="Discover packages, make explicit selections, inspect the generated commands, and keep a local history of your setup."
            />

            <section aria-label="DevPack statistics" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {stats.map((stat) => (
                    <article key={stat.label}>
                        <DefaultCard className="flex h-full flex-col gap-1.5">
                            <strong className="text-3xl tracking-tight text-primary">{stat.value}</strong>
                            <h2 className="text-sm font-semibold">{stat.label}</h2>
                            <p className="text-xs text-app-text-muted">{stat.detail}</p>
                        </DefaultCard>
                    </article>
                ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
                <DefaultCard className="flex flex-col gap-5">
                    <div className="flex items-start gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary-border bg-primary-bg text-primary">
                            <Sparkles aria-hidden="true" size={18} />
                        </span>
                        <div>
                            <h2 className="font-semibold">Quick start</h2>
                            <p className="mt-1 text-xs leading-5 text-app-text-muted">The core DevPack workflow is deliberately explicit.</p>
                        </div>
                    </div>

                    <ol className="space-y-4">
                        {[
                            'Browse the curated catalog and filter by workflow.',
                            'Select the packages that belong in your environment.',
                            'Review the generated Bash script and any manual-install notes.',
                            'Copy the script and run it yourself in the terminal.',
                        ].map((step, index) => (
                            <li key={step} className="flex gap-3 text-sm">
                                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-primary-border bg-primary-bg text-[10px] font-semibold text-primary">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="pt-0.5 text-app-text-subtle">{step}</span>
                            </li>
                        ))}
                    </ol>

                    <Link
                        to="/packages"
                        className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <Box aria-hidden="true" size={15} />
                        Open package catalog
                        <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                </DefaultCard>

                <DefaultCard className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="font-semibold">Current setup</h2>
                            <p className="mt-1 text-xs text-app-text-muted">Your selection persists locally.</p>
                        </div>
                        <CheckCircle2 aria-hidden="true" size={18} className={selectedPackages.length ? 'text-primary' : 'text-app-text-muted'} />
                    </div>

                    {selectedPackages.length ? (
                        <ul className="max-h-52 space-y-2 overflow-auto pr-1">
                            {selectedPackages.slice(0, 8).map((pkg) => (
                                <li key={pkg.id} className="flex items-center justify-between rounded-md border border-app-border bg-app-bg-surface px-3 py-2 text-xs">
                                    <span className="truncate">{pkg.name}</span>
                                    <span className="ml-3 shrink-0 text-[10px] text-app-text-muted">{pkg.source}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="rounded-lg border border-dashed border-app-border-strong px-4 py-8 text-center text-xs leading-5 text-app-text-muted">
                            No packages selected yet.
                        </p>
                    )}

                    <div className="flex gap-2 pt-1">
                        <Link to="/setup" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                            Review setup
                            <ArrowRight aria-hidden="true" size={13} />
                        </Link>
                        <Link to="/history" className="inline-flex items-center gap-1.5 text-xs font-semibold text-app-text-muted hover:text-app-white">
                            <History aria-hidden="true" size={13} />
                            History
                        </Link>
                    </div>
                </DefaultCard>
            </section>

            <section aria-labelledby="popular-packages-title">
                <DefaultCard className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 id="popular-packages-title" className="font-semibold">Popular starting points</h2>
                            <p className="mt-1 text-xs text-app-text-muted">Common tools for a general developer workstation.</p>
                        </div>
                        <Link to="/packages" className="text-xs font-semibold text-primary hover:underline">View catalog</Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {popularPackages.map((pkg) => (
                            <li key={pkg.id} className="rounded-lg border border-app-border bg-app-bg-surface px-3 py-2.5">
                                <p className="truncate text-xs font-semibold">{pkg.name}</p>
                                <p className="mt-1 text-[10px] text-app-text-muted">{pkg.category}</p>
                            </li>
                        ))}
                    </ul>
                </DefaultCard>
            </section>
        </div>
    )
}
