import { Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import './LoginRight.css'

function LoginRight() {
  const navigate=useNavigate()
  return (
    <Grid container alignItems="center" justifyContent="center" minHeight="100vh" direction="column">
      <h1>Login to continue</h1>
      <Grid className='loginForm' direction='column' >
        <Grid container justifyItems='center' alignItems='center' direction='column'>
          <LoginForm />
          <Typography
            variant='p'
            style={{ 'margin': '20px' }} >
            OR
          </Typography>
          <Link underline='hover' onClick={()=>{navigate('/register')}}>Don't have an account? Signup here</Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginRight