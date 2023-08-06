import Express  from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import connect from "./Database/connect.js";
import route from "./Routes/Route.js";


const app=Express()

dotenv.config()
app.use(cors())
app.use(Express.json())



app.use("/",route)


connect().then(()=>{
    app.listen(5000,()=>{
        console.log("server is started")
    })
    console.log("data base is connected")
})
.catch(()=>{
    console.log("some error")
})