import { describe, expect, it } from 'vitest'
import { packages } from './packages.data'
import { filterPackages } from './packages.selectors'

describe('filterPackages', () => {
    it('filters by category and search together', () => {
        const result = filterPackages(packages, {
            search: 'git',
            category: 'Version Control',
            sort: 'relevance',
        })

        expect(result.every((pkg) => pkg.category === 'Version Control')).toBe(true)
        expect(result.some((pkg) => pkg.name === 'Git')).toBe(true)
    })

    it('sorts by name in both directions', () => {
        const asc = filterPackages(packages, { search: '', category: 'All', sort: 'name-asc' })
        const desc = filterPackages(packages, { search: '', category: 'All', sort: 'name-desc' })

        expect(asc[0].name.localeCompare(asc[1].name)).toBeLessThanOrEqual(0)
        expect(desc[0].name.localeCompare(desc[1].name)).toBeGreaterThanOrEqual(0)
    })
})
