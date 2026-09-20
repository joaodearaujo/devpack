import { ArrowLeft, Home, SearchX } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import DefaultCard from '../../components/cards/DefaultCard'
import { usePageMeta } from '../../lib/usePageMeta'

export default function NotFound() {
    const navigate = useNavigate()

    usePageMeta({
        title: 'Page Not Found',
        description: 'The requested DevPack page could not be found.',
        noIndex: true,
    })

    return (
        <div className="flex min-h-full items-center justify-center px-6 py-12">
            <DefaultCard className="flex max-w-md flex-col items-center text-center">
                <span className="mb-4 text-6xl font-bold tracking-tight text-primary">404</span>
                <SearchX aria-hidden="true" size={26} className="mb-3 text-app-text-muted" />
                <h1 className="text-xl font-semibold">Page not found</h1>
                <p className="mt-2 text-sm leading-6 text-app-text-muted">This route does not exist in the DevPack application.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <button type="button" onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-md border border-app-border-strong px-3 py-2 text-sm text-app-text-muted hover:text-app-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <ArrowLeft aria-hidden="true" size={15} />
                        Go back
                    </button>
                    <Link to="/overview" className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <Home aria-hidden="true" size={15} />
                        Overview
                    </Link>
                </div>
            </DefaultCard>
        </div>
    )
}
