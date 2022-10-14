import Job from "../models/Job.js"


//@route   POST /register
//@access  Private
//@desc    Post new job
export const postNewJob = async (req, res, next) => {

    try {
        //Create Job
        const newJob = new Job(req.body)
        await newJob.save()
        if(newJob){
            res.status(200).json({success:true})
        }else{
            return next(createError(400, "Invalid data"));
        }
    } catch (error) {
        next(error)
    }
}