import express from "express"
import {config} from "dotenv"
import userrouter from "./routes/user.js"
import taskrouter from "./routes/task.js"
import cookieParser from "cookie-parser";
import { errormiddleware } from "./middlewares/error.js";

export const app = express();
config({
    path:"./data/config.env"
})

// middleware use
// router always below
app.use(express.json())
app.use(cookieParser())
// using routes
app.use("/api/v1",userrouter)
app.use("/api/v2",taskrouter)  

app.use(errormiddleware)