import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const[view,setView] =  useState(false);
    const[state,setState] = useState({
        name:"",
        email:"",
        password:""
    })

    const stateClick = async(e)=>{
        e.preventDefault();
        try{
          const Api = await axios.post("https://bharatregistration-api.onrender.com/bharat/register",state);
          const data = Api.data;
          console.log(data);
          if(data.msg == "User is successfully Registered"){
            toast.success("User is successfully Registered",{autoClose:3000});
          }
          else toast.warn("User is Already Registered",{autoClose:3000})
        }
        catch(err){
          console.log("Api error" , err);
        }
        console.log(state);
        setState({
            name:"",
            email:"",
            password:""
        })
    }
 
    const eyeClick = ()=>{
        setView(!view)
    }
    
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={stateClick}>
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  value={state.name}
                  onChange={(e)=>setState({...state,name:e.target.value})}
                  className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={state.email}
                  onChange={(e)=>setState({...state,email:e.target.value})}
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={view ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={state.password}
                  onChange={(e)=>setState({...state,password:e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-9 pl-2"
                />
                <div onClick={eyeClick} className="absolute top-2 right-3 text-lg">
                {
                    view ? <IoEyeOutline/> : <FaRegEyeSlash/>
                }
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Registration