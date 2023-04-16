import mongoose from "mongoose";

 export const mongdbconnection =()=>
 {
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"nodeApi"
    }).then(()=>
    {
        console.log("Database is connected")
    }).catch((errr)=>
    {
        console.log(errr)
    })
 }
