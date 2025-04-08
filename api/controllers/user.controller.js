import prisma from "../lib/prisma.js"
import bcrypt from 'bcrypt'

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to GET users"
            }
        )
    }
}
export const getUser = async (req, res) => {
    try {
        const key = req.params.id
        const user = await prisma.user.findUnique({
            where: { id:key }
        })
        res.status(200).json(
            user
        )
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to GET user"
            }
        )
    }
}
export const updateUser = async (req, res) => {
    try {
        const key = req.params.id
        if(key === req.userId) {
            const {password, avatar,  ...inputs} = req.body

            let updatedPassword = null
            if(password) {
                updatedPassword = await bcrypt.hash(password, 12)

            }

            const user = await prisma.user.update(
                {
                    where: {id : key},
                    data: {
                        ...inputs,
                        ...(updatedPassword && {password : updatedPassword}),
                        ...(avatar && {avatar:avatar})
                    },
                }
            )
            res.status(200).json(
                {
                    user
                }
            )
        }
        else {
            return res.status(403).json(
                {
                    "success" : false,
                    "message" : "Not Authorized to UPDATE changes"
                }
            )
        }
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to SET user"
            }
        )
    }
}
export const deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to DELETE user"
            }
        )
    }
}