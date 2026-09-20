import { Sparkles } from 'lucide-react'

export function PopularTag() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-primary-border bg-primary-bg px-1.5 py-0.5 text-[10px] font-semibold text-primary">
            <Sparkles aria-hidden="true" size={10} />
            Popular
        </span>
    )
}
