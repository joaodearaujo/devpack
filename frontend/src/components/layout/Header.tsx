export function Header({
    title,
    subtitle,
    eyebrow,
}: {
    title: string
    subtitle: string
    eyebrow?: string
}) {
    return (
        <header className="flex flex-col gap-2">
            {eyebrow && <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
            <p className="max-w-2xl text-sm leading-6 text-app-text-muted">{subtitle}</p>
        </header>
    )
}
