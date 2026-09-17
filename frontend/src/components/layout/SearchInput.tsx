import { Search } from 'lucide-react'

export default function SearchInput() {
    return (
        <div className="relative">
            <Search
                width={14}
                height={14}
                className="absolute top-1/2 left-2.5 -translate-y-1/2"
            />
            <input
                type="text"
                className="focus:border-primary border-app-border-strong h-8 w-80 rounded-md border px-2.5 py-1.5 pl-8 text-sm outline-none"
                placeholder="Search packages..."
            />
        </div>
    )
}
