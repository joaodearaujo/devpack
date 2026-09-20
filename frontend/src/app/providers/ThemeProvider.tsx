import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { STORAGE_KEYS, readStorage, writeStorage } from '../../lib/storage'

export type Theme = 'dark' | 'light' | 'system'

type ThemeContextValue = {
    theme: Theme
    resolvedTheme: 'dark' | 'light'
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getSystemTheme(): 'dark' | 'light' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() =>
        readStorage<Theme>(STORAGE_KEYS.theme, 'dark'),
    )
    const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(() =>
        theme === 'system' ? getSystemTheme() : theme,
    )

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)')

        const applyTheme = () => {
            const nextTheme = theme === 'system' ? (media.matches ? 'dark' : 'light') : theme
            setResolvedTheme(nextTheme)
            document.documentElement.dataset.theme = nextTheme
            document.documentElement.style.colorScheme = nextTheme
        }

        applyTheme()
        media.addEventListener('change', applyTheme)

        return () => media.removeEventListener('change', applyTheme)
    }, [theme])

    function setTheme(nextTheme: Theme) {
        setThemeState(nextTheme)
        writeStorage(STORAGE_KEYS.theme, nextTheme)
    }

    function toggleTheme() {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    const value = useMemo(
        () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
        [theme, resolvedTheme],
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }

    return context
}
