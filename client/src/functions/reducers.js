import { JOB_SEARCH_FAILURE, JOB_SEARCH_START, JOB_SEARCH_SUCCESS } from "./types"

export function searchJobsReducer(state,action){
    switch(action.type){
        case JOB_SEARCH_START:
            return {
                ...state,
                loading:true,
                error:false
            }
        case JOB_SEARCH_SUCCESS:
            return {
                ...state,
                loading:false,
                jobs:action.payload,
                error:false
            }
        case JOB_SEARCH_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}