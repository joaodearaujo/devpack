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
                'border border-app-border-strong rounded-xl p-5 bg-card-bg',
                className,
            )}
        >
            {children}
        </div>
    )
}
