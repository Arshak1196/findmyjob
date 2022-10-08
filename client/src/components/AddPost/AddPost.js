import React from 'react'
import './AddPost.css'
import { Button, TextField } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function AddPost() {
    return (
        <div className='bgcWhite addPost'>
            <form>
                <TextField
                    variant='outlined'
                    multiline
                    maxRows={4}
                    sx={{ borderRadius: '8px', mb: 2 }}
                    fullWidth
                    placeholder='Start a Post' />
                <div className='postButton'>
                    <Button
                        startIcon={<AddPhotoAlternateIcon />}>
                        Image
                    </Button>
                    <Button
                        size='small'
                        variant='contained'
                        sx={{ backgroundColor: 'rgba(53, 75, 152, 0.82)',px:3 }}>
                        Post
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddPost