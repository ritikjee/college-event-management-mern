import mongoose from 'mongoose';


const collegeSchema = new mongoose.Schema({

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
    admins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    photo: {
        type: String,
        required: false,
    },
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }
    ],
    clubs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Club'
        }
    ],
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
}
    , {
        timestamps: true
    }
);

export default mongoose.model('College', collegeSchema);

