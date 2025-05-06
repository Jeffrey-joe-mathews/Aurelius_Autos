import express from 'express'
import { addChat, getChat, getChats, readChat } from '../controllers/chat.controller.js';

import { verifyToken } from '../middleware/verifyToken.js'

const chatRoutes = express.Router()

chatRoutes.get("/", verifyToken, getChats);
chatRoutes.get("/:id", verifyToken, getChat);
chatRoutes.post("/", verifyToken, addChat);
chatRoutes.put("/read/:id", verifyToken, readChat);

export default chatRoutes