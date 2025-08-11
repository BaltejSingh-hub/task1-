const mongoose=require("mongoose")

const ProductSchema= new mongoose.Schema({
  title:String,
  price:Number,
  img:String,
  desc:String,
  img:{
    type:[String]
  },
  
},{timestamps:true}
)

module.exports={ProductSchema}