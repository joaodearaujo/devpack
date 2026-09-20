import { Check } from 'lucide-react'
import { cn } from '../../../lib/utils'

export default function SelectButton({ isChecked }: { isChecked: boolean }) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                'flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors',
                isChecked ? 'border-primary bg-primary text-white' : 'border-app-border-strong bg-app-bg',
            )}
        >
            <Check size={12} strokeWidth={3} className={cn(isChecked ? 'opacity-100' : 'opacity-0')} />
        </span>
    )
}
