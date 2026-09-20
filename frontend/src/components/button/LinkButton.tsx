import type { LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/utils'

export function LinkButton({ name, icon: Icon, to }: { name: string; icon: LucideIcon; to: string }) {
    return (
        <NavLink
            to={to}
            title={name}
            className={({ isActive }) =>
                cn(
                    'flex w-full items-center gap-2.5 rounded-md border p-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    isActive
                        ? 'border-primary-border bg-primary-bg text-primary'
                        : 'border-transparent text-app-text-muted hover:bg-app-bg-surface hover:text-app-white',
                )
            }
        >
            {({ isActive }) => (
                <>
                    <Icon aria-hidden="true" size={15} strokeWidth={isActive ? 2 : 1.6} />
                    <span className="hidden md:inline">{name}</span>
                </>
            )}
        </NavLink>
    )
}
