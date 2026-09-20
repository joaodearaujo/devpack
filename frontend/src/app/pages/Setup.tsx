import { ArrowRight, Check, Clipboard, PackageOpen, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import DefaultCard from '../../components/cards/DefaultCard'
import { Header } from '../../components/layout/Header'
import { usePackageSelection } from '../providers/PackagesProvider'
import { useHistory } from '../providers/HistoryProvider'
import { usePageMeta } from '../../lib/usePageMeta'
import { copyText } from '../../lib/clipboard'
import { generateInstallScript } from '../../features/packages/domain/installScript'

export default function Setup() {
    usePageMeta({
        title: 'My Setup',
        description: 'Review the Linux packages selected for your DevPack environment.',
    })

    const { selectedPackages, clearSelection } = usePackageSelection()
    const { recordScript } = useHistory()
    const [copied, setCopied] = useState(false)
    const generated = useMemo(() => generateInstallScript(selectedPackages), [selectedPackages])

    async function copyScript() {
        if (!selectedPackages.length) return

        const copied = await copyText(generated.content)
        if (!copied) return

        recordScript(selectedPackages, generated.content)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1800)
    }

    return (
        <div className="flex min-h-full max-w-6xl flex-col gap-7 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <Header
                eyebrow="Workspace"
                title="My setup"
                subtitle="A persistent local view of the packages you have selected for this browser session."
            />

            {selectedPackages.length === 0 ? (
                <DefaultCard className="flex flex-col items-center gap-4 py-16 text-center">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-app-border-strong bg-app-bg-surface">
                        <PackageOpen aria-hidden="true" size={22} className="text-app-text-muted" />
                    </span>
                    <div>
                        <h2 className="font-semibold">Your setup is empty</h2>
                        <p className="mt-1 max-w-md text-sm leading-6 text-app-text-muted">Choose packages from the catalog to build an environment and generate your script.</p>
                    </div>
                    <Link to="/packages" className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white hover:brightness-110">
                        Browse packages
                        <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                </DefaultCard>
            ) : (
                <>
                    <section className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
                        <DefaultCard className="flex flex-col gap-4">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="font-semibold">Selected packages</h2>
                                    <p className="mt-1 text-xs text-app-text-muted">{selectedPackages.length} package(s) in the current setup.</p>
                                </div>
                                <button type="button" onClick={clearSelection} className="inline-flex items-center gap-1.5 rounded-md border border-app-border-strong px-2 py-1.5 text-xs text-app-text-muted hover:text-app-white">
                                    <Trash2 aria-hidden="true" size={12} />
                                    Clear
                                </button>
                            </div>

                            <ul className="max-h-[28rem] space-y-2 overflow-auto pr-1">
                                {selectedPackages.map((pkg) => (
                                    <li key={pkg.id} className="flex items-start justify-between gap-3 rounded-lg border border-app-border bg-app-bg-surface px-3 py-2.5">
                                        <div className="min-w-0">
                                            <p className="truncate text-xs font-semibold">{pkg.name}</p>
                                            <p className="mt-1 text-[10px] text-app-text-muted">{pkg.category}</p>
                                        </div>
                                        <span className="shrink-0 rounded-full border border-app-border px-2 py-0.5 text-[10px] text-app-text-muted">{pkg.source}</span>
                                    </li>
                                ))}
                            </ul>
                        </DefaultCard>

                        <DefaultCard className="flex min-h-[28rem] flex-col overflow-hidden p-0">
                            <div className="flex items-center justify-between border-b border-app-border px-4 py-3">
                                <div>
                                    <h2 className="text-sm font-semibold">Generated Bash</h2>
                                    <p className="mt-1 text-[10px] text-app-text-muted">Deterministic output from the selected recipes.</p>
                                </div>
                                <button type="button" onClick={copyScript} className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-white hover:brightness-110">
                                    {copied ? <Check aria-hidden="true" size={13} /> : <Clipboard aria-hidden="true" size={13} />}
                                    {copied ? 'Copied' : 'Copy script'}
                                </button>
                            </div>
                            <pre className="min-h-0 flex-1 overflow-auto bg-terminal-bg p-4 font-mono text-[11px] leading-5 text-app-text-muted">
                                <code>{generated.content}</code>
                            </pre>
                        </DefaultCard>
                    </section>
                </>
            )}
        </div>
    )
}
