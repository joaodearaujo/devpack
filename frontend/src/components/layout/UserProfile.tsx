import { User } from 'lucide-react'

export default function UserProfile() {
    return (
        <div className="flex items-center justify-center gap-2.5 md:justify-start">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-500">
                <User aria-hidden="true" strokeWidth={3} color="white" size={15} />
            </div>
            <div className="hidden flex-col gap-1 leading-none md:flex">
                <span className="text-left text-brand font-bold text-app-text-subtle">
                    Ubuntu
                </span>
                <span className="text-left text-label text-app-text-muted">
                    @localhost
                </span>
            </div>
        </div>
    )
}
