import { Monitor } from 'lucide-react'

export default function UserProfile() {
    return (
        <div className="flex items-center justify-center gap-2.5 md:justify-start" title="Local browser workspace">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-app-bg-surface text-app-text-muted">
                <Monitor aria-hidden="true" size={15} />
            </span>
            <span className="hidden flex-col gap-1 leading-none md:flex">
                <span className="text-left text-[13px] font-semibold text-app-text-subtle">Local workspace</span>
                <span className="text-left text-[10px] text-app-text-muted">browser-only state</span>
            </span>
        </div>
    )
}
