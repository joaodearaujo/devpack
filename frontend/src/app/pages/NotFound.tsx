import { Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../../lib/usePageMeta'

export default function NotFound() {
    usePageMeta({
        title: 'Page Not Found',
        description: 'The requested DevPack page could not be found.',
        noIndex: true,
    })

    return (
        <div className="flex h-full items-center justify-center px-8">
            <section className="flex max-w-md flex-col items-center text-center">
                <span className="mb-4 text-7xl font-bold tracking-tight text-primary">
                    404
                </span>

                <h1 className="mb-2 text-2xl font-semibold">
                    Page not found
                </h1>

                <p className="mb-6 text-sm text-app-text-muted">
                    The page you're looking for doesn't exist or may have been
                    moved.
                </p>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 rounded-md border border-app-border-strong px-3 py-2 text-sm text-app-text-muted transition-colors hover:text-app-white"
                    >
                        <ArrowLeft size={15} />
                        Go back
                    </button>

                    <Link
                        to="/overview"
                        className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        <Home size={15} />
                        Back to overview
                    </Link>
                </div>
            </section>
        </div>
    )
}