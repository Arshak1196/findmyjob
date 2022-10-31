import { useEffect, useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Button, CircularProgress, Dialog, Grid } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { toast } from 'react-toastify'
import * as JobsAPI from '../../api/JobRequests'
import { fetchJobDetails } from '../../functions/reducers';
import { fetchSavedJobs } from '../../redux/savedJobs/savedJobsActions';
import { FETCH_JOB_DETAIL_FAILURE, FETCH_JOB_DETAIL_START, FETCH_JOB_DETAIL_SUCCESS } from "../../functions/types";
import JobApplyForm from "./JobApplyForm";
import './JobDetails.css'


function JobDetails() {
    const [open, setOpen] = useState(false)
    const reduxdispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { jobId } = useParams()
    const [{ loading, job, error }, dispatch] = useReducer(
        fetchJobDetails, {
        loading: false,
        job: null,
        error: false
    })

    useEffect(() => {
        getDetails()
    }, [])
 
    const isApplied = job?.applicationStatus.some(data=>data.userId===user._id)

    const getDetails = async () => {
        dispatch({ type: FETCH_JOB_DETAIL_START })
        try {
            const result = await JobsAPI.getJobDetails(user.token, jobId)
            dispatch({ type: FETCH_JOB_DETAIL_SUCCESS, payload: result.data })
        } catch (error) {
            dispatch({ type: FETCH_JOB_DETAIL_FAILURE, payload: error.response.data.message })
        }
    }

    const handleWishlist = async (id) => {
        try {
            let save = await JobsAPI.saveJobs(id, user.token)
            if (save.data.saved) {
                toast.success('Added to Saved Jobs')
            } else {
                toast.warn('Removed from Saved Jobs')
            }
            reduxdispatch(fetchSavedJobs(user.token))
        } catch (error) {

        }
    }

    const handleApplyFormOpen = () => {
        setOpen(true);
    }
    const handleApplyFormClose = () => {
        setOpen(false);
    }

    if (loading) {
        return (
            <div className='bgcWhite addPost preview '>
                <h2>Loading...</h2>
                <CircularProgress />
            </div>
        )
    } else if (error) {
        return (
            <div className='bgcWhite addPost preview '>
                <h2>Something Went Wrong</h2>
                <p>{error}</p>
            </div>
        )
    } else if (job) {
        const date = new Date(job.createdAt).toDateString()
        return (
            <div className='bgcWhite addPost details'>
                <Grid container direction='column'>
                    <Grid container direction='row'>
                        <Grid item md={3}>
                            <img src={job.image ? job.image : process.env.REACT_APP_JOB_LOGO}
                                className='companyLogo' alt={job.company}></img>
                        </Grid>
                        <Grid item md={7}>
                            <h4 className='designation'>{job.designation}</h4>
                            <p>{job.company}</p>
                            <p>{job.place},{job.state},{job.country}</p>

                        </Grid>
                        <Grid item md={2} textAlign='end'>
                            {user.savedJobs?.includes(job._id) ? <BookmarkIcon onClick={() => { handleWishlist(job._id) }} /> :
                                <BookmarkBorderIcon onClick={() => { handleWishlist(job._id) }} />}
                        </Grid>
                    </Grid>
                    <Grid sx={{ mx: 1 }}>
                        <hr />
                    </Grid>
                    <Grid sx={{ mt: 4 }}>
                        <h4>Job Details</h4>
                        <p className="content">Job Type : {job.jobType}</p>
                        <p className="content">Job For  : {job.jobFor}</p>
                        {(job.jobFor === 'Experienced') && <p className="content">Experience : {job.expMin} to {job.expMax} years</p>}
                        <p className="content">PayScale : ₹ {job.salaryMin} to {job.salaryMax} LPA</p>
                        <p className='content'>Posted on : {date}</p>
                        <br />
                        <h4>Full Job Description</h4>
                        <p className="content">{job.description}</p>
                        <br />
                    </Grid>
                    <Grid display='flex' justifyContent='space-between'>
                        <Button variant="outlined" color="error" size='small'>
                            Report
                        </Button>
                        <Button
                            disabled={isApplied}
                            size='small'
                            variant='contained'
                            sx={{ backgroundColor: 'rgba(53, 75, 152, 0.82)', px: 3 }}
                            onClick={handleApplyFormOpen}>
                            Apply
                        </Button>
                        <Dialog open={open} onClose={handleApplyFormClose}>
                                <JobApplyForm close={handleApplyFormClose} jobId={job._id}/>
                        </Dialog>
                    </Grid>
                </Grid>

            </div>
        )
    } else {
        return (
            <div className='bgcWhite addPost preview'>
                <h2>No Results found</h2>
            </div>
        )
    }

}

export default JobDetails