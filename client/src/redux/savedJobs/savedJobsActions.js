import * as JobsAPI from '../../api/JobRequests'
import { FETCH_SAVED_JOBS_FAILURE, FETCH_SAVED_JOBS_START, FETCH_SAVED_JOBS_SUCCESS } from "./savedJobsTypes"


const fetchJobsStart = ()=> {
    return {
        type: FETCH_SAVED_JOBS_START
    }
}

const fetchJobsSuccess = jobs =>{
    return {
        type:FETCH_SAVED_JOBS_SUCCESS,
        payload:jobs
    }
}

const fetchJobsFailure = error =>{
    return {
        type: FETCH_SAVED_JOBS_FAILURE,
        payload:error
    }
}

export const fetchSavedJobs = (token) => async (dispatch)=>{
    dispatch(fetchJobsStart())
    try {
        const jobs = await JobsAPI.getSavedJobs(token)
        dispatch(fetchJobsSuccess(jobs.data))
    } catch (error) {
        console.log(error)
        dispatch(fetchJobsFailure(error.response.data.message))
    }
}