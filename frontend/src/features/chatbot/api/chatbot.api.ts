import type { ChatApiMessage } from '../types/chatbot.types'

type ChatResponse = {
    message: string
}

type ChatError = {
    error?: string
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export async function sendChatMessage(messages: ChatApiMessage[], signal?: AbortSignal): Promise<string> {
    const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
        signal,
    })

    const data = (await response.json().catch(() => ({}))) as ChatResponse & ChatError

    if (!response.ok) {
        throw new Error(data.error ?? 'Could not contact the DevPack assistant.')
    }

    return data.message
}
