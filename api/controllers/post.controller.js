import prisma from "../lib/prisma.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const getPosts = async (req, res) => {
    const query = req.query;
    console.log(query);
    const capitalize = str =>
        str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';


    try {

        const filters = {
      city: query.city ? capitalize(query.city) : undefined,
      transmission: query.transmission || undefined,
      carType: query.carType || undefined,
      price: {
        gte: parseInt(query.minPrice) || 0,
        lte: parseInt(query.maxPrice) || 99999999,
      },
    };

    if (query.date) {
      const selectedDate = new Date(query.date);
      filters.availableDates = {
        has: selectedDate,
      };
    }

    const posts = await prisma.post.findMany({
      where: filters,
    });
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
        let userID
        const token = req.cookies.token;
        if(!token) {
            userID = null;
        }
        else {
            jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
                if(err) {
                    userID = null;
                }
                else {
                    userID = payload.id;
                }
            })
        }

        const saved = await prisma.savedPost.findUnique({
            where: {
                userId_postId:{
                    userId: userID,
                    postId:id
                }
            }
        })

        res.status(200).json(
            {
                post, isSaved:saved?true:false
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
                availableDates: body.postData.availableDates.map(date=> new Date(date)),
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
        const body = req.body
        const postId = req.params.id;
        const updatedPost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                ...body.postData,
                availableDates: body.postData.availableDates.map(date=>new Date(date)),
            }
        }) 
        console.log(updatedPost)
        if(body.postDetail) [
            await prisma.postDetail.update({
                where: {
                    postID: postId
                },
                data: body.postDetail
            })
        ]
        res.status(200).json(
            {
                "success":true,
                "message": "post updated successfully",
                "data": updatedPost
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
        const id = req.params.id;
        const tokenUserId = req.userId;
        const post = await prisma.post.findUnique({
            where: { id: id }
        });

        if (!post || post.userID !== tokenUserId) {
            return res.status(403).json({
                success: false,
                message: "Not authorized or post not found!"
            });
        }
        await prisma.postDetail.deleteMany({
            where: {
                postID: id
            }
        });
        await prisma.savedPost.deleteMany({
            where: {
                postId: id
            }
        });
        await prisma.booking.deleteMany({
            where: {
                postId: id
            }
        });
        const deletedPost = await prisma.post.delete({
            where: { id: id }
        });

        res.status(200).json({
            success: true,
            message: "Post and all related data deleted",
            post: deletedPost
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error. Unable to DELETE post"
        });
    }
};
