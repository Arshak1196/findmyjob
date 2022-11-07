import { v2 as cloudinary } from 'cloudinary'
import {createError} from '../middlewares/error.js'
import * as fs from 'fs';

cloudinary.config({
    cloud_name: 'dyhxxmucn',
    api_key: '815523133652378',
    api_secret: 'yGCezjNCMwE_bVl7HValY8wkSzU',
    secure:true
})



const removeTmp = (path) => {
    fs.unlink(path, (err) => {
      if (err) throw err;
    });
  };

const UploadToCloudinary = async(file,path,next)=>{
    return new Promise((resolve)=>{
        cloudinary.uploader.upload(
            file.tempFilePath,
            {
                folder:path
            },
            (err,res)=>{
                if(err){
                    removeTmp(file.tempFilePath);
                    return next(createError(400,'Upload File Failed'))
                }
                resolve({
                    url:res.secure_url
                })
            }
        )
    })
}

export const uploadImage = async(req,res,next)=>{
    try {
        const {path}=req.body
        const {file}=req.files
        const url=await UploadToCloudinary(file,path,next)
        removeTmp(file.tempFilePath)
        res.status(200).json(url)
    } catch (error) {
        next(error)
    }
}


