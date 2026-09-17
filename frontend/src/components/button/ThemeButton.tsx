import { Sun } from 'lucide-react'

export default function ThemeButton() {
    return (
        <button
            type="button"
            disabled
            aria-label="Theme switching is not available yet"
            title="Theme switching is not available yet"
            className="group ml-5 flex cursor-not-allowed items-center justify-center rounded-md border border-app-border-strong p-1 opacity-50"
        >
            <Sun
                aria-hidden="true"
                size={15}
                className="transition-transform duration-300 group-hover:rotate-90"
            />
        </button>
    )
}
