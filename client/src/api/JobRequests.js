import axios from "axios";

export const createJob =(formData)=>axios.post('/postjob',formData)
export const fetchPostedJobs =(token)=>axios.get('/postedjobs',{headers:{
    Authorization: `Bearer ${token}`
}})
