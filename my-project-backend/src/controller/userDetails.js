const { UsersModel } = require("../model/schema")

// localhost:3001/welcome/user_details 
// get
const UserDetails=async(req,res)=>{
    try{
        const data= await UsersModel.findById(req.user.userId,"-password")
        res.send(data)
    }catch(err){
        console.log(err)
    }
}

module.exports={
    UserDetails
}