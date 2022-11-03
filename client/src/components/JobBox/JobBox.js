import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Slide } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {toast} from 'react-toastify'
import * as JobsAPI from '../../api/JobRequests'
import { fetchSavedJobs } from '../../redux/savedJobs/savedJobsActions';
import { useNavigate } from 'react-router-dom';

function JobBox({ job }) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const handleWishlist = async (id) => {
        try {
            let save=await JobsAPI.saveJobs(id, user.token)
            if(save.data.saved){
                toast.success('Added to Saved Jobs')
            }else{
                toast.warn('Removed from Saved Jobs')
            }
            dispatch(fetchSavedJobs(user.token))
        } catch (error) {

        }
    }
    return (
        <Slide  direction="up" in mountOnEnter unmountOnExit>

            <div className='bgcWhite addPost preview'>
                <Grid container direction='row'>
                    <Grid item md={2}>
                        <img src={job.image?job.image:process.env.REACT_APP_JOB_LOGO}
                            className='companyLogo' alt={job.company}></img>
                    </Grid>
                    <Grid item md={8}>
                        <h4 className='designation'>{job.designation}</h4>
                        <p>{job.company}</p>
                        <p>{job.place},{job.state},{job.country}</p>
                        <p>₹ {job.salaryMin} to {job.salaryMax} LPA</p>
                        <p>{job.jobType}</p>
                    </Grid>
                    <Grid item md={2} className='buttonside'>
                        {user.savedJobs?.includes(job._id) ? <BookmarkIcon onClick={() => { handleWishlist(job._id) }} /> :
                            <BookmarkBorderIcon onClick={() => { handleWishlist(job._id) }} />}
                        <Button
                            className='search-btn'
                            size='small'
                            variant='contained'
                            sx={{ backgroundColor: 'rgba(53, 75, 152, 0.82)', px: 3, mt: 7 }}
                            onClick={()=>{navigate(`/jobs/details/${job._id}`)}}>
                            Details 
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Slide>
    )
}

export default JobBox