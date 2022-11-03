import axios from "axios";


export const searchJobs = (key, token) => axios.post('/jobs/search', key, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const saveJobs = (id, token) => axios.post('/jobs/save', { jobId: id }, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const getSavedJobs = (token) => axios.get('/jobs/save', {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const getJobDetails = (token, jobId) => axios.get(`/jobs/details/${jobId}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const postApplyJob = ( details,token) => axios.post('/jobs/apply', details, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const getAppliedJobs=(token)=>axios.get('/jobs/applied',{
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const createJob = (formData, token) => axios.post('/jobs/post', formData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const fetchPostedJobs = (token) => axios.get('/jobs/postedjobs', {
    headers: {
        Authorization: `Bearer ${token}`
    }
})