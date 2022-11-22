import React from 'react'
import { Button, Grid } from '@mui/material'
import './Pending.css'

import sample from '../../images/sample.png'

function Pending() {
  return (
    <Grid className='bgcWhite postContainer'>
      <h4 >Pending Requests</h4>
      <Grid  container direction='row' mt='1rem' justifyContent="space-between" alignItems="baseline">
        <Grid item className='request-box'  sx={{mr:1,mt:1}}>
          <img className='user-photo' src={sample} alt='sample' />
          <h5>Ajith M</h5>
          <p className='user-detail'>Intern at Brototype</p>
          <Button size='small'>View Profile</Button>
          <div>
            <Button variant='contained' sx={{ mr: 1,width:'1.8rem',height:'1.8rem' }} >Accept</Button>
            <Button variant='contained' color='error' sx={{ width:'3rem',px:1,height:'1.8rem' }}>Decline</Button>
          </div>
        </Grid>
        <Grid item className='request-box'  sx={{mr:1,mt:1}}>
          <img className='user-photo' src={sample} alt='sample' />
          <h5>Ajith M</h5>
          <p className='user-detail'>Intern at Brototype</p>
          <Button size='small'>View Profile</Button>
          <div>
            <Button variant='contained' sx={{ mr: 1,width:'1.8rem',height:'1.8rem' }} >Accept</Button>
            <Button variant='contained' color='error' sx={{ width:'3rem',px:1,height:'1.8rem' }}>Decline</Button>
          </div>
        </Grid>
        <Grid item className='request-box' sx={{mr:1,mt:1}}>
          <img className='user-photo' src={sample} alt='sample' />
          <h5>Ajith M</h5>
          <p className='user-detail'>Intern at Brototype</p>
          <Button size='small'>View Profile</Button>
          <div>
            <Button variant='contained' sx={{ mr: 1,width:'1.8rem',height:'1.8rem' }} >Accept</Button>
            <Button variant='contained' color='error' sx={{ width:'3rem',px:1,height:'1.8rem' }}>Decline</Button>
          </div>
        </Grid>
        <Grid item className='request-box' sx={{mr:1,mt:1}}>
          <img className='user-photo' src={sample} alt='sample' />
          <h5>Ajith M</h5>
          <p className='user-detail'>Intern at Brototype</p>
          <Button size='small'>View Profile</Button>
          <div>
            <Button variant='contained' sx={{ mr: 1,width:'1.8rem',height:'1.8rem' }} >Accept</Button>
            <Button variant='contained' color='error' sx={{ width:'3rem',px:1,height:'1.8rem' }}>Decline</Button>
          </div>
        </Grid>
        <Grid item className='request-box'sx={{mr:1,mt:1}}>
          <img className='user-photo' src={sample} alt='sample' />
          <h5>Ajith M</h5>
          <p className='user-detail'>Intern at Brototype</p>
          <Button size='small'>View Profile</Button>
          <div>
            <Button variant='contained' sx={{ mr: 1,width:'1.8rem',height:'1.8rem' }} >Accept</Button>
            <Button variant='contained' color='error' sx={{ width:'3rem',px:1,height:'1.8rem' }}>Decline</Button>
          </div>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Pending