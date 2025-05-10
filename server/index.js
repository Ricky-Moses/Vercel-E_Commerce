import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// Mongodb
import connectDB from './config/db.js'
// Authentication routes
import authRoutes from './routes/authRoutes.js'

// Express initialization
const app = express()

// Mongo connection 
connectDB()

// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Router

app.use('/api/auth', authRoutes)

// ENV
const PORT = process.env.PORT || 3000;
// Server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})