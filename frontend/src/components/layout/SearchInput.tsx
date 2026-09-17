import { Search } from 'lucide-react'

export default function SearchInput() {
    return (
        <div className="relative">
            <Search
                width={14}
                height={14}
                className=" absolute left-2.5 top-1/2 -translate-y-1/2"
            />
            <input
                type="text"
                className="h-8 w-80 rounded-md border focus:border-primary border-app-border-strong px-2.5 py-1.5 pl-8 text-sm outline-none"
                placeholder="Search packages..."
            />
        </div>
    )
}
