import { Grid, Link, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'

function RegisterRight() {
  const navigate = useNavigate()
  return (
    <Grid container alignItems="center" justifyContent="center" minHeight="100vh" direction="column">
      <h1>Register</h1>
      <Grid className='loginForm' direction='column' >
        <Grid container justifyItems='center' alignItems='center' direction='column'>
          <RegisterForm />
          <Typography
            variant='p'
            style={{ 'margin': '20px' }} >
            OR
          </Typography>
          <Link underline='hover' onClick={()=>{navigate('/login')}}>Already have an account? Login here.</Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RegisterRight