import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://findmyjobapi.herokuapp.com/'
});

export const login =(formData)=>instance.post('/login',formData)

export const register =(formData)=>instance.post('/register',formData)
