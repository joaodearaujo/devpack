import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export default function DefaultCard({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                'border-app-border-strong bg-card-bg rounded-lg border p-5',
                className,
            )}
        >
            {children}
        </div>
    )
}
