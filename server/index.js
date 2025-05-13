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

const allowedOrigins = [
  'http://localhost:5173'
];

const corsOptions = {
  origin: (origin, callback) => {
    console.log('CORS check origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  credentials: true
};


app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

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