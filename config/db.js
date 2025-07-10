import mongoose from "mongoose";

if(!process.env.MONGODB_URI){
    throw new Error("Provide MongoDB connection String in .env")
    
}
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connection Successful!");
        
    } catch (error) {
        console.error("Something went wrong! "+ error)
    }
}

export default connectDb