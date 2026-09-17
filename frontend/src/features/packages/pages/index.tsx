import { Header } from '../../../components/layout/Header'
import { CategoryFilter } from '../components/CategoryFilter'
import InstallScript from '../components/InstallScript'
import { PackageList } from '../components/PackageList'
import { packages } from '../data/packages.data'

export function Packages() {
    return (
        <div className="flex h-full">
            <div className="flex flex-1 flex-col gap-8 overflow-y-auto border-r border-app-border px-8 py-10 max-h-240">
                <Header
                    title="Build your development setup"
                    subtitle="Select the tools you need and DevPack will generate the installation commands."
                />

                <section className="flex flex-col gap-4">
                    <CategoryFilter />

                    <p>{packages.length} packages</p>

                    <PackageList packages={packages} />
                </section>
            </div>

            <aside className="w-80 px-8 py-10">
                <InstallScript />
            </aside>
        </div>
    )
}
