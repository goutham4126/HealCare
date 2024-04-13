import mongoose from "mongoose";

let isConnected=false;

export const connectToDB=async()=>
{
    mongoose.set('strictQuery',true)
    if(isConnected)
    {
        console.log("Database is already connected")
        return;
    }
    try{
        await mongoose.connect(process.env.DB_URL,{
            dbName:"Auth"
        })
        isConnected=true;
        console.log("Database is Connected")

    }
    catch(err)
    {
        console.log("Error in connecting to Database");
    }
    
}