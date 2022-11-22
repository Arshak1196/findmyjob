import { Container, Grid } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import MyFriends from '../../components/MyFriends/MyFriends'
import NavBar from '../../components/NavBar/NavBar'
import Pending from '../../components/Pending/Pending'
import SearchFriends from '../../components/SearchFriends/SearchFriends'
import UserSidebar from '../../components/UserSidebar/UserSidebar'

function Connection({page}) {
    return (
        <Grid container style={{ backgroundColor: 'rgba(0, 0, 0, 0.22)' }}>
            <NavBar />
            <Grid container >
                <Grid item md={3} sx={{ width: '100%' }}>
                    <UserSidebar page={'connection'} />
                </Grid>
                <Grid item md={7}>
                    <Container sx={{ pt: '2.5rem', overflowY: 'scroll', height: '90.3vh' }}>
                        <SearchFriends />
                        {(page==='friends')?<MyFriends />:<Pending/>}
                    </Container>
                </Grid>
                <Grid item md={2}>
                    <Footer />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Connection