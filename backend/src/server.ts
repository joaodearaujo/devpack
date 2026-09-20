import { createServer } from 'node:http'
import { createApp } from './app.js'
import { env } from './config/env.js'

const server = createServer(createApp())

server.listen(env.PORT, () => {
    console.log(`DevPack backend listening on http://localhost:${env.PORT}`)
})

function shutdown(signal: string) {
    console.log(`${signal} received. Shutting down...`)
    server.close(() => {
        process.exit(0)
    })
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))
