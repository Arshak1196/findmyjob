import axios from "axios";

export const uploadImages = (formData, token) => axios.post('/upload/uploadimage', formData, {
    headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
    }
})