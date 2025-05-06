import dotenv from 'dotenv'
import prisma from '../lib/prisma.js';

dotenv.config()

export const getChats = async (req, res) => {
    const tokenUserId = req.userId;

    try {
        const chats = await prisma.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId]
                }
            }
        })
        res.status(200).json(
            {
                "success": true,
                "message": "Success",
                "data": chats
            }
        )
    }
    catch (err) {
        const tokenUserId = req.userId;
        const chatId = req.params.url;
        const chat = await prisma.chat.findUnique({
            where: {
                userIDs: tokenUserId,
                id: chatId
            }
        })
        res.status(500).json (
            {
                "success": false, 
                "message": "Internal server error",
                "data": chat
            }
        )
    }
}

export const getChat = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        res.status(200).json(
            {
                "success": true,
                "message": "Success"
            }
        )
    }
    catch (err) {
        res.status(500).json (
            {
                "success": false, 
                "message": "Internal server error"
            }
        )
    }
}

export const addChat = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        res.status(200).json(
            {
                "success": true,
                "message": "Success"
            }
        )
    }
    catch (err) {
        res.status(500).json (
            {
                "success": false, 
                "message": "Internal server error"
            }
        )
    }
}

export const readChat = async(req, res) => {
    const tokenUserId = req.userId;
    try {
        res.status(200).json(
            {
                "success": true,
                "message": "Success"
            }
        )
    }
    catch (err) {
        res.status(500).json (
            {
                "success": false, 
                "message": "Internal server error"
            }
        )
    }
}