import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import {
    applyForJob, changeJobStatus, getAppliedJobs, getJobApplicants,
    getJobDetails, getPostedJobs, getSavedJobs, postNewJob, saveJob,
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

//get Applicants on Jobs
router.get('/applicants/:id', protect, getJobApplicants)

//Change Applied Job status
router.post('/job_status/:id', changeJobStatus)

//Change Applicant Status
router.post('/applicant_status/:id',protect,)


export default router