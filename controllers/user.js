import User from "../models/user.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

// login section ❤😊😊❤❤
export const login = async(req,res,next)=>
{
           try {
            const {email,password} = req.body;
            const user = await User.findOne({ email }).select("+password");
            if(!user)
                return next(new ErrorHandler("invalid email or passward",404))
                const ismatch = await bcrypt.compare(password,user.password)
            
                if(!ismatch)
                   return next(new ErrorHandler("invalid email or passward",404))
                sendCookie(user,res,`login successfully , ${user.name}`,200)
           } catch (error) {
            console.log(error)
           }
            
};

 // Register section ✔✔✔
export const register = async (req,res,next)=>{
    try {
        const {name,email,password}=req.body;
    let user =  await User.findOne({ email })
    if(user){
        return next(new ErrorHandler("User is Already exit",404))
    }
    const hashpassword = await bcrypt.hash(password,10)
     user = await User.create({
        name,
        email,
        password:hashpassword,
    })
    sendCookie(user,res,"Registered Successfuly",201)
    } catch (error) {
        console.log(error)
    }
};
// 😂😂
// getdetaile only user section
export const  getmydetails = async (req,res)=>
{ 
     res.status(200).json({
        success:true,
        user:req.user,
     })  
        
}
// logout section 😒😒😒
export const userLogout = (req,res)=>{
    res.status(200).cookie("token","",{
        expire:new Date(Date.now),
        sameSite:process.env.NODE_ENV === "Development" ? "lax":"none",
        secure:process.env.NODE_ENV === "Development" ? false:true,
    }).json({
        success:true,
        message:"You are logout"
    })
}
// enjoy section
export const enjoy = async(req,res)=>
{
    res.json({
        message:"My api is working"
    })

}







 