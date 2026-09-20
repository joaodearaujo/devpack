import { Box, History, Layers, LayoutGrid, List } from 'lucide-react'
import { LinkButton } from '../button/LinkButton'

const navigationItems = [
    { name: 'Overview', icon: LayoutGrid, to: '/overview' },
    { name: 'Packages', icon: Box, to: '/packages' },
    { name: 'Categories', icon: Layers, to: '/categories' },
    { name: 'My Setup', icon: List, to: '/setup' },
    { name: 'History', icon: History, to: '/history' },
]

export default function SidebarNavigation() {
    return (
        <nav aria-label="Primary navigation" className="flex flex-1 flex-col gap-1 p-2.5">
            {navigationItems.map((item) => (
                <LinkButton key={item.to} name={item.name} icon={item.icon} to={item.to} />
            ))}
        </nav>
    )
}
