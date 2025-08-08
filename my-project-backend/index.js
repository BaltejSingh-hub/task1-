require("dotenv").config()

const mongodb_url=process.env.MONGODB_KEY
const express=require("express")
const { userRouter } = require("./src/routes/user")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
   
app.get("/",(req,res)=>{
    res.send("This is the app")
})
  
app.use("/welcome",userRouter)


app.listen(3001, ()=>{
    console.log("Port is running")
})