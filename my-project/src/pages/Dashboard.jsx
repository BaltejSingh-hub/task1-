import { useEffect, useState } from "react";
import AccountBar from "../components/dashboard/AccountBar";
import NavBar from "../components/dashboard/NavBar";
import ProductCard from "../components/dashboard/ProductCard";
import PageIndex from "../components/PageIndex";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FilterDropDown from "../components/FilterDropDown";
import Cookies from 'js-cookie';

export const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 59.99,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "https://m.media-amazon.com/images/I/51pycg0MGxL.jpg",
    other_images:[
      {
        url:"https://m.media-amazon.com/images/I/51pycg0MGxL.jpg",
      },{
        url:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUVX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cFJaZ1lGZHFKcGJsSXgrL2F5L1JHUWtuVHYzMERCZURia3c5SzJFOTlPaHhNQ0ZhdnU4OTFpbitJRmo4UW5zYUxSUlVvWjUwQnQyV1pJd0R5enZ6RFE"
      },{
        url:"https://www.jiomart.com/images/product/original/rv5fhr7ftp/oshee-store-airbuds-pro-bluetooth-wireless-earphones-with-touchstone-charging-case-tws-earbuds-earphones-product-images-orv5fhr7ftp-p600365586-0-202304132340.jpg?im=Resize=(420,420)"
      },{
        url:"https://5.imimg.com/data5/SELLER/Default/2024/9/452465248/DW/WU/KD/231619297/wave-pro2-wireless-earbuds-500x500.webp"
      }
    ]
  },
  {
    id: 2,
    name: "Portable Charger",
    price: 24.99,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "https://m.media-amazon.com/images/I/61L-mHU13oL._SL1500_.jpg",
  },
  {
    id: 3,
    name: "Smart LED Bulb",
    price: 14.95,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image:
      "https://d1vfpdpyv21g5i.cloudfront.net/zunpulse/products_v5/bulb/D10000_1.jpg",
  },
  {
    id: 4,
    name: "Headphones",
    price: 199.99,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image:
      "https://avstore.in/cdn/shop/products/white_3_50f10e0c-d228-4ad2-92ca-39461b0993f7.png?v=1621081646&width=600",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: 69.5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "https://m.media-amazon.com/images/I/61AeGQhwjxL._SL1500_.jpg",
  },
  {
    id: 6,
    name: "Mini Projector",
    price: 129.0,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image:
      "https://m.media-amazon.com/images/I/31cBx8QaYSL._SX300_SY300_QL70_FMwebp_.jpg",
  },
];

const Dashboard = ({statusCode,setStatusCode}) => {
  const [products_1, setProducts_1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [ProductList,setProductList]=useState([])
  const navigate=useNavigate("")
  const [search,setSearch]=useState("")
  const [increasing_price,setIncreasing_price]=useState(1)
  const token=Cookies.get("token")
 


  function onPageChange(){
    setCurrentPage(currentPage)
    console.log("page change triggered",currentPage)

    
  }

  function PrevPage(){
    setCurrentPage(currentPage-1)
  }

  function NextPage(){
    setCurrentPage(currentPage-1)
  }

  useEffect( ()=>{
    
    async function fetchData(){

        try{

          const result= await axios({
            method:"GET",
            url:`http://localhost:3001/welcome/products?page=${currentPage}&search=${search}&order=${increasing_price}`,
            headers:{Authorization:`Bearer ${token}`}
          }).then ((e)=>{
            setProductList(e.data.ProductList)
            setStatusCode(e.status)
          })

          

        }catch(err){
            console.log("THIS IS THE CODE INSIDE TRY CATCH", setStatusCode(err.response.status))
        }
          
    }
    fetchData()
    
  },[currentPage,search,increasing_price,statusCode])

  return (
    <div className="pb-15">
      <AccountBar search={search} setSearch={setSearch}/>
      <NavBar />
      <div className="flex justify-end">
            <FilterDropDown increasing_price={increasing_price} setIncreasing_price={setIncreasing_price}/>
      </div>
      
      <div className="flex grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 py-5 px-2 gap-1 mt-5">
        {ProductList.map((product) => (
          <ProductCard
            index={product._id}
            img={product.img[0]}
            product={product.title}
            price={product.price}
            desc={product.desc}
            // showProductDetails={showProductDetails()}
          />
        ))}
        
      </div>
      
      <PageIndex className=""
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        onPageChange={onPageChange}
        PrevPage={PrevPage}
        NextPage={NextPage}
      />
    </div>
  );
};

export default Dashboard;

// {products.map((product)=>
//                     <div className="flex grid grid-cols-3 gap-4">
//                 <ProductCard index={product.id} img={product} product={product.name} price={product.price} desc={product.description}/>
//                 </div>
//                 )
//                 }
