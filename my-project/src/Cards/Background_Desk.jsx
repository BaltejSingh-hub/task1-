import { useState } from "react"
import SignInCard from "./SignInCard"
import SignUpCard from "./SignUpCard"

const Background_Desk=()=>{
    const [selectPage,setSelectPage]=useState(false)
        
    return(
        <div className="md:h-screen md:w-screen flex justify-center items-center">
                 <div className="flex justify-center w-250 h-150 bg-brand-500 rounded-3xl shadow-2xl">
          <div className="flex">
              <span className="pt-45"><img src="/camera.png" className="absolute bottom-20px"/></span>
              <span className="pt-32 pl-15"><img src="/person.png" className=""/></span>
              <div className="flex flex-col justify-between">
                    <span className="pl-10 pt-15"><img src="/pencil.png" className="absolute bottom-20px"/></span>
                    <span className="relative left-15 bottom-8"><img src="/book.png" className=""/></span>
              </div>
              
          </div>
          {/* <div className="pt-17 pr-22"><img src="/book.png" className=""/></div> */}
          {/* <div className="flex"> */}


          {/* // make the Sign upcard here */}
           
           {/* <SignInCard/> */}
          {(selectPage)?<SignUpCard selectPage={selectPage} setSelectPage={setSelectPage}/>:<SignInCard selectPage={selectPage} setSelectPage={setSelectPage}/>}
          {/* <SignUpCard/> */}

          {/* make the sign up card till here */}


          {/* </div> */}
        </div>
        </div>
       
    )
}

export default Background_Desk