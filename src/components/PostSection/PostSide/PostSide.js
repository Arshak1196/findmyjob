import React, { useEffect, useReducer } from 'react'
import { Container } from '@mui/system'
import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'
import AddPost from '../AddPost/AddPost'
import Posts from '../Posts/Posts'
import * as PostsAPI from '../../../api/PostRequest'
import { fetchPostReducer } from '../../../functions/postReducers'
import {
  FETCH_LATEST_POSTS_FAILURE, FETCH_LATEST_POSTS_START, FETCH_LATEST_POSTS_SUCCESS,
  LIKE_POST, UNLIKE_POST
} from '../../../functions/types'

function PostSide() {
  const { user } = useSelector((state) => state.auth)

  const [{ loading, posts, error }, dispatch] = useReducer(
    fetchPostReducer, {
    loading: false,
    posts: null,
    error: false
  })

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    dispatch({ type: FETCH_LATEST_POSTS_START })
    try {
      const result = await PostsAPI.getLatestPosts(user.token)
      dispatch({ type: FETCH_LATEST_POSTS_SUCCESS, payload: result.data })
    } catch (error) {
      dispatch({ type: FETCH_LATEST_POSTS_FAILURE, payload: error.response.data.message })
    }
  }

  const handlePostLIke = async (postId) => {
    try {
      let result = await PostsAPI.handleLike(postId, user.token)
      console.log(result)
      if (result.data.liked) {
        dispatch({ type: LIKE_POST, payload: postId })
      } else {
        dispatch({ type: UNLIKE_POST, payload: postId })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container sx={{ pt: '2.5rem', overflowY: 'scroll', height: '90.3vh' }}>
      <AddPost />
      <hr />
      {loading ?
        <div className='bgcWhite addPost preview '>
          <h2>Loading...</h2>
          <CircularProgress />
        </div> :
        posts ?
          posts.map((post) => <Posts key={post._id} post={post} handlePostLIke={handlePostLIke} />) :
          <div className='bgcWhite addPost preview '>
            <h2>Something Went Wrong</h2>
            <p>{error}</p>
          </div>}
    </Container>
  )
}

export default PostSide