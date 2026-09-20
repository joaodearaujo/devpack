import { useState } from 'react'
import { Settings } from 'lucide-react'
import { Outlet, useNavigation } from 'react-router-dom'
import { LinkButton } from '../components/button/LinkButton'
import ThemeButton from '../components/button/ThemeButton'
import { CommandPalette } from '../components/navigation/CommandPalette'
import Logo from '../components/layout/Logo'
import SidebarNavigation from '../components/layout/SidebarNavigation'
import UserProfile from '../components/layout/UserProfile'
import { Chatbot } from '../features/chatbot/components/Chatbot'

export function AppLayout() {
    const navigation = useNavigation()
    const [paletteOpen, setPaletteOpen] = useState(false)

    return (
        <div className="min-h-screen bg-app-bg">
            <a href="#main-content" className="skip-link">Skip to content</a>

            <div className="flex min-h-screen">
                <aside className="flex w-14 shrink-0 flex-col border-r border-app-border bg-app-bg-surface/40 md:w-56">
                    <div className="border-b border-app-border p-2 md:p-4">
                        <Logo />
                    </div>

                    <SidebarNavigation />

                    <div className="flex flex-col gap-2 border-t border-app-border p-2">
                        <LinkButton to="/settings" name="Settings" icon={Settings} />
                        <UserProfile />
                    </div>
                </aside>

                <div className="flex min-w-0 flex-1 flex-col">
                    <header className="sticky top-0 z-30 flex h-12 shrink-0 items-center justify-between border-b border-app-border-strong bg-app-bg/90 px-3 backdrop-blur sm:px-4">
                        <div className="flex min-w-0 items-center gap-3">
                            <span className="truncate text-sm font-semibold">DevPack</span>
                            {navigation.state !== 'idle' && (
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary" aria-live="polite">Loading</span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setPaletteOpen(true)}
                                className="hidden items-center gap-2 rounded-md border border-app-border-strong px-2.5 py-1.5 text-[10px] text-app-text-muted hover:text-app-white sm:flex"
                                aria-label="Open command palette"
                            >
                                <span>Commands</span>
                                <kbd className="rounded border border-app-border bg-app-bg-surface px-1.5 py-0.5">Ctrl K</kbd>
                            </button>
                            <ThemeButton />
                        </div>
                    </header>

                    <main id="main-content" className="min-h-0 flex-1">
                        <Outlet />
                    </main>
                </div>
            </div>

            <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
            <Chatbot />
        </div>
    )
}
