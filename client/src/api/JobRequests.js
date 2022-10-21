import axios from "axios";

export const createJob =(formData,token)=>axios.post('/postjob',formData,{headers:{
    Authorization: `Bearer ${token}`
}})

export const fetchPostedJobs =(token)=>axios.get('/postedjobs',{headers:{
    Authorization: `Bearer ${token}`
}})
