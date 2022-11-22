import { Grid } from '@mui/material'
import React from 'react'
import Banner from '../../images/loginbanner.png'
import './LoginBanner.css'

function LoginBanner() {
    return (
        <Grid container alignItems="center" justifyContent="center" minHeight="100vh" direction="column">
            <h1 className='logo'>FindmyJob</h1>
            <h6>We can help you find a way to your next step</h6>
            <img className='banner-img' src={Banner} alt='findmyjob'/>
        </Grid>
    )
}

export default LoginBanner