import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { env } from './config/env.js'
import chatRoutes from './routes/chat.routes.js'
import { errorHandler } from './middleware/errorHandler.js'

export function createApp() {
    const app = express()

    app.disable('x-powered-by')
    app.use(helmet())
    app.use(
        cors({
            origin: env.FRONTEND_ORIGIN,
        }),
    )
    app.use(express.json({ limit: '32kb' }))
    app.use(
        rateLimit({
            windowMs: 60_000,
            limit: 30,
            standardHeaders: 'draft-8',
            legacyHeaders: false,
        }),
    )

    app.get('/api/health', (_req, res) => {
        res.json({ status: 'ok', service: 'devpack-backend' })
    })

    app.use('/api/chat', chatRoutes)
    app.use(errorHandler)

    return app
}
