import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { getMessages } from '../controllers/message.controller.js'

const messageRoutes = express.Router()

messageRoutes.get("/", verifyToken, getMessages)

export default messageRoutes