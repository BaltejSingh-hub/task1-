import { useNavigate } from "react-router-dom";

const NavBar=()=>{

  const navigate = useNavigate();

    const go_to_dashboard=()=>{
            navigate('/')
    }
   

    return(
        <>
<div className="bg-brand-500 w-screen h-12 flex items-center justify-center gap-4 px-4">
  <button onClick={go_to_dashboard}className="bg-white text-brand-500 text-xl font-semibold px-4 py-1 rounded-md hover:bg-gray-100 transition hover:cursor-pointer">
    Home
  </button>
  <button className="bg-white text-brand-500 text-xl font-semibold px-4 py-1 rounded-md hover:bg-gray-100 transition hover:cursor-pointer">
    Products
  </button>
  <button className="bg-white text-brand-500 text-xl font-semibold px-4 py-1 rounded-md hover:bg-gray-100 transition hover:cursor-pointer">
    About
  </button>
  <button className="bg-white text-brand-500 text-xl font-semibold px-4 py-1 rounded-md hover:bg-gray-100 transition hover:cursor-pointer">
    Filter
  </button>
</div>

</>
    )
}

export default NavBar