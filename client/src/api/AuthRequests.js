import axios from 'axios'

export const login =(formData)=>axios.post('/login',formData)
export const register =(formData)=>axios.post('/register',formData)