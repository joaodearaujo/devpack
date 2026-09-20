import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { STORAGE_KEYS, readStorage, writeStorage } from '../../lib/storage'
import { createId } from '../../lib/utils'
import type { Package } from '../../features/packages/types/package.types'

export type HistoryEntry = {
    id: string
    createdAt: string
    packageIds: string[]
    packageNames: string[]
    script: string
}

type HistoryContextValue = {
    entries: HistoryEntry[]
    recordScript: (packages: Package[], script: string) => void
    clearHistory: () => void
}

const HistoryContext = createContext<HistoryContextValue | null>(null)
const MAX_HISTORY = 12

export function HistoryProvider({ children }: { children: ReactNode }) {
    const [entries, setEntries] = useState<HistoryEntry[]>(() =>
        readStorage<HistoryEntry[]>(STORAGE_KEYS.history, []),
    )

    useEffect(() => {
        writeStorage(STORAGE_KEYS.history, entries)
    }, [entries])

    const recordScript = useCallback((selectedPackages: Package[], script: string) => {
        if (!selectedPackages.length) return

        const entry: HistoryEntry = {
            id: createId('history'),
            createdAt: new Date().toISOString(),
            packageIds: selectedPackages.map((pkg) => pkg.id),
            packageNames: selectedPackages.map((pkg) => pkg.name),
            script,
        }

        setEntries((previousEntries) => [entry, ...previousEntries].slice(0, MAX_HISTORY))
    }, [])

    const clearHistory = useCallback(() => setEntries([]), [])

    const value = useMemo(
        () => ({ entries, recordScript, clearHistory }),
        [clearHistory, entries, recordScript],
    )

    return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
}

export function useHistory() {
    const context = useContext(HistoryContext)

    if (!context) {
        throw new Error('useHistory must be used within HistoryProvider')
    }

    return context
}
