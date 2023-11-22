import mongoose from 'mongoose';

// Path: server/config/db.js

const eventSchema = new mongoose.Schema({
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
    registrationLink: {
        type: String,
        required: false,
    },
    clubs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Club'
        }
    ],
    collegesAllowed: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'College'
        }
    ],
    isAllcollege: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
   location: {
        type: String,
        required: false
    },
}, {timestamps: true});

export default mongoose.model('Event', eventSchema);