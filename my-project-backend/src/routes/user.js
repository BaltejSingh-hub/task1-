
const bcrypt = require('bcrypt');

const express=require("express")
const { UsersModel } = require("../model/schema")

const userRouter=express.Router()
const controller=require("../controller/userController")

//localhost:3001/welcome/signup
userRouter.post("/signup",controller.SignUp)


// localhost:3001/welcome/signup
userRouter.post("/signin",controller.SignIn)


module.exports={
    userRouter
}