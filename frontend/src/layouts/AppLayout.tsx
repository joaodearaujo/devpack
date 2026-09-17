import { Settings } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { LinkButton } from '../components/button/LinkButton'
import Logo from '../components/layout/Logo'
import SidebarNavigation from '../components/layout/SidebarNavigation'
import UserProfile from '../components/layout/UserProfile'
import ThemeButton from '../components/button/ThemeButton'

export function AppLayout() {
    return (
        <div className="flex min-h-screen bg-app-bg">
            <aside className="flex w-14 shrink-0 flex-col border-r border-app-border md:w-48">
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
                <header className="flex h-12 shrink-0 items-center justify-between border-b border-app-border-strong px-3 sm:px-4">
                    <h2>DevPack</h2>
                    <ThemeButton />
                </header>

                <main className="min-h-0 flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
