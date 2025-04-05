import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'

dotenv.config()
const app = express()

app.use(express.json()) // middleware to allow json outpurs
app.use(cookieParser()); // middleware that makes creation of cookies simple
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))

app.use('/api/auth', authRoutes);

app.listen(9876, () => {
    console.log("The api is running on port 9876");
    console.log("http://localhost:9876/");
})