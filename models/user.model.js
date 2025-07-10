import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Provide name"]
    },
    email: {
        type: String,
        required: [true,"Provide Email"],
        lowercase:true
    },
    message: {
        type: String,
        required: [true,"Provide Message"]
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("USER",userSchema);

export default userModel