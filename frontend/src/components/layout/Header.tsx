export function Header({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) {
    return (
        <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{title}</h1>

            <p className="text-app-text-muted font-thin">{subtitle}</p>
        </header>
    )
}
