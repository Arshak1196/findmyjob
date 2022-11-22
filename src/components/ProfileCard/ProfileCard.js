import React from 'react'
import Box from '@mui/material/Box'
import avatar from '../../images/sample.png';
import './ProfileCard.css'
import { Button } from '@mui/material';


function ProfileCard() {
  return (
        <Box component='' sx={{border:2,borderColor:'grey',borderRadius:'8px',}} className='profileCard'>
            <img className='avatar-img' src={avatar} alt='avatar'/>
            <p>Name</p>
            <p>Working as devloper</p>
            <Button>My Profile</Button>
            <hr/>
            <p>13 Friends</p>
        </Box>
  )
}

export default ProfileCard