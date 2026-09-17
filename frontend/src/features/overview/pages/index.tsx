import { Box } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import DefaultCard from '../../../components/cards/DefaultCard'
import {
    popularPackages,
    quickStartSteps,
    stats,
} from '../data/overview.data.ts'
import { Header } from '../../../components/layout/Header.tsx'

export default function OverView() {
    return (
        <div className="flex h-full max-w-240 flex-col gap-8 px-8 py-10">
            <Header
                title="Welcome to DevPack"
                subtitle="Your Ubuntu developer environment, automated."
            />

            <section aria-label="DevPack statistics" className="flex gap-4">
                {stats.map((stat) => (
                    <article key={stat.title} className="flex-1">
                        <DefaultCard className="flex h-full flex-col gap-2">
                            <strong className="text-primary text-3xl">
                                {stat.value}
                            </strong>

                            <h2 className="text-sm font-semibold">
                                {stat.title}
                            </h2>

                            <p className="text-app-text-muted text-xs font-thin">
                                {stat.description}
                            </p>
                        </DefaultCard>
                    </article>
                ))}
            </section>

            <section>
                <DefaultCard className="flex flex-col gap-4">
                    <h2 className="font-semibold">Quick Start</h2>

                    <ol>
                        {quickStartSteps.map((step) => (
                            <li
                                key={step.number}
                                className="text-app-text-muted mb-2 flex gap-6"
                            >
                                <span className="text-primary">
                                    {step.number}
                                </span>

                                {step.text}
                            </li>
                        ))}
                    </ol>

                    <NavLink
                        to="/packages"
                        className="bg-primary flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold"
                    >
                        <Box width={15} height={15} strokeWidth={3} />
                        Browse Packages
                    </NavLink>
                </DefaultCard>
            </section>

            <section>
                <DefaultCard className="flex flex-col gap-4">
                    <h2 className="font-semibold">Popular Packages</h2>

                    <ul className="flex flex-wrap gap-2">
                        {popularPackages.map((pkg) => (
                            <li key={pkg.name}>
                                <DefaultCard className="bg-app-bg-surface flex items-center gap-2 px-2 py-1">
                                    <span className="bg-primary/70 size-2 rounded-full" />

                                    <span className="text-app-text-muted text-sm tracking-tight text-nowrap">
                                        {pkg.name}
                                    </span>
                                </DefaultCard>
                            </li>
                        ))}
                    </ul>
                </DefaultCard>
            </section>
        </div>
    )
}
