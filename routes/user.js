import express from "express"
import {  enjoy, 
     getmydetails,
     login, 
     register, 
     userLogout}
      from "../controllers/user.js";
import { isAuthticated } from "../middlewares/auth.js";
const router = express.Router();

router.get("/users/enjoy",enjoy)

router.post("/users/new",register)
router.post("/users/login",login)
router.get("/users/logout",userLogout)

router.get("/me",isAuthticated,getmydetails)
export default router