import { NavLink } from 'react-router-dom'
import DefaultCard from '../../../components/cards/DefaultCard'
import {
    popularPackages,
    quickStartSteps,
    stats,
} from '../data/overview.data.ts'
import { Box } from 'lucide-react'

export default function OverView() {
    return (
        <div className="h-full flex flex-col p-8 gap-4">
            <header>
                <h1 className="mb-3 text-3xl font-bold">Welcome to DevPack</h1>

                <p className="text-app-text-muted font-thin">
                    Your development environment, automated.
                </p>
            </header>

            <section aria-label="DevPack statistics" className="flex gap-4">
                {stats.map((stat) => (
                    <article key={stat.title} className="flex-1">
                        <DefaultCard className="flex flex-col gap-2 h-full">
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
                    <h2>Quick Start</h2>

                    <ol>
                        {quickStartSteps.map((step) => (
                            <li
                                key={step.number}
                                className="flex gap-6 text-app-text-muted"
                            >
                                <span className="text-primary">
                                    {step.number}
                                </span>
                                {step.text}
                            </li>
                        ))}
                    </ol>

                    <NavLink to="/packages">
                        <button className="flex gap-2 items-center px-3 py-2 bg-primary rounded-lg text-sm font-semibold">
                            <Box width={15} height={15} />
                            Browse Packages
                        </button>
                    </NavLink>
                </DefaultCard>
            </section>

            <section aria-lavel="Popular Packages">
                <h2>Popular Packages</h2>

                <ul>
                    {popularPackages.map((pkg) => (
                        <li key={pkg.name}>{pkg.name}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
