import  express from "express"
import { deleteTask, getmytask, newTask, updateTask } from "../controllers/task.js";
import { isAuthticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/newtask",isAuthticated,newTask)
router.get("/mytask",isAuthticated,getmytask)
router.route("/:id")
.put(isAuthticated,updateTask)
.delete(isAuthticated,deleteTask)

export default router;  