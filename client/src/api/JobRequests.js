import axios from "axios";

export const createJob =(formData)=>axios.post('/postjob',formData)