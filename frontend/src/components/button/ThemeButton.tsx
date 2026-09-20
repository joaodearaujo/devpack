import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../app/providers/ThemeProvider'

export default function ThemeButton() {
    const { resolvedTheme, toggleTheme } = useTheme()
    const nextLabel = resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    const Icon = resolvedTheme === 'dark' ? Sun : Moon

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={nextLabel}
            title={nextLabel}
            className="rounded-md border border-app-border-strong p-2 text-app-text-muted transition hover:bg-app-bg-surface hover:text-app-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
            <Icon aria-hidden="true" size={15} />
        </button>
    )
}
