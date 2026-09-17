import { ArrowDownToLine } from 'lucide-react'

export default function Logo() {
    return (
        <div className="flex gap-2.5 items-center">
            <div className="size-8 flex items-center justify-center rounded-lg bg-primary">
                <ArrowDownToLine
                    stroke-width={3}
                    color="white"
                    height={16}
                    width={16}
                />
            </div>
            <div className="flex flex-col gap-1 leading-none">
                <span className="text-brand text-left font-bold tracking-[-0.08px] text-app-white">
                    DevPack
                </span>

                <span className="text-label text-left tracking-[-0.12px] text-app-text-subtle">
                    ENV MANAGER
                </span>
            </div>
        </div>
    )
}
