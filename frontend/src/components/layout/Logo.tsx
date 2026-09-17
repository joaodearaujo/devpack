import { ArrowDownToLine } from 'lucide-react'

export default function Logo() {
    return (
        <div className="flex items-center justify-center gap-2.5 md:justify-start">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <ArrowDownToLine aria-hidden="true" strokeWidth={3} color="white" size={15} />
            </div>
            <div className="hidden flex-col gap-1 leading-none md:flex">
                <span className="text-left text-brand font-bold tracking-[-0.08px] text-app-white">
                    DevPack
                </span>
                <span className="text-left text-label tracking-[-0.12px] text-app-text-subtle">
                    ENV MANAGER
                </span>
            </div>
        </div>
    )
}
