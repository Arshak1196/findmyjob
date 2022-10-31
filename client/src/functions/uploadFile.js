import { uploadImages, uploadPdfs } from "../api/UploadFileRequest"


export const uploadImage= async(formData,token)=>{
    try {
        console.log(formData)
        const {data} = await uploadImages(formData,token)
        console.log(data.url)
        return data
    } catch (error) {
        console.log(error)
        return error.response.data.message
    }
}

export const uploadPdf= async(formData,token)=>{
    try {
        console.log(formData)
        const {data} = await uploadPdfs(formData,token)
        console.log(data.url)
        return data
    } catch (error) {
        console.log(error)
        return error.response.data.message
    }
}