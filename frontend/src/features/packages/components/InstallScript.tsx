import { AlertTriangle, Check, Clipboard, Terminal, Trash2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useHistory } from '../../../app/providers/HistoryProvider'
import { usePackageSelection } from '../../../app/providers/PackagesProvider'
import { cn } from '../../../lib/utils'
import { copyText } from '../../../lib/clipboard'
import { generateInstallScript } from '../domain/installScript'

function EmptyTerminalMessage() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center text-xs text-app-text-muted">
            <Terminal aria-hidden="true" size={40} className="opacity-50" />
            <p>Select packages to generate an inspectable install script.</p>
        </div>
    )
}

export default function InstallScript() {
    const { selectedPackages, clearSelection } = usePackageSelection()
    const { recordScript } = useHistory()
    const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle')

    const generated = useMemo(() => generateInstallScript(selectedPackages), [selectedPackages])

    useEffect(() => {
        setCopyState('idle')
    }, [selectedPackages])

    async function handleCopy() {
        if (!selectedPackages.length) return

        const copied = await copyText(generated.content)

        if (!copied) {
            setCopyState('error')
            return
        }

        recordScript(selectedPackages, generated.content)
        setCopyState('success')
        window.setTimeout(() => setCopyState('idle'), 1800)
    }

    return (
        <section className="flex h-full min-h-80 flex-col overflow-hidden rounded-xl border border-app-border-strong bg-terminal-bg shadow-xl" aria-labelledby="install-script-title">
            <div className="flex items-center justify-between border-b border-app-border bg-app-bg-surface px-4 py-2.5">
                <div>
                    <h2 id="install-script-title" className="flex items-center gap-2 text-xs font-semibold tracking-wide">
                        <Terminal aria-hidden="true" size={15} />
                        INSTALL SCRIPT
                    </h2>
                    <p className="mt-0.5 text-[10px] text-app-text-muted">Review before execution</p>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        disabled={!selectedPackages.length}
                        onClick={clearSelection}
                        aria-label="Clear selected packages"
                        title="Clear selection"
                        className="rounded-md p-2 text-app-text-muted transition-colors hover:bg-app-bg hover:text-app-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <Trash2 aria-hidden="true" size={14} />
                    </button>
                    <button
                        type="button"
                        disabled={!selectedPackages.length}
                        onClick={handleCopy}
                        className={cn(
                            'flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-40',
                            copyState === 'error'
                                ? 'text-red-400'
                                : 'bg-primary text-white hover:brightness-110',
                        )}
                    >
                        {copyState === 'success' ? <Check aria-hidden="true" size={13} /> : <Clipboard aria-hidden="true" size={13} />}
                        {copyState === 'success' ? 'Copied' : copyState === 'error' ? 'Failed' : 'Copy'}
                    </button>
                </div>
            </div>

            <div className="min-h-0 flex-1 overflow-auto">
                {selectedPackages.length === 0 ? (
                    <EmptyTerminalMessage />
                ) : (
                    <pre className="w-full whitespace-pre-wrap p-4 font-mono text-[11px] leading-5 text-app-text-muted">
                        <code>{generated.content}</code>
                    </pre>
                )}
            </div>

            {selectedPackages.length > 0 && generated.manualPackageCount > 0 && (
                <div className="flex items-start gap-2 border-t border-primary-border bg-primary-bg px-3 py-2 text-[11px] text-app-text-subtle">
                    <AlertTriangle aria-hidden="true" size={13} className="mt-0.5 shrink-0 text-primary" />
                    <span>{generated.manualPackageCount} selected package(s) require manual installation and are left as comments.</span>
                </div>
            )}

            <div className="border-t border-app-border bg-app-bg px-3 py-2.5">
                <ul className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <li className="text-app-text-muted">
                        <span className="block text-sm font-semibold text-primary">{selectedPackages.length}</span>
                        selected
                    </li>
                    <li className="text-app-text-muted">
                        <span className="block text-sm font-semibold text-primary">{generated.aptPackageCount}</span>
                        APT packages
                    </li>
                    <li className="text-app-text-muted">
                        <span className="block text-sm font-semibold text-primary">{generated.snapCommandCount}</span>
                        Snap commands
                    </li>
                </ul>
            </div>
        </section>
    )
}
