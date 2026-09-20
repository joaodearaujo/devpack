import { Search, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const focusSearch = () => inputRef.current?.focus()
        window.addEventListener('devpack:focus-package-search', focusSearch)
        return () => window.removeEventListener('devpack:focus-package-search', focusSearch)
    }, [])

    return (
        <div className="relative text-app-text-muted">
            <Search aria-hidden="true" size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
            <label className="sr-only" htmlFor="package-search">Search packages</label>
            <input
                ref={inputRef}
                id="package-search"
                name="package-search"
                type="search"
                value={value}
                autoComplete="off"
                placeholder="Search by package, tag, or description..."
                onChange={(event) => onChange(event.target.value)}
                className="h-10 w-full rounded-lg border border-app-border-strong bg-app-bg-surface px-3 py-2 pl-9 pr-9 text-sm text-app-white outline-none transition-colors placeholder:text-app-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange('')}
                    aria-label="Clear package search"
                    title="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 hover:text-app-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                    <X aria-hidden="true" size={14} />
                </button>
            )}
        </div>
    )
}
