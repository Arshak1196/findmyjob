import React from 'react'
import { Grid } from '@mui/material'
import NavBar from '../../components/NavBar/NavBar'

function Home() {
  return (
    <Grid container direction='row'> 
      <Grid  container> 
        <NavBar />
      </Grid>
      <Grid container direction='coloumn'>
        <Grid md={3} style={{'minHeight':'120vh'}}>profile</Grid>
        <Grid md={7}>home</Grid>
        <Grid md={2}>footer</Grid>
      </Grid>
    </Grid>
  )
}

export default Home