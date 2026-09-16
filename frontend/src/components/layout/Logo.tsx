import { ArrowDownToLine } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex gap-2.5 items-center">
            <div className="size-8 flex items-center justify-center rounded-lg bg-orange-500">
                <ArrowDownToLine stroke-width={3} color="white" height={16} width={16}/>
            </div>
        <div className="flex flex-col leading-none gap-1">
            <span className="text-[15px] font-bold tracking-[-0.08px] text-white text-left">DevPack</span>
            <span className="text-[10px] tracking-[-0.12px] text-left">ENV MANAGER</span>
        </div>
    </div>
    )
}