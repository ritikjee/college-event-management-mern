import moongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: 'Text is required'
    },
    postedBy: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'Event'
        
    }
}, {timestamps: true});


export default mongoose.model('Comment', commentSchema);