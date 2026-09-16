import { type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export function LinkButton({name, icon: Icon}: {name: string, icon: LucideIcon}) {
   
    const [ isSelected, setIsSelected ] = useState(false);
    const location = useLocation();

    const handleSelection = () => {
        if(location.search){
            return;
        }
        setIsSelected(true);
    }

    return (
        <button
            onClick={handleSelection}
            className={cn(
                "flex w-full items-center gap-2.5 rounded-md border border-transparent p-2 text-sm cursor-pointer transition-colors duration-300",
                isSelected
                    ? "border border-orange-500/50 bg-orange-500/5 text-orange-500"
                    : "font-normal text-white/50 hover:text-white/70"
            )}
        >
            <Icon
                width={15}
                height={15}
                strokeWidth={isSelected ? 2 : 1}
                className={cn(
                    "transition-colors duration-300",
                    isSelected
                        ? "text-orange-500"
                        : "text-white/50 group-hover:text-white"
                )}
            />
            {name}
        </button>
    )
}