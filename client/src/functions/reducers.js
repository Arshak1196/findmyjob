import {
    APPLY_JOB_FAILURE,
    APPLY_JOB_START,
    APPLY_JOB_SUCCESS,
    FETCH_JOB_DETAIL_FAILURE, FETCH_JOB_DETAIL_START, FETCH_JOB_DETAIL_SUCCESS,
    JOB_SEARCH_FAILURE, JOB_SEARCH_START, JOB_SEARCH_SUCCESS
} from "./types"

export function searchJobsReducer(state, action) {
    switch (action.type) {
        case JOB_SEARCH_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case JOB_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: action.payload,
                error: false
            }
        case JOB_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export function fetchJobDetails(state, action) {
    switch (action.type) {
        case FETCH_JOB_DETAIL_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_JOB_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                job: action.payload,
                error: false
            }
        case FETCH_JOB_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export function applyJobReducer(state, action) {
    switch (action.type) {
        case APPLY_JOB_START:
            return {
                ...state,
                loading: true,
                error: false,
                success:false
            }
        case APPLY_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true
            }
        case APPLY_JOB_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success:false
            }
        default:
            return state
    }
}