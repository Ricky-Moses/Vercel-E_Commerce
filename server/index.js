import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// Mongodb
import connectDB from './config/db.js'
// Authentication routes
import authRoutes from './routes/authRoutes.js'

const allowedOrigin = ['http://localhost:5173', 'https://vercel-e-commerce-rouge.vercel.app'];

// Express initialization
const app = express()

// Mongo connection 
connectDB()

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        if(!origin || allowedOrigin.includes(origin)){
            callback(null, true)
        } else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.set('trust proxy', 1)

// Router

app.use('/api/auth', authRoutes)

// ENV
const PORT = process.env.PORT || 3000;
// Server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})