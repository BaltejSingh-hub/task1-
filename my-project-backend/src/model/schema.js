const mongoose=require("mongoose")
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
    required:true
}
  ,
  password:{
    type:String,
    required:true
  }
});

const UsersModel = mongoose.model('Users', UserSchema);

module.exports={UsersModel}