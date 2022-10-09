import { Container } from '@mui/system'
import React from 'react'
import AddPost from '../AddPost/AddPost'
import Posts from '../Posts/Posts'

function PostSide() {
    return (
        <Container sx={{ pt: '2.5rem',overflowY:'scroll',height:'90.3vh'}}>
            <AddPost/>
            <hr />
            <Posts/>
            <Posts/>
        </Container>
    )
}

export default PostSide