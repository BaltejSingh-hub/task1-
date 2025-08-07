import { Formik } from "formik";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const Input = ({
  name,
  placeholder,
  onChange,
  value,
  error,
  touched,
}) => {
  return (
    <>
      <input
        name={name}
        onChange={onChange}
        className="border-b-2 border-indigo-500 h-5 mt-5 w-full focus:outline-none text-xs"
        placeholder={placeholder}
        value={value}
      />
      {touched && error && <p className="text-red-500 pt-2">{error}</p>}
    </>
  );
};

export const Password = ({ name, touched, error,onChange }) => {
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

  return (
    <>
      <div className="flex justify-items-end items-center border-b-2 border-indigo-500 h-5 mt-5 w-83.2">
        <input
          name={name}
          className="w-75 focus:outline-none text-xs"
          type={type}
          placeholder={"Password"}
          onChange={onChange}
        ></input>

        <span className="pb-4">
          {icon ? (
            <FaEye
              onClick={handlepassword}
              style={{ fontSize: "20px", color: "gray" }}
            />
          ) : (
            <FaEyeSlash
              onClick={handlepassword}
              style={{ fontSize: "20px", color: "gray" }}
            />
          )}
        </span>
      </div>
      
        {touched && error && <p className="text-red-500 pt-2 w-83.2">{error}</p>}
      
    </>
  );
};

// Eye icon open SVG

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg> */
}

// export const inputvalue=(value,onchange,type,error)=>{
//     const [icon,setIcon]=useState(false)
//     const [type,setType]=useState("password")
//  const handlepassword=()=>{
//     setIcon(prev=>!prev)
//     if(icon){
//         setType("text")
//     }else{
//         setType("password")
//     }
//  }

//     return(
//         <div className="flex justify-items-end items-center border-b-2 border-indigo-500 h-5 mt-5 w-83.2">
//             <input className="w-75 focus:outline-none text-xs" type={type} placeholder={"Password"}></input>

//             <span className="pb-4">
//                     {icon?<FaEye onClick={handlepassword} style={{fontSize:"20px", color:"gray"}}/>:<FaEyeSlash onClick={handlepassword} style={{fontSize:"20px", color:"gray"}} />}
//             </span>
//         </div>
//     )
// }
