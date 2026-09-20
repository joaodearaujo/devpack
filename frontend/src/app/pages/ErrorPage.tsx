import { AlertTriangle, ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import DefaultCard from '../../components/cards/DefaultCard'

export default function ErrorPage() {
    const navigate = useNavigate()
    const error = useRouteError()
    const status = isRouteErrorResponse(error) ? error.status : undefined

    return (
        <div className="flex min-h-full items-center justify-center px-6 py-12">
            <DefaultCard className="flex max-w-md flex-col items-center text-center" role="alert">
                <span className="mb-4 flex size-12 items-center justify-center rounded-lg border border-primary-border bg-primary-bg text-primary">
                    <AlertTriangle aria-hidden="true" size={24} />
                </span>
                {status && <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Error {status}</span>}
                <h1 className="text-xl font-semibold">Something went wrong</h1>
                <p className="mt-2 text-sm leading-6 text-app-text-muted">DevPack could not load this route. You can go back or return to the overview.</p>
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
