import { Clipboard, Clock3, FileCode2, Trash2 } from 'lucide-react'
import { useState } from 'react'
import DefaultCard from '../../components/cards/DefaultCard'
import { Header } from '../../components/layout/Header'
import { useHistory } from '../providers/HistoryProvider'
import { usePageMeta } from '../../lib/usePageMeta'
import { copyText } from '../../lib/clipboard'

function formatDate(value: string) {
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(value))
}

export default function History() {
    usePageMeta({
        title: 'History',
        description: 'Review and reuse previously generated DevPack installation scripts.',
    })

    const { entries, clearHistory } = useHistory()
    const [copiedId, setCopiedId] = useState<string | null>(null)

    async function copyEntry(id: string, script: string) {
        const copied = await copyText(script)
        if (!copied) return

        setCopiedId(id)
        window.setTimeout(() => setCopiedId(null), 1500)
    }

    return (
        <div className="flex min-h-full max-w-6xl flex-col gap-7 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <Header eyebrow="Workspace" title="Generation history" subtitle="Scripts copied from DevPack are stored locally in this browser." />
                {entries.length > 0 && (
                    <button type="button" onClick={clearHistory} className="inline-flex items-center gap-1.5 rounded-md border border-app-border-strong px-2.5 py-2 text-xs text-app-text-muted hover:text-app-white">
                        <Trash2 aria-hidden="true" size={13} />
                        Clear history
                    </button>
                )}
            </div>

            {entries.length === 0 ? (
                <DefaultCard className="flex flex-col items-center py-16 text-center">
                    <Clock3 aria-hidden="true" size={28} className="mb-3 text-app-text-muted" />
                    <h2 className="font-semibold">No generations yet</h2>
                    <p className="mt-1 max-w-md text-sm leading-6 text-app-text-muted">Copy an installation script from the package catalog or setup page and it will appear here.</p>
                </DefaultCard>
            ) : (
                <div className="space-y-3">
                    {entries.map((entry) => (
                        <DefaultCard key={entry.id} className="p-0">
                            <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <FileCode2 aria-hidden="true" size={16} className="text-primary" />
                                        <h2 className="text-sm font-semibold">{entry.packageNames.length} package(s)</h2>
                                    </div>
                                    <p className="mt-1 text-xs text-app-text-muted">{formatDate(entry.createdAt)}</p>
                                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-app-text-subtle">{entry.packageNames.join(' · ')}</p>
                                </div>
                                <button type="button" onClick={() => copyEntry(entry.id, entry.script)} className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md border border-app-border-strong px-2.5 py-2 text-xs font-semibold hover:border-primary-border hover:text-primary">
                                    <Clipboard aria-hidden="true" size={13} />
                                    {copiedId === entry.id ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <details className="border-t border-app-border">
                                <summary className="cursor-pointer px-4 py-3 text-xs text-app-text-muted hover:text-app-white">View script</summary>
                                <pre className="overflow-auto bg-terminal-bg p-4 font-mono text-[11px] leading-5 text-app-text-muted"><code>{entry.script}</code></pre>
                            </details>
                        </DefaultCard>
                    ))}
                </div>
            )}
        </div>
    )
}
