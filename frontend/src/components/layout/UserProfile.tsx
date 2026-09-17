import { User } from 'lucide-react'

export default function UserProfile() {
    return (
        <div>
            <div className="flex gap-2.5 items-center ">
                <div className="size-8 flex items-center justify-center rounded-full bg-gray-500">
                    <User
                        stroke-width={3}
                        color="white"
                        height={16}
                        width={16}
                    />
                </div>
                <div className="flex flex-col gap-1 leading-none">
                    <span className="text-brand text-left font-bold text-app-text-subtle">
                        Ubuntu
                    </span>

                    <span className="text-label text-left">
                        @localhost
                    </span>
                </div>
            </div>
        </div>
    )
}
