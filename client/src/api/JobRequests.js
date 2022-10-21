import axios from "axios";

export const createJob =(formData)=>axios.post('/postjob',formData)
export const fetchPostedJobs =(id)=>axios.get(`/postedjobs/${id}`)
