import { useState } from "react";
import AccountBar from "../components/dashboard/AccountBar";
import NavBar from "../components/dashboard/NavBar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEdit } from "react-icons/fa";
import DeleteAccountModel from "../components/DeleteAccountModel";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [open, setOpen] = useState(false)
  const handleProfile = () => {

    if (showProfile) {
      setShowProfile(false);
    } else {
      setShowProfile(true);
    }
  };

  const [show,setShow]=useState(false)

  const handleModel=()=>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }

  return (
    <>
      {show&&<DeleteAccountModel/>}
      <div className="w-screen bg-brand-700 h-50">
        <AccountBar className="" />
        <NavBar />
      </div>
      <div className="flex justify-center">
        <div
          className={`bg-white rounded-4xl w-3/5 h-auto pb-9 absolute top-35 z-0 shadow-2xl`}
        >
          {/* ${
      ${showProfile?
     ? 'h-220' : 'h-115'
  } */}

          <div className="mt-40 flex flex-col items-center">
            <p className="text-center font-sans font-normal text-4xl pb-3">
              Robert Perry
            </p>
            <p className="text-center font-sans font-normal text-xl pb-3">
              jordan.miller92@example.com
            </p>
            <p className="text-center font-sans font-normal text-xl">
              Username: shadowfox_87
            </p>

            <div className="flex justify-center">
              {showProfile ? null : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleProfile}
                    style={{ boxShadow: "inset 0 0 17px gray" }}
                    className="bg-brand-500 mt-7 w-80 h-13 font-bold rounded-xl text-white text-lg hover:cursor-pointer hover:bg-brand-550 text-bold"
                  >
                    Edit Profile
                  </button>

                  <button
                    type="button"
                    onClick={handleModel}
                    style={{ boxShadow: "inset 0 0 17px red" }}
                    className="bg-red-500 mt-7 w-80 h-13 font-bold rounded-xl text-white text-lg hover:cursor-pointer hover:bg-red-700 text-bold">
                    Delete Account
                  </button>

                </div>
              )}
            </div>

            {/* // Edit profile form */}
            {showProfile ? (
              <Edit_Profile
                showProfile={showProfile}
                setShowProfile={setShowProfile}
              />
            ) : null}

            {/* End of edit profile  */}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="h-40 w-40 rounded-full absolute top-20 z-10"></div>
        <img
          className="h-40 w-40 rounded-full absolute top-30 z-1"
          src="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
          alt=""
        />
      </div>
    </>
  );
};

const Edit_Profile = ({ showProfile, setShowProfile }) => {
  const handleProfile = () => {
    if (showProfile) {
      setShowProfile(false);
    } else {
      setShowProfile(true);
    }
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2)
      .max(10)
      .matches(/^[A-Z][a-z0-9_-]{3,19}$/, "First letter must be capital")
      .required(),
    email: Yup.string().email().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Your form is submitted, for the values");
    },
  });

  return (
    <div className="mt-5">
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto bg-white p-6 rounded-xl shadow-md space-y-5 "
      >
        <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>

        {/* Username */}
        <div className="flex flex-col items-center relative">
              <div className="bg-red-500 h-20 w-20 rounded-full relative">
                  <img className="rounded-full z-0" src="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg" alt="" />
              </div>
              <div className="h-5 w-5 rounded-full bg-brand-500 z-10 absolute top-17 flex justify-center items-center">
                  <label htmlFor="upload_pic">
                          <FaEdit className="text-white size-4 hover:cursor-pointer" />
                  </label>
                  <input type="file" accept=".jpg, .jpeg, .png" hidden name="upload_pic" id="upload_pic"/>
                  
                  
              </div>
              
        </div>
        
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.errors.username}
            touched={formik.touched.username}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
            placeholder="Enter your username"
          />
          {formik.touched.username && formik.errors.username && (
          <p className="text-red-500 m-0 p-0">{formik.errors.username}</p>
        )}
        </div>
        
        

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
            placeholder="Enter your email"
          />
                   {formik.touched.email && formik.errors.email && (
               <p className="text-red-500 m-0 p-0">{formik.errors.email}</p>
        )}
        </div>
       
       
     
        

        {/* Profile Description */}
       

        {/* Submit Button */}
        <div className="text-right flex justify-between px-2">
          <button
            type="button"
            onClick={handleProfile}
            className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-brand-600 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-brand-500 text-white px-3 py-2 rounded-md hover:bg-brand-600 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;



// for accepting image 
//  <div>
//           <label
//             htmlFor="profilePic"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Profile Picture
//           </label>
//           <input
//             type="file"
//             id="profilePic"
//             name="profilePic"
//             accept="image/*"
//             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-500 file:text-white hover:file:bg-brand-600"
//           />
//         </div>
















//  <div className="w-screen bg-brand-500 h-50">

//             </div>
// generate me a form to edit usernname, email , edit profile and make it w-3/5
//                 <div className="flex justify-center ">
//                     <div className=" h-40 w-40 rounded-full absolute top-20"></div>
//                     <img className="h-40 w-40 rounded-full absolute top-20" src="https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert.png" alt="" />

//                 </div>
//                 <div className="flex justify-center">
//                         <div className="bg-red-200 rounded-4xl w-3/5 h-150 absolute top-35"></div>
//                 </div>
