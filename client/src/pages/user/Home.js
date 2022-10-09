import React from 'react'
import { Grid } from '@mui/material'
import NavBar from '../../components/NavBar/NavBar'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import PostSide from '../../components/PostSide/PostSide'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <Grid container style={{ backgroundColor: 'rgba(0, 0, 0, 0.22)' }}>
      <NavBar />
      <Grid container >
        <Grid item md={3} sx={{width:'100%'}}>
          <UserSidebar page={'home'}/>
        </Grid>
        <Grid item md={7}>
          <PostSide />
        </Grid>
        <Grid item md={2}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home