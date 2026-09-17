import { Terminal } from 'lucide-react'

const commands = []

function EmptyTerminalMessage() {
    return (
        <div className="text-app-text-muted flex w-50 flex-col items-center justify-center gap-2 text-center text-[12px]">
            <Terminal width={40} height={40} className="opacity-50" />
            Select packages to generate your install script
        </div>
    )
}

export default function InstallScript() {
    return (
        <div className="border-app-border-strong bg-terminal-bg flex h-full flex-col overflow-hidden rounded-xl border">
            <div className="bg-app-bg-surface border-app-border flex items-center gap-2 border-b px-4 py-2 text-sm">
                <Terminal width={15} height={15} />
                INSTALL SCRIPT
            </div>
            <div className="flex flex-1 items-center justify-center">
                {commands.length == 0 ? <EmptyTerminalMessage /> : ''}
            </div>

            <div className="bg-app-bg border-app-border flex h-10 items-center gap-2 border-t text-sm">
                <ul className="flex w-full items-center justify-between px-2 py-1">
                    <li className="text-app-text-muted flex items-center gap-2 text-[11px]">
                        <span className="text-primary font-semibold">1</span>
                        packages
                    </li>{' '}
                    <li className="text-app-text-muted flex items-center gap-2 text-[11px]">
                        <span className="text-primary font-semibold">1</span>
                        categories
                    </li>{' '}
                    <li className="text-app-text-muted flex items-center gap-2 text-[11px]">
                        <span className="text-primary font-semibold">1</span>
                        commands
                    </li>
                </ul>
            </div>
        </div>
    )
}
