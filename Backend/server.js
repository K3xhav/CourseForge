import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mogodb.js'
import { clerkWebhooks, stripeWebhooks,  } from './controllers/webhooks.js'
import mentorRouter from './routes/mentorRoutes.js'
import {clerkMiddleware} from '@clerk/express'
import { connectCloudiary } from './config/cloudinary.js'
import courseRouter from './routes/courseRoutes.js'
import usertRouter from './routes/userRoutes.js'

const app = express()

await connectDb()
await connectCloudiary()

app.use(cors())

const clerkHandler = process.env.CLERK_SECRET_KEY && process.env.CLERK_PUBLISHABLE_KEY ? clerkMiddleware() : (req, res, next) => {
    console.warn('Clerk is not configured. Skipping Clerk middleware.')
    next()
}

app.use(clerkHandler)

app.get('/', (req, res) => {
    res.send("API Working")
})
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/mentor', express.json(), mentorRouter)
app.use('/api/course', express.json(), courseRouter)
app.use('/api/user', express.json(), usertRouter)
app.post('/stripe', express.raw({
    type: 'application/json'
}), stripeWebhooks)

const PORT = process.env.PORT || 5090

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT} successfully`)
    })
}

export default app