import { AlertTriangle, ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-full items-center justify-center px-6 py-12">
            <section className="flex max-w-md flex-col items-center text-center" aria-labelledby="error-title">
                <div className="mb-5 flex size-12 items-center justify-center rounded-lg border border-primary-border bg-primary-bg text-primary">
                    <AlertTriangle aria-hidden="true" size={24} />
                </div>
                <h1 id="error-title" className="mb-3 text-2xl font-bold">
                    Something went wrong
                </h1>
                <p className="mb-6 text-sm leading-6 text-app-text-muted">
                    DevPack could not load this page. Try going back or return to the overview.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 rounded-md border border-app-border-strong px-3 py-2 text-sm text-app-text-muted transition-colors hover:text-app-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <ArrowLeft aria-hidden="true" size={15} />
                        Go back
                    </button>
                    <Link
                        to="/overview"
                        className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <Home aria-hidden="true" size={15} />
                        Back to overview
                    </Link>
                </div>
            </section>
        </div>
    )
}
