import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async(req,res,next)=>
{
     try {
      const {title,description} = req.body;
      const task = Task.create({
        title,
        description,
        user:req.user,
      });
      res.status(201).json({
        success:true,
        message:"Task is added Successfully"
      })
     } catch (error) {
      console.log(error)
     }
};

export const getmytask = async(req,res)=>
{
      try {
        const userid = req.user._id;
        const tasks = await Task.find({user:userid})
        res.status(200).json({
         success:true,
         tasks,
        })
        
      } catch (error) {
        console.log(error)
      }
};
export const updateTask = async(req,res,next)=>
{
       try {
        const { id } = req.params;
        const task = await Task.findById(id)
        if(!task)
         return next(new ErrorHandler("Invalid id",404))
        
        task.isCompleted = !task.isCompleted;
          await task.save();
           res.status(200).json({
             success:true,
             message:"Task is updated"
           })
        
       } catch (error) {
        console.log(error)
       }
};
export const deleteTask = async(req,res,next)=>
{
    try {
      const task = await Task.findById(req.params.id)
    if(!task)
    return next(new ErrorHandler("invalid id",404))
      

    task.deleteOne();
      res.status(200).json({
        success:true,
        message:"Task is deleted"
      })
    } catch (error) {
      console.log(error)
    }
};