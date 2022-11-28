import { CREATE_NEW_POST_FAILURE, CREATE_NEW_POST_START, CREATE_NEW_POST_SUCCESS, FETCH_LATEST_POSTS_FAILURE, FETCH_LATEST_POSTS_START, FETCH_LATEST_POSTS_SUCCESS, LIKE_POST, UNLIKE_POST } from "./types"

export function createPostReducer(state, action) {
    switch (action.type) {
        case CREATE_NEW_POST_START:
            return {
                ...state,
                loading: true,
                error: false,
                success: false
            }
        case CREATE_NEW_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true
            }
        case CREATE_NEW_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false
            }

        default:
            return state
    }
}

export function fetchPostReducer(state, action) {
    switch (action.type) {
        case FETCH_LATEST_POSTS_START:
            return {
                ...state,
                loading: true,
                error: false,
                posts: []
            }
        case FETCH_LATEST_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                posts: action.payload
            }
        case FETCH_LATEST_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LIKE_POST:
            state.posts=state.posts.map((post)=>{
                if(post._id===action.payload.postId){
                    post.likes.push(action.payload.userId)
                }
                return post
            })
            return {
                ...state,
            }
        case UNLIKE_POST:
            state.posts=state.posts.map((post)=>{
                if(post._id===action.payload.postId){
                    post.likes=post.likes.filter((like)=>like!==action.payload.userId)
                }
                return post
            })
            return {
                ...state
            }
        default:
            return state
    }
}