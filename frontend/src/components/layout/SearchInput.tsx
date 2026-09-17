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
                className="border h-8 w-80 border-app-border-strong rounded-md pl-8 pr-2.5 py-1.5 outline-none text-sm"
                placeholder="Search packages..."
            />
        </div>
    )
}
