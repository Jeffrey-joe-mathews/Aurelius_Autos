import prisma from "../lib/prisma.js"

export const getMessages  = async (req, res) => {
    try {
        const tokenUserId = req.userId
        const messages = await prisma.message.findMany({
            where: {
                chatIds: {
                    hasSome: [tokenUserId]
                }
            }
        })

        res.status(200).json(
            {
                "success": true,
                "message": "Success",
                "data": messages
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