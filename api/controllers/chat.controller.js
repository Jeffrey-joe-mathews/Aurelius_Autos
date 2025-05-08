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
        for (const chat of chats) {
            const recieverId = chat.userIDs.find((id)=>id!==tokenUserId) 

            const reciever = await prisma.user.findUnique({
                where: {
                    id: recieverId
                },
                select: {
                    id: true,
                    username: true,
                    avatar: true,
                },
            });
            chat.reciever = reciever
        }
        res.status(200).json(
            {
                "success": true,
                "message": "Success",
                "data": chats
            }
        )
    }
    catch (err) {
        res.status(500).json (
            {
                "success": false, 
                "message": "Internal server error",
            }
        )
    }
}

export const getChat = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        const chatId = req.params.id;
        const chat = await prisma.chat.findUnique({
            where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        })
        await prisma.chat.update({
            where: {
                id: chatId,   
            },
            data: {
                seenBy: {
                    set: [tokenUserId]
                }
            }
        })
        res.status(200).json(
            {
                "success": true,
                "message": "Success",
                "data": chat
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
        const newChat = await prisma.chat.create({
            data: {
                userIDs: [tokenUserId, req.body.recieverId]
            }
        })
        res.status(200).json(
            {
                "success": true,
                "message": "Success",
                "data": newChat
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
        const chat  = await prisma.chat.update({
            where: {
                id: req.params.id,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
            data: {
                seenBy: {
                    set: [tokenUserId]
                }
            }
        })
        res.status(200).json(
            {
                "success": true,
                "message": "Success",
                "data": chat
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