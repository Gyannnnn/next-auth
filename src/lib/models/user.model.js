import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },

},{timestamps:true});

export const User = mongoose.model.User ||  mongoose.model('User',userSchema);

export default User;