import { ArrowLeft, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { usePageMeta } from '../../lib/usePageMeta'

export default function ComingSoon() {
    const navigate = useNavigate()

    usePageMeta({
        title: 'Coming Soon',
        description: 'This DevPack feature is currently under development.',
        noIndex: true,
    })

    return (
        <div className="flex h-full items-center justify-center px-8">
            <section className="flex max-w-md flex-col items-center text-center">
                <div className="mb-5 flex size-12 items-center justify-center rounded-lg border border-primary-border bg-primary-bg text-primary">
                    <Clock size={24} />
                </div>

                <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    Coming soon
                </span>

                <h1 className="mb-3 text-3xl font-bold">
                    Something is being built
                </h1>

                <p className="mb-6 text-sm leading-6 text-app-text-muted">
                    This part of DevPack is still under development.
                    Check back later for updates.
                </p>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 rounded-md border border-app-border-strong px-3 py-2 text-sm text-app-text-muted transition-colors hover:text-app-white"
                >
                    <ArrowLeft size={15} />
                    Go back
                </button>
            </section>
        </div>
    )
}