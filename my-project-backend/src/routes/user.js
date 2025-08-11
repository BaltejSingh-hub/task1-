
const bcrypt = require('bcrypt');

const express=require("express")
const { UsersModel } = require("../model/schema")

const userRouter=express.Router()
const controller=require("../controller/userController")
const {Products, Product_details} = require('../controller/productController');
const UserMiddleware = require('../middleware/middleware');



//localhost:3001/welcome/signup
userRouter.post("/signup",controller.SignUp)


// localhost:3001/welcome/signup
userRouter.post("/signin",controller.SignIn)

// localhost:3001/welcome/products
// userRouter.get("/products" ,Products)

userRouter.get("/products",UserMiddleware ,Products)

// localhost:3001/welcome/productdetails
userRouter.get("/productdetails",Product_details)

// localhost:3001/welcome/productdetails
// userRouter.get("/productdetails",Products.ProductDetails)

module.exports={
    userRouter
}