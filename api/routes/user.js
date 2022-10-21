import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import {  userLogin, userRegister } from '../controllers/userControllers.js';
import { getPostedJobs, postNewJob } from '../controllers/jobControllers.js';

//test
router.get('/test',protect,(req,res)=>{
    res.json({message:'test completed'})
})

//userRegister
router.post('/register',userRegister)

//userLogin
router.post('/login', userLogin) 

//postJob
router.post('/postjob',postNewJob)

//postedJobs
router.get('/postedjobs/:id',getPostedJobs)



 


export default router