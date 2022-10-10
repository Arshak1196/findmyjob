import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import UserSidebar from '../../components/UserSidebar/UserSidebar'

function Jobs() {
  return (
    <Grid container style={{ backgroundColor: 'rgba(0, 0, 0, 0.22)' }}>
      <NavBar />
      <Grid container >
        <Grid item md={3} sx={{width:'100%'}}>
          <UserSidebar page={'jobs'}/>
        </Grid>
        <Grid item md={7}>
          
        </Grid>
        <Grid item md={2}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Jobs