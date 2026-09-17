import { Settings } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { LinkButton } from '../components/button/LinkButton'
import Logo from '../components/layout/Logo'
import SidebarNavigation from '../components/layout/SidebarNavigation'
import UserProfile from '../components/layout/UserProfile'
import ThemeButton from '../components/button/ThemeButton'
import SearchInput from '../components/layout/SearchInput'

export function AppLayout() {
    return (
        <div className="flex h-screen">
            <aside className="w-48 flex flex-col border-r border-app-border">
                <div className="p-4 border-b border-app-border">
                    <Logo />
                </div>
                <SidebarNavigation />{' '}
                <div className="flex flex-col gap-2 border-t border-white/10 p-2.5">
                    <LinkButton 
                        to="/"
                        name="Settings" 
                        icon={Settings} />
                    <UserProfile />
                </div>
            </aside>

            <div className="flex flex-1 flex-col">
                <header className="h-12 border-b border-app-border flex items-center px-4">
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
