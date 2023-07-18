import mongoose from "mongoose";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";

let isConnected = false; //track the connection status

export const connectToDB = async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('mongoDB already coneected')
    }else{

        try{
await mongoose.connect(process.env.MONGODB_URI,{
    dbName:'share_propmpts',
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

isConnected = True;

console.log('MongoDB connected!')
        }catch(error){
            console.log(error)
        }
    }
}
