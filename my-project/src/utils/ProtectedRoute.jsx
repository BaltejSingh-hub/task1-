import Cookies from "js-cookie";
import { Navigate,Outlet } from "react-router-dom";


const ProtectedRoute=({statusCode,setStatusCode})=>{

    const token = Cookies.get("token");
    
    const isAuthenticated=token

     console.log("INSIDE THE PROTECTED CODE for authenticated",isAuthenticated)
    console.log("INSIDE THE PROTECTED CODE",statusCode)

    return(
        <>
            {isAuthenticated && statusCode!==(401)?<Outlet/>:<Navigate to="/signup" replace/>}
        </>
    )
}

export default ProtectedRoute