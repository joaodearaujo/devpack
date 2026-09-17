import DefaultCard from '../../../components/cards/DefaultCard'
import { Header } from '../../../components/layout/Header'
import InstallScript from '../components/InstallScript'
import { PopularTag } from '../components/PopularTag'
import { categories, packages } from '../data/packages.data'

export function Packages() {
    return (
        <div className="flex h-full">
            <div className="border-app-border flex-1 flex flex-col border-r px-8 py-10 gap-8 overflow-y-auto max-h-240">
                <Header
                    title="Build your development setup"
                    subtitle="Select the tools you need and DevPack will generate the installation commands."
                />

                <section className='flex flex-col gap-4'>
                    <div className='flex flex-wrap gap-2'>
                        {categories.map(category => 
                        <button className='border border-app-border-strong px-2 py-1 gap-2 flex items-center rounded-lg'>
                            {category.name}
                            <span>{category.count}</span>
                        </button>)}
                    </div>

                    <p>26 packages</p>

                    <div className='flex gap-2 flex-wrap max-w-full'>
                            {packages.map(pack => 
                                <DefaultCard className='flex-1 min-w-80 flex items-start gap-4'>
                                    <button className='border size-4 rounded-sm shrink-0'/>
                                    <div className='flex-1 '>
                                        <div className='flex gap-2'>
                                            <h4>{pack.name}</h4>
                                            {pack.popular && <PopularTag/>}
                                            <p className='ml-auto'>{pack.version}</p>
                                        </div>
                                        <p className='mb-3'>{pack.description}</p>
                                        <div className='flex gap-2'>
                                            {pack.hashtags.map(hash => (<div className='py-0.5 px-1 text-[11px] bg-app-bg-surface border border-app-border rounded-sm text-app-text-muted'>{hash}</div>))}
                                        </div>
                                    </div>
                                </DefaultCard>
                            )}
                    </div>
                </section>
            </div>

            <div className="w-80 px-8 py-10">
                <InstallScript />
            </div>
        </div>
    )
}
