import { useEffect, useState } from "react"
import AccountBar from "../components/dashboard/AccountBar"
import NavBar from "../components/dashboard/NavBar"
import { products } from "./Dashboard"
import FilterDropDown from "../components/FilterDropDown"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import axios from "axios";
import { getFirstNWords } from "../utils/util"
import Cookies from 'js-cookie';

const Product_details=()=>{
    console.log("Hi")
    console.log(products)
    // const navigate=useNavigate("")
    const {id}=useParams()
    const [product_more_details,setProduct_more_details]=useState({})
    const [images,setImages]=useState([])
    const [imageIndex,setimageIndex]=useState(0)
    const token=Cookies.get("token")

    
    function SelectImage(e){
        setimageIndex(e)
    }

    function CollectImages(){
        setImages(product_more_details.img)
    }
    
    useEffect(()=>{
        // console.log("this is the objectId",id)
        async function fetchData(){
            const result= await axios({
                method:"GET",
                url:`http://localhost:3001/welcome/productdetails?objectId=${id}`,
                headers:{Authorization:`Bearer ${token}`}
            }).then((e)=>{ 
                console.log("The useEffect for the specific product detail is being hit")
                
                setProduct_more_details(e.data.msg)

            })
        }
        fetchData()
        CollectImages()
    },[])

    function CollectImages(){
        setImages(product_more_details.img)
    }
    


    // console.log(products[0].other_images[0].url)
    // console.log("This array for images",images)
    return(
        <>
            <AccountBar/>
            <NavBar/>
            <div className="flex justify-center mt-10">

                    <div name="shows_images" className="flex flex-col mt-4">
                        {product_more_details?.img?.map((e,index)=> 
                             <div key={index}name="img_1" className={`w-14 h-16 m-4 ${imageIndex===index ? 'border-1  border-black-200':""}`} onClick={()=>{SelectImage(index)}}>
                            <img
                                className="w-full h-full transform transition-transform duration-300 hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[1px]"
                                src={e}
                                alt=""
                            />
                        </div>
                        )}

                        {/* <div name="img_1" className="w-14 h-16 m-4">
                            <img
                                className="w-full h-full transform transition-transform duration-300 hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[1px]"
                                src="https://m.media-amazon.com/images/I/51pycg0MGxL.jpg"
                                alt=""
                            />
                        </div> */}

                        {/* <div name="img_2" className="bg-black w-14 h-16 m-4">
                            <img className="w-14 h-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUVX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cFJaZ1lGZHFKcGJsSXgrL2F5L1JHUWtuVHYzMERCZURia3c5SzJFOTlPaHhNQ0ZhdnU4OTFpbitJRmo4UW5zYUxSUlVvWjUwQnQyV1pJd0R5enZ6RFE" alt="" />
                        </div> */}

                        {/* <div name="img_3" className="bg-black w-14 h-16 m-4">
                            <img className="w-14 h-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" src="https://www.jiomart.com/images/product/original/rv5fhr7ftp/oshee-store-airbuds-pro-bluetooth-wireless-earphones-with-touchstone-charging-case-tws-earbuds-earphones-product-images-orv5fhr7ftp-p600365586-0-202304132340.jpg?im=Resize=(420,420)" alt="" />
                        </div>
                         */}

                        {/* <div name="img_4" className="bg-black w-14 h-16 m-4">
                            <img className="w-14 h-16  shadow-[0_8px_30px_rgb(0,0,0,0.12)]" src="https://5.imimg.com/data5/SELLER/Default/2024/9/452465248/DW/WU/KD/231619297/wave-pro2-wireless-earbuds-500x500.webp" alt="" />
                        </div> */}

                    </div>
                    <div name="big_image" className="bg-red-300 w-98 h-108 m-4 relative">
                            <img className="w-98 h-108 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" src={product_more_details?.img?.[imageIndex]} alt="" />
                    </div>
                    <div>
                        <div name="Product_name" className="w-76 h-20 mx-4 mt-4 mb-1 flex items-center">
                            <p className="font-medium text-4xl">
                                {product_more_details.title}
                            </p>
                        </div>
                        <div name="pricing" className="w-36 h-10 ml-4">
                            <p className="text-blue-600 font-medium text-2xl mb-3">${product_more_details.price}</p>
                        </div>
                        <div name="desc" className="w-96 h-auto m-4 text-justify">
                            <p>{product_more_details.desc}</p>
                        </div>
                        <div name="quantity" className=" w-auto h-7 m-4">
                            <Quantity_Selector/>
                        </div>
                        <div name="Add" className=" w-26 h-12 m-4">
                            <button className="w-26 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition hover:cursor-pointer">
                                Add to Cart
                            </button>

                        </div>
                    </div>
                    

            </div>

        </>        
    )
}

const Quantity_Selector=()=>{
    const [quantity,setQuantity]=useState(1)

    const increaseCount=()=>{
        setQuantity(quantity+1)
    }

    const decreaseCount=()=>{
        setQuantity(quantity-1)
    }

    return(
        <div className="flex items-center space-x-2">
      <button
        onClick={decreaseCount}
        disabled={quantity===1}
        className={`px-3 py-1 bg-gray-200 text-gray-800 rounded 
        ${(quantity<=1)?'hover:cursor-not-allowed':'hover:cursor-pointer'}
        hover:bg-gray-300`}
      >
        -
      </button>

      <span className="px-4 py-1 border border-gray-300 rounded text-center min-w-[2rem]">
        {quantity}
      </span>

      <button
        onClick={increaseCount}
        className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 hover:cursor-pointer"
      >
        +
      </button>
    </div>
    )
}
export default Product_details


// // the 1st show image in the 
// <div name="img_1" className=" w-14 h-16 m-4">
//                             <img className="w-14 h-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-1" src="https://m.media-amazon.com/images/I/51pycg0MGxL.jpg" alt="" />
//                         </div>