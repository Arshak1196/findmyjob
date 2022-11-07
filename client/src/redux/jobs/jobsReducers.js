import { CLOSE_APPLIED_JOB, FETCH_JOB_FAILURE, FETCH_JOB_START, FETCH_JOB_SUCCESS, OPEN_APPLIED_JOB } from './jobsTypes'

const INITIAL_STATE = {
    jobs: null,
    loading: false,
    error: null
}

const jobsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_JOB_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: action.payload,
                error: null
            }
        case FETCH_JOB_FAILURE:
            return {
                ...state,
                jobs: [],
                loading: false,
                error: action.payload
            }
        case CLOSE_APPLIED_JOB:
            state.jobs.map((job) => {
                if (job._id === action.payload) {
                    job.isOpen = false
                }
            })
            return {
                ...state,
            }
        case OPEN_APPLIED_JOB:
            state.jobs.map((job) => {
                if (job._id === action.payload) {
                    job.isOpen = true
                }
            })
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default jobsReducer