import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        res.status(401).json({
            "success": false,
            "message": "Not Authenticated!"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
        if(err) {
            res.status(403).json({
                "success": true,
                "message": "Token is not valid!!!"
            })
        }
        req.userId = payload.id
        next()
    })
}
