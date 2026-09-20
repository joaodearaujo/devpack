import { Monitor, Moon, RotateCcw, Sun, Trash2 } from 'lucide-react'
import DefaultCard from '../../components/cards/DefaultCard'
import { Header } from '../../components/layout/Header'
import { type Theme, useTheme } from '../providers/ThemeProvider'
import { STORAGE_KEYS, removeStorage } from '../../lib/storage'
import { usePageMeta } from '../../lib/usePageMeta'

const themes: Array<{ value: Theme; label: string; icon: typeof Sun; description: string }> = [
    { value: 'dark', label: 'Dark', icon: Moon, description: 'Use the dark interface.' },
    { value: 'light', label: 'Light', icon: Sun, description: 'Use the light interface.' },
    { value: 'system', label: 'System', icon: Monitor, description: 'Follow the operating system preference.' },
]

export default function Settings() {
    usePageMeta({
        title: 'Settings',
        description: 'Configure DevPack appearance and local workspace data.',
    })

    const { theme, setTheme } = useTheme()

    function resetLocalData() {
        removeStorage(STORAGE_KEYS.selectedPackages)
        removeStorage(STORAGE_KEYS.history)
        removeStorage(STORAGE_KEYS.chat)
        window.location.reload()
    }

    return (
        <div className="flex min-h-full max-w-4xl flex-col gap-7 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <Header eyebrow="Application" title="Settings" subtitle="Manage presentation and local browser data. No account is required." />

            <DefaultCard className="flex flex-col gap-5">
                <div>
                    <h2 className="font-semibold">Appearance</h2>
                    <p className="mt-1 text-xs leading-5 text-app-text-muted">Choose how DevPack should render in this browser.</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                    {themes.map(({ value, label, icon: Icon, description }) => {
                        const active = theme === value
                        return (
                            <button
                                type="button"
                                key={value}
                                aria-pressed={active}
                                onClick={() => setTheme(value)}
                                className={`rounded-lg border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active ? 'border-primary-border bg-primary-bg' : 'border-app-border-strong bg-app-bg-surface hover:border-primary-border'}`}
                            >
                                <Icon aria-hidden="true" size={17} className={active ? 'text-primary' : 'text-app-text-muted'} />
                                <span className="mt-2 block text-xs font-semibold">{label}</span>
                                <span className="mt-1 block text-[10px] leading-4 text-app-text-muted">{description}</span>
                            </button>
                        )
                    })}
                </div>
            </DefaultCard>

            <DefaultCard className="flex flex-col gap-5">
                <div>
                    <h2 className="font-semibold">Local data</h2>
                    <p className="mt-1 text-xs leading-5 text-app-text-muted">Selections, copied-script history, and chat messages are stored in this browser only.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={resetLocalData} className="inline-flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/5 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-400/10">
                        <Trash2 aria-hidden="true" size={14} />
                        Reset local data
                    </button>
                    <button type="button" onClick={() => window.location.reload()} className="inline-flex items-center gap-2 rounded-lg border border-app-border-strong px-3 py-2 text-xs font-semibold text-app-text-muted hover:text-app-white">
                        <RotateCcw aria-hidden="true" size={14} />
                        Reload app
                    </button>
                </div>
            </DefaultCard>
        </div>
    )
}
