import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SAVE_JOB, UNSAVE_JOB } from './authTypes'

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("profile",JSON.stringify({...action?.payload}))
            return {
                ...state,
                loading: false,
                user: action.payload,
                error:null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case SAVE_JOB:
            state.user.savedJobs.push(action.payload)
            return {
                ...state
            }
        case UNSAVE_JOB:
            state.user.savedJobs=state.user.savedJobs.filter((val)=>val!==action.payload)
            return {
                ...state
            }
        case LOGOUT:
            localStorage.clear()
            return {
                user: null,
                loading: false
            }
        default:
            return state;

    }
}

export default authReducer