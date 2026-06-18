import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

dotenv.config()

const requiredEnv = ['MONGODB_URI', 'JWT_SECRET']
const missingEnv = requiredEnv.filter((key) => !process.env[key])

if (missingEnv.length > 0) {
  console.error(`Missing required environment variables: ${missingEnv.join(', ')}`)
  process.exit(1)
}

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
]

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL)
}

if (process.env.VERCEL_URL) {
  allowedOrigins.push(`https://${process.env.VERCEL_URL}`)
}

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true)
        return
      }

      const isAllowedOrigin =
        allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app')

      if (isAllowedOrigin) {
        callback(null, true)
        return
      }

      if (process.env.NODE_ENV !== 'production' && origin.includes('localhost')) {
        callback(null, true)
        return
      }

      callback(new Error(`Origin ${origin} not allowed by CORS`))
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use(helmet())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'LinkedIn Clone API is running',
    timestamp: new Date().toISOString(),
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
})

export default app
