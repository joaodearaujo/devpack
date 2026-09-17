import { Settings } from 'lucide-react'
import { Outlet, useLocation } from 'react-router-dom'

import { LinkButton } from '../components/button/LinkButton'
import Logo from '../components/layout/Logo'
import SidebarNavigation from '../components/layout/SidebarNavigation'
import UserProfile from '../components/layout/UserProfile'
import ThemeButton from '../components/button/ThemeButton'
import SearchInput from '../components/layout/SearchInput'

export function AppLayout() {
    const location = useLocation()

    return (
        <div className="flex h-screen">
            <aside className="border-app-border flex w-48 shrink-0 flex-col border-r">
                <div className="border-app-border border-b p-4">
                    <Logo />
                </div>
                <SidebarNavigation />{' '}
                <div className="flex flex-col gap-2 border-t border-white/10 p-2.5">
                    <LinkButton to="/" name="Settings" icon={Settings} />
                    <UserProfile />
                </div>
            </aside>

            <div className="flex min-w-0 flex-1 flex-col">
                <header className="border-app-border flex h-12 items-center border-b px-4">
                    <h2 className="mr-10">{location.pathname}</h2>
                    <SearchInput />
                    <ThemeButton />
                </header>

                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
