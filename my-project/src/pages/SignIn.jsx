import { useState } from "react"
import SignInCard from "../Cards/SignInCard"
import SignUpCard from "../Cards/SignUpCard"


const SignIn=({})=>{
    const [value,setValue]=useState(true)

    const handleChildValue=(newValue)=>{
        setValue(newValue)
    }

    return(
        <div className="bg-brand-500 sm:bg-white h-screen w-screen flex justify-center items-center">
        <div className="flex justify-end w-250 h-150 bg-brand-500 rounded-3xl shadow-2xl">
          <div className="flex">
              <span className="pt-45"><img src="/camera.png" className="absolute bottom-20px"/></span>
              <span className="pt-32 pl-15"><img src="/person.png" className=""/></span>
              <div className="flex flex-col justify-between">
                    <span className="pl-10 pt-15"><img src="/pencil.png" className="absolute bottom-20px"/></span>
                    <span className="relative left-15 bottom-8"><img src="/book.png" className=""/></span>
              </div>
              
          </div>


        {value?
                <SignInCard value={value} onValueChange={handleChildValue}/>
              :
                 <SignUpCard value={value} onValueChange={handleChildValue}/> 
            
        }
            
        

          {/* // make the Sign upcard here */}
           {/* {value:<>
                <SignInCard value={value} onValueChange={handleChildValue}/>
           </>?<> */}
                
           {/* </>} */}

          {/* <SignUpCard/> */}

          {/* make the sign up card till here */}


          {/* </div> */}
        </div>
        </div>
    )
}

export default SignIn