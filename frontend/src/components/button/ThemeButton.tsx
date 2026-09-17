import { Sun } from 'lucide-react'

export default function ThemeButton() {
    return (
        <button className="border-app-border-strong group ml-auto flex cursor-pointer items-center justify-center rounded-md border p-1">
            <Sun
                width={15}
                height={15}
                className="transition-transform duration-300 group-hover:rotate-90"
            />
        </button>
    )
}
