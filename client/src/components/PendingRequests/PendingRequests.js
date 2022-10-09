import React from 'react'
import { Button, Grid } from '@mui/material'
import './PendingRequests.css'
import image from '../../images/userAvatar.png'

function PendingRequests() {
  return (
    <Grid  className='pendingRequests'>
        <p className='heading'>Pending Requests</p>
        
            <Grid container direction='row' className='requestBox'>
                <Grid>
                    <img className='request-image' src={image} alt='img'/>
                </Grid>
                <Grid className='requestDetails'>
                    <p>Mohammed Arshak</p>
                    <Button variant='contained' size='small' sx={{mt:1}}>Accept</Button>
                    <Button variant='contained' size='small' color='error' sx={{ml:3,mt:1}}>Decline</Button>
                </Grid>
            </Grid>
        
    </Grid>
  )
}

export default PendingRequests