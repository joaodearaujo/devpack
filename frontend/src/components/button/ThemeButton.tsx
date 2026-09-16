import { Sun } from "lucide-react";

export default function ThemeButton() {
    return (
        <button className="ml-auto flex items-center justify-center p-1 rounded-md border border-white/10 group cursor-pointer">
        <Sun width={15} height={15} className="group-hover:rotate-90 transition-transform duration-300"/>
    </button>
    )
}