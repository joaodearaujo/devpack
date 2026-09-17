export function Header({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) {
    return (
        <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <p className="max-w-2xl text-sm leading-6 text-app-text-muted">{subtitle}</p>
        </header>
    )
}
