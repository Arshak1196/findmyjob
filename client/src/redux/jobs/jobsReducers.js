import { FETCH_JOB_FAILURE, FETCH_JOB_START, FETCH_JOB_SUCCESS } from './jobsTypes'

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
                loading: false,
                error: action.payload
            }
        default :
        return state;
    }
}

export default jobsReducer