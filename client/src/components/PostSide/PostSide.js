import { Container } from '@mui/system'
import React from 'react'
import AddPost from '../AddPost/AddPost'
import Posts from '../Posts/Posts'

function PostSide() {
    return (
        <Container sx={{ pt: '2.5rem' }}>
            <AddPost/>
            <hr />
            <Posts/>
        </Container>
    )
}

export default PostSide