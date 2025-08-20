const { UsersModel } = require("../model/schema")

const Edit_Username_Email=async(req,res)=>{
    const email=req.body.email
    const username=req.body.username

    if(email && username){
        await UsersModel.findByIdAndUpdate(req.user._id,{
            email:email,
            username:username
        })
        res.status(200).json({msg:"Username and email uploaded"})
    }
    res.status(400).json()
}

module.exports={Edit_Username_Email}