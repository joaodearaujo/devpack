import { Bot, Eraser, MessageCircle, Send, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { sendChatMessage } from '../api/chatbot.api'
import type { ChatbotMessage } from '../types/chatbot.types'
import { STORAGE_KEYS, readStorage, writeStorage, removeStorage } from '../../../lib/storage'
import { cn, createId } from '../../../lib/utils'

const CHAT_DIALOG_ID = 'devpack-chat-dialog'

const initialMessage: ChatbotMessage = {
    id: 'welcome',
    role: 'assistant',
    content:
        'Olá. Sou o assistente do DevPack. Posso ajudar com Linux, Ubuntu, shell, gerenciamento de pacotes e o próprio DevPack.',
}

function loadMessages() {
    const stored = readStorage<ChatbotMessage[]>(STORAGE_KEYS.chat, [])
    return stored.length ? stored : [initialMessage]
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<ChatbotMessage[]>(loadMessages)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const controllerRef = useRef<AbortController | null>(null)

    useEffect(() => {
        writeStorage(STORAGE_KEYS.chat, messages.slice(-30))
    }, [messages])

    useEffect(() => {
        if (!isOpen) return
        inputRef.current?.focus()
    }, [isOpen])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isLoading])

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape' && isOpen) setIsOpen(false)
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [isOpen])

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const content = input.trim()
        if (!content || isLoading) return

        const userMessage: ChatbotMessage = {
            id: createId('user'),
            role: 'user',
            content,
        }
        const nextMessages = [...messages, userMessage]

        setMessages(nextMessages)
        setInput('')
        setError(null)
        setIsLoading(true)
        controllerRef.current?.abort()
        controllerRef.current = new AbortController()

        try {
            const reply = await sendChatMessage(
                nextMessages.slice(-12).map(({ role, content: messageContent }) => ({
                    role,
                    content: messageContent,
                })),
                controllerRef.current.signal,
            )

            setMessages((current) => [
                ...current,
                { id: createId('assistant'), role: 'assistant', content: reply },
            ])
        } catch (requestError) {
            if (requestError instanceof DOMException && requestError.name === 'AbortError') return
            const message = requestError instanceof Error
                ? requestError.message
                : 'Something went wrong while contacting the assistant.'
            setError(message)
        } finally {
            setIsLoading(false)
            controllerRef.current = null
        }
    }

    function clearConversation() {
        controllerRef.current?.abort()
        setMessages([initialMessage])
        setError(null)
        removeStorage(STORAGE_KEYS.chat)
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
            {isOpen && (
                <section
                    id={CHAT_DIALOG_ID}
                    role="dialog"
                    aria-modal="false"
                    aria-labelledby="devpack-chat-title"
                    className="flex h-[min(38rem,calc(100vh-7rem))] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-app-border-strong bg-card-bg shadow-2xl"
                >
                    <header className="flex items-center justify-between border-b border-app-border-strong px-4 py-3">
                        <div className="flex min-w-0 items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-bg text-primary">
                                <Bot aria-hidden="true" size={18} />
                            </span>
                            <div className="min-w-0">
                                <h2 id="devpack-chat-title" className="truncate text-sm font-semibold">DevPack Assistant</h2>
                                <p className="text-[10px] text-app-text-muted">Linux-only support</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button type="button" onClick={clearConversation} aria-label="Clear conversation" title="Clear conversation" className="rounded-md p-2 text-app-text-muted hover:bg-app-bg-surface hover:text-app-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                <Eraser aria-hidden="true" size={14} />
                            </button>
                            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant" title="Close assistant" className="rounded-md p-2 text-app-text-muted hover:bg-app-bg-surface hover:text-app-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                <X aria-hidden="true" size={16} />
                            </button>
                        </div>
                    </header>

                    <div className="min-h-0 flex-1 overflow-y-auto p-3" role="log" aria-live="polite" aria-relevant="additions text" aria-busy={isLoading}>
                        <div className="space-y-3">
                            {messages.map((message) => (
                                <div key={message.id} className={cn('flex', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                                    <p className={cn('max-w-[86%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-5', message.role === 'user' ? 'rounded-br-md bg-primary text-white' : 'rounded-bl-md bg-app-bg-surface text-app-text-subtle')}>
                                        {message.content}
                                    </p>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="rounded-2xl rounded-bl-md bg-app-bg-surface px-3 py-2 text-xs text-app-text-muted" aria-label="Assistant is thinking">
                                        Thinking…
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="rounded-lg border border-red-400/25 bg-red-400/5 px-3 py-2 text-xs leading-5 text-red-300" role="alert">
                                    {error}
                                </div>
                            )}

                            {messages.length === 1 && !isLoading && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['Como instalo um pacote?', 'O que é apt?', 'Como funciona o script?'].map((prompt) => (
                                        <button key={prompt} type="button" onClick={() => setInput(prompt)} className="rounded-full border border-app-border-strong px-2.5 py-1.5 text-[10px] text-app-text-muted hover:border-primary-border hover:text-primary">
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="border-t border-app-border-strong p-3">
                        <label htmlFor="devpack-chat-input" className="sr-only">Message the DevPack assistant</label>
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                id="devpack-chat-input"
                                name="message"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                placeholder="Ask about Linux or DevPack..."
                                autoComplete="off"
                                disabled={isLoading}
                                className="min-w-0 flex-1 rounded-xl border border-app-border-strong bg-app-bg px-3 py-2 text-sm outline-none placeholder:text-app-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                            />
                            <button type="submit" aria-label="Send message" title="Send message" disabled={!input.trim() || isLoading} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50">
                                <Send aria-hidden="true" size={16} />
                            </button>
                        </div>
                        <p className="mt-2 text-[10px] text-app-text-muted">Responses are generated by the DevPack backend.</p>
                    </form>
                </section>
            )}

            <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-expanded={isOpen}
                aria-controls={CHAT_DIALOG_ID}
                aria-label={isOpen ? 'Close DevPack assistant' : 'Open DevPack assistant'}
                title={isOpen ? 'Close assistant' : 'Open assistant'}
                className="flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:size-14"
            >
                {isOpen ? <X aria-hidden="true" size={21} /> : <MessageCircle aria-hidden="true" size={21} />}
            </button>
        </div>
    )
}
