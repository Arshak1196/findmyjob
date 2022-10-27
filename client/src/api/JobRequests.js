import axios from "axios";

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

export const searchJobs = (key, token) => axios.post('/jobs/search', key, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const saveJobs = (id, token) => axios.post('/jobs/save', {jobId:id}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const getSavedJobs = (token) => axios.get('/jobs/save',{
    headers: {
        Authorization: `Bearer ${token}`
    }
})