import express from 'express'
import { uploadImage } from '../controllers/uploadController.js'
import { imageUpload } from '../middlewares/uploadMiddleware.js'
const router = express.Router()

router.post('/uploadimage',imageUpload,uploadImage)
 




export default router