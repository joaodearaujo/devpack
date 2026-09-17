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
        <div className="h-full flex flex-col px-8 py-10 gap-8 max-w-240">
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
                    <h2 className='font-semibold'>Quick Start</h2>

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
                        <button className="flex gap-2 items-center px-3 py-2 bg-primary rounded-lg text-sm font-semibold cursor-pointer">
                            <Box width={15} height={15} strokeWidth={3}/>
                            Browse Packages
                        </button>
                    </NavLink>
                </DefaultCard>
            </section>

            <section aria-label="Popular Packages">
                <DefaultCard>
                    <h2 className='font-semibold mb-4'>Popular Packages</h2>

                    <ul className="flex max-w-180 gap-x-4 gap-y-2 flex-wrap">
                        {popularPackages.map((pkg) => (
                            <li key={pkg.name}>
                                <DefaultCard className="flex items-center gap-2 px-2 py-1">
                                    <span className="size-2 rounded-full bg-primary/70" />
                                    <span className="text-nowrap tracking-tight text-sm text-app-text-muted">
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
