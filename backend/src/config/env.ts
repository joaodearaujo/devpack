import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().int().positive().default(3001),
    FRONTEND_ORIGIN: z.string().url().default('http://localhost:5173'),
    OPENAI_API_KEY: z.string().min(1).default(''),
    OPENAI_MODEL: z.string().min(1).default('gpt-5.6-luna'),
})

const parsed = envSchema.parse(process.env)

export const env = {
    ...parsed,
    requireOpenAIKey() {
        if (!parsed.OPENAI_API_KEY) {
            throw new Error('OPENAI_API_KEY is not configured.')
        }
        return parsed.OPENAI_API_KEY
    },
}
