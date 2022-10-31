import { useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { Button, CircularProgress, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material'
import { toast } from 'react-toastify'
import * as JobsAPI from '../../api/JobRequests'
import { applyJobReducer } from '../../functions/reducers';
import { APPLY_JOB_FAILURE, APPLY_JOB_START, APPLY_JOB_SUCCESS } from '../../functions/types'
import { uploadPdf } from '../../functions/uploadFile';


function JobApplyForm(props) {
    const [file, setFile] = useState(null)
    const [load, setLoad] = useState(false)
    const { user } = useSelector((state) => state.auth)

    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: {
            jobId: props.jobId
        }
    });

    let [{ loading, error,success }, dispatch] = useReducer(
        applyJobReducer, {
        loading: false,
        error: false,
        success: false,
    })

    const onSubmit = async (data) => {
        if (!file) {
            toast.error('Resume is required')
            return
        } else {
            const path = "resume"
            let formData = new FormData();
            formData.append("path", path)
            formData.append("file", file)
            const res = await uploadPdf(formData, user.token)
            data.resume = res.url
        }
        dispatch({ type: APPLY_JOB_START })
        try {
            await JobsAPI.postApplyJob(data, user.token)
            dispatch({ type: APPLY_JOB_SUCCESS })
        } catch (error) {
            dispatch({ type: APPLY_JOB_FAILURE, payload: error.response.data.message })
        }
    }

    const onFileChange = (event) => {
        let files = event.target.files[0];
        if (
            files.type !== "application/pdf"
        ) {
            console.log('error')
            toast.error(`${files.name} format is not supported`)
            return
        } else if (files.size > 1024 * 1024 * 5) {
            toast.error(`${files.name} size is too large (max 5 mb allowed)`)
            return
        }
        setFile(event.target.files[0])
    }



    if (load || loading) {
        return (
            <div className='bgcWhite addPost preview '>
                <h2>Loading...</h2>
                <CircularProgress />
            </div>
        )
    }else if (success) {
        return (
            <div className='bgcWhite addPost preview '>
                <h2>Job Applied succesfully</h2>

            </div>
        )
    }else if (error) {
        return (
            <div className='bgcWhite addPost preview '>
                <h2>Something went wrong</h2>
                <p>{error}</p>

            </div>
        )
    } else {
        return (
            <>
                <DialogTitle sx={{ mb: 5 }}>Fill your Details</DialogTitle>
                <DialogContent>
                    <Grid container direction='row' spacing={4} >
                        <Grid item md={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="First Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                size="small"
                                {...register("fname", { required: true })}
                            />
                            {errors.fname?.type === 'required' && <p className="required-mark">This Field is required</p>}
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                margin="dense"
                                label="Last Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                size="small"
                                {...register("lname", { required: true })}
                            />
                            {errors.lname?.type === 'required' && <p className="required-mark">This Field is required</p>}
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                margin="dense"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="outlined"
                                size="small"
                                {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                            />
                            {errors.email?.type === 'required' && <p className="required-mark">Email is required</p>}
                            {errors.email?.type === 'pattern' && <p className="required-mark">Email is not Valid</p>}
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                margin="dense"
                                label="Mobile"
                                type="number"
                                fullWidth
                                variant="outlined"
                                size="small"
                                {...register("phone", { required: true, pattern: /^[0-9]+$/, minLength: 10 })}
                            />
                            {errors.phone?.type === 'required' && <p className="required-mark">Phone number is required</p>}
                            {errors.phone?.type === 'pattern' && <p className="required-mark">Incorrect Format</p>}
                            {errors.phone?.type === 'minLength' && <p className="required-mark">Contain atleast 10 numbers</p>}
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                margin="dense"
                                label="Qualification"
                                type="text"
                                fullWidth
                                variant="outlined"
                                size="small"
                                {...register("qualification", { required: true })}
                            />
                            {errors.qualification?.type === 'required' && <p className="required-mark">This Field is required</p>}
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                margin="dense"
                                label="Experience(if have)"
                                type="number"
                                fullWidth
                                variant="outlined"
                                size="small"
                                {...register("experience", { pattern: /^[0-9]+$/ })}
                            />years
                            {errors.experience?.type === 'pattern' && <p className="required-mark">Incorrect Format</p>}
                        </Grid>
                        <Grid item md={6}>
                            Resume
                            <TextField
                                margin="dense"
                                type="file"
                                fullWidth
                                variant="outlined"
                                size="small"
                                onChange={onFileChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close}>Cancel</Button>
                    <Button onClick={handleSubmit(onSubmit)}>SUBMIT</Button>
                </DialogActions>
            </>
        )
    }
}

export default JobApplyForm