import axios from "axios";

const instance = axios.create({
    baseURL: 'https://findmyjobapi.herokuapp.com/upload/'
});

export const uploadImages = (formData, token) => instance.post('/upload/uploadimage', formData, {
    headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
    }
})

export const uploadPdfs = (formData, token) => instance.post('/upload/uploadpdf', formData, {
    headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
    }
})