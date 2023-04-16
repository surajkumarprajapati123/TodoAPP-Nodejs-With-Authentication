import mongoose from "mongoose";

 export const mongdbconnection =()=>
 {
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"nodeApi"
    }).then((c)=>
    {
        console.log(`Database is connecetd on ${c.connection.host}`)
    }).catch((errr)=>
    {
        console.log(errr)
    })
 }
