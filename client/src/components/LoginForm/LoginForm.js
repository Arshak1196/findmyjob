import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Grid, TextField } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux'
import './LoginForm.css'
import {login} from '../../redux/auth/authActions'

function LoginForm() {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.auth.loading)
    console.log(loading)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        dispatch(login(data))
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-name"
                            label="Email"
                            fullWidth
                            className='loginInput'
                            {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, })}
                        />
                        {errors.email?.type === 'required' && <p className="required-mark">Name is required</p>}
                        {errors.email?.type === 'pattern' && <p className="required-mark">Invalid Format</p>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-name"
                            label="Password"
                            fullWidth
                            className='loginInput'
                            {...register("password", { required: true, minLength: 8 })}
                        />
                        {errors.password?.type === 'required' && <p className="required-mark">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="required-mark">Contain atleast 8 characters</p>}
                    </Grid>
                    <Grid item xs={12} textAlign='center' >
                    <Button variant="contained" type='submit' color="success"  >
                        LOGIN
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default LoginForm