import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import prisma from '../lib/prisma.js';

dotenv.config();

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
        // res.setHeader("Set-Cookie", "test=" + "myValue").json({"success" : true})
        
        const age = 1000 * 60 * 60 * 24 * 7; // 1 week

        const token = jwt.sign({
            id:user.id,  
            isAdmin:true
        }, process.env.JWT_SECRET_KEY, {expiresIn:age})

        // removing the password
        const {password: userPassword, ...userInfo} = user;

        res.cookie("token", token, {
            httpOnly : true, // prevents client side js from accessing the cookie
            // secure: true, // for https connection(prod)
            maxAge : age
        }).status(200).json(
            {userInfo}
        )
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
    try { 
        res.clearCookie("token").status(200).json(
            {
                "success" : true,
                "message" : "Logged Out Successfully"
            }
        )
    }
    catch (error) {
        console.error(error);
        res.status(500).json(
            {
                "success" : false,
                "message" : "Server Error"
            }
        )
    }
}