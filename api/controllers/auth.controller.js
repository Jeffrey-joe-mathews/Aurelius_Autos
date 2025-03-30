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
export const login = (req, res) => {
    // db operations
    const {username, password} = req.body;
    try {

        // check if the user exists
        
        // check if the password is correct
        
        // generate cookie token and send to the user
    }
    catch(error) {
        console.error(error);
    }
}
export const logout = (req, res) => {
    // db operations
}