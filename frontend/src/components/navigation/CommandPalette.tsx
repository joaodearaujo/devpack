import { Box, Command, FileClock, Home, List, Search, Settings, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePackageSelection } from '../../app/providers/PackagesProvider'
import { cn } from '../../lib/utils'

type CommandItem = {
    id: string
    label: string
    hint: string
    icon: typeof Home
    action: () => void
}

export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    const navigate = useNavigate()
    const location = useLocation()
    const { clearSelection } = usePackageSelection()
    const [query, setQuery] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
                event.preventDefault()
                onOpenChange(!open)
            }
            if (event.key === 'Escape') onOpenChange(false)
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [onOpenChange, open])

    useEffect(() => {
        if (open) {
            setQuery('')
            window.setTimeout(() => inputRef.current?.focus(), 0)
        }
    }, [open])

    const items = useMemo<CommandItem[]>(
        () => [
            { id: 'overview', label: 'Go to overview', hint: '/overview', icon: Home, action: () => navigate('/overview') },
            { id: 'packages', label: 'Browse packages', hint: '/packages', icon: Box, action: () => navigate('/packages') },
            { id: 'setup', label: 'Open my setup', hint: '/setup', icon: List, action: () => navigate('/setup') },
            { id: 'history', label: 'Open history', hint: '/history', icon: FileClock, action: () => navigate('/history') },
            { id: 'settings', label: 'Open settings', hint: '/settings', icon: Settings, action: () => navigate('/settings') },
            {
                id: 'focus-search',
                label: 'Focus package search',
                hint: 'catalog',
                icon: Search,
                action: () => {
                    navigate('/packages')
                    window.setTimeout(() => window.dispatchEvent(new Event('devpack:focus-package-search')), 50)
                },
            },
            { id: 'clear-selection', label: 'Clear current selection', hint: 'local state', icon: X, action: clearSelection },
        ],
        [clearSelection, navigate],
    )

    if (!open) return null

    const filtered = items.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(query.trim().toLowerCase()))

    function run(item: CommandItem) {
        item.action()
        onOpenChange(false)
    }

    return (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/45 px-4 pt-[12vh] backdrop-blur-sm" onMouseDown={() => onOpenChange(false)}>
            <section role="dialog" aria-modal="true" aria-labelledby="command-palette-title" className="w-full max-w-xl overflow-hidden rounded-xl border border-app-border-strong bg-card-bg shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
                <div className="flex items-center gap-3 border-b border-app-border-strong px-4">
                    <Command aria-hidden="true" size={16} className="text-primary" />
                    <label htmlFor="command-palette-input" className="sr-only">Search commands</label>
                    <input
                        ref={inputRef}
                        id="command-palette-input"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search commands..."
                        className="min-w-0 flex-1 bg-transparent py-3 text-sm text-app-white outline-none placeholder:text-app-text-muted"
                    />
                    <kbd className="rounded border border-app-border bg-app-bg-surface px-1.5 py-0.5 text-[10px] text-app-text-muted">Esc</kbd>
                </div>
                <h2 id="command-palette-title" className="sr-only">DevPack command palette</h2>
                <div className="max-h-[55vh] overflow-auto p-2">
                    {filtered.length ? (
                        filtered.map((item) => {
                            const Icon = item.icon
                            const active = item.hint === location.pathname
                            return (
                                <button
                                    type="button"
                                    key={item.id}
                                    onClick={() => run(item)}
                                    className={cn('flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-app-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary', active && 'bg-app-bg-surface')}
                                >
                                    <Icon aria-hidden="true" size={15} className="text-app-text-muted" />
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-xs font-semibold">{item.label}</span>
                                        <span className="mt-0.5 block text-[10px] text-app-text-muted">{item.hint}</span>
                                    </span>
                                </button>
                            )
                        })
                    ) : (
                        <p className="px-3 py-8 text-center text-xs text-app-text-muted">No matching commands.</p>
                    )}
                </div>
                <div className="flex items-center justify-between border-t border-app-border px-4 py-2 text-[10px] text-app-text-muted">
                    <span>Navigate with your mouse or keyboard.</span>
                    <span>Ctrl+K / Cmd+K</span>
                </div>
            </section>
        </div>
    )
}
