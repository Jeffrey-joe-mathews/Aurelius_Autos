import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { addMessage } from '../controllers/message.controller.js'

const messageRoutes = express.Router()

messageRoutes.post("/:chatId", verifyToken, addMessage)

export default messageRoutes