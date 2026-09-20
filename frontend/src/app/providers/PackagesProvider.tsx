import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { packages } from '../../features/packages/data/packages.data'
import type { Package } from '../../features/packages/types/package.types'
import { STORAGE_KEYS, readStorage, writeStorage } from '../../lib/storage'

export type PackagesContextValue = {
    selectedPackageIds: string[]
    selectedPackages: Package[]
    isPackageSelected: (packageId: string) => boolean
    togglePackageSelection: (packageId: string) => void
    clearSelection: () => void
    selectAllPackages: () => void
}

const PackagesContext = createContext<PackagesContextValue | null>(null)

function sanitizeIds(value: unknown) {
    if (!Array.isArray(value)) return []
    const ids = value.filter((item): item is string => typeof item === 'string')
    const validIds = new Set(packages.map((pkg) => pkg.id))
    return [...new Set(ids)].filter((id) => validIds.has(id))
}

export function PackagesProvider({ children }: { children: ReactNode }) {
    const [selectedPackageIds, setSelectedPackageIds] = useState<string[]>(() =>
        sanitizeIds(readStorage<unknown>(STORAGE_KEYS.selectedPackages, [])),
    )

    const selectedPackages = useMemo(
        () => packages.filter((pkg) => selectedPackageIds.includes(pkg.id)),
        [selectedPackageIds],
    )

    useEffect(() => {
        writeStorage(STORAGE_KEYS.selectedPackages, selectedPackageIds)
    }, [selectedPackageIds])

    const togglePackageSelection = useCallback(
        (packageId: string) => {
            setSelectedPackageIds((previousIds) => {
                const nextIds = previousIds.includes(packageId)
                    ? previousIds.filter((id) => id !== packageId)
                    : [...previousIds, packageId]

                return nextIds
            })
        },
        [],
    )

    const clearSelection = useCallback(() => {
        setSelectedPackageIds([])
    }, [])

    const selectAllPackages = useCallback(() => {
        const allIds = packages.map((pkg) => pkg.id)
        setSelectedPackageIds(allIds)
    }, [])

    const isPackageSelected = useCallback(
        (packageId: string) => selectedPackageIds.includes(packageId),
        [selectedPackageIds],
    )

    const value = useMemo<PackagesContextValue>(
        () => ({
            selectedPackageIds,
            selectedPackages,
            isPackageSelected,
            togglePackageSelection,
            clearSelection,
            selectAllPackages,
        }),
        [
            selectedPackageIds,
            selectedPackages,
            isPackageSelected,
            togglePackageSelection,
            clearSelection,
            selectAllPackages,
        ],
    )

    return <PackagesContext.Provider value={value}>{children}</PackagesContext.Provider>
}

export function usePackageSelection() {
    const context = useContext(PackagesContext)

    if (!context) {
        throw new Error('usePackageSelection must be used within PackagesProvider')
    }

    return context
}
