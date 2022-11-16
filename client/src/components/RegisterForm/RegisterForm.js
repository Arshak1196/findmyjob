import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {signup} from '../../redux/auth/authActions'
import './RegisterForm.css'
import { toast } from 'react-toastify'

function RegisterForm() {
    const dispatch = useDispatch()
    const err=useSelector(state=>state.auth.error)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        dispatch(signup(data))
        if(err){
            toast.error(err)  
          }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-name"
                            label="Ful Name"
                            className='loginInput'
                            fullWidth
                            {...register("name", { required: true, pattern: /^[A-Za-z]+$/, })}
                        />
                        {errors.name?.type === 'required' && <p className="required-mark">Name is required</p>}
                        {errors.name?.type === 'pattern' && <p className="required-mark">Invalid Format</p>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-name"
                            label="Email"
                            className='loginInput'
                            fullWidth
                            {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                        />
                        {errors.email?.type === 'required' && <p className="required-mark">Email is required</p>}
                        {errors.email?.type === 'pattern' && <p className="required-mark">Email is not Valid</p>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-name"
                            label="Mobile"
                            className='loginInput'
                            fullWidth
                            {...register("mobile", { required: true, pattern: /^[0-9]+$/, minLength: 10 })}
                        />
                        {errors.mobile?.type === 'required' && <p className="required-mark">Phone number is required</p>}
                        {errors.mobile?.type === 'pattern' && <p className="required-mark">Incorrect Format</p>}
                        {errors.mobile?.type === 'minLength' && <p className="required-mark">Contain atleast 10 digits</p>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-name"
                            label="Password"
                            className='loginInput'
                            fullWidth
                            {...register("password", { required: true, minLength: 8 })}
                        />
                        {errors.password?.type === 'required' && <p className="required-mark">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="required-mark">Contain atleast 8 characters</p>}
                    </Grid>
                    <Grid item xs={12} textAlign='center' >
                        <Button variant="contained" type='submit' color='success' >
                            REGISTER
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default RegisterForm