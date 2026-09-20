import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

export default function DefaultCard({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
    return (
        <div className={cn('rounded-xl border border-app-border-strong bg-card-bg p-5', className)} {...props}>
            {children}
        </div>
    )
}
