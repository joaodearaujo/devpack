import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { packages } from '../../features/packages/data/packages.data'
import type { Package } from '../../features/packages/types/package.types'

type PackagesContextValue = {
    selectedPackageIds: string[]
    selectedPackages: Package[]
    isPackageSelected: (packageId: string) => boolean
    togglePackageSelection: (packageId: string) => void
}

const PackagesContext = createContext<PackagesContextValue | null>(null)

export function PackagesProvider({ children }: { children: ReactNode }) {
    const [selectedPackageIds, setSelectedPackageIds] = useState<string[]>([])

    const selectedPackages = useMemo(
        () => packages.filter((pkg) => selectedPackageIds.includes(pkg.id)),
        [selectedPackageIds],
    )

    function togglePackageSelection(packageId: string) {
        setSelectedPackageIds((previousIds) =>
            previousIds.includes(packageId)
                ? previousIds.filter((id) => id !== packageId)
                : [...previousIds, packageId],
        )
    }

    const value = useMemo<PackagesContextValue>(
        () => ({
            selectedPackageIds,
            selectedPackages,
            isPackageSelected: (packageId) => selectedPackageIds.includes(packageId),
            togglePackageSelection,
        }),
        [selectedPackageIds, selectedPackages],
    )

    return (
        <PackagesContext.Provider value={value}>
            {children}
        </PackagesContext.Provider>
    )
}

export function usePackageSelection() {
    const context = useContext(PackagesContext)

    if (!context) {
        throw new Error('usePackageSelection must be used within PackagesProvider')
    }

    return context
}
