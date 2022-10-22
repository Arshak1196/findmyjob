import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import { getPostedJobs, postNewJob, searchJobs } from '../controllers/jobControllers.js';

//search Jobs
router.post('/search',protect, searchJobs)

//post new Job
router.post('/post',protect, postNewJob)

//get posted Jobs
router.get('/postedjobs', protect, getPostedJobs)

export default router