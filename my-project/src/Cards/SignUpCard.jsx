import { useState } from "react";
import SignUpButton from "../components/Button";
import { Input, Password } from "../components/Input";
import Options from "../components/Options";
import Slash from "../components/Slash";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import SignInCard from "./SignInCard";

const SignUpCard = ({ value, onValueChange }) => {
  const handleInputChange = () => {
    if (value) {
      onValueChange(false);
    } else {
      onValueChange(true);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    username: Yup.string()
      .min(2)
      .max(10)
      .matches(/^[A-Z][a-z0-9_-]{3,19}$/, "First letter must be capital")
      .required(),
    password: Yup.string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        `Choose a more strong password`
      )
      .required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Your form is submitted, for the values", console.log(values));
    },
  });

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
        <p className="font-sans font-bold text-5xl">Sign up</p>
        <h6 className="font-serif text-stone-400 mt-1">
          Join our Journalist network
        </h6>

        <form onSubmit={formik.handleSubmit}>
          <div className="pt-3 sm:pt-5">
            <Input
              name={"username"}
              placeholder={"Username"}
              onChange={formik.handleChange}
              value={formik.values.username}
              error={formik.errors.username}
              touched={formik.touched.username}
            />
          </div>
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

          <SignUpButton submit={"submit"} name="Sign up" />
        </form>
        <div className="flex mt-2 justify-center">
          <p className="text-stone-400 text-xs text-sm mr-2">
            Already have an account ?
          </p>
          <a
            className="text-xs underline text-blue-500"
            href="#"
            onClick={handleInputChange}
          >
            Sign in
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
  );
};
export default SignUpCard;
