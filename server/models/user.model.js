import mongoose from 'mongoose';

// Path: server/models/user.model.js
// Compare this snippet from server/server.js:

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    userName: {
        type: String,
        trim: true,
        required: 'User Name is required',
        unique: true
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    },
    role: {
        type: Number,
        default: 0
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {timestamps: true});

export default mongoose.model('User', userSchema);