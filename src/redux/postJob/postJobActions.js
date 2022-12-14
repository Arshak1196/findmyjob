import * as JobAPI from '../../api/JobRequests'
import { POST_JOB_FAILURE, POST_JOB_START, POST_JOB_SUCCESS } from "./postJobTypes"


const postJobStart = () =>{
    return{
        type:POST_JOB_START
    }
}

const postJobSuccess = () => {
    return{
        type:POST_JOB_SUCCESS
    }
}

const postJobFailure = error => {
    return{
        type:POST_JOB_FAILURE,
        payload:error
    }
}

export const postNewJob =(formData,token) => async (dispatch) => {
    dispatch(postJobStart())
    try {
        await JobAPI.createJob(formData,token)
        dispatch(postJobSuccess())
    } catch (error) {
        console.log(error)
        dispatch(postJobFailure(error.response.data.message))
    }
}