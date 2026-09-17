import { type LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { NavLink } from 'react-router-dom'

export function LinkButton({
    name,
    icon: Icon,
    to,
}: {
    name: string
    icon: LucideIcon
    to: string
}) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    'flex w-full items-center gap-2.5 rounded-md border p-2 text-sm',
                    isActive
                        ? 'border-primary-border bg-primary-bg text-primary'
                        : 'text-app-text-muted border-transparent',
                )
            }
        >
            {({ isActive }) => (
                <>
                    <Icon size={15} strokeWidth={isActive ? 2 : 1} />
                    {name}
                </>
            )}
        </NavLink>
    )
}
