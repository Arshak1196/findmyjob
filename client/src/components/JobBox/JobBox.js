import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Slide } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import * as JobsAPI from '../../api/JobRequests'
import { fetchSavedJobs } from '../../redux/savedJobs/savedJobsActions';

function JobBox({ job }) {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const handleWishlist = async (id) => {
        try {
            await JobsAPI.saveJobs(id, user.token)
            dispatch(fetchSavedJobs(user.token))
        } catch (error) {

        }
    }
    return (
        <Slide  direction="up" in mountOnEnter unmountOnExit>

            <div className='bgcWhite addPost preview'>
                <Grid container direction='row'>
                    <Grid item md={2}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1Tt9_33HyVMm_ZakYQy-UgsLjE00biEArg&usqp=CAU'
                            className='companyLogo' alt={job.company}></img>
                    </Grid>
                    <Grid item md={8}>
                        <h4 className='designation'>{job.designation}</h4>
                        <p>{job.company}</p>
                        <p>{job.place},{job.state},{job.country}</p>
                        <p>₹ {job.salaryMin} to {job.salaryMax} per month</p>
                        <p>{job.jobType}</p>
                    </Grid>
                    <Grid item md={2} className='buttonside'>
                        {user.savedJobs?.includes(job._id) ? <BookmarkIcon onClick={() => { handleWishlist(job._id) }} /> :
                            <BookmarkBorderIcon onClick={() => { handleWishlist(job._id) }} />}
                        <Button
                            className='search-btn'
                            size='small'
                            variant='contained'
                            sx={{ backgroundColor: 'rgba(53, 75, 152, 0.82)', px: 3, mt: 7 }}>
                            Details
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Slide>
    )
}

export default JobBox