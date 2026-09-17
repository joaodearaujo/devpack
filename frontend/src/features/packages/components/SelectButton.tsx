import { Check } from 'lucide-react'
import { cn } from '../../../lib/utils'

export default function SelectButton({ isChecked }: { isChecked: boolean }) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                'flex size-5 shrink-0 items-center justify-center rounded-sm border-2 border-app-border-strong transition-colors',
                isChecked ? 'bg-primary' : 'bg-app-bg',
            )}
        >
            <Check
                size={12}
                strokeWidth={3}
                className={cn(isChecked ? 'opacity-100' : 'opacity-0')}
            />
        </span>
    )
}
