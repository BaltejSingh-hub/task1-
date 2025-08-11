import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const AccountBar=({search,setSearch})=>{
    const navigate = useNavigate();

    const go_to_profile=()=>{
            navigate('/profile')
    }
    const go_to_dashboard=()=>{
            navigate('/')
    }
    const logout=()=>{
        Cookies.remove("token")
        navigate('/signup')
    }

    return(
        <>
            <div className="px-5 bg-brand-700 w-screen h-15 flex items-center justify-between">
                <div className="w-15 h-12 flex items-center">
                    <img src="https://www.pngplay.com/wp-content/uploads/13/Symbol-Logo-Transparent-File.png" alt="" />
                </div>
                <div className=" w-135 h-5 flex items-center">
                    
<form class="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" onChange={(e)=>{setSearch(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>

                </div>
                <div className=" mr-8 w-15 h-11 flex items-center mx-5">
                    <img onClick={go_to_profile} className="h-7 w-auto hover:cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
                    <img className="pl-2 h-7 w-auto hover:cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/8310/8310386.png" alt="" />
                    <img className="h-6 w-auto pl-2 hover:cursor-pointer"src="https://icons.veryicon.com/png/o/internet--web/website-icons/logout-8.png" alt="" onClick={logout} />
                </div>
            </div>
        </>
    )
}

export default AccountBar