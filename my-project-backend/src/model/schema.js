const mongoose=require("mongoose")
const { ProductSchema } = require("./ProductSchema")
require("dotenv").config()
const mongodb_url=process.env.MONGODB_KEY


const connect_mongoose=async ()=>{
    await mongoose.connect(mongodb_url)
}

connect_mongoose()

const UserSchema = new mongoose.Schema({
  username: {
    type:String,
    required:true

},
  email:{
    type:String,
    lowercase: true,
    required:true
}
  ,
  password:{
    type:String,
    required:true
  },
  avatar:String
  
});



const UsersModel = mongoose.model('Users', UserSchema);
const ProductsModel=mongoose.model("Products",ProductSchema)

module.exports={UsersModel, ProductsModel}