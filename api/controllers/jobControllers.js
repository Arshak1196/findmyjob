import Job from "../models/Job.js"
import User from "../models/User.js"


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
        })
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