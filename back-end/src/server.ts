import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

export const PORT = 5000
const app = Fastify({logger:true})

const start = async () => {
    try {
        await app.register(cors)
        await app.register(routes)
        await app.listen({port:PORT})
    } catch (err) {
        process.exit(1)
    }
}

start();
