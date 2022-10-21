import Job from "../models/Job.js"


//@route   POST /serch
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
                }
            ]
        })
        res.json(jobs)
    } catch (error) {
        next(error)
    }
}

//@route   POST /register
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

export const getPostedJobs = async (req, res, next) => {
    try {
        const jobs = await Job.find({ userId: req.user._id })
        res.status(200).json(jobs)
    } catch (error) {
        next(error)
    }
}