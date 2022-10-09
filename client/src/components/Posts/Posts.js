import { Button, Grid } from '@mui/material'
import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import avatar from '../../images/sample.png'
import postSamble from '../../images/postSample.jpg'
import './Posts.css'

function Posts() {
    return (
        <div>
            <Grid className='bgcWhite postContainer'>
                <Grid container direction='row'>
                    <Grid className='imageGrid'>
                        <img className='postuserImage' src={avatar} alt='avatar' />
                    </Grid>
                    <Grid>
                        <p className='pmry-txt'>UserName</p>
                        <p className='time-txt'>time</p>
                    </Grid>
                </Grid>
                <Grid>
                    <p className='post-caption'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered a
                        lteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum
                    </p>
                    <img className='post-image' src={postSamble} alt='post' />
                </Grid>
                <Grid>
                    <Button
                        className='post-button'
                        startIcon={<ThumbUpOffAltIcon />}
                    >
                        Like
                    </Button>
                    <Button 
                    className='post-button'
                    startIcon={<CommentIcon/>}
                    >
                        Comment
                    </Button>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Posts