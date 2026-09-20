export type ChatbotMessage = {
    id: string
    role: 'assistant' | 'user'
    content: string
}

export type ChatApiMessage = Pick<ChatbotMessage, 'role' | 'content'>
