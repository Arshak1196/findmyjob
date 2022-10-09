import React from 'react'
import { Button, Grid } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import './MyFriends.css'
import sample from '../../images/sample.png';

function MyFriends() {
    return (
        <Grid className='bgcWhite postContainer'>
            <h4>My Friends</h4>
            <Grid>
                <Grid className='friend-container' container direction='row' display='flex' justifyContent='space-between'>
                    <Grid sx={{ mr: 2 }}>
                        <img className='user-photo' src={sample} alt='sample' />
                    </Grid>
                    <Grid sx={{ pt: 2, mr: 25 }}>
                        <h5>Mohammed Arshak</h5>
                        <p>Intern at Brotottype</p>
                    </Grid>
                    <Grid sx={{pt:2}}>
                        <Button
                        variant='contained'
                        sx={{mr:2}}
                        startIcon={<MessageIcon />}>
                            Message
                        </Button>
                        <Button
                         startIcon={<PersonRemoveIcon/>}
                         variant='contained'
                         color='error'
                         >
                            Unfriend
                        </Button>
                    </Grid>
                </Grid>
                <Grid className='friend-container' container direction='row' display='flex' justifyContent='space-between'>
                    <Grid sx={{ mr: 2 }}>
                        <img className='user-photo' src={sample} alt='sample' />
                    </Grid>
                    <Grid sx={{ pt: 2, mr: 25 }}>
                        <h5>Mohammed Arshak</h5>
                        <p>Intern at Brotottype</p>
                    </Grid>
                    <Grid sx={{pt:2}}>
                        <Button
                        variant='contained'
                        sx={{mr:2}}
                        startIcon={<MessageIcon />}>
                            Message
                        </Button>
                        <Button
                         startIcon={<PersonRemoveIcon/>}
                         variant='contained'
                         color='error'
                         >
                            Unfriend
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MyFriends