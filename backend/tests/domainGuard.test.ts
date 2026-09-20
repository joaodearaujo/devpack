import { describe, expect, it } from 'vitest'
import { isLinuxRelated, OUT_OF_SCOPE_MESSAGE } from '../src/domain/chat/domainGuard.js'

describe('isLinuxRelated', () => {
    it('accepts Linux and DevPack topics', () => {
        expect(isLinuxRelated('How do I install Docker on Ubuntu?')).toBe(true)
        expect(isLinuxRelated('Como funciona o apt?')).toBe(true)
        expect(isLinuxRelated('How do I use the DevPack package catalog?')).toBe(true)
    })

    it('rejects unrelated topics', () => {
        expect(isLinuxRelated('Tell me about World War II')).toBe(false)
        expect(isLinuxRelated('Who won the football match?')).toBe(false)
    })

    it('has a stable refusal message', () => {
        expect(OUT_OF_SCOPE_MESSAGE).toContain('Linux')
        expect(OUT_OF_SCOPE_MESSAGE).toContain('DevPack')
    })
})
