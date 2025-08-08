import { useState } from "react";
import SignUpButton from "../components/Button";
import { Input, Password } from "../components/Input";
import Options from "../components/Options";
import Slash from "../components/Slash";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";

const SignInCard=({selectPage,setSelectPage })=>{
    const [login,setLogin]=useState(false)
    const navigate=useNavigate()
    const handleInputChange=()=>{
        if(selectPage){
            setSelectPage(false)
        }else{
            setSelectPage(true)
        }
    }

    const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {

      try{
            const response=await axios.post("http://localhost:3001/welcome/signin", {
            email:values.email,
            password:values.password,
            }) 

            if(response.status===200){
              const token=response.data.token
              console.log(response)
              Cookies.set("token",token)
              console.log('Token stored in cookie');
              toast(response.data.msg)
              }

            setTimeout(()=>{
                  navigate("/")
            },1000)
          }catch(err){
              console.log("control has reached the catch")
              console.log(err.response.data.msg)
              toast(err.response.data.msg)
            }

        
        
        
    },
  });




  const [currentPage,setCurrentPage]=useState(true)

  const handlePage=()=>{
    if(currentPage==true){
        setCurrentPage(false)
    }else{
        setCurrentPage(true)
    }
        
  }

  const [icon, setIcon] = useState(false);
  const [type, setType] = useState("password");

  const handlepassword = () => {
    setIcon((prev) => !prev);
    if (icon) {
      setType("text");
    } else {
      setType("password");
    }
  };

  console.log(formik);

  return (
    <div
      style={{ boxShadow: "inset 0 0 17px gray" }}
      className="flex flex-col 
         sm:justify-start 
         sm:w-11/20 
         sm:rounded-3xl rounded-t-4xl rounded-b-none
         items-center 
         bg-white 
         w-screen  
         sm:h-auto 
         sm:mt-0
         mt-32
         pb-7
         px-0 sm:pd-40 sm:pt-25 pt-15 
         bg-green-500"
    >
      <div className="flex flex-col md-10">
        <p className="font-sans font-bold text-5xl">Sign In</p>
        <h6 className="font-serif text-stone-400 mt-1">
          Welcome Back
        </h6>

        <form onSubmit={formik.handleSubmit}>
          <div className="pt-3 sm:pt-5">
            <Input
              name={"email"}
              placeholder={"Email"}
              onChange={formik.handleChange}
              values={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
          </div>
          <div className="pt-3 sm:pt-5">
            <Password
              name={"password"}
              onChange={formik.handleChange}
              values={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
            />
          </div>

          <SignUpButton submit={"submit"} name="Sign in" />
        </form>
        <div className="flex mt-2 justify-center">
          <p className="text-stone-400 text-xs text-sm mr-2">
           Create account
          </p>
          <a className="text-xs underline text-blue-500" href="#" onClick={handleInputChange}>
            Sign up
          </a>
        </div>
        <div>
          <Slash />
        </div>
        <div>
          <Options />
        </div>
      </div>
    </div>
    )
    
}

export default SignInCard