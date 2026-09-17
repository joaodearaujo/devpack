import type { ReactNode } from 'react'
import { PackagesProvider } from './PackagesProvider'

export function AppProviders({ children }: { children: ReactNode }) {
    return <PackagesProvider>{children}</PackagesProvider>
}
