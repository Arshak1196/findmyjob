import React from 'react'
import { Grid } from '@mui/material'
import NavBar from '../../components/NavBar/NavBar'
import UserSidebar from '../../components/UserSidebar/UserSidebar'

function Home() {
  return (
    <Grid container style={{ backgroundColor: '#f3f3f3' }}>
      <NavBar />
      <Grid container >
        <Grid item md={3}>
          <UserSidebar />
        </Grid>
        <Grid item md={7}>home</Grid>
        <Grid item md={2}>footer</Grid>
      </Grid>
    </Grid>
  )
}

export default Home