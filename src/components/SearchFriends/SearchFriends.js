import React from 'react'
import { Button, TextField } from '@mui/material'
import './SearchFriends.css'

function SearchFriends() {
    return (
        <div className='bgcWhite addPost'>
            <form>
                <h3>Search for connections</h3>
                <TextField
                    size='small'
                    variant='outlined'
                    sx={{ borderRadius: '8px', mb: 2, mt: 1,width:'80%',mr:3 }}
                    placeholder='Start a Post' />
                <Button
                    className='search-btn'
                    size='small'
                    variant='contained'
                    sx={{ backgroundColor: 'rgba(53, 75, 152, 0.82)', px: 3,mt:1.5 }}>
                    Search
                </Button>
            </form>
        </div>
    )
}

export default SearchFriends