import type { ReactNode } from 'react'
import { HistoryProvider } from './HistoryProvider'
import { PackagesProvider } from './PackagesProvider'
import { ThemeProvider } from './ThemeProvider'

export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <PackagesProvider>
                <HistoryProvider>{children}</HistoryProvider>
            </PackagesProvider>
        </ThemeProvider>
    )
}
