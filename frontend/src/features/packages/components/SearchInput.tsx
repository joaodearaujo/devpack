import { Search } from 'lucide-react'

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="relative text-app-text-muted">
            <Search
                aria-hidden="true"
                size={15}
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2"
            />
            <label className="sr-only" htmlFor="package-search">
                Search packages
            </label>
            <input
                id="package-search"
                name="package-search"
                type="search"
                value={value}
                autoComplete="off"
                placeholder="Search packages..."
                onChange={(event) => onChange(event.target.value)}
                className="h-9 w-full rounded-md border border-app-border-strong bg-app-bg-surface px-2.5 py-1.5 pl-8 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
        </div>
    )
}
