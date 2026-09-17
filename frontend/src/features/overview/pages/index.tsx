import { Box } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import DefaultCard from '../../../components/cards/DefaultCard'
import {
    popularPackages,
    quickStartSteps,
    stats,
} from '../data/overview.data.ts'

export default function OverView() {
    return (
        <div className="flex h-full max-w-240 flex-col gap-8 px-8 py-10">
            <header className='flex flex-col gap-2'>
                <h1 className="text-3xl font-bold">
                    Welcome to DevPack
                </h1>

                <p className="font-thin text-app-text-muted">
                    Your development environment, automated.
                </p>
            </header>

            <section
                aria-label="DevPack statistics"
                className="flex gap-4"
            >
                {stats.map((stat) => (
                    <article key={stat.title} className="flex-1">
                        <DefaultCard className="flex h-full flex-col gap-2">
                            <strong className="text-3xl text-primary">
                                {stat.value}
                            </strong>

                            <h2 className="text-sm font-semibold">
                                {stat.title}
                            </h2>

                            <p className="text-xs font-thin text-app-text-muted">
                                {stat.description}
                            </p>
                        </DefaultCard>
                    </article>
                ))}
            </section>

            <section>
                <DefaultCard className="flex flex-col gap-4">
                    <h2 className="font-semibold">
                        Quick Start
                    </h2>

                    <ol>
                        {quickStartSteps.map((step) => (
                            <li
                                key={step.number}
                                className="flex gap-6 text-app-text-muted mb-2"
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
                        className="flex w-fit items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold"
                    >
                        <Box
                            width={15}
                            height={15}
                            strokeWidth={3}
                        />

                        Browse Packages
                    </NavLink>
                </DefaultCard>
            </section>

            <section>
                <DefaultCard className='flex flex-col gap-4'>
                    <h2 className="font-semibold">
                        Popular Packages
                    </h2>

                    <ul className="flex max-w-180 flex-wrap gap-x-4 gap-y-2">
                        {popularPackages.map((pkg) => (
                            <li key={pkg.name}>
                                <DefaultCard className="flex items-center gap-2 px-2 py-1 bg-app-bg-surface">
                                    <span className="size-2 rounded-full bg-primary/70" />

                                    <span className="text-nowrap text-sm tracking-tight text-app-text-muted">
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