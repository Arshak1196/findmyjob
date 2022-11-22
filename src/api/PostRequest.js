import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://findmyjobapi.herokuapp.com/post/'
});


export const createNewPost = (formData, token) => instance.post('/post', formData, {
    headers: { Authorization: `Bearer ${token}` }
});

export const getLatestPosts = (token) => instance.get('/posts', {
    headers: { Authorization: `Bearer ${token}` }
});


