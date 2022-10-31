import fs from 'fs'
import { createError } from "../middlewares/error.js";

export const imageUpload = async (req,res,next)=>{
    try {
        if(!req.files){
            return next(createError(400,'No Files Selected'))
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const pdfUpload = async(req,res,next)=>{
    try{
        if(!req.files){
            return next(createError(400,'No Files Selected'))
        }
        next()
    }catch (error) {
        next(error)
    }
}