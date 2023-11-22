import mongoose from 'mongoose';

// Path: server/models/user.model.js
// Compare this snippet from server/server.js:

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        required: 'Email is required',
        unique: true
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    jwt: {
        type: String,
        required: false
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    about: {
        type: String,
        trim: true
    },
    college: {
        type: ObjectId,
        ref: 'College'
    },
    role: {
        type: Number,
        default: 0
    },
    followers: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ]
}, {timestamps: true});

export default mongoose.model('User', userSchema);