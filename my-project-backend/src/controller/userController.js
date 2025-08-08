const bcrypt = require('bcrypt');
const secretKey=process.env.SECRET_KEY_JWT
const express=require("express");
const { UsersModel } = require('../model/schema');
const { GenerateToke, ConvertEmailToLowercase } = require('../utils/utiluser');

exports.SignUp =async (req,res)=>{
    
    const data=req.body
    const username=data.username
    const email=data.email

    const actual_email=ConvertEmailToLowercase(email)

    const password=data.password



    console.log(data)

    const result=await UsersModel.findOne({email:actual_email})

    if(result){
        res.status(404).json({msg:"User already exists"})
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

        
        const User=await UsersModel.create({
        username:username,
        email:actual_email,
        password:hashedPassword
        })

        
        const token=await GenerateToke({userId:User._id},secretKey)
        res.status(200).json({msg:"New user is added",
            token:token
        })
    }
}

exports.SignIn=async(req,res)=>{

        const data=req.body
        const email=data.email
        const password=data.password
        
        const actual_email=ConvertEmailToLowercase(email)


        async function verifyPassword(enteredpassword,storedHash){
        const isMatch= await bcrypt.compare(enteredpassword,storedHash)
        return isMatch
        }

        

        // const verifyPassword=async  (enteredpassword,storedHash)=>{
        //     const isMatch= await bcrypt.compare(enteredpassword, storedHash)
        //     return isMatch
        // }

        const result=await UsersModel.findOne({email:actual_email})
        if(result){
                const verifiedPassword= await verifyPassword(password,result.password).then(hashed=>{
                console.log(hashed)
                return hashed
                })
                if(verifiedPassword){
                    const token=await GenerateToke({userId:result._id},secretKey)
                    
                    res.status(200).json({msg:"Welcome, you are logged in",
                            token:token
                    })
                }else{
                    res.status(404).json({msg:"Incorrect password, try again"})
                }
        }else{
            res.status(404).json({msg:"email is not registered"})
        }

        // res.json({msg:"New user is here"})

}