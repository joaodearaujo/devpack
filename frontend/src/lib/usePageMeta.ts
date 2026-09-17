import { useEffect } from 'react'

type PageMeta = {
    title: string
    description: string
    noIndex?: boolean
}

function getOrCreateMeta(name: string) {
    let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)

    if (!element) {
        element = document.createElement('meta')
        element.name = name
        document.head.appendChild(element)
    }

    return element
}

export function usePageMeta({ title, description, noIndex = false }: PageMeta) {
    useEffect(() => {
        document.title = `${title} | DevPack`
        getOrCreateMeta('description').content = description
        getOrCreateMeta('robots').content = noIndex ? 'noindex, nofollow' : 'index, follow'
    }, [description, noIndex, title])
}
