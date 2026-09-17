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
                'rounded-lg border border-app-border-strong bg-card-bg p-5',
                className,
            )}
        >
            {children}
        </div>
    )
}
