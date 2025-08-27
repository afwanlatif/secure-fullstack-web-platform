import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { connectDB } from './config/db.config'
import envConfig from './config/env.config'
import { setupRoutes } from './routes/base.router'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Setup routes
setupRoutes(app)

// DataBase Connection
connectDB()

serve({
  fetch: app.fetch,
  port: Number(envConfig.port),
}, () => {
  console.log(`Server is running at ${envConfig.port}`)
})
