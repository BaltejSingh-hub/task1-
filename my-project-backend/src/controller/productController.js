const axios = require("axios");
const { ProductsModel } = require("../model/schema");

// const ProductData=result.data
// .map((e)=>{
//     return {
//         id:e.id,
//         title:e.title,
//         price:e.price,
//         desc:e.description,
//         img:e.images
//     }
// })

// try{
//         const save_data=await ProductsModel.insertMany(ProductData)
//         console.log("Inserted products",save_data)
// }catch(err){
//         console.log("In the catch finding error")
// }

// http://localhost:3001/welcome/products?page="
// get

const Products = async (req, res) => {
  console.log("Control reached products function")
  const page = parseInt(req.query.page) || 1;
  const limit = 8;

  const order = parseInt(req.query.order) || 1;

  const search = req.query.search || "";

  const filter = {
    title: { $regex: search, $options: "i" },
  };

  try {
    const result = await ProductsModel.find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ price: order });

    const count = await ProductsModel.find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .countDocuments();

    res.send(
      (data = {
        ProductList: result,
        count,
      })
    );
  } catch (err) {
    console.log(err);
  }
};

// http://localhost:3001/welcome/productdetails?objectId="

const Product_details = async (req, res) => {
  const objectId = req.query.objectId;
  const result = await ProductsModel.findById(objectId).then((e) => {
    res.json({
      msg: e,
    });
    console.log(e);
  });
};

module.exports = { Products, Product_details };

// Add the product details to the DB

//   const result= await axios({
//         method:"GET",
//         url:"https://api.escuelajs.co/api/v1/products"
//     })

//         const ProductData=result.data
//     .map((e)=>{
//         return {
//             id:e.id,
//             title:e.title,
//             price:e.price,
//             desc:e.description,
//             img:e.images
//         }
//     })

//    try{
//             const save_data=await ProductsModel.insertMany(ProductData)
//             console.log("Inserted products",save_data)
//     }catch(err){
//             console.log("In the catch finding error")
//     }
