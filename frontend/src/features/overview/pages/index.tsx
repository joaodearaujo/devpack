import { Box } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import DefaultCard from '../../../components/cards/DefaultCard'
import {
    overviewStats,
    popularPackages,
    quickStartSteps,
} from '../data/overview.data'
import { Header } from '../../../components/layout/Header'
import { usePackageSelection } from '../../../app/providers/PackagesProvider'
import { usePageMeta } from '../../../lib/usePageMeta'

export default function Overview() {
    usePageMeta({
        title: 'Overview',
        description:
            'Explore DevPack and build an Ubuntu development environment from curated packages.',
    })

    const { selectedPackages } = usePackageSelection()

    const stats = [
        {
            value: overviewStats.totalPackages,
            title: 'Total Packages',
            description: 'in catalog',
        },
        {
            value: overviewStats.categories,
            title: 'Categories',
            description: 'tool types',
        },
        {
            value: selectedPackages.length,
            title: 'Selected',
            description: 'packages',
        },
        {
            value: overviewStats.ubuntuSupport,
            title: 'Ubuntu Support',
            description: 'LTS versions',
        },
    ]

    return (
        <div className="flex min-h-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <Header
                title="Welcome to DevPack"
                subtitle="Your Ubuntu developer environment, automated."
            />

            <section aria-label="DevPack statistics" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {stats.map((stat) => (
                    <article key={stat.title}>
                        <DefaultCard className="flex h-full flex-col gap-2">
                            <strong className="text-3xl text-primary">{stat.value}</strong>
                            <h2 className="text-sm font-semibold">{stat.title}</h2>
                            <p className="text-xs text-app-text-muted">{stat.description}</p>
                        </DefaultCard>
                    </article>
                ))}
            </section>

            <section aria-labelledby="quick-start-title">
                <DefaultCard className="flex flex-col gap-4">
                    <h2 id="quick-start-title" className="font-semibold">Quick Start</h2>
                    <ol>
                        {quickStartSteps.map((step) => (
                            <li key={step.number} className="mb-2 flex gap-6 text-sm text-app-text-muted last:mb-0">
                                <span aria-hidden="true" className="text-primary">{step.number}</span>
                                <span>{step.text}</span>
                            </li>
                        ))}
                    </ol>
                    <NavLink
                        to="/packages"
                        className="flex w-fit items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <Box aria-hidden="true" size={15} strokeWidth={3} />
                        Browse Packages
                    </NavLink>
                </DefaultCard>
            </section>

            <section aria-labelledby="popular-packages-title">
                <DefaultCard className="flex flex-col gap-4">
                    <h2 id="popular-packages-title" className="font-semibold">Popular Packages</h2>
                    <ul className="flex flex-wrap gap-2">
                        {popularPackages.map((pkg) => (
                            <li key={pkg.id}>
                                <span className="flex items-center gap-2 rounded-md border border-app-border bg-app-bg-surface px-2 py-1 text-sm text-app-text-muted">
                                    <span aria-hidden="true" className="size-2 rounded-full bg-primary/70" />
                                    {pkg.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </DefaultCard>
            </section>
        </div>
    )
}
