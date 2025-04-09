import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'

const postRoutes = express.Router

postRoutes.get("/", getPosts)
postRoutes.get("/:id", getPost)
postRoutes.post("/", verifyToken, addPost)
postRoutes.put("/:id", verifyToken, updatePost)
postRoutes.delete("/:id", verifyToken, deletePost)

export default postRoutes;