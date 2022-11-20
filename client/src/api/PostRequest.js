import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8000/post/'
});

export const createNewPost = (formData, token) => instance.post('/post', formData, {
    headers: { Authorization: `Bearer ${token}` }
})

export const getLatestPosts = (token) => instance.get('/posts', {
    headers: { Authorization: `Bearer ${token}` }
})