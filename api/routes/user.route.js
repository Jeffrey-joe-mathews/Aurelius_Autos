import express from 'express'
import { getUsers, getUser, updateUser, deleteUser, savePost, profilePosts, getNotificationNumber } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const userRoutes = express.Router();

userRoutes.get("/", getUsers)
// userRoutes.get("/:id", verifyToken, getUser) 
userRoutes.put("/:id", verifyToken, updateUser)
userRoutes.delete("/:id", verifyToken, deleteUser)
userRoutes.post("/save", verifyToken, savePost)
userRoutes.get("/profilePosts", verifyToken, profilePosts)
userRoutes.get("/notification", verifyToken, getNotificationNumber)

export default userRoutes