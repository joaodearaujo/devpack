import { type LucideIcon } from "lucide-react"
import { cn } from "../lib/utils";
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
            className={cn("text-sm flex items-center group w-full p-2 font-normal rounded-md gap-2.5 cursor-pointer        margin-b-0.5 transition-colors duration-300",
            isSelected ? "font-semibold text-orange-500 border border-orange-500/50 bg-orange-500/5": "text-white/50 hover:text-white/70"
        )}>
            <Icon width={15} height={15} strokeWidth={isSelected? 2 : 1} className={cn("transition-colors duration-300",  isSelected ? "font-semibold text-orange-500": "text-white/50 group-hover:text-white/70")}/>
            {name}
        </button>
    )
}