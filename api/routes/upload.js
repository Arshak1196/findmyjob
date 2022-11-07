import express from 'express'
import { protect } from '../middlewares/authMiddleware.js';
import { uploadImage } from '../controllers/uploadController.js'
import { imageUpload, pdfUpload } from '../middlewares/uploadMiddleware.js'
const router = express.Router()


//upload image
router.post('/uploadimage',protect,imageUpload,uploadImage)

//upload pdf
router.post('/uploadpdf',protect,pdfUpload,uploadImage)
 



export default router