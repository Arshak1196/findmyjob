import { Grid } from '@mui/material'
import React from 'react'
import LoginBanner from '../../components/LoginBanner/LoginBanner'
import RegisterRight from '../../components/RegisterRight/RegisterRight'
import './user.css'

function Register() {
  return (
    <Grid container className='loginCom'>
      <Grid item md={6} className='pmryBg'>
        <LoginBanner />
      </Grid>
      <Grid item md={6}>
        <RegisterRight />
      </Grid>
    </Grid >
  )
}

export default Register