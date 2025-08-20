
const bcrypt = require('bcrypt');

const express=require("express")
const { UsersModel } = require("../model/schema")

const userRouter=express.Router()
const controller=require("../controller/userController")
const {Products, Product_details} = require('../controller/productController');
const UserMiddleware = require('../middleware/middleware');
const { EditProfile, EditProfilePic } = require('../controller/UserProfilePic');
const { UserDetails } = require('../controller/userDetails');
const { Edit_Username_Email } = require('../controller/Edit_Username_Email');


//localhost:3001/welcome/signup
userRouter.post("/signup",controller.SignUp)


// localhost:3001/welcome/signup
userRouter.post("/signin",controller.SignIn)

// localhost:3001/welcome/products
// userRouter.get("/products" ,Products)

userRouter.get("/products",UserMiddleware ,Products)

// localhost:3001/welcome/productdetails
userRouter.get("/productdetails",UserMiddleware,Product_details)

// userRouter.delete("/deleteProfile",)

// localhost:3001/welcome/productdetails
userRouter.get("/productdetails",Products)

// localhost:3001/welcome/deleteProfile
userRouter.delete("/deleteProfile",UserMiddleware,controller.DeleteProfile)

// localhost:3001/welcome/user_details
userRouter.get("/user_details",UserMiddleware,UserDetails)

// localhost:3001/welcome/editProfilePic
userRouter.post("/editProfilePic",UserMiddleware,EditProfilePic)

// localhost:3001/welcome/edit_username_email
userRouter.post("/edit_username_email",UserMiddleware,Edit_Username_Email)

module.exports={
    userRouter
}