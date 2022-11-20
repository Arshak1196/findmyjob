import { Button, Grid } from '@mui/material'
import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import avatar from '../../images/sample.png'
import './Posts.css'

function Posts({post}) {
    // console.log(post.title)
    // if(post.title){
    //      post.title=post.title.replace(/\r\n/g,'<br>\n')
    //     console.log(post.title)
    // } 
    return (
        <div>
            <Grid className='bgcWhite postContainer'>
                <Grid container direction='row'>
                    <Grid className='imageGrid'>
                        <img className='postuserImage' src={avatar} alt='avatar' />
                    </Grid>
                    <Grid>
                        <p className='pmry-txt'>{post.userId.name}</p>
                        <p className='time-txt'>time</p>
                    </Grid>
                </Grid>
                <Grid>
                    <p className='post-caption'>{post.title}</p>
                    {post.image && <img className='post-image' src={post.image} alt='post' /> }
                    
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