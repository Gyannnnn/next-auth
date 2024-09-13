import mongoose from "mongoose";

let initialised  =false;

export const connect = async ()=>{
    mongoose.set('strictQuery',true);

    if(initialised){
        console.log("MongoDB Already Connected");
        return ;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MongoDB Connected Successfully");
        initialised = true

        
    } catch (error) {
        console.log(error)
        
    }
}