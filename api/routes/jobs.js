import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import {
    applyForJob, getAppliedJobs, getJobDetails,
    getPostedJobs, getSavedJobs, postNewJob, saveJob,
    searchJobs
} from '../controllers/jobControllers.js';

//search Jobs
router.post('/search', protect, searchJobs)

//save and unsave Jobs
router.post('/save', protect, saveJob)

//get saved Jobs
router.get('/save', protect, getSavedJobs)

//get Job details
router.get('/details/:id', protect, getJobDetails)

//apply for job
router.post('/apply', protect, applyForJob)

//get Applied Jobs
router.get('/applied', protect, getAppliedJobs)

//post new Job
router.post('/post', protect, postNewJob)

//get posted Jobs
router.get('/postedjobs', protect, getPostedJobs)



export default router