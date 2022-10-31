import { uploadImages } from "../api/UploadFileRequest"


export const uploadImage= async(formData,token)=>{
    try {
        console.log(formData)
        const {data} = await uploadImages(formData,token)
        console.log(1212)
        console.log(data.url)
        return data
    } catch (error) {
        console.log(error)
        return error.response.data.message
    }
}