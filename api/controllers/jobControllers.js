import Job from "../models/Job.js"
import User from "../models/User.js"
import {createError} from '../middlewares/error.js'



//@route   POST /jobs/search
//@access  Private
//@desc    Search for Jobs
export const searchJobs = async (req, res, next) => {
    try {
        const { designation } = req.body
        const jobs = await Job.find({
            "$and": [
                { isOpen: true },
                { isBlocked: false },
                {
                    designation: { $regex: designation, $options: 'i' }
                },
                { userId: {$nin:[req.user?._id]}}
            ]
        }).sort({createdAt:-1})
        res.json(jobs)
    } catch (error) {
        next(error)
    }
}

//@route   POST /jobs/save
//@access  Private
//@desc    Save or Unsave a Job
export const saveJob = async (req,res,next)=>{
    try {
        const {jobId} = req.body
        const saved = await User.findOne({_id:req.user._id,savedJobs:jobId})
        if(saved){
            console.log('unsave')
            await User.updateOne({_id:req.user._id},{
                $pull:{
                    savedJobs:jobId
                }
            })
            res.status(200).json({saved:false})
        }else{
            console.log('save')
            await User.updateOne({_id:req.user._id},{
                $push: {
                    savedJobs:jobId
                }
            })
            res.status(200).json({saved:true})
        }
    } catch (error) {
        next(error)
    }
}

//@route   GET /jobs/save
//@access  Private
//@desc    Get Saved Jobs
export const getSavedJobs = async (req,res,next) => {
    try {
        let jobs = await User.findById(req.user._id).populate("savedJobs").select("savedJobs -_id")
        res.status(200).json([...jobs.savedJobs])
    } catch (error) {
        next(error)
    }
}

//@route   GET /jobs/details/:id
//@access  Private
//@desc    Get Job Details
export const getJobDetails = async (req,res,next)=>{
    try {
        let job = await Job.findById(req.params.id)
        res.status(200).json(job)
    } catch (error) {
        next(error)
    }
}

//@route   POST /jobs/apply
//@access  Private
//@desc    Apply for Job
export const applyForJob = async (req,res,next)=>{
    const {jobId,...data}=req.body
    try {
        const job = await Job.findById(jobId)
        if(!job){
            return next(createError(400,"Invalid Job Id"))
        }
        const isApplied =await Job.find({_id:req.body.jobId,'applicationStatus.userId':req.user._id})
        console.log(isApplied)
        if(isApplied[0]){
            return next(createError(400,"Already Applied for this Job"))
        }else{
            const details=data
            details.userId=req.user._id
            let update=await Job.findByIdAndUpdate(jobId,{
                $push:{
                    applicationStatus:details
                }
            })
            res.status(200).json({applied:true})
            
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//@route   GET /jobs/applied
//@access  Private
//@desc    Get Applied Jobs
export const getAppliedJobs = async(req,res,next)=>{
    try {
        const jobs = await Job.aggregate([
            {$unwind: '$applicationStatus'},
            {$match:{
                'applicationStatus.userId':req.user._id
            }},
            {$project:{
                company:1,designation:1,applicationStatus:1
            }}
        ])
        res.status(200).json(jobs)
    } catch (error) {
        next(error)
    }
}


//@route   POST /jobs/post
//@access  Private
//@desc    Post new job
export const postNewJob = async (req, res, next) => {
    try {
        //Create Job
        const job =req.body;
        job.userId = req.user._id;
        const newJob = new Job(job)
        await newJob.save()
        if (newJob) {
            res.status(200).json({ success: true })
        } else {
            return next(createError(400, "Invalid data"));
        }
    } catch (error) {
        next(error)
    }
}

//@route   GET /jobs/postedjobs
//@access  Private
//@desc    Get Posted Jobs
export const getPostedJobs = async (req, res, next) => {
    try {
        const jobs = await Job.find({ userId: req.user._id })
        res.status(200).json(jobs)
    } catch (error) {
        next(error)
    }
}

//@route   GET /jobs/applicants/:id
//@access  Private
//@desc    Get Applicant details for each job
export const getJobApplicants = async (req,res,next)=>{
    try {
        const applicants=await Job.findById(req.params.id).select('applicationStatus -_id')
        res.status(200).json([...applicants.applicationStatus])
    } catch (error) {
        next(error)
    }
}

//@route   POST /jobs/change_status/:id
//@access  Private
//@desc    Change status of applied Jobs
export const changeJobStatus = async (req,res,next)=>{
    try {
        const job = await Job.findById(req.params.id)
        if(!job){
            return next(createError(400,'Invalid Job Id'))
        }
        if(job.isOpen){
            await Job.findByIdAndUpdate(req.params.id,
                {$set:{isOpen:false}}
                )
            res.status(200).json({'open':false})
        }else{
            await Job.findByIdAndUpdate(req.params.id,
                {$set:{isOpen:true}}
                )
            res.status(200).json({'open':true})
        }
        res.status(200).json(job)
    } catch (error) {
        next(error)
    }
}

//@route   POST /jobs/applicant_status/:id
//@access  Private
//@desc    Change status of Applicants
export const changeApplicantStatus =async (req,res,next)=>{
    try {
        const job=await Job.findById(req.params.id)
        if(!job){
            return next(createError(400,'Invalid Job Id'))
        }
        
    } catch (error) {
        next(error)
    }
}

