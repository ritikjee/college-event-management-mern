import mongoose from 'mongoose';

// Path: server/config/db.js

// dotenv.config();

export default async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB");
        console.log(mongoose.connection.readyState);
    }
    catch(err){
        console.log(err.messge);
    }
}