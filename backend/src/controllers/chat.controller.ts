import type { RequestHandler } from 'express'
import { z } from 'zod'
import { createChatReply } from '../services/chat.service.js'

const messageSchema = z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string().trim().min(1).max(4000),
})

const requestSchema = z.object({
    messages: z.array(messageSchema).min(1).max(20),
})

export const postChat: RequestHandler = async (req, res, next) => {
    try {
        const payload = requestSchema.parse(req.body)
        const message = await createChatReply(payload.messages)
        res.json({ message })
    } catch (error) {
        next(error)
    }
}
