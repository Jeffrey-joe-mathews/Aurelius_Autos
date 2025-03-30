import express from 'express'
import postRoutes from './routes/post.route.js'
import authRoutes from './routes/auth.route.js'

const app = express()

app.use(express.json()) // middleware to allow json outpurs

app.use('/api/auth', authRoutes);

app.listen(9876, () => {
    console.log("The api is running on port 9876");
    console.log("http://localhost:9876/");
})