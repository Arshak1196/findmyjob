import { POST_JOB_FAILURE, POST_JOB_START, POST_JOB_SUCCESS } from "./postJobTypes"


const INITIAL_STATE = {
    loading: false,
    error: null
}

const jobPostReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_JOB_START:
            return {
                ...state,
                loading: true,
            }
        case POST_JOB_SUCCESS:
            return {
                ...state,
                loading:false,
                error:null,
            }
        case POST_JOB_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
            default:
                return state;
    }
}

export default jobPostReducer