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
    const key = req.params.id
    const {password : newPassword, avatar,  ...inputs} = req.body

    if(key !== req.userId)
    {
        return res.status(403).json(
            {
                "success" : false,
                "message" : "Not Authorized to UPDATE changes"
            }
        );
    }
    try {
            let updatedPassword = null
            if(newPassword) {
                updatedPassword = await bcrypt.hash(newPassword, 12)

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

            const {password, ...userInfo} = user

            res.status(200).json(
                {
                    userInfo
                }
            )
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
        const key = req.params.id

        if(req.userId === key) {
            await prisma.user.delete(
                {
                    where: {key},

                }
            )
            res.status(200).json(
                {
                    "success" : true,
                    "message" : "user account has been DELETEd successfully",
                    "lastMessage" : "bye bye... We will miss you... Take care ^u^"
                }
            )
        }
        else {
            res.status(403).json(
                {
                    "success" : false,
                    "message" : "Unauthorized Access... unable to DELETE"
                }
            )
        }
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
export const savePost = async(req, res) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;

    try {
        const savedPost = await prisma.savedPost.findUnique({
            where:{
                userId_postId:{
                    userId:tokenUserId,
                    postId:postId
                }
            }
        })
        if (savedPost) {
            await prisma.savedPost.delete({
                where:{
                    id:savedPost.id,
                }, 
            });
            res.status(200).json({success:true, message:"Post removed from save list"});
        }

        else {
            await prisma.savedPost.create({
                // data:{
                //     userID:tokenUserId,
                //     postId:postId
                // }
                data: {
                    user: { connect: { id: tokenUserId } },
                    post: { connect: { id: postId } }
                }
            })
            res.status(200).json({success:true, message:"Post added to the user saved list"})
        }
    }
    catch(err) {
        console.error(err)
        res.status(500).json({success:false, message:"Internal server error"})
    }
}