const bcrypt = require('bcrypt');
require("dotenv").config()
const secretKey=process.env.SECRET_KEY_JWT
const express=require("express");
const { UsersModel } = require('../model/schema');
const { GenerateToke } = require('../utils/utiluser');

exports.SignUp =async (req,res)=>{
    
    const data=req.body
    const username=data.username
    const email=data.email
    const password=data.password

    console.log(data)

    const result=await UsersModel.findOne({email:email})

    if(result){
        res.json({msg:"User already exists"})
    }else{
        
        async function hashpassword(plainPassword){
        const saltRounds=5;
        const hashedPassword= await bcrypt.hash(plainPassword,saltRounds)
        return hashedPassword
        }

    
        const hashedPassword= await hashpassword(password).then(hashed=>{
            console.log(hashed)
            return hashed
        })

        
        await UsersModel.create({
        username:username,
        email:email,
        password:hashedPassword
        })

        res.json({msg:"New user is added"})
    }
}

exports.SignIn=async(req,res)=>{

        const data=req.body
        const email=data.email
        const password=data.password
        
        async function verifyPassword(enteredpassword,storedHash){
        const isMatch= await bcrypt.compare(enteredpassword,storedHash)
        return isMatch
        }

        

        // const verifyPassword=async  (enteredpassword,storedHash)=>{
        //     const isMatch= await bcrypt.compare(enteredpassword, storedHash)
        //     return isMatch
        // }

        const result=await UsersModel.findOne({email:email})
        if(result){
                const verifiedPassword= await verifyPassword(password,result.password).then(hashed=>{
                console.log(hashed)
                return hashed
                })
                if(verifiedPassword){
                    const token=await GenerateToke({userId:result._id},secretKey)
                    
                    res.json({msg:"Welcome, you are logged in",
                            token:token
                    })
                }else{
                    res.json({msg:"Incorrect password, try again"})
                }
        }else{
            res.json({msg:"email is not registered"})
        }

        // res.json({msg:"New user is here"})

}