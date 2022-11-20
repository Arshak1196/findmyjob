import React, { useReducer, useState } from 'react'
import { Button, TextField } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useSelector } from 'react-redux';
import * as PostsAPI from '../../api/PostRequest'
import { createPostReducer } from '../../functions/postReducers';
import { CREATE_NEW_POST_FAILURE, CREATE_NEW_POST_START, CREATE_NEW_POST_SUCCESS } from '../../functions/types';
import './AddPost.css'

function AddPost() {
    const [title,setTitle] = useState('')
    const [url, setUrl] = useState(false)
    const [uploadingImg, setUploadingImg] = useState(false)
    
    const { user } = useSelector((state) => state.auth)

    let [{ loading, error,success }, dispatch] = useReducer(
        createPostReducer, {
        loading: false,
        error: false,
        success: false,
    })



    function handleOpenWidget() {
        console.log('trigered cloud');
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOADPRESET
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                setUrl(result.info.url)
                setUploadingImg(true)
            }}
        )
        // Open widget
        myWidget.open();
    }

    const handlePostUpload=async()=>{
        if(!title.length && !url){
            return
        }
        let formData = new FormData()
        if(url){
            formData.append('image',url)
        }
        if(title.length>0){
            formData.append('title',title)
        }
        dispatch({type:CREATE_NEW_POST_START})
        try {
            await PostsAPI.createNewPost(formData,user.token)
            dispatch({type:CREATE_NEW_POST_SUCCESS})
            setTitle('')
            setUrl(false)
            setUploadingImg(false) 
            console.log('post created')
        } catch (error) {
            dispatch({type:CREATE_NEW_POST_FAILURE,payload:error.response.data.message})
        }
    }

    return (
        <div className='bgcWhite addPost'>
            <form>
                <TextField
                    variant='outlined'
                    multiline
                    maxRows={4}
                    sx={{ borderRadius: '8px', mb: 2 }}
                    fullWidth
                    placeholder='Start a Post' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                {url &&
                    <div className="image_preview">
                        <img src={url} alt="img" />
                    </div>
                }
                <div className='postButton'>
                    <Button
                        id="upload-widget"
                        onClick={() => handleOpenWidget()} disabled={uploadingImg}
                        startIcon={<AddPhotoAlternateIcon />}>
                        Image
                    </Button>
                    <Button
                        size='small'
                        disabled={!url && !title.length}
                        variant='contained'
                        onClick={()=>handlePostUpload()}
                        sx={{ backgroundColor: 'rgba(53, 75, 152, 0.82)', px: 3 }}>
                        Post
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddPost