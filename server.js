import { app } from "./app.js";
import { mongdbconnection} from "./data/database.js";

mongdbconnection();
app.get("/",(req,res)=>
{
    res.send("akgba;gab;odf")
})

app.listen(process.env.PORT,()=>
{
    console.log(`server is runing port is ${process.env.PORT} and Mode is ${process.env.NODE_ENV}`)
})