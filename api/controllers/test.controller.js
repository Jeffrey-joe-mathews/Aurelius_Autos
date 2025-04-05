import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const shouldBeLoggedIn = async (req, res) => {
    
    console.log(req.userId)

    res.status(200).json(
        {
            "success":true,
            "message": "Authentication Successful"
        }
    )
}
export const shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token

    if (!token) {
        res.status(401).json(
            {
                "success": false,
                "message" : "Not Authenticated"
            }
        )
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
        if(err) {
            res.status(403).json(
                {
                    "success": false,
                    "message": "Invalid Token"
                }
            )
        }
        if(!payload.isAdmin) {
            res.status(403).json(
                {
                    "success" : false,
                    "message" : "Not Authorized"
                }
            )
        }
    })

    res.status(200).json(
        {
            "success":true,
            "message": "Authentication Successful"
        }
    ) 
}