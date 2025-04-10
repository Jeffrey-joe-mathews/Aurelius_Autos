import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
    try {

        const posts = await prisma.post.findMany() 
        res.status(200).json(
            {
                posts
            }
        )
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error. Unable to GET posts"
            }
        )
    }
}

export const getPost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await prisma.post.findUnique({
            where: {id: id},
            include: {
                postDetail:true,
                user:{
                    select: {
                        username:true,
                        avatar:true,
                        
                    }
                }
            }
        })
        res.status(200).json(
            {
                post
            }
        )
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error. Unable to GET post"
            }
        )
    }
}

export const addPost = async (req, res) => {
    try {
        const body = req.body
        const user_id = req.userId

        const userPost = await prisma.post.create({
            data : {
                ...body.postData,
                userID : user_id,
                postDetail: {
                    create: body.postDetail
                }
            }
        })
        res.status(200).json(
            {
                userPost
            }
        )
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error. Unable to POST post"
            }
        )
    }
}

export const updatePost = async (req, res) => {
    try {
        res.status(200).json(
            {

            }
        )
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error. Unable to PUT post"
            }
        )
    }
}

export const deletePost = async (req, res) => {
    try {

        const id = req.params.id
        const tokenUserId = req.userId

        const post = await prisma.post.findUnique({
            where: {id:id}
        })

        if(post.userID !== tokenUserId) {
            return res.status(403).json(
                {
                    "success" : false,
                    "message" : "Not authorized!"
                }
            )
        }
        const deletedPost = await prisma.post.delete({
            where: {id:id}
        })

        res.status(200).json(
            {
                "success" : true,
                "message" : "post deleted",
                "post" : deletedPost
            }
        )
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error. Unable to DELETE post"
            }
        )
    }
}