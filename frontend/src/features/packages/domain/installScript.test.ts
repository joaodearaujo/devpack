import { describe, expect, it } from 'vitest'
import { generateInstallScript } from './installScript'
import type { Package } from '../types/package.types'

const aptPackage: Package = {
    id: 'git',
    name: 'Git',
    description: 'Version control',
    tags: ['git'],
    category: 'Version Control',
    popular: true,
    source: 'Ubuntu APT',
    install: { manager: 'apt', packages: ['git'] },
}

const duplicateAptPackage: Package = {
    ...aptPackage,
    id: 'git-duplicate',
    name: 'Git duplicate',
    install: { manager: 'apt', packages: ['git', 'curl'] },
}

const snapPackage: Package = {
    id: 'vscode',
    name: 'VS Code',
    description: 'Editor',
    tags: ['editor'],
    category: 'Editors',
    popular: true,
    source: 'Snap',
    install: { manager: 'snap', command: 'sudo snap install code --classic' },
}

const manualPackage: Package = {
    id: 'manual',
    name: 'Manual Tool',
    description: 'Manual',
    tags: ['manual'],
    category: 'Editors',
    popular: false,
    source: 'Manual',
    install: { manager: 'manual', note: 'Use the official instructions.' },
}

describe('generateInstallScript', () => {
    it('groups apt packages and deduplicates package names', () => {
        const result = generateInstallScript([aptPackage, duplicateAptPackage])
        expect(result.content).toContain('sudo apt install -y git curl')
        expect(result.aptPackageCount).toBe(2)
    })

    it('includes snap commands and manual notes', () => {
        const result = generateInstallScript([snapPackage, manualPackage])
        expect(result.content).toContain('sudo snap install code --classic')
        expect(result.content).toContain('Manual Tool')
        expect(result.manualPackageCount).toBe(1)
    })

    it('handles an empty selection', () => {
        const result = generateInstallScript([])
        expect(result.content).toContain('# No packages selected.')
    })
})
