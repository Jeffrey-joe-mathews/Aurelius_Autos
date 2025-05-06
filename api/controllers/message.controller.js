import prisma from "../lib/prisma.js"

export const addMessage  = async (req, res) => {
    
    const tokenUserId = req.userId
    const chatId = req.params.chatId
    const text = req.body.text
    try {
        const chat = await prisma.chat.findUnique({
            where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            }
        })

        if (!chat) {
            res.status(404).json(
                {
                    "message": "chat not found!"
                }
            )
        }

        const message = await prisma.message.create({
            data: {
                text: text,
                chatId: chatId,
                userId: tokenUserId
            }
        })

        await prisma.chat.update({
            where: {
                id: chatId
            },
            data: {
                seenBy: [tokenUserId],
                lastMessage: text
            }
        })

        res.status(200).json(
            {
                "success": true,
                "message": "Success",
                "data": message
            }
        )
    }
    catch(err) {
        res.status(500).json (
            {
                "success":false,
                "message":"Internal Server Error"
            }
        )
    }
}