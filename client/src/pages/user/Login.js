import React from 'react'
import { Grid } from '@mui/material'
import LoginBanner from '../../components/LoginBanner/LoginBanner'
import LoginRight from '../../components/LoginRight/LoginRight'
import './user.css'



function Login() {
  return (
    <Grid container className='loginCom'>
      <Grid item md={6} className='pmryBg'>
        <LoginBanner />
      </Grid>
      <Grid item md={6}>
        <LoginRight/>
      </Grid>
    </Grid >
  )
}

export default Login