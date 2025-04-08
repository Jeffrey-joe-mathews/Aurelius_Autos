import express from 'express'
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const userRoutes = express.Router();

userRoutes.get("/", getUsers)
userRoutes.get("/:id", verifyToken, getUser) 
userRoutes.put("/:id", verifyToken, updateUser)
userRoutes.delete("/:id", verifyToken, deleteUser)

export default userRoutes