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

export const searchJobs = (key, token) => axios.post('jobs/search', key, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})