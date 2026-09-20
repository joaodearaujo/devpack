import { ArrowDownToLine } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link to="/overview" aria-label="DevPack overview" className="flex items-center justify-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:justify-start">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <ArrowDownToLine aria-hidden="true" strokeWidth={3} color="white" size={15} />
            </span>
            <span className="hidden flex-col gap-1 leading-none md:flex">
                <span className="text-left text-[15px] font-bold tracking-tight text-app-white">DevPack</span>
                <span className="text-left text-[10px] font-semibold tracking-[0.12em] text-app-text-muted">LINUX SETUP</span>
            </span>
        </Link>
    )
}
