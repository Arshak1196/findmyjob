import { Grid } from '@mui/material'
import React from 'react'
import avatar from '../../images/sample.png'
import postSamble from '../../images/postSample.jpg'
import './Posts.css'

function Posts() {
    return (
        <div>

            <Grid className='bgcWhite postContainer'>
                <Grid container direction='row'>
                    <Grid className='imageGrid'>
                    <img className='postuserImage' src={avatar} alt='avatar'/>
                    </Grid>
                    <Grid>
                        <p className='pmry-txt'>UserName</p>
                        <p className='time-txt'>time</p>
                    </Grid>
                </Grid>
                <Grid>
                    <img src={postSamble} alt='post'/>
                </Grid>
                <Grid>
                    Like and comment
                </Grid>
            </Grid>
        </div>
    )
}

export default Posts