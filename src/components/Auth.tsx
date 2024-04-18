import { ChangeEvent } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { SignupInput } from "@hardikshah343/medium_common";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostsInput] = useState<SignupInput>({    
    "email": "",
    "password": "",
    "name": "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, {
        email: postInputs.email.toLowerCase(),
        password: postInputs.password,
        name: postInputs.name
      });
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch(e) {
      console.log(e);
      alert(`Unable to ${type === "signin" ? "signin" : "signup"}`);
    }
  }

  return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
      <div>
        <div className="mb-5 px-10">
          <div className="text-3xl font-extrabold">
            {type === "signin" ? "Log into your account" : "Create an account"}            
          </div>
          <div className="mt-2 text-slate-400">
            {type === "signin"? "Don't have and account?": "Already have an account?"}
            <Link className="pl-2 underline" to={type==="signin" ? "/signup": "/signin"}>
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>
        </div>
        <div>
          { type === "signup" ? 
          <LabelledInput 
            label="Name"
            placeholder="Anonymous" 
            onChange={(e) => {
              setPostsInput({
                ...postInputs,
                name: e.target.value,
            })        
          }}/>
          : null}
          <LabelledInput 
            label="Email"
            placeholder="Username required" 
            onChange={(e) => {
              setPostsInput({
                ...postInputs,
                email: e.target.value,
            })        
          }}/>
          <LabelledInput 
            label="Password"
            type={"password"}
            placeholder="Password required" 
            onChange={(e) => {
              setPostsInput({
                ...postInputs,
                password: e.target.value,
            })            
          }}/>
          <button 
            onClick={sendRequest}
            type="button" 
            className="mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
            dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
        </div>
      </div>
    </div>
  </div>
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e : ChangeEvent<HTMLInputElement>) => void;
  type ?: string;
}

function LabelledInput({label, placeholder, onChange, type} : LabelledInputType) {
  return <div>
    <label className="block mb-2 text-sm text-black font-bold">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder={placeholder} required />
  </div>
}