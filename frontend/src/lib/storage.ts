export const STORAGE_KEYS = {
    theme: 'devpack:theme:v1',
    selectedPackages: 'devpack:selected-packages:v1',
    history: 'devpack:history:v1',
    chat: 'devpack:chat:v1',
} as const

export function readStorage<T>(key: string, fallback: T): T {
    try {
        const raw = localStorage.getItem(key)
        return raw ? (JSON.parse(raw) as T) : fallback
    } catch {
        return fallback
    }
}

export function writeStorage<T>(key: string, value: T) {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch {
        // Local persistence is an enhancement; the app still works without it.
    }
}

export function removeStorage(key: string) {
    try {
        localStorage.removeItem(key)
    } catch {
        // Ignore storage failures.
    }
}
