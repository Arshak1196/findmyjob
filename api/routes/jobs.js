import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import { getPostedJobs, postNewJob, searchJobs } from '../controllers/jobControllers.js';

//searchJobs
router.post('/search', searchJobs)

//post new job
router.post('/post',protect, postNewJob)

//postedJobs
router.get('/postedjobs', protect, getPostedJobs)

export default router