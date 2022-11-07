import * as JobsAPI from '../../api/JobRequests'
import { CLOSE_APPLIED_JOB, FETCH_JOB_FAILURE, FETCH_JOB_START, FETCH_JOB_SUCCESS, OPEN_APPLIED_JOB } from './jobsTypes'

const fetchStart = () => {
    return {
        type: FETCH_JOB_START
    }
}

const fetchSuccess = jobs => {
    return {
        type: FETCH_JOB_SUCCESS,
        payload: jobs
    }
}

const fetchFailure = error => {
    return {
        type: FETCH_JOB_FAILURE,
        payload: error
    }
}

export const fetchJobs = (token) => async (dispatch) => {
    dispatch(fetchStart())
    try {
        const jobs = await JobsAPI.fetchPostedJobs(token)
        dispatch(fetchSuccess(jobs.data))
    } catch (error) {
        console.log(error)
        dispatch(fetchFailure(error.response.data.message))
    }
}

export const closeAppliedJob = id => {
    return {
        type: CLOSE_APPLIED_JOB,
        payload: id
    }
}

export const openAppliedJob = id => {
    return {
        type: OPEN_APPLIED_JOB,
        payload: id
    }
}