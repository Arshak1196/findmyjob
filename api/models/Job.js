import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    userId:{
        type:mongoose.ObjectId,
        required:true
    },
    company: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    jobFor: {
        type: String,
        required: true
    },
    expMin: {
        type: Number,
    },
    expMax: {
        type: Number,
    },
    description: {
        type: String,
        required: true
    },
    vacancy: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    salaryMin: {
        type: Number,
        required: true
    },
    salaryMax: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    applicationStatus:{
        type: Array,
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isOpen:{
        type:Boolean,
        default:false
    },
    reportMessages:[{
        message:{
            type:String
        }
    }],
    


}, { timestamps: true })

export default mongoose.model('Job', JobSchema);