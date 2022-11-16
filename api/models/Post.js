import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    image:{
        type:String,
    },
    title:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    comments:[{
        commentBy:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        comment:{
            type:String,
        },
        commentAt:{
            type:Date,
            default: new Date()
        }
    }]

},{timestamps:true})

export default mongoose.model('Post',PostSchema)