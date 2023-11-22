import mongoose from 'mongoose';

// Path: server/config/db.js

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        required: 'Description is required',
        max: 2000
    },
    poster: {
        type: String,
        required: false,
    },
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    },
}, {timestamps: true});

export default mongoose.model('Club', clubSchema);