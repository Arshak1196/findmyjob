import * as JobsAPI from '../../api/JobRequests'
import { FETCH_APPLIED_JOBS_FAILURE, FETCH_APPLIED_JOBS_START, FETCH_APPLIED_JOBS_SUCCESS } from "./appliedJobsTypes"



const fetchJobsStart = () => {
    return {
        type: FETCH_APPLIED_JOBS_START
    }
}

const fetchJobsSuccess = jobs => {
    return {
        type: FETCH_APPLIED_JOBS_SUCCESS,
        payload: jobs
    }
}

const fetchJobsFailure = error => {
    return {
        type: FETCH_APPLIED_JOBS_FAILURE,
        payload: error
    }
}


export const fetchAppliedJobs = (token) =>async(dispatch)=>{
    dispatch(fetchJobsStart())
    try {
        const jobs= await JobsAPI.getAppliedJobs(token)
        dispatch(fetchJobsSuccess(jobs.data))
    } catch (error) {
        console.log(error)
        dispatch(fetchJobsFailure(error.response.data.message))
    }
}