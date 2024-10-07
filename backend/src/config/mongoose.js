import mongoose from "mongoose";
const DB = process.env.DB || "mongodb://127.0.0.1/urban_trendz"

// connect to mongodb 
export const connectDb = async () => {
    try{
        await mongoose.connect(DB);
        console.log("Connected to DB");
    }
    catch(err){
        console.log('Something went wrong while connecting to MongoDb', err);
    }
}