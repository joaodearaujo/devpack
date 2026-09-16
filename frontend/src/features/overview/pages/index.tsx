import { NavLink } from "react-router-dom";
import DefaultCard from "../../../components/cards/DefaultCard";
import { popularPackages, quickStartSteps, stats } from "../data/overview.data.ts";

export default function OverView() {
    return (
        <main className="h-full flex flex-col p-8 gap-4">

            <header>
                <h1 className="mb-3">
                    Welcome to DevPack
                </h1>

                <p>
                    Your development environment, automated
                </p>
            </header>

            <section aria-label="DevPack statistics">
                {stats.map((stat) => (
                    <article key={stat.title}>
                        <DefaultCard className="flex-1">
                            <strong>{stat.value}</strong>
                            <h2>{stat.title}</h2>
                            <p>{stat.description}</p>
                        </DefaultCard>
                    </article>
                ))}
            </section>

            <section>
                <h2>Quick Start</h2>

                <ol>
                    {quickStartSteps.map((step) => (
                        <li key={step.number}>
                            {step.text}
                        </li>
                    ))}
                </ol>

                <NavLink to="/packages">
                    <button>
                        Browse Packages
                    </button>
                </NavLink>
            </section>

            <section>
                <h2>Popular Packages</h2>

                <ul>
                    {popularPackages.map((pkg) => (
                        <li key={pkg.name}>
                            {pkg.name}
                        </li>
                    ))}
                </ul>
            </section>

        </main>
    );
}
