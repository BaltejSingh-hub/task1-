const ProductCard=({index,img,product,price,desc})=>{
    return(
        <>  
<div
  key={index}
  className="bg-gray-200  shadow-md w-70 h-110 mx-auto flex flex-col items-center gap-6 pb-6 mb-6">
  <div className="flex-shrink-0 w-full h-auto bg-red-100 rounded-lg overflow-hidden">
        <img src={img} alt={product} className="object-cover w-full h-full" />
  </div>
  <div className="flex flex-col justify-between h-full">
    <h2 className="text-lg font-semibold text-gray-800 mb-1">{product}</h2>
    <p className="text-blue-600 font-medium mb-3 text-center">${price}</p>
    <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition">
      View
    </button>
  </div>
</div>

        </>
    )
}

export default ProductCard




// <div key={index} className="bg-gray-300 w-70 h-70 flex ml-20">
//                     <div name="image" className="bg-red-100 w-33 h-70 ">
//                          <img src={img} alt="" />
//                     </div>
//                     <div className="flex flex-col justify-center">
//                             <div name="product_name" className="p-3"><p>{product}</p></div>
//                              <div name="pricing" className="p-3"><p>$ {price}</p></div>
//                              <div name="description" className="p-3 w-37"><p>{desc}</p></div>
//                     </div>
//              </div>


