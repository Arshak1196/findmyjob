import axios from "axios";

const instance = axios.create({
    baseURL: 'https://findmyjobapi.herokuapp.com/jobs/'
});

export const searchJobs = (key, token) => instance.post('/jobs/search', key, {
    headers: { Authorization: `Bearer ${token}` }
})

export const saveJobs = (id, token) => instance.post('/jobs/save', { jobId: id }, {
    headers: { Authorization: `Bearer ${token}` }
})

export const getSavedJobs = (token) => instance.get('/jobs/save', {
    headers: { Authorization: `Bearer ${token}` }
})

export const getJobDetails = (token, jobId) => instance.get(`/jobs/details/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` }
})

export const postApplyJob = (details, token) => instance.post('/jobs/apply', details, {
    headers: { Authorization: `Bearer ${token}` }
})

export const getAppliedJobs = (token) => instance.get('/jobs/applied', {
    headers: { Authorization: `Bearer ${token}` }
})

export const createJob = (formData, token) => instance.post('/jobs/post', formData, {
    headers: { Authorization: `Bearer ${token}` }
})

export const fetchPostedJobs = (token) => instance.get('/jobs/postedjobs', {
    headers: { Authorization: `Bearer ${token}` }
})

export const fetchJobApplicants = (jobId, token) => instance.get(`/jobs/applicants/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` }
})

export const changeJobStatus = (jobId, token) => instance.post(`/jobs/job_status/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` }
})