import { ArrowDownToLine } from 'lucide-react'

export default function Logo() {
    return (
        <div className="flex items-center gap-2.5">
            <div className="bg-primary flex size-8 items-center justify-center rounded-lg">
                <ArrowDownToLine
                    stroke-width={3}
                    color="white"
                    height={16}
                    width={16}
                />
            </div>
            <div className="flex flex-col gap-1 leading-none">
                <span className="text-brand text-app-white text-left font-bold tracking-[-0.08px]">
                    DevPack
                </span>

                <span className="text-label text-app-text-subtle text-left tracking-[-0.12px]">
                    ENV MANAGER
                </span>
            </div>
        </div>
    )
}
