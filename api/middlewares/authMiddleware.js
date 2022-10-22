import jwt from "jsonwebtoken";
import { createError } from "../middlewares/error.js";
import User from "../models/User.js";


export const protect = async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get token from header
            token = req.headers.authorization.split(' ')[1]

            //Verify token
            const decoded = jwt.verify(token,process.env.JWT_SECTET_KEY)

            //Get User from the token
            req.user = await User.findById(decoded.id).select('-password')  
            if(req.user){
                next()
            }else{
                return next(createError(401,'Invalid User'))
            }
        } catch (error) {
            console.log(error)
            return next(createError(401,'Not authorized'))
        }
    }

    if(!token) {
        return next(createError(401,'You are not Authenticated!'))
    }
}