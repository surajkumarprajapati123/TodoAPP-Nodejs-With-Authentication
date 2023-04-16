import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        select:false,
    },

    createAt:{
        type:Date,
        default:Date.now(),
      }

})
const User = mongoose.model("user",userSchema)
export default User