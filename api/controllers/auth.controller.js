import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const {username, email, password} = req.body;

    // catching errors in user creation
    try {
        // hashing the password
        const hashedPassword = await bcrypt.hash(password, 12);
        // create a new user and save to the database
        const newUser = await prisma.User.create({
            data:{
                username,
                email,
                password:hashedPassword,
            }
        })
        res.status(201).json(
            {
                "success" : true,
                "message" : "Account created sucessfully"
            }
        )
        console.log(newUser)
    } catch (error) {
        console.error(error);
        res.status(500).json(
            {
                "success" : false,
                "message" : "failed to create account"
            }
        )
    }
}
export const login = async (req, res) => {
    // db operations
    const {username, password} = req.body;
    try {

        // check if the user exists
        const user = await prisma.user.findUnique(
            {
                where:{username : username}
            }
        )
        
        if(!user) {
            res.status(401).json (
                {
                    "success" : false,
                    "message" : "Account with the given username does not exist"
                }
            )
        }
        // check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            res.status(401).json(
                {
                    "success" : true,
                    "message" : "Invalid Credentials"
                }
            )
        }
        // generate cookie token and send to the user
        res.setHeader()
    }
    catch(error) {
        console.error(error);
        res.status(500).json(
            {
                "success" : false,
                "message" : "Server error probably ^w^"
            }
        )
    }
}
export const logout = (req, res) => {
    // db operations
}