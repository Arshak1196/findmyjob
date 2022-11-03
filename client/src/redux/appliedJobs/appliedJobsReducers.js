import { FETCH_APPLIED_JOBS_FAILURE, FETCH_APPLIED_JOBS_START, FETCH_APPLIED_JOBS_SUCCESS } from "./appliedJobsTypes"


const INITIAL_STATE = {
    loading: false,
    appliedJobs: null,
    error: null
}

const appliedJobsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_APPLIED_JOBS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_APPLIED_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                appliedJobs: action.payload,
                error: null
            }
        case FETCH_APPLIED_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                appliedJobs: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default appliedJobsReducer