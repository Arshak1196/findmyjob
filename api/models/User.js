import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    mobile: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    savedJobs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Job'
    }],
    isAdmin: {
        type: Boolean,
        default: false
    },


}, { timestamps: true })

export default mongoose.model('User', UserSchema);