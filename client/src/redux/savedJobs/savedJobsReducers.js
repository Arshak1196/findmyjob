import { FETCH_SAVED_JOBS_FAILURE, FETCH_SAVED_JOBS_START, FETCH_SAVED_JOBS_SUCCESS } from "./savedJobsTypes"


const INITIAL_STATE = {
    loading: false,
    savedJobs: null,
    error: null
}

const savedJobsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SAVED_JOBS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SAVED_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                savedJobs: action.payload,
                error: null
            }
        case FETCH_SAVED_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                savedJobs: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default savedJobsReducer